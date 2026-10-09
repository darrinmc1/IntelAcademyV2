import type { Exercise, ExerciseStudentView, ExerciseSubmission } from "@/lib/exercises/types"

/**
 * Plain-text renderings of exercises and submissions for model prompts.
 * Shared by the feedback marker and The Chief so both see the same thing.
 */

const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text)

export function digestScenario(exercise: ExerciseStudentView | Exercise): string {
  return [
    `TITLE: ${exercise.title} (${exercise.level}, ${exercise.domain})`,
    `REQUESTER: ${exercise.scenario.requester}`,
    `KEY QUESTION: ${exercise.scenario.keyQuestion}`,
    `DEADLINE: ${exercise.scenario.deadline}`,
    `SETTING: ${clip(exercise.scenario.setting, 900)}`,
  ].join("\n")
}

export function digestReports(exercise: ExerciseStudentView | Exercise, includeKey: boolean, bodyChars = 700): string {
  return exercise.reports
    .map((r) => {
      const lines = [
        `${r.id} — ${r.title} [${r.sourceType}] (${r.dateTime})`,
        `  Source: ${clip(r.source, 300)}`,
        `  Report: ${clip(r.body.replace(/\s+/g, " "), bodyChars)}`,
      ]
      const expected = includeKey ? (r as Exercise["reports"][number]).expected : undefined
      if (expected) {
        lines.push(`  EXPERT GRADE: ${expected.reliability}${expected.credibility} — ${clip(expected.rationale, 400)}`)
        if (expected.flags?.length) lines.push(`  FLAGS: ${expected.flags.join(" | ")}`)
      }
      return lines.join("\n")
    })
    .join("\n")
}

export function digestModelAnswer(exercise: Exercise): string {
  const m = exercise.modelAnswer
  return [
    `MODEL BLUF: ${m.bluf}`,
    "MODEL KEY JUDGMENTS:",
    ...m.keyJudgments.map((k) => `- [${k.confidence}] ${k.statement}`),
    "EXPECTED GAPS:",
    ...m.gaps.map((g) => `- ${g.id}: ${g.gap} (why: ${clip(g.whyItMatters, 160)})`),
    "EXPERT HYPOTHESES (ACH matrix):",
    ...m.hypotheses.map(
      (h) =>
        `- ${h.id}${h.kind ? ` (${h.kind})` : ""}: ${h.statement} | ${Object.entries(h.matrix)
          .map(([id, v]) => `${id}:${v}`)
          .join(" ")} | ${clip(h.assessment, 220)}`,
    ),
    "INDICATORS:",
    ...m.indicators.map((i) => `- ${i}`),
    "COMMON MISTAKES:",
    ...m.commonMistakes.map((c) => `- ${c}`),
  ].join("\n")
}

export function digestSubmission(sub: ExerciseSubmission): string {
  const grades = sub.evaluations
    .map((e) => `- ${e.reportId}: ${e.reliability || "?"}${e.credibility || "?"}${e.note ? ` — ${clip(e.note, 240)}` : ""}`)
    .join("\n")
  const gaps = sub.gaps.length ? sub.gaps.map((g) => `- ${clip(g, 300)}`).join("\n") : "(none)"
  const hyps = sub.hypotheses.length
    ? sub.hypotheses
        .map((h, i) => {
          const ratings = Object.entries(h.ratings)
            .filter(([, v]) => v)
            .map(([id, v]) => `${id}:${v}`)
            .join(" ")
          return `- Student H${i + 1}: ${clip(h.statement, 300)}${ratings ? ` | ${ratings}` : " | (matrix not filled)"}`
        })
        .join("\n")
    : "(none)"
  const kjs = sub.assessment.keyJudgments.length
    ? sub.assessment.keyJudgments.map((k) => `- [${k.confidence || "no confidence"}] ${clip(k.statement, 500)}`).join("\n")
    : "(none)"
  return [
    "SOURCE GRADES:",
    grades,
    "GAPS:",
    gaps,
    "HYPOTHESES:",
    hyps,
    `BLUF: ${sub.assessment.bluf ? clip(sub.assessment.bluf, 1200) : "(none)"}`,
    "KEY JUDGMENTS:",
    kjs,
    `INDICATORS: ${sub.assessment.indicators ? clip(sub.assessment.indicators, 1200) : "(none)"}`,
    `REASONING NOTES: ${sub.assessment.reasoning ? clip(sub.assessment.reasoning, 2000) : "(none)"}`,
  ].join("\n")
}
