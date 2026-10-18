import { NextRequest, NextResponse } from "next/server"
import { getClientIp, rateLimit } from "@/lib/rate-limit"
import {
  BriefResponse,
  TRAINING_PREVIEW_NOTICE,
  DISCLAIMER,
  MAX_DUMP_CHARS,
  buildPrompt,
  buildTrainingPreview,
  coerceBrief,
  validateDump,
} from "@/lib/academy-brief"
import { citeableLessons, matchLessons } from "@/lib/citeable-lessons"
import { callGemini, geminiApiKey } from "@/lib/gemini"

const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL

function json(data: BriefResponse, status = 200) {
  return NextResponse.json(data, { status })
}

function extractJson(text: string): unknown {
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

async function generateLive(dump: string): Promise<string | null> {
  const lessons = matchLessons(dump, 12)
  const catalog = lessons.length ? lessons : citeableLessons.slice(0, 12)
  const prompt = buildPrompt(dump, catalog)

  if (N8N_WEBHOOK) {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tool: "academy-brief",
        model: "free",
        docName: "Academy Brief",
        prompt,
      }),
    })
    if (!res.ok) return null
    const data = await res.json()
    return typeof data?.draft === "string" ? data.draft : null
  }

  const apiKey = geminiApiKey()
  if (!apiKey) return null

  const result = await callGemini(apiKey, {
    prompt,
    temperature: 0.3,
    maxOutputTokens: 8192,
    json: true,
  })
  if (!result.ok) {
    if (!result.empty) console.error("Gemini API error:", result.status, result.detail)
    return null
  }
  return result.text
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const limited = rateLimit(`academy-brief:${ip}`, 8, 10 * 60 * 1000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: `Too many briefs from this network. Try again in ${limited.retryAfter} seconds.` },
      { status: 429 },
    )
  }

  const body = await req.json().catch(() => ({}))
  const checked = validateDump(body?.dump)
  if (checked.ok === false) {
    return NextResponse.json({ error: checked.error }, { status: 400 })
  }

  if (checked.dump.length > MAX_DUMP_CHARS) {
    return NextResponse.json({ error: "Dump is too long." }, { status: 400 })
  }

  if (!geminiApiKey() && !N8N_WEBHOOK) {
    return json({
      brief: buildTrainingPreview(checked.dump),
      mode: "training-preview",
      notice: TRAINING_PREVIEW_NOTICE,
      disclaimer: DISCLAIMER,
    })
  }

  try {
    const text = await generateLive(checked.dump)
    if (!text) {
      return json({
        brief: buildTrainingPreview(checked.dump),
        mode: "training-preview",
        notice:
          "Live generation failed. Showing a training-preview brief that organizes your dump and cites real academy lessons.",
        disclaimer: DISCLAIMER,
      })
    }

    const parsed = extractJson(text)
    return json({
      brief: coerceBrief(parsed, checked.dump),
      mode: "live",
      disclaimer: DISCLAIMER,
    })
  } catch (err) {
    console.error("Academy Brief generation failed:", err)
    return json({
      brief: buildTrainingPreview(checked.dump),
      mode: "training-preview",
      notice:
        "Could not reach the AI service. Showing a training-preview brief with catalog citations so you can still practice the method.",
      disclaimer: DISCLAIMER,
    })
  }
}
