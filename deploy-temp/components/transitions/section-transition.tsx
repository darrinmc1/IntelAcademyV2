"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

const directionVariants = {
  up: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
}

export function SectionTransition({ children, delay = 0, direction = "up", className = "" }: SectionTransitionProps) {
  const variants = directionVariants[direction]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
