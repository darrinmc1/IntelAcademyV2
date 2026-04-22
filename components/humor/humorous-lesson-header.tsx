import { TopicHeader } from "@/components/topic-header"
import { getOpeningHook } from "@/utils/lesson-humor"

interface HumorousLessonHeaderProps {
  title: string
  topicSlug: string
  category?: string
  readTime?: number
  imageSrc?: string
}

export function HumorousLessonHeader({ title, topicSlug, category, readTime, imageSrc }: HumorousLessonHeaderProps) {
  const { hook, subtitle } = getOpeningHook(topicSlug)

  return (
    <div className="space-y-4">
      <TopicHeader title={title} description={subtitle} category={category} readTime={readTime} imageSrc={imageSrc} />

      {/* Humorous hook */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-lg font-medium text-orange-900 italic">"{hook}"</p>
        <p className="text-sm text-orange-700 mt-1">- Your friendly neighborhood intelligence instructor</p>
      </div>
    </div>
  )
}
