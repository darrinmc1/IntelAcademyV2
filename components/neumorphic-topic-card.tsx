"use client"

import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import {
  NeumorphicCard,
  NeumorphicCardContent,
  NeumorphicCardHeader,
  NeumorphicCardTitle,
} from "@/components/ui/neumorphic-card"
import { NeumorphicButton } from "@/components/ui/neumorphic-button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, CheckCircle, PlayCircle } from "lucide-react"

interface NeumorphicTopicCardProps {
  title: string
  description: string
  imagePath: string
  href: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed?: boolean
  views?: number
  hasVideo?: boolean
}

export function NeumorphicTopicCard({
  title,
  description,
  imagePath,
  href,
  duration,
  difficulty,
  completed = false,
  views,
  hasVideo = false,
}: NeumorphicTopicCardProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  }

  return (
    <NeumorphicCard className="group overflow-hidden transition-all duration-300 hover:scale-105">
      <div className="relative h-40 overflow-hidden">
        <StaticImage
          src={imagePath}
          alt={title}
          width={300}
          height={160}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
          {hasVideo && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <PlayCircle className="mr-1 h-3 w-3" />
              Video
            </Badge>
          )}
        </div>

        {completed && (
          <div className="absolute top-3 right-3">
            <CheckCircle className="h-6 w-6 text-green-400" />
          </div>
        )}
      </div>

      <NeumorphicCardHeader>
        <NeumorphicCardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </NeumorphicCardTitle>
      </NeumorphicCardHeader>

      <NeumorphicCardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          {views && (
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views.toLocaleString()} views</span>
            </div>
          )}
        </div>

        <NeumorphicButton asChild variant={completed ? "secure" : "default"} className="w-full" effect="glow">
          <Link href={href}>{completed ? "Review Topic" : "Start Topic"}</Link>
        </NeumorphicButton>
      </NeumorphicCardContent>
    </NeumorphicCard>
  )
}
