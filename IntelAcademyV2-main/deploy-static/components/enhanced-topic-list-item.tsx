import { Clock, Award } from "lucide-react"
import { LetsGoButton } from "@/components/lets-go-button"

interface EnhancedTopicListItemProps {
  title: string
  description: string
  duration: number
  slug: string
}

export function EnhancedTopicListItem({ title, description, duration, slug }: EnhancedTopicListItemProps) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <LetsGoButton path={`/topics/${slug}`} size="sm" />
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center">
          <Clock className="mr-1 h-3 w-3" />
          <span>Duration: {duration} min</span>
        </div>
        <div className="flex items-center">
          <Award className="mr-1 h-3 w-3" />
          <span>Earn points</span>
        </div>
      </div>
    </div>
  )
}
