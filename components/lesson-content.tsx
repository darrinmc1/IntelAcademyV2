import type { ReactNode } from "react"

interface LessonContentProps {
  children: ReactNode
  className?: string
}

export function LessonContent({ children, className = "" }: LessonContentProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${className}`}>
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-20">
          {/* Sidebar content like table of contents, related resources, etc. */}
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-medium mb-3">In This Lesson</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#defining-intelligence">Defining Intelligence</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#key-characteristics">Key Characteristics</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#intelligence-vs-information">Intelligence vs Information</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add default export
export default LessonContent
