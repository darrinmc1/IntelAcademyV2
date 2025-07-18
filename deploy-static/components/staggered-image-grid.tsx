"use client"

import { useState, useEffect } from "react"
import { AnimatedImage } from "./animated-image"
import type { AnimationType } from "@/utils/animation-styles"

interface StaggeredImageGridProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
  columns?: number
  gap?: number
  animation?: AnimationType
  staggerDelay?: number
  className?: string
}

export function StaggeredImageGrid({
  images,
  columns = 3,
  gap = 4,
  animation = "fade",
  staggerDelay = 100,
  className = "",
}: StaggeredImageGridProps) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= images.length) return

    const interval = setInterval(() => {
      setVisibleCount((prev) => Math.min(prev + 1, images.length))
    }, staggerDelay)

    return () => clearInterval(interval)
  }, [images.length, staggerDelay, visibleCount])

  return (
    <div
      className={`grid gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden">
          <AnimatedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            animation={animation}
            animationConfig={{
              delay: index * staggerDelay,
              duration: 600,
            }}
            className="w-full h-auto"
            useSkeleton={true}
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  )
}
