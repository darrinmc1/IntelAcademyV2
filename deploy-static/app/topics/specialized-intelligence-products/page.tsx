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
  title: "Specialized Intelligence Products | The Intel Analyst Academy",
  description: "Learn about the variety of specialized intelligence products beyond the standard report.",
}

export default function SpecializedIntelligenceProductsPage() {
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
            <BreadcrumbLink href="/topics/specialized-intelligence-products" isCurrentPage>
              Specialized Intelligence Products
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Specialized Intelligence Products</h1>
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
                src="/specialized-intelligence-products-banner.png"
                alt="Specialized Intelligence Products"
                fill
                className="object-cover"
              />
            </div>

            <h2>Beyond the Written Report</h2>
            <p>
              While the traditional written report is a staple of intelligence work, there are many other types of intelligence products designed for specific purposes and audiences. These can range from daily briefings to in-depth assessments of particular technologies or groups.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Examples of Specialized Products</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Intelligence Briefings:</strong>
                    <span>Oral presentations, often delivered daily, to keep leaders updated on the latest developments.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Target Packages:</strong>
                    <span>Detailed profiles of individuals, groups, or facilities of interest.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Threat Assessments:</strong>
                    <span>Analyses of the capabilities and intentions of hostile actors.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Technology Assessments:</strong>
                    <span>Reports on the capabilities and implications of new technologies.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              The ability to produce a variety of intelligence products is a valuable skill for any analyst. It allows you to tailor your work to the specific needs of the consumer, ensuring that your intelligence is as useful and impactful as possible.
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
                    href="/topics/intelligence-briefings"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Intelligence Briefings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/target-profiling"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Target Profiling
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
            title: "Intelligence Briefings",
            description: "Learn the art of delivering effective oral intelligence briefings.",
            href: "/topics/intelligence-briefings",
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
