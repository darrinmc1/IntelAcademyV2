"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, PencilLine } from "lucide-react"
import { loadDraft, loadResults, type StoredResult } from "@/lib/exercises/progress"

const LABELS = ["", "Needs work", "Developing", "Proficient", "Strong"]

/** Per-browser progress chip for an exercise card. Renders nothing until it knows. */
export function ExerciseStatus({ slug }: { slug: string }) {
  const [state, setState] = useState<{ result?: StoredResult; drafting: boolean } | null>(null)

  useEffect(() => {
    setState({ result: loadResults()[slug], drafting: !!loadDraft(slug) })
  }, [slug])

  if (!state) return null
  if (state.result) {
    const best = Math.min(...state.result.ratings)
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-200">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Debriefed{Number.isFinite(best) && best > 0 ? ` · weakest area: ${LABELS[best]}` : ""}
      </span>
    )
  }
  if (state.drafting) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-200">
        <PencilLine className="h-3.5 w-3.5" />
        In progress
      </span>
    )
  }
  return null
}
