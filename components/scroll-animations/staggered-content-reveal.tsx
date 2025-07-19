"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggeredContentRevealProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  threshold?: number
  baseDelay?: number
  staggerDelay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
}

export function StaggeredContentReveal({
  children,
  className,
  itemClassName,
  threshold = 0.1,
  baseDelay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  direction = "up",
  distance = 30,
  once = true,
}: StaggeredContentRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, hasAnimated])

  // Define directional variants
  const getDirectionalVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
    }
  }

  const itemVariants = getDirectionalVariants()

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={itemClassName}
          variants={itemVariants}
          custom={index}
          transition={{
            duration,
            delay: baseDelay + index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1.0], // Custom easing curve
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
