"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { prefersReducedMotion } from "@/utils/animation-styles"

type RevealType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none"

interface ScrollRevealProps {
  children: ReactNode
  type?: RevealType
  duration?: number
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  type = "fade",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Check for reduced motion preference
  const shouldReduceMotion = prefersReducedMotion()

  // If user prefers reduced motion, use fade or none
  const effectiveType = shouldReduceMotion ? (type === "none" ? "none" : "fade") : type

  // Define animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-down": {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    none: {
      hidden: {},
      visible: {},
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[effectiveType]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
