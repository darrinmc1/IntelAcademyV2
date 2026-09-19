import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

function read(rel: string) {
  return readFileSync(resolve(process.cwd(), rel), "utf8")
}

describe("feedback vs topic-request hard split", () => {
  it("feedback API and action never import topic or page-generation paths", () => {
    const feedbackApi = read("app/api/feedback/route.ts")
    const feedbackAction = read("app/actions/feedback.ts")
    const feedbackWebhook = read("lib/feedback-webhook.ts")
    const forbiddenImports = [
      "topic-requests",
      "submitTopicRequest",
      "scripts/generate-coming-soon",
      "scripts/generate-all-coming-soon",
    ]
    for (const token of forbiddenImports) {
      expect(feedbackApi).not.toContain(token)
      expect(feedbackAction).not.toContain(token)
      expect(feedbackWebhook).not.toContain(token)
    }
    expect(feedbackApi).toContain('forceFeedbackIntent')
    expect(feedbackAction).toContain("intent: 'feedback'")
    expect(feedbackAction).toContain('notifyFeedbackWebhook')
    expect(feedbackAction).not.toContain('empire-topic-request')
    expect(feedbackAction).not.toContain('TOPIC_REQUEST_WEBHOOK_URL')
  })

  it("feedback webhook helper GETs creator-run and is not the lesson queue", () => {
    const webhook = read("lib/feedback-webhook.ts")
    expect(webhook).toContain('FEEDBACK_WEBHOOK_URL')
    expect(webhook).toContain(
      'https://n8n.peelboss.com/webhook/feedback-creator-run'
    )
    expect(webhook).toContain("method: 'GET'")
    expect(webhook).not.toContain('empire-topic-request')
    expect(webhook).not.toContain('new_page')
  })

  it("topic request action still kicks the Empire lesson-queue webhook", () => {
    const topicAction = read("app/actions/topic-requests.ts")
    expect(topicAction).toContain("TOPIC_REQUEST_WEBHOOK_URL")
    expect(topicAction).toContain(
      "https://n8n.peelboss.com/webhook/empire-topic-request"
    )
    expect(topicAction).toContain('method: "POST"')
    expect(topicAction).toContain('intent: "topic_request"')
    expect(topicAction).not.toContain("feedback-creator-run")
  })

  it("request-topic API persists via topic request action, not feedback", () => {
    const api = read("app/api/request-topic/route.ts")
    expect(api).toContain("submitTopicRequestAction")
    expect(api).not.toContain("submitFeedbackAction")
    expect(api).not.toContain("/api/feedback")
    expect(api).not.toContain("generate-coming-soon")
  })

  it("public forms post to the matching endpoint", () => {
    expect(read("components/feedback-widget.tsx")).toContain('fetch("/api/feedback"')
    expect(read("components/feedback-widget.tsx")).not.toContain("/api/request-topic")
    expect(read("app/feedback/page.tsx")).toContain('fetch("/api/feedback"')
    expect(read("app/request-topic/page.tsx")).toContain('fetch("/api/request-topic"')
    expect(read("app/request-topic/page.tsx")).not.toContain('fetch("/api/feedback"')
    expect(read("app/coming-soon/request-topic-form.tsx")).toContain('fetch("/api/request-topic"')
    expect(read("app/coming-soon/request-topic-form.tsx")).not.toContain('fetch("/api/feedback"')
  })
})
