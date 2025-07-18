"use client"

import type React from "react"

import { useState } from "react"
import { useImagePreload } from "@/hooks/use-image-preload"

interface PreloadOnHoverProps {
  imagesToPreload: string[]
  children: React.ReactNode
}

export function PreloadOnHover({ imagesToPreload, children }: PreloadOnHoverProps) {
  const [isHovering, setIsHovering] = useState(false)

  // Only preload when hovering
  useImagePreload(isHovering ? imagesToPreload : [])

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {children}
    </div>
  )
}
