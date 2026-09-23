import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LearningFormats } from "@/components/learning-formats"
import type { Metadata } from "next"
import { StaticImage } from "@/components/static-image"
import { TopicWhereNext } from "@/components/topic-where-next"
import { TopicCardWithImage } from "@/components/topic-card-with-image"

export const metadata: Metadata = {
  title: "Strategic Intelligence Learning Path | The Intel Analyst Academy",
  description:
    "Long-range analysis for people who have to make decisions before the decade arrives: concept, drivers, forecasts, warnings, and the products that carry them.",
}

export default function StrategicIntelligencePath() {
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
          <p className="text-muted-foreground mt-2">
            Long-term, big-picture analysis for decisions that will still be around after the news cycle leaves
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <StaticImage
            src="/strategic-intelligence-banner.png"
            alt="Strategic Intelligence Banner"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-3">Strategic Intelligence Path</h2>
          <p className="text-slate-300 max-w-md">
            The telescope, not the mirror. Eight lessons on what &quot;strategic&quot; actually means, how it differs
            from the tactical fight, and how a judgment survives contact with a principal.
          </p>
        </div>
      </div>
      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Lessons</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Start with the concept, then the level-of-analysis problem, then the scan, the forecast, and the warning.
          The last two lessons are the products — because a strategic insight that never becomes a product is a
          hobby with a clearance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="Strategic Intelligence Concept"
            description="Time horizon, scope, the audience that can bend analysis, and why synthesis is the actual job."
            imageSrc="/strategic-intelligence-concept.png"
            href="/topics/strategic-intelligence-concept"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Strategic vs. Tactical Analysts"
            description="Years versus hours, policy readers versus operators, and the chain that fails when either end pretends the other is optional."
            imageSrc="/strategic-vs-tactical.png"
            href="/topics/strategic-vs-tactical-analysts"
            duration="20 min"
          />
          <TopicCardWithImage
            title="PESTLE for a Dynamic World"
            description="Where a textbook PESTLE goes thin — technology, law, environment — and how to widen the scan without boiling the ocean."
            imageSrc="/strategic-intelligence-expanding-pestle-analysis-dynamic-world.png"
            href="/topics/strategic-intelligence-expanding-pestle-analysis-dynamic-world"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Long-Term Threats and Opportunities"
            description="Drivers, conditions, and wildcards. How to tell a five-year force from a headline, and why opportunity belongs in the same note."
            imageSrc="/long-term-threats-thumb.png"
            href="/topics/long-term-threats"
            duration="18 min"
          />
          <TopicCardWithImage
            title="Strategic Forecasting"
            description="Scenarios, trends, expert judgment, and the antacid required to say what you do not know."
            imageSrc="/strategic-forecasting.png"
            href="/topics/strategic-forecasting"
            duration="30 min"
          />
          <TopicCardWithImage
            title="Indicators and Warnings"
            description="Build the list before the event, set a threshold you can defend, and warn while a decision still exists."
            imageSrc="/indicators-warnings.png"
            href="/topics/indicators-warnings"
            duration="18 min"
          />
          <TopicCardWithImage
            title="Strategic Intelligence Products"
            description="How a product carries a judgment from information to a decision, without becoming a policy memo in disguise."
            imageSrc="/strategic-intelligence-products-thumb.png"
            href="/topics/strategic-intelligence-products-bridging-the-gap-between-information-and-action"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Writing Strategic Reports"
            description="Key judgments, dissents, and the long-range paper that has to survive being read by someone with ten minutes and a leak."
            imageSrc="/strategic-reports.png"
            href="/topics/strategic-reports"
            duration="25 min"
          />
        </div>
      </section>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related paths</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/learning-paths/threat-assessment" className="flex items-center">
              Threat Assessment <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/learning-paths/report-writing" className="flex items-center">
              Report Writing <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <TopicWhereNext />
    </div>
  )
}