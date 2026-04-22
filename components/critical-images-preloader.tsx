"use client"

import { useEffect } from "react"
import { criticalImages } from "@/utils/image-mappings"

/**
 * Component that preloads the most critical site-wide images in the document head
 * These are images that are used across multiple pages and should be available immediately
 */
export function CriticalImagesPreloader() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return

    // Create link preload tags for critical images
    criticalImages.forEach((src, index) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src

      // Set high priority for the first few images
      if (index < 3) {
        link.fetchPriority = "high"
      }

      document.head.appendChild(link)
    })

    // Preload the logo and other essential UI images
    const essentialUIImages = [
      "/foundations.png", // Used in header
      "/strategic-intelligence.png", // Used in header
      "/operational-intelligence-default.png", // Used in header
    ]

    essentialUIImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      link.fetchPriority = "high"
      document.head.appendChild(link)
    })
  }, [])

  return null
}
