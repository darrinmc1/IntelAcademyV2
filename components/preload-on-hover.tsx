"use client"

import type React from "react"

import { useState } from "react"

interface PreloadOnHoverProps {
  imagesToPreload: string[]
  children: React.ReactNode
}

export function PreloadOnHover({ imagesToPreload, children }: PreloadOnHoverProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {children}
    </div>
  )
}
