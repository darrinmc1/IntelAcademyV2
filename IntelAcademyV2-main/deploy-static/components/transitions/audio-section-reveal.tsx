"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { useAudioCues } from "@/hooks/use-audio-cues"
import type { ReactNode } from "react"

interface AudioSectionRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  playSound?: boolean
  soundType?: "dataProcessing" | "navHover" | "confirmAction"
}

export function AudioSectionReveal({
  children,
  direction = "up",
  delay = 0,
  playSound = true,
  soundType = "dataProcessing",
}: AudioSectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { playSound: play } = useAudioCues({ volume: 0.05 })

  useEffect(() => {
    if (isInView && playSound) {
      setTimeout(() => {
        play(soundType)
      }, delay * 1000)
    }
  }, [isInView, playSound, play, soundType, delay])

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
