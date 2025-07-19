"use client"
import { usePathname } from "next/navigation"
import { getImagesForRoute } from "@/utils/route-images"
import { useImagePreload } from "@/hooks/use-image-preload"

/**
 * Component that preloads images for the current route
 * This handles secondary images that aren't critical for above-the-fold
 */
export function ImagePreloader() {
  const pathname = usePathname()
  const imagesToPreload = getImagesForRoute(pathname)

  // Use our hook to preload images with lower priority
  useImagePreload(imagesToPreload, {
    priority: false,
    threshold: 0.1,
    rootMargin: "200px",
  })

  return null
}
