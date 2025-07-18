import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight, Clock, BookOpen, Award } from "lucide-react"
import { ClientOnlyImage } from "@/components/client-only-image"

interface TopicListProps {
  topics: Array<{
    title: string
    description?: string
    readTime: number
    icon?: string
    path: string
    category?: string
  }>
  title?: string
  description?: string
  icon?: ReactNode
}

export function EnhancedTopicList({ topics, title, description, icon }: TopicListProps) {
  return (
    <div className="space-y-6">
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <div className="flex items-center gap-2 mb-2">
              {icon && <div className="text-yellow-600">{icon}</div>}
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            </div>
          )}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="space-y-4 rounded-xl border bg-background/50 p-1">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={topic.path}
            className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-300">
              {topic.icon ? (
                <ClientOnlyImage
                  src={topic.icon}
                  alt={`${topic.title} icon`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full text-yellow-400">
                  <BookOpen className="h-6 w-6" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-base group-hover:text-yellow-600 transition-colors">{topic.title}</h3>
                  {topic.category && (
                    <div className="inline-flex items-center px-2 py-0.5 mt-1 mb-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800">
                      {topic.category}
                    </div>
                  )}
                </div>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-white group-hover:bg-yellow-500 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>

              {topic.description && (
                <p className="text-sm text-muted-foreground mb-1 line-clamp-1">{topic.description}</p>
              )}

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{topic.readTime} min read</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-1 h-3 w-3" />
                  <span>Earn points</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
