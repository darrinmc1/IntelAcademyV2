export function SimpleLearningPathHeader({
  title,
  description,
  level,
  duration,
  topics,
  hours,
  image,
}: {
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: number
  hours: number
  image: string
}) {
  return (
    <div className="rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Level:</span> {level}
        </div>
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Duration:</span> {duration}
        </div>
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Topics:</span> {topics}
        </div>
        <div className="bg-white p-2 rounded shadow">
          <span className="font-semibold">Hours:</span> {hours}
        </div>
      </div>
    </div>
  )
}
