import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"
import { PathLessonList } from "@/components/learning-path-template"
import { TopicWhereNext } from "@/components/topic-where-next"

export const metadata = {
  title: "Target Profiling | The Intel Analyst Academy",
  description: "Learn techniques for developing profiles of high-value targets",
}

export default function TargetProfilingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <Image src="/target-profiling-banner-large.png" alt="Target Profiling" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Target Profiling</h1>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-xl">
          Target profiling builds a living picture of a person of interest: identity, associations, capability,
          intent, and the gaps you are still guessing about. The lessons below are the profiles already written.
        </p>
      </div>

      <LearningFormats />

      <PathLessonList
        topics={[
          {
            title: "Target Profiling",
            description: "The five-factor profile, the gaps you have to admit, and when the document has gone stale.",
            slug: "target-profiling",
            readTime: 20,
          },
          {
            title: "Profiles of High-Value Targets",
            description: "How a high-value target package is built, and what it owes the people who will use it.",
            slug: "target-profiling-developing-profiles-of-high-value-targets",
            readTime: 18,
          },
          {
            title: "Repeat Offender Profiling",
            description: "Patterns of people who keep appearing, and how to tell a series from a coincidence.",
            slug: "repeat-offender-profiling-identifying-and-analyzing-patterns-of-repeat-offenders",
            readTime: 18,
          },
        ]}
      />
      <TopicWhereNext />
    </main>
  )
}
