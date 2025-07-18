import { LearningPathCardStatic } from "@/components/learning-path-card-static"

interface LearningPathItem {
  title: string
  description: string
  topics: number
  hours: number
  image: string
  path: string
}

interface LearningPathCardGridProps {
  paths: LearningPathItem[]
  category?: string
  columns?: 2 | 3 | 4
}

export function LearningPathCardGrid({ paths, category, columns = 3 }: LearningPathCardGridProps) {
  const columnClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <div>
      {category && <h2 className="text-2xl font-bold mb-6">{category}</h2>}
      <div className={`grid grid-cols-1 ${columnClass} gap-6`}>
        {paths.map((path) => (
          <LearningPathCardStatic
            key={path.title}
            title={path.title}
            description={path.description}
            topics={path.topics}
            hours={path.hours}
            path={path.path}
            image={path.image}
          />
        ))}
      </div>
    </div>
  )
}
