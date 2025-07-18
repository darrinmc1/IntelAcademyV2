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
  title: "Digital Evidence Documentation | The Intel Analyst Academy",
  description: "Learn how to properly document and report on digital evidence.",
}

export default function DigitalEvidenceDocumentationPage() {
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
            <BreadcrumbLink href="/topics/digital-evidence-documentation" isCurrentPage>
              Digital Evidence Documentation
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Digital Evidence Documentation</h1>
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
                src="/digital-evidence-documentation-banner.png"
                alt="Digital Evidence Documentation"
                fill
                className="object-cover"
              />
            </div>

            <h2>Handling the Digital Trail</h2>
            <p>
              In the modern world, a vast amount of intelligence is derived from digital sources. Proper documentation of this evidence is crucial for maintaining its integrity and ensuring that it can be used effectively in analysis and, if necessary, in legal proceedings.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Principles of Digital Evidence Documentation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Chain of Custody:</strong>
                    <span>Maintain a clear and unbroken record of who has handled the evidence and when.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Preservation:</strong>
                    <span>Ensure that the original evidence is preserved in its original state. Analysis should be performed on a copy.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Documentation:</strong>
                    <span>Record every step of the collection, preservation, and analysis process.</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Validation:</strong>
                    <span>Use hashing algorithms to verify the integrity of digital files.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              The proper documentation of digital evidence is a critical and often overlooked aspect of intelligence work. By following these principles, you can ensure that your digital evidence is reliable, defensible, and ready to be used to support your analysis.
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
                    href="/topics/osint-techniques"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    OSINT Techniques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/finint-basics"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    FININT Basics
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
            title: "OSINT Techniques",
            description: "Learn how to collect and analyze open-source intelligence.",
            href: "/topics/osint-techniques",
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
