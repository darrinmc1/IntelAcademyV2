/**
 * Provider-agnostic text generation for the academy's AI features
 * (Academy Brief, practical-exercise feedback, The Chief instructor).
 *
 * Configure ONE of these in Vercel → Settings → Environment Variables:
 *   OPENROUTER_API_KEY   — preferred (same provider as the Empire drafter)
 *   GOOGLE_API_KEY       — Gemini API direct
 *   N8N_AI_WEBHOOK_URL   — the n8n AI gateway ({ prompt } → { draft })
 *
 * Optional:
 *   AI_PROVIDER = openrouter | gemini | n8n   (force one when several are set)
 *   AI_MODEL    = model id for the chosen provider
 *
 * With nothing configured every caller falls back to its deterministic,
 * no-AI path — features keep working, they just don't get model critique.
 *
 * Server-only: reads secrets from process.env. Never import from a client component.
 */

export type AiProvider = "openrouter" | "gemini" | "n8n"

export type ChatMessage = { role: "user" | "assistant"; content: string }

export type AiStatus = { provider: AiProvider | null; model: string | null }

// Gemini 2.0 Flash was retired on 1 June 2026. Google recommends the 3.5
// Flash-Lite generation for new projects; override with AI_MODEL if needed.
const DEFAULT_MODELS: Record<AiProvider, string> = {
  openrouter: "google/gemini-3.5-flash-lite",
  gemini: "gemini-3.5-flash-lite",
  n8n: "free",
}

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models"
const SITE_URL = "https://theintelanalystacademy.com"

function configured(provider: AiProvider): boolean {
  if (provider === "openrouter") return !!process.env.OPENROUTER_API_KEY
  if (provider === "gemini") return !!process.env.GOOGLE_API_KEY
  return !!process.env.N8N_AI_WEBHOOK_URL
}

export function aiStatus(): AiStatus {
  const forced = (process.env.AI_PROVIDER || "").trim().toLowerCase() as AiProvider
  const order: AiProvider[] = ["openrouter", "gemini", "n8n"]
  const provider =
    forced && order.includes(forced) && configured(forced)
      ? forced
      : order.find((p) => configured(p)) ?? null
  if (!provider) return { provider: null, model: null }
  const model = (process.env.AI_MODEL || "").trim() || DEFAULT_MODELS[provider]
  return { provider, model }
}

export function aiConfigured(): boolean {
  return aiStatus().provider !== null
}

export type GenerateOptions = {
  /** Short label for logs and the n8n gateway, e.g. "exercise-feedback". */
  tool: string
  system: string
  messages: ChatMessage[]
  json?: boolean
  temperature?: number
  maxTokens?: number
  timeoutMs?: number
}

/**
 * Generate a completion. Returns the raw text, or null on any failure
 * (not configured, timeout, HTTP error, empty response). Callers decide
 * what the fallback looks like.
 */
export async function generateText(opts: GenerateOptions): Promise<string | null> {
  const { provider, model } = aiStatus()
  if (!provider || !model) return null

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? 30_000)
  try {
    if (provider === "openrouter") return await callOpenRouter(model, opts, controller.signal)
    if (provider === "gemini") return await callGemini(model, opts, controller.signal)
    return await callN8n(opts, controller.signal)
  } catch (err) {
    console.error(`[ai:${opts.tool}] ${provider} call failed:`, err instanceof Error ? err.message : err)
    return null
  } finally {
    clearTimeout(timer)
  }
}

async function callOpenRouter(model: string, opts: GenerateOptions, signal: AbortSignal) {
  const res = await fetch(OPENROUTER_URL, {
    method: "POST",
    signal,
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": SITE_URL,
      "X-Title": "The Intel Analyst Academy",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: opts.system }, ...opts.messages],
      temperature: opts.temperature ?? 0.4,
      max_tokens: opts.maxTokens ?? 2048,
      ...(opts.json ? { response_format: { type: "json_object" } } : {}),
    }),
  })
  if (!res.ok) {
    console.error(`[ai:${opts.tool}] OpenRouter ${res.status}:`, (await res.text()).slice(0, 500))
    return null
  }
  const data = await res.json()
  const text = data?.choices?.[0]?.message?.content
  return typeof text === "string" && text.trim() ? text : null
}

async function callGemini(model: string, opts: GenerateOptions, signal: AbortSignal) {
  const res = await fetch(`${GEMINI_BASE}/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    signal,
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GOOGLE_API_KEY as string,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: opts.system }] },
      contents: opts.messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      generationConfig: {
        temperature: opts.temperature ?? 0.4,
        maxOutputTokens: opts.maxTokens ?? 2048,
        ...(opts.json ? { responseMimeType: "application/json" } : {}),
      },
    }),
  })
  if (!res.ok) {
    console.error(`[ai:${opts.tool}] Gemini ${res.status}:`, (await res.text()).slice(0, 500))
    return null
  }
  const data = await res.json()
  const parts: Array<{ text?: string }> = data?.candidates?.[0]?.content?.parts ?? []
  const text = parts.map((p) => p.text ?? "").join("")
  return text.trim() ? text : null
}

async function callN8n(opts: GenerateOptions, signal: AbortSignal) {
  const transcript = opts.messages
    .map((m) => `${m.role === "assistant" ? "ASSISTANT" : "USER"}:\n${m.content}`)
    .join("\n\n")
  const res = await fetch(process.env.N8N_AI_WEBHOOK_URL as string, {
    method: "POST",
    signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tool: opts.tool,
      model: "free",
      docName: opts.tool,
      prompt: `${opts.system}\n\n${transcript}${opts.json ? "\n\nRespond with JSON only." : ""}`,
    }),
  })
  if (!res.ok) {
    console.error(`[ai:${opts.tool}] n8n gateway ${res.status}`)
    return null
  }
  const data = await res.json()
  return typeof data?.draft === "string" && data.draft.trim() ? data.draft : null
}

/**
 * Pull the first JSON object out of a model response (handles ```json fences
 * and leading/trailing prose). Returns null when nothing parses.
 */
export function extractJson(text: string | null | undefined): unknown {
  if (!text) return null
  const trimmed = text.trim()
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/)
  const raw = fenced ? fenced[1] : trimmed
  const start = raw.indexOf("{")
  const end = raw.lastIndexOf("}")
  if (start === -1 || end === -1 || end <= start) return null
  try {
    return JSON.parse(raw.slice(start, end + 1))
  } catch {
    return null
  }
}
