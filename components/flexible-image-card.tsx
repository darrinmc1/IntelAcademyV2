"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollParallax } from "@/hooks/use-scroll-parallax"

interface FlexibleImageCardProps {
  title: string
  description: string
  image: string
  href: string
  gradient: string
  index: number
  priority?: boolean
  imageHeight?: string
}

export function FlexibleImageCard({
  title,
  description,
  image,
  href,
  gradient,
  index,
  priority = false,
  imageHeight = "h-56",
}: FlexibleImageCardProps) {
  const scrollY = useScrollParallax()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Generate placeholder URL for blur effect
  const placeholderUrl = "/placeholder.svg?height=400&width=600"

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error event
  const handleError = () => {
    setHasError(true)
    setImageError(true)
  }

  // Determine the best object-fit strategy based on image
  const getObjectFitClass = () => {
    if (imageError || hasError) return "object-contain"

    // For strategic intelligence and similar wide images, use object-cover with top positioning
    if (image.includes("strategic") || image.includes("global")) {
      return "object-cover object-top"
    }

    // For tactical and operational images, use center positioning
    return "object-cover object-center"
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Container with Dynamic Height */}
      <div className={`relative ${imageHeight} overflow-hidden bg-gray-200`}>
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}

        {/* Image with Parallax */}
        <div
          style={{
            transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
          }}
          className="absolute inset-0 w-full h-[120%]" // Slightly larger for parallax effect
        >
          <Image
            src={hasError ? placeholderUrl : image}
            alt={title}
            fill
            className={`${getObjectFitClass()} transition-transform duration-700 group-hover:scale-110 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={priority ? 85 : 75}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <a
          href={href}
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
