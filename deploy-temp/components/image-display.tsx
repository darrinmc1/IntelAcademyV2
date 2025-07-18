"use client"

import { Image } from "./image"

interface ImageDisplayProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  fill?: boolean
  width?: number | string
  height?: number | string
  priority?: boolean
  sizes?: string
}

export function ImageDisplay({
  src,
  alt,
  fallbackSrc,
  className,
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: ImageDisplayProps) {

  if (fill) {
    return (
      <Image
        src={src || fallbackSrc || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        fallbackSrc={fallbackSrc}
      />
    )
  }

  return (
    <Image
      src={src || fallbackSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      imageType={priority ? "hero" : "content"}
      className={className}
      priority={priority}
      sizes={sizes}
      fallbackSrc={fallbackSrc}
    />
  )
}
