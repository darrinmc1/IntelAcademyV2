"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  threshold?: number
  once?: boolean
  decimals?: number
}

export function AnimatedCounter({
  value,
  duration = 1.5,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  threshold = 0.5,
  once = true,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Create a motion value
  const motionValue = useMotionValue(0)

  // Create a spring animation
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration,
  })

  // Transform the motion value to display with proper formatting
  const displayValue = useTransform(springValue, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`
  })

  useEffect(() => {
    if (inView && (!once || !hasAnimated)) {
      // Delay the animation start
      const timer = setTimeout(() => {
        motionValue.set(value)
        if (once) setHasAnimated(true)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [inView, value, delay, motionValue, once, hasAnimated])

  return (
    <motion.span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue}
    </motion.span>
  )
}
