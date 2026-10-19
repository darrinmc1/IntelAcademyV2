import { NextRequest, NextResponse } from "next/server"
import { aiConfigured, extractJson, generateText } from "@/lib/ai/llm"
import {
  buildInstructorPrompt,
  coerceInstructorReply,
  instructorRequestSchema,
  offlineReply,
  resolveContext,
  trimConversation,
  type InstructorReply,
} from "@/lib/instructor/instructor"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const limited = rateLimit(`instructor:${getClientIp(req)}`, 24, 10 * 60 * 1000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: `The Chief needs a breather. Try again in ${limited.retryAfter} seconds.` },
      { status: 429 },
    )
  }

  const body = await req.json().catch(() => null)
  const parsed = instructorRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "That message didn't come through properly. Try again." }, { status: 400 })
  }

  const messages = trimConversation(parsed.data.messages)
  const last = messages[messages.length - 1]
  if (!last || last.role !== "user") {
    return NextResponse.json({ error: "Ask The Chief something first." }, { status: 400 })
  }

  const ctx = resolveContext(parsed.data.context)

  if (!aiConfigured()) {
    return NextResponse.json(offlineReply(last.content, ctx) satisfies InstructorReply)
  }

  const { system, messages: prompt } = buildInstructorPrompt(messages, ctx)
  const text = await generateText({
    tool: "instructor",
    system,
    messages: prompt,
    json: true,
    temperature: 0.5,
    maxTokens: 1000,
    timeoutMs: 40_000,
  })
  const reply = coerceInstructorReply(extractJson(text), text)
  if (!reply) {
    return NextResponse.json({
      ...offlineReply(last.content, ctx),
      notice: "The live instructor didn't answer this time, so here are The Chief's built-in notes. Ask again in a moment.",
    } satisfies InstructorReply)
  }
  return NextResponse.json({ ...reply, mode: "live" } satisfies InstructorReply)
}
