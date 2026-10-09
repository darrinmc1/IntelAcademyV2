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
import { aiConfigured, extractJson, generateText } from "@/lib/ai/llm"

function json(data: BriefResponse, status = 200) {
  return NextResponse.json(data, { status })
}

async function generateLive(dump: string): Promise<string | null> {
  const lessons = matchLessons(dump, 12)
  const catalog = lessons.length ? lessons : citeableLessons.slice(0, 12)
  const prompt = buildPrompt(dump, catalog)
  // Shared provider helper: OpenRouter, Gemini or the n8n gateway — whichever is configured.
  return generateText({
    tool: "academy-brief",
    system: "You are a training coach at The Intel Analyst Academy. Follow the instructions in the user message exactly and return JSON only.",
    messages: [{ role: "user", content: prompt }],
    json: true,
    temperature: 0.3,
    maxTokens: 4096,
  })
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

  if (!aiConfigured()) {
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
