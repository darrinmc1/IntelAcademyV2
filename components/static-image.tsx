"use client"

import { useState } from "react"
import Image from "next/image"

interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
  className?: string
  fallbackSrc?: string
}

export function StaticImage({
  src,
  alt,
  width = 400,
  height = 300,
  fill,
  priority,
  sizes,
  className = "",
  fallbackSrc = "/placeholder.svg",
}: StaticImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  if (fill) {
    return (
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        onError={handleError}
      />
    )
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={handleError}
    />
  )
}
