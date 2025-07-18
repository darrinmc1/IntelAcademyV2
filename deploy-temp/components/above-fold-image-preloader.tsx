"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getAboveFoldImagesForRoute } from "@/utils/above-fold-images"

/**
 * Component that preloads critical above-the-fold images based on the current route
 * Uses high-priority preloading for the most important images
 */
export function AboveFoldImagePreloader() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Get the critical images for this route
    const criticalImages = getAboveFoldImagesForRoute(pathname)

    if (!criticalImages.length) return

    // Create link preload tags for the most critical images (first 3)
    criticalImages.slice(0, 3).forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      link.fetchPriority = "high"
      document.head.appendChild(link)
    })

    // For the rest, use a lower priority
    criticalImages.slice(3).forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

    // Cleanup function to remove preload links when component unmounts
    return () => {
      document.querySelectorAll('link[rel="preload"][as="image"]').forEach((el) => {
        if (criticalImages.includes(el.getAttribute("href") || "")) {
          el.remove()
        }
      })
    }
  }, [pathname])

  return null
}
