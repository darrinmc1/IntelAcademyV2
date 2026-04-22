import type { Metadata } from "next"
import { LearningPathsButtons } from "@/components/learning-paths-buttons"

export const metadata: Metadata = {
  title: "All Courses | The Intel Analyst Academy",
  description: "Browse all intelligence analysis courses available at the The Intel Analyst Academy.",
}

export default function CoursesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">All Courses</h1>
      <p className="text-xl mb-12">Browse all available courses and start learning intelligence analysis techniques.</p>
      <LearningPathsButtons />
    </div>
  )
}
