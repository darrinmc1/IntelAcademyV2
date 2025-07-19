"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollParallax } from "@/hooks/use-scroll-parallax"

interface OptimizedHeroImageProps {
  src: string
  alt: string
}

export function OptimizedHeroImage({ src, alt }: OptimizedHeroImageProps) {
  const scrollY = useScrollParallax()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate placeholder URL for blur effect
  const placeholderUrl = "/placeholder.svg?height=1200&width=1920"

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error event
  const handleError = () => {
    setHasError(true)
  }

  return (
    <div
      className="absolute inset-0 w-full h-[120%]"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-800 animate-pulse" aria-hidden="true" />}

      <Image
        src={hasError ? placeholderUrl : src}
        alt={alt}
        fill
        className={`object-cover ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        priority
        quality={90}
        sizes="100vw"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}
