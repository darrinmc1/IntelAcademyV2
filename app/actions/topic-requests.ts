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

/**
 * Submit a request for a NEW lesson topic that does not exist yet.
 * Writes to topic_requests ONLY. Never writes feedback, never generates pages.
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
