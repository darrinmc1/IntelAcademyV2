import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface RelatedTopic {
  id: string
  title: string
  description: string
  href: string
  imagePath: string
  learningPath: {
    title: string
    href: string
  }
}

interface RelatedTopicsProps {
  topics: RelatedTopic[]
}

export function RelatedTopics({ topics }: RelatedTopicsProps) {
  if (!topics || topics.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id} className="overflow-hidden">
            <div className="h-40 overflow-hidden">
              <StaticImage
                src={topic.imagePath}
                alt={topic.title}
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{topic.title}</CardTitle>
              <CardDescription>
                From{" "}
                <Link href={topic.learningPath.href} className="text-blue-600 hover:underline">
                  {topic.learningPath.title}
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-gray-600 line-clamp-2">{topic.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={topic.href} className="flex items-center justify-center gap-2">
                  <span>Read Topic</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
