"use client"

import { useState, useEffect } from "react"

interface WindowSize {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export function useWindowSize(): WindowSize {
  // Initialize with safe default values
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1024, // Safe default width
    height: 768, // Safe default height
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  })

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth || 1024
      const height = window.innerHeight || 768

      setWindowSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
