"use client"

import { Image } from "./image"
import { getTopicImagePath } from "@/utils/image-naming"

interface TopicImageProps {
  topic: string
  index?: number
  size?: "thumb" | "banner" | "main" | "header"
  alt: string
  className?: string
  width?: number | string
  height?: number | string
  fill?: boolean
  priority?: boolean
}

export function TopicImage({
  topic,
  index = 1,
  size = "main",
  alt,
  className,
  width,
  height,
  fill = false,
  priority = false,
}: TopicImageProps) {
  const imagePath = getTopicImagePath(topic, index, size)

  if (fill) {
    return (
      <Image src={imagePath || "/placeholder.svg"} alt={alt} fill className={className} priority={priority} />
    )
  }

  return (
    <Image
      src={imagePath || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      imageType="content"
      className={className}
      priority={priority}
    />
  )
}
