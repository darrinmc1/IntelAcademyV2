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
  title: "OSINT Learning Path | The Intel Analyst Academy",
  description:
    "Open-source intelligence for analysts: what it is, how the work is sequenced, and the techniques that keep a search from becoming a rumour with bookmarks.",
}

export default function OSINTPage() {
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
            <BreadcrumbLink href="/learning-paths/osint" isCurrentPage>
              OSINT
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">OSINT Learning Path</h1>
          <p className="text-muted-foreground mt-2">
            Public information, professional standards. The internet is not a source until you can say where it came from.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <StaticImage
            src="/osint-banner-large.png"
            alt="OSINT Learning Path Banner"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-3">Open-source, not open-season</h2>
          <p className="text-slate-300 max-w-md">
            Eight lessons from the definition through workflow, search, social platforms, the deep web, and the
            version of OSINT that has to move while the event is still happening.
          </p>
        </div>
      </div>

      <LearningFormats />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Lessons</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Read them in something like this order if you are new. If you already live in a browser with forty-seven
          tabs, start at the workflow — the tabs are not a method.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="What is OSINT?"
            description="Intelligence from publicly available information: what counts, what does not, and why 'I found it online' is not a citation."
            imageSrc="/what-is-osint.png"
            href="/topics/what-is-osint"
            duration="10 min"
          />
          <TopicCardWithImage
            title="OSINT Types and Categories"
            description="Media, internet, government data, geospatial, and the rest of the filing system — so you pick a source on purpose."
            imageSrc="/osint-types-categories.png"
            href="/learning-paths/osint/osint-types"
            duration="15 min"
          />
          <TopicCardWithImage
            title="OSINT Techniques"
            description="Search operators, public records, site history, imagery, and the legal line between research and trespass."
            imageSrc="/osint-techniques.png"
            href="/topics/osint-techniques"
            duration="20 min"
          />
          <TopicCardWithImage
            title="The OSINT Workflow"
            description="Plan, collect, process, analyse, report. A sequence you can defend when someone asks how you know."
            imageSrc="/osint-workflow.png"
            href="/topics/osint-workflow"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Google Dorking"
            description="Advanced search operators, used as a craft rather than a party trick. Legal, documented, and easy to do badly."
            imageSrc="/google-dorking.png"
            href="/topics/google-dorking"
            duration="20 min"
          />
          <TopicCardWithImage
            title="SOCMINT Techniques"
            description="Social platforms as sources: what people publish, what the platform is doing to the record, and the ethics that travel with it."
            imageSrc="/socmint-techniques.png"
            href="/topics/socmint-techniques"
            duration="25 min"
          />
          <TopicCardWithImage
            title="Deep Web Research"
            description="The unindexed web is mostly ordinary databases. How to use them without confusing them with places you are not allowed to be."
            imageSrc="/deep-web-research-for-intel-analysts.png"
            href="/topics/deep-web-research-for-intel-analysts"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Real-Time OSINT"
            description="Monitoring while an event is in motion: triage, verification under a clock, and the difference between a feed and a finding."
            imageSrc="/real-time-osint.png"
            href="/topics/real-time-osint"
            duration="20 min"
          />
        </div>
      </section>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related paths</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/learning-paths/data-collection-planning" className="flex items-center">
              Data Collection Planning <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/learning-paths/source-evaluation" className="flex items-center">
              Source Evaluation <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <TopicWhereNext />
    </div>
  )
}
