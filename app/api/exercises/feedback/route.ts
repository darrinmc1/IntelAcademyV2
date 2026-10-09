import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getExercise } from "@/data/exercises"
import { aiConfigured, extractJson, generateText } from "@/lib/ai/llm"
import { EXERCISE_DISCLAIMER, buildFeedbackMessages, coerceAiFeedback, type FeedbackResponse } from "@/lib/exercises/feedback"
import { scoreSubmission } from "@/lib/exercises/scoring"
import {
  checkExerciseIntegrity,
  cleanSubmission,
  exerciseSchema,
  submissionSchema,
  type Exercise,
} from "@/lib/exercises/types"
import { getClientIp, rateLimit } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"
export const maxDuration = 60

const bodySchema = z.object({
  slug: z.string().max(80).optional(),
  /** Only for exercises The Chief generated — library exercises are looked up by slug. */
  exercise: z.unknown().optional(),
  submission: submissionSchema,
})

function resolveExercise(slug: string | undefined, provided: unknown): Exercise | null {
  if (slug) return getExercise(slug) ?? null
  if (!provided) return null
  const parsed = exerciseSchema.safeParse(provided)
  if (!parsed.success || !parsed.data.generated) return null
  return checkExerciseIntegrity(parsed.data).length ? null : parsed.data
}

/** Don't spend a model call on an empty attempt. */
function worthCritiquing(exercise: Exercise, sub: z.infer<typeof submissionSchema>): boolean {
  const clean = cleanSubmission(sub)
  const graded = clean.evaluations.filter((e) => e.reliability && e.credibility).length
  const blufWords = clean.assessment.bluf.split(/\s+/).filter(Boolean).length
  return blufWords >= 12 || graded >= Math.min(3, exercise.reports.length)
}

export async function POST(req: NextRequest) {
  const limited = rateLimit(`exercise-feedback:${getClientIp(req)}`, 10, 10 * 60 * 1000)
  if (!limited.allowed) {
    return NextResponse.json(
      { error: `Too many submissions from this network. Try again in ${limited.retryAfter} seconds.` },
      { status: 429 },
    )
  }

  const body = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "That submission didn't look right. Refresh the page and try again." }, { status: 400 })
  }

  const exercise = resolveExercise(parsed.data.slug, parsed.data.exercise)
  if (!exercise) {
    return NextResponse.json({ error: "Exercise not found." }, { status: 404 })
  }

  const submission = parsed.data.submission
  const score = scoreSubmission(exercise, submission)
  const base = { score, solution: exercise.modelAnswer, disclaimer: EXERCISE_DISCLAIMER }

  if (!aiConfigured()) {
    return NextResponse.json({
      ...base,
      mode: "answer-key",
      ai: null,
      notice: "Marked against the expert answer key. The Chief's written critique switches on once the academy's AI key is configured.",
    } satisfies FeedbackResponse)
  }

  if (!worthCritiquing(exercise, submission)) {
    return NextResponse.json({
      ...base,
      mode: "answer-key",
      ai: null,
      notice: "Marked against the answer key. Grade at least three reports or write a BLUF to get The Chief's written critique.",
    } satisfies FeedbackResponse)
  }

  const { system, messages } = buildFeedbackMessages(exercise, cleanSubmission(submission), score)
  const text = await generateText({
    tool: "exercise-feedback",
    system,
    messages,
    json: true,
    temperature: 0.3,
    maxTokens: 1800,
    timeoutMs: 45_000,
  })
  const ai = coerceAiFeedback(extractJson(text))

  return NextResponse.json({
    ...base,
    mode: ai ? "live" : "answer-key",
    ai,
    notice: ai ? undefined : "The Chief's written critique didn't come through this time. Your answer-key marking is below — resubmit to try again.",
  } satisfies FeedbackResponse)
}
