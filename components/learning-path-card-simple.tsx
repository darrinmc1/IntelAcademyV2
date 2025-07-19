"use client"

import { useState } from "react"
import Image from "next/image"

interface LearningPathCardSimpleProps {
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

export function LearningPathCardSimple({
  title,
  humorousQuote, // Add this line
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  index,
}: LearningPathCardSimpleProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const placeholderUrl = "/placeholder.svg?height=400&width=600"

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Container - NO PARALLAX */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}

        {/* Simple Image without Parallax */}
        <Image
          src={hasError ? placeholderUrl : image}
          alt={title}
          fill
          className={`object-cover object-center transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />

        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>{difficulty}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        {humorousQuote && <p className="text-sm text-gray-500 italic mb-3 leading-relaxed">{humorousQuote}</p>}
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{topics} topics</span>
          <span>{estimatedTime}</span>
        </div>

        <a
          href={href}
          className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Start Learning
        </a>
      </div>
    </div>
  )
}
