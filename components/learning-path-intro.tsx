import { cn } from "@/lib/utils"

interface LearningPathIntroProps {
  overview: string
  objectives?: string[]
  className?: string
}

export function LearningPathIntro({ overview, objectives = [], className }: LearningPathIntroProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">{overview}</p>
      </div>

      {objectives.length > 0 && (
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Learning Objectives</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
