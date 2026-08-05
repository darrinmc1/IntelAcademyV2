// app/api/feedback/route.ts – feedback endpoint used by <FeedbackWidget/>.
// Validates + persists via submitFeedbackAction (writes to `feedback` table
// and notifies the admin inbox through Resend).

import { NextRequest, NextResponse } from "next/server";
import { submitFeedbackAction } from "@/app/actions/feedback";

// Simple in-memory rate limit (per-server-instance – matches /api/subscribe).
const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { rating, category, message, email, page, website } = body as {
    rating?: number;
    category?: string;
    message?: string;
    email?: string;
    page?: string;
    website?: string;
  };

  // Honeypot – reject silently if filled.
  if (website && website !== "") {
    return NextResponse.json({ message: "Thank you for your feedback." });
  }

  // Resolve full page URL (widget may send a relative path).
  const origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null);
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : origin && page
        ? `${origin}${page.startsWith("/") ? page : `/${page}`}`
        : null;

  const result = await submitFeedbackAction({
    category: category ?? "",
    rating: typeof rating === "number" ? rating : undefined,
    message: message ?? "",
    page,
    page_url: pageUrl ?? undefined,
    email,
    ip,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 400 });
  }

  return NextResponse.json({ message: result.message });
}
