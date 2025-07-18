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
  title: "Recommendation Framework | The Intel Analyst Academy",
  description: "Learn how to develop and present actionable recommendations in your intelligence reports.",
}

export default function RecommendationFrameworkPage() {
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
            <BreadcrumbLink href="/topics/recommendation-framework" isCurrentPage>
              Recommendation Framework
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Recommendation Framework</h1>
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
                src="/recommendation-framework-banner.png"
                alt="Recommendation Framework"
                fill
                className="object-cover"
              />
            </div>

            <h2>From Analysis to Action</h2>
            <p>
              While the primary role of an intelligence analyst is to inform, not to make policy, there are times when it is appropriate to provide recommendations. When doing so, it is essential to use a clear and logical framework that connects your analysis to your proposed course of action.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">A Framework for Actionable Recommendations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Based on Analysis:</strong>
                    <span>Recommendations must flow directly from the analysis presented in the report.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Actionable:</strong>
                    <span>They must be specific, realistic, and feasible for the decision-maker to implement.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Clearly Worded:</strong>
                    <span>Use precise language to avoid ambiguity about the proposed course of action.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Aware of Constraints:</strong>
                    <span>Good recommendations take into account the resources, authorities, and limitations of the decision-maker.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              When providing recommendations, the goal is to empower the decision-maker, not to usurp their authority. By using a sound framework, you can offer valuable guidance that is well-reasoned, practical, and directly linked to your intelligence findings.
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
                    href="/topics/conclusion-development"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Conclusion Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/intelligence-decision-making"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Intelligence and Decision-Making
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
            title: "Intelligence and Decision-Making",
            description: "Explore the relationship between intelligence analysis and the decision-making process.",
            href: "/topics/intelligence-decision-making",
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
