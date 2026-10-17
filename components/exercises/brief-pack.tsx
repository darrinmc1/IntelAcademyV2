import { FileText } from "lucide-react"
import type { ExerciseStudentView, StudentReport } from "@/lib/exercises/types"

export function FictionBanner() {
  return (
    <div className="rounded-md border border-amber-500/40 bg-[repeating-linear-gradient(135deg,rgba(245,158,11,0.10)_0,rgba(245,158,11,0.10)_10px,transparent_10px,transparent_20px)] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300">
      Fictional training scenario — not real intelligence
    </div>
  )
}

export function TaskingCard({ exercise }: { exercise: ExerciseStudentView }) {
  const s = exercise.scenario
  return (
    <section aria-labelledby="tasking" className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h2 id="tasking" className="text-sm font-semibold uppercase tracking-wider text-amber-400">
        Tasking
      </h2>
      <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-slate-400">Requested by</dt>
        <dd className="text-slate-200">{s.requester}</dd>
        <dt className="text-slate-400">Key question</dt>
        <dd className="font-medium text-slate-50">{s.keyQuestion}</dd>
        <dt className="text-slate-400">Deadline</dt>
        <dd className="text-slate-200">{s.deadline}</dd>
      </dl>
      <p className="mt-4 border-t border-slate-800 pt-4 text-sm leading-relaxed text-slate-300">{s.setting}</p>
    </section>
  )
}

export function ReportCard({ report, compact = false }: { report: StudentReport; compact?: boolean }) {
  return (
    <article id={`report-${report.id}`} className="scroll-mt-28 rounded-lg border border-slate-800 bg-slate-950/60">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-800 px-4 py-2.5">
        <span className="rounded bg-cyan-500/15 px-1.5 py-0.5 font-mono text-xs font-semibold text-cyan-300">{report.id}</span>
        <h3 className="text-sm font-semibold text-slate-50">{report.title}</h3>
        <span className="text-xs text-slate-500">{report.dateTime}</span>
      </header>
      <div className="space-y-2.5 px-4 py-3 text-sm">
        <p className="text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider text-slate-500">{report.sourceType}:</span> {report.source}
        </p>
        {!compact ? <p className="whitespace-pre-line font-mono text-[13px] leading-relaxed text-slate-200">{report.body}</p> : null}
      </div>
    </article>
  )
}

export function BriefPack({ exercise }: { exercise: ExerciseStudentView }) {
  return (
    <section aria-labelledby="brief-pack" className="space-y-3">
      <h2 id="brief-pack" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
        <FileText className="h-4 w-4" />
        Brief pack · {exercise.reports.length} reports
      </h2>
      {exercise.reports.map((r) => (
        <ReportCard key={r.id} report={r} />
      ))}
    </section>
  )
}
