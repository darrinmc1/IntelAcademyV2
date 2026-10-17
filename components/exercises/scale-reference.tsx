import { CREDIBILITY_LABELS, KENT_SCALE, RELIABILITY_LABELS } from "@/lib/exercises/scales"

/** Collapsible cheat sheets, matching what the lessons teach. */

export function AdmiraltyReference() {
  return (
    <details className="group rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-sm">
      <summary className="cursor-pointer select-none font-medium text-amber-300 marker:text-amber-500">
        Admiralty grading scale
      </summary>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Source reliability</p>
          <ul className="mt-1.5 space-y-1 text-slate-300">
            {Object.entries(RELIABILITY_LABELS).map(([grade, label]) => (
              <li key={grade}>
                <span className="mr-2 inline-block w-4 font-mono font-semibold text-cyan-300">{grade}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Information credibility</p>
          <ul className="mt-1.5 space-y-1 text-slate-300">
            {Object.entries(CREDIBILITY_LABELS).map(([grade, label]) => (
              <li key={grade}>
                <span className="mr-2 inline-block w-4 font-mono font-semibold text-cyan-300">{grade}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        Grade the two separately. F means you can&apos;t judge the source — not that it&apos;s bad. 1 means
        confirmed by <em>independent</em> sources.
      </p>
    </details>
  )
}

export function KentReference() {
  return (
    <details className="group rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-sm">
      <summary className="cursor-pointer select-none font-medium text-amber-300 marker:text-amber-500">
        Estimative language — the probability scale
      </summary>
      <ul className="mt-3 space-y-1 text-slate-300">
        {KENT_SCALE.map((k) => (
          <li key={k.term} className="flex justify-between gap-4">
            <span className="font-medium text-slate-200">{k.term}</span>
            <span className="text-slate-400">{k.range}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-400">
        Probability is how likely. Confidence (high / moderate / low) is how good your evidence is. State both.
        Avoid &ldquo;may&rdquo;, &ldquo;might&rdquo; and &ldquo;could&rdquo;.
      </p>
    </details>
  )
}
