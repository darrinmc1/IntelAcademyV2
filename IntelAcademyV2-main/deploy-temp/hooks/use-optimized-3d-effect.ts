"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useThrottledCallback } from "./use-throttled-callback"

interface Transform3D {
  rotateX: number
  rotateY: number
  scale: number
}

export function useOptimized3DEffect(intensity: "subtle" | "medium" | "strong" = "medium") {
  const [transform, setTransform] = useState<Transform3D>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  })

  const intensityMap = {
    subtle: { rotation: 5, scale: 1.02 },
    medium: { rotation: 10, scale: 1.05 },
    strong: { rotation: 15, scale: 1.08 },
  }

  const config = intensityMap[intensity]

  const handleMouseMove = useThrottledCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -config.rotation
    const rotateY = ((x - centerX) / centerX) * config.rotation

    setTransform({
      rotateX,
      rotateY,
      scale: config.scale,
    })
  }, 16) // ~60fps

  const handleMouseLeave = useCallback(() => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    })
  }, [])

  const style = {
    transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transition: "transform 0.1s ease-out",
    willChange: "transform",
  }

  return {
    style,
    handleMouseMove,
    handleMouseLeave,
  }
}
