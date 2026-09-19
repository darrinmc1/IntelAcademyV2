"use server"

import { submitTopicRequest, getPendingTopicRequestCount } from "@/lib/db"
import { sendAdminNotification } from "@/lib/email"
import { requireTopicRequestIntent } from "@/lib/submission-intent"

export type TopicRequestResult = { ok: boolean; message: string; id?: string; emailWarning?: string }

const VALID_CATEGORIES = [
  "Foundations",
  "OSINT",
  "Analyst's Notebook",
  "Analytical Techniques",
  "Data Collection",
  "Excel",
  "Other",
]

const DEFAULT_TOPIC_REQUEST_WEBHOOK_URL =
  "https://n8n.peelboss.com/webhook/empire-topic-request"

/**
 * Fire-and-forget notify Empire n8n to enqueue an approved new_page lesson task.
 * Must never throw to the caller — failures are logged only.
 */
function notifyTopicRequestWebhook(payload: {
  id: string
  topic_title: string
  description: string
  category?: string
  experience_level?: string
  email?: string
}) {
  const webhookUrl =
    process.env.TOPIC_REQUEST_WEBHOOK_URL?.trim() || DEFAULT_TOPIC_REQUEST_WEBHOOK_URL
  if (!webhookUrl) return

  const body = {
    intent: "topic_request",
    topic_title: payload.topic_title,
    description: payload.description,
    category: payload.category || "",
    experience_level: payload.experience_level || "",
    email: payload.email || "",
    id: payload.id,
    topic_request_id: payload.id,
    repo_name: "IntelAcademyV2",
    source: "intel_topic_request",
  }

  void fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  }).catch((err) => {
    console.error("topic request webhook notify failed (non-fatal):", err)
  })
}

/**
 * Submit a request for a NEW lesson topic that does not exist yet.
 * Writes to topic_requests ONLY. Never writes feedback, never generates pages.
 * After a successful DB write, notifies Empire n8n (fire-and-forget) to queue a lesson.
 */
export async function submitTopicRequestAction(args: {
  topic_title: string
  category?: string
  description: string
  experience_level?: string
  email?: string
}): Promise<TopicRequestResult> {
  const gated = requireTopicRequestIntent({
    topicTitle: args.topic_title,
    description: args.description,
  })
  if (gated.ok === false) {
    return { ok: false, message: gated.message }
  }
  if (args.category && !VALID_CATEGORIES.includes(args.category)) {
    return { ok: false, message: "Invalid category" }
  }
  const validLevels = ["beginner", "intermediate", "advanced"]
  if (args.experience_level && !validLevels.includes(args.experience_level)) {
    return { ok: false, message: "Invalid experience level" }
  }

  try {
    const id = await submitTopicRequest({
      topic_title: args.topic_title.trim(),
      category: args.category,
      description: args.description.trim(),
      experience_level: args.experience_level,
      email: args.email?.trim(),
    })

    // Empire lesson queue (n8n). Failures must not fail the user-facing submit.
    notifyTopicRequestWebhook({
      id,
      topic_title: args.topic_title.trim(),
      description: args.description.trim(),
      category: args.category,
      experience_level: args.experience_level,
      email: args.email?.trim(),
    })

    // Notify admin
    const pending = await getPendingTopicRequestCount()
    const emailRes = await sendAdminNotification({
      kind: "subscribe", // reuse the subscribe template for now
      payload: {
        type: "Topic Request",
        title: args.topic_title,
        category: args.category || " - ",
        experience: args.experience_level || " - ",
        email: args.email || " - ",
        pending_requests: pending,
      },
    })

    return {
      ok: true,
      message:
        "Thank you for your request! We'll let you know when this topic becomes available.",
      id,
      emailWarning: emailRes.ok
        ? undefined
        : `Your request was saved, but our admin notification failed to send (${(emailRes as { reason?: string }).reason ?? "email_error"}).`,
    }
  } catch (error) {
    console.error("submitTopicRequestAction error:", error)
    return { ok: false, message: "Failed to submit request. Please try again." }
  }
}
