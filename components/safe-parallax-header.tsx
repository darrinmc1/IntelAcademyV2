"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { StaticImage } from "@/components/static-image"
import { cn } from "@/lib/utils"

interface SafeParallaxHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: "sm" | "md" | "lg" | "xl"
  className?: string
  children?: React.ReactNode
}

export function SafeParallaxHeader({
  title,
  subtitle,
  backgroundImage,
  height = "lg",
  className,
  children,
}: SafeParallaxHeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setIsMounted(true)

    if (typeof window === "undefined") return

    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset)
    }

    // Initial calculation
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heightClasses = {
    sm: "h-64 md:h-80",
    md: "h-80 md:h-96",
    lg: "h-96 md:h-[32rem]",
    xl: "h-[32rem] md:h-[40rem]",
  }

  // Calculate parallax values safely
  const backgroundY = isMounted ? scrollY * 0.3 : 0
  const overlayY = isMounted ? scrollY * 0.5 : 0
  const contentY = isMounted ? scrollY * 0.1 : 0

  return (
    <div className={cn("relative overflow-hidden", heightClasses[height], className)}>
      {/* Background Layer */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${backgroundY}px)`,
        }}
      >
        <StaticImage src={backgroundImage} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Animated Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${overlayY}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2210%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2250%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      {/* Content Layer */}
      <div
        className="relative z-10 flex items-center justify-center h-full px-4 md:px-6"
        style={{
          transform: `translateY(${contentY}px)`,
        }}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}