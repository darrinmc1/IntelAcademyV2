import Link from "next/link"
import { ChevronRight, Shield, Zap, Coffee, Brain } from "lucide-react"
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TacticalIntelligencePage() {
  const whatsNextRecommendations = {
    anotherTopic: {
      title: "OSINT Essentials",
      description: "Learn open-source intelligence gathering techniques",
      path: "/learning-paths/osint",
    },
    moreLearning: {
      title: "Operational Intelligence",
      description: "Bridge the gap between tactical and strategic intelligence",
      path: "/learning-paths/operational-intelligence",
    },
    advancedLearning: {
      title: "Advanced Analytics",
      description: "Master complex analytical techniques and tools",
      path: "/learning-paths/analytical-techniques",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Tactical Intelligence</h1>
          <p className="text-muted-foreground mt-2">When "I need it yesterday" becomes an actual timeline</p>
        </div>
      </div>

      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Tactical Intelligence Path</h2>
            <p className="max-w-md">
              For when strategic analysts are still "considering all possibilities" but you need answers now
            </p>
          </div>
        </div>
      </div>

      <Alert className="mb-6 bg-amber-50 border-amber-200">
        <Coffee className="h-5 w-5" />
        <AlertTitle>Analyst Humor Corner</AlertTitle>
        <AlertDescription>
          How many tactical intelligence analysts does it take to change a light bulb?
          <br />
          Just one, but they&apos;ll need it done before you finish asking the question, and they&apos;ll complain about the lack
          of collection assets the entire time.
        </AlertDescription>
      </Alert>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TopicCard
            title="What is Tactical Intelligence?"
            description="Understanding the fundamentals of tactical intelligence (or: how to look smart while panicking)"
            duration="15 min"
            image="/tactical-intelligence-concept.png"
            path="/topics/what-is-tactical-intelligence"
            topic="tactical-intelligence-concept"
          />
          <TopicCard
            title="Real-Time OSINT for Tactical Response"
            description="Leveraging open sources when you have no time and everyone&apos;s watching"
            duration="25 min"
            image="/real-time-osint.png"
            path="/topics/real-time-osint"
            topic="real-time-osint"
          />
          <TopicCard
            title="Situational Awareness in Tactical Environments"
            description="Maintaining awareness when everything is on fire (sometimes literally)"
            duration="20 min"
            image="/situational-awareness.png"
            path="/topics/situational-awareness"
            topic="situational-awareness"
          />
        </div>

        <div className="p-6 bg-blue-50 rounded-lg mb-8 border border-blue-100">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Brain className="mr-2 h-5 w-5 text-blue-500" />
            The Tactical Analyst's Mindset
          </h3>
          <p className="mb-4">
            Tactical intelligence is like making dinner with whatever&apos;s in your fridge when unexpected guests arrive.
            You work with what you have, it&apos;s never perfect, but somehow you make it work before anyone notices the
            panic in your eyes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-blue-100">
              <h4 className="font-medium flex items-center">
                <Zap className="mr-2 h-4 w-4 text-amber-500" /> Speed Over Perfection
              </h4>
              <p className="text-sm">
                &quot;I&apos;d rather be 80% right now than 100% right when it&apos;s too late&quot; - tactical analysts everywhere, usually
                while chugging energy drinks
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-blue-100">
              <h4 className="font-medium flex items-center">
                <Shield className="mr-2 h-4 w-4 text-green-500" /> Actionable Over Academic
              </h4>
              <p className="text-sm">
                If your analysis can&apos;t fit on a sticky note that can be slapped on a commander&apos;s laptop, you&apos;re writing
                a dissertation, not tactical intelligence
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">All Topics</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Fundamentals of Tactical Intelligence</CardTitle>
            <CardDescription>Understanding the core concepts of tactical intelligence analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/tactical-intelligence-concept-thumb.png"
                      alt="Tactical Intelligence Concept"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">What is Tactical Intelligence?</h3>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/what-is-tactical-intelligence" className="flex items-center">
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                    <StaticImage
                      src="/strategic-vs-tactical-analysts-thumb.png"
                      alt="Strategic vs Tactical Analysts"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Strategic vs. Tactical: What Analysts Must Understand</h3>
                    <p className="text-sm text-muted-foreground">20 min read</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/topics/strategic-vs-tactical-analysts" className="flex items-center">
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
