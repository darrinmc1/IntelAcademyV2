import { CheckCircle, Circle } from "lucide-react"

interface TopicProgressTrackerProps {
  totalTopics: number
  completedTopics: number
  className?: string
}

export function TopicProgressTracker({ totalTopics, completedTopics, className }: TopicProgressTrackerProps) {
  const progress = Math.round((completedTopics / totalTopics) * 100)

  return (
    <div className={`rounded-lg border bg-background p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Your Progress</h3>
        <span className="text-sm font-medium">{progress}% Complete</span>
      </div>

      <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: totalTopics }).map((_, i) => (
          <div key={i} className="flex justify-center">
            {i < completedTopics ? (
              <CheckCircle className="h-5 w-5 text-yellow-500" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
