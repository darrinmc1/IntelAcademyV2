import type { ReactNode } from "react"

interface EnhancedTopicGridProps {
  children: ReactNode
  className?: string
  columns?: 1 | 2 | 3
}

export function EnhancedTopicGrid({ children, className = "", columns = 1 }: EnhancedTopicGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }

  return <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>{children}</div>
}
