export function SimpleLearningPathHeader({
  title,
  description,
  level,
  difficulty,
  duration,
  estimatedTime,
  topics,
  topicCount,
  hours,
  image,
  bannerImageUrl,
  category,
}: {
  title: string
  description: string
  level?: "Beginner" | "Intermediate" | "Advanced"
  difficulty?: string
  duration?: string
  estimatedTime?: string
  topics?: number
  topicCount?: number
  hours?: number
  image?: string
  bannerImageUrl?: string
  category?: string
}) {
  const displayLevel = level || difficulty || "Intermediate"
  const displayDuration = duration || estimatedTime || "2 hours"
  const displayTopics = topics || topicCount || 0
  const displayImage = image || bannerImageUrl
  return (
    <div className="rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        {category && (
          <div className="bg-white p-2 rounded shadow">
            <span className="font-semibold">Category:</span> {category}
          </div>
        )}
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Level:</span> {displayLevel}
        </div>
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Duration:</span> {displayDuration}
        </div>
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Topics:</span> {displayTopics}
        </div>
        {hours !== undefined && (
          <div className="bg-white p-2 rounded shadow">
            <span className="font-semibold">Hours:</span> {hours}
          </div>
        )}
      </div>
    </div>
  )
}
