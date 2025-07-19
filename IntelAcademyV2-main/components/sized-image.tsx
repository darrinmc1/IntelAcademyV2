"use client"

import { Image } from "./image"
import { getImageContainerClass } from "@/utils/image-sizing"

interface SizedImageProps {
  src: string
  alt: string
  type: "learningPathHero" | "topicHeader" | "contentImage" | "thumbnail" | "card"
  priority?: boolean
  className?: string
  fallbackSrc?: string
  width?: number | string
  height?: number | string
}

export function SizedImage({
  src,
  alt,
  type,
  priority = false,
  className = "",
  fallbackSrc,
  width,
  height,
}: SizedImageProps) {
  const containerClass = getImageContainerClass(type)

  // Map our types to imageType for Image
  const imageTypeMap = {
    learningPathHero: "hero" as const,
    topicHeader: "banner" as const,
    contentImage: "content" as const,
    thumbnail: "thumbnail" as const,
    card: "card" as const,
  }

  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        imageType={imageTypeMap[type]}
        priority={priority}
        className={`object-cover ${className}`}
        fallbackSrc={fallbackSrc}
      />
    </div>
  )
}
