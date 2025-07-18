"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

interface RouteProgressProps {
  color?: string
  height?: number
  duration?: number
}

export function RouteProgress({ color = "#3b82f6", height = 3, duration = 0.3 }: RouteProgressProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation on route change
    setIsAnimating(true)

    // Reset after animation completes
    const timer = setTimeout(
      () => {
        setIsAnimating(false)
      },
      duration * 1000 + 100,
    )

    return () => clearTimeout(timer)
  }, [pathname, searchParams, duration])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height, background: color, transformOrigin: "0%" }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={
        isAnimating
          ? { scaleX: 1, opacity: 1, transition: { duration } }
          : { scaleX: 0, opacity: 0, transition: { duration: 0.2 } }
      }
    />
  )
}
