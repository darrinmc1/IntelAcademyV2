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
  title: "Main Body Organization | The Intel Analyst Academy",
  description: "Learn how to structure the main body of your intelligence reports for maximum clarity and impact.",
}

export default function MainBodyOrganizationPage() {
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
            <BreadcrumbLink href="/topics/main-body-organization" isCurrentPage>
              Main Body Organization
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Main Body Organization</h1>
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
                src="/main-body-organization-banner.png"
                alt="Main Body Organization"
                fill
                className="object-cover"
              />
            </div>

            <h2>Structuring Your Argument</h2>
            <p>
              The main body of your report is where you lay out the evidence and reasoning that support your key judgments. A well-organized main body guides the reader through your analytical process, making your conclusions more persuasive and understandable.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Common Organizational Structures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Chronological:</strong>
                    <span>Presents events in the order they occurred. Useful for narrative accounts.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Thematic:</strong>
                    <span>Organizes information by topic or theme. Useful for complex subjects with multiple facets.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Geographical:</strong>
                    <span>Arranges information by location. Useful for analysis of events in different areas.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">By Source:</strong>
                    <span>Groups information by the source it came from. Useful when comparing and contrasting different intelligence streams.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              The best organizational structure will depend on the specific topic and the needs of your audience. The key is to choose a structure and apply it consistently, creating a logical flow that is easy for the reader to follow.
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
                    href="/topics/conclusion-development"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Conclusion Development
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
            title: "Conclusion Development",
            description: "Learn how to write strong, well-supported conclusions.",
            href: "/topics/conclusion-development",
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
