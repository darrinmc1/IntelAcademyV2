"use client"

import Image from "next/image"
import { useScrollParallax } from "@/hooks/use-scroll-parallax"

interface LearningPathCardProps {
  title: string
  humorousQuote?: string // Add this line
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  index: number
}

export function LearningPathCardEnhanced({
  title,
  humorousQuote, // Add this line
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  index,
}: LearningPathCardProps) {
  const scrollY = useScrollParallax()

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }

  return (
    <div className="group relative bg-white border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image with Parallax */}
      <div className="relative h-48 overflow-hidden">
        <div
          style={{
            transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
          }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
          <span className="text-sm text-gray-500">{estimatedTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        {humorousQuote && <p className="text-sm text-gray-500 italic mb-3 leading-relaxed">{humorousQuote}</p>}
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{topics} topics</span>
        </div>

        <a
          href={href}
          className="block w-full bg-black text-white text-center py-3 rounded hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          Start Course
        </a>
      </div>
    </div>
  )
}
