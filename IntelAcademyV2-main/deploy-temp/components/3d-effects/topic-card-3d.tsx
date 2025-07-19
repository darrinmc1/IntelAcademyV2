"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Image } from "../image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, BookOpen } from "lucide-react"

interface TopicCard3DProps {
  title: string
  description: string
  image: string
  href: string
  category: string
  estimatedTime: string
  completed?: boolean
  learningObjectives?: string[]
  intensity?: "subtle" | "medium" | "strong"
}

export function TopicCard3D({
  title,
  description,
  image,
  href,
  category,
  estimatedTime,
  completed = false,
  learningObjectives = [],
  intensity = "subtle",
}: TopicCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

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
    setIsHovered(false)
  }

  return (
    <Card
      ref={cardRef}
      className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl relative"
      style={{
        transform,
        transition: "transform 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,${settings.glow}), transparent 50%)`,
        }}
      />

      {/* Completion badge */}
      {completed && (
        <div className="absolute top-3 right-3 z-20 bg-green-500 text-white rounded-full p-1">
          <CheckCircle className="h-5 w-5" />
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700"
          fallbackSrc="/placeholder.svg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none">{category}</Badge>
        </div>
      </div>

      <CardContent className="p-5 relative">
        {/* Title and description */}
        <h3
          className="text-lg font-bold mb-2 transition-transform duration-300"
          style={{
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {title}
        </h3>

        <p
          className="text-gray-600 mb-4 text-sm line-clamp-2 transition-opacity duration-300"
          style={{
            opacity: isHovered && learningObjectives.length > 0 ? "0" : "1",
            height: isHovered && learningObjectives.length > 0 ? "0" : "auto",
            margin: isHovered && learningObjectives.length > 0 ? "0" : "",
          }}
        >
          {description}
        </p>

        {/* Learning objectives (shown on hover) */}
        {learningObjectives.length > 0 && (
          <div
            className="text-sm transition-all duration-300 overflow-hidden"
            style={{
              maxHeight: isHovered ? "200px" : "0",
              opacity: isHovered ? "1" : "0",
              marginBottom: isHovered ? "1rem" : "0",
            }}
          >
            <p className="font-medium text-blue-700 mb-1">Learning Objectives:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {learningObjectives.map((objective, i) => (
                <li key={i} className="text-sm">
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Time estimate */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{estimatedTime}</span>
        </div>

        {/* Button */}
        <Button asChild className="w-full" variant={completed ? "outline" : "default"}>
          <Link href={href} className="flex items-center justify-center gap-2">
            {completed ? (
              <>
                <span>Review</span>
                <BookOpen className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>Start Topic</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300"
                  style={{
                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
