"use client"

import { useState } from "react"
import Image from "next/image"

interface SimpleImageCardProps {
  title: string
  description: string
  image: string
  href: string
  gradient: string
  index: number
  priority?: boolean
}

export function SimpleImageCard({
  title,
  description,
  image,
  href,
  gradient,
  index,
  priority = false,
}: SimpleImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate placeholder URL for blur effect
  const placeholderUrl = "/placeholder.svg?height=400&width=600"

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error event
  const handleError = () => {
    setHasError(true)
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Container - NO PARALLAX */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}

        {/* Simple Image without Parallax */}
        <Image
          src={hasError ? placeholderUrl : image}
          alt={title}
          fill
          className={`object-cover object-center transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={priority ? 85 : 75}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
        />

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
