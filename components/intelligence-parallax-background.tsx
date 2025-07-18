"use client"

import { useParallax } from "@/hooks/use-parallax"
import { StaticImage } from "@/components/static-image"

interface IntelligenceParallaxBackgroundProps {
  primaryImage: string
  secondaryImage?: string
  className?: string
}

export function IntelligenceParallaxBackground({
  primaryImage,
  secondaryImage,
  className,
}: IntelligenceParallaxBackgroundProps) {
  const slowParallax = useParallax(0.3)
  const mediumParallax = useParallax(0.5)
  const fastParallax = useParallax(0.8)

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Primary background layer */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${slowParallax}px)`,
          willChange: "transform",
        }}
      >
        <StaticImage src={primaryImage} alt="" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Secondary overlay layer */}
      {secondaryImage && (
        <div
          className="absolute inset-0 w-full h-[110%] opacity-30"
          style={{
            transform: `translateY(${mediumParallax}px)`,
            willChange: "transform",
          }}
        >
          <StaticImage src={secondaryImage} alt="" fill className="object-cover mix-blend-multiply" sizes="100vw" />
        </div>
      )}

      {/* Animated intelligence network overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${fastParallax}px)`,
          willChange: "transform",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="intelligence-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.2" />
              <circle cx="75" cy="25" r="1" fill="currentColor" opacity="0.2" />
              <circle cx="25" cy="75" r="1" fill="currentColor" opacity="0.2" />
              <circle cx="75" cy="75" r="1" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intelligence-grid)" className="text-white" />

          {/* Connecting lines */}
          <g className="text-blue-400" opacity="0.1">
            <line x1="100" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="300" y1="200" x2="500" y2="150" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="150" x2="700" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="700" y1="300" x2="900" y2="250" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="400" x2="400" y2="350" stroke="currentColor" strokeWidth="1" />
            <line x1="400" y1="350" x2="600" y2="450" stroke="currentColor" strokeWidth="1" />
            <line x1="600" y1="450" x2="800" y2="400" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Intelligence nodes */}
          <g className="text-yellow-400" opacity="0.4">
            <circle cx="100" cy="100" r="4" fill="currentColor" className="animate-pulse" />
            <circle
              cx="300"
              cy="200"
              r="3"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="500"
              cy="150"
              r="5"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="700"
              cy="300"
              r="3"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="900"
              cy="250"
              r="4"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <circle
              cx="200"
              cy="400"
              r="3"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <circle
              cx="400"
              cy="350"
              r="4"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "0.8s" }}
            />
            <circle
              cx="600"
              cy="450"
              r="3"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "1.3s" }}
            />
            <circle
              cx="800"
              cy="400"
              r="5"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: "1.8s" }}
            />
          </g>
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
    </div>
  )
}
