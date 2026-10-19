import { describe, expect, it } from "vitest"
import { getExercise } from "@/data/exercises"
import { emptySubmission, toStudentView, type ExerciseSubmission } from "@/lib/exercises/types"
import { findTerms, keywordHits, scoreDigest, scoreSubmission } from "@/lib/exercises/scoring"
import { ESTIMATIVE_TERMS } from "@/lib/exercises/scales"

const pier9 = getExercise("night-shift-at-pier-9")!

function blank(): ExerciseSubmission {
  return emptySubmission(toStudentView(pier9))
}

describe("keywordHits", () => {
  it("matches fragments and normalises punctuation", () => {
    expect(keywordHits("Money laundering via over-invoicing", ["launder", "over-invoic"])).toBe(2)
    expect(keywordHits("Paid $9,000 on the forum", ["9,000"])).toBe(1)
    expect(keywordHits("Who runs tradie_deals_88?", ["tradie deals"])).toBe(1)
  })

  it("respects whole-word keywords", () => {
    expect(keywordHits("check the ID at the counter", [" id "])).toBe(1)
    expect(keywordHits("the idea is", [" id "])).toBe(0)
  })
})

describe("findTerms", () => {
  it("finds estimative terms on word boundaries", () => {
    expect(findTerms("It is likely the group returns.", ESTIMATIVE_TERMS)).toContain("likely")
    expect(findTerms("Very unlikely to stop.", ESTIMATIVE_TERMS)).toEqual(expect.arrayContaining(["unlikely", "very unlikely"]))
    expect(findTerms("Likelihood was discussed.", ["likely"])).toEqual([])
  })
})

describe("scoreSubmission", () => {
  it("handles an empty submission without throwing", () => {
    const score = scoreSubmission(pier9, blank())
    expect(score.dimensions.map((d) => d.rating)).toEqual([1, 1, 1, 1])
    expect(score.reports.every((r) => r.reliabilityMatch === "missing")).toBe(true)
    expect(score.weakAreas.length).toBeGreaterThan(0)
    expect(score.lessons.length).toBeGreaterThan(0)
  })

  it("grades Admiralty answers as exact, close, off or missing", () => {
    const sub = blank()
    sub.evaluations = sub.evaluations.map((e) => {
      if (e.reportId === "R1") return { ...e, reliability: "B", credibility: 2 } // exact
      if (e.reportId === "R2") return { ...e, reliability: "C", credibility: 3 } // close (listed acceptable)
      if (e.reportId === "R3") return { ...e, reliability: "E", credibility: 3 } // E for an anonymous caller is wrong
      return e
    })
    const byId = Object.fromEntries(scoreSubmission(pier9, sub).reports.map((r) => [r.reportId, r]))
    expect(byId.R1.reliabilityMatch).toBe("exact")
    expect(byId.R1.credibilityMatch).toBe("exact")
    expect(byId.R2.reliabilityMatch).toBe("close")
    expect(byId.R2.credibilityMatch).toBe("close")
    expect(byId.R3.reliabilityMatch).toBe("off")
    expect(byId.R4.reliabilityMatch).toBe("missing")
  })

  it("credits gaps written in the student's own words", () => {
    const sub = blank()
    sub.gaps = ["Who owns the white van?", "Is the informant just repeating the anonymous tip?", "Something unrelated about parking"]
    const { gaps } = scoreSubmission(pier9, sub)
    expect(gaps.covered.map((g) => g.id)).toEqual(expect.arrayContaining(["G1", "G4"]))
    expect(gaps.unmatched).toEqual(["Something unrelated about parking"])
  })

  it("matches hypotheses one-to-one and compares the ACH matrix", () => {
    const sub = blank()
    sub.hypotheses = [
      { statement: "Same crew working with an insider guard who has the keys", ratings: { R1: "C", R2: "C", R3: "C" } },
      { statement: "The Haskett brothers acting alone", ratings: { R2: "C" } },
      { statement: "Unrelated opportunistic thefts", ratings: { R1: "I" } },
    ]
    const { hypotheses } = scoreSubmission(pier9, sub)
    const ids = hypotheses.matched.map((m) => m.id).sort()
    expect(ids).toEqual(["H1", "H2", "H3"])
    const h1 = hypotheses.matched.find((m) => m.id === "H1")!
    expect(h1.disagreements).toEqual([{ reportId: "R2", student: "C", expert: "I" }])
    expect(hypotheses.coveredAlternative).toBe(true)
  })

  it("caps the hypotheses rating when the expert's lead explanation is missed", () => {
    const sub = blank()
    sub.hypotheses = [
      { statement: "The Haskett brothers acting alone", ratings: { R1: "C", R2: "I", R3: "C", R4: "C", R5: "C", R6: "C" } },
      { statement: "Unrelated opportunistic thefts", ratings: { R1: "I", R2: "I", R3: "I", R4: "N", R5: "N", R6: "I" } },
    ]
    const h = scoreSubmission(pier9, sub).dimensions.find((d) => d.area === "hypotheses")!
    expect(h.rating).toBeLessThanOrEqual(2)
    expect(h.summary).toContain("lead explanation")
  })

  it("flags a BLUF that opens with background, missing confidence and overconfidence", () => {
    const sub = blank()
    sub.assessment = {
      bluf: "This report looks at five break-ins at Pier 9 between 2 and 20 August and what we know about them so far.",
      keyJudgments: [
        { statement: "The Haskett brothers did all five break-ins.", confidence: "high" },
        { statement: "They might be selling at the market.", confidence: "" },
      ],
      indicators: "",
      reasoning: "",
    }
    const checks = Object.fromEntries(scoreSubmission(pier9, sub).assessment.checks.map((c) => [c.id, c.passed]))
    expect(checks["bluf-judgment-first"]).toBe(false)
    expect(checks["judgments-confidence"]).toBe(false)
    expect(checks["calibration"]).toBe(false)
    expect(checks["estimative-language"]).toBe(false)
    expect(checks["indicators"]).toBe(false)
    expect(checks["addresses-key-issue"]).toBe(false)
    expect(checks["judgments-count"]).toBe(true)
  })

  it("won't rate a tidy assessment of the wrong thing as Strong", () => {
    const sub = blank()
    sub.assessment = {
      bluf: "We assess it is very likely the Haskett brothers committed all five break-ins (moderate confidence).",
      keyJudgments: [
        { statement: "It is very likely the Haskett brothers committed the series.", confidence: "moderate" },
        { statement: "It is likely they are selling the goods at the Sunday market.", confidence: "low" },
      ],
      indicators: "More stolen goods sold under a Haskett licence.\nThe Hasketts are seen near Pier 9 at night.",
      reasoning: "",
    }
    const d = scoreSubmission(pier9, sub).dimensions.find((x) => x.area === "assessment")!
    expect(d.rating).toBeLessThanOrEqual(2)
  })

  it("passes a well-formed assessment", () => {
    const sub = blank()
    sub.assessment = {
      bluf: "We assess the five break-ins are likely the work of one group, possibly with help from a keyholder (moderate confidence).",
      keyJudgments: [
        { statement: "It is likely one group committed all five break-ins.", confidence: "moderate" },
        { statement: "There is a roughly even chance a keyholder is helping them.", confidence: "low" },
      ],
      indicators: "Plate ZQ-4 resolves to a guard's van.\nAnother outage with the junction box unlocked and undamaged.",
      reasoning: "",
    }
    const failed = scoreSubmission(pier9, sub).assessment.checks.filter((c) => !c.passed).map((c) => c.id)
    expect(failed).toEqual([])
  })

  it("produces a digest for prompts", () => {
    const digest = scoreDigest(scoreSubmission(pier9, blank()))
    expect(digest).toContain("evaluation:")
    expect(digest).toContain("Key gaps missed")
  })
})
