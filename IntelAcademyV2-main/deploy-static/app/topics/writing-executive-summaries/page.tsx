import Link from "next/link"
import { ArrowLeft, Clock, FileText } from "lucide-react"
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
  title: "Writing Executive Summaries | The Intel Analyst Academy",
  description: "Master the art of creating concise and impactful executive summaries",
}

export default function WritingExecutiveSummariesPage() {
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
            <BreadcrumbLink href="/topics/writing-executive-summaries" isCurrentPage>
              Writing Executive Summaries
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Writing Executive Summaries</h1>
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
                src="/executive-summaries.png"
                alt="Writing Executive Summaries"
                fill
                className="object-cover"
              />
            </div>

            <h2>Introduction</h2>
            <p>
              Executive summaries are perhaps the most critical component of any intelligence report. For many senior
              decision-makers, the executive summary is the only part of your report they'll read. Your ability to
              distill complex analysis into a concise, impactful summary can determine whether your intelligence work
              influences decisions or gathers dust.
            </p>

            <p>
              This topic covers essential techniques for creating executive summaries that capture attention, convey key
              judgments, and drive action.
            </p>

            <h2>1. Distillation Techniques</h2>
            <p>
              <strong>Extracting the most critical elements from complex analysis.</strong> Like making espresso from a
              50-page report—concentrated, potent, and keeping executives awake.
            </p>

            <p>
              The art of distillation involves identifying and extracting only the most essential information from your
              full analysis. This requires both analytical judgment and writing discipline.
            </p>

            <p>Key distillation techniques include:</p>

            <ul>
              <li>
                <strong>Identifying Key Judgments:</strong> Determining the 3-5 most important conclusions from your
                analysis
              </li>
              <li>
                <strong>Focusing on "So What?":</strong> Emphasizing implications and significance over raw facts
              </li>
              <li>
                <strong>Eliminating Background Details:</strong> Removing contextual information that isn't essential
                for understanding key judgments
              </li>
              <li>
                <strong>Prioritizing New Information:</strong> Highlighting what's changed or what's newly discovered
              </li>
              <li>
                <strong>Cutting Redundancy:</strong> Expressing each important point once and clearly
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-6 border border-blue-100">
              <h3 className="text-blue-800 mb-2">Pro Tip</h3>
              <p className="text-blue-800 mb-0">
                After writing your first draft, challenge yourself to cut it in half. This forces you to identify what's
                truly essential and eliminate what's merely interesting.
              </p>
            </div>

            <h2>2. Front-Loading Key Judgments</h2>
            <p>
              <strong>Presenting conclusions before supporting details.</strong> Because executives, like toddlers, have
              limited attention spans and need the important stuff first.
            </p>

            <p>
              Traditional academic and journalistic writing often builds toward conclusions. Intelligence writing does
              the opposite—it starts with conclusions and then provides supporting evidence. This "front-loading"
              approach ensures that even if the reader only gets through the first paragraph, they'll see your most
              important judgments.
            </p>

            <p>Effective front-loading strategies include:</p>

            <ul>
              <li>
                <strong>Lead with Conclusions:</strong> Start with your most important judgments or findings
              </li>
              <li>
                <strong>Use Bullet Points:</strong> Present key judgments as concise, scannable bullet points
              </li>
              <li>
                <strong>Include Confidence Levels:</strong> Indicate how confident you are in each key judgment
              </li>
              <li>
                <strong>Provide Just Enough Context:</strong> Include only the minimal context needed to understand the
                judgments
              </li>
              <li>
                <strong>Signpost Supporting Details:</strong> Indicate where in the full report readers can find more
                information
              </li>
            </ul>

            <Card className="my-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Example: Front-Loading Key Judgments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-md">
                    <h4 className="font-medium text-red-800 mb-2">Ineffective Approach</h4>
                    <p className="text-red-800 mb-0">
                      "This report examines recent developments in Country X's missile program. After analyzing
                      satellite imagery, technical specifications, and human intelligence sources, we have determined
                      that Country X has likely achieved a significant breakthrough in miniaturization technology that
                      will enable them to deploy nuclear warheads on their medium-range missiles within 6-12 months."
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-md">
                    <h4 className="font-medium text-green-800 mb-2">Effective Approach</h4>
                    <p className="text-green-800 mb-0">
                      "Key Judgment: We assess with high confidence that Country X will be capable of deploying nuclear
                      warheads on medium-range missiles within 6-12 months, representing a significant acceleration of
                      their previously assessed timeline. This judgment is based on new evidence of a breakthrough in
                      miniaturization technology, detailed in Section 2."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>3. Crafting Actionable Insights</h2>
            <p>
              <strong>Ensuring summaries drive decision-making.</strong> Transform "interesting information" into "do
              this now" without actually saying "do this now."
            </p>

            <p>
              The ultimate purpose of intelligence is to inform decisions. An effective executive summary doesn't just
              present information—it frames that information in ways that highlight implications and support
              decision-making.
            </p>

            <p>Techniques for crafting actionable insights include:</p>

            <ul>
              <li>
                <strong>Highlighting Implications:</strong> Explicitly stating what your findings mean for the
                organization's interests
              </li>
              <li>
                <strong>Identifying Decision Points:</strong> Noting upcoming events or deadlines that require decisions
              </li>
              <li>
                <strong>Presenting Options:</strong> Outlining potential courses of action (without advocating for
                specific policies)
              </li>
              <li>
                <strong>Addressing Key Questions:</strong> Ensuring your summary answers the specific questions
                decision-makers are asking
              </li>
              <li>
                <strong>Using Forward-Looking Language:</strong> Focusing on future developments and their significance
              </li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg my-6 border border-amber-100">
              <h3 className="text-amber-800 mb-2">Common Pitfall</h3>
              <p className="text-amber-800 mb-0">
                Avoid crossing the line from intelligence to policy recommendation. Your job is to provide the insights
                that inform decisions, not to make the decisions. Present implications and options, but stop short of
                telling decision-makers what they should do.
              </p>
            </div>

            <h2>Executive Summary Template</h2>
            <p>
              While executive summaries should be tailored to specific requirements, the following template provides a
              useful starting point:
            </p>

            <Card className="my-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Executive Summary Template</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">1. Purpose Statement (1-2 sentences)</h4>
                    <p className="text-sm text-gray-600">
                      Brief statement of what the report addresses and why it matters
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">2. Key Judgments (3-5 bullet points)</h4>
                    <p className="text-sm text-gray-600">
                      Most important conclusions with confidence levels, each 1-2 sentences
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">3. Critical Context (1-2 paragraphs)</h4>
                    <p className="text-sm text-gray-600">
                      Minimal background information needed to understand the judgments
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">4. Implications (2-3 bullet points)</h4>
                    <p className="text-sm text-gray-600">What these judgments mean for the organization's interests</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">5. Outlook (1 paragraph)</h4>
                    <p className="text-sm text-gray-600">
                      Brief assessment of future developments and their significance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>Conclusion</h2>
            <p>
              Mastering the art of executive summary writing is one of the most valuable skills an intelligence
              professional can develop. By effectively distilling complex analysis, front-loading key judgments, and
              crafting actionable insights, you can ensure your intelligence work has maximum impact on decision-making.
            </p>

            <p>
              Remember that an executive summary is not just a shorter version of your full report—it's a carefully
              crafted document with its own purpose and audience. It requires different writing techniques and a
              disciplined focus on what matters most to decision-makers.
            </p>

            <p>
              With practice and attention to these principles, you can create executive summaries that capture
              attention, convey critical information, and drive informed decisions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">In This Topic</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    1. Distillation Techniques
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    2. Front-Loading Key Judgments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    3. Crafting Actionable Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Executive Summary Template
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Related Topics</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/topics/intelligence-report-fundamentals"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Intelligence Report Fundamentals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/verbal-briefing-techniques"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Verbal Briefing Techniques
                  </Link>
                </li>
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
                    href="/topics/intelligence-storytelling"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Intelligence Storytelling
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
            title: "Verbal Briefing Techniques",
            description: "Learn how to effectively present intelligence findings verbally",
            href: "/topics/verbal-briefing-techniques",
            icon: "Presentation",
          },
          {
            title: "Intelligence Report Fundamentals",
            description: "Master the core principles of effective intelligence reporting",
            href: "/topics/intelligence-report-fundamentals",
            icon: "FileText",
          },
          {
            title: "Report Writing Learning Path",
            description: "Explore the complete intelligence report writing curriculum",
            href: "/learning-paths/report-writing",
            icon: "GraduationCap",
          },
        ]}
      />
    </div>
  )
}
