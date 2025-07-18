"use client"

import { Image } from "./image"

interface SimpleImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

export function SimpleImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallbackSrc = "/abstract-colorful-swirls.png",
}: SimpleImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      imageType="default"
      className={className}
      priority={priority}
      fallbackSrc={fallbackSrc}
    />
  )
}
