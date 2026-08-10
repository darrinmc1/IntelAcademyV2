import type { ReactNode } from "react"
import { AutoLessonComplete } from "@/components/auto-lesson-complete"
import { TopicWhereNext } from "@/components/topic-where-next"

interface LessonContainerProps {
  children: ReactNode
  className?: string
}

export function LessonContainer({ children, className = "" }: LessonContainerProps) {
  return (
    <div className={`w-full mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 py-6 ${className}`}>
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
