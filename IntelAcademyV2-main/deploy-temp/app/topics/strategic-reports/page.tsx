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
  title: "Strategic Reports | The Intel Analyst Academy",
  description: "Learn how to write strategic intelligence reports for senior policymakers.",
}

export default function StrategicReportsPage() {
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
            <BreadcrumbLink href="/topics/strategic-reports" isCurrentPage>
              Strategic Reports
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Strategic Reports</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Clock className="mr-2 h-4 w-4" />
          <span>35 min read</span>
          <FileText className="ml-6 mr-2 h-4 w-4" />
          <span>Core Topic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
              <StaticImage
                src="/strategic-reports-banner.png"
                alt="Strategic Reports"
                fill
                className="object-cover"
              />
            </div>

            <h2>Informing National Policy</h2>
            <p>
              Strategic intelligence reports are concerned with the big picture. They address long-term trends, assess the intentions and capabilities of other nations, and provide the context for major policy decisions. Writing for a strategic audience requires a deep understanding of the issues and the ability to communicate complex ideas with clarity and precision.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Characteristics of a Strategic Report</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Long-Term Focus:</strong>
                    <span>Looks at issues over a horizon of months, years, or even decades.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Broad Scope:</strong>
                    <span>Deals with national or international issues, such as political, economic, or military trends.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">High-Level Audience:</strong>
                    <span>Written for senior policymakers, such as presidents, prime ministers, and national security advisors.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Focus on "Why":</strong>
                    <span>Seeks to explain the underlying drivers of events and trends, not just describe them.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Strategic reporting is one of the most challenging and rewarding aspects of intelligence analysis. It is an opportunity to have a direct impact on the course of national and international events by providing leaders with the foresight they need to make sound decisions.
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
                    href="/topics/strategic-forecasting"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Strategic Forecasting
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
            title: "Strategic Forecasting",
            description: "Learn the art and science of long-term strategic forecasting.",
            href: "/topics/strategic-forecasting",
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
