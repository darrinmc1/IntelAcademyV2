import { WhatsNextCompact } from "@/components/whats-next-compact"
import { getWhatsNextRecommendations } from "@/data/whats-next-recommendations"

interface PathWhatsNextProps {
  pathSlug?: string
  currentPathSlug?: string
}

export function PathWhatsNext({ pathSlug, currentPathSlug }: PathWhatsNextProps) {
  const displaySlug = pathSlug || currentPathSlug || ""
  const recommendations = getWhatsNextRecommendations(displaySlug as any)

  return (
    <WhatsNextCompact
      anotherTopic={recommendations.anotherTopic}
      moreLearning={recommendations.moreLearning}
      advancedLearning={recommendations.advancedLearning}
    />
  )
}
