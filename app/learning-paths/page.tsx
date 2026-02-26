import type { Metadata } from "next"
import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { learningPaths } from "@/data/learning-paths"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Intelligence Analysis Learning Paths | The Intel Analyst Academy",
  description:
    "Explore structured learning paths covering OSINT, strategic intelligence, threat assessment, geospatial analysis, and more. Start your journey from beginner to advanced.",
  openGraph: {
    title: "Intelligence Analysis Learning Paths",
    description: "Master intelligence analysis through structured, expert-designed learning paths.",
    type: "website",
  },
}

export default function LearningPathsPage() {
  return (
    <>
      <PageHero
        title="Intelligence Analysis"
        accentTitle="Learning Paths"
        subtitle="Structured paths designed to take you from curious beginner to confident analyst — at your own pace."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Learning Paths" }]}
      />

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <LearningPathCard3D
              key={path.title}
              title={path.title}
              humorousQuote={path.humorousQuote}
              description={path.description}
              image={path.imagePath}
              href={path.path}
              difficulty={
                ["Beginner", "Intermediate", "Advanced"].includes(path.difficulty)
                  ? (path.difficulty as "Beginner" | "Intermediate" | "Advanced")
                  : "Beginner"
              }
              topics={path.topicCount}
              estimatedTime={path.estimatedTime}
              intensity="medium"
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}
