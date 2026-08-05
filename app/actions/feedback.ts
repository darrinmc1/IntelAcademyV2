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
  // NEW: Page context (auto-captured from client)
  page_url?: string
  page_title?: string
  feedback_type?: 'bug' | 'suggestion' | 'feature_request' | 'content_request' | 'general'
}): Promise<FeedbackResult> {
 // Validate feedback_type if provided
  const VALID_FEEDBACK_TYPES = ['bug', 'suggestion', 'feature_request', 'content_request', 'general']
  if (args.feedback_type && !VALID_FEEDBACK_TYPES.includes(args.feedback_type)) {
    return { ok: false, message: "Invalid feedback type" }
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
      // Include page context
      page_url: args.page_url,
      page_title: args.page_title,
      feedback_type: args.feedback_type || 'general',
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
        // Include new context
        page_url: args.page_url || " - ",
        page_title: args.page_title || " - ",
        feedback_type: args.feedback_type || "general",
      },
    })

    return { ok: true, message: "Thank you for your feedback.", id }
  } catch (error) {
    console.error("submitFeedbackAction error:", error)
    return { ok: false, message: "Failed to submit feedback. Please try again." }
  }
}
