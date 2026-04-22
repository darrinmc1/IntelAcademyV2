"use client"

import { type ReactNode, Suspense } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { PageTransition } from "./page-transition"

interface RouteTransitionProps {
  children: ReactNode
  type?: "fade" | "slide" | "zoom" | "none"
  duration?: number
}

export function RouteTransition({ children, type = "fade", duration = 0.3 }: RouteTransitionProps) {
  const pathname = usePathname()

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AnimatePresence mode="wait">
        <PageTransition key={pathname} type={type} duration={duration}>
          {children}
        </PageTransition>
      </AnimatePresence>
    </Suspense>
  )
}
