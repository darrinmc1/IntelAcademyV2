import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedResourceProps {
  title: string
  description: string
  path?: string  // Made optional since it can be undefined
  imagePath?: string
}

export function FeaturedResource({ title, description, path, imagePath }: FeaturedResourceProps) {
  // Use the provided image path or generate a placeholder
  const imageUrl = imagePath || `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(title)}`

  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {path ? (
          <Link href={path} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ) : (
          <span className="inline-flex items-center text-gray-400 font-medium">
            Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        )}
      </CardContent>
    </Card>
  )
}