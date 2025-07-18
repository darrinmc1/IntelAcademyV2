"use client"

import { Image } from "../image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, Circle, Trophy, Star, Calendar, TrendingUp, Award } from "lucide-react"

interface TopicProgress {
  id: string
  title: string
  completed: boolean
  timeSpent?: number
  score?: number
}

interface LearningPathProgressCardProps {
  title: string
  description: string
  image: string
  href: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  totalTopics: number
  completedTopics: number
  estimatedTime: string
  timeSpent: number
  lastAccessed: string
  overallScore?: number
  topicProgress: TopicProgress[]
  achievements?: string[]
  nextMilestone?: string
}

export function LearningPathProgressCard({
  title,
  description,
  image,
  href,
  difficulty,
  totalTopics,
  completedTopics,
  estimatedTime,
  timeSpent,
  lastAccessed,
  overallScore = 0,
  topicProgress = [],
  achievements = [],
  nextMilestone = "Complete next topic",
}: LearningPathProgressCardProps) {
  const progressPercentage = Math.round((completedTopics / totalTopics) * 100)
  const safeImagePath = image && typeof image === "string" && image.trim() !== "" ? image.trim() : "/placeholder.svg?height=300&width=400&text=Learning+Progress"

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 50) return "bg-yellow-500"
    return "bg-blue-500"
  }

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border-0 shadow-lg">
        {/* Image with Progress Overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={safeImagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fallbackSrc="/placeholder.svg?height=300&width=400&text=Learning+Progress"
          />

          {/* Progress Ring Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="relative">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.3)" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${progressPercentage * 2.51} 251`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{progressPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          {achievements.length > 0 && (
            <div
              className={`absolute top-4 right-4 transform transition-all duration-500 ${
                isHovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <Badge className="bg-yellow-500 text-yellow-900 border-yellow-400">
                <Trophy className="h-3 w-3 mr-1" />
                {achievements.length} Achievement{achievements.length > 1 ? "s" : ""}
              </Badge>
            </div>
          )}

          {/* Difficulty Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-bold text-gray-800">
                {completedTopics}/{totalTopics} topics
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{timeSpent}h spent</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{lastAccessed}</span>
            </div>
            {overallScore > 0 && (
              <>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-600">{overallScore}% avg score</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">On track</span>
                </div>
              </>
            )}
          </div>

          {/* Hover Reveal: Detailed Progress */}
          <div
            className={`transform transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100 max-h-96" : "translate-y-4 opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {/* Topic Progress List */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Topic Progress
              </h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {topicProgress.slice(0, 5).map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {topic.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                      <span className={`text-sm ${topic.completed ? "text-gray-800" : "text-gray-500"}`}>
                        {topic.title}
                      </span>
                    </div>
                    {topic.score && (
                      <Badge variant="outline" className="text-xs">
                        {topic.score}%
                      </Badge>
                    )}
                  </div>
                ))}
                {topicProgress.length > 5 && (
                  <div className="text-center text-sm text-gray-500 pt-2">+{topicProgress.length - 5} more topics</div>
                )}
              </div>
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Recent Achievements
                </h4>
                <div className="space-y-1">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="text-sm text-yellow-700 flex items-center gap-2">
                      <Trophy className="h-3 w-3" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Milestone */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-1">Next Milestone</h4>
              <p className="text-sm text-blue-700">{nextMilestone}</p>
            </div>
          </div>

          {/* Action Button */}
          <Link href={href}>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              {progressPercentage === 100 ? "Review Course" : "Continue Learning"}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
