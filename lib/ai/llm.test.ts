import { afterEach, describe, expect, it, vi } from "vitest"
import { aiStatus, extractJson, generateText } from "@/lib/ai/llm"

const KEYS = ["OPENROUTER_API_KEY", "GOOGLE_API_KEY", "N8N_AI_WEBHOOK_URL", "AI_PROVIDER", "AI_MODEL"]

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

function clearKeys() {
  for (const k of KEYS) vi.stubEnv(k, "")
}

describe("aiStatus", () => {
  it("reports no provider when nothing is configured", () => {
    clearKeys()
    expect(aiStatus()).toEqual({ provider: null, model: null })
  })

  it("prefers OpenRouter, then Gemini, then n8n", () => {
    clearKeys()
    vi.stubEnv("N8N_AI_WEBHOOK_URL", "https://n8n.example/webhook/ai")
    expect(aiStatus().provider).toBe("n8n")
    vi.stubEnv("GOOGLE_API_KEY", "g-test")
    expect(aiStatus().provider).toBe("gemini")
    vi.stubEnv("OPENROUTER_API_KEY", "or-test")
    expect(aiStatus()).toEqual({ provider: "openrouter", model: "google/gemini-3.5-flash-lite" })
  })

  it("honours AI_PROVIDER and AI_MODEL overrides", () => {
    clearKeys()
    vi.stubEnv("OPENROUTER_API_KEY", "or-test")
    vi.stubEnv("GOOGLE_API_KEY", "g-test")
    vi.stubEnv("AI_PROVIDER", "gemini")
    vi.stubEnv("AI_MODEL", "gemini-3.8-flash")
    expect(aiStatus()).toEqual({ provider: "gemini", model: "gemini-3.8-flash" })
  })
})

describe("generateText", () => {
  it("returns null without calling the network when unconfigured", async () => {
    clearKeys()
    const fetchSpy = vi.fn()
    vi.stubGlobal("fetch", fetchSpy)
    expect(await generateText({ tool: "t", system: "s", messages: [{ role: "user", content: "hi" }] })).toBeNull()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it("sends a system prompt and JSON mode to OpenRouter", async () => {
    clearKeys()
    vi.stubEnv("OPENROUTER_API_KEY", "or-test")
    const fetchSpy = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ choices: [{ message: { content: '{"ok":true}' } }] }), { status: 200 }),
    )
    vi.stubGlobal("fetch", fetchSpy)
    const text = await generateText({ tool: "t", system: "be brief", messages: [{ role: "user", content: "hi" }], json: true })
    expect(text).toBe('{"ok":true}')
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.messages[0]).toEqual({ role: "system", content: "be brief" })
    expect(body.response_format).toEqual({ type: "json_object" })
  })

  it("maps assistant turns to the Gemini 'model' role", async () => {
    clearKeys()
    vi.stubEnv("GOOGLE_API_KEY", "g-test")
    const fetchSpy = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: "hello" }] } }] }), { status: 200 }),
    )
    vi.stubGlobal("fetch", fetchSpy)
    await generateText({
      tool: "t",
      system: "s",
      messages: [
        { role: "user", content: "a" },
        { role: "assistant", content: "b" },
      ],
    })
    const [url, init] = fetchSpy.mock.calls[0]
    expect(String(url)).toContain("gemini-3.5-flash-lite:generateContent")
    expect(init.headers["x-goog-api-key"]).toBe("g-test")
    expect(JSON.parse(init.body).contents.map((c: { role: string }) => c.role)).toEqual(["user", "model"])
  })

  it("returns null on HTTP errors", async () => {
    clearKeys()
    vi.stubEnv("OPENROUTER_API_KEY", "or-test")
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("nope", { status: 500 })))
    expect(await generateText({ tool: "t", system: "s", messages: [{ role: "user", content: "x" }] })).toBeNull()
  })
})

describe("extractJson", () => {
  it("handles fences, prose and garbage", () => {
    expect(extractJson('```json\n{"a":1}\n```')).toEqual({ a: 1 })
    expect(extractJson('Sure! {"a":2} hope that helps')).toEqual({ a: 2 })
    expect(extractJson("no json here")).toBeNull()
    expect(extractJson(null)).toBeNull()
  })
})
