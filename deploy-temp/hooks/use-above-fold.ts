"use client"

import type React from "react"

import { useState, useEffect } from "react"

/**
 * Hook to determine if an element is above the fold (in the initial viewport)
 * @param ref React ref object pointing to the element to check
 * @returns boolean indicating if the element is above the fold
 */
export function useAboveFold<T extends HTMLElement>(ref: React.RefObject<T>): boolean {
  const [isAboveFold, setIsAboveFold] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const checkPosition = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Element is considered above the fold if its top is within the viewport
      // or if it's partially visible (top is above viewport but bottom is below top of viewport)
      const isVisible = (rect.top >= 0 && rect.top <= viewportHeight) || (rect.top < 0 && rect.bottom > 0)

      setIsAboveFold(isVisible)
    }

    // Check immediately and then on resize
    checkPosition()
    window.addEventListener("resize", checkPosition)

    // Also check after a short delay to account for any layout shifts
    const delayedCheck = setTimeout(checkPosition, 500)

    return () => {
      window.removeEventListener("resize", checkPosition)
      clearTimeout(delayedCheck)
    }
  }, [ref])

  return isAboveFold
}

/**
 * Hook to identify if we're in the initial page load where above-fold content is critical
 * @returns boolean indicating if this is the initial page load
 */
export function useInitialLoad(): boolean {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // After component mounts, we're no longer in the initial load phase
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 2000) // Consider initial load phase to be the first 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return isInitialLoad
}
