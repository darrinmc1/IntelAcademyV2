import type { ExerciseStudentView, ExerciseSubmission } from "@/lib/exercises/types"

/**
 * A fresh, empty submission for an exercise. Lives outside types.ts so client
 * components can use it without pulling zod into the browser bundle.
 */
export function emptySubmission(exercise: Pick<ExerciseStudentView, "reports">): ExerciseSubmission {
  return {
    evaluations: exercise.reports.map((r) => ({ reportId: r.id, reliability: "", credibility: 0, note: "" })),
    gaps: ["", "", ""],
    hypotheses: [
      { statement: "", ratings: {} },
      { statement: "", ratings: {} },
      { statement: "", ratings: {} },
    ],
    assessment: {
      bluf: "",
      keyJudgments: [
        { statement: "", confidence: "" },
        { statement: "", confidence: "" },
      ],
      indicators: "",
      reasoning: "",
    },
  }
}
