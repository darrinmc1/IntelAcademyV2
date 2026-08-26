import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getUserPlan } from "@/lib/db"
import { getPathIntroEntry } from "@/data/path-intro-videos"
import { canPlayPathIntro } from "@/lib/path-intro-access"
import { isPathIntroUploaded } from "@/lib/path-intro-blob"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

/**
 * Status only — never returns a blob or signed URL.
 * Used by PathIntroPlayer to pick missing / locked / playable.
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  const ip = getClientIp(request)
  const limited = rateLimit(`path-intro-status:${ip}`, 60, 60_000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    )
  }

  const entry = getPathIntroEntry(slug)
  if (!entry) {
    return NextResponse.json({ error: "Unknown path intro" }, { status: 404 })
  }

  const user = await getCurrentUser()
  let plan = user?.plan
  if (user) {
    try {
      plan = await getUserPlan(user.id)
    } catch {
      // JWT plan is enough if the DB lookup fails
    }
  }

  const allowed = canPlayPathIntro(user ? { role: user.role, plan } : null)
  const uploaded = await isPathIntroUploaded(entry.slug)

  return NextResponse.json({
    slug: entry.slug,
    title: entry.title,
    filename: entry.filename,
    durationSeconds: entry.durationSeconds,
    uploaded,
    allowed,
  })
}
