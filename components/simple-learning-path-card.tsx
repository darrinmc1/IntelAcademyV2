"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface SimpleLearningPathCardProps {
  title: string
  description: string
  slug: string
  path: string
}

export function SimpleLearningPathCard({ title, description, slug, path }: SimpleLearningPathCardProps) {
  // Get image path from mapping or use a fallback
  const imagePath = `/learning-path-thumbnails/${slug}-thumb.png`

  return (
    <Link href={path} className="block group">
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={title}
            width={400}
            height={240}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=240&width=400&text=${encodeURIComponent(title)}`
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
