import { describe, expect, it } from "vitest"
import { getExercise } from "@/data/exercises"
import {
  buildInstructorPrompt,
  bestTechnique,
  coerceInstructorReply,
  instructorRequestSchema,
  offlineReply,
  resolveContext,
  socraticQuestions,
  trimConversation,
} from "@/lib/instructor/instructor"
import { TECHNIQUES } from "@/lib/instructor/techniques"
import { LESSON_TITLES } from "@/lib/exercises/lessons"
import { emptySubmission, toStudentView, type Exercise } from "@/lib/exercises/types"
import { repairGeneratedExercise, validateGeneratedExercise } from "@/lib/instructor/generate"

const pier9 = getExercise("night-shift-at-pier-9")!

describe("techniques", () => {
  it("only cite lessons that exist in the index", () => {
    for (const t of TECHNIQUES) for (const href of t.lessons) expect(LESSON_TITLES[href], `${t.id} → ${href}`).toBeTruthy()
  })

  it("matches common questions to the right technique", () => {
    expect(bestTechnique("Explain the Admiralty system")?.id).toBe("admiralty")
    expect(bestTechnique("what's circular reporting?")?.id).toBe("circular")
    expect(bestTechnique("How do I write a good BLUF?")?.id).toBe("bluf")
    expect(bestTechnique("Explain ACH with an example")?.id).toBe("ach")
  })
})

describe("offlineReply", () => {
  it("explains a technique with real lesson links", () => {
    const r = offlineReply("Explain the Admiralty system", null)
    expect(r.mode).toBe("offline")
    expect(r.reply).toContain("cannot be judged")
    expect(r.lessons[0].href).toBe("/topics/evidence-based-conclusions")
  })

  it("asks Socratic questions about an exercise draft without revealing the key", () => {
    const draft = emptySubmission(toStudentView(pier9))
    draft.evaluations = draft.evaluations.map((e) =>
      e.reportId === "R3" ? { ...e, reliability: "B", credibility: 2 } : e.reportId === "R6" ? { ...e, reliability: "B", credibility: 1 } : e,
    )
    const ctx = resolveContext({ slug: pier9.slug, draft, submitted: false })!
    const r = offlineReply("Question my reasoning so far", ctx)
    expect(r.reply).toContain("?")
    // The expert grades and model BLUF must not leak before submission.
    expect(r.reply).not.toContain(pier9.modelAnswer.bluf.slice(0, 30))
    expect(r.reply).not.toMatch(/expert grade|B3|F3/)
  })

  it("points to the library when asked for practice", () => {
    expect(offlineReply("give me a practice exercise", null).reply).toContain("/exercises")
  })
})

describe("socraticQuestions", () => {
  it("targets an over-trusted anonymous source and an echoed report", () => {
    const draft = emptySubmission(toStudentView(pier9))
    draft.evaluations = pier9.reports.map((r) => ({
      reportId: r.id,
      reliability: r.id === "R3" ? "B" : r.expected.reliability,
      credibility: r.id === "R6" ? 1 : r.expected.credibility,
      note: "",
    }))
    draft.hypotheses = [{ statement: "Haskett brothers", ratings: {} }]
    const qs = socraticQuestions(pier9, { ...draft, gaps: ["who owns the van", "is the tip independent"] })
    expect(qs.join(" ")).toMatch(/R3/)
    expect(qs.join(" ")).toMatch(/R6/)
    expect(qs.length).toBeLessThanOrEqual(3)
  })
})

describe("E versus F", () => {
  it("questions an anonymous source graded as unreliable", () => {
    const draft = emptySubmission(toStudentView(pier9))
    draft.evaluations = draft.evaluations.map((e) => (e.reportId === "R3" ? { ...e, reliability: "E", credibility: 4 } : e))
    expect(socraticQuestions(pier9, draft).join(" ")).toContain("can't be judged")
  })
})

describe("prompt building", () => {
  it("hides the answer key until the student has submitted", () => {
    const draft = emptySubmission(toStudentView(pier9))
    const before = buildInstructorPrompt([{ role: "user", content: "help" }], resolveContext({ slug: pier9.slug, draft, submitted: false }))
    expect(before.system).toContain("SUBMITTED: no")
    expect(before.system).not.toContain("EXPERT GRADE")
    expect(before.system).not.toContain(pier9.modelAnswer.bluf.slice(0, 40))
    const after = buildInstructorPrompt([{ role: "user", content: "help" }], resolveContext({ slug: pier9.slug, draft, submitted: true }))
    expect(after.system).toContain("SUBMITTED: yes")
    expect(after.system).toContain("EXPERT GRADE")
  })

  it("trims history and drops a leading assistant turn", () => {
    const messages = Array.from({ length: 20 }, (_, i) => ({ role: (i % 2 ? "user" : "assistant") as "user" | "assistant", content: `m${i}` }))
    const trimmed = trimConversation(messages)
    expect(trimmed[0].role).toBe("user")
    expect(trimmed.length).toBeLessThanOrEqual(12)
  })

  it("rejects malformed requests", () => {
    expect(instructorRequestSchema.safeParse({ messages: [] }).success).toBe(false)
    expect(instructorRequestSchema.safeParse({ messages: [{ role: "system", content: "x" }] }).success).toBe(false)
  })

  it("ignores unknown slugs and ungenerated custom exercises", () => {
    expect(resolveContext({ slug: "nope" })).toBeNull()
    expect(resolveContext({ exercise: { ...pier9, generated: false } })).toBeNull()
  })
})

describe("coerceInstructorReply", () => {
  it("keeps valid JSON and strips invented lessons", () => {
    const r = coerceInstructorReply(
      { reply: "Grade the source first.", lessons: [{ href: "/topics/fake" }, { href: "/topics/estimative-language", why: "x" }], followUps: ["Why?"] },
      null,
    )
    expect(r?.lessons.map((l) => l.href)).toEqual(["/topics/estimative-language"])
  })

  it("falls back to plain text when the model ignores JSON mode", () => {
    expect(coerceInstructorReply(null, "Plain answer.")?.reply).toBe("Plain answer.")
    expect(coerceInstructorReply(null, '{"broken":')).toBeNull()
  })
})

describe("generated exercises", () => {
  const req = { level: "Beginner" as const, domain: "Crime analysis" as const, focus: "Circular reporting" as const }

  function sloppyCopy(): Record<string, unknown> {
    const ex = structuredClone(pier9) as unknown as Record<string, any> // simulate model output
    delete ex.slug
    ex.reports[0].expected.acceptableReliability = ["C"] // forgot the expected grade
    ex.reports[1].expected.reliability = "b" // lower case
    delete ex.modelAnswer.hypotheses[0].matrix.R4 // missing cell
    ex.modelAnswer.hypotheses[1].matrix.R9 = "C" // unknown report
    ex.relatedLessons = ["/topics/estimative-language", "https://example.com/topics/fake"]
    return ex
  }

  it("repairs predictable slips and validates", () => {
    const result = validateGeneratedExercise(repairGeneratedExercise(sloppyCopy(), req))
    expect(result.ok).toBe(true)
    if (result.ok) {
      const ex: Exercise = result.exercise
      expect(ex.generated).toBe(true)
      expect(ex.slug.startsWith("practice-")).toBe(true)
      expect(ex.relatedLessons).toEqual(["/topics/estimative-language"])
      expect(ex.modelAnswer.hypotheses[0].matrix.R4).toBe("N")
      expect(ex.modelAnswer.hypotheses[1].matrix.R9).toBeUndefined()
    }
  })

  it("rejects output that isn't an exercise", () => {
    expect(validateGeneratedExercise(repairGeneratedExercise({ title: "x" }, req)).ok).toBe(false)
    expect(validateGeneratedExercise(repairGeneratedExercise(null, req)).ok).toBe(false)
  })
})
