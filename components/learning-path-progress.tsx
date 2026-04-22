"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Trophy } from "lucide-react"

interface LearningPathProgressProps {
  pathId: string
  totalTopics: number
  completedTopics?: number
}

export function LearningPathProgress({ pathId, totalTopics, completedTopics = 0 }: LearningPathProgressProps) {
  const [progress, setProgress] = useState(0)

  // Calculate the percentage of completed topics
  const percentage = Math.round((completedTopics / totalTopics) * 100)

  useEffect(() => {
    // Animate the progress bar
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Your Progress</h3>
        <span className="text-sm text-gray-500">
          {completedTopics} of {totalTopics} topics
        </span>
      </div>

      <Progress value={progress} className="h-2 mb-3" />

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{percentage}% complete</span>
        {percentage === 100 && (
          <div className="flex items-center gap-1 text-amber-500">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Path Completed!</span>
          </div>
        )}
      </div>
    </div>
  )
}
