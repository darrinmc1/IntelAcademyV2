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
  title: "Operational Reports | The Intel Analyst Academy",
  description: "Learn how to write operational intelligence reports to support ongoing campaigns and operations.",
}

export default function OperationalReportsPage() {
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
            <BreadcrumbLink href="/topics/operational-reports" isCurrentPage>
              Operational Reports
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Operational Reports</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Clock className="mr-2 h-4 w-4" />
          <span>25 min read</span>
          <FileText className="ml-6 mr-2 h-4 w-4" />
          <span>Core Topic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
              <StaticImage
                src="/operational-reports-banner.png"
                alt="Operational Reports"
                fill
                className="object-cover"
              />
            </div>

            <h2>Supporting the Campaign</h2>
            <p>
              Operational intelligence bridges the gap between broad strategic goals and specific tactical actions. It provides the intelligence support needed to plan and execute military campaigns, law enforcement operations, and other sustained efforts. 
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Characteristics of an Operational Report</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Campaign-Focused:</strong>
                    <span>Directly supports a specific ongoing operation or campaign.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Mid-Term Horizon:</strong>
                    <span>Looks at a timeframe of weeks to months.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Theater-Level View:</strong>
                    <span>Covers a specific geographic area of operations.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Audience of Planners:</strong>
                    <span>Written for military commanders and campaign planners.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Operational intelligence is the engine that drives successful campaigns. By providing timely, relevant, and actionable intelligence, operational analysts enable commanders to make informed decisions that can mean the difference between success and failure.
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
                    href="/topics/intelligence-report-types"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Strategic, Operational, and Tactical Reports
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
            title: "Tactical Reports",
            description: "Learn how to write for the warfighter on the front lines.",
            href: "/topics/tactical-reports",
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
