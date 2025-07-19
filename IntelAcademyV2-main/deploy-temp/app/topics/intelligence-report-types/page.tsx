import Link from "next/link"
import { ArrowLeft, Clock, FileText, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { StaticImage } from "@/components/static-image"
import { WhatsNext } from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Strategic, Operational, and Tactical Reports | The Intel Analyst Academy",
  description: "Understand the differences between the three levels of intelligence reporting.",
}

export default function IntelligenceReportTypesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics">Topics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths/report-writing">Report Writing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/intelligence-report-types" isCurrentPage>
              Strategic, Operational, and Tactical Reports
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <Link
          href="/learning-paths/report-writing"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Report Writing
        </Link>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Difference Between Strategic, Operational, and Tactical Reports</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Clock className="mr-2 h-4 w-4" />
          <span>20 min read</span>
          <FileText className="ml-6 mr-2 h-4 w-4" />
          <span>Core Topic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
              <StaticImage
                src="/intelligence-report-types-banner.png"
                alt="Levels of Intelligence Reporting"
                fill
                className="object-cover"
              />
            </div>

            <h2>Three Levels of Analysis</h2>
            <p>
              Intelligence reporting is not a one-size-fits-all activity. The type of report an analyst produces depends on the needs of the consumer. The three main levels of intelligence are Strategic, Operational, and Tactical, each with a different focus, timeframe, and audience.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">The Three Tiers of Intelligence</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-lg">Strategic</h4>
                    <p><strong>Focus:</strong> Broad, long-term trends and threats. National or international issues.</p>
                    <p><strong>Audience:</strong> Senior policymakers, national security leaders.</p>
                    <p><strong>Timeframe:</strong> Months, years, or even decades.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Operational</h4>
                    <p><strong>Focus:</strong> Supporting ongoing operations or campaigns. Regional or theater-level issues.</p>
                    <p><strong>Audience:</strong> Military commanders, campaign planners.</p>
                    <p><strong>Timeframe:</strong> Weeks to months.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Tactical</h4>
                    <p><strong>Focus:</strong> Immediate threats and situations. Localized issues.</p>
                    <p><strong>Audience:</strong> Field commanders, law enforcement officers.</p>
                    <p><strong>Timeframe:</strong> Hours to days.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Understanding the distinction between these three levels is crucial for an intelligence analyst. It ensures that the right information gets to the right people in the right format to support decision-making at all levels, from the White House to the front lines.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Related Topics</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/topics/strategic-reports"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Strategic Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/operational-reports"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Operational Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/tactical-reports"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Tactical Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <WhatsNext
        title="Continue Your Learning"
        items={[
          {
            title: "Strategic Reports",
            description: "Take a deep dive into writing for senior policymakers.",
            href: "/topics/strategic-reports",
            icon: "FileText",
          },
          {
            title: "Intelligence Report Fundamentals",
            description: "Dive deeper into the core principles of effective intelligence reporting.",
            href: "/topics/intelligence-report-fundamentals",
            icon: "GraduationCap",
          },
        ]}
      />
    </div>
  )
}
