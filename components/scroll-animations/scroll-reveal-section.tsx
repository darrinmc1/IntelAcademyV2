"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type RevealDirection = "up" | "down" | "left" | "right" | "none"
export type RevealType = "fade" | "slide" | "scale" | "clip" | "blur"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  direction?: RevealDirection
  type?: RevealType
  staggerChildren?: boolean
  staggerDelay?: number
  once?: boolean
  rootMargin?: string
}

export function ScrollRevealSection({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
  direction = "up",
  type = "fade",
  staggerChildren = false,
  staggerDelay = 0.1,
  once = true,
  rootMargin = "0px",
}: ScrollRevealSectionProps) {
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
        rootMargin,
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, hasAnimated, rootMargin])

  // Define animation variants based on direction and type
  const getVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: {},
    }

    // Add fade effect
    if (type === "fade" || type === "blur") {
      baseVariants.hidden.opacity = 0
      baseVariants.visible.opacity = 1
    }

    // Add blur effect
    if (type === "blur") {
      baseVariants.hidden.filter = "blur(8px)"
      baseVariants.visible.filter = "blur(0px)"
    }

    // Add scale effect
    if (type === "scale") {
      baseVariants.hidden.scale = 0.8
      baseVariants.visible.scale = 1
    }

    // Add clip effect
    if (type === "clip") {
      baseVariants.hidden.clipPath = "inset(0 0 100% 0)"
      baseVariants.visible.clipPath = "inset(0 0 0 0)"
    }

    // Add directional movement
    if (type === "slide" || (type !== "scale" && direction !== "none")) {
      switch (direction) {
        case "up":
          baseVariants.hidden.y = 50
          baseVariants.visible.y = 0
          break
        case "down":
          baseVariants.hidden.y = -50
          baseVariants.visible.y = 0
          break
        case "left":
          baseVariants.hidden.x = 50
          baseVariants.visible.x = 0
          break
        case "right":
          baseVariants.hidden.x = -50
          baseVariants.visible.x = 0
          break
      }
    }

    return baseVariants
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = getVariants()

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerChildren ? containerVariants : itemVariants}
      transition={
        !staggerChildren
          ? {
              duration,
              delay,
              ease: "easeOut",
            }
          : undefined
      }
    >
      {staggerChildren ? (
        <>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ duration }}>
                  {child}
                </motion.div>
              ))
            : children}
        </>
      ) : (
        children
      )}
    </motion.div>
  )
}
