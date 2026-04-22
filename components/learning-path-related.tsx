import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface RelatedPath {
  title: string
  description?: string
  imagePath?: string
  url: string
}

interface LearningPathRelatedProps {
  paths: RelatedPath[]
  className?: string
}

export function LearningPathRelated({ paths, className }: LearningPathRelatedProps) {
  if (!paths.length) return null

  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-2xl font-semibold">Related Learning Paths</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paths.map((path, index) => (
          <Link
            href={path.url}
            key={index}
            className="group overflow-hidden rounded-lg border transition-colors hover:border-blue-200 dark:border-gray-800 dark:hover:border-blue-900"
          >
            <div className="relative h-40 w-full">
              {path.imagePath ? (
                <Image
                  src={path.imagePath || "/placeholder.svg"}
                  alt={path.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{path.title}</h3>
              {path.description && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{path.description}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
