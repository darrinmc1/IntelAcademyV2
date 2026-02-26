import { LearningPathCard } from "@/components/learning-path-card"
import { learningPaths } from "@/data/learning-paths"

export function LearningPathList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map((path) => (
        <LearningPathCard
          key={path.id}
          title={path.title}
          humorousQuote={path.humorousQuote}
          description={path.description}
          image={path.imagePath}
          href={path.path}
          difficulty={path.difficulty as "Beginner" | "Intermediate" | "Advanced"}
          topics={path.topicCount}
          estimatedTime={path.estimatedTime}
          enable3D={true}
          intensity="subtle"
        />
      ))}
    </div>
  )
}
