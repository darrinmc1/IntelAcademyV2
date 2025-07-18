"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Trophy, PartyPopper } from "lucide-react"
import { getRandomCompletionMessage } from "@/utils/lesson-humor"

interface HumorousCompletionBannerProps {
  topicTitle: string
  onComplete?: () => void
}

export function HumorousCompletionBanner({ topicTitle, onComplete }: HumorousCompletionBannerProps) {
  const [message, setMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMessage(getRandomCompletionMessage())
    setIsVisible(true)
    onComplete?.()
  }, [onComplete])

  if (!isVisible) return null

  return (
    <Card className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
        <Trophy className="h-8 w-8 text-yellow-500" />
        <PartyPopper className="h-8 w-8 text-purple-500" />
        <Trophy className="h-8 w-8 text-yellow-500" />
      </div>

      <h2 className="text-2xl font-bold text-purple-900 mb-2">Lesson Complete!</h2>

      <p className="text-lg text-purple-800 mb-4">
        You've mastered: <span className="font-semibold">{topicTitle}</span>
      </p>

      <div className="bg-white/50 rounded-lg p-4 border border-purple-200">
        <p className="text-purple-900 font-medium italic">{message}</p>
      </div>

      <p className="text-sm text-purple-700 mt-3">Ready for your next intelligence adventure?</p>
    </Card>
  )
}
