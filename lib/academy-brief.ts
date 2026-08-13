import { z } from "zod"
import {
  catalogForPrompt,
  citeableByHref,
  matchLessons,
  type CiteableLesson,
} from "@/lib/citeable-lessons"
import { DISCLAIMER } from "@/lib/pricing"

export const CONFIDENCE_LEVELS = ["high", "moderate", "low"] as const
export type Confidence = (typeof CONFIDENCE_LEVELS)[number]

export const citationSchema = z.object({
  title: z.string(),
  href: z.string(),
  why: z.string(),
})

export const keyJudgmentSchema = z.object({
  statement: z.string(),
  confidence: z.enum(CONFIDENCE_LEVELS),
  estimativeLanguage: z.string().optional(),
})

export const academyBriefSchema = z.object({
  title: z.string(),
  bluf: z.string(),
  keyJudgments: z.array(keyJudgmentSchema).min(1).max(6),
  situation: z.string(),
  analysis: z.string(),
  sourceAssessment: z.string(),
  alternativesAndGaps: z.string(),
  recommendations: z.array(z.string()).min(1).max(8),
  citations: z.array(citationSchema).min(1).max(8),
})

export type AcademyBrief = z.infer<typeof academyBriefSchema>
export type BriefCitation = z.infer<typeof citationSchema>

export type BriefMode = "live" | "training-preview"

export type BriefResponse = {
  brief: AcademyBrief
  mode: BriefMode
  notice?: string
  disclaimer: string
}

export const MAX_DUMP_CHARS = 24_000
export const MIN_DUMP_CHARS = 40

export const ACADEMY_METHOD = `You are a training coach at The Intel Analyst Academy. You turn a raw intel dump or analyst notes into a structured brief using the academy method taught in the catalog. This is education and practice — not finished operational intelligence.

Academy method (cite the matching lessons):
1. BLUF / headline first — start with the conclusion, not methodology (Intelligence Briefings; Executive Summaries).
2. Key judgments are assessments, not restated facts, each with high / moderate / low confidence and estimative language (Intelligence Report Components; Estimative Language).
3. Situation / background only what the reader needs to understand the analysis (Intelligence Report Components).
4. Analysis ties claims to evidence actually present in the dump (Evidence-Based Conclusions). Do not invent sources, numbers, or events.
5. Source assessment: what is known vs unknown, reliability limits, single-source risk.
6. Alternatives, assumptions, and collection gaps (Analysis of Competing Hypotheses; Collection Planning).
7. Recommendations are optional actions for a decision-maker, SMART where possible, without pretending to be a command (Recommendation Framework).
8. Cite only lessons from the provided catalog. Every citation href must be copied exactly.

If the dump is thin, say so. Use "insufficient information in the dump" rather than filling gaps with fiction.
Output JSON only, matching the schema.`

export function clipDump(raw: string): string {
  return raw.replace(/\r\n/g, "\n").trim().slice(0, MAX_DUMP_CHARS)
}

export function validateDump(raw: unknown): { ok: true; dump: string } | { ok: false; error: string } {
  if (typeof raw !== "string") return { ok: false, error: "Paste a text dump to brief." }
  const dump = clipDump(raw)
  if (dump.length < MIN_DUMP_CHARS) {
    return { ok: false, error: `Need at least ${MIN_DUMP_CHARS} characters of notes or a raw dump.` }
  }
  return { ok: true, dump }
}

function sanitizeCitations(
  citations: BriefCitation[],
  fallback: CiteableLesson[],
): BriefCitation[] {
  const cleaned: BriefCitation[] = []
  const seen = new Set<string>()

  for (const c of citations) {
    const href = c.href.startsWith("/topics/") ? c.href : c.href.replace(/^https?:\/\/[^/]+/, "")
    const lesson = citeableByHref.get(href)
    if (!lesson || seen.has(lesson.href)) continue
    seen.add(lesson.href)
    cleaned.push({
      title: lesson.title,
      href: lesson.href,
      why: (c.why || lesson.methodRole || lesson.category).slice(0, 280),
    })
  }

  for (const lesson of fallback) {
    if (cleaned.length >= 6) break
    if (seen.has(lesson.href)) continue
    seen.add(lesson.href)
    cleaned.push({
      title: lesson.title,
      href: lesson.href,
      why: lesson.methodRole || `Related academy lesson in ${lesson.category}.`,
    })
  }

  return cleaned.slice(0, 6)
}

export function coerceBrief(input: unknown, dump: string): AcademyBrief {
  const matched = matchLessons(dump)
  const parsed = academyBriefSchema.safeParse(input)

  if (parsed.success) {
    return {
      ...parsed.data,
      citations: sanitizeCitations(parsed.data.citations, matched),
    }
  }

  return buildTrainingPreview(dump)
}

function firstSentences(text: string, n: number): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20)
    .slice(0, n)
}

function bulletLines(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.replace(/^[-*•\d.)\s]+/, "").trim())
    .filter((l) => l.length > 24 && l.length < 280)
    .slice(0, 5)
}

export function buildTrainingPreview(dump: string): AcademyBrief {
  const matched = matchLessons(dump)
  const lines = dump.split(/\n+/).map((l) => l.trim()).filter(Boolean)
  const sentences = firstSentences(dump, 6)
  const bullets = bulletLines(dump)
  const headline = (lines[0] || sentences[0] || "Untitled dump").replace(/^#+\s*/, "").slice(0, 120)

  const judgmentSeeds = (bullets.length ? bullets : sentences).slice(0, 4)
  const keyJudgments = (judgmentSeeds.length ? judgmentSeeds : [headline]).map((statement) => ({
    statement: statement.slice(0, 280),
    confidence: "low" as const,
    estimativeLanguage: "insufficient information — training preview only",
  }))

  const citations = sanitizeCitations(
    matched.map((l) => ({
      title: l.title,
      href: l.href,
      why: l.methodRole || `Matched from the dump against ${l.category} lessons.`,
    })),
    matched,
  )

  return {
    title: `Training brief: ${headline}`,
    bluf:
      sentences[0]?.slice(0, 500) ||
      "The dump does not contain a clear bottom line. This preview structures what is present and flags gaps.",
    keyJudgments,
    situation: sentences.slice(0, 3).join(" ") || dump.slice(0, 600),
    analysis:
      "Training preview (no live model). Claims below are restated from the pasted dump only. Confidence is low because this path does not run the academy-method model — it organizes the text and attaches real catalog lessons you should study next.",
    sourceAssessment:
      "Source reliability cannot be scored from an unstructured paste without provenance. Treat every assertion in the dump as unevaluated reporting until sourced.",
    alternativesAndGaps:
      "Alternative explanations were not formally tested. Collection gaps: origin of the dump, timestamps, source access, and corroboration are unspecified.",
    recommendations: [
      "Rewrite the BLUF after studying Executive Summaries and Intelligence Briefings.",
      "Assign confidence only where evidence is explicit (Estimative Language).",
      "List what would disprove the lead judgment (Analysis of Competing Hypotheses).",
    ],
    citations,
  }
}

export function buildPrompt(dump: string, lessons: CiteableLesson[]): string {
  return `${ACADEMY_METHOD}

Allowed catalog (cite only these hrefs):
${catalogForPrompt(lessons)}

JSON schema:
{
  "title": string,
  "bluf": string,
  "keyJudgments": [{ "statement": string, "confidence": "high"|"moderate"|"low", "estimativeLanguage": string }],
  "situation": string,
  "analysis": string,
  "sourceAssessment": string,
  "alternativesAndGaps": string,
  "recommendations": string[],
  "citations": [{ "title": string, "href": string, "why": string }]
}

Raw dump / notes:
"""
${dump}
"""`
}

export const TRAINING_PREVIEW_NOTICE =
  "Training preview — live AI is not configured (missing GOOGLE_API_KEY). This draft organizes your paste and cites real academy lessons. It is not a model-authored assessment."

export { DISCLAIMER }
