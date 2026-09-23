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
import { PathLessonList } from "@/components/learning-path-template"

export const metadata: Metadata = {
  title: "Financial Intelligence Learning Path | The Intel Analyst Academy",
  description: "Master techniques for tracking and analyzing financial data for intelligence purposes.",
}

export default function FinancialIntelligencePage() {
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
          <p className="text-muted-foreground mt-2">
            Follow the money. It files more honest reports than the people who moved it.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <StaticImage
            src="/financial-intelligence-banner.png"
            alt="Financial Intelligence Banner"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-3">Financial Intelligence Path</h2>
          <p className="text-slate-300 max-w-md">
            One lesson is live: the fundamentals of FININT, from placement to the moment a car wash out-earns a hospital.
          </p>
        </div>
      </div>

      <LearningFormats />

      <PathLessonList
        topics={[
          {
            title: "FININT Basics",
            description:
              "What financial intelligence covers, how it sits with the other INTs, and the three stages of making dirty money look bored.",
            slug: "finint-basics",
            readTime: 25,
          },
        ]}
      />

      <TopicWhereNext />
    </div>
  )
}
