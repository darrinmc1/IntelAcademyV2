"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"
import { IntelligenceLoadingScreen } from "./intelligence-loading-screen"

interface RouteTransitionProviderProps {
  children: ReactNode
}

export function RouteTransitionProvider({ children }: RouteTransitionProviderProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentChildren, setCurrentChildren] = useState(children)

  useEffect(() => {
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setCurrentChildren(children)
      setIsTransitioning(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <AnimatePresence mode="wait">
      {isTransitioning ? (
        <motion.div
          key="transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IntelligenceLoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {currentChildren}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
