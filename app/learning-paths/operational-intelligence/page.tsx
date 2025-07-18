import Link from "next/link"
import { ChevronRight, Target, TrendingUp, Search, LinkIcon } from "lucide-react"
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
import { OperationalIntelligenceObjectives } from "@/components/learning-objectives/operational-intelligence-objectives"

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
            <h2 className="text-3xl font-bold mb-2">Operational Intelligence Mastery</h2>
            <p className="max-w-md">
              Master crime series analysis, MO examination, and linkage techniques for operational success
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives Section */}
      <section className="mb-12">
        <OperationalIntelligenceObjectives completedModules={[]} />
      </section>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TopicCard
            title="What is Operational Intelligence?"
            description="Master the fundamentals and bridge strategic-tactical intelligence"
            duration="45 min"
            image="/operational-intelligence-concept.png"
            path="/learning-paths/operational-intelligence/what-is-operational-intelligence"
            topic="operational-intelligence"
            icon={<Target className="h-5 w-5" />}
          />
          <TopicCard
            title="Crime Series Analysis"
            description="Identify patterns and trends in related criminal activities"
            duration="75 min"
            image="/crime-series-analysis.png"
            path="/learning-paths/operational-intelligence/crime-series-analysis"
            topic="crime-series-analysis"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <TopicCard
            title="Modus Operandi Analysis"
            description="Examine and interpret criminal methods of operation"
            duration="65 min"
            image="/modus-operandi-analysis.png"
            path="/learning-paths/operational-intelligence/modus-operandi-analysis"
            topic="modus-operandi-analysis"
            icon={<Search className="h-5 w-5" />}
          />
          <TopicCard
            title="Crime Linkage Techniques"
            description="Connect disparate criminal incidents through advanced analysis"
            duration="80 min"
            image="/crime-linkage-techniques.png"
            path="/learning-paths/operational-intelligence/crime-linkage-techniques"
            topic="crime-linkage-techniques"
            icon={<LinkIcon className="h-5 w-5" />}
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Detailed Module Breakdown</h2>
        <div className="space-y-6">
          {/* Module 1: What is Operational Intelligence */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Module 1: What is Operational Intelligence?
              </CardTitle>
              <CardDescription>Foundation module covering operational intelligence fundamentals</CardDescription>
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
                      <h3 className="font-medium">Operational Intelligence Fundamentals</h3>
                      <p className="text-sm text-muted-foreground">Definition, scope, and applications</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/what-is-operational-intelligence" className="flex items-center">
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
                      <h3 className="font-medium">Strategic vs Operational vs Tactical</h3>
                      <p className="text-sm text-muted-foreground">Understanding intelligence level distinctions</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/intelligence-levels-comparison" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module 2: Crime Series Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Module 2: Crime Series Analysis
              </CardTitle>
              <CardDescription>Advanced pattern recognition and series identification techniques</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/series-pattern-detection-thumb.png"
                        alt="Series Pattern Detection"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Pattern Recognition Fundamentals</h3>
                      <p className="text-sm text-muted-foreground">Statistical methods for identifying crime series</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/series-pattern-detection" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/temporal-analysis-thumb.png"
                        alt="Temporal Analysis"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Temporal and Spatial Analysis</h3>
                      <p className="text-sm text-muted-foreground">Time-based and geographic pattern analysis</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/temporal-analysis" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/predictive-patterning-thumb.png"
                        alt="Predictive Patterning"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Predictive Series Modeling</h3>
                      <p className="text-sm text-muted-foreground">Forecasting series continuation and escalation</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/predictive-patterning" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module 3: Modus Operandi Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
                Module 3: Modus Operandi Analysis
              </CardTitle>
              <CardDescription>Systematic examination of criminal methods and behavioral patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/modus-operandi-thumb.png"
                        alt="Modus Operandi Basics"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">MO Classification Systems</h3>
                      <p className="text-sm text-muted-foreground">Categorizing and analyzing criminal methods</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/modus-operandi" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/behavioral-analysis-thumb.png"
                        alt="Behavioral Analysis"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Behavioral Pattern Analysis</h3>
                      <p className="text-sm text-muted-foreground">Understanding criminal decision-making processes</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/behavioral-analysis" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/mo-evolution-thumb.png"
                        alt="MO Evolution"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">MO Evolution and Adaptation</h3>
                      <p className="text-sm text-muted-foreground">Tracking changes in criminal methods over time</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/mo-evolution" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module 4: Crime Linkage Techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-red-600" />
                Module 4: Crime Linkage Techniques
              </CardTitle>
              <CardDescription>Advanced strategies for connecting disparate criminal incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/crime-linkage-techniques-thumb.png"
                        alt="Crime Linkage Techniques"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Statistical Linkage Analysis</h3>
                      <p className="text-sm text-muted-foreground">Mathematical approaches to crime linkage</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/crime-linkage-techniques" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/linking-offenders-thumb.png"
                        alt="Linking Offenders"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Multi-Evidence Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Combining physical, digital, and behavioral evidence
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/linking-offenders" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                      <StaticImage
                        src="/linkage-validation-thumb.png"
                        alt="Linkage Validation"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Linkage Validation Methods</h3>
                      <p className="text-sm text-muted-foreground">Testing and confirming linkage hypotheses</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/learning-paths/operational-intelligence/linkage-validation" className="flex items-center">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <WhatsNextCompact
        anotherTopic={whatsNextRecommendations.anotherTopic}
        moreLearning={whatsNextRecommendations.moreLearning}
        advancedLearning={whatsNextRecommendations.advancedLearning}
      />
    </div>
  )
}
