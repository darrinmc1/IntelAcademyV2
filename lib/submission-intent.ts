/**
 * Hard split between site feedback and new-topic requests.
 *
 * Feedback (bugs, page-fix recommendations, comments on existing lessons,
 * Suggestion / Content Request categories) NEVER creates topic_requests,
 * coming-soon pages, or lesson-publisher events.
 *
 * Topic requests are allowed ONLY when the caller is the explicit
 * request-topic channel (`/request-topic` form or `/api/request-topic`).
 * Keywords and feedback categories never promote a row into a topic.
 * Ambiguous input defaults to feedback.
 */

export const SUBMISSION_INTENTS = {
  FEEDBACK: "feedback",
  TOPIC_REQUEST: "topic_request",
} as const

export type SubmissionIntent = (typeof SUBMISSION_INTENTS)[keyof typeof SUBMISSION_INTENTS]

export const FEEDBACK_CHANNEL = "feedback"
export const REQUEST_TOPIC_CHANNEL = "request-topic"

export const VALID_FEEDBACK_CATEGORIES = [
  "Bug",
  "Complaint",
  "Page recommendation",
  "Suggestion",
  "Other",
] as const
export type FeedbackCategory = (typeof VALID_FEEDBACK_CATEGORIES)[number]

export const VALID_FEEDBACK_TYPES = [
  "bug",
  "suggestion",
  "feature_request",
  "content_request",
  "general",
] as const
export type FeedbackType = (typeof VALID_FEEDBACK_TYPES)[number]

const FEEDBACK_CATEGORY_ALIASES: Record<string, FeedbackCategory> = {
  bug: "Bug",
  "bug report": "Bug",
  complaint: "Complaint",
  suggestion: "Suggestion",
  "page fix": "Page recommendation",
  "page-fix": "Page recommendation",
  "page recommendation": "Page recommendation",
  "content issue": "Page recommendation",
  "feature request": "Suggestion",
  // Legacy widget/API value. Remap so n8n `Is Content Request?` never matches.
  "content request": "Page recommendation",
  "existing content": "Page recommendation",
  "general feedback": "Other",
  compliment: "Other",
  other: "Other",
  general: "Other",
}

const REQUEST_TOPIC_CHANNELS = new Set([
  REQUEST_TOPIC_CHANNEL,
  "topic_request",
  "topic-request",
  "/api/request-topic",
  "/request-topic",
])

export function isFeedbackCategory(value: string): value is FeedbackCategory {
  return (VALID_FEEDBACK_CATEGORIES as readonly string[]).includes(value)
}

export function normalizeFeedbackCategory(raw?: string | null): FeedbackCategory | null {
  if (!raw?.trim()) return null
  const trimmed = raw.trim()
  if (isFeedbackCategory(trimmed)) return trimmed
  return FEEDBACK_CATEGORY_ALIASES[trimmed.toLowerCase()] ?? null
}

export function feedbackTypeForCategory(category: FeedbackCategory): FeedbackType {
  switch (category) {
    case "Bug":
      return "bug"
    case "Suggestion":
    case "Page recommendation":
      return "suggestion"
    case "Complaint":
      return "general"
    default:
      return "general"
  }
}

/** Never persist content_request — n8n used that family as new_page. */
export function normalizeFeedbackType(
  raw: FeedbackType | undefined,
  category: FeedbackCategory
): FeedbackType {
  if (!raw || raw === "content_request") {
    return feedbackTypeForCategory(category)
  }
  return raw
}

export function isRequestTopicChannel(channel?: string | null): boolean {
  if (!channel) return false
  return REQUEST_TOPIC_CHANNELS.has(channel.trim().toLowerCase())
}

export function classifySubmission(input: {
  channel?: string | null
  category?: string | null
  topicTitle?: string | null
  message?: string | null
}): { intent: SubmissionIntent; reason: string } {
  // Explicit request-topic channel is the only path that may create a topic request.
  if (isRequestTopicChannel(input.channel)) {
    const hasTopic = Boolean(input.topicTitle?.trim() || input.message?.trim())
    if (hasTopic) {
      return { intent: SUBMISSION_INTENTS.TOPIC_REQUEST, reason: "explicit_request_topic_channel" }
    }
    return { intent: SUBMISSION_INTENTS.FEEDBACK, reason: "request_topic_missing_subject" }
  }

  // Suggestion / Content Request / keyword-looking messages stay feedback.
  return { intent: SUBMISSION_INTENTS.FEEDBACK, reason: "default_feedback" }
}

/**
 * Feedback endpoints ignore client-supplied intent/channel and always store feedback.
 */
export function forceFeedbackIntent(): {
  intent: typeof SUBMISSION_INTENTS.FEEDBACK
  channel: typeof FEEDBACK_CHANNEL
} {
  return { intent: SUBMISSION_INTENTS.FEEDBACK, channel: FEEDBACK_CHANNEL }
}

/**
 * Topic-request endpoints require the explicit channel plus a subject.
 */
export function requireTopicRequestIntent(input: {
  topicTitle?: string | null
  description?: string | null
}):
  | { ok: true; intent: typeof SUBMISSION_INTENTS.TOPIC_REQUEST }
  | { ok: false; message: string } {
  if (!input.topicTitle?.trim()) {
    return { ok: false, message: "A new lesson topic title is required." }
  }
  if (!input.description?.trim()) {
    return { ok: false, message: "Please describe the lesson topic you want us to add." }
  }
  return { ok: true, intent: SUBMISSION_INTENTS.TOPIC_REQUEST }
}
