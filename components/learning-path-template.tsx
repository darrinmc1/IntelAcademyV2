"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, BarChart, ChevronRight, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsNextCompact } from "@/components/whats-next-compact"
import { getWhatsNextRecommendations } from "@/data/whats-next-recommendations"

interface LearningTopic {
  title: string
  description: string
  slug: string
  readTime: number
}

interface LearningPathTemplateProps {
  title: string
  description: string
  topics: LearningTopic[]
  level: string
  duration: string
  category: string
  image: string
}

export function LearningPathTemplate({
  title,
  description,
  topics,
  level,
  duration,
  category,
  image,
}: LearningPathTemplateProps) {
  // Get the "What's Next?" recommendations for this learning path
  const whatsNextRecommendations = getWhatsNextRecommendations(category as any)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Banner Section */}
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Topics in this Path</h2>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {topic.readTime} min
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{topic.description}</CardDescription>
                  <Button variant="ghost" asChild className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80">
                    <Link href={`/topics/${topic.slug}`} className="flex items-center">
                      Read Lesson <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Path Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <BarChart className="mr-2 h-4 w-4" />
                  <span>Level</span>
                </div>
                <Badge>{level}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>Total Duration</span>
                </div>
                <span className="font-semibold">{duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Lessons</span>
                </div>
                <span className="font-semibold">{topics.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Certificate of Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete all lessons in this path to earn your digital certificate from The Intel Analyst Academy.
              </p>
              <Button className="w-full" disabled>
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What's Next section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Ready to Advance?</h2>
        <WhatsNextCompact
          anotherTopic={whatsNextRecommendations.anotherTopic}
          moreLearning={whatsNextRecommendations.moreLearning}
          advancedLearning={whatsNextRecommendations.advancedLearning}
        />
      </div>
    </div>
  )
}
