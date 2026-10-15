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
  alternates: { canonical: "/learning-paths/financial-intelligence" },
  title: "Financial Intelligence Learning Path",
  description:
    "Eight lessons on following illicit finance: the basics, laundering stages, suspicious activity reports, trade, beneficial ownership, crypto tracing, sanctions, and financial network maps.",
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
            Eight lessons are live: the fundamentals, then the stages, the reports, the invoices, the shells, the ledger, the lists, and the chart that asks who actually controls the account.
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
          {
            title: "Money Laundering Stages",
            description:
              "Placement, layering, and integration as a lens for records, including the files that refuse to pick one stage.",
            slug: "money-laundering-stages",
            readTime: 18,
          },
          {
            title: "Suspicious Activity Reports",
            description:
              "How filings reach a financial intelligence unit, how to triage a narrative, and why a category code is not a verdict.",
            slug: "suspicious-activity-reports",
            readTime: 18,
          },
          {
            title: "Trade-Based Money Laundering",
            description:
              "Compare the invoice, the shipment, the customs line, and the payment. The gap between them is the question.",
            slug: "trade-based-money-laundering",
            readTime: 18,
          },
          {
            title: "Shell Companies and Beneficial Ownership",
            description:
              "Shells, shelves, and fronts; legal owners versus the human who controls the account; registries you can cite.",
            slug: "shell-companies-beneficial-ownership",
            readTime: 18,
          },
          {
            title: "Cryptocurrency Tracing for Analysts",
            description:
              "What a public ledger can cite, what a cluster only suggests, and why the off-ramp is a request for a name.",
            slug: "cryptocurrency-tracing-for-analysts",
            readTime: 20,
          },
          {
            title: "Sanctions and Counter-Terrorist Financing",
            description:
              "Lists, ownership, and destination. Three different questions, and the sentences that belong to counsel.",
            slug: "sanctions-counter-terrorist-financing",
            readTime: 18,
          },
          {
            title: "Financial Network Mapping",
            description:
              "A transaction map and a control map, with edges that say what they mean and open sources that keep their grade.",
            slug: "financial-network-mapping",
            readTime: 18,
          },
        ]}
      />

      <TopicWhereNext />
    </div>
  )
}
