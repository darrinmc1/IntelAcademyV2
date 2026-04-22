"use client"

import type React from "react"

import { useParallaxMultiLayer } from "@/hooks/use-parallax"
import { StaticImage } from "@/components/static-image"
import { cn } from "@/lib/utils"

interface ParallaxHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
  overlayImage?: string
  height?: "sm" | "md" | "lg" | "xl"
  className?: string
  children?: React.ReactNode
}

export function ParallaxHeader({
  title,
  subtitle,
  backgroundImage,
  overlayImage,
  height = "lg",
  className,
  children,
}: ParallaxHeaderProps) {
  const parallax = useParallaxMultiLayer()

  const heightClasses = {
    sm: "h-64 md:h-80",
    md: "h-80 md:h-96",
    lg: "h-96 md:h-[32rem]",
    xl: "h-[32rem] md:h-[40rem]",
  }

  return (
    <div className={cn("relative overflow-hidden", heightClasses[height], className)}>
      {/* Background Layer - Slowest parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${parallax.background}px)`,
          willChange: "transform",
        }}
      >
        <StaticImage src={backgroundImage} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Overlay Pattern Layer - Medium parallax */}
      {overlayImage && (
        <div
          className="absolute inset-0 w-full h-[110%] opacity-20"
          style={{
            transform: `translateY(${parallax.midground}px)`,
            willChange: "transform",
          }}
        >
          <StaticImage src={overlayImage} alt="" fill className="object-cover mix-blend-overlay" sizes="100vw" />
        </div>
      )}

      {/* Animated Intelligence Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${parallax.foreground}px)`,
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2210%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2250%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse" />
      </div>

      {/* Content Layer - Minimal parallax */}
      <div
        className="relative z-10 flex items-center justify-center h-full px-4 md:px-6"
        style={{
          transform: `translateY(${parallax.text}px)`,
          willChange: "transform",
        }}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Floating Intelligence Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"
          style={{
            transform: `translate(${parallax.foreground * 0.3}px, ${parallax.foreground * 0.2}px)`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-40 animate-pulse"
          style={{
            transform: `translate(${parallax.foreground * -0.2}px, ${parallax.foreground * 0.4}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full opacity-30 animate-pulse"
          style={{
            transform: `translate(${parallax.foreground * 0.4}px, ${parallax.foreground * -0.3}px)`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-50 animate-pulse"
          style={{
            transform: `translate(${parallax.foreground * -0.3}px, ${parallax.foreground * 0.1}px)`,
            animationDelay: "0.5s",
          }}
        />
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}