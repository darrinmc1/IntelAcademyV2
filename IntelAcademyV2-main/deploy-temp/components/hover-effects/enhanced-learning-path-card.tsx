"use client"

import { Image } from "../image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, BookOpen, Target, ChevronRight, Play, Bookmark } from "lucide-react"

interface LearningPathCardProps {
  title: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number
  estimatedTime: string
  progress?: number
  prerequisites?: string[]
  learningOutcomes?: string[]
  enrolledUsers?: number
  lastUpdated?: string
  instructor?: string
  category?: string
}

export function EnhancedLearningPathCard({
  title,
  description,
  image,
  href,
  difficulty,
  topics,
  estimatedTime,
  progress = 0,
  prerequisites = [],
  learningOutcomes = [],
  enrolledUsers = 0,
  lastUpdated = "Recently",
  instructor = "Intel Academy",
  category = "Intelligence Analysis",
}: LearningPathCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  const safeImagePath = image && typeof image === "string" && image.trim() !== "" ? image.trim() : "/placeholder.svg?height=300&width=400&text=Learning+Path"

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border-0 shadow-lg">
        {/* Image Container with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={safeImagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fallbackSrc="/placeholder.svg?height=300&width=400&text=Learning+Path"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Progress Indicator - Appears on Hover */}
          <div
            className={`absolute bottom-4 left-4 right-4 transform transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {progress > 0 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Progress</span>
                  <span className="text-sm font-bold text-gray-800">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
          </div>

          {/* Quick Action Buttons - Appears on Hover */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transform transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
              <Play className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-800">
              {category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 relative">
          {/* Main Content */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <Badge className={`${difficultyColors[difficulty]} border`}>{difficulty}</Badge>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {estimatedTime}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>

            <p className="text-gray-600 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{topics} topics</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{enrolledUsers.toLocaleString()} enrolled</span>
            </div>
          </div>

          {/* Hover Reveal Content */}
          <div
            className={`transform transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100 max-h-96" : "translate-y-4 opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {/* Prerequisites */}
            {prerequisites.length > 0 && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Prerequisites
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learning Outcomes */}
            {learningOutcomes.length > 0 && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Learning Outcomes</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {learningOutcomes.slice(0, 3).map((outcome, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {outcome}
                    </li>
                  ))}
                  {learningOutcomes.length > 3 && (
                    <li className="text-green-600 font-medium">+{learningOutcomes.length - 3} more outcomes</li>
                  )}
                </ul>
              </div>
            )}

            {/* Course Details */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Instructor:</span>
                  <p className="text-gray-600">{instructor}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Updated:</span>
                  <p className="text-gray-600">{lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Link href={href}>
            <Button className="w-full group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                {progress > 0 ? "Continue Learning" : "Start Learning"}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </Link>
        </CardContent>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
        </div>
      </Card>
    </div>
  )
}
