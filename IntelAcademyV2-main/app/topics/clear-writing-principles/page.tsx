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
  title: "Clear Writing Principles | The Intel Analyst Academy",
  description: "Learn the principles of clear and effective writing for intelligence reports.",
}

export default function ClearWritingPrinciplesPage() {
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
            <BreadcrumbLink href="/topics/clear-writing-principles" isCurrentPage>
              Clear Writing Principles
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Clear Writing Principles</h1>
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
                src="/clear-writing-principles-banner.png"
                alt="Clear Writing Principles"
                fill
                className="object-cover"
              />
            </div>

            <h2>The Power of Plain Language</h2>
            <p>
              In intelligence, clarity is paramount. Complex ideas must be communicated in a way that is easy to understand, even for non-experts. This means avoiding jargon, acronyms, and convoluted sentence structures whenever possible.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Principles for Clear Writing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Use Active Voice:</strong> It is more direct and engaging than passive voice.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Choose Simple Words:</strong> Don&apos;t use a complex word when a simple one will do.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Keep Sentences Short:</strong> Break up long, complex sentences into shorter, more digestible ones.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Be Specific:</strong> Avoid vague and ambiguous language.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Clear writing is not about "dumbing down" your analysis. It is about making it accessible to the widest possible audience, ensuring that your message is received and understood without distortion.
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
                    href="/topics/estimative-language"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Estimative Language
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/report-writing-pitfalls"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Report Writing Pitfalls
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
            title: "Estimative Language",
            description: "Learn how to use language to convey levels of confidence and probability.",
            href: "/topics/estimative-language",
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
