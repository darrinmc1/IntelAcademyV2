"use client"

import NextImage, { type ImageProps } from "next/image"
import { useState } from "react"

// Utility functions integrated from safe-image-dimensions.ts

function safeToNumber(value: any, defaultValue: number): number {
  if (value === undefined || value === null || value === "") {
    return defaultValue
  }
  if (typeof value === "number") {
    if (isNaN(value) || !isFinite(value) || value <= 0) {
      return defaultValue
    }
    return Math.floor(value)
  }
  if (typeof value === "string") {
    const cleanValue = value.replace(/[^\d.]/g, "")
    if (cleanValue === "" || cleanValue === ".") {
      return defaultValue
    }
    const parsed = Number.parseFloat(cleanValue)
    if (isNaN(parsed) || !isFinite(parsed) || parsed <= 0) {
      return defaultValue
    }
    return Math.floor(parsed)
  }
  const converted = Number(value)
  if (isNaN(converted) || !isFinite(converted) || converted <= 0) {
    return defaultValue
  }
  return Math.floor(converted)
}

function getSafeImageDimensions(
  width: any,
  height: any,
  type: "hero" | "banner" | "card" | "thumbnail" | "content" | "default" = "default",
): { width: number; height: number } {
  const defaults = {
    hero: { width: 1200, height: 600 },
    banner: { width: 1200, height: 400 },
    card: { width: 400, height: 300 },
    thumbnail: { width: 200, height: 150 },
    content: { width: 800, height: 450 },
    default: { width: 800, height: 600 },
  }
  const defaultDimensions = defaults[type]
  return {
    width: safeToNumber(width, defaultDimensions.width),
    height: safeToNumber(height, defaultDimensions.height),
  }
}

function createFallbackImageUrl(alt: string, width: any, height: any): string {
  const safeWidth = safeToNumber(width, 800)
  const safeHeight = safeToNumber(height, 600)
  const encodedAlt = encodeURIComponent(alt || "Image")
  return `/placeholder.svg?height=${safeHeight}&width=${safeWidth}&query=${encodedAlt}`
}

function validateImageProps(props: any, imageType: any): any {
  const { width, height, fill, ...otherProps } = props
  if (fill) {
    return { ...otherProps, fill: true }
  }
  const { width: safeWidth, height: safeHeight } = getSafeImageDimensions(width, height, imageType)
  return {
    ...otherProps,
    width: safeWidth,
    height: safeHeight,
  }
}

// Main Image component

interface ImageComponentProps extends ImageProps {
  fallbackSrc?: string
  imageType?: "hero" | "banner" | "card" | "thumbnail" | "content" | "default"
}

export function Image({
  src,
  alt,
  fallbackSrc,
  imageType = "default",
  onError,
  ...props
}: ImageComponentProps) {
  const [error, setError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const safeProps = validateImageProps(props, imageType)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!error) {
      setError(true)
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      } else {
        const width = safeToNumber(props.width, 800)
        const height = safeToNumber(props.height, 600)
        setImgSrc(createFallbackImageUrl(alt, width, height))
      }
    }
    if (onError) {
      onError(e)
    }
  }

  const finalSrc = imgSrc || createFallbackImageUrl(alt, safeProps.width || 800, safeProps.height || 600)

  return <NextImage {...safeProps} src={finalSrc || "/placeholder.svg"} alt={alt} onError={handleError} />
}
