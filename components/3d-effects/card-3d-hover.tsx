"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface Card3DHoverProps {
  children: React.ReactNode
  intensity?: "subtle" | "medium" | "strong"
  enableTilt?: boolean
  enableGlow?: boolean
  className?: string
}

export function Card3DHover({
  children,
  intensity = "medium",
  enableTilt = true,
  enableGlow = true,
  className = "",
}: Card3DHoverProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const intensitySettings = {
    subtle: {
      maxTilt: 5,
      scale: 1.02,
      glowOpacity: 0.1,
      shadowBlur: 20,
    },
    medium: {
      maxTilt: 10,
      scale: 1.05,
      glowOpacity: 0.15,
      shadowBlur: 30,
    },
    strong: {
      maxTilt: 15,
      scale: 1.08,
      glowOpacity: 0.2,
      shadowBlur: 40,
    },
  }

  const settings = intensitySettings[intensity]

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !enableTilt) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const rotateX = (mouseY / (rect.height / 2)) * settings.maxTilt
      const rotateY = (mouseX / (rect.width / 2)) * settings.maxTilt

      setMousePosition({ x: -rotateY, y: rotateX })
    },
    [enableTilt, settings.maxTilt],
  )

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="perspective-1000" style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        className={`relative transform-gpu transition-all duration-300 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
          scale: isHovered ? settings.scale : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main Content */}
        <div className="relative z-10">{children}</div>

        {/* Glow Effect */}
        {enableGlow && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{
              opacity: isHovered ? settings.glowOpacity : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(147, 51, 234, 0.2) 50%, 
                transparent 100%)`,
              filter: `blur(${settings.shadowBlur}px)`,
            }}
          />
        )}

        {/* Enhanced Shadow */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            transform: `translateZ(-10px) translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
            filter: `blur(${settings.shadowBlur}px)`,
          }}
        />

        {/* Highlight Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden"
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent"
            style={{
              transform: `translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
