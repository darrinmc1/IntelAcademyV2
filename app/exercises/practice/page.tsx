import type { Metadata } from "next"
import { PracticeExerciseLoader } from "@/components/exercises/practice-loader"

export const metadata: Metadata = {
  title: "Practice exercise",
  description: "A practice brief pack written by The Chief, the academy's AI instructor.",
  robots: { index: false, follow: false },
}

export default function PracticeExercisePage() {
  return <PracticeExerciseLoader />
}
