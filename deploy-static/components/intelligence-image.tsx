"use client"

import { Image } from "./image"

interface IntelligenceImageProps {
  type: "strategic" | "tactical" | "operational"
  variant?: "default" | "main"
  width?: number | string
  height?: number | string
  className?: string
  priority?: boolean
}

export function IntelligenceImage({
  type,
  variant = "default",
  width,
  height,
  className = "",
  priority = false,
}: IntelligenceImageProps) {
  const imagePath = `/intelligence-images/${type}-intelligence/${type}-intelligence-${variant}.png`

  const altText = {
    strategic: "Strategic Intelligence - Planning and coordination diagram",
    tactical: "Tactical Intelligence Operations Center with analysts monitoring real-time data",
    operational: "Operational Intelligence - Process implementation and workflow coordination",
  }[type]

  return (
    <Image
      src={imagePath}
      alt={altText}
      width={width}
      height={height}
      imageType="content"
      className={className}
      priority={priority}
    />
  )
}
