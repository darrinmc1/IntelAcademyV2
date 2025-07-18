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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "What Makes a Good Intelligence Report? | The Intel Analyst Academy",
  description: "Learn the key characteristics of a high-quality intelligence report.",
}

export default function GoodIntelligenceReportPage() {
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
            <BreadcrumbLink href="/topics/good-intelligence-report" isCurrentPage>
              What Makes a Good Intelligence Report?
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">What Makes a Good Intelligence Report?</h1>
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
                src="/good-intelligence-report-banner.png"
                alt="Characteristics of a Good Intelligence Report"
                fill
                className="object-cover"
              />
            </div>

            <h2>Defining Excellence in Intelligence Reporting</h2>
            <p>
              A good intelligence report is more than just a collection of facts; it is a refined product designed to provide decision-makers with the foresight needed to act decisively. The quality of a report is measured by its ability to be clear, concise, and actionable.
            </p>

            <p>
              This topic explores the essential characteristics that distinguish a superior intelligence report from a mediocre one. Understanding these qualities is the first step toward producing analysis that has a real-world impact.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Core Attributes of a Quality Report</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Timeliness:</strong> The report must reach the decision-maker in time to be of use.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Relevance:</strong> The content must be directly applicable to the needs and requirements of the consumer.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Accuracy:</strong> The information presented must be factually correct and well-sourced.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Clarity:</strong> The report must be easy to understand, free of jargon and ambiguity.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Conciseness:</strong> It should be as brief as possible, without sacrificing essential information (the &quot;BLUF&quot; principle - Bottom Line Up Front).</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Predictive Value:</strong> A good report should not just state facts, but also provide an assessment of future possibilities and implications.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>The Decision-Maker's Perspective</h2>
            <p>
              To write a good report, you must understand the perspective of the person who will be reading it. Decision-makers are often short on time and need to quickly grasp the most important information. They are looking for answers to specific questions and an understanding of the &quot;so what&quot; – the implications of the analysis.
            </p>
            <p>
              A report that is difficult to read, poorly organized, or fails to get to the point quickly will likely be ignored, no matter how brilliant the underlying analysis.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              Ultimately, a good intelligence report serves as a bridge between the world of analysis and the world of action. By adhering to these core principles, you can ensure that your work is not just read, but understood, trusted, and used to make better decisions.
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
                    href="/topics/intelligence-report-components"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Components of a Basic Intelligence Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/writing-executive-summaries"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Writing Executive Summaries
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
            title: "Components of a Basic Intelligence Report",
            description: "Learn about the standard sections of an intelligence report.",
            href: "/topics/intelligence-report-components",
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
