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
    const forbiddenImports = [
      "topic-requests",
      "submitTopicRequest",
      "scripts/generate-coming-soon",
      "scripts/generate-all-coming-soon",
    ]
    for (const token of forbiddenImports) {
      expect(feedbackApi).not.toContain(token)
      expect(feedbackAction).not.toContain(token)
    }
    expect(feedbackApi).toContain('forceFeedbackIntent')
    expect(feedbackAction).toContain("intent: 'feedback'")
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
