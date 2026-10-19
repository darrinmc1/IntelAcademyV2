import {
  CREDIBILITY_GRADES,
  ESTIMATIVE_TERMS,
  RELIABILITY_GRADES,
  VAGUE_HEDGES,
  type ConfidenceLevel,
  type Consistency,
  type CredibilityGrade,
  type ReliabilityGrade,
} from "@/lib/exercises/scales"
import { cleanSubmission, type Exercise, type ExerciseSubmission } from "@/lib/exercises/types"
import { lessonsForSkills, type LessonLink, type SkillArea } from "@/lib/exercises/lessons"

/**
 * Deterministic answer-key scoring. No model involved — this is what every
 * student gets, AI key or not. The AI critique (feedback.ts) sits on top.
 */

export type RatingLevel = 1 | 2 | 3 | 4

export const RATING_LABELS: Record<RatingLevel, string> = {
  1: "Needs work",
  2: "Developing",
  3: "Proficient",
  4: "Strong",
}

export type GradeMatch = "exact" | "close" | "off" | "missing"

export type ReportComparison = {
  reportId: string
  title: string
  student: { reliability: ReliabilityGrade | ""; credibility: number; note: string }
  expected: {
    reliability: ReliabilityGrade
    credibility: number
    rationale: string
    flags: string[]
  }
  reliabilityMatch: GradeMatch
  credibilityMatch: GradeMatch
}

export type GapResult = {
  covered: Array<{ id: string; gap: string; matchedBy: string }>
  missed: Array<{ id: string; gap: string; whyItMatters: string; collection: string }>
  /** Student gaps that didn't match the key. Not wrong by definition — the AI critique judges them. */
  unmatched: string[]
}

export type HypothesisMatch = {
  id: string
  expert: string
  student: string
  kind?: string
  rated: number
  agreed: number
  disagreements: Array<{ reportId: string; student: Consistency; expert: Consistency }>
}

export type HypothesisResult = {
  studentCount: number
  matched: HypothesisMatch[]
  missed: Array<{ id: string; statement: string; kind?: string }>
  coveredAlternative: boolean
  /** Reports the expert matrix treats as diagnostic (consistent with some hypotheses, inconsistent with others). */
  diagnosticReports: string[]
}

export type AssessmentCheck = { id: string; label: string; passed: boolean; detail: string }

export type DimensionScore = {
  area: SkillArea
  pct: number
  rating: RatingLevel
  label: string
  summary: string
}

export type ScoreResult = {
  dimensions: DimensionScore[]
  reports: ReportComparison[]
  gaps: GapResult
  hypotheses: HypothesisResult
  assessment: { checks: AssessmentCheck[] }
  weakAreas: SkillArea[]
  lessons: LessonLink[]
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

export function normaliseText(text: string): string {
  return ` ${text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'\- ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()} `
}

/**
 * How many keyword fragments appear in the text. Keywords are normalised the
 * same way as the text ("$9,000" → "9 000", "tradie_deals" → "tradie deals").
 * A keyword wrapped in spaces (" id ") must match a whole word; otherwise it
 * matches as a fragment ("launder" matches "laundering").
 */
export function keywordHits(text: string, keywords: string[]): number {
  const hay = normaliseText(text)
  let hits = 0
  for (const raw of keywords) {
    const core = normaliseText(raw).trim()
    if (!core) continue
    const wholeWord = raw.startsWith(" ") || raw.endsWith(" ")
    if (hay.includes(wholeWord ? ` ${core} ` : core)) hits += 1
  }
  return hits
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export function findTerms(text: string, terms: string[]): string[] {
  const found: string[] = []
  const lower = text.toLowerCase()
  for (const term of terms) {
    const re = new RegExp(`(^|[^a-z])${escapeRegex(term)}([^a-z]|$)`, "i")
    if (re.test(lower)) found.push(term)
  }
  return found
}

export function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

function firstSentence(text: string): string {
  const match = text.trim().match(/^[\s\S]*?[.!?](\s|$)/)
  return (match ? match[0] : text).trim()
}

function ratingFor(pct: number): RatingLevel {
  if (pct >= 0.85) return 4
  if (pct >= 0.6) return 3
  if (pct >= 0.35) return 2
  return 1
}

// ---------------------------------------------------------------------------
// 1. Evaluating the information (Admiralty grades)
// ---------------------------------------------------------------------------

function defaultReliabilityRange(expected: ReliabilityGrade): ReliabilityGrade[] {
  if (expected === "F") return ["F"]
  const ordinal = RELIABILITY_GRADES.slice(0, 5) as ReliabilityGrade[]
  const i = ordinal.indexOf(expected)
  return ordinal.filter((_, j) => Math.abs(j - i) <= 1)
}

function defaultCredibilityRange(expected: number): number[] {
  if (expected === 6) return [6]
  return (CREDIBILITY_GRADES.slice(0, 5) as CredibilityGrade[]).filter((g) => Math.abs(g - expected) <= 1)
}

function gradeMatch<T extends string | number>(student: T | "" | 0, expected: T, acceptable: T[]): GradeMatch {
  if (student === "" || student === 0 || student === null || student === undefined) return "missing"
  if (student === expected) return "exact"
  if (acceptable.includes(student as T)) return "close"
  return "off"
}

function scoreReports(exercise: Exercise, sub: ExerciseSubmission): { reports: ReportComparison[]; pct: number; summary: string } {
  const byId = new Map(sub.evaluations.map((e) => [e.reportId, e]))
  let points = 0
  let exact = 0
  let inRange = 0
  let missing = 0

  const reports = exercise.reports.map((report): ReportComparison => {
    const e = report.expected
    const answer = byId.get(report.id)
    const reliabilityMatch = gradeMatch<ReliabilityGrade>(
      answer?.reliability ?? "",
      e.reliability,
      e.acceptableReliability ?? defaultReliabilityRange(e.reliability),
    )
    const credibilityMatch = gradeMatch<number>(
      answer?.credibility ?? 0,
      e.credibility,
      e.acceptableCredibility ?? defaultCredibilityRange(e.credibility),
    )
    for (const m of [reliabilityMatch, credibilityMatch]) {
      if (m === "exact") points += 2
      else if (m === "close") points += 1
    }
    if (reliabilityMatch === "missing" || credibilityMatch === "missing") missing += 1
    if (reliabilityMatch === "exact" && credibilityMatch === "exact") exact += 1
    if (
      (reliabilityMatch === "exact" || reliabilityMatch === "close") &&
      (credibilityMatch === "exact" || credibilityMatch === "close")
    ) {
      inRange += 1
    }
    return {
      reportId: report.id,
      title: report.title,
      student: {
        reliability: answer?.reliability ?? "",
        credibility: answer?.credibility ?? 0,
        note: answer?.note ?? "",
      },
      expected: {
        reliability: e.reliability,
        credibility: e.credibility,
        rationale: e.rationale,
        flags: e.flags ?? [],
      },
      reliabilityMatch,
      credibilityMatch,
    }
  })

  const max = exercise.reports.length * 4
  const n = exercise.reports.length
  let summary = `${inRange} of ${n} reports graded within the expert range (${exact} exact).`
  if (missing) summary += ` ${missing} not fully graded.`
  return { reports, pct: max ? points / max : 0, summary }
}

// ---------------------------------------------------------------------------
// 2. Intelligence gaps
// ---------------------------------------------------------------------------

function scoreGaps(exercise: Exercise, sub: ExerciseSubmission): { gaps: GapResult; pct: number; summary: string } {
  const studentGaps = sub.gaps
  const usedStudent = new Set<number>()
  const covered: GapResult["covered"] = []
  const missed: GapResult["missed"] = []

  for (const gap of exercise.modelAnswer.gaps) {
    const min = gap.minMatches ?? 1
    let best = -1
    let bestHits = 0
    studentGaps.forEach((text, i) => {
      const hits = keywordHits(text, gap.keywords)
      if (hits >= min && hits > bestHits) {
        best = i
        bestHits = hits
      }
    })
    if (best >= 0) {
      usedStudent.add(best)
      covered.push({ id: gap.id, gap: gap.gap, matchedBy: studentGaps[best] })
    } else {
      missed.push({ id: gap.id, gap: gap.gap, whyItMatters: gap.whyItMatters, collection: gap.collection })
    }
  }

  const unmatched = studentGaps.filter((_, i) => !usedStudent.has(i))
  const total = exercise.modelAnswer.gaps.length
  const pct = total ? covered.length / total : 0
  let summary = `${covered.length} of ${total} key gaps identified.`
  if (unmatched.length) summary += ` ${unmatched.length} other gap${unmatched.length === 1 ? "" : "s"} listed.`
  return { gaps: { covered, missed, unmatched }, pct, summary }
}

// ---------------------------------------------------------------------------
// 3. Hypotheses + ACH matrix
// ---------------------------------------------------------------------------

function scoreHypotheses(
  exercise: Exercise,
  sub: ExerciseSubmission,
): { hypotheses: HypothesisResult; pct: number; summary: string } {
  const expertList = exercise.modelAnswer.hypotheses
  const studentList = sub.hypotheses

  // Greedy one-to-one matching on keyword hits, strongest pairs first.
  const pairs: Array<{ e: number; s: number; hits: number }> = []
  expertList.forEach((h, e) => {
    studentList.forEach((sh, s) => {
      const hits = keywordHits(sh.statement, h.keywords)
      if (hits >= (h.minMatches ?? 1)) pairs.push({ e, s, hits })
    })
  })
  pairs.sort((a, b) => b.hits - a.hits || a.e - b.e || a.s - b.s)
  const takenE = new Set<number>()
  const takenS = new Set<number>()
  const assignment = new Map<number, number>()
  for (const p of pairs) {
    if (takenE.has(p.e) || takenS.has(p.s)) continue
    takenE.add(p.e)
    takenS.add(p.s)
    assignment.set(p.e, p.s)
  }

  const matched: HypothesisMatch[] = []
  const missed: HypothesisResult["missed"] = []
  let rated = 0
  let agreed = 0

  expertList.forEach((h, e) => {
    const s = assignment.get(e)
    if (s === undefined) {
      missed.push({ id: h.id, statement: h.statement, kind: h.kind })
      return
    }
    const student = studentList[s]
    const disagreements: HypothesisMatch["disagreements"] = []
    let r = 0
    let a = 0
    for (const report of exercise.reports) {
      const mine = student.ratings[report.id]
      const theirs = h.matrix[report.id]
      if (!mine || !theirs) continue
      r += 1
      if (mine === theirs) a += 1
      else disagreements.push({ reportId: report.id, student: mine as Consistency, expert: theirs })
    }
    rated += r
    agreed += a
    matched.push({ id: h.id, expert: h.statement, student: student.statement, kind: h.kind, rated: r, agreed: a, disagreements })
  })

  const coveredAlternative = matched.some((m) => m.kind === "alternative" || m.kind === "null")
  const diagnosticReports = exercise.reports
    .filter((r) => {
      const values = expertList.map((h) => h.matrix[r.id])
      return values.includes("C") && values.includes("I")
    })
    .map((r) => r.id)

  const coverage = expertList.length ? matched.length / expertList.length : 0
  const matrix = rated ? agreed / rated : 0
  const breadth = coveredAlternative || studentList.length >= 3 ? 1 : 0
  const missedLead = missed.some((h) => h.kind === "lead")
  // Missing the expert's lead explanation means the analysis is probably heading for the wrong answer.
  const pct = Math.min(0.5 * coverage + 0.35 * matrix + 0.15 * breadth, missedLead ? 0.55 : 1)

  let summary = `${matched.length} of ${expertList.length} expert hypotheses covered${missedLead ? " — including missing the expert's lead explanation" : ""}.`
  if (studentList.length === 0) summary += " You didn't write any hypotheses."
  else if (rated) summary += ` Your matrix agrees with the expert on ${agreed} of ${rated} rated cells.`
  else if (matched.length) summary += " Matrix not filled in for the matched hypotheses."
  return {
    hypotheses: { studentCount: studentList.length, matched, missed, coveredAlternative, diagnosticReports },
    pct,
    summary,
  }
}

// ---------------------------------------------------------------------------
// 4. The written assessment
// ---------------------------------------------------------------------------

const METHOD_OPENERS =
  /^(this (report|assessment|brief|paper|analysis)|the purpose|in this|background|following|as requested|on (mon|tue|wed|thu|fri|sat|sun|\d)|between|i have|we have (reviewed|looked|analysed|analyzed))/i

const CONFIDENCE_ORDER: Record<ConfidenceLevel, number> = { low: 1, moderate: 2, high: 3 }

function scoreAssessment(exercise: Exercise, sub: ExerciseSubmission): { checks: AssessmentCheck[]; pct: number; summary: string } {
  const { bluf, keyJudgments, indicators } = sub.assessment
  const judgmentText = keyJudgments.map((k) => k.statement).join(" \n")
  const allText = `${bluf}\n${judgmentText}`
  const checks: AssessmentCheck[] = []

  const blufWords = wordCount(bluf)
  checks.push({
    id: "bluf-present",
    label: "BLUF written",
    passed: blufWords >= 12,
    detail: blufWords >= 12 ? "You led with a bottom line." : "Write a bottom line of at least a sentence or two.",
  })

  const opener = firstSentence(bluf)
  const openerHasJudgment =
    findTerms(opener, ESTIMATIVE_TERMS).length > 0 || /\b(assess|judge|we judge|we assess|our judgment)\b/i.test(opener)
  const startsWithMethod = METHOD_OPENERS.test(bluf.trim())
  const judgmentFirst = blufWords > 0 && openerHasJudgment && !startsWithMethod
  checks.push({
    id: "bluf-judgment-first",
    label: "BLUF opens with a judgment",
    passed: judgmentFirst,
    detail: judgmentFirst
      ? "Your first sentence is an assessment, not backstory."
      : startsWithMethod
        ? "Your BLUF opens with method or background. Lead with what you assess."
        : "Your first sentence doesn't state an assessment. Put the answer to the key question first.",
  })

  checks.push({
    id: "bluf-concise",
    label: "BLUF is concise",
    passed: blufWords > 0 && blufWords <= 80,
    detail:
      blufWords > 80
        ? `Your BLUF runs to ${blufWords} words. Aim for 80 or fewer; detail belongs in the judgments.`
        : blufWords === 0
          ? "No BLUF to measure."
          : `${blufWords} words. Readable in one breath.`,
  })

  checks.push({
    id: "judgments-count",
    label: "At least two key judgments",
    passed: keyJudgments.length >= 2,
    detail: `You wrote ${keyJudgments.length} key judgment${keyJudgments.length === 1 ? "" : "s"}.`,
  })

  const unrated = keyJudgments.filter((k) => !k.confidence).length
  checks.push({
    id: "judgments-confidence",
    label: "Every judgment carries a confidence level",
    passed: keyJudgments.length > 0 && unrated === 0,
    detail:
      keyJudgments.length === 0
        ? "No key judgments to rate."
        : unrated
          ? `${unrated} judgment${unrated === 1 ? " has" : "s have"} no confidence level.`
          : "Confidence stated for each judgment.",
  })

  const terms = findTerms(allText, ESTIMATIVE_TERMS)
  checks.push({
    id: "estimative-language",
    label: "Uses estimative language",
    passed: terms.length > 0,
    detail: terms.length
      ? `Found: ${terms.slice(0, 4).join(", ")}.`
      : "No probability terms found. Say how likely — likely, very likely, roughly even chance…",
  })

  const hedges = findTerms(allText, VAGUE_HEDGES)
  checks.push({
    id: "vague-hedges",
    label: "Avoids unquantified hedges",
    passed: hedges.length <= 1,
    detail:
      hedges.length <= 1
        ? hedges.length
          ? `One hedge ("${hedges[0]}") — acceptable.`
          : "No may/might/could hedging."
        : `Hedges found: ${hedges.join(", ")}. Replace them with a probability term.`,
  })

  const expertMax = Math.max(...exercise.modelAnswer.keyJudgments.map((k) => CONFIDENCE_ORDER[k.confidence]))
  const studentHigh = keyJudgments.some((k) => k.confidence === "high")
  const overconfident = studentHigh && expertMax < CONFIDENCE_ORDER.high
  checks.push({
    id: "calibration",
    label: "Confidence matches the evidence base",
    passed: !overconfident,
    detail: overconfident
      ? "You used high confidence. Nothing in this pack is strong enough for it — key reporting is single-source, uncorroborated or possibly circular."
      : "No overconfident judgments.",
  })

  const lead = exercise.modelAnswer.hypotheses.find((h) => h.kind === "lead")
  const mustAddress =
    exercise.modelAnswer.mustAddress ?? (lead ? { label: `the leading explanation ("${lead.statement}")`, keywords: lead.keywords } : null)
  let addressesKeyIssue = true
  if (mustAddress) {
    addressesKeyIssue = keywordHits(allText, mustAddress.keywords) >= 1
    checks.push({
      id: "addresses-key-issue",
      label: "Engages with what the evidence points to",
      passed: addressesKeyIssue,
      detail: addressesKeyIssue
        ? "Your judgments deal with the issue the strongest evidence points at."
        : `Your BLUF and judgments don't engage with ${mustAddress.label}.`,
    })
  }

  const indicatorLines = indicators
    .split(/\n|;|•|\.\s+/)
    .map((s) => s.replace(/^[-*\d.)\s]+/, "").trim())
    .filter((s) => s.length > 8)
  const hasIndicators = indicatorLines.length >= 2 && wordCount(indicators) >= 12
  checks.push({
    id: "indicators",
    label: "Names what would change the assessment",
    passed: hasIndicators,
    detail: hasIndicators
      ? `${indicatorLines.length} indicators listed.`
      : "List at least two observable things that would raise or lower your judgment.",
  })

  const passed = checks.filter((c) => c.passed).length
  let pct = checks.length ? passed / checks.length : 0
  // Substance outranks format: a tidy assessment of the wrong thing, or one
  // claiming more confidence than the evidence allows, can't rate as Strong.
  if (overconfident) pct = Math.min(pct, 0.84)
  if (!addressesKeyIssue) pct = Math.min(pct, 0.59)
  return { checks, pct, summary: `${passed} of ${checks.length} assessment checks passed.` }
}

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

export function scoreSubmission(exercise: Exercise, rawSubmission: ExerciseSubmission): ScoreResult {
  const sub = cleanSubmission(rawSubmission)
  const evaluation = scoreReports(exercise, sub)
  const gaps = scoreGaps(exercise, sub)
  const hypotheses = scoreHypotheses(exercise, sub)
  const assessment = scoreAssessment(exercise, sub)

  const dimension = (area: SkillArea, pct: number, summary: string): DimensionScore => {
    const rating = ratingFor(pct)
    return { area, pct: Math.round(pct * 100) / 100, rating, label: RATING_LABELS[rating], summary }
  }

  const dimensions: DimensionScore[] = [
    dimension("evaluation", evaluation.pct, evaluation.summary),
    dimension("gaps", gaps.pct, gaps.summary),
    dimension("hypotheses", hypotheses.pct, hypotheses.summary),
    dimension("assessment", assessment.pct, assessment.summary),
  ]

  const sorted = [...dimensions].sort((a, b) => a.pct - b.pct)
  const weak = sorted.filter((d) => d.rating <= 2).map((d) => d.area)
  const weakAreas = (weak.length ? weak : [sorted[0].area]).slice(0, 2)

  return {
    dimensions,
    reports: evaluation.reports,
    gaps: gaps.gaps,
    hypotheses: hypotheses.hypotheses,
    assessment: { checks: assessment.checks },
    weakAreas,
    lessons: lessonsForSkills(weakAreas, exercise.relatedLessons),
  }
}

/** Compact plain-text digest of a score, for model prompts. */
export function scoreDigest(score: ScoreResult): string {
  const lines: string[] = []
  for (const d of score.dimensions) lines.push(`- ${d.area}: ${d.label} — ${d.summary}`)
  const offGrades = score.reports
    .filter((r) => r.reliabilityMatch === "off" || r.credibilityMatch === "off")
    .map((r) => `${r.reportId} (student ${r.student.reliability || "?"}${r.student.credibility || "?"}, expert ${r.expected.reliability}${r.expected.credibility})`)
  if (offGrades.length) lines.push(`- Grades outside the expert range: ${offGrades.join("; ")}`)
  if (score.gaps.missed.length) lines.push(`- Key gaps missed: ${score.gaps.missed.map((g) => g.gap).join(" | ")}`)
  if (score.gaps.unmatched.length) lines.push(`- Student gaps not in the key (judge whether valid): ${score.gaps.unmatched.join(" | ")}`)
  if (score.hypotheses.missed.length) lines.push(`- Expert hypotheses not covered: ${score.hypotheses.missed.map((h) => h.statement).join(" | ")}`)
  const failed = score.assessment.checks.filter((c) => !c.passed).map((c) => c.label)
  if (failed.length) lines.push(`- Writing checks failed: ${failed.join("; ")}`)
  return lines.join("\n")
}
