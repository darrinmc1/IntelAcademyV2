import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface TopicNavigationProps {
  previousTopic?: {
    title: string
    href: string
    imagePath?: string
  }
  nextTopic?: {
    title: string
    href: string
    imagePath?: string
  }
  learningPath: {
    title: string
    href: string
  }
}

export function TopicNavigation({ previousTopic, nextTopic, learningPath }: TopicNavigationProps) {
  return (
    <div className="mt-12 pt-6 border-t">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
        {previousTopic ? (
          <Link
            href={previousTopic.href}
            className="flex-1 group bg-white border rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center p-4">
              <ArrowLeft className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <div>
                <div className="text-xs text-gray-500 mb-1">Previous Topic</div>
                <div className="font-medium group-hover:text-blue-600 transition-colors">{previousTopic.title}</div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}

        <Button asChild variant="outline" className="mx-2 hidden sm:flex">
          <Link href={learningPath.href}>{learningPath.title}</Link>
        </Button>

        {nextTopic ? (
          <Link
            href={nextTopic.href}
            className="flex-1 group bg-white border rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center justify-end p-4">
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Next Topic</div>
                <div className="font-medium group-hover:text-blue-600 transition-colors">{nextTopic.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>

      <div className="mt-4 sm:hidden">
        <Button asChild variant="outline" className="w-full">
          <Link href={learningPath.href}>Back to {learningPath.title}</Link>
        </Button>
      </div>
    </div>
  )
}
