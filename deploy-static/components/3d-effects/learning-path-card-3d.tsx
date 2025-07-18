"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Image } from "../image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface LearningPathCard3DProps {
  title: string
  description: string
  humorousQuote?: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number | string[]
  estimatedTime: string
  intensity?: "subtle" | "medium" | "strong"
  index?: number
}

export function LearningPathCard3D({
  title,
  description,
  humorousQuote,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  intensity = "subtle",
  index = 0,
}: LearningPathCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })

  // Configure intensity levels
  const intensitySettings = {
    subtle: { tilt: 5, scale: 1.02, glow: 0.1 },
    medium: { tilt: 10, scale: 1.05, glow: 0.15 },
    strong: { tilt: 15, scale: 1.08, glow: 0.2 },
  }

  const settings = intensitySettings[intensity]

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * settings.tilt
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * settings.tilt

    // Update transform
    setTransform(`
      perspective(1000px) 
      scale(${settings.scale}) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
    `)

    // Update glow position
    const x = ((mouseX - rect.left) / rect.width) * 100
    const y = ((mouseY - rect.top) / rect.height) * 100
    setGlowPosition({ x, y })
  }

  // Reset transform on mouse leave
  const handleMouseLeave = () => {
    setTransform("perspective(1000px) scale(1) rotateX(0) rotateY(0)")
  }

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  

  // Format topics for display
  const topicsDisplay = Array.isArray(topics) ? topics.join(", ") : `${topics} topics`

  return (
    <Card
      ref={cardRef}
      className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl relative group"
      style={{
        transform,
        transition: "transform 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,${settings.glow}), transparent 50%)`,
        }}
      />

      {/* Category */}
      <div className="absolute top-0 left-0 right-0 flex justify-end items-center p-3 z-10 bg-gradient-to-b from-black/60 to-transparent">
      </div>

      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-110 duration-700"
          fallbackSrc="/placeholder.svg"
          priority={index < 3}
        />
      </div>

      <CardContent className="p-5">
        {/* Difficulty and time */}
        <div className="flex justify-between items-center mb-3">
          <Badge className={`${difficultyColors[difficulty]} border`}>{difficulty}</Badge>
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">{estimatedTime}</span>
          </div>
        </div>

        {/* Title, quote and description */}
        <h3 className="text-xl font-bold mb-2 transition-transform group-hover:translate-x-1 duration-300">{title}</h3>
        {humorousQuote && <p className="text-sm text-gray-500 italic mb-2">{humorousQuote}</p>}
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Topics */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>{topicsDisplay}</span>
          </div>
        </div>

        {/* Button */}
        <Button asChild className="w-full relative overflow-hidden group-hover:bg-blue-600 transition-colors">
          <Link href={href}>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Learning
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
