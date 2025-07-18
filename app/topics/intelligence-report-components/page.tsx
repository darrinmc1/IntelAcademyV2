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
  title: "Components of a Basic Intelligence Report | The Intel Analyst Academy",
  description: "Learn about the standard sections of an intelligence report.",
}

export default function IntelligenceReportComponentsPage() {
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
            <BreadcrumbLink href="/topics/intelligence-report-components" isCurrentPage>
              Components of a Basic Intelligence Report
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Components of a Basic Intelligence Report</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Clock className="mr-2 h-4 w-4" />
          <span>15 min read</span>
          <FileText className="ml-6 mr-2 h-4 w-4" />
          <span>Core Topic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
              <StaticImage
                src="/intelligence-report-components-banner.png"
                alt="Components of an Intelligence Report"
                fill
                className="object-cover"
              />
            </div>

            <h2>The Building Blocks of an Effective Report</h2>
            <p>
              A standardized structure allows intelligence reports to be quickly understood and digested by decision-makers. While formats can vary between agencies, most basic reports contain a common set of components, each with a specific purpose.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Standard Report Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Executive Summary:</strong>
                    <span>A brief overview of the report&apos;s key findings and conclusions. Often the only part a senior leader will read.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Key Judgments:</strong>
                    <span>The main analytical conclusions of the report, presented as clear, concise statements.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Background:</strong>
                    <span>Provides context for the reader, including relevant history and previous events.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Analysis:</strong>
                    <span>The main body of the report, where the evidence is presented and the reasoning behind the key judgments is explained.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Outlook/Implications:</strong>
                    <span>Discusses the future prospects and what the findings mean for the decision-maker.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Appendices/Annexes:</strong>
                    <span>Contains supporting data, charts, or detailed information that is not essential for the main narrative.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Understanding these components is crucial for both writing and reading intelligence reports. As a writer, it helps you organize your thoughts and present your analysis logically. As a reader, it allows you to quickly navigate the report and find the information you need.
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
                    href="/topics/good-intelligence-report"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    What Makes a Good Intelligence Report?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/main-body-organization"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Main Body Organization
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
            title: "Main Body Organization",
            description: "Learn how to structure the main body of your intelligence reports.",
            href: "/topics/main-body-organization",
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
