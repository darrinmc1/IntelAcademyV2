"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { getImagesForRoute } from "@/utils/route-images"

interface PreloadLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  prefetchImages?: boolean
  prefetchRoute?: boolean
  onlyOnHover?: boolean
}

export function PreloadLink({
  href,
  children,
  className,
  prefetchImages = true,
  prefetchRoute = true,
  onlyOnHover = true,
}: PreloadLinkProps) {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)
  const [hasPreloaded, setHasPreloaded] = useState(false)
  const linkRef = useRef<HTMLAnchorElement>(null)

  // Function to preload images for the target route
  const preloadRouteImages = () => {
    if (hasPreloaded || !prefetchImages) return

    const routeImages = getImagesForRoute(href)

    // Only preload the first few images to avoid excessive network requests
    const imagesToPreload = routeImages.slice(0, 3)

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    setHasPreloaded(true)
  }

  // Preload on hover
  useEffect(() => {
    if (isHovering && !hasPreloaded) {
      // Prefetch the route data
      if (prefetchRoute) {
        router.prefetch(href)
      }

      // Preload images
      preloadRouteImages()
    }
  }, [isHovering, hasPreloaded, href, prefetchRoute, router])

  // For critical links, preload even without hover after a delay
  useEffect(() => {
    if (!onlyOnHover && !hasPreloaded) {
      const timer = setTimeout(() => {
        if (prefetchRoute) {
          router.prefetch(href)
        }

        preloadRouteImages()
      }, 2000) // Delay to prioritize visible content first

      return () => clearTimeout(timer)
    }
  }, [onlyOnHover, hasPreloaded, href, prefetchRoute, router])

  // Use Intersection Observer to preload when link is visible
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || !linkRef.current || hasPreloaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPreloaded) {
          if (prefetchRoute) {
            router.prefetch(href)
          }

          preloadRouteImages()
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    observer.observe(linkRef.current)

    return () => {
      observer.disconnect()
    }
  }, [hasPreloaded, href, prefetchRoute, router])

  return (
    <Link
      ref={linkRef}
      href={href}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      {children}
    </Link>
  )
}
