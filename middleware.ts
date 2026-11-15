import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isAccountsGateEnabled } from "@/lib/accounts-gate"

const COOKIE_NAME = "intel-session"
const encoder = new TextEncoder()
const JWT_SECRET = process.env.JWT_SECRET || "intel-academy-dev-only-secret"

// Roles allowed into /admin (keep in sync with lib/auth.ts ADMIN_ROLES).
const ADMIN_ROLES = ["admin", "moderator", "editor"]

// Known AI crawlers and scrapers that ignore robots.txt
const BLOCKED_BOTS = [
  "GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web",
  "Diffbot", "Bytespider", "cohere-ai", "PerplexityBot", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "Applebot-Extended", "Google-Extended", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx", "curl", "wget",
  "Go-http-client", "Java/", "okhttp",
]

// Paths that are safe from rate limiting (static assets)
const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

// Answer-engine surfaces: allow crawlers to read pricing, FAQs, and the brief tool.
const AEO_PATHS = ["/llm.txt", "/llms.txt", "/faq", "/tools/academy-brief"]

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 60 // 60 requests per minute per IP

/** Decode a base64url string to bytes (Edge-safe). */
function base64urlToBytes(input: string): Uint8Array {
  let b64 = input.replace(/-/g, "+").replace(/_/g, "/")
  const pad = b64.length % 4
  if (pad) b64 += "=".repeat(4 - pad)
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

/** Verify an HS256 JWT with Web Crypto (Edge-safe). Returns payload or null. */
async function verifyHs256(token: string, secret: string): Promise<Record<string, unknown> | null> {
  const parts = token.split(".")
  if (parts.length !== 3) return null
  const [h, p, s] = parts
  const keyData = new Uint8Array(encoder.encode(secret))
  const signature = new Uint8Array(base64urlToBytes(s))
  const signedData = new Uint8Array(encoder.encode(`${h}.${p}`))
  const key = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["verify"])
  const valid = await crypto.subtle.verify("HMAC", key, signature, signedData)
  if (!valid) return null
  const payload = JSON.parse(new TextDecoder().decode(new Uint8Array(base64urlToBytes(p))))
  if (payload.exp && Date.now() / 1000 > payload.exp) return null
  return payload
}

const FREE_DOWNLOADS = new Set([
  "estimative-language-dictionary.pdf",
  "cognitive-bias-checklist.pdf",
])

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", url)

  // === Download gate: public /downloads files stay blocked while accounts are on ===
  if (isAccountsGateEnabled() && /^\/downloads\/[^/]+\.(pdf|xlsx)$/i.test(url)) {
    const file = url.split("/").pop() || ""
    const token = request.cookies.get(COOKIE_NAME)?.value
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", "/downloads")
    if (!token) return NextResponse.redirect(loginUrl)
    try {
      const payload = await verifyHs256(token, JWT_SECRET)
      if (!payload) return NextResponse.redirect(loginUrl)
      const role = typeof payload.role === "string" ? payload.role : ""
      const staff = ADMIN_ROLES.includes(role)
      const entitlement = typeof payload.entitlement === "string" ? payload.entitlement : ""
      const plan = typeof payload.plan === "string" ? payload.plan : "free"
      const effective = entitlement || (plan === "video" ? "video" : plan === "pro" || plan === "early" ? "written_library" : "free")
      const allowed = staff || FREE_DOWNLOADS.has(file) || effective === "written_library" || effective === "video"
      if (!allowed) {
        return new NextResponse("This file is part of the Written Library. Checkout is not live.", { status: 403 })
      }
    } catch {
      return NextResponse.redirect(loginUrl)
    }
  }

  // === Admin auth gate: /admin requires an admin-capable role ===
  if (url.startsWith("/admin")) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", url)
    const token = request.cookies.get(COOKIE_NAME)?.value
    if (!token) return NextResponse.redirect(loginUrl)
    try {
      const payload = await verifyHs256(token, JWT_SECRET)
      if (!payload || typeof payload.role !== "string" || !ADMIN_ROLES.includes(payload.role)) {
        return NextResponse.redirect(loginUrl)
      }
    } catch {
      return NextResponse.redirect(loginUrl)
    }
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  const isAeoPath = AEO_PATHS.some((path) => url === path || url.startsWith(`${path}/`))

  // === 1. Security Headers ===
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  if (!isAeoPath) {
    response.headers.set("X-Robots-Tag", "noai, noimageai")
  }

  // === 2. Block known AI crawlers / scrapers (AEO paths stay readable) ===
  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_BOTS) {
    if (uaLower.includes(bot.toLowerCase())) {
      if (isAeoPath) break
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
    }
  }

  // === 3. Rate limiting (skip static assets) ===
  if (!SAFE_PATHS.some((path) => url.startsWith(path))) {
    const now = Date.now()
    const entry = rateLimit.get(ip)
    if (!entry || now > entry.resetAt) {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      entry.count++
      if (entry.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        })
      }
    }
    if (rateLimit.size > 10000) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const [key, val] of rateLimit) {
        if (val.resetAt < cutoff) rateLimit.delete(key)
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico).*)",
  ],
}
