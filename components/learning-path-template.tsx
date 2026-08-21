import type { ReactNode } from "react"
import { TopicWhereNext } from "@/components/topic-where-next"
import { DownloadPathButton } from "@/components/download-path-button"

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
      <div className="flex justify-end mb-4">
        <DownloadPathButton />
      </div>
      {children}

      {/* Where to Next section */}
      <TopicWhereNext />
    </>
  )
}
