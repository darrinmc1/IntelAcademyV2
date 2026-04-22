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
      <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white/10 border border-white/10 p-2 rounded text-slate-200">
          <span className="font-semibold text-cyan-400">Level:</span> {level}
        </div>
        <div className="bg-white/10 border border-white/10 p-2 rounded text-slate-200">
          <span className="font-semibold text-cyan-400">Duration:</span> {duration}
        </div>
        <div className="bg-white/10 border border-white/10 p-2 rounded text-slate-200">
          <span className="font-semibold text-cyan-400">Topics:</span> {topics}
        </div>
        <div className="bg-white/10 border border-white/10 p-2 rounded text-slate-200">
          <span className="font-semibold text-cyan-400">Hours:</span> {hours}
        </div>
      </div>
    </div>
  )
}
