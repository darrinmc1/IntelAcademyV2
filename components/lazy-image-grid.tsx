"use client"

import { useState, useEffect } from "react"
import { LazyImage } from "./lazy-image"
import { useAboveFold } from "@/hooks/use-above-fold"
import { cn } from "@/lib/utils"
import type { AnimationType } from "@/utils/animation-styles"

interface LazyImageGridProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
    aspectRatio?: number
  }[]
  columns?: number | { sm: number; md: number; lg: number }
  gap?: number
  animation?: AnimationType
  staggerDelay?: number
  className?: string
  containerClassName?: string
}

export function LazyImageGrid({
  images,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 4,
  animation = "fade",
  staggerDelay = 100,
  className = "",
  containerClassName = "",
}: LazyImageGridProps) {
  const { elementRef, isAboveFold } = useAboveFold(-200) // Check 200px below viewport
  const [visibleCount, setVisibleCount] = useState(0)

  // Determine column count based on screen size
  const getColumnClass = () => {
    if (typeof columns === "number") {
      return `grid-cols-${columns}`
    }

    return `grid-cols-1 md:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`
  }

  // Stagger the appearance of images
  useEffect(() => {
    if (visibleCount >= images.length) return

    const interval = setInterval(() => {
      setVisibleCount((prev) => Math.min(prev + 1, images.length))
    }, staggerDelay)

    return () => clearInterval(interval)
  }, [images.length, staggerDelay, visibleCount])

  return (
    <div ref={elementRef} className={containerClassName}>
      <div className={cn(`grid gap-${gap}`, getColumnClass(), className)}>
        {images.map((image, index) => (
          <LazyImage
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            aspectRatio={image.aspectRatio}
            animation={animation}
            animationConfig={{
              delay: index * staggerDelay,
              duration: 600,
            }}
            className="w-full h-auto"
            isAboveFold={isAboveFold && index < 3} // Only first 3 images are considered above fold
            lazyLoadOptions={{
              delay: index * 50, // Stagger loading slightly
              preloadDistance: 300 + index * 50, // Increase preload distance for later images
            }}
          />
        ))}
      </div>
    </div>
  )
}
