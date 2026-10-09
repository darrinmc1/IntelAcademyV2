import { existsSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { exercises, exerciseCards, getExercise } from "@/data/exercises"
import { checkExerciseIntegrity, exerciseSchema, toStudentView, type Exercise, type ExerciseSubmission } from "@/lib/exercises/types"
import { keywordHits, scoreSubmission } from "@/lib/exercises/scoring"

const topicExists = (href: string) =>
  existsSync(path.join(process.cwd(), "app", "topics", href.replace(/^\/topics\//, ""), "page.tsx"))

/** A submission that is exactly the expert answer — used to prove each pack is self-consistent. */
function expertSubmission(ex: Exercise): ExerciseSubmission {
  return {
    evaluations: ex.reports.map((r) => ({
      reportId: r.id,
      reliability: r.expected.reliability,
      credibility: r.expected.credibility,
      note: "",
    })),
    gaps: ex.modelAnswer.gaps.map((g) => g.gap),
    hypotheses: ex.modelAnswer.hypotheses.map((h) => ({ statement: h.statement, ratings: { ...h.matrix } })),
    assessment: {
      bluf: ex.modelAnswer.bluf,
      keyJudgments: ex.modelAnswer.keyJudgments.map((k) => ({ statement: k.statement, confidence: k.confidence })),
      indicators: ex.modelAnswer.indicators.join("\n"),
      reasoning: "",
    },
  }
}

describe("exercise library", () => {
  it("has unique slugs and can look each one up", () => {
    const slugs = exercises.map((e) => e.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(getExercise(slug)?.slug).toBe(slug)
    expect(exerciseCards()).toHaveLength(exercises.length)
  })

  for (const ex of exercises) {
    describe(ex.slug, () => {
      it("matches the exercise schema", () => {
        const parsed = exerciseSchema.safeParse(ex)
        if (!parsed.success) console.error(parsed.error.issues)
        expect(parsed.success).toBe(true)
      })

      it("passes the integrity checks (ids, ACH matrix, acceptable grades)", () => {
        expect(checkExerciseIntegrity(ex)).toEqual([])
      })

      it("links only to lesson pages that exist", () => {
        for (const href of ex.relatedLessons) expect(topicExists(href), href).toBe(true)
      })

      it("never sends the answer key to the student view", () => {
        const view = JSON.stringify(toStudentView(ex))
        expect(view).not.toContain("modelAnswer")
        expect(view).not.toContain("acceptableReliability")
        expect(view).not.toContain(ex.modelAnswer.bluf.slice(0, 40))
        for (const r of ex.reports) expect(view).not.toContain(r.expected.rationale.slice(0, 40))
      })

      it("expert gaps and hypotheses match their own keywords", () => {
        for (const g of ex.modelAnswer.gaps) {
          expect(keywordHits(g.gap, g.keywords), g.id).toBeGreaterThanOrEqual(g.minMatches ?? 1)
        }
        for (const h of ex.modelAnswer.hypotheses) {
          expect(keywordHits(h.statement, h.keywords), h.id).toBeGreaterThanOrEqual(h.minMatches ?? 1)
        }
      })

      it("scores the expert answer as Strong on every dimension", () => {
        const score = scoreSubmission(ex, expertSubmission(ex))
        for (const d of score.dimensions) {
          expect(d.rating, `${d.area}: ${d.summary}`).toBe(4)
        }
        expect(score.hypotheses.matched).toHaveLength(ex.modelAnswer.hypotheses.length)
        expect(score.gaps.missed).toEqual([])
        const failed = score.assessment.checks.filter((c) => !c.passed)
        expect(failed, JSON.stringify(failed)).toEqual([])
      })

      it("has at least one diagnostic report in the expert matrix", () => {
        const score = scoreSubmission(ex, expertSubmission(ex))
        expect(score.hypotheses.diagnosticReports.length).toBeGreaterThan(0)
      })
    })
  }
})
