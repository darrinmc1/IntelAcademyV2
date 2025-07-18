import type { ReactNode } from "react"
import { WhatsNextCompact } from "@/components/whats-next-compact"
import { getWhatsNextRecommendations } from "@/data/whats-next-recommendations"

interface LearningPathTemplateProps {
  children: ReactNode
  pathSlug: string
}

export function LearningPathTemplate({ children, pathSlug }: LearningPathTemplateProps) {
  // Get the "What's Next?" recommendations for this learning path
  const whatsNextRecommendations = getWhatsNextRecommendations(pathSlug as any)

  return (
    <>
      {/* Main content */}
      {children}

      {/* What's Next section */}
      <WhatsNextCompact
        anotherTopic={whatsNextRecommendations.anotherTopic}
        moreLearning={whatsNextRecommendations.moreLearning}
        advancedLearning={whatsNextRecommendations.advancedLearning}
      />
    </>
  )
}
