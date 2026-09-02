import type { ReactNode } from "react"
import { AutoLessonComplete } from "@/components/auto-lesson-complete"
import { TopicWhereNext } from "@/components/topic-where-next"
import { DownloadLessonButton } from "@/components/download-lesson-button"
import { LessonVideoPlayer } from "@/components/lesson-video-player"

interface LessonContainerProps {
  children: ReactNode
  className?: string
}

export function LessonContainer({ children, className = "" }: LessonContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 py-6 ${className}`}>
      <div className="flex justify-end mb-4">
        <DownloadLessonButton />
      </div>
      <LessonVideoPlayer />
      {children}
      <div className="mt-10 pt-8 border-t border-white/10">
        <AutoLessonComplete />
        <TopicWhereNext />
      </div>
    </div>
  )
}

// Add default export
export default LessonContainer
