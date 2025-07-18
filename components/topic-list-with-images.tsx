import Link from "next/link"
import { Clock } from "lucide-react"
import { StaticImage } from "@/components/static-image"

interface Topic {
  title: string
  slug: string
  readTime: number
  description?: string
  image?: string
}

interface TopicListWithImagesProps {
  topics: Topic[]
}

export function TopicListWithImages({ topics }: TopicListWithImagesProps) {
  return (
    <div className="space-y-1 mt-4 rounded-lg border overflow-hidden">
      {topics.map((topic) => (
        <Link key={topic.slug} href={`/topics/${topic.slug}`} className="block">
          <div className="flex items-start gap-4 p-4 border-b hover:bg-muted/30 transition-colors">
            <div className="relative h-16 w-24 overflow-hidden rounded-md flex-shrink-0 bg-muted">
              {topic.image ? (
                <StaticImage src={topic.image} alt={topic.title} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full w-full text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-base">{topic.title}</h3>
              {topic.description && <p className="text-sm text-muted-foreground mb-1">{topic.description}</p>}
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>{topic.readTime} min read</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
