// Feedback endpoint used by <FeedbackWidget/>, /feedback, and page-interest forms.
// HARD RULE: this route only writes the `feedback` queue. It never inserts
// topic_requests, never calls generate-coming-soon scripts, and never treats
// Suggestion / Content Request as a new_page / topic event.

import { NextRequest, NextResponse } from "next/server"
import { submitFeedbackAction } from "@/app/actions/feedback"
import { rateLimit, getClientIp } from "@/lib/rate-limit"
import { forceFeedbackIntent, normalizeFeedbackCategory } from "@/lib/submission-intent"

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const limit = rateLimit(`feedback:${ip}`, 5, 10 * 60 * 1000)
  if (!limit.allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${limit.retryAfter}s.` },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    )
  }

  const body = await req.json().catch(() => ({}))
  const {
    rating,
    category,
    type,
    message,
    email,
    page,
    website,
    page_title,
    // Discarded — clients cannot promote feedback into a topic request.
    intent: _intent,
    channel: _channel,
    topic_title: _topicTitle,
    topic: _topic,
  } = body as {
    rating?: number
    category?: string
    type?: string
    message?: string
    email?: string
    page?: string
    website?: string
    page_title?: string
    intent?: string
    channel?: string
    topic_title?: string
    topic?: string
  }

  // Honeypot – reject silently if filled.
  if (website && website !== "") {
    return NextResponse.json({ message: "Thank you for your feedback." })
  }

  const resolvedCategory = normalizeFeedbackCategory(category) ?? normalizeFeedbackCategory(type)
  if (!resolvedCategory) {
    return NextResponse.json({ error: "Invalid feedback category" }, { status: 400 })
  }

  const { intent } = forceFeedbackIntent()

  // Resolve full page URL (widget may send a relative path).
  const origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null)
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : origin && page
        ? `${origin}${page.startsWith("/") ? page : `/${page}`}`
        : null

  const result = await submitFeedbackAction({
    category: resolvedCategory,
    rating: typeof rating === "number" ? rating : undefined,
    message: message ?? "",
    page,
    page_url: pageUrl ?? undefined,
    page_title,
    email,
    ip,
    intent,
    channel: "feedback",
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 400 })
  }

  return NextResponse.json({
    message: result.message,
    intent,
  })
}
