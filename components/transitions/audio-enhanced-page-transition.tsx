"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"
import { useAudioCues } from "@/hooks/use-audio-cues"

interface AudioEnhancedPageTransitionProps {
  children: ReactNode
}

export function AudioEnhancedPageTransition({ children }: AudioEnhancedPageTransitionProps) {
  const pathname = usePathname()
  const { playSound } = useAudioCues({ volume: 0.2 })

  useEffect(() => {
    // Play page enter sound when route changes
    playSound("pageEnter")
  }, [pathname, playSound])

  return (
    <AnimatePresence mode="wait" onExitComplete={() => playSound("pageExit")}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        onAnimationStart={() => {
          // Subtle data processing sound during transition
          setTimeout(() => playSound("dataProcessing"), 100)
        }}
        onAnimationComplete={() => {
          // Completion chime
          setTimeout(() => playSound("loadingComplete"), 200)
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
