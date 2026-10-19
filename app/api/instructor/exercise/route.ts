import { NextRequest, NextResponse } from "next/server"
import { aiConfigured, extractJson, generateText } from "@/lib/ai/llm"
import {
  buildGeneratorMessages,
  practiceRequestSchema,
  repairGeneratedExercise,
  validateGeneratedExercise,
} from "@/lib/instructor/generate"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const limited = rateLimit(`instructor-exercise:${getClientIp(req)}`, 4, 30 * 60 * 1000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: `That's enough fresh exercises for now. Try again in ${Math.ceil(limited.retryAfter / 60)} minutes — or work through one you already have.` },
      { status: 429 },
    )
  }

  const body = await req.json().catch(() => null)
  const parsed = practiceRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Pick a level, a domain and a focus." }, { status: 400 })
  }

  if (!aiConfigured()) {
    return NextResponse.json(
      {
        error:
          "Generating fresh exercises needs the live instructor, which isn't switched on yet. The three library exercises are ready to go at /exercises.",
        offline: true,
      },
      { status: 503 },
    )
  }

  const { system, messages } = buildGeneratorMessages(parsed.data)
  const text = await generateText({
    tool: "practice-exercise",
    system,
    messages,
    json: true,
    temperature: 0.8,
    maxTokens: 7000,
    timeoutMs: 55_000,
  })

  const result = validateGeneratedExercise(repairGeneratedExercise(extractJson(text), parsed.data))
  if (result.ok === false) {
    console.error("[practice-exercise] generated exercise failed validation:", result.problems)
    return NextResponse.json(
      { error: "The Chief's draft didn't pass quality control (it happens). Try again." },
      { status: 502 },
    )
  }
  return NextResponse.json({ exercise: result.exercise })
}
