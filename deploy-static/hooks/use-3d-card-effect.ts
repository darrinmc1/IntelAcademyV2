"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

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

  // Configure intensity levels
  const intensitySettings = {
    subtle: { tilt: 5, scale: 1.02, glow: 0.1 },
    medium: { tilt: 10, scale: 1.05, glow: 0.15 },
    strong: { tilt: 15, scale: 1.08, glow: 0.2 },
  }

  const settings = intensitySettings[intensity]

  // Handle mouse movement for 3D effect
  useEffect(() => {
    if (!enabled || !cardRef.current) return

    const card = cardRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Calculate rotation based on mouse position
      const rotateY = ((mouseX - centerX) / (rect.width / 2)) * settings.tilt
      const rotateX = ((centerY - mouseY) / (rect.height / 2)) * settings.tilt

      // Update transform
      setTransform(`
        perspective(1000px) 
        scale(${settings.scale}) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
      `)

      // Update glow position
      const x = ((mouseX - rect.left) / rect.width) * 100
      const y = ((mouseY - rect.top) / rect.height) * 100
      setGlowPosition({ x, y })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setTransform("perspective(1000px) scale(1) rotateX(0) rotateY(0)")
      setIsHovered(false)
    }

    // Add event listeners
    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup
    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [enabled, settings.tilt, settings.scale])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setTransform("")
    }
  }, [])

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
