import type { ReactNode } from "react"
import { TopicWhereNext } from "@/components/topic-where-next"

interface LearningPathTemplateProps {
  children: ReactNode
  pathSlug: string
  title?: string
  description?: string
  topics?: any[]
  level?: string
  duration?: string
  category?: string
  image?: string
}

export function LearningPathTemplate({ children, pathSlug }: LearningPathTemplateProps) {
  return (
    <>
      {/* Main content */}
      {children}

      {/* Where to Next section */}
      <TopicWhereNext />
    </>
  )
}
