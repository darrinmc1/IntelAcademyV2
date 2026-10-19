import { z } from "zod"
import type { ChatMessage } from "@/lib/ai/llm"
import { LESSON_TITLES, normaliseHref } from "@/lib/exercises/lessons"
import { checkExerciseIntegrity, EXERCISE_LEVELS, exerciseSchema, type Exercise } from "@/lib/exercises/types"
import { CONSISTENCY_VALUES, RELIABILITY_GRADES } from "@/lib/exercises/scales"
import { PRACTICE_DOMAINS, PRACTICE_FOCUS } from "@/lib/instructor/options"

export { PRACTICE_DOMAINS, PRACTICE_FOCUS }

/**
 * The Chief writes a fresh practice exercise on request. The model returns
 * JSON in the library's exercise schema; we repair the predictable slips
 * (missing matrix cells, acceptable ranges that omit the expected grade,
 * invented lesson links) and then validate exactly as the library is validated.
 */

export const practiceRequestSchema = z.object({
  level: z.enum(EXERCISE_LEVELS),
  domain: z.enum(PRACTICE_DOMAINS),
  focus: z.enum(PRACTICE_FOCUS),
})

export type PracticeRequest = z.infer<typeof practiceRequestSchema>

const REPORTS_BY_LEVEL: Record<(typeof EXERCISE_LEVELS)[number], number> = {
  Beginner: 4,
  Intermediate: 5,
  Advanced: 6,
}

export const GENERATOR_SYSTEM = `You are The Chief, senior instructor at The Intel Analyst Academy, writing a short FICTIONAL practice exercise for an intelligence analysis student. The exercise is a brief pack (scenario + several reports) with an expert answer key.

Hard rules:
- Everything is invented: people, companies, agencies, places, countries, groups, products. Never use real organisations, real people, real countries or real extremist or criminal groups.
- No graphic violence, no weapons or explosives detail, no exploit or hacking instructions, nothing that works as a how-to for crime. The analysis is the point, not the crime.
- Australian English. Plain, specific prose — reports should read like real reporting, with times, dates (no years), and concrete details.
- Make the pack teach the requested FOCUS: build in at least one trap of that kind (e.g. two reports sharing one origin for circular reporting; an anonymous source for grading; evidence that fits every hypothesis for diagnosticity).
- Grades use the Admiralty system: reliability A–F (F = cannot be judged), credibility 1–6 (1 = confirmed by independent sources, 6 = cannot be judged). Give acceptable ranges that a trained analyst could defend, always including the expected grade.
- Exactly three hypotheses: one lead, one alternative, one null ("unrelated / innocent" style). Every hypothesis needs a matrix entry (C, I or N) for EVERY report id.
- Keywords are short lower-case fragments a student might type (4–10 per gap or hypothesis), e.g. "launder", "insider", "van".
- The model BLUF starts with a judgment using Kent-scale language (almost certain, very likely, likely, roughly even chance, unlikely, very unlikely), is at most 70 words and states confidence. Key judgments state probability and confidence separately and never use "high" confidence unless the pack contains independent, confirmed reporting.
- relatedLessons: 2–4 hrefs copied exactly from ALLOWED LESSONS.

Return JSON only, no commentary.`

function schemaSkeleton(reportCount: number): string {
  return `{
  "title": string (3–8 words),
  "level": "Beginner" | "Intermediate" | "Advanced",
  "domain": string,
  "estimatedMinutes": number (15–40),
  "skills": string[] (2–4),
  "summary": string (one or two sentences, max 300 chars),
  "scenario": { "setting": string (80–160 words), "requester": string (fictional name + role), "keyQuestion": string, "deadline": string },
  "reports": [ ${reportCount} items: {
      "id": "R1".."R${reportCount}",
      "title": string,
      "sourceType": string (e.g. "Official record", "Human source (first-hand)", "Anonymous tip", "Open source"),
      "source": string (what is known about the source and its track record),
      "dateTime": string,
      "body": string (50–140 words),
      "expected": { "reliability": "A".."F", "credibility": 1..6, "acceptableReliability": string[], "acceptableCredibility": number[], "rationale": string, "flags": string[] (0–2) }
  } ],
  "modelAnswer": {
    "bluf": string,
    "keyJudgments": [ { "statement": string, "confidence": "high" | "moderate" | "low" } ] (2–3),
    "gaps": [ { "id": "G1".., "gap": string, "whyItMatters": string, "collection": string, "keywords": string[], "minMatches": 1 } ] (3–5),
    "hypotheses": [ { "id": "H1".."H3", "statement": string, "kind": "lead" | "alternative" | "null", "keywords": string[], "minMatches": 1, "matrix": { "R1": "C"|"I"|"N", ... every report }, "assessment": string } ],
    "indicators": string[] (3–5),
    "commonMistakes": string[] (3–5),
    "teachingPoints": string[] (2–4)
  },
  "relatedLessons": string[]
}`
}

export function buildGeneratorMessages(req: PracticeRequest): { system: string; messages: ChatMessage[] } {
  const reportCount = REPORTS_BY_LEVEL[req.level]
  const lessons = Object.entries(LESSON_TITLES)
    .map(([href, title]) => `- ${title} | ${href}`)
    .join("\n")
  const content = [
    `Write one ${req.level} practice exercise.`,
    `DOMAIN: ${req.domain}`,
    `FOCUS: ${req.focus}`,
    `REPORTS: exactly ${reportCount}`,
    "",
    "JSON SHAPE:",
    schemaSkeleton(reportCount),
    "",
    "ALLOWED LESSONS:",
    lessons,
  ].join("\n")
  return { system: GENERATOR_SYSTEM, messages: [{ role: "user", content }] }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40)
}

function keywordsFrom(text: string): string[] {
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length > 4),
    ),
  ).slice(0, 8)
}

// Model output before validation: deliberately loose so the repair pass can touch any field.
type Loose = Record<string, any>

/** Fix the predictable slips before validation. Never invents content. */
export function repairGeneratedExercise(raw: unknown, req: PracticeRequest): unknown {
  if (!raw || typeof raw !== "object") return raw
  const ex = structuredClone(raw) as Loose
  const suffix = Math.random().toString(36).slice(2, 8)
  ex.slug = `practice-${slugify(String(ex.title ?? "exercise")) || "exercise"}-${suffix}`
  ex.generated = true
  ex.level = req.level
  ex.domain = typeof ex.domain === "string" && ex.domain.trim() ? ex.domain.trim().slice(0, 60) : req.domain
  if (typeof ex.estimatedMinutes !== "number") ex.estimatedMinutes = 20
  ex.estimatedMinutes = Math.min(120, Math.max(5, Math.round(ex.estimatedMinutes)))

  const reports: Loose[] = Array.isArray(ex.reports) ? ex.reports : []
  reports.forEach((r, i) => {
    r.id = `R${i + 1}`
    const e = (r.expected ??= {})
    if (typeof e.reliability === "string") e.reliability = e.reliability.trim().toUpperCase()
    if (typeof e.credibility === "string") e.credibility = Number(e.credibility)
    if (Array.isArray(e.acceptableReliability)) {
      e.acceptableReliability = e.acceptableReliability
        .map((g: unknown) => String(g).trim().toUpperCase())
        .filter((g: string) => (RELIABILITY_GRADES as readonly string[]).includes(g))
      if (!e.acceptableReliability.includes(e.reliability)) e.acceptableReliability.push(e.reliability)
    }
    if (Array.isArray(e.acceptableCredibility)) {
      e.acceptableCredibility = e.acceptableCredibility.map(Number).filter((g: number) => g >= 1 && g <= 6)
      if (!e.acceptableCredibility.includes(e.credibility)) e.acceptableCredibility.push(e.credibility)
    }
  })
  const ids = reports.map((r) => r.id)

  const answer: Loose = ex.modelAnswer ?? {}
  ;(Array.isArray(answer.gaps) ? answer.gaps : []).forEach((g: Loose, i: number) => {
    g.id = `G${i + 1}`
    if (!Array.isArray(g.keywords) || g.keywords.length === 0) g.keywords = keywordsFrom(String(g.gap ?? ""))
    g.keywords = g.keywords.map((k: unknown) => String(k).toLowerCase().trim()).filter((k: string) => k.length >= 2).slice(0, 24)
    g.minMatches = 1
  })
  ;(Array.isArray(answer.hypotheses) ? answer.hypotheses : []).forEach((h: Loose, i: number) => {
    h.id = `H${i + 1}`
    if (!Array.isArray(h.keywords) || h.keywords.length === 0) h.keywords = keywordsFrom(String(h.statement ?? ""))
    h.keywords = h.keywords.map((k: unknown) => String(k).toLowerCase().trim()).filter((k: string) => k.length >= 2).slice(0, 24)
    h.minMatches = 1
    const matrix: Loose = {}
    for (const id of ids) {
      const v = String(h.matrix?.[id] ?? "N").trim().toUpperCase()
      matrix[id] = (CONSISTENCY_VALUES as readonly string[]).includes(v) ? v : "N"
    }
    h.matrix = matrix
  })

  ex.relatedLessons = (Array.isArray(ex.relatedLessons) ? ex.relatedLessons : [])
    .map((href: unknown) => normaliseHref(String(href)))
    .filter((href: string | null): href is string => !!href && !!LESSON_TITLES[href])
    .slice(0, 6)
  return ex
}

export function validateGeneratedExercise(raw: unknown): { ok: true; exercise: Exercise } | { ok: false; problems: string[] } {
  const parsed = exerciseSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, problems: parsed.error.issues.slice(0, 8).map((i) => `${i.path.join(".")}: ${i.message}`) }
  }
  const problems = checkExerciseIntegrity(parsed.data)
  return problems.length ? { ok: false, problems } : { ok: true, exercise: parsed.data }
}
