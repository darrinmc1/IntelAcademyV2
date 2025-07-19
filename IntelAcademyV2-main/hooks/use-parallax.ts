"use client"

import { useEffect, useState } from "react"

// Simple hook that safely handles browser APIs
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // Guard against SSR
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setOffset(scrollY * speed)
    }

    // Initial calculation
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}

// Simplified version with safer implementation
export function useParallaxMultiLayer() {
  const [layers, setLayers] = useState({
    background: 0,
    midground: 0,
    foreground: 0,
    text: 0,
  })

  useEffect(() => {
    // Guard against SSR
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setLayers({
        background: scrollY * 0.3,
        midground: scrollY * 0.5,
        foreground: scrollY * 0.7,
        text: scrollY * 0.1,
      })
    }

    // Initial calculation
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return layers
}
