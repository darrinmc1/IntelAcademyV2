"use client"

import { ParallaxHeader } from "@/components/parallax-header"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

interface LearningPathHeaderProps {
  title: string
  description?: string
  imagePath?: string
  overlayImage?: string
  estimatedTime?: string
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  enrolledCount?: number
  className?: string
}

export function LearningPathHeader({
  title,
  description,
  imagePath,
  overlayImage,
  estimatedTime,
  difficulty,
  enrolledCount,
  className,
}: LearningPathHeaderProps) {
  const getDifficultyColor = (level?: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Advanced":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <ParallaxHeader
      title={title}
      subtitle={description}
      backgroundImage={imagePath || "/intelligence-analysis-workspace.png"}
      overlayImage={overlayImage || "/digital-investigation-interface.png"}
      height="lg"
      className={className}
    >
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90">
        {estimatedTime && (
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{estimatedTime}</span>
          </div>
        )}

        {difficulty && (
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <div className={`w-3 h-3 rounded-full ${getDifficultyColor(difficulty)}`} />
            <span className="text-sm">{difficulty}</span>
          </div>
        )}

        {enrolledCount && (
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{enrolledCount.toLocaleString()} enrolled</span>
          </div>
        )}

        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <Award className="w-4 h-4" />
          <span className="text-sm">Certificate Available</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          <BookOpen className="w-5 h-5 mr-2" />
          Start This Path
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 backdrop-blur-sm"
          asChild
        >
          <Link href="#curriculum">View Curriculum</Link>
        </Button>
      </div>
    </ParallaxHeader>
  )
}
