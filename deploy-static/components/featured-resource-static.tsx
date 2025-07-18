"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedResourceProps {
  title: string
  description: string
  path: string
  category: string
}

export function FeaturedResourceStatic({ title, description, path, category }: FeaturedResourceProps) {
  const genericFallbackPath = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(title || category)}`

  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image container with gradient overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={genericFallbackPath}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackSrc={genericFallbackPath}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-200">{description}</p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          <Link href={path} className="flex items-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
