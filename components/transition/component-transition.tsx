"use client"

import type { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { prefersReducedMotion } from "@/utils/animation-styles"

type TransitionType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none"

interface ComponentTransitionProps {
  children: ReactNode
  type?: TransitionType
  duration?: number
  delay?: number
  show?: boolean
  className?: string
  layout?: boolean
  id?: string
}

export function ComponentTransition({
  children,
  type = "fade",
  duration = 0.3,
  delay = 0,
  show = true,
  className = "",
  layout = false,
  id,
}: ComponentTransitionProps) {
  // Check for reduced motion preference
  const shouldReduceMotion = prefersReducedMotion()

  // If user prefers reduced motion, use fade or none
  const effectiveType = shouldReduceMotion ? (type === "none" ? "none" : "fade") : type

  // Define animation variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    "slide-down": {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    none: {
      initial: {},
      animate: {},
      exit: {},
    },
  }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          id={id}
          className={className}
          initial={effectiveType === "none" ? undefined : "initial"}
          animate={effectiveType === "none" ? undefined : "animate"}
          exit={effectiveType === "none" ? undefined : "exit"}
          variants={variants[effectiveType]}
          transition={{ duration, delay }}
          layout={layout}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
