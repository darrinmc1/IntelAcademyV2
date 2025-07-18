import { LearningPathCard3D } from "@/components/3d-effects/learning-path-card-3d"
import { learningPaths } from "@/data/learning-paths"

export default function LearningPathsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Intelligence Analysis Learning Paths</h1>
        <p className="text-xl text-gray-600">
          Learning paths designed to help you master different aspects of
          intelligence analysis and operations.
        </p>
      </div>

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
  )
}
