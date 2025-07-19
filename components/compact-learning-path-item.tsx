import Link from "next/link"
import { DirectImage } from "@/components/direct-image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface CompactLearningPathItemProps {
  title: string
  description: string
  slug: string
  category: string
}

export function CompactLearningPathItem({ title, description, slug, category }: CompactLearningPathItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
      <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
        <DirectImage
          src={`/learning-path-thumbnails/${category}-thumb.png`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1 text-justify">{description}</p>
      </div>
      <div className="mt-2 md:mt-0">
        <Button
          asChild
          className="bg-black text-white transition-all duration-300 
                    hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                    active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
        >
          <Link href={`/learning-paths/${slug}`} className="flex items-center">
            Explore <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
