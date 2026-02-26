"use client"

import { Image } from "./image"
import { Play } from "lucide-react"

interface VideoPlaceholderProps {
  title: string
  description?: string
  videoId?: string
  duration?: string
  thumbnailUrl: string
  onClick?: () => void
  category?: string
  [key: string]: any
}

export function VideoPlaceholder({
  title,
  description,
  videoId,
  duration = "Coming Soon",
  thumbnailUrl,
  onClick,
  category,
}: VideoPlaceholderProps) {
  const handleClick = () => {
    if (onClick) onClick()
  }
  // Fallback image based on category
  const fallbackImage = category ? `/${category}.png` : "/immersive-learning-lab.png"

  return (
    <div className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg" onClick={handleClick}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10 flex items-center justify-center">
        <div className="bg-white/90 rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform">
          <Play className="h-8 w-8 text-primary fill-primary" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        {description && <p className="text-white/80 text-sm line-clamp-1">{description}</p>}
        <div className="flex items-center mt-1">
          <span className="text-white/90 text-sm bg-black/50 px-2 py-0.5 rounded-md">{duration}</span>
        </div>
      </div>

      <div className="relative w-full h-full">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          fallbackSrc={fallbackImage}
        />
      </div>
    </div>
  )
}
