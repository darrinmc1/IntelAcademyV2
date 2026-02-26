"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState, useRef, useCallback } from "react"
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
  const preloadRouteImages = useCallback(() => {
    if (hasPreloaded || !prefetchImages) return

    const routeImages = getImagesForRoute(href)

    const imagesToPreload = routeImages.slice(0, 3)

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    setHasPreloaded(true)
  }, [hasPreloaded, prefetchImages, href])

  useEffect(() => {
    if (isHovering && !hasPreloaded) {
      if (prefetchRoute) {
        router.prefetch(href)
      }

      preloadRouteImages()
    }
  }, [isHovering, hasPreloaded, href, prefetchRoute, router, preloadRouteImages])

  useEffect(() => {
    if (!onlyOnHover && !hasPreloaded) {
      const timer = setTimeout(() => {
        if (prefetchRoute) {
          router.prefetch(href)
        }

        preloadRouteImages()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [onlyOnHover, hasPreloaded, href, prefetchRoute, router, preloadRouteImages])

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
  }, [hasPreloaded, href, prefetchRoute, router, preloadRouteImages])

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
