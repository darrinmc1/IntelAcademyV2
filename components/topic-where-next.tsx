"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Layers, BookOpen, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getTopicWhereNext } from "@/data/topic-where-next"

interface TopicWhereNextProps {
  lessonTitle?: string
}

export function TopicWhereNext({ lessonTitle }: TopicWhereNextProps) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const slug = segments.length >= 2 ? segments[segments.length - 1] : null

  if (!slug) return null

  const { similar, more, advanced } = getTopicWhereNext(slug)

  return (
    <section className="mt-12 pt-8 border-t border-white/10">
      <h2 className="text-2xl font-bold mb-2 text-white">What&apos;s Next?</h2>
      <p className="text-slate-400 mb-6 text-sm">
        Continue your intelligence analysis journey with these recommended learning paths
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Another Topic */}
        <Card className="p-5 hover:shadow-md transition-shadow flex flex-col bg-white/5 border-white/10">
          <div className="mb-3">
            <Layers className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">Another Topic</h3>
          <p className="text-slate-400 mb-4 text-sm line-clamp-2 flex-1">
            {similar?.description || "See the full catalog of intelligence analysis topics."}
          </p>
          <Button asChild variant="outline" className="w-full group">
            <Link href={similar?.path || "/topics"} className="flex items-center justify-center">
              {similar?.title || "Browse All Topics"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Card>

        {/* More Learning in This Area */}
        <Card className="p-5 hover:shadow-md transition-shadow flex flex-col bg-white/5 border-white/10">
          <div className="mb-3">
            <BookOpen className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">More Learning in This Area</h3>
          <p className="text-slate-400 mb-4 text-sm line-clamp-2 flex-1">
            {more?.description || "Explore every learning path and find your next intelligence discipline."}
          </p>
          <Button asChild className="w-full group">
            <Link href={more?.path || "/learning-paths"} className="flex items-center justify-center">
              {more?.title || "Browse Learning Paths"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Card>

        {/* More Advanced Learning */}
        <Card className="p-5 hover:shadow-md transition-shadow flex flex-col bg-white/5 border-white/10">
          <div className="mb-3">
            <Rocket className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">More Advanced Learning</h3>
          <p className="text-slate-400 mb-4 text-sm line-clamp-2 flex-1">
            {advanced?.description || "Challenge yourself with our advanced intelligence topics."}
          </p>
          <Button asChild variant="outline" className="w-full group">
            <Link href={advanced?.path || "/advanced-topics"} className="flex items-center justify-center">
              {advanced?.title || "View Advanced Topics"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  )
}

export default TopicWhereNext
