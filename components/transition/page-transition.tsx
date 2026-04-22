"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type TransitionType = "fade" | "slide" | "zoom" | "none"

interface PageTransitionProps {
  children: ReactNode
  type?: TransitionType
  duration?: number
}

export function PageTransition({ children, type = "fade", duration = 0.3 }: PageTransitionProps) {
  // Define animation variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
    },
    none: {
      initial: {},
      animate: {},
      exit: {},
    },
  }

  return (
    <motion.div
      initial={type === "none" ? undefined : variants[type].initial}
      animate={type === "none" ? undefined : variants[type].animate}
      exit={type === "none" ? undefined : variants[type].exit}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  )
}
