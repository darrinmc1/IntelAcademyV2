"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { use3DCardEffect } from "@/hooks/use-3d-card-effect"

interface LearningPathCardProps {
  title: string
  humorousQuote: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  enable3D: boolean
  intensity: string
}

export function LearningPathCard({
  title,
  humorousQuote,
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  enable3D,
  intensity,
}: LearningPathCardProps) {
  const { cardRef, cardStyle, glowStyle } = use3DCardEffect({
    intensity: intensity as "subtle" | "medium" | "strong",
    enabled: enable3D,
  })

  // Determine badge color based on difficulty
  const getBadgeVariant = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Link href={href} className="block h-full">
      <Card 
        ref={cardRef}
        style={cardStyle}
        className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow hover:scale-102 group relative"
      >
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          style={glowStyle}
        />
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{title}</h3>
          </div>
          {humorousQuote && <p className="text-sm text-gray-500 italic mb-2">{humorousQuote}</p>}
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Badge
              variant="outline"
              className={`${getBadgeVariant()} transition-colors duration-300 group-hover:bg-opacity-80`}
            >
             {difficulty}
            </Badge>
            <Badge
              variant="outline"
              className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300 group-hover:bg-gray-200"
            >
              {estimatedTime}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

