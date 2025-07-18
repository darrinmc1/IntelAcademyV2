"use client"

import { EnhancedLearningPathCard } from "./enhanced-learning-path-card"
import { LearningPathProgressCard } from "./learning-path-progress-card"

interface LearningPath {
  id: string
  title: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  category: string
  prerequisites?: string[]
  learningOutcomes?: string[]
  enrolledUsers?: number
  lastUpdated?: string
  instructor?: string
  // Progress data (if user is enrolled)
  progress?: {
    completedTopics: number
    timeSpent: number
    lastAccessed: string
    overallScore?: number
    topicProgress: Array<{
      id: string
      title: string
      completed: boolean
      timeSpent?: number
      score?: number
    }>
    achievements?: string[]
    nextMilestone?: string
  }
}

interface LearningPathGridEnhancedProps {
  learningPaths: LearningPath[]
  showProgress?: boolean
}

export function LearningPathGridEnhanced({ learningPaths, showProgress = false }: LearningPathGridEnhancedProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map((path) => {
        if (showProgress && path.progress) {
          return (
            <LearningPathProgressCard
              key={path.id}
              title={path.title}
              description={path.description}
              image={path.image}
              href={path.href}
              difficulty={path.difficulty}
              totalTopics={path.topics}
              completedTopics={path.progress.completedTopics}
              estimatedTime={path.estimatedTime}
              timeSpent={path.progress.timeSpent}
              lastAccessed={path.progress.lastAccessed}
              overallScore={path.progress.overallScore}
              topicProgress={path.progress.topicProgress}
              achievements={path.progress.achievements}
              nextMilestone={path.progress.nextMilestone}
            />
          )
        }

        return (
          <EnhancedLearningPathCard
            key={path.id}
            title={path.title}
            description={path.description}
            image={path.image}
            href={path.href}
            difficulty={path.difficulty}
            topics={path.topics}
            estimatedTime={path.estimatedTime}
            prerequisites={path.prerequisites}
            learningOutcomes={path.learningOutcomes}
            enrolledUsers={path.enrolledUsers}
            lastUpdated={path.lastUpdated}
            instructor={path.instructor}
            category={path.category}
            progress={
              path.progress?.completedTopics ? Math.round((path.progress.completedTopics / path.topics) * 100) : 0
            }
          />
        )
      })}
    </div>
  )
}
