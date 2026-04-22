"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ClientOnlyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  fallbackSrc?: string
}

export function ClientOnlyImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  priority = false,
  fill = false,
  sizes,
  fallbackSrc = "/placeholder.svg",
}: ClientOnlyImageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
      />
    )
  }

  return (
    <Image
      src={src || fallbackSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      priority={priority}
      fill={fill}
      sizes={sizes}
    />
  )
}

export { ClientOnlyImage as default }
