"use server"

import { submitFeedback, getPendingFeedbackCount } from "@/lib/db"
import { sendAdminNotification } from "@/lib/email"

export type FeedbackResult = { ok: boolean; message: string; id?: string }

const VALID_CATEGORIES = ["Bug", "Suggestion", "Content Request", "Other"]

/**
 * Submit feedback (rating, message, page). Writes to feedback table + notifies admin.
 */
export async function submitFeedbackAction(args: {
  category: string
  rating?: number
  message: string
  page?: string
  email?: string
  ip?: string
}): Promise<FeedbackResult> {
  // Validate
  if (!args.category || !VALID_CATEGORIES.includes(args.category)) {
    return { ok: false, message: "Invalid feedback category" }
  }
  if (!args.message?.trim()) {
    return { ok: false, message: "Feedback message is required" }
  }
  if (args.rating && (args.rating < 1 || args.rating > 5)) {
    return { ok: false, message: "Rating must be between 1 and 5" }
  }

  try {
    const id = await submitFeedback({
      category: args.category,
      rating: args.rating,
      message: args.message.trim(),
      page: args.page,
      email: args.email?.trim(),
      ip: args.ip,
    })

    // Notify admin
    const pending = await getPendingFeedbackCount()
    await sendAdminNotification({
      kind: "feedback",
      payload: {
        category: args.category,
        rating: args.rating ? `${args.rating}/5` : " - ",
        message: args.message,
        page: args.page || " - ",
        email: args.email || " - ",
        pending_count: pending,
      },
    })

    return { ok: true, message: "Thank you for your feedback.", id }
  } catch (error) {
    console.error("submitFeedbackAction error:", error)
    return { ok: false, message: "Failed to submit feedback. Please try again." }
  }
}
