const KEY_ENV_VARS = ["GOOGLE_API_KEY", "GEMINI_API_KEY", "GOOGLE_GEMINI_API_KEY"] as const

const DEFAULT_MODEL = "gemini-2.5-flash"
const DEFAULT_MAX_OUTPUT_TOKENS = 8192

export function geminiApiKey(): string | undefined {
  for (const name of KEY_ENV_VARS) {
    const value = process.env[name]?.trim()
    if (value) return value
  }
  return undefined
}

export function geminiModel(): string {
  const configured = process.env.GEMINI_MODEL?.trim()
  return configured || DEFAULT_MODEL
}

export function geminiGenerateUrl(model = geminiModel()): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`
}

export type GeminiGenerateOptions = {
  prompt: string
  temperature: number
  maxOutputTokens?: number
  /** Ask for JSON. Also disables thinking unless thinkingBudget is set. */
  json?: boolean
  thinkingBudget?: number
}

export function geminiRequestBody(options: GeminiGenerateOptions) {
  const generationConfig: Record<string, unknown> = {
    temperature: options.temperature,
    maxOutputTokens: options.maxOutputTokens ?? DEFAULT_MAX_OUTPUT_TOKENS,
  }

  const thinkingBudget = options.thinkingBudget ?? (options.json ? 0 : undefined)
  if (thinkingBudget !== undefined) {
    generationConfig.thinkingConfig = { thinkingBudget }
  }
  if (options.json) {
    generationConfig.responseMimeType = "application/json"
  }

  return {
    contents: [{ parts: [{ text: options.prompt }] }],
    generationConfig,
  }
}

type GeminiPart = { text?: string; thought?: boolean }

export function extractGeminiText(data: unknown): string | null {
  const parts = (data as { candidates?: Array<{ content?: { parts?: GeminiPart[] } }> })
    ?.candidates?.[0]?.content?.parts
  if (!Array.isArray(parts)) return null

  const visible = parts.filter((part) => part && typeof part.text === "string" && part.thought !== true)
  const text = visible.map((part) => part.text).join("").trim()
  return text || null
}

export type GeminiCallResult =
  | { ok: true; text: string }
  | { ok: false; status: number; detail: string; empty?: boolean }

export async function callGemini(apiKey: string, options: GeminiGenerateOptions): Promise<GeminiCallResult> {
  const res = await fetch(geminiGenerateUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(geminiRequestBody(options)),
  })

  if (!res.ok) {
    return { ok: false, status: res.status, detail: await res.text() }
  }

  const data = await res.json()
  const text = extractGeminiText(data)
  if (!text) return { ok: false, status: res.status, detail: "empty candidate", empty: true }
  return { ok: true, text }
}
