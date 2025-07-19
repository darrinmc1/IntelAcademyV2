"use client"

import { Image } from "./image"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  fallbackSrc?: string
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/placeholder.svg",
  className,
  priority,
  placeholder = 'blur',
  blurDataURL
}: LazyImageProps) {

  return (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(className)}
        priority={priority}
        fallbackSrc={fallbackSrc}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
    />
  )
}
