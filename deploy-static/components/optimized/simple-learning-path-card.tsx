"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen } from "lucide-react"
import { useOptimized3DEffect } from "@/hooks/use-optimized-3d-effect"

interface SimpleLearningPathCardProps {
  title: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  index?: number
}

export function SimpleLearningPathCard({
  title,
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  index = 0,
}: SimpleLearningPathCardProps) {
  const { style, handleMouseMove, handleMouseLeave } = useOptimized3DEffect("subtle")

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }

  return (
    <Link href={href} className="block group">
      <Card
        className="h-full transition-all duration-300 hover:shadow-lg border-0 shadow-md"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {estimatedTime}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="w-4 h-4 mr-1" />
            {topics} topics
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
