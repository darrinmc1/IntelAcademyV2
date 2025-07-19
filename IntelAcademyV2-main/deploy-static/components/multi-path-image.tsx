"use client"

import { useState, useEffect } from "react"
import { Image } from "./image"

interface MultiPathImageProps {
  paths: string[]
  alt: string
  className?: string
  width?: number | string
  height?: number | string
}

export function MultiPathImage({ paths, alt, className = "", width, height }: MultiPathImageProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [paths])

  const handleError = () => {
    if (currentIndex < paths.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <Image
      src={paths[currentIndex] || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      imageType="default"
      className={className}
      onError={handleError}
      fallbackSrc={paths[paths.length - 1]} // Final fallback
    />
  )
}
