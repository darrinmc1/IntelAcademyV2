"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  BookOpen,
  Check,
  CircleDashed,
  Flag,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  MessageCircleQuestion,
  Minus,
  X,
} from "lucide-react"
import { ChiefAvatar } from "@/components/instructor/instructor-chat"
import type { FeedbackResponse } from "@/lib/exercises/feedback"
import type { GradeMatch } from "@/lib/exercises/scoring"
import type { LessonLink, SkillArea } from "@/lib/exercises/lessons"
import type { ExerciseSubmission } from "@/lib/exercises/types"

const RATING_STYLES: Record<number, string> = {
  1: "text-rose-300",
  2: "text-amber-300",
  3: "text-cyan-300",
  4: "text-emerald-300",
}

const DIMENSION_LABEL: Record<SkillArea, string> = {
  evaluation: "Evaluating the information",
  gaps: "Identifying intelligence gaps",
  hypotheses: "Developing hypotheses",
  assessment: "Producing the assessment",
}

const AREA_LABEL: Record<string, string> = {
  evaluation: "Evaluation",
  gaps: "Gaps",
  hypotheses: "Hypotheses",
  assessment: "Assessment",
  reasoning: "Reasoning",
}

function MatchIcon({ match }: { match: GradeMatch }) {
  if (match === "exact") return <Check className="h-4 w-4 text-emerald-400" aria-label="matches the expert" />
  if (match === "close") return <Minus className="h-4 w-4 text-cyan-300" aria-label="within the defensible range" />
  if (match === "missing") return <CircleDashed className="h-4 w-4 text-slate-500" aria-label="not graded" />
  return <X className="h-4 w-4 text-rose-400" aria-label="outside the expert range" />
}

function Section({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
        {icon}
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function mergeLessons(a: LessonLink[], b: LessonLink[]): LessonLink[] {
  const seen = new Set<string>()
  return [...a, ...b].filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true))).slice(0, 6)
}

export function FeedbackView({
  result,
  submission,
  onAskChief,
}: {
  result: FeedbackResponse
  submission: ExerciseSubmission
  onAskChief: () => void
}) {
  const { score, ai, solution } = result
  const lessons = mergeLessons(ai?.lessons ?? [], score.lessons)

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Debrief</p>
          <h2 className="text-2xl font-bold text-slate-50">How you went</h2>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            result.mode === "live"
              ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
              : "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
          }`}
        >
          {result.mode === "live" ? "Answer key + The Chief's critique" : "Answer-key marking"}
        </span>
      </div>

      {result.notice ? (
        <div className="flex gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
          <p>{result.notice}</p>
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        {score.dimensions.map((d) => (
          <div key={d.area} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">{DIMENSION_LABEL[d.area]}</p>
            <p className={`mt-1 text-lg font-semibold ${RATING_STYLES[d.rating]}`}>{d.label}</p>
            <div className="mt-2 flex gap-1" aria-hidden="true">
              {[1, 2, 3, 4].map((n) => (
                <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= d.rating ? "bg-current " + RATING_STYLES[d.rating] : "bg-slate-800"}`} />
              ))}
            </div>
            <p className="mt-2 text-sm text-slate-300">{d.summary}</p>
          </div>
        ))}
      </div>

      {ai ? (
        <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
          <div className="flex items-start gap-3">
            <ChiefAvatar size={40} />
            <div className="min-w-0 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400">The Chief&apos;s verdict</p>
                <p className="mt-1 text-slate-100">{ai.verdict}</p>
              </div>
              {ai.strengths.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">What worked</p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {ai.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {ai.improvements.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Fix these</p>
                  <ul className="mt-1.5 space-y-2">
                    {ai.improvements.map((imp, i) => (
                      <li key={i} className="rounded-lg border border-slate-800 bg-slate-950/50 p-3 text-sm">
                        <span className="mr-2 rounded bg-slate-800 px-1.5 py-0.5 text-[11px] uppercase tracking-wider text-slate-300">
                          {AREA_LABEL[imp.area] ?? imp.area}
                        </span>
                        <span className="text-slate-200">{imp.issue}</span>
                        <p className="mt-1.5 text-slate-400">
                          <span className="font-medium text-cyan-300">Fix: </span>
                          {imp.fix}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {ai.rewrittenBluf && submission.assessment.bluf.trim() ? (
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                    <p className="text-xs uppercase tracking-wider text-slate-500">Your BLUF</p>
                    <p className="mt-1 text-sm text-slate-300">{submission.assessment.bluf}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3">
                    <p className="text-xs uppercase tracking-wider text-emerald-300">The Chief&apos;s rewrite</p>
                    <p className="mt-1 text-sm text-slate-200">{ai.rewrittenBluf}</p>
                  </div>
                </div>
              ) : null}
              {ai.questions.length ? (
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    <MessageCircleQuestion className="h-3.5 w-3.5" />
                    Questions to sit with
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {ai.questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <Section title="Source grading" icon={<Flag className="h-4 w-4" />}>
        <ul className="space-y-3">
          {score.reports.map((r) => (
            <li key={r.reportId} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-sm">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-semibold text-slate-100">
                  <span className="mr-2 font-mono text-cyan-300">{r.reportId}</span>
                  {r.title}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  You {r.student.reliability || "?"}
                  {r.student.credibility || "?"}
                  <MatchIcon match={r.reliabilityMatch} />
                  <MatchIcon match={r.credibilityMatch} />
                </span>
                <span className="font-mono text-xs text-amber-300">
                  Expert {r.expected.reliability}
                  {r.expected.credibility}
                </span>
              </div>
              <p className="mt-2 text-slate-300">{r.expected.rationale}</p>
              {r.expected.flags.length ? (
                <ul className="mt-2 space-y-1">
                  {r.expected.flags.map((f, i) => (
                    <li key={i} className="flex gap-2 text-xs text-amber-200/90">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-emerald-400" /> matches</span>
          <span className="flex items-center gap-1"><Minus className="h-3.5 w-3.5 text-cyan-300" /> defensible</span>
          <span className="flex items-center gap-1"><X className="h-3.5 w-3.5 text-rose-400" /> outside the range</span>
          <span>(reliability, then credibility)</span>
        </p>
      </Section>

      <Section title="Intelligence gaps" icon={<HelpCircle className="h-4 w-4" />}>
        <div className="space-y-3 text-sm">
          {score.gaps.covered.map((g) => (
            <div key={g.id} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div>
                <p className="text-slate-200">{g.gap}</p>
                <p className="text-xs text-slate-500">You wrote: &ldquo;{g.matchedBy}&rdquo;</p>
              </div>
            </div>
          ))}
          {score.gaps.missed.map((g) => (
            <div key={g.id} className="flex gap-2">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              <div>
                <p className="text-slate-200">{g.gap}</p>
                <p className="mt-0.5 text-xs text-slate-400">Why it matters: {g.whyItMatters}</p>
                <p className="mt-0.5 text-xs text-slate-400">How to fill it: {g.collection}</p>
              </div>
            </div>
          ))}
          {score.gaps.unmatched.length ? (
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Your other gaps (not in the key — not necessarily wrong)</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-300">
                {score.gaps.unmatched.map((g, i) => (
                  <li key={i}>
                    {g}
                    {ai?.creditedGaps?.some((c) => c.trim() === g.trim()) ? (
                      <span className="ml-2 text-xs text-emerald-300">✓ The Chief rates this one</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Section>

      <Section title="Hypotheses" icon={<Lightbulb className="h-4 w-4" />}>
        <div className="space-y-3 text-sm">
          {score.hypotheses.matched.map((m) => (
            <div key={m.id} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
              <p className="flex gap-2 text-slate-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {m.expert}
              </p>
              <p className="mt-1 pl-6 text-xs text-slate-500">You wrote: &ldquo;{m.student}&rdquo;</p>
              <p className="mt-1 pl-6 text-xs text-slate-400">
                {m.rated
                  ? `Matrix agrees with the expert on ${m.agreed} of ${m.rated} cells you rated.`
                  : "You didn't rate this hypothesis in the matrix."}
                {m.disagreements.length
                  ? ` Different calls: ${m.disagreements.map((d) => `${d.reportId} (you ${d.student}, expert ${d.expert})`).join(", ")}.`
                  : ""}
              </p>
            </div>
          ))}
          {score.hypotheses.missed.map((h) => (
            <p key={h.id} className="flex gap-2 text-slate-300">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              <span>
                Not considered: {h.statement}
                {h.kind === "null" ? <span className="ml-1 text-xs text-slate-500">(the boring explanation — always test it)</span> : null}
              </span>
            </p>
          ))}
          {score.hypotheses.diagnosticReports.length ? (
            <p className="text-xs text-slate-400">
              Diagnostic evidence in this pack (consistent with some hypotheses, inconsistent with others):{" "}
              <span className="font-mono text-cyan-300">{score.hypotheses.diagnosticReports.join(", ")}</span>.
            </p>
          ) : null}
        </div>
      </Section>

      <Section title="Assessment checks" icon={<Check className="h-4 w-4" />}>
        <ul className="space-y-2 text-sm">
          {score.assessment.checks.map((c) => (
            <li key={c.id} className="flex gap-2">
              {c.passed ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              )}
              <span>
                <span className="text-slate-200">{c.label}.</span> <span className="text-slate-400">{c.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <details className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <summary className="cursor-pointer select-none text-sm font-semibold uppercase tracking-wider text-amber-400">
          Expert solution
        </summary>
        <div className="mt-4 space-y-5 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">BLUF</p>
            <p className="mt-1 text-slate-100">{solution.bluf}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Key judgments</p>
            <ul className="mt-1.5 space-y-2">
              {solution.keyJudgments.map((k, i) => (
                <li key={i} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-slate-300">
                  <span className="mr-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-200">
                    {k.confidence} confidence
                  </span>
                  {k.statement}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Hypotheses</p>
            <ul className="mt-1.5 space-y-2">
              {solution.hypotheses.map((h) => (
                <li key={h.id} className="text-slate-300">
                  <span className="font-mono text-cyan-300">{h.id}</span> {h.statement}
                  <span className="mt-0.5 block text-xs text-slate-400">{h.assessment}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Indicators to watch</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-300">
              {solution.indicators.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Common mistakes</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-300">
              {solution.commonMistakes.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Take-aways</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-300">
              {solution.teachingPoints.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      {lessons.length ? (
        <Section title="Study next" icon={<BookOpen className="h-4 w-4" />}>
          <ul className="grid gap-2 sm:grid-cols-2">
            {lessons.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-sm hover:border-cyan-500/40">
                  <span className="font-medium text-cyan-300">{l.title}</span>
                  <span className="mt-0.5 block text-xs text-slate-400">{l.why}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <ChiefAvatar />
        <p className="flex-1 text-sm text-slate-300">Disagree with the key? Want to know why R-something matters? Argue it out with The Chief.</p>
        <button
          type="button"
          onClick={onAskChief}
          className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500"
        >
          Discuss my debrief
        </button>
      </div>

      <p className="flex gap-2 text-xs text-slate-500">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        {result.disclaimer}
      </p>
    </div>
  )
}
