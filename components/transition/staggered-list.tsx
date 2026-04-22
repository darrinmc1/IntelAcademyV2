"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { prefersReducedMotion } from "@/utils/animation-styles"

interface StaggeredListProps {
  children: ReactNode[]
  staggerDelay?: number
  duration?: number
  initialDelay?: number
  className?: string
}

export function StaggeredList({
  children,
  staggerDelay = 0.1,
  duration = 0.3,
  initialDelay = 0,
  className = "",
}: StaggeredListProps) {
  // Check for reduced motion preference
  const shouldReduceMotion = prefersReducedMotion()

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  }

  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" animate="show">
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  )
}
