import { describe, expect, it } from "vitest"
import {
  SUBMISSION_INTENTS,
  VALID_FEEDBACK_CATEGORIES,
  classifySubmission,
  feedbackTypeForCategory,
  forceFeedbackIntent,
  normalizeFeedbackCategory,
  requireTopicRequestIntent,
} from "@/lib/submission-intent"

describe("normalizeFeedbackCategory", () => {
  it("does not store the n8n-triggering Content Request category", () => {
    expect(VALID_FEEDBACK_CATEGORIES).not.toContain("Content Request")
  })

  it("keeps canonical feedback categories", () => {
    expect(normalizeFeedbackCategory("Bug")).toBe("Bug")
    expect(normalizeFeedbackCategory("Complaint")).toBe("Complaint")
    expect(normalizeFeedbackCategory("Page recommendation")).toBe("Page recommendation")
    expect(normalizeFeedbackCategory("Suggestion")).toBe("Suggestion")
    expect(normalizeFeedbackCategory("Other")).toBe("Other")
  })

  it("maps feedback-page aliases without promoting to a topic", () => {
    expect(normalizeFeedbackCategory("Bug Report")).toBe("Bug")
    expect(normalizeFeedbackCategory("Content Issue")).toBe("Page recommendation")
    expect(normalizeFeedbackCategory("Feature Request")).toBe("Suggestion")
    expect(normalizeFeedbackCategory("General Feedback")).toBe("Other")
    expect(normalizeFeedbackCategory("page fix")).toBe("Page recommendation")
    expect(normalizeFeedbackCategory("Content Request")).toBe("Page recommendation")
  })

  it("returns null for unknown values", () => {
    expect(normalizeFeedbackCategory("")).toBeNull()
    expect(normalizeFeedbackCategory("Foundations")).toBeNull()
  })
})

describe("classifySubmission", () => {
  it("defaults ambiguous and Content Request / Suggestion payloads to feedback", () => {
    expect(classifySubmission({ category: "Content Request", message: "Add Google dorking" }).intent).toBe(
      SUBMISSION_INTENTS.FEEDBACK
    )
    expect(classifySubmission({ category: "Suggestion", message: "fix this page header" }).intent).toBe(
      SUBMISSION_INTENTS.FEEDBACK
    )
    expect(classifySubmission({ category: "Bug", message: "broken image" }).intent).toBe(
      SUBMISSION_INTENTS.FEEDBACK
    )
    expect(classifySubmission({ message: "Please create a new topic about PESTLE" }).intent).toBe(
      SUBMISSION_INTENTS.FEEDBACK
    )
  })

  it("never promotes keyword-only messages from the feedback channel", () => {
    const result = classifySubmission({
      channel: "feedback",
      category: "Content Request",
      topicTitle: "Strategic Risk Assessment",
      message: "new lesson please",
    })
    expect(result.intent).toBe(SUBMISSION_INTENTS.FEEDBACK)
    expect(result.reason).toBe("default_feedback")
  })

  it("allows a topic request only on the explicit request-topic channel", () => {
    expect(
      classifySubmission({
        channel: "request-topic",
        topicTitle: "Advanced Google dorking",
        message: "Need a lesson on operators",
      }).intent
    ).toBe(SUBMISSION_INTENTS.TOPIC_REQUEST)
  })

  it("does not create a topic request when the request-topic form is empty", () => {
    expect(classifySubmission({ channel: "request-topic" }).intent).toBe(SUBMISSION_INTENTS.FEEDBACK)
  })
})

describe("forceFeedbackIntent / requireTopicRequestIntent", () => {
  it("locks the feedback path to intent=feedback", () => {
    expect(forceFeedbackIntent()).toEqual({ intent: "feedback", channel: "feedback" })
  })

  it("requires a title and description for topic requests", () => {
    expect(requireTopicRequestIntent({ topicTitle: "", description: "details" }).ok).toBe(false)
    expect(requireTopicRequestIntent({ topicTitle: "OSINT", description: "" }).ok).toBe(false)
    expect(requireTopicRequestIntent({ topicTitle: "OSINT", description: "Cover dorking" })).toEqual({
      ok: true,
      intent: "topic_request",
    })
  })

  it("maps Content Request to a feedback_type, not a topic action", () => {
    expect(feedbackTypeForCategory("Page recommendation")).toBe("suggestion")
    expect(feedbackTypeForCategory("Suggestion")).toBe("suggestion")
    expect(normalizeFeedbackCategory("Content Request")).not.toBe("Content Request")
  })
})
