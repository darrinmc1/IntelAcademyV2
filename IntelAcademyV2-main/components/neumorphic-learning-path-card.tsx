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
import { NeumorphicProgress } from "@/components/ui/neumorphic-progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, ChevronRight } from "lucide-react"

interface NeumorphicLearningPathCardProps {
  title: string
  description: string
  imagePath: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: number
  progress?: number
  category: string
}

export function NeumorphicLearningPathCard({
  title,
  description,
  imagePath,
  href,
  difficulty,
  duration,
  topics,
  progress = 0,
  category,
}: NeumorphicLearningPathCardProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  }

  return (
    <NeumorphicCard className="group overflow-hidden transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <StaticImage
          src={imagePath}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className={`absolute top-4 right-4 ${difficultyColors[difficulty]}`}>{difficulty}</Badge>
      </div>

      <NeumorphicCardHeader>
        <NeumorphicCardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </NeumorphicCardTitle>
      </NeumorphicCardHeader>

      <NeumorphicCardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{topics} topics</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{category}</span>
          </div>
        </div>

        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <NeumorphicProgress value={progress} className="h-2" />
          </div>
        )}

        <NeumorphicButton asChild variant="classified" className="w-full group/btn">
          <Link href={href}>
            <span>Start Learning</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </NeumorphicButton>
      </NeumorphicCardContent>
    </NeumorphicCard>
  )
}
