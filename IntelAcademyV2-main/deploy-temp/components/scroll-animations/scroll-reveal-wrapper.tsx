"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealWrapperProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none"
  once?: boolean
}

export function ScrollRevealWrapper({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
  animation = "fade",
  once = true,
}: ScrollRevealWrapperProps) {
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

  // Define animation variants
  const variants = {
    hidden: {
      opacity: animation === "none" ? 1 : 0,
      y: animation === "slide-up" ? 50 : animation === "slide-down" ? -50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "zoom" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
