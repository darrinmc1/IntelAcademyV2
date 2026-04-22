"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useSearchParams } from "next/navigation"

type TransitionContextType = {
  isTransitioning: boolean
  previousPath: string | null
  currentPath: string
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  previousPath: null,
  currentPath: "/",
})

export const useTransition = () => useContext(TransitionContext)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [previousPath, setPreviousPath] = useState<string | null>(null)
  const [currentPath, setCurrentPath] = useState(pathname)

  // Track route changes
  useEffect(() => {
    const url = pathname + searchParams.toString()

    // Don't trigger transition on initial load
    if (currentPath !== "/" && currentPath !== url) {
      setIsTransitioning(true)
      setPreviousPath(currentPath)

      // Reset transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 600) // Match this with your transition duration

      return () => clearTimeout(timer)
    }

    setCurrentPath(url)
  }, [pathname, searchParams, currentPath])

  return (
    <TransitionContext.Provider value={{ isTransitioning, previousPath, currentPath }}>
      {children}
    </TransitionContext.Provider>
  )
}
