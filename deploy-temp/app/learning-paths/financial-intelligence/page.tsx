import Link from "next/link"
import Image from "next/image"
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
  title: "Financial Intelligence Learning Path | The Intel Analyst Academy",
  description: "Master techniques for tracking and analyzing financial data for intelligence purposes.",
}

export default function FinancialIntelligencePage() {
  // Sample topics for financial intelligence
  const topics = [
    {
      title: "Financial Intelligence Fundamentals",
      slug: "financial-intelligence-fundamentals",
      readTime: 30,
      category: "financial-intelligence",
    },
    {
      title: "Money Laundering Detection",
      slug: "money-laundering-detection",
      readTime: 35,
      category: "financial-intelligence",
    },
    {
      title: "Financial Network Analysis",
      slug: "financial-network-analysis",
      readTime: 30,
      category: "financial-intelligence",
    },
    {
      title: "Cryptocurrency Investigation",
      slug: "cryptocurrency-investigation",
      readTime: 40,
      category: "financial-intelligence",
    },
    {
      title: "Financial Document Analysis",
      slug: "financial-document-analysis",
      readTime: 25,
      category: "financial-intelligence",
    },
    {
      title: "Illicit Finance Indicators",
      slug: "illicit-finance-indicators",
      readTime: 20,
      category: "financial-intelligence",
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
            <BreadcrumbLink href="/learning-paths/financial-intelligence" isCurrentPage>
              Financial Intelligence
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Financial Intelligence</h1>
          <p className="text-muted-foreground mt-2">Techniques for tracking and analyzing financial data for intelligence purposes</p>
        </div>
      </div>

      {/* Card-width Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src="/financial-intelligence-banner.png"
            alt="Financial Intelligence Banner"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Financial Intelligence Path</h2>
            <p className="max-w-md">
              Master techniques for tracking money flows, detecting illicit financial activities, and analyzing complex financial networks
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
                src="/financial-intelligence-fundamentals.png"
                alt="Financial Intelligence Fundamentals"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Financial Intelligence Fundamentals</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Core concepts and principles of financial intelligence analysis
              </p>
              <p className="text-sm text-muted-foreground mb-4">30 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/financial-intelligence-fundamentals" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/money-laundering-detection.png"
                alt="Money Laundering Detection"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Money Laundering Detection</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Techniques for identifying and analyzing money laundering activities
              </p>
              <p className="text-sm text-muted-foreground mb-4">35 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/money-laundering-detection" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative">
              <StaticImage
                src="/cryptocurrency-investigation.png"
                alt="Cryptocurrency Investigation"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">Cryptocurrency Investigation</h3>
              <p className="text-muted-foreground mb-2 text-justify">
                Specialized techniques for tracking and analyzing cryptocurrency transactions
              </p>
              <p className="text-sm text-muted-foreground mb-4">40 min read</p>
              <Button
                asChild
                className="w-full bg-black text-white transition-all duration-300 
                          hover:bg-yellow-500 hover:scale-105 hover:shadow-md 
                          active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5"
              >
                <Link href="/topics/cryptocurrency-investigation" className="flex items-center justify-center">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Financial Intelligence Fundamentals</CardTitle>
            <CardDescription>Understanding the core concepts of financial intelligence analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/financial-intelligence-fundamentals-thumb.png"
                      alt="Financial Intelligence Fundamentals"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Intelligence Fundamentals</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/financial-intelligence-fundamentals" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/money-laundering-detection-thumb.png"
                      alt="Money Laundering Detection"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Money Laundering Detection Techniques</h3>
                    <p className="text-sm text-muted-foreground">35 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/money-laundering-detection" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/financial-network-analysis-thumb.png"
                      alt="Financial Network Analysis"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Network Analysis Methods</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/financial-network-analysis" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/illicit-finance-indicators-thumb.png"
                      alt="Illicit Finance Indicators"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Identifying Illicit Finance Indicators</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/illicit-finance-indicators" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Advanced Financial Intelligence</CardTitle>
            <CardDescription>Specialized techniques for complex financial investigations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/cryptocurrency-investigation-thumb.png"
                      alt="Cryptocurrency Investigation"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Cryptocurrency Investigation Techniques</h3>
                    <p className="text-sm text-muted-foreground">40 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/cryptocurrency-investigation" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/financial-document-analysis-thumb.png"
                      alt="Financial Document Analysis"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Document Analysis Methods</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/financial-document-analysis" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/financial-intelligence-collection-thumb.png"
                      alt="Financial Intelligence Collection"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Intelligence Collection Sources</h3>
                    <p className="text-sm text-muted-foreground">25 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/financial-intelligence-collection" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/sanctions-compliance-thumb.png"
                      alt="Sanctions and Compliance"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Sanctions and Compliance Monitoring</h3>
                    <p className="text-sm text-muted-foreground">30 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/sanctions-compliance" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <StaticImage
                      src="/financial-intelligence-reporting-thumb.png"
                      alt="Financial Intelligence Reporting"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Intelligence Reporting Standards</h3>
                    <p className="text-sm text-muted-foreground">35 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/financial-intelligence-reporting" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Learning Path Topics</h2>
        <TopicList topics={getTopicsForPath("financial-intelligence")} category="financial-intelligence" />

        {/* What's Next section - placed between topic list and footer */}
        <PathWhatsNext pathSlug="financial-intelligence" />
      </section>
    </div>
  )
}