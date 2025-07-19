import type { ReactNode } from "react"

interface LessonContainerProps {
  children: ReactNode
  className?: string
}

export function LessonContainer({ children, className = "" }: LessonContainerProps) {
  return <div className={`w-full mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 py-6 ${className}`}>{children}</div>
}

// Add default export
export default LessonContainer
