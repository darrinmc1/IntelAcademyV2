"use client"

import { Image } from "./image"

interface SimpleImageProps {
  src: string
  alt: string
  width?: any
  height?: any
  fill?: boolean
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

export function SimpleImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  fallbackSrc = "/abstract-colorful-swirls.png",
}: SimpleImageProps) {
  // If fill is true, Next.js doesn't want width and height
  const imageProps = fill
    ? { fill: true }
    : { width: width as any, height: height as any }

  return (
    <Image
      src={src}
      alt={alt}
      {...imageProps}
      imageType="default"
      className={className}
      priority={priority}
      fallbackSrc={fallbackSrc}
    />
  )
}
