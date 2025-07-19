"use client"

import { useState } from "react"
import Image from "next/image"

interface HoverEffectImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  hoverEffect?: "zoom" | "brighten" | "darken" | "blur" | "none"
}

export function HoverEffectImage({ src, alt, width, height, className, hoverEffect = "zoom" }: HoverEffectImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Ensure width and height are valid numbers
  const safeWidth =
    typeof width === "number" && !isNaN(width) && width > 0
      ? width
      : typeof width === "string" && !isNaN(Number.parseInt(width))
        ? Number.parseInt(width)
        : 800

  const safeHeight =
    typeof height === "number" && !isNaN(height) && height > 0
      ? height
      : typeof height === "string" && !isNaN(Number.parseInt(height))
        ? Number.parseInt(height)
        : 600

  // Effect classes
  const effectClasses = {
    zoom: "group-hover:scale-110",
    brighten: "group-hover:brightness-125",
    darken: "group-hover:brightness-75",
    blur: "group-hover:blur-sm",
    none: "",
  }

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || "Image with hover effect"}
        width={safeWidth}
        height={safeHeight}
        className={`transition-all duration-300 ${effectClasses[hoverEffect]} ${className || ""}`}
      />
    </div>
  )
}
