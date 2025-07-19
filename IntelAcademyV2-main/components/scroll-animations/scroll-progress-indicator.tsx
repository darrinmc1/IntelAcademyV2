"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollProgressIndicatorProps {
  className?: string
  barClassName?: string
  height?: number
  color?: string
  position?: "top" | "bottom"
  showPercentage?: boolean
  percentageClassName?: string
}

export function ScrollProgressIndicator({
  className,
  barClassName,
  height = 4,
  color = "bg-yellow-500",
  position = "top",
  showPercentage = false,
  percentageClassName,
}: ScrollProgressIndicatorProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (showPercentage) {
      const unsubscribe = scrollYProgress.onChange((value) => {
        setPercentage(Math.round(value * 100))
      })

      return () => unsubscribe()
    }
  }, [scrollYProgress, showPercentage])

  const positionClasses = {
    top: "top-0",
    bottom: "bottom-0",
  }

  return (
    <>
      <motion.div className={cn("fixed left-0 right-0 z-50", positionClasses[position], className)} style={{ height }}>
        <motion.div className={cn("h-full origin-left", color, barClassName)} style={{ scaleX }} />
      </motion.div>

      {showPercentage && (
        <div
          className={cn(
            "fixed right-4 bottom-4 bg-black text-white px-2 py-1 rounded-md text-sm font-mono z-50",
            percentageClassName,
          )}
        >
          {percentage}%
        </div>
      )}
    </>
  )
}
