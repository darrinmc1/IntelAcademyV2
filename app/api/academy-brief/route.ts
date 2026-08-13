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

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

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

  const res = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 4096,
        responseMimeType: "application/json",
      },
    }),
  })
  if (!res.ok) {
    console.error("Gemini API error:", res.status, await res.text())
    return null
  }
  const data = await res.json()
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null
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

  if (!GEMINI_API_KEY && !N8N_WEBHOOK) {
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
