import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface TopicItem {
  title: string
  description?: string
  readTime: number
  icon?: string
  path: string
}

interface EnhancedTopicSectionProps {
  title: string
  description?: string
  topics: TopicItem[]
  icon?: ReactNode
  className?: string
}

export function EnhancedTopicSection({ title, description, topics, icon, className }: EnhancedTopicSectionProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          {icon && <div className="text-yellow-600">{icon}</div>}
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <div className="grid gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border bg-background p-5 transition-all hover:shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-lg group-hover:text-yellow-600 transition-colors">{topic.title}</h3>
                {topic.description && <p className="text-sm text-muted-foreground line-clamp-2">{topic.description}</p>}
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{topic.readTime} min read</span>
                </div>
              </div>

              <Link
                href={topic.path}
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
              >
                Start <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
