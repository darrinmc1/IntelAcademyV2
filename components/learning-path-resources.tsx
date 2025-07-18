import { cn } from "@/lib/utils"
import Link from "next/link"
import { FileText, Video, LinkIcon, Download } from "lucide-react"

interface Resource {
  title: string
  description?: string
  url: string
  type: "article" | "video" | "link" | "download"
}

interface LearningPathResourcesProps {
  resources: Resource[]
  className?: string
}

export function LearningPathResources({ resources, className }: LearningPathResourcesProps) {
  if (!resources.length) return null

  const getIcon = (type: Resource["type"]) => {
    switch (type) {
      case "article":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "download":
        return <Download className="h-5 w-5" />
      default:
        return <LinkIcon className="h-5 w-5" />
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-2xl font-semibold">Additional Resources</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource, index) => (
          <Link
            href={resource.url}
            key={index}
            className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            <div className="mt-0.5 rounded-md bg-blue-100 p-2 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              {getIcon(resource.type)}
            </div>
            <div>
              <h3 className="font-medium">{resource.title}</h3>
              {resource.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
