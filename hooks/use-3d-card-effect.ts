"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"

interface Use3DCardEffectOptions {
  intensity?: "subtle" | "medium" | "strong"
  enabled?: boolean
}

interface Use3DCardEffectReturn {
  cardRef: React.RefObject<HTMLDivElement>
  cardStyle: React.CSSProperties
  glowStyle: React.CSSProperties
  isHovered: boolean
}

export function use3DCardEffect({
  intensity = "subtle",
  enabled = true,
}: Use3DCardEffectOptions = {}): Use3DCardEffectReturn {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const rafRef = useRef<number | null>(null)

  const intensitySettings = {
    subtle: { tilt: 5, scale: 1.02, glow: 0.1 },
    medium: { tilt: 10, scale: 1.05, glow: 0.15 },
    strong: { tilt: 15, scale: 1.08, glow: 0.2 },
  }

  const settings = intensitySettings[intensity]

  // Throttle mouse move via requestAnimationFrame (~60fps max)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * settings.tilt
        const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * settings.tilt

        setTransform(`perspective(1000px) scale(${settings.scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
        setGlowPosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      })
    },
    [settings.tilt, settings.scale]
  )

  useEffect(() => {
    if (!enabled || !cardRef.current) return

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const card = cardRef.current

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      setTransform("perspective(1000px) scale(1) rotateX(0) rotateY(0)")
      setIsHovered(false)
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled, handleMouseMove])

  return {
    cardRef,
    cardStyle: {
      transform,
      transition: "transform 0.3s ease",
    },
    glowStyle: {
      background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,${settings.glow}), transparent 50%)`,
    },
    isHovered,
  }
}
