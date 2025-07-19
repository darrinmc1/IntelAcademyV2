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
import { LearningFormats } from "@/components/learning-formats"
import type { Metadata } from "next"
import { TopicList } from "@/components/topic-list"
import { StaticImage } from "@/components/static-image"
import { PathWhatsNext } from "@/components/path-whats-next"
import { getTopicsForPath } from "@/utils/topic-helpers"

export const metadata: Metadata = {
  title: "Strategic Intelligence Learning Path | The Intel Analyst Academy",
  description: "Master the fundamentals of strategic intelligence analysis through our comprehensive learning path.",
}

export default function StrategicIntelligencePath() {
  // Sample topics for strategic intelligence
  const topics = [
    {
      title: "What is Strategic Intelligence",
      slug: "what-is-strategic-intelligence",
      readTime: 15,
      category: "strategic-intelligence",
    },
    {
      title: "Strategic vs. Tactical Intelligence",
      slug: "strategic-vs-tactical",
      readTime: 20,
      category: "strategic-intelligence",
    },
    {
      title: "How to Develop Strategic Intelligence",
      slug: "how-to-develop-strategic-intelligence",
      readTime: 25,
      category: "strategic-intelligence",
    },
    {
      title: "Methods for Strategic Forecasting",
      slug: "methods-for-strategic-forecasting",
      readTime: 30,
      category: "strategic-intelligence",
    },
    {
      title: "Identifying Long-Term Threats",
      slug: "identifying-long-term-threats",
      readTime: 20,
      category: "strategic-intelligence",
    },
  ]

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
              <BreadcrumbLink href="/learning-paths/strategic-intelligence" isCurrentPage>
                Strategic Intelligence
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Strategic Intelligence</h1>
            <p className="text-muted-foreground mt-2">Long-term, big picture analysis to support high-level decisions</p>
          </div>
        </div>

        {/* Card-width Banner */}
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <StaticImage
              src="/strategic-intelligence-banner.png"
              alt="Strategic Intelligence Banner"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Strategic Intelligence Path</h2>
              <p className="max-w-md">
                Master the skills needed to analyze long-term trends and provide strategic insights to decision makers
              </p>
            </div>
          </div>
        </div>
      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/strategic-intelligence-concept.png"
                alt="What is Strategic Intelligence?"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">What is Strategic Intelligence?</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Understanding the core concepts and purpose of strategic intelligence
              </p>
              <p className="text-sm text-muted-foreground mb-4">15 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/what-is-strategic-intelligence" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/strategic-vs-tactical.png"
                alt="Strategic vs. Tactical Intelligence"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Strategic vs. Tactical Intelligence</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Key differences between strategic and tactical intelligence approaches
              </p>
              <p className="text-sm text-muted-foreground mb-4">20 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/strategic-vs-tactical" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/strategic-forecasting.png"
                alt="Strategic Forecasting Methods"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Strategic Forecasting Methods</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Techniques for developing long-term intelligence forecasts
              </p>
              <p className="text-sm text-muted-foreground mb-4">30 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/strategic-forecasting" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Fundamentals of Strategic Intelligence</CardTitle>
            <CardDescription>Understanding the core concepts of strategic intelligence analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-intelligence-concept-thumb.png"
                      alt="Strategic Intelligence Concept"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">What is Strategic Intelligence?</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/what-is-strategic-intelligence" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-vs-tactical-thumb.png"
                      alt="Strategic vs Tactical"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Strategic vs. Tactical Intelligence: Key Differences</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-vs-tactical" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-intelligence-products-thumb.png"
                      alt="Strategic Intelligence Products"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">How to Develop Strategic Intelligence Products</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-intelligence-products" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-forecasting-thumb.png"
                      alt="Strategic Forecasting"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Methods for Strategic Forecasting</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-forecasting" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/long-term-threats-thumb.png"
                      alt="Long-term Threats"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Identifying Long-Term Threats and Opportunities</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/long-term-threats" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Strategic Intelligence Products</CardTitle>
            <CardDescription>Creating effective strategic intelligence deliverables</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-reports-thumb.png"
                      alt="Strategic Reports"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Writing Strategic Intelligence Reports</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-reports" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/intelligence-estimates-thumb.png"
                      alt="Intelligence Estimates"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Intelligence Estimates: 1 Year, 5 Years, 10 Years</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/intelligence-estimates" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/indicators-warnings-thumb.png"
                      alt="Indicators and Warnings"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Using Indicators and Warnings in Strategic Analysis</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/indicators-warnings" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-risk-assessment-thumb.png"
                      alt="Strategic Risk Assessment"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Risk Assessment in Strategic Intelligence</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-risk-assessment" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/strategic-threat-modeling-thumb.png"
                      alt="Strategic Threat Modeling"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Introduction to Strategic Threat Modeling</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-threat-modeling" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/briefing-executives-thumb.png"
                      alt="Briefing Executives"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Briefing Executives on Strategic Risks</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/briefing-executives" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Learning Path Topics</h2>
        <TopicList topics={getTopicsForPath("strategic-intelligence")} category="strategic-intelligence" />

        {/* What's Next section - placed between topic list and footer */}
        <PathWhatsNext pathSlug="strategic-intelligence" />
      </section>
    </div>
  )
}