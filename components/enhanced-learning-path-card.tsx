"use client"

import { Image } from "./image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

interface LearningPathCardProps {
  title?: string | null
  description?: string | null
  image?: string | null
  href?: string | null
  difficulty?: "Beginner" | "Intermediate" | "Advanced" | null
  topics?: number | null
  estimatedTime?: string | null
}

export function EnhancedLearningPathCard({
  title,
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
}: LearningPathCardProps) {
  // Safe data processing with comprehensive fallbacks
  const safeTitle = title && typeof title === "string" && title.trim() !== "" ? title.trim() : "Untitled Learning Path"

  const safeDescription =
    description && typeof description === "string" && description.trim() !== ""
      ? description.trim()
      : "Course description not available. This learning path will provide valuable insights and knowledge."

  const safeImagePath =
    image && typeof image === "string" && image.trim() !== "" ? image.trim() : "/placeholder.svg?height=300&width=400"

  const safeHref = href && typeof href === "string" && href.trim() !== "" ? href.trim() : "#"

  const safeDifficulty =
    difficulty && ["Beginner", "Intermediate", "Advanced"].includes(difficulty) ? difficulty : "Beginner"

  const safeTopics = typeof topics === "number" && topics >= 0 ? topics : 0

  const safeEstimatedTime =
    estimatedTime && typeof estimatedTime === "string" && estimatedTime.trim() !== ""
      ? estimatedTime.trim()
      : "2-3 hours"

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  // Generate fallback placeholder if image fails
  const fallbackImage = `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(safeTitle)}`

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-100">
        <Image
          src={safeImagePath}
          alt={safeTitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
          fallbackSrc={fallbackImage}
          imageType="card"
        />
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <Badge className={difficultyColors[safeDifficulty]}>{safeDifficulty}</Badge>
          <span className="text-sm text-gray-500">{safeEstimatedTime}</span>
        </div>
        <CardTitle className="text-xl mb-2 line-clamp-2">{safeTitle}</CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">{safeDescription}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            {safeTopics} {safeTopics === 1 ? "topic" : "topics"}
          </span>
          {safeHref === "#" && (
            <Badge variant="outline" className="text-xs">
              Coming Soon
            </Badge>
          )}
        </div>
        <Button asChild className="w-full" disabled={safeHref === "#"}>
          <Link href={safeHref}>{safeHref === "#" ? "Coming Soon" : "Start Learning"}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
