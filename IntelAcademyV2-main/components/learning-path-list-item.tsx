"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, ChevronRight } from "lucide-react"

interface LearningPathListItemProps {
  title: string
  description: string
  humorousQuote?: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: number | string[]
  estimatedTime: string
  href: string
}

export function LearningPathListItem({
  title,
  description,
  humorousQuote,
  difficulty,
  topics,
  estimatedTime,
  href,
}: LearningPathListItemProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  // Format topics for display
  const topicsDisplay = Array.isArray(topics) ? topics.join(", ") : `${topics} topics`

  return (
    <Link 
      href={href}
      className="block border rounded-lg p-4 hover:bg-gray-50 transition-colors mb-2"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Badge className={`${difficultyColors[difficulty]} border`}>{difficulty}</Badge>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-1">{description}</p>
          {humorousQuote && <p className="text-gray-500 text-xs italic mb-2">{humorousQuote}</p>}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{Array.isArray(topics) ? topics.length : topics} topics</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime}</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block w-1/3 bg-gray-50 p-3 rounded-md">
          <div className="text-xs font-medium text-gray-500 mb-1">Topics included:</div>
          <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
            {Array.isArray(topics) ? (
              topics.map((topic, index) => (
                <li key={index} className="line-clamp-1">{topic}</li>
              ))
            ) : (
              <li className="text-gray-400 italic">Topics information not available</li>
            )}
          </ul>
        </div>
        
        <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
      </div>
    </Link>
  )
}