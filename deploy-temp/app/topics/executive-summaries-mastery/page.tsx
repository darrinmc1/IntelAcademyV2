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
  title: "Executive Summary Mastery | The Intel Analyst Academy",
  description: "Learn how to write a powerful and effective executive summary.",
}

export default function ExecutiveSummariesMasteryPage() {
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
            <BreadcrumbLink href="/topics/executive-summaries-mastery" isCurrentPage>
              Executive Summary Mastery
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Executive Summary Mastery</h1>
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
                src="/executive-summaries-mastery-banner.png"
                alt="Executive Summary Mastery"
                fill
                className="object-cover"
              />
            </div>

            <h2>The Most Important Page of Your Report</h2>
            <p>
              The executive summary is arguably the most critical component of any intelligence report. For many senior leaders, it is the only part they will read. Therefore, it must be a perfect distillation of your analysis, conveying the most important information with clarity and impact.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Keys to an Effective Executive Summary</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Bottom Line Up Front (BLUF):</strong> Start with your most important analytical conclusion.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Conciseness:</strong> Keep it to one or two paragraphs. Every word must count.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Clarity:</strong> Use simple, direct language. Avoid jargon and acronyms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Completeness:</strong> It must be a stand-alone product that accurately reflects the full report.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
             Mastering the art of the executive summary is a force multiplier for an intelligence analyst. It ensures that your hard work gets the attention it deserves and that decision-makers have the information they need to act, even when they don&apos;t have time to read the full report.
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
                    href="/topics/writing-executive-summaries"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Writing Executive Summaries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/intelligence-report-components"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Components of a Basic Intelligence Report
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
            title: "Writing Executive Summaries",
            description: "Practice writing effective executive summaries with examples and exercises.",
            href: "/topics/writing-executive-summaries",
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
