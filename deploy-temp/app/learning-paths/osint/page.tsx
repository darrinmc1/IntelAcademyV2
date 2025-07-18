import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TopicCard } from "@/components/topic-card"
import { LearningFormats } from "@/components/learning-formats"
import { StaticImage } from "@/components/static-image"
import { WhatsNextCompact } from "@/components/whats-next-compact"

export default function OSINTPage() {
  const whatsNextRecommendations = {
    anotherTopic: {
      title: "Digital Intelligence",
      description: "Advanced techniques for digital evidence gathering",
      path: "/learning-paths/digital-intelligence",
    },
    moreLearning: {
      title: "Source Evaluation",
      description: "Learn to assess source reliability and credibility",
      path: "/learning-paths/source-evaluation",
    },
    advancedLearning: {
      title: "Advanced Analytics",
      description: "Master structured analytical techniques",
      path: "/learning-paths/analytical-techniques",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">OSINT Learning Path</h1>
          <p className="text-muted-foreground mt-2">
            Master open-source intelligence gathering techniques and methodologies
          </p>
        </div>
      </div>

      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-8">
            <h2 className="text-3xl font-bold mb-2">OSINT Learning Path</h2>
            <p className="max-w-md">Learn how to gather, analyze, and leverage open-source intelligence effectively</p>
          </div>
        </div>
      </div>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TopicCard
            title="What is OSINT?"
            description="Introduction to open-source intelligence and its importance"
            duration="10 min"
            image="/what-is-osint.png"
            path="/topics/what-is-osint"
            topic="what-is-osint"
          />
          <TopicCard
            title="OSINT Types and Categories"
            description="Understanding the different types of open-source intelligence"
            duration="15 min"
            image="/osint-types-categories.png"
            path="/learning-paths/osint/osint-types"
            topic="osint-types"
          />
          <TopicCard
            title="Google Dorking Techniques"
            description="Advanced search operators for effective information gathering"
            duration="20 min"
            image="/google-dorking.png"
            path="/topics/google-dorking"
            topic="google-dorking"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">OSINT Fundamentals</CardTitle>
            <CardDescription>Essential concepts and techniques for open-source intelligence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/what-is-osint-thumb.png"
                      alt="What is OSINT"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">What is OSINT?</h3>
                    <p className="text-sm text-muted-foreground">10 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/what-is-osint" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/osint-types-categories-thumb.png"
                      alt="OSINT Types and Categories"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">OSINT Types and Categories</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/learning-paths/osint/osint-types" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <WhatsNextCompact
        anotherTopic={whatsNextRecommendations.anotherTopic}
        moreLearning={whatsNextRecommendations.moreLearning}
        advancedLearning={whatsNextRecommendations.advancedLearning}
      />
    </div>
  )
}
