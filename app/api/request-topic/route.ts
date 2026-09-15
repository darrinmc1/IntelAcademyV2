import { NextResponse } from "next/server"
import { rateLimit, getClientIp } from "@/lib/rate-limit"
import { submitTopicRequestAction } from "@/app/actions/topic-requests"
import { requireTopicRequestIntent } from "@/lib/submission-intent"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Explicit "request a new lesson topic" endpoint.
 * Writes topic_requests only. Never writes the feedback table and never
 * generates coming-soon pages from this request.
 */
export async function POST(request: Request) {
  try {
    const limit = rateLimit(`request-topic:${getClientIp(request)}`, 5, 10 * 60 * 1000)
    if (!limit.allowed) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${limit.retryAfter}s.` },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
      )
    }

    const body = await request.json().catch(() => ({}))
    const {
      email,
      topic,
      topic_title,
      description,
      message,
      category,
      experience_level,
    } = body as {
      email?: string
      topic?: string
      topic_title?: string
      description?: string
      message?: string
      category?: string
      experience_level?: string
    }

    const topicTitle = String(topic_title || topic || "").trim()
    const details = String(description || message || "").trim() || topicTitle
    const gated = requireTopicRequestIntent({ topicTitle, description: details })
    if (gated.ok === false) {
      return NextResponse.json({ error: gated.message }, { status: 400 })
    }

    if (email && (!EMAIL_RE.test(String(email)) || String(email).length > 254)) {
      return NextResponse.json({ error: "Please provide a valid email" }, { status: 400 })
    }
    if (topicTitle.length > 200 || details.length > 2000) {
      return NextResponse.json({ error: "Your submission is too long" }, { status: 400 })
    }

    const result = await submitTopicRequestAction({
      topic_title: topicTitle,
      description: details,
      category,
      experience_level,
      email: email?.trim() || undefined,
    })

    if (!result.ok) {
      return NextResponse.json({ error: result.message }, { status: 400 })
    }

    return NextResponse.json({
      message: result.message,
      id: result.id,
      intent: gated.intent,
      emailWarning: result.emailWarning,
    })
  } catch (error) {
    console.error("Error in request-topic API route:", error)
    return NextResponse.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 }
    )
  }
}
