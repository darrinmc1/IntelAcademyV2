import { afterEach, describe, expect, it } from "vitest"
import { extractGeminiText, geminiApiKey, geminiGenerateUrl, geminiModel, geminiRequestBody } from "./gemini"

const ENV_KEYS = ["GOOGLE_API_KEY", "GEMINI_API_KEY", "GOOGLE_GEMINI_API_KEY", "GEMINI_MODEL"] as const

afterEach(() => {
  for (const name of ENV_KEYS) delete process.env[name]
})

describe("gemini helper", () => {
  it("defaults the model and honors GEMINI_MODEL", () => {
    expect(geminiModel()).toBe("gemini-2.5-flash")
    expect(geminiGenerateUrl()).toContain("/models/gemini-2.5-flash:generateContent")

    process.env.GEMINI_MODEL = "gemini-2.5-pro"
    expect(geminiModel()).toBe("gemini-2.5-pro")
    expect(geminiGenerateUrl()).toContain("/models/gemini-2.5-pro:generateContent")
  })

  it("accepts any of the three key env vars, preferring GOOGLE_API_KEY", () => {
    expect(geminiApiKey()).toBeUndefined()

    process.env.GOOGLE_GEMINI_API_KEY = "from-google-gemini"
    expect(geminiApiKey()).toBe("from-google-gemini")

    process.env.GEMINI_API_KEY = "from-gemini"
    expect(geminiApiKey()).toBe("from-gemini")

    process.env.GOOGLE_API_KEY = "from-google"
    expect(geminiApiKey()).toBe("from-google")
  })

  it("asks JSON routes for JSON with thinking disabled and a large output budget", () => {
    expect(geminiRequestBody({ prompt: "brief this", temperature: 0.3, json: true })).toEqual({
      contents: [{ parts: [{ text: "brief this" }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 0 },
      },
    })
  })

  it("skips thought parts when reading the candidate", () => {
    expect(
      extractGeminiText({
        candidates: [
          {
            content: {
              parts: [
                { thought: true, text: "hidden" },
                { text: "{\"title\":\"Real brief\"}" },
              ],
            },
          },
        ],
      }),
    ).toBe("{\"title\":\"Real brief\"}")
  })
})
