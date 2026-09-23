import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight, Clock } from "lucide-react"
import { TopicWhereNext } from "@/components/topic-where-next"
import { DownloadPathButton } from "@/components/download-path-button"
import { PathIntroPlayer } from "@/components/path-intro-player"

export interface LearningPathTopic {
  title: string
  description?: string
  slug: string
  readTime?: number
}

interface LearningPathTemplateProps {
  children?: ReactNode
  pathSlug: string
  title?: string
  description?: string
  topics?: LearningPathTopic[]
  level?: string
  duration?: string
  category?: string
  image?: string
}

export function PathLessonList({ topics }: { topics: LearningPathTopic[] }) {
  if (!topics.length) return null

  return (
    <section className="mt-10 mb-12" aria-label="Lessons">
      <h2 className="text-2xl font-bold mb-2">Lessons</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        {topics.length === 1
          ? "One lesson is live on this path. It is a full read, the kind you can brief from."
          : `${topics.length} lessons are live on this path. Each one is a full read, the kind you can brief from.`}
      </p>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow-sm transition-colors hover:border-yellow-500"
          >
            <div>
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              {topic.description ? (
                <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
              ) : null}
              {topic.readTime ? (
                <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {topic.readTime} min read
                </p>
              ) : null}
            </div>
            <span className="inline-flex items-center shrink-0 text-sm font-medium">
              Start <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function LearningPathTemplate({
  children,
  pathSlug,
  title,
  description,
  topics = [],
  level,
  duration,
}: LearningPathTemplateProps) {
  const meta = [level, duration].filter(Boolean).join(" · ")

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <DownloadPathButton />
        </div>
        <PathIntroPlayer slug={pathSlug} />

        {(title || description) && (
          <header className="mb-8 max-w-3xl">
            {title ? <h1 className="text-4xl font-bold tracking-tight">{title}</h1> : null}
            {description ? <p className="text-muted-foreground mt-3 text-lg">{description}</p> : null}
            {meta ? <p className="text-sm text-muted-foreground mt-2">{meta}</p> : null}
          </header>
        )}

        {children}
        <PathLessonList topics={topics} />
        <TopicWhereNext />
      </div>
    </>
  )
}
