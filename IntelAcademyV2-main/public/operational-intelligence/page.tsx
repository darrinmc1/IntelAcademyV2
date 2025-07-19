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

export default function OperationalIntelligencePage() {
  const whatsNextRecommendations = {
    anotherTopic: {
      title: "Crime Series Analysis",
      description: "Learn to identify and analyze linked criminal activities",
      path: "/learning-paths/crime-series-analysis",
    },
    moreLearning: {
      title: "Hot Spot Analysis",
      description: "Master geographic crime pattern analysis",
      path: "/learning-paths/hot-spot-analysis",
    },
    advancedLearning: {
      title: "Network Analysis",
      description: "Advanced techniques for mapping criminal networks",
      path: "/learning-paths/network-analysis",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths">Learning Paths</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths/operational-intelligence" isCurrentPage>
              Operational Intelligence
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Operational Intelligence</h1>
          <p className="text-muted-foreground mt-2">
            Bridging the gap between strategic planning and tactical execution
          </p>
        </div>
      </div>

      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Operational Intelligence</h2>
            <p className="max-w-md">Learn how to apply intelligence to operational decision-making and planning</p>
          </div>
        </div>
      </div>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TopicCard
            title="What is Operational Intelligence?"
            description="Introduction to operational intelligence and its applications"
            duration="15 min"
            image="/operational-intelligence-concept.png"
            path="/topics/what-is-operational-intelligence"
            topic="operational-intelligence"
          />
          <TopicCard
            title="Crime Series Analysis"
            description="Learn how to identify and analyze crime series and patterns"
            duration="20 min"
            image="/crime-series-analysis.png"
            path="/learning-paths/crime-series-analysis"
            topic="crime-series-analysis"
          />
          <TopicCard
            title="Hot Spot Analysis"
            description="Techniques for identifying and analyzing geographic crime concentrations"
            duration="25 min"
            image="/hot-spot-analysis.png"
            path="/learning-paths/hot-spot-analysis"
            topic="hot-spot-analysis"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Operational Intelligence Fundamentals</CardTitle>
            <CardDescription>Essential concepts and techniques for operational intelligence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/what-is-operational-intelligence-thumb.png"
                      alt="What is Operational Intelligence"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">What is Operational Intelligence?</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/what-is-operational-intelligence" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/intelligence-levels-comparison-thumb.png"
                      alt="Intelligence Levels Comparison"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Intelligence Levels Comparison</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/intelligence-levels-comparison" className="flex items-center">
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
