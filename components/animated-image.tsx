"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  animation?: "fade" | "scale" | "slide" | "none"
}

export function AnimatedImage({ src, alt, width, height, className, animation = "fade" }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Ensure width and height are valid numbers
  const safeWidth =
    typeof width === "number" && !isNaN(width) && width > 0
      ? width
      : typeof width === "string" && !isNaN(Number.parseInt(width))
        ? Number.parseInt(width)
        : 800

  const safeHeight =
    typeof height === "number" && !isNaN(height) && height > 0
      ? height
      : typeof height === "string" && !isNaN(Number.parseInt(height))
        ? Number.parseInt(height)
        : 600

  // Animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    none: {
      hidden: {},
      visible: {},
    },
  }

  return (
    <div className="relative">
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={variants[animation]}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || "Animated image"}
          width={safeWidth}
          height={safeHeight}
          className={className || ""}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  )
}
