"use client"

import { Image } from "./image"

interface BannerImageProps {
  topic?: string
  src?: string
  alt: string
  large?: boolean
  priority?: boolean
  width?: number | string
  height?: number | string
  className?: string
}

export function BannerImage({
  topic,
  src,
  alt,
  large = false,
  priority = false,
  width,
  height,
  className,
}: BannerImageProps) {
  const imageSrc =
    src ||
    (topic
      ? large
        ? `/intelligence-images/${topic}/${topic}-main.png`
        : `/intelligence-images/${topic}/${topic}-default.png`
      : undefined)

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      imageType="banner"
      priority={priority}
      className={className}
    />
  )
}
