import { WhatsNextCompact } from "@/components/whats-next-compact"
import { getWhatsNextRecommendations } from "@/data/whats-next-recommendations"

interface PathWhatsNextProps {
  pathSlug: string
}

export function PathWhatsNext({ pathSlug }: PathWhatsNextProps) {
  const recommendations = getWhatsNextRecommendations(pathSlug as any)

  return (
    <WhatsNextCompact
      anotherTopic={recommendations.anotherTopic}
      moreLearning={recommendations.moreLearning}
      advancedLearning={recommendations.advancedLearning}
    />
  )
}
