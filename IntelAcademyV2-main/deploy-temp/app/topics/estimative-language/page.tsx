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
  title: "Estimative Language | The Intel Analyst Academy",
  description: "Learn how to use estimative language to convey probability and confidence in your intelligence assessments.",
}

export default function EstimativeLanguagePage() {
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
            <BreadcrumbLink href="/topics/estimative-language" isCurrentPage>
              Estimative Language
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Estimative Language</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Clock className="mr-2 h-4 w-4" />
          <span>30 min read</span>
          <FileText className="ml-6 mr-2 h-4 w-4" />
          <span>Core Topic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
              <StaticImage
                src="/estimative-language-banner.png"
                alt="Estimative Language"
                fill
                className="object-cover"
              />
            </div>

            <h2>The Language of Uncertainty</h2>
            <p>
              Intelligence analysis rarely deals in certainties. The future is inherently unpredictable, and information is often incomplete or ambiguous. Estimative language is the tool analysts use to communicate their level of confidence in their assessments and the probability of future events.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">The Scale of Estimative Language</h3>
                <p>Most intelligence communities use a standardized scale of words and phrases to convey probability. While the exact percentages may vary, the hierarchy is generally consistent:</p>
                <ul className="space-y-3 mt-4">
                  <li><strong>Almost Certainly (95-99%):</strong> The highest level of confidence.</li>
                  <li><strong>Very Likely (80-95%):</strong> A strong belief that an event will happen.</li>
                  <li><strong>Likely (60-80%):</strong> More likely to happen than not.</li>
                  <li><strong>Even Chance (45-55%):</strong> Roughly equal probability of occurring or not.</li>
                  <li><strong>Unlikely (20-40%):</strong> Less likely to happen than not.</li>
                  <li><strong>Very Unlikely (5-20%):</strong> A strong belief that an event will not happen.</li>
                  <li><strong>Remote (1-5%):</strong> The lowest level of confidence.</li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              The disciplined use of estimative language is a hallmark of professional intelligence analysis. It provides decision-makers with a clear and consistent understanding of the uncertainties involved, enabling them to make more informed risk assessments.
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
                    href="/topics/clear-writing-principles"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Clear Writing Principles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/cognitive-biases"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Cognitive Biases
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
            title: "Cognitive Biases",
            description: "Learn how to recognize and mitigate the cognitive biases that can affect your analysis.",
            href: "/topics/cognitive-biases",
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
