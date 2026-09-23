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
  title: "Threat Assessment Learning Path | The Intel Analyst Academy",
  description:
    "Identify, characterize, prioritize, and hand off threats — with the models, indicators, and mitigation options that keep the word 'critical' scarce.",
}

export default function ThreatAssessmentPath() {
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
            <BreadcrumbLink href="/learning-paths/threat-assessment" isCurrentPage>
              Threat Assessment
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Threat Assessment</h1>
          <p className="text-muted-foreground mt-2">
            Capability, intent, and the unglamorous question of what you will do about either
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <StaticImage
            src="/threat-assessment-banner.png"
            alt="Threat Assessment Banner"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-3">Rank it, or you did not assess it</h2>
          <p className="text-slate-300 max-w-md">
            Eight lessons from the basic distinctions through models, indicators, behavior, priority, mitigation,
            and the watch that continues after the slide is filed.
          </p>
        </div>
      </div>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Lessons</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          The first three teach you to name the problem. The middle three teach you to see it coming and to say
          how sure you are. The last two are what a decision-maker can actually do on a Tuesday.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="What Is Threat Assessment?"
            description="Threat, vulnerability, and risk — plus the capability-and-intent test that stops a capable actor from being treated as a plot."
            imageSrc="/what-is-threat-assessment.png"
            href="/topics/what-is-threat-assessment"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Threat Assessment Methodologies"
            description="Qualitative, quantitative, scenario, threat-based, and vulnerability-centric approaches — and when a hybrid is the honest choice."
            imageSrc="/threat-assessment.png"
            href="/topics/threat-assessment-methodologies"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Threat Assessment Models"
            description="NTAS, CARVER, OCTAVE, and the deter-detect-delay-defend idea, without pretending a framework replaces a judgment."
            imageSrc="/threat-assessment-models.png"
            href="/topics/threat-assessment-models"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Risk Factor Indicators"
            description="Observable precursors — behavioral, situational, capability, intent, network — and how not to treat smoke as the fire."
            imageSrc="/risk-factors-indicators.png"
            href="/topics/risk-factor-indicators-for-intelligence-analysis"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Behavioral Threat Assessment"
            description="Document what was said and done, cap the judgment, and refer. Not a diagnosis, and not a description of how harm is done."
            imageSrc="/behavioral-analysis-grid.png"
            href="/topics/behavioral-assessment"
            duration="17 min"
          />
          <TopicCardWithImage
            title="Threat Prioritization"
            description="Likelihood, impact, and time to intervene — so the list can change someone's Tuesday instead of agreeing with the room."
            imageSrc="/emerging-threats-thumb.png"
            href="/topics/threat-prioritization"
            duration="16 min"
          />
          <TopicCardWithImage
            title="Mitigation Options"
            description="Accept, monitor, reduce, transfer, or avoid. Each option names an owner and the risk it leaves behind."
            imageSrc="/resource-allocation.png"
            href="/topics/mitigation-strategies"
            duration="16 min"
          />
          <TopicCardWithImage
            title="Ongoing Threat Monitoring"
            description="Tripwires, thresholds, and the alert fatigue that arrives when everything is set to urgent."
            imageSrc="/threat-monitoring.png"
            href="/topics/threat-monitoring"
            duration="15 min"
          />
        </div>
      </section>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related paths</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/learning-paths/strategic-intelligence" className="flex items-center">
              Strategic Intelligence <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/learning-paths/data-collection-planning" className="flex items-center">
              Data Collection Planning <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <TopicWhereNext />
    </div>
  )
}
