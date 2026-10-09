"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock, FileText, Loader2, RotateCcw, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { BriefPack, FictionBanner, TaskingCard } from "@/components/exercises/brief-pack"
import { StepAssessment, StepEvaluate, StepGaps, StepHypotheses } from "@/components/exercises/steps"
import { FeedbackView } from "@/components/exercises/feedback-view"
import { ChiefAvatar, InstructorChat } from "@/components/instructor/instructor-chat"
import { emptySubmission } from "@/lib/exercises/blank"
import { clearDraft, loadDraft, saveDraft, saveResult } from "@/lib/exercises/progress"
import type { FeedbackResponse } from "@/lib/exercises/feedback"
import type { Exercise, ExerciseStudentView, ExerciseSubmission } from "@/lib/exercises/types"

const STEPS = [
  { id: "evaluate", label: "Evaluate", title: "Evaluate the information" },
  { id: "gaps", label: "Gaps", title: "Identify intelligence gaps" },
  { id: "hypotheses", label: "Hypotheses", title: "Develop hypotheses" },
  { id: "assessment", label: "Assessment", title: "Produce the assessment" },
] as const

const DEBRIEF = STEPS.length

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

function stepComplete(step: number, s: ExerciseSubmission): boolean {
  if (step === 0) return s.evaluations.every((e) => e.reliability && e.credibility)
  if (step === 1) return s.gaps.filter((g) => g.trim()).length >= 2
  if (step === 2) {
    const filled = s.hypotheses.filter((h) => h.statement.trim())
    return filled.length >= 2 && filled.some((h) => Object.values(h.ratings).some(Boolean))
  }
  return wordCount(s.assessment.bluf) >= 12 && s.assessment.keyJudgments.some((k) => k.statement.trim() && k.confidence)
}

export function ExercisePlayer({
  exercise,
  generatedExercise,
}: {
  exercise: ExerciseStudentView
  /** Practice exercises only: the full object, sent back for marking. */
  generatedExercise?: Exercise
}) {
  const slug = exercise.slug
  const [submission, setSubmission] = useState<ExerciseSubmission>(() => emptySubmission(exercise))
  const [step, setStep] = useState(0)
  const [hydrated, setHydrated] = useState(false)
  const [result, setResult] = useState<FeedbackResponse | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [confirmIncomplete, setConfirmIncomplete] = useState(false)
  const [chiefOpen, setChiefOpen] = useState(false)
  const [chiefOpener, setChiefOpener] = useState<string | undefined>(undefined)
  const submissionRef = useRef(submission)
  const topRef = useRef<HTMLElement>(null)

  submissionRef.current = submission

  // Restore a saved draft once, then autosave on every change.
  useEffect(() => {
    const saved = loadDraft(slug)
    if (saved?.submission && Array.isArray(saved.submission.evaluations)) {
      // Merge onto a blank submission so an older or partial draft can't break the form.
      const blank = emptySubmission(exercise)
      const s = saved.submission
      setSubmission({
        evaluations: blank.evaluations.map((b) => s.evaluations.find((e) => e.reportId === b.reportId) ?? b),
        gaps: Array.isArray(s.gaps) && s.gaps.length ? s.gaps : blank.gaps,
        hypotheses: Array.isArray(s.hypotheses) && s.hypotheses.length ? s.hypotheses : blank.hypotheses,
        assessment: {
          ...blank.assessment,
          ...(s.assessment ?? {}),
          keyJudgments: s.assessment?.keyJudgments?.length ? s.assessment.keyJudgments : blank.assessment.keyJudgments,
        },
      })
      setStep(Math.min(Math.max(0, saved.step || 0), STEPS.length - 1))
    }
    setHydrated(true)
  }, [slug, exercise])

  useEffect(() => {
    if (!hydrated) return
    const t = setTimeout(() => saveDraft(slug, submission, Math.min(step, STEPS.length - 1)), 400)
    return () => clearTimeout(t)
  }, [submission, step, slug, hydrated])

  const goTo = useCallback((next: number) => {
    setStep(next)
    setConfirmIncomplete(false)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const incomplete = useMemo(
    () => STEPS.filter((_, i) => !stepComplete(i, submission)).map((s) => s.label),
    [submission],
  )

  async function submit() {
    if (!submission.assessment.bluf.trim()) {
      setError("Write a BLUF before you submit — it's the bit the requester actually reads.")
      return
    }
    if (incomplete.length && !confirmIncomplete) {
      setConfirmIncomplete(true)
      return
    }
    setSubmitting(true)
    setError("")
    try {
      const res = await fetch("/api/exercises/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generatedExercise ? { exercise: generatedExercise, submission } : { slug, submission }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error || "Marking failed. Your answers are saved — try again.")
        return
      }
      const feedback = data as FeedbackResponse
      setResult(feedback)
      saveResult({
        slug,
        title: exercise.title,
        completedAt: new Date().toISOString(),
        ratings: feedback.score.dimensions.map((d) => d.rating),
      })
      goTo(DEBRIEF)
    } catch {
      setError("Network error. Your answers are saved — try again.")
    } finally {
      setSubmitting(false)
    }
  }

  function startOver() {
    if (!window.confirm("Clear all your answers for this exercise?")) return
    clearDraft(slug)
    setSubmission(emptySubmission(exercise))
    setResult(null)
    setError("")
    goTo(0)
  }

  function openChief(opener?: string) {
    setChiefOpener(opener)
    setChiefOpen(true)
  }

  const chiefContext = useMemo(
    () => ({
      slug: generatedExercise ? undefined : slug,
      exercise: generatedExercise,
      getDraft: () => submissionRef.current,
      submitted: !!result,
    }),
    [generatedExercise, slug, result],
  )

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <FictionBanner />

      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/exercises" className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200">
            <ArrowLeft className="mr-1 h-4 w-4" />
            All exercises
          </Link>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            {generatedExercise ? "Practice exercise · written by The Chief" : "Practical exercise"}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">{exercise.title}</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-300">{exercise.level}</span>
            <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-300">{exercise.domain}</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-300">
              <Clock className="h-3 w-3" />~{exercise.estimatedMinutes} min
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2.5 py-0.5 text-slate-300">
              <FileText className="h-3 w-3" />
              {exercise.reports.length} reports
            </span>
          </div>
        </div>
        <Button variant="secondary" onClick={() => openChief()} className="gap-2">
          <ChiefAvatar size={20} />
          Ask The Chief
        </Button>
      </header>

      <TaskingCard exercise={exercise} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <BriefPack exercise={exercise} />
          </div>
        </aside>

        <div className="min-w-0 space-y-5">
          <details className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-amber-400">Brief pack ({exercise.reports.length} reports)</summary>
            <div className="mt-4">
              <BriefPack exercise={exercise} />
            </div>
          </details>

          <nav aria-label="Exercise steps" ref={topRef} className="flex scroll-mt-28 flex-wrap gap-2">
            {STEPS.map((s, i) => {
              const done = stepComplete(i, submission)
              const active = step === i
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={active ? "step" : undefined}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "border-amber-400 bg-amber-500/15 text-amber-100"
                      : "border-slate-700 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                      done ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {done ? <Check className="h-3 w-3" /> : i + 1}
                  </span>
                  {s.label}
                </button>
              )
            })}
            {result ? (
              <button
                type="button"
                onClick={() => goTo(DEBRIEF)}
                aria-current={step === DEBRIEF ? "step" : undefined}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  step === DEBRIEF ? "border-cyan-400 bg-cyan-500/15 text-cyan-100" : "border-cyan-500/40 text-cyan-200 hover:border-cyan-400"
                }`}
              >
                Debrief
              </button>
            ) : null}
          </nav>

          {step < DEBRIEF ? (
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Step {step + 1} of {STEPS.length}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-50">{STEPS[step].title}</h2>
              <div className="mt-4">
                {step === 0 ? (
                  <StepEvaluate
                    reports={exercise.reports}
                    evaluations={submission.evaluations}
                    onChange={(reportId, patch) =>
                      setSubmission((s) => ({
                        ...s,
                        evaluations: s.evaluations.map((e) => (e.reportId === reportId ? { ...e, ...patch } : e)),
                      }))
                    }
                  />
                ) : null}
                {step === 1 ? <StepGaps gaps={submission.gaps} onChange={(gaps) => setSubmission((s) => ({ ...s, gaps }))} /> : null}
                {step === 2 ? (
                  <StepHypotheses
                    reports={exercise.reports}
                    hypotheses={submission.hypotheses}
                    onChange={(hypotheses) => setSubmission((s) => ({ ...s, hypotheses }))}
                  />
                ) : null}
                {step === 3 ? (
                  <StepAssessment
                    assessment={submission.assessment}
                    keyQuestion={exercise.scenario.keyQuestion}
                    onChange={(patch) => setSubmission((s) => ({ ...s, assessment: { ...s.assessment, ...patch } }))}
                  />
                ) : null}
              </div>

              {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
              {confirmIncomplete && step === STEPS.length - 1 ? (
                <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100">
                  Still unfinished: {incomplete.join(", ")}. You can submit anyway — the debrief will just have more to say.
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
                <div className="flex gap-2">
                  {step > 0 ? (
                    <Button variant="ghost" onClick={() => goTo(step - 1)}>
                      <ArrowLeft className="mr-1 h-4 w-4" />
                      Back
                    </Button>
                  ) : null}
                  <Button variant="ghost" onClick={startOver} className="text-slate-400 hover:text-slate-200">
                    <RotateCcw className="mr-1 h-4 w-4" />
                    Start over
                  </Button>
                </div>
                {step < STEPS.length - 1 ? (
                  <Button onClick={() => goTo(step + 1)}>
                    Next: {STEPS[step + 1].label}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={submit} disabled={submitting}>
                    {submitting ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <Send className="mr-1 h-4 w-4" />}
                    {submitting ? "Marking…" : confirmIncomplete ? "Submit anyway" : result ? "Resubmit for marking" : "Submit for marking"}
                  </Button>
                )}
              </div>
              {hydrated ? <p className="mt-3 text-right text-[11px] text-slate-600">Answers save automatically in this browser.</p> : null}
            </section>
          ) : result ? (
            <div className="space-y-4">
              <FeedbackView result={result} submission={submission} onAskChief={() => openChief("Walk me through my debrief — what should I fix first?")} />
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" onClick={() => goTo(0)}>
                  Edit my answers
                </Button>
                <Button variant="ghost" onClick={startOver} className="text-slate-400 hover:text-slate-200">
                  <RotateCcw className="mr-1 h-4 w-4" />
                  Start over
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/exercises">Try another exercise</Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <Sheet open={chiefOpen} onOpenChange={setChiefOpen}>
        <SheetContent side="right" className="flex w-full flex-col gap-0 border-slate-800 bg-slate-950 p-0 sm:max-w-xl">
          <SheetTitle className="sr-only">Ask The Chief</SheetTitle>
          <SheetDescription className="sr-only">AI instructor with access to this exercise and your current draft.</SheetDescription>
          <div className="min-h-0 flex-1 p-3 pt-12">
            {chiefOpen ? (
              <InstructorChat
                variant="panel"
                storageKey={`exercise-${slug}`}
                context={chiefContext}
                initialMessage={chiefOpener}
              />
            ) : null}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
