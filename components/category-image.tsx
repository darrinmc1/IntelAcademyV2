"use client"

import { Image } from "./image"
import { getCategoryImagePath } from "@/utils/image-naming"

interface CategoryImageProps {
  category: string
  fallbackSrc?: string
  alt?: string
  width?: any
  height?: any
  className?: string
}

export function CategoryImage({ category, fallbackSrc, alt, width, height, className }: CategoryImageProps) {
  const imagePath = getCategoryImagePath(category)

  return (
    <Image
      src={imagePath}
      alt={alt || `${category} category image`}
      width={width as any}
      height={height as any}
      imageType="card"
      className={className}
      fallbackSrc={fallbackSrc}
    />
  )
}
