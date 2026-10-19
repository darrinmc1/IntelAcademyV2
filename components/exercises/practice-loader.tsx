"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExercisePlayer } from "@/components/exercises/exercise-player"
import { getPracticeExercise } from "@/lib/exercises/progress"
import type { Exercise, ExerciseStudentView } from "@/lib/exercises/types"

function studentView(exercise: Exercise): ExerciseStudentView {
  const { modelAnswer: _answer, reports, ...rest } = exercise
  return { ...rest, reports: reports.map(({ expected: _expected, ...r }) => r) }
}

/** Generated exercises live in this browser's storage, keyed by ?id=. */
export function PracticeExerciseLoader() {
  const [state, setState] = useState<{ status: "loading" } | { status: "missing" } | { status: "ready"; exercise: Exercise }>({
    status: "loading",
  })

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id") ?? ""
    const exercise = id ? getPracticeExercise(id) : null
    setState(exercise ? { status: "ready", exercise } : { status: "missing" })
  }, [])

  if (state.status === "loading") {
    return (
      <div className="flex items-center justify-center gap-2 py-32 text-slate-400">
        <Loader2 className="h-5 w-5 animate-spin" />
        Opening your brief pack…
      </div>
    )
  }

  if (state.status === "missing") {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-50">Practice exercise not found</h1>
        <p className="mt-3 text-slate-400">
          Generated exercises are kept in the browser that created them. This one isn&apos;t here — it may have been
          made on another device, or the browser storage was cleared.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link href="/instructor#practice">Generate a new one</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/exercises">Library exercises</Link>
          </Button>
        </div>
      </div>
    )
  }

  return <ExercisePlayer exercise={studentView(state.exercise)} generatedExercise={state.exercise} />
}
