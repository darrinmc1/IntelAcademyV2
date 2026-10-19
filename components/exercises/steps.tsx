"use client"

import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AdmiraltyReference, KentReference } from "@/components/exercises/scale-reference"
import {
  CONFIDENCE_LEVELS,
  CONSISTENCY_LABELS,
  CREDIBILITY_GRADES,
  CREDIBILITY_LABELS,
  ESTIMATIVE_TERMS,
  RELIABILITY_GRADES,
  RELIABILITY_LABELS,
  VAGUE_HEDGES,
  type Consistency,
} from "@/lib/exercises/scales"
import type { ExerciseSubmission, StudentReport } from "@/lib/exercises/types"

type Evaluation = ExerciseSubmission["evaluations"][number]
type Hypothesis = ExerciseSubmission["hypotheses"][number]
type Assessment = ExerciseSubmission["assessment"]

const MAX_GAPS = 8
const MAX_HYPOTHESES = 5
const MAX_JUDGMENTS = 4

function Choice<T extends string | number>({
  value,
  options,
  onChange,
  labels,
  label,
}: {
  value: T | "" | 0
  options: readonly T[]
  onChange: (v: T | "") => void
  labels: Record<string, string>
  label: string
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const active = value === opt
        return (
          <button
            key={String(opt)}
            type="button"
            aria-pressed={active}
            title={labels[String(opt)]}
            onClick={() => onChange(active ? "" : opt)}
            className={`h-8 min-w-8 rounded-md border px-2 font-mono text-sm font-semibold transition-colors ${
              active
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 1 — evaluate the information
// ---------------------------------------------------------------------------

export function StepEvaluate({
  reports,
  evaluations,
  onChange,
}: {
  reports: StudentReport[]
  evaluations: Evaluation[]
  onChange: (reportId: string, patch: Partial<Evaluation>) => void
}) {
  const byId = new Map(evaluations.map((e) => [e.reportId, e]))
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-300">
        Grade every report twice: how far you trust the <strong>source</strong> (A–F) and how believable{" "}
        <strong>this information</strong> is (1–6). Then say why in a line — The Chief reads your notes.
      </p>
      <AdmiraltyReference />
      <ul className="space-y-3">
        {reports.map((r) => {
          const e = byId.get(r.id) ?? { reportId: r.id, reliability: "", credibility: 0, note: "" }
          const label = e.reliability || e.credibility ? `${e.reliability || "?"}${e.credibility || "?"}` : "—"
          return (
            <li key={r.id} className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <a href={`#report-${r.id}`} className="text-sm font-semibold text-slate-100 hover:text-cyan-300">
                  <span className="mr-2 font-mono text-cyan-300">{r.id}</span>
                  {r.title}
                </a>
                <span className="font-mono text-sm text-amber-300" aria-label={`Current grade for ${r.id}`}>
                  {label}
                </span>
              </div>
              <details className="mt-2 text-xs text-slate-400 lg:hidden">
                <summary className="cursor-pointer text-cyan-300">Read {r.id}</summary>
                <p className="mt-2">{r.source}</p>
                <p className="mt-2 whitespace-pre-line font-mono text-[12px] text-slate-200">{r.body}</p>
              </details>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-xs text-slate-400">Source reliability</p>
                  <Choice
                    label={`Source reliability for ${r.id}`}
                    value={e.reliability}
                    options={RELIABILITY_GRADES}
                    labels={RELIABILITY_LABELS}
                    onChange={(v) => onChange(r.id, { reliability: v as Evaluation["reliability"] })}
                  />
                </div>
                <div>
                  <p className="mb-1.5 text-xs text-slate-400">Information credibility</p>
                  <Choice
                    label={`Information credibility for ${r.id}`}
                    value={e.credibility}
                    options={CREDIBILITY_GRADES}
                    labels={CREDIBILITY_LABELS}
                    onChange={(v) => onChange(r.id, { credibility: v === "" ? 0 : Number(v) })}
                  />
                </div>
              </div>
              <Input
                value={e.note}
                maxLength={600}
                onChange={(ev) => onChange(r.id, { note: ev.target.value })}
                placeholder="Why that grade? (optional)"
                aria-label={`Note on ${r.id}`}
                className="mt-3 bg-slate-950 text-sm"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 2 — intelligence gaps
// ---------------------------------------------------------------------------

export function StepGaps({ gaps, onChange }: { gaps: string[]; onChange: (gaps: string[]) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-300">
        What don&apos;t you know that would <strong>change your answer</strong>? Write each gap as a question you could
        task someone with. &ldquo;Who owns the van?&rdquo; beats &ldquo;more vehicle info&rdquo;.
      </p>
      <ol className="space-y-2">
        {gaps.map((gap, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2.5 w-6 shrink-0 text-right font-mono text-xs text-slate-500">{i + 1}.</span>
            <Textarea
              value={gap}
              maxLength={400}
              rows={2}
              onChange={(e) => onChange(gaps.map((g, j) => (j === i ? e.target.value : g)))}
              placeholder={i === 0 ? "e.g. Are the two reports naming the same people independent of each other?" : "Another gap…"}
              aria-label={`Gap ${i + 1}`}
              className="min-h-[60px] bg-slate-950 text-sm"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove gap ${i + 1}`}
              onClick={() => onChange(gaps.filter((_, j) => j !== i))}
              disabled={gaps.length <= 1}
              className="text-slate-500 hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ol>
      <Button type="button" variant="secondary" size="sm" onClick={() => onChange([...gaps, ""])} disabled={gaps.length >= MAX_GAPS}>
        <Plus className="mr-1 h-4 w-4" />
        Add a gap
      </Button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 3 — hypotheses + ACH matrix
// ---------------------------------------------------------------------------

const CYCLE: Array<Consistency | ""> = ["", "C", "I", "N"]

function cellClass(v: Consistency | "" | undefined) {
  if (v === "C") return "border-emerald-500/50 bg-emerald-500/15 text-emerald-200"
  if (v === "I") return "border-rose-500/50 bg-rose-500/15 text-rose-200"
  if (v === "N") return "border-slate-600 bg-slate-800 text-slate-300"
  return "border-slate-800 bg-slate-950 text-slate-600"
}

export function StepHypotheses({
  reports,
  hypotheses,
  onChange,
}: {
  reports: StudentReport[]
  hypotheses: Hypothesis[]
  onChange: (hypotheses: Hypothesis[]) => void
}) {
  const update = (i: number, patch: Partial<Hypothesis>) =>
    onChange(hypotheses.map((h, j) => (j === i ? { ...h, ...patch } : h)))

  const cycle = (i: number, reportId: string) => {
    const current = (hypotheses[i].ratings[reportId] ?? "") as Consistency | ""
    const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length]
    update(i, { ratings: { ...hypotheses[i].ratings, [reportId]: next } })
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-300">
        Write at least three explanations that could fit the reporting — include the boring one. Then test{" "}
        <strong>each report against every hypothesis</strong>: consistent, inconsistent or neutral. In ACH the
        hypothesis with the <em>fewest inconsistencies</em> survives, not the one with the most support.
      </p>

      <ol className="space-y-2">
        {hypotheses.map((h, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2.5 w-7 shrink-0 text-right font-mono text-xs font-semibold text-cyan-300">H{i + 1}</span>
            <Textarea
              value={h.statement}
              maxLength={400}
              rows={2}
              onChange={(e) => update(i, { statement: e.target.value })}
              placeholder={i === 2 ? "e.g. The incidents are unrelated" : "A hypothesis that explains the reporting…"}
              aria-label={`Hypothesis ${i + 1}`}
              className="min-h-[60px] bg-slate-950 text-sm"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove hypothesis ${i + 1}`}
              onClick={() => onChange(hypotheses.filter((_, j) => j !== i))}
              disabled={hypotheses.length <= 1}
              className="text-slate-500 hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ol>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => onChange([...hypotheses, { statement: "", ratings: {} }])}
        disabled={hypotheses.length >= MAX_HYPOTHESES}
      >
        <Plus className="mr-1 h-4 w-4" />
        Add a hypothesis
      </Button>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">ACH matrix — tap a cell to cycle C → I → N</p>
        <div className="overflow-x-auto rounded-lg border border-slate-800">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-900/80">
                <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-slate-400">Report</th>
                {hypotheses.map((h, i) => (
                  <th key={i} scope="col" className="px-2 py-2 text-center font-mono text-xs font-semibold text-cyan-300" title={h.statement || undefined}>
                    H{i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.id} className="border-t border-slate-800">
                  <th scope="row" className="px-3 py-1.5 text-left font-normal">
                    <span className="font-mono text-xs font-semibold text-cyan-300">{r.id}</span>{" "}
                    <span className="text-xs text-slate-400">{r.title}</span>
                  </th>
                  {hypotheses.map((h, i) => {
                    const v = (h.ratings[r.id] ?? "") as Consistency | ""
                    return (
                      <td key={i} className="px-2 py-1.5 text-center">
                        <button
                          type="button"
                          onClick={() => cycle(i, r.id)}
                          aria-label={`${r.id} against H${i + 1}: ${v ? CONSISTENCY_LABELS[v] : "not rated"}`}
                          className={`h-8 w-10 rounded-md border font-mono text-xs font-semibold transition-colors ${cellClass(v)}`}
                        >
                          {v || "–"}
                        </button>
                      </td>
                    )
                  })}
                </tr>
              ))}
              <tr className="border-t border-slate-700 bg-slate-900/60">
                <th scope="row" className="px-3 py-2 text-left text-xs font-semibold text-slate-300">Inconsistencies</th>
                {hypotheses.map((h, i) => (
                  <td key={i} className="px-2 py-2 text-center font-mono text-sm font-semibold text-rose-300">
                    {Object.values(h.ratings).filter((v) => v === "I").length}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">C consistent · I inconsistent · N neutral. Look for reports that are inconsistent with some hypotheses but not others — that&apos;s diagnostic evidence.</p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 4 — the assessment
// ---------------------------------------------------------------------------

const termPattern = (terms: string[]) =>
  new RegExp(`(^|[^a-z])(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})([^a-z]|$)`, "i")
const ESTIMATIVE_RE = termPattern(ESTIMATIVE_TERMS)
const HEDGE_RE = termPattern(VAGUE_HEDGES)

export function StepAssessment({
  assessment,
  keyQuestion,
  onChange,
}: {
  assessment: Assessment
  keyQuestion: string
  onChange: (patch: Partial<Assessment>) => void
}) {
  const blufWords = assessment.bluf.trim() ? assessment.bluf.trim().split(/\s+/).length : 0
  const allText = `${assessment.bluf} ${assessment.keyJudgments.map((k) => k.statement).join(" ")}`
  const hasEstimative = ESTIMATIVE_RE.test(allText)
  const hasHedge = HEDGE_RE.test(allText)

  const setJudgment = (i: number, patch: Partial<Assessment["keyJudgments"][number]>) =>
    onChange({ keyJudgments: assessment.keyJudgments.map((k, j) => (j === i ? { ...k, ...patch } : k)) })

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3 text-sm text-slate-300">
        <span className="font-semibold text-cyan-200">Answer this:</span> {keyQuestion}
      </div>

      <div>
        <label htmlFor="bluf" className="block text-sm font-semibold text-slate-100">
          BLUF — bottom line up front
        </label>
        <p className="mt-0.5 text-xs text-slate-400">Your first sentence is the answer, with how likely and how confident. Aim for 80 words or fewer.</p>
        <Textarea
          id="bluf"
          value={assessment.bluf}
          maxLength={1500}
          rows={4}
          onChange={(e) => onChange({ bluf: e.target.value })}
          placeholder="We assess it is likely that… (moderate confidence)…"
          className="mt-2 bg-slate-950 text-sm"
        />
        <div className="mt-1.5 flex flex-wrap gap-2 text-xs">
          <span className={blufWords > 80 ? "text-amber-300" : "text-slate-500"}>{blufWords} words</span>
          <span className={hasEstimative ? "text-emerald-300" : "text-slate-500"}>
            {hasEstimative ? "✓ estimative language" : "No probability term yet"}
          </span>
          {hasHedge ? <span className="text-amber-300">Watch the may / might / could</span> : null}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-100">Key judgments</p>
        <p className="mt-0.5 text-xs text-slate-400">Assessments, not restated facts. Each one gets a confidence level.</p>
        <ol className="mt-2 space-y-3">
          {assessment.keyJudgments.map((k, i) => (
            <li key={i} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
              <div className="flex items-start gap-2">
                <Textarea
                  value={k.statement}
                  maxLength={700}
                  rows={2}
                  onChange={(e) => setJudgment(i, { statement: e.target.value })}
                  placeholder={`Key judgment ${i + 1}`}
                  aria-label={`Key judgment ${i + 1}`}
                  className="min-h-[60px] bg-slate-950 text-sm"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={`Remove key judgment ${i + 1}`}
                  onClick={() => onChange({ keyJudgments: assessment.keyJudgments.filter((_, j) => j !== i) })}
                  disabled={assessment.keyJudgments.length <= 1}
                  className="text-slate-500 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">Confidence</span>
                {CONFIDENCE_LEVELS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={k.confidence === c}
                    onClick={() => setJudgment(i, { confidence: k.confidence === c ? "" : c })}
                    className={`rounded-full border px-3 py-1 text-xs capitalize transition-colors ${
                      k.confidence === c
                        ? "border-amber-400 bg-amber-500/15 text-amber-200"
                        : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="mt-2"
          onClick={() => onChange({ keyJudgments: [...assessment.keyJudgments, { statement: "", confidence: "" }] })}
          disabled={assessment.keyJudgments.length >= MAX_JUDGMENTS}
        >
          <Plus className="mr-1 h-4 w-4" />
          Add a judgment
        </Button>
      </div>

      <div>
        <label htmlFor="indicators" className="block text-sm font-semibold text-slate-100">
          What would change your assessment?
        </label>
        <p className="mt-0.5 text-xs text-slate-400">One indicator per line — things you&apos;d expect to see if you&apos;re right, and if you&apos;re wrong.</p>
        <Textarea
          id="indicators"
          value={assessment.indicators}
          maxLength={2000}
          rows={3}
          onChange={(e) => onChange({ indicators: e.target.value })}
          className="mt-2 bg-slate-950 text-sm"
        />
      </div>

      <div>
        <label htmlFor="reasoning" className="block text-sm font-semibold text-slate-100">
          Reasoning notes <span className="font-normal text-slate-500">(optional — The Chief reads these)</span>
        </label>
        <Textarea
          id="reasoning"
          value={assessment.reasoning}
          maxLength={4000}
          rows={3}
          onChange={(e) => onChange({ reasoning: e.target.value })}
          placeholder="How you weighed the evidence, what you discounted and why…"
          className="mt-2 bg-slate-950 text-sm"
        />
      </div>

      <KentReference />
    </div>
  )
}
