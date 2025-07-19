"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number] // [start, end] values in viewport percentage
}

export function ParallaxScrollSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
  offset = [0, 1], // Default to full viewport height
}: ParallaxScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${offset[0] * 100}%`, `${offset[1] * 100}%`],
  })

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  const style = {
    y: direction === "up" || direction === "down" ? yTransform : 0,
    x: direction === "left" || direction === "right" ? xTransform : 0,
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={style} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}
