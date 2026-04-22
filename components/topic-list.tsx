import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaticImage } from "@/components/static-image"
import { getTopicImagePath } from "@/utils/image-naming"

interface Topic {
  title: string
  slug: string
  readTime: number
  category: string
}

interface TopicListProps {
  topics: Topic[]
  category: string
}

export function TopicList({ topics, category }: TopicListProps) {
  if (!topics || topics.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-muted-foreground">No topics available for this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic.slug}
          className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
              <StaticImage
                src={getTopicImagePath(topic.slug, 1, "thumb")}
                alt={topic.title}
                width={48}
                height={48}
                className="object-cover"
                fallbackSrc={`/${category}.png`}
              />
            </div>
            <div>
              <h3 className="font-medium">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.readTime} min read</p>
            </div>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/topics/${topic.slug}`} className="flex items-center">
              Start <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
