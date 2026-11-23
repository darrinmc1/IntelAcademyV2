"use client"

import { useState } from "react"
import Image from "next/image"

interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  fallbackSrc?: string
  priority?: boolean
  sizes?: string
  fetchPriority?: "high" | "low" | "auto"
}

export function StaticImage({
  src,
  alt,
  width = 400,
  height = 300,
  fill = false,
  className = "",
  fallbackSrc = "/placeholder.svg",
  priority = false,
  sizes,
  fetchPriority,
}: StaticImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      priority={priority}
      fetchPriority={fetchPriority}
      sizes={sizes}
      onError={handleError}
    />
  )
}
