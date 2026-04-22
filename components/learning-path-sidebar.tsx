import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import { CheckCircle2, Circle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopicItem {
  id: string
  title: string
  href: string
  completed?: boolean
  current?: boolean
}

interface LearningPathSidebarProps {
  pathTitle: string
  pathHref: string
  pathImage: string
  topics: TopicItem[]
  currentTopicId?: string
}

export function LearningPathSidebar({
  pathTitle,
  pathHref,
  pathImage,
  topics,
  currentTopicId,
}: LearningPathSidebarProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="p-4 border-b bg-gray-50">
        <Link href={pathHref} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
            <StaticImage
              src={pathImage}
              alt={pathTitle}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-medium group-hover:text-blue-600 transition-colors">{pathTitle}</h3>
            <p className="text-xs text-gray-500">Learning Path</p>
          </div>
        </Link>
      </div>

      <div className="p-2">
        <h4 className="text-sm font-medium text-gray-500 px-3 py-2">Topics</h4>
        <ul className="space-y-1">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link
                href={topic.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                  topic.current ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-100 text-gray-700",
                )}
              >
                {topic.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                )}
                <span className="line-clamp-2">{topic.title}</span>
                {topic.current && <ChevronRight className="w-4 h-4 ml-auto text-blue-500" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t bg-gray-50">
        <Link href="/learning-paths" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <span>All Learning Paths</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
