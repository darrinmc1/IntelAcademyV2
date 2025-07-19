"use client"

import type React from "react"

import { useRef } from "react"
import { useAboveFold, useInitialLoad } from "@/hooks/use-above-fold"
import { useImagePreload } from "@/hooks/use-image-preload"

interface OptimizedSectionImagesProps {
  images: string[]
  children: React.ReactNode
  priority?: boolean
}

/**
 * Component that optimizes image loading for a specific section
 * If the section is above the fold, images are preloaded with high priority
 * Otherwise, they're loaded when the section comes into view
 */
export function OptimizedSectionImages({ images, children, priority = false }: OptimizedSectionImagesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isAboveFold = useAboveFold(sectionRef)
  const isInitialLoad = useInitialLoad()

  // Determine if we should prioritize these images
  const shouldPrioritize = priority || (isAboveFold && isInitialLoad)

  // Preload images based on priority
  useImagePreload(images, {
    priority: shouldPrioritize,
    threshold: shouldPrioritize ? 0 : 0.1,
    rootMargin: shouldPrioritize ? "0px" : "200px",
    disabled: !images.length,
  })

  return <div ref={sectionRef}>{children}</div>
}
