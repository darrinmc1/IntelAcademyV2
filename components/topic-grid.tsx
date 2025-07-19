import type { ReactNode } from "react"
import Link from "next/link"
import { Clock, ChevronRight, BookOpen } from "lucide-react"
import { ClientOnlyImage } from "@/components/client-only-image"

interface TopicGridItemProps {
  title: string
  description: string
  readTime: number
  icon?: string
  path: string
  index: number
}

function TopicGridItem({ title, description, readTime, icon, path, index }: TopicGridItemProps) {
  // Create a staggered animation effect based on index
  const animationDelay = `${index * 0.05}s`

  return (
    <Link
      href={path}
      className="group flex flex-col overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md"
      style={{ animationDelay }}
    >
      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
        {icon ? (
          <ClientOnlyImage
            src={icon}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-yellow-400">
            <BookOpen className="h-12 w-12" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-medium text-lg text-white">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3.5 w-3.5" />
            <span>{readTime} min read</span>
          </div>

          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white group-hover:bg-yellow-500 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

interface TopicGridProps {
  topics: Array<{
    title: string
    description: string
    readTime: number
    icon?: string
    path: string
  }>
  title?: string
  description?: string
  icon?: ReactNode
}

export function TopicGrid({ topics, title, description, icon }: TopicGridProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <TopicGridItem key={index} {...topic} index={index} />
        ))}
      </div>
    </div>
  )
}
