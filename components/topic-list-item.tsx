import { Clock, Award, BookOpen } from "lucide-react"
import { Image } from "@/components/image"
import { LetsGoButton } from "@/components/lets-go-button"

interface TopicListItemProps {
  title: string
  readTime: number
  slug: string
  icon?: string
  category: string
  description?: string
}

export function TopicListItem({ title, readTime, slug, icon, category, description }: TopicListItemProps) {
  return (
    <div className="group flex items-start gap-4 p-5 border-b hover:bg-muted/30 transition-colors rounded-lg hover:shadow-md">
      <div className="relative h-20 w-20 overflow-hidden rounded-md flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-300">
        {icon ? (
          <Image src={icon} alt={`${title} icon`} fill className="object-cover" unoptimized />
        ) : (
          <Image src="/placeholder.svg" alt={`${title} icon`} fill className="object-cover" unoptimized />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg group-hover:text-yellow-600 transition-colors">{title}</h3>
            <div className="inline-flex items-center px-2 py-1 mt-1 mb-2 text-xs font-medium rounded-full bg-slate-100 text-slate-800">
              {category}
            </div>
          </div>
          <LetsGoButton href={`/topics/${slug}`} size="sm" />
        </div>
        {description && <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-3.5 w-3.5" />
            <span>{readTime} min read</span>
          </div>
          <div className="flex items-center">
            <Award className="mr-1 h-3.5 w-3.5" />
            <span>Earn points</span>
          </div>
        </div>
      </div>
    </div>
  )
}
