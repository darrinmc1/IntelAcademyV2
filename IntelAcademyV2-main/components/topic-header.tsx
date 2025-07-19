import { Clock, BookOpen, Award, Calendar } from "lucide-react"
import { SimpleImage } from "@/components/simple-image"

interface TopicHeaderProps {
  title: string
  description: string
  readTime?: number
  category?: string
  imageSrc?: string
  className?: string
  publishDate?: string
}

export function TopicHeader({
  title,
  description,
  readTime,
  category,
  imageSrc,
  className,
  publishDate,
}: TopicHeaderProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border bg-background mb-6 ${className}`}>
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <SimpleImage
            src={imageSrc}
            fallbackSrc={`/placeholder.svg?height=400&width=1200&query=${encodeURIComponent(title)}`}
            alt={title}
            fill
            className="object-cover opacity-15"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-4xl">
          {category && (
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
              {category}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl">{description}</p>

          <div className="flex flex-wrap items-center gap-6 text-base text-muted-foreground">
            {readTime && (
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>{readTime} min read</span>
              </div>
            )}
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>lesson</span>
            </div>
            {publishDate && (
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Published {publishDate}</span>
              </div>
            )}
            <div className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              <span>Earn certification points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add default export
export default TopicHeader
