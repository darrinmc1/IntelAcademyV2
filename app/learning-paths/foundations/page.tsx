import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TopicCard } from "@/components/topic-card"
import { LearningFormats } from "@/components/learning-formats"
import { TopicWhereNext } from "@/components/topic-where-next"

export const metadata: Metadata = {
  title: "Fundamentals of Intelligence Analysis | Learning Path",
  description: "Master the fundamental concepts and frameworks of intelligence analysis with a touch of humor",
}

export default function FoundationsPath() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Fundamentals of Intelligence Analysis</h1>
          <p className="text-muted-foreground mt-2">
            Master the fundamental concepts and frameworks of intelligence analysis with a touch of humor
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full bg-gradient-to-r from-indigo-600 to-indigo-500"></div>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-3">Intelligence Fundamentals</h2>
          <p className="text-slate-300 max-w-md">Learn the core concepts that separate professional analysis from wild guessing</p>
        </div>
      </div>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TopicCard
            title="What is Intelligence?"
            description="Dive into the fundamentals of intelligence and discover why &apos;I have a hunch&apos; isn&apos;t a valid analytical method"
            duration="15 min"
            image="/what-is-intelligence.png"
            path="/topics/what-is-intelligence"
            topic="what-is-intelligence"
          />
          <TopicCard
            title="The Intelligence Cycle"
            description="Learn the systematic process that turns raw data into actionable intelligence"
            duration="20 min"
            image="/intelligence-cycle.png"
            path="/topics/intelligence-cycle"
            topic="intelligence-cycle"
          />
          <TopicCard
            title="Types of Intelligence"
            description="Explore the different flavors of intelligence - each with its own purpose"
            duration="25 min"
            image="/intelligence-types.png"
            path="/topics/intelligence-types"
            topic="intelligence-types"
          />
          <TopicCard
            title="Intelligence vs Information"
            description="Understand the key differences between raw information and processed intelligence"
            duration="15 min"
            image="/intelligence-vs-information.png"
            path="/topics/intelligence-vs-information"
            topic="intelligence-vs-information"
          />
          <TopicCard
            title="Intelligence Decision Making"
            description="Learn how intelligence products support effective decision making"
            duration="20 min"
            image="/intelligence-decision-making.png"
            path="/topics/intelligence-decision-making"
            topic="intelligence-decision-making"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">About this Learning Path</h2>
          <p className="mb-4">
            The Fundamentals of Intelligence Analysis learning path is designed to introduce you to the core concepts
            and principles of intelligence analysis with a refreshing dose of humor. This path is ideal for beginners
            who want to understand what intelligence analysis is and how it works in the real world.
          </p>
          <p className="mb-2">By the end of this learning path, you will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Understand what intelligence is and its role in decision-making</li>
            <li>Be familiar with the intelligence cycle and how it guides the analysis process</li>
            <li>Recognize different types of intelligence and their applications</li>
            <li>Know the key analytical standards that ensure quality intelligence products</li>
            <li>Develop critical thinking skills essential for effective analysis</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Core Intelligence Concepts</CardTitle>
            <CardDescription>Essential knowledge for every intelligence analyst</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      INT
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">What is Intelligence?</h3>
                    <p className="text-sm text-muted-foreground">Dive into the fundamentals of intelligence and discover why 'I have a hunch' isn't a valid analytical method</p>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/what-is-intelligence" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      CYCLE
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">The Intelligence Cycle</h3>
                    <p className="text-sm text-muted-foreground">Learn the systematic process that turns raw data into actionable intelligence</p>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/intelligence-cycle" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    TYPES
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Intelligence Types</h3>
                  <p className="text-sm text-muted-foreground">Explore the different flavors of intelligence - each with its own purpose</p>
                  <p className="text-sm text-muted-foreground">25 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/intelligence-types" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    INFO
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Intelligence vs Information</h3>
                  <p className="text-sm text-muted-foreground">Understand the key differences between raw information and processed intelligence</p>
                  <p className="text-sm text-muted-foreground">15 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/intelligence-vs-information" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    DECIDE
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Intelligence Decision Making</h3>
                  <p className="text-sm text-muted-foreground">Learn how intelligence products support effective decision making</p>
                  <p className="text-sm text-muted-foreground">20 min read</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/topics/intelligence-decision-making" className="flex items-center">
                  Start <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>





      <TopicWhereNext />
    </div>
  )
}
