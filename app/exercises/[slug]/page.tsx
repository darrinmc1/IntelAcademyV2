import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExercisePlayer } from "@/components/exercises/exercise-player"
import { exercises, getExercise } from "@/data/exercises"
import { toStudentView } from "@/lib/exercises/types"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return exercises.map((e) => ({ slug: e.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const exercise = getExercise(slug)
  if (!exercise) return { title: "Exercise not found" }
  return {
    title: `${exercise.title} — ${exercise.level} exercise`,
    description: exercise.summary,
  }
}

export default async function ExercisePage({ params }: Props) {
  const { slug } = await params
  const exercise = getExercise(slug)
  if (!exercise) notFound()
  // Only the student view crosses to the browser. The answer key stays on the server.
  return <ExercisePlayer exercise={toStudentView(exercise)} />
}
