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
  title: "Intelligence Report Fundamentals | The Intel Analyst Academy",
  description: "Learn the core principles of effective intelligence reporting",
}

export default function IntelligenceReportFundamentalsPage() {
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
            <BreadcrumbLink href="/topics/intelligence-report-fundamentals" isCurrentPage>
              Intelligence Report Fundamentals
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Intelligence Report Fundamentals</h1>
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
                src="/intelligence-report-fundamentals.png"
                alt="Intelligence Report Fundamentals"
                fill
                className="object-cover"
              />
            </div>

            <h2>Introduction</h2>
            <p>
              Intelligence reports are the primary means by which analysts communicate their findings to
              decision-makers. Mastering the fundamentals of report writing is essential for any intelligence
              professional who wants their analysis to be understood, trusted, and acted upon.
            </p>

            <p>
              This topic covers the core principles of effective intelligence reporting, from structure and organization
              to precision language, proper sourcing, and maintaining focus on relevant intelligence questions.
            </p>

            <Tabs defaultValue="structure" className="my-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                <TabsTrigger value="structure">Structure</TabsTrigger>
                <TabsTrigger value="language">Precision Language</TabsTrigger>
                <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
                <TabsTrigger value="scope">Scope Control</TabsTrigger>
              </TabsList>
              <TabsContent value="structure" className="border rounded-md p-6">
                <h3 className="text-xl font-semibold mb-4">Structure and Organization (5 min)</h3>
                <div className="flex items-center mb-4">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5 min</span>
                </div>

                <h4 className="text-lg font-medium mb-3">Introduction</h4>
                <p>
                  Intelligence reports follow a standardized structure for good reason - they must efficiently deliver
                  critical information to decision-makers who often have limited time and competing priorities. A
                  well-structured intelligence report allows readers to quickly grasp key findings, understand the
                  supporting evidence, and make informed decisions.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">The Anatomy of an Intelligence Report</h4>

                <div className="space-y-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                    <h5 className="font-medium text-blue-800">Executive Summary</h5>
                    <ul className="mt-2 space-y-1 text-blue-800">
                      <li>• Provides a concise overview of the entire report in 1-2 paragraphs</li>
                      <li>• Answers the "so what" question immediately</li>
                      <li>• Identifies the most significant findings and implications</li>
                      <li>• Serves as a standalone product for senior leaders who may not read further</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-500">
                    <h5 className="font-medium text-indigo-800">Key Judgments</h5>
                    <ul className="mt-2 space-y-1 text-indigo-800">
                      <li>• Presents analytical conclusions in clear, direct statements</li>
                      <li>• Typically formatted as numbered bullets for easy reference</li>
                      <li>• Arranges judgments in order of importance or chronology</li>
                      <li>• Includes confidence levels for each judgment (high, moderate, low)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-500">
                    <h5 className="font-medium text-purple-800">Background</h5>
                    <ul className="mt-2 space-y-1 text-purple-800">
                      <li>• Provides essential context on the intelligence issue</li>
                      <li>• Establishes relevant history and previous developments</li>
                      <li>• Defines key terms and concepts for readers unfamiliar with the topic</li>
                      <li>• Sets the stage for the analytical discussion that follows</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-md border-l-4 border-pink-500">
                    <h5 className="font-medium text-pink-800">Analysis</h5>
                    <ul className="mt-2 space-y-1 text-pink-800">
                      <li>• Presents evidence and reasoning that support key judgments</li>
                      <li>• Organizes information logically (chronological, thematic, geographical)</li>
                      <li>• Explicitly connects evidence to conclusions</li>
                      <li>• Addresses alternative explanations and why they were discounted</li>
                      <li>• Acknowledges intelligence gaps and limitations</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
                    <h5 className="font-medium text-red-800">Outlook</h5>
                    <ul className="mt-2 space-y-1 text-red-800">
                      <li>• Projects future developments based on current analysis</li>
                      <li>• Identifies indicators that would signal a change in trajectory</li>
                      <li>• Discusses implications for stakeholders and decision-makers</li>
                      <li>• May include scenario planning for different possible outcomes</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-md border-l-4 border-orange-500">
                    <h5 className="font-medium text-orange-800">Confidence Assessment</h5>
                    <ul className="mt-2 space-y-1 text-orange-800">
                      <li>• Explicitly addresses the reliability of sources and information</li>
                      <li>• Explains analytical confidence levels and reasoning</li>
                      <li>• Identifies factors that could change the assessment</li>
                      <li>• Acknowledges dissenting views within the intelligence community</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
                    <h5 className="font-medium text-amber-800">Supporting Annexes</h5>
                    <ul className="mt-2 space-y-1 text-amber-800">
                      <li>• Provides detailed information for specialists</li>
                      <li>• May include technical data, chronologies, or in-depth profiles</li>
                      <li>• Contains reference materials that support but would disrupt the main narrative</li>
                      <li>• Often includes visual elements too detailed for the main text</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-8 mb-3">The "Inverted Pyramid" Approach</h4>

                <div className="bg-blue-50 p-6 rounded-lg my-6 border border-blue-100">
                  <h5 className="text-blue-800 font-medium mb-4">The Inverted Pyramid Structure</h5>
                  <div className="relative w-full h-64 mb-4">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-blue-700 text-white flex items-center justify-center rounded-t-lg">
                      <p className="font-medium">1. Start with conclusions</p>
                    </div>
                    <div className="absolute top-16 left-0 right-0 h-16 bg-blue-600 text-white flex items-center justify-center">
                      <p className="font-medium">2. Follow with key supporting evidence</p>
                    </div>
                    <div className="absolute top-32 left-0 right-0 h-16 bg-blue-500 text-white flex items-center justify-center">
                      <p className="font-medium">3. Add context and details</p>
                    </div>
                    <div className="absolute top-48 left-0 right-0 h-16 bg-blue-400 text-white flex items-center justify-center rounded-b-lg">
                      <p className="font-medium">4. End with technical details and methodologies</p>
                    </div>
                  </div>
                  <p className="text-blue-800 text-sm">
                    The intelligence community follows an "inverted pyramid" structure that places the most important
                    information at the beginning. This approach ensures that even if a decision-maker only reads the
                    first page, they receive the most crucial information. This stands in stark contrast to academic or
                    legal writing, which typically builds a case before revealing conclusions.
                  </p>
                </div>

                <h4 className="text-lg font-medium mt-8 mb-3">Enhancing Readability and Navigation</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Effective Use of Headings</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Use descriptive, informative headings that convey meaning</li>
                      <li>• Maintain consistent formatting for hierarchy</li>
                      <li>• Keep headings concise but specific</li>
                      <li>• Ensure headings form a logical outline of the document</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Strategic Use of Subheadings</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Break complex sections into manageable chunks</li>
                      <li>• Use parallel construction for related subheadings</li>
                      <li>• Ensure subheadings flow logically and tell a coherent story</li>
                      <li>• Aim for sections short enough to be read in 2-3 minutes</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Bullet Points and Lists</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Use bullets for items of equal importance</li>
                      <li>• Use numbered lists for sequential steps or ranked items</li>
                      <li>• Keep bullet points consistently structured</li>
                      <li>• Ensure bullets contain complete thoughts but remain concise</li>
                      <li>• Limit bullets to 5-7 per list for maximum impact</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Visual Elements</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Place charts and maps adjacent to related text</li>
                      <li>• Include clear captions that explain significance</li>
                      <li>• Use consistent visual styling throughout</li>
                      <li>• Ensure visuals add value rather than merely decorating</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg my-6 border border-green-100">
                  <h5 className="text-green-800 font-medium mb-2">Benefits of Well-Structured Reports</h5>
                  <p className="text-green-800 mb-4">A well-structured intelligence report allows readers to:</p>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Find information quickly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Understand the relative importance of different elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Grasp complex situations efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Navigate easily between sections of interest</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reference specific findings when making decisions</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p>
                    Remember, a disorganized intelligence report, no matter how insightful the analysis, ultimately
                    fails in its primary mission: to inform decision-making. Structure in intelligence reporting isn't
                    just about following conventions—it's about ensuring that critical information reaches the right
                    people at the right time in a format they can readily use.
                  </p>
                  <p className="mt-4">
                    As intelligence professionals often note: in this field, brilliant analysis that arrives too late or
                    in an unusable format is ultimately worthless. Structure and organization aren't just bureaucratic
                    requirements—they're the foundation that makes intelligence actionable.
                  </p>
                  <p className="italic text-muted-foreground mt-4">
                    Because "stream of consciousness" isn't a recognized intelligence writing style, no matter how
                    insightful your 3 AM thoughts are.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="language" className="border rounded-md p-6">
                <h3 className="text-xl font-semibold mb-4">Precision Language (5 min)</h3>
                <div className="flex items-center mb-4">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5 min</span>
                </div>

                <h4 className="text-lg font-medium mb-3">Introduction</h4>
                <p>
                  In intelligence analysis, words carry tremendous weight. A single imprecise term can mislead
                  decision-makers, while carefully chosen language can effectively communicate complex situations and
                  appropriate levels of certainty. This session examines how to craft intelligence reports with
                  linguistic precision that serves rather than obscures clarity.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">The Cost of Imprecision</h4>
                <div className="bg-red-50 p-5 rounded-lg border border-red-200 mb-6">
                  <h5 className="font-medium text-red-800 mb-3">
                    Language imprecision in intelligence reporting can lead to serious consequences:
                  </h5>
                  <ul className="space-y-1 text-red-800">
                    <li>• Misinterpretation of threat levels</li>
                    <li>• Inappropriate resource allocation</li>
                    <li>• Failure to take necessary action</li>
                    <li>• Taking unnecessary action</li>
                    <li>• Erosion of trust in intelligence products</li>
                  </ul>
                  <p className="mt-3 text-red-800 text-sm">
                    The infamous &quot;slam dunk&quot; characterization of Iraq WMD intelligence demonstrates how casual language
                    can contribute to major policy missteps. Precision isn&apos;t merely stylistic—it&apos;s fundamental to the
                    intelligence mission.
                  </p>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Identifying and Eliminating Vague Language</h4>

                <h5 className="font-medium mt-4 mb-2">Vague Terms to Avoid</h5>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left">Vague Term</th>
                        <th className="py-2 px-4 border-b text-left">Precision Problem</th>
                        <th className="py-2 px-4 border-b text-left">Better Alternative</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">"Soon"</td>
                        <td className="py-2 px-4 border-b">Undefined timeframe</td>
                        <td className="py-2 px-4 border-b">"Within 24-48 hours"</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">"Significant"</td>
                        <td className="py-2 px-4 border-b">Subjective importance</td>
                        <td className="py-2 px-4 border-b">"Affecting 30% of capacity"</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">"Several"</td>
                        <td className="py-2 px-4 border-b">Undefined quantity</td>
                        <td className="py-2 px-4 border-b">"Between 3-5 instances"</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">"Possibly"</td>
                        <td className="py-2 px-4 border-b">Undefined probability</td>
                        <td className="py-2 px-4 border-b">"30-40% likelihood"</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">"Degraded"</td>
                        <td className="py-2 px-4 border-b">Unclear severity</td>
                        <td className="py-2 px-4 border-b">"Operating at 60% capacity"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                    <h5 className="font-medium text-amber-800 mb-2">Weasel Words and Hedge Terms</h5>
                    <p className="text-amber-800 mb-2">
                      Weasel words dilute meaning while appearing to communicate something substantial:
                    </p>
                    <ul className="space-y-1 text-amber-800">
                      <li>• "Appears to be"</li>
                      <li>• "Seemingly"</li>
                      <li>• "Could be said that"</li>
                      <li>• "Essentially"</li>
                      <li>• "More or less"</li>
                    </ul>
                    <p className="mt-2 text-amber-800 text-sm">
                      These terms create an illusion of analysis while allowing multiple interpretations. Replace them
                      with precise statements of confidence or acknowledge knowledge gaps directly.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-2">Passive Voice Problems</h5>
                    <p className="text-blue-800 mb-2">Active voice clarifies responsibility and action:</p>
                    <div className="space-y-2">
                      <p className="text-red-600 font-medium">Passive (problematic):</p>
                      <p className="text-red-600 ml-4">&quot;The facility was accessed and materials were removed.&quot;</p>
                      <p className="text-green-600 font-medium">Active (preferred):</p>
                      <p className="text-green-600 ml-4">
                        &quot;Three individuals accessed the facility and removed radioactive materials.&quot;
                      </p>
                    </div>
                    <p className="mt-2 text-blue-800 text-sm">
                      When using passive voice is unavoidable (when the actor is unknown), explicitly acknowledge this:
                      &quot;An unknown party accessed the facility and removed radioactive materials.&quot;
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">The Language of Estimative Probability</h4>

                <Card className="my-6">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-lg mb-4">Estimative Language Scale</h5>
                    <p className="mb-4">
                      Intelligence analysts use standardized terminology to communicate likelihood:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Term</th>
                            <th className="py-2 px-4 border-b text-left">Approximate Probability</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">"Almost certainly"</td>
                            <td className="py-2 px-4 border-b">95-99%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Very likely/highly probable"</td>
                            <td className="py-2 px-4 border-b">80-95%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Likely/probable"</td>
                            <td className="py-2 px-4 border-b">60-80%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Even chance"</td>
                            <td className="py-2 px-4 border-b">45-55%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Unlikely/improbable"</td>
                            <td className="py-2 px-4 border-b">20-40%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Very unlikely/highly improbable"</td>
                            <td className="py-2 px-4 border-b">5-20%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">"Remote/almost no chance"</td>
                            <td className="py-2 px-4 border-b">1-5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                                          This calibrated language creates a shared understanding of probability between analysts and
                    decision-makers. Some agencies include these probability ranges as footnotes in reports to ensure
                    clarity.
                    </p>
                  </CardContent>
                </Card>

                <h4 className="text-lg font-medium mt-6 mb-3">Observation vs. Inference</h4>
                <p className="mb-3">Intelligence writing must clearly distinguish between:</p>
                <ol className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Direct observation</strong>: What was actually seen, heard, or measured
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Inference</strong>: What these observations suggest
                    </span>
                  </li>
                </ol>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-md">
                    <h5 className="font-medium text-red-800 mb-2">Imprecise example</h5>
                    <p className="text-red-800">&quot;North Country is preparing for war.&quot;</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-md">
                    <h5 className="font-medium text-green-800 mb-2">Precise alternative</h5>
                    <p className="text-green-800">
                      &quot;Satellite imagery shows North Country has moved 75% of its armored units to the southern border
                      region, suggesting preparations for possible military action.&quot;
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  The first statement presents an inference as fact; the second clearly separates observation from
                  analysis.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">Facts, Assumptions, and Judgments</h4>
                <p className="mb-3">Precise intelligence writing explicitly identifies:</p>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                    <h5 className="font-medium text-blue-800">Facts</h5>
                    <ul className="mt-1 space-y-1 text-blue-800">
                      <li>• Verified information from reliable sources</li>
                      <li>• Data that can be independently confirmed</li>
                      <li>• Historical events with strong documentation</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
                    <h5 className="font-medium text-amber-800">Assumptions</h5>
                    <ul className="mt-1 space-y-1 text-amber-800">
                      <li>• Necessary suppositions to fill analytical gaps</li>
                      <li>• Beliefs taken as true for analytical purposes</li>
                      <li>• Conditions presumed to continue or change</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-500">
                    <h5 className="font-medium text-purple-800">Judgments</h5>
                    <ul className="mt-1 space-y-1 text-purple-800">
                      <li>• Analytical conclusions based on available information</li>
                      <li>• Interpretations of facts and assumptions</li>
                      <li>• Assessments of meaning and significance</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                  <h5 className="font-medium mb-2">Example of clear distinction</h5>
                  <p className="italic">
                    "Intercepted communications confirm North Country has cancelled military leave for the next month{" "}
                    <span className="bg-blue-100 px-1 rounded">[FACT]</span>. Assuming these orders affect combat units{" "}
                    <span className="bg-amber-100 px-1 rounded">[ASSUMPTION]</span>, we assess that North Country is
                    preparing for potential military operations within 30 days{" "}
                    <span className="bg-purple-100 px-1 rounded">[JUDGMENT]</span>."
                  </p>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Converting Imprecise Statements</h4>
                <h5 className="font-medium mt-4 mb-2">Before and After Examples</h5>

                <div className="space-y-6 mb-6">
                  <div className="space-y-2">
                    <div className="bg-red-50 p-4 rounded-md">
                      <h6 className="font-medium text-red-800 mb-1">Imprecise</h6>
                      <p className="text-red-800">&quot;The terrorist group might attack soon.&quot;</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-md">
                      <h6 className="font-medium text-green-800 mb-1">Precise</h6>
                      <p className="text-green-800">
                        "We assess with moderate confidence (60-70% likelihood) that Group X will attempt an attack
                        against Western interests in Country Y within the next 30 days. This judgment is based on
                        intercepted communications, increased operational security measures, and three instances of
                        surveillance of potential targets."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-red-50 p-4 rounded-md">
                      <h6 className="font-medium text-red-800 mb-1">Imprecise</h6>
                      <p className="text-red-800">"The weapon program seems substantial."</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-md">
                      <h6 className="font-medium text-green-800 mb-1">Precise</h6>
                      <p className="text-green-800">
                        "Based on procurement records and human intelligence sources, Country Z has acquired equipment
                        sufficient to produce approximately 5-10 kg of weapons-grade uranium annually. This capability,
                        combined with observed testing of delivery systems, indicates with high confidence a deliberate
                        weapons development program that could yield a testable device within 12-18 months."
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Common Terminology Pitfalls</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Jargon Overuse</h5>
                    <p className="text-sm mb-2">While technical terms have their place, excessive jargon:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Creates barriers to understanding</li>
                      <li>• Obscures rather than clarifies</li>
                      <li>• Limits the audience who can use the intelligence</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Solution</strong>: Define technical terms on first use, consider a glossary for
                      specialized reports, and use plain language where possible.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">False Precision</h5>
                    <p className="text-sm mb-2">
                      Expressing more certainty than the evidence supports undermines credibility:
                    </p>
                    <p className="text-red-600 text-sm">
                      <strong>False precision</strong>: "The facility will be operational in 94 days."
                    </p>
                    <p className="text-green-600 text-sm">
                      <strong>Appropriate precision</strong>: "We assess with moderate confidence that the facility will
                      become operational in 3-4 months."
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Unnecessary Complexity</h5>
                    <p className="text-sm mb-2">Complex sentence structures and vocabulary can impede understanding:</p>
                    <p className="text-red-600 text-sm">
                      <strong>Unnecessarily complex</strong>: "The proliferation of unconventional weaponry in the
                      specified territorial dominion precipitates a requirement for enhanced monitoring protocols."
                    </p>
                    <p className="text-green-600 text-sm">
                      <strong>Clear alternative</strong>: "The spread of chemical weapons in the region requires better
                      monitoring."
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-4">
                  <h5 className="font-medium text-blue-800 mb-2">Conclusion</h5>
                  <p className="text-blue-800">
                    Precision language isn't about academic elegance—it's about communicating intelligence that
                    decision-makers can trust and act upon appropriately. By eliminating vagueness, clearly
                    communicating certainty levels, distinguishing observation from inference, and avoiding terminology
                    pitfalls, intelligence professionals ensure their critical insights translate into effective action.
                  </p>
                </div>

                <p className="italic text-muted-foreground">
                  As intelligence professionals often note, in this field we don't have the luxury of saying "maybe"
                  when lives and national security hang in the balance. That's why what might be a casual "maybe" in
                  everyday conversation becomes a carefully calibrated statement of probability with appropriate
                  sourcing and confidence levels in intelligence reporting.
                </p>
              </TabsContent>

              <TabsContent value="sourcing" className="border rounded-md p-6">
                <h3 className="text-xl font-semibold mb-4">Sourcing and Attribution (5 min)</h3>
                <div className="flex items-center mb-4">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5 min</span>
                </div>

                <h4 className="text-lg font-medium mb-3">Introduction</h4>
                <p>
                  The credibility of intelligence analysis rests fundamentally on the quality of its sources and how
                  they are represented. This session examines how proper sourcing and attribution practices serve as the
                  foundation for trustworthy intelligence products. Without transparent and accurate attribution, even
                  the most insightful analysis becomes suspect.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">The Fundamentals of Source Documentation</h4>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
                  <h5 className="font-medium text-blue-800 mb-3">Why Sourcing Matters</h5>
                  <ul className="space-y-1 text-blue-800">
                    <li>• Enables readers to assess the strength of evidence</li>
                    <li>• Creates an audit trail for future analysis</li>
                    <li>• Facilitates appropriate weighting of information</li>
                    <li>• Protects against circular reporting</li>
                    <li>• Allows for source re-evaluation when new information emerges</li>
                    <li>• Distinguishes between facts, assumptions, and judgments</li>
                  </ul>
                </div>

                <h5 className="font-medium mb-3">Essential Source Information</h5>
                <p className="mb-3">For each significant piece of information, analysts should document:</p>
                <ol className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Origin type</strong> (HUMINT, SIGINT, OSINT, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Collection date</strong> (when the information was obtained)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      3
                    </span>
                    <span>
                      <strong>Reporting date</strong> (when it was processed into intelligence)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      4
                    </span>
                    <span>
                      <strong>Source reliability rating</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      5
                    </span>
                    <span>
                      <strong>Information credibility rating</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      6
                    </span>
                    <span>
                      <strong>Access level</strong> (direct, indirect, unique)
                    </span>
                  </li>
                </ol>

                <h4 className="text-lg font-medium mt-6 mb-3">Standard Source Evaluation Framework</h4>
                <p className="mb-4">
                  Intelligence communities typically use a standardized alphanumeric system to evaluate sources:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Source Reliability Scale</h5>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-3 border-b text-left text-sm">Rating</th>
                            <th className="py-2 px-3 border-b text-left text-sm">Description</th>
                            <th className="py-2 px-3 border-b text-left text-sm">Meaning</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">A</td>
                            <td className="py-2 px-3 border-b">Reliable</td>
                            <td className="py-2 px-3 border-b">
                              No doubt about authenticity, trustworthiness, or competency; history of complete
                              reliability
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">B</td>
                            <td className="py-2 px-3 border-b">Usually Reliable</td>
                            <td className="py-2 px-3 border-b">Minor doubts; history of mostly valid information</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">C</td>
                            <td className="py-2 px-3 border-b">Fairly Reliable</td>
                            <td className="py-2 px-3 border-b">
                              Doubts of authenticity, trustworthiness, or competency but has provided valid information
                              in the past
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">D</td>
                            <td className="py-2 px-3 border-b">Not Usually Reliable</td>
                            <td className="py-2 px-3 border-b">
                              Significant doubt; has provided valid information in the past
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">E</td>
                            <td className="py-2 px-3 border-b">Unreliable</td>
                            <td className="py-2 px-3 border-b">
                              Lack of authenticity, trustworthiness, and competency; history of invalid information
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">F</td>
                            <td className="py-2 px-3 border-b">Cannot Be Judged</td>
                            <td className="py-2 px-3 border-b">
                              No basis for evaluating the reliability of the source
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Information Credibility Scale</h5>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-3 border-b text-left text-sm">Rating</th>
                            <th className="py-2 px-3 border-b text-left text-sm">Description</th>
                            <th className="py-2 px-3 border-b text-left text-sm">Meaning</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">1</td>
                            <td className="py-2 px-3 border-b">Confirmed</td>
                            <td className="py-2 px-3 border-b">
                              Confirmed by other independent sources; logical; consistent with other information on the
                              subject
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">2</td>
                            <td className="py-2 px-3 border-b">Probably True</td>
                            <td className="py-2 px-3 border-b">
                              Not confirmed; logical; consistent with other information on the subject
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">3</td>
                            <td className="py-2 px-3 border-b">Possibly True</td>
                            <td className="py-2 px-3 border-b">
                              Not confirmed; reasonably logical; agrees with some other information on the subject
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">4</td>
                            <td className="py-2 px-3 border-b">Doubtfully True</td>
                            <td className="py-2 px-3 border-b">
                              Not confirmed; possible but not logical; no other information on the subject
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">5</td>
                            <td className="py-2 px-3 border-b">Improbable</td>
                            <td className="py-2 px-3 border-b">
                              Not confirmed; not logical; contradicted by other information on the subject
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b font-medium">6</td>
                            <td className="py-2 px-3 border-b">Cannot Be Judged</td>
                            <td className="py-2 px-3 border-b">
                              No basis exists for evaluating the validity of the information
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <p className="mb-6 text-sm bg-gray-50 p-3 rounded-md border border-gray-200">
                  A source evaluated as "B2" would be considered usually reliable, providing information assessed as
                  probably true.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">Appropriate Source Citation Techniques</h4>

                <h5 className="font-medium mb-3">Classification Considerations</h5>
                <p className="mb-3">When citing sources, analysts must balance transparency with protection:</p>
                <ul className="space-y-1 mb-4 list-disc pl-5">
                  <li>
                    <strong>Classified Reports</strong>: Use full source citations with appropriate classification
                    markings
                  </li>
                  <li>
                    <strong>Downgraded Reports</strong>: Use sanitized citations that protect methods and sources
                  </li>
                  <li>
                    <strong>Multiple Classification Levels</strong>: Segregate information by classification level
                  </li>
                </ul>

                <h5 className="font-medium mb-3">Source Citation Formats</h5>
                <p className="mb-3">Depending on the type of intelligence and classification requirements:</p>

                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h6 className="font-medium mb-1">OSINT Example:</h6>
                    <p className="text-sm">
                      "According to the Russian Defense Ministry's official statement (Tass News Agency, 12 March 2025)"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                      <h6 className="font-medium mb-1">HUMINT Example (Classified):</h6>
                      <p className="text-sm">
                        "Per HUMINT source REDROCK (B2), with direct access to the leadership council..."
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                      <h6 className="font-medium mb-1">HUMINT Example (Sanitized):</h6>
                      <p className="text-sm">"According to a source with access to senior leadership (B2)..."</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                      <h6 className="font-medium mb-1">SIGINT Example (Classified):</h6>
                      <p className="text-sm">"SIGINT collection on 15 April 2025 (message #29275-A) revealed..."</p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                      <h6 className="font-medium mb-1">SIGINT Example (Sanitized):</h6>
                      <p className="text-sm">"Technical collection indicates..."</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">The Hierarchy of Source Quality</h4>
                <p className="mb-3">
                  Not all sources are created equal. Understanding the hierarchy helps in appropriate weighting:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-md border border-green-200">
                    <h5 className="font-medium text-green-800 mb-2">Highest Quality</h5>
                    <ol className="space-y-1 text-green-800 pl-5 list-decimal">
                      <li>
                        <strong>Direct observation</strong> by trusted collector
                      </li>
                      <li>
                        <strong>Technical collection</strong> (imagery, signals) with minimal interpretation
                      </li>
                      <li>
                        <strong>Primary documents</strong> from the target
                      </li>
                      <li>
                        <strong>Direct participant</strong> testimony
                      </li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                    <h5 className="font-medium text-amber-800 mb-2">Medium Quality</h5>
                    <ol className="space-y-1 text-amber-800 pl-5 list-decimal" start={5}>
                      <li>
                        <strong>Witness accounts</strong> from non-participants
                      </li>
                      <li>
                        <strong>Expert analysis</strong> of primary materials
                      </li>
                      <li>
                        <strong>Official statements</strong> from involved parties
                      </li>
                    </ol>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Lower Quality</h5>
                    <ol className="space-y-1 text-red-800 pl-5 list-decimal" start={8}>
                      <li>
                        <strong>Second-hand reporting</strong> from individuals with access
                      </li>
                      <li>
                        <strong>Media reports</strong> with unclear sourcing
                      </li>
                      <li>
                        <strong>Analysis based on patterns</strong> without specific information
                      </li>
                      <li>
                        <strong>Hearsay</strong> several steps removed from events
                      </li>
                    </ol>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Communicating Source Limitations</h4>
                <p className="mb-3">Transparent acknowledgment of limitations builds credibility:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-2 text-green-700">Effective Limitation Statements</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="bg-green-50 p-3 rounded-md border border-green-100">
                        "This assessment is based primarily on HUMINT reporting that, while from multiple sources, lacks
                        technical confirmation."
                      </li>
                      <li className="bg-green-50 p-3 rounded-md border border-green-100">
                        "Our visibility into the decision-making process is limited by the absence of sources at the
                        highest levels."
                      </li>
                      <li className="bg-green-50 p-3 rounded-md border border-green-100">
                        "Reporting on this facility is over six months old and may not reflect current operations."
                      </li>
                      <li className="bg-green-50 p-3 rounded-md border border-green-100">
                        "This conclusion draws heavily from a single source (rated B2) with direct access."
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2 text-red-700">Ineffective Limitation Statements</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="bg-red-50 p-3 rounded-md border border-red-100">
                        "Sources might not be accurate" <span className="text-red-600">(too vague)</span>
                      </li>
                      <li className="bg-red-50 p-3 rounded-md border border-red-100">
                        "This intelligence has problems" <span className="text-red-600">(undefined issues)</span>
                      </li>
                      <li className="bg-red-50 p-3 rounded-md border border-red-100">
                        "We have bad collection in this area"{" "}
                        <span className="text-red-600">(undermines without specificity)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Handling Multiple Sources</h4>

                <div className="space-y-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-2">Confirming Sources</h5>
                    <p className="text-blue-800 mb-2">When sources confirm each other:</p>
                    <ol className="space-y-1 text-blue-800 pl-5 list-decimal">
                      <li>Verify true independence (not circular reporting)</li>
                      <li>Note correlation specifically in analysis</li>
                      <li>Indicate how confirmation strengthens confidence</li>
                      <li>Identify any collection bias that might affect multiple sources</li>
                    </ol>
                    <div className="mt-3 bg-white p-3 rounded-md border border-blue-100">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-sm italic">
                        "Three independent HUMINT sources (B2, C2, B3) and SIGINT collection from two separate platforms
                        corroborate increased military readiness."
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-2">Conflicting Sources</h5>
                    <p className="text-purple-800 mb-2">When sources contradict:</p>
                    <ol className="space-y-1 text-purple-800 pl-5 list-decimal">
                      <li>Explicitly acknowledge the contradiction</li>
                      <li>Evaluate sources based on reliability, recency, and access</li>
                      <li>Consider whether contradictions might reflect actual complexity</li>
                      <li>Present alternative explanations based on different source sets</li>
                      <li>Explain your reasoning for favoring certain sources</li>
                    </ol>
                    <div className="mt-3 bg-white p-3 rounded-md border border-purple-100">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-sm italic">
                        "While diplomatic reporting (C3) suggests willingness to compromise, SIGINT collection (A2) and
                        imagery analysis (A1) of military deployments contradict this assessment. We judge the technical
                        intelligence more reliable in this case because..."
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Source Diversity and Its Importance</h4>
                <p className="mb-3">Over-reliance on a single type of intelligence creates vulnerabilities:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-50 p-4 rounded-md border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-2">Benefits of Diverse Sourcing</h5>
                    <ul className="space-y-1 text-indigo-800">
                      <li>• Compensates for collection biases</li>
                      <li>• Provides confirmation across intelligence disciplines</li>
                      <li>• Reduces vulnerability to deception</li>
                      <li>• Fills gaps particular to each collection method</li>
                      <li>• Builds more robust confidence assessments</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-md border border-teal-200">
                    <h5 className="font-medium text-teal-800 mb-2">Addressing Source Diversity Issues</h5>
                    <ul className="space-y-2 text-teal-800">
                      <li className="italic">
                        "This assessment relies heavily on OSINT reporting due to limited HUMINT access."
                      </li>
                      <li className="italic">
                        "While technical collection is robust, we lack human sources who can speak to intentions."
                      </li>
                      <li className="italic">
                        "Our analysis triangulates satellite imagery, communications intercepts, and financial
                        transactions to compensate for limitations in any single stream."
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-4">
                  <h4 className="font-medium mb-2">Conclusion</h4>
                  <p>
                    Proper sourcing and attribution is not merely a procedural requirement—it's the foundation of
                    analytic credibility. By rigorously documenting where information comes from, evaluating its
                    reliability, acknowledging limitations, and seeking diverse confirmation, intelligence professionals
                    transform raw reports into assessments that decision-makers can trust.
                  </p>
                  <p className="mt-2">
                    In the intelligence world, an analysis is only as good as its sources, and proper attribution
                    ensures that those sources—and their strengths and weaknesses—are transparent to those who must act
                    on the information provided.
                  </p>
                </div>

                <p className="italic text-muted-foreground">
                  Like academic citations, but with more redacted names and fewer scholarly journals.
                </p>
              </TabsContent>

              <TabsContent value="scope" className="border rounded-md p-6">
                <h3 className="text-xl font-semibold mb-4">Scope Control (5 min)</h3>
                <div className="flex items-center mb-4">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5 min</span>
                </div>

                <h4 className="text-lg font-medium mb-3">Introduction</h4>
                <p>
                  Scope control is one of the most challenging aspects of intelligence analysis. Without disciplined
                  boundaries, reports can expand to include tangential information that dilutes key findings and
                  overwhelms decision-makers. This session explores practical methods for maintaining focus throughout
                  the analytical process, ensuring that intelligence products remain relevant, concise, and actionable.
                </p>

                <h4 className="text-lg font-medium mt-6 mb-3">Identifying Core Intelligence Questions</h4>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
                  <h5 className="font-medium text-blue-800 mb-3">The Intelligence Requirements Process</h5>
                  <p className="text-blue-800 mb-2">
                    Every intelligence product begins with requirements - the specific questions the analysis needs to
                    answer:
                  </p>
                  <ol className="space-y-1 text-blue-800 pl-5 list-decimal">
                    <li>
                      <strong>Primary Intelligence Questions (PIQs)</strong> - The fundamental issues driving the
                      analysis
                    </li>
                    <li>
                      <strong>Secondary Intelligence Questions (SIQs)</strong> - Supporting questions that help answer
                      the PIQs
                    </li>
                    <li>
                      <strong>Tertiary Questions</strong> - Background issues that provide necessary context
                    </li>
                  </ol>

                  <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
                    <p className="font-medium mb-2">Example Set:</p>
                    <ul className="space-y-2">
                      <li>
                        <strong>PIQ</strong>: What are Country X's intentions regarding Nuclear Facility Y over the next
                        6 months?
                      </li>
                      <li>
                        <strong>SIQs</strong>:
                        <ul className="pl-5 list-disc mt-1 space-y-1">
                          <li>What changes in personnel or security have occurred at Facility Y?</li>
                          <li>What statements have Country X officials made about nuclear development?</li>
                          <li>What resource allocations support nuclear activities?</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Tertiary</strong>:
                        <ul className="pl-5 list-disc mt-1 space-y-1">
                          <li>What is the history of Facility Y?</li>
                          <li>How does Country X typically message nuclear activities?</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 className="font-medium mb-3">Requirements Refinement Techniques</h5>
                <p className="mb-3">Before beginning research, refine requirements by:</p>
                <ol className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Clarifying ambiguous terms</strong> - Define exactly what "intentions," "capabilities," or
                      "threat" mean in this specific context
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Establishing boundaries</strong> - Determine explicit geographic, temporal, and topical
                      limits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      3
                    </span>
                    <span>
                      <strong>Prioritizing questions</strong> - Identify which requirements are most critical if time or
                      space constraints emerge
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      4
                    </span>
                    <span>
                      <strong>Confirming with consumers</strong> - Verify that the refined questions still address the
                      decision-maker's needs
                    </span>
                  </li>
                </ol>

                <h4 className="text-lg font-medium mt-6 mb-3">Distinguishing Essential vs. Peripheral Information</h4>

                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
                  <h5 className="font-medium text-amber-800 mb-3">The Relevance Test</h5>
                  <p className="text-amber-800 mb-2">For each piece of information, ask:</p>
                  <ul className="space-y-1 text-amber-800">
                    <li>• Does it directly answer a PIQ or SIQ?</li>
                    <li>• Does it significantly alter confidence in a key judgment?</li>
                    <li>• Does it provide necessary context without which a finding could be misinterpreted?</li>
                    <li>• Would its omission change the conclusions or recommendations?</li>
                  </ul>
                </div>

                <h5 className="font-medium mb-3">Information Categorization Framework</h5>
                <p className="mb-3">Categorize research findings into:</p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left">Category</th>
                        <th className="py-2 px-4 border-b text-left">Description</th>
                        <th className="py-2 px-4 border-b text-left">Treatment in Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Core</td>
                        <td className="py-2 px-4 border-b">Directly answers PIQs</td>
                        <td className="py-2 px-4 border-b">Featured prominently</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Supporting</td>
                        <td className="py-2 px-4 border-b">Validates or explains core information</td>
                        <td className="py-2 px-4 border-b">Included but secondary</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Contextual</td>
                        <td className="py-2 px-4 border-b">Provides necessary background</td>
                        <td className="py-2 px-4 border-b">Brief mention or appendix</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Peripheral</td>
                        <td className="py-2 px-4 border-b">Interesting but not essential</td>
                        <td className="py-2 px-4 border-b">Omit or place in annex</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Tangential</td>
                        <td className="py-2 px-4 border-b">Related but irrelevant to requirements</td>
                        <td className="py-2 px-4 border-b">Omit entirely</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200 mb-6">
                  <h5 className="font-medium text-indigo-800 mb-3">The "So What?" Test</h5>
                  <p className="text-indigo-800 mb-2">For each paragraph or section draft, explicitly answer:</p>
                  <ul className="space-y-1 text-indigo-800">
                    <li>• So what does this information tell us about the core questions?</li>
                    <li>• So what action or understanding does this enable?</li>
                    <li>• So what would happen if this were removed?</li>
                  </ul>
                  <p className="mt-3 text-indigo-800 text-sm">
                    If you cannot provide clear answers, the information likely falls into the peripheral or tangential
                    categories.
                  </p>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Common Scope Creep Triggers and Countermeasures</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Scope Creep Triggers</h5>
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        <strong>Analytical Momentum</strong> - The tendency to follow interesting threads regardless of
                        relevance
                      </li>
                      <li>
                        <strong>Sunk Cost Fallacy</strong> - Including information because you spent significant time
                        researching it
                      </li>
                      <li>
                        <strong>Novelty Bias</strong> - Overemphasizing new or unusual information
                      </li>
                      <li>
                        <strong>Expertise Showcase</strong> - Including details to demonstrate knowledge rather than
                        inform
                      </li>
                      <li>
                        <strong>Perfectionism</strong> - Attempting to create a comprehensive rather than focused
                        product
                      </li>
                      <li>
                        <strong>Fear of Missing Something</strong> - Including marginal information "just in case" it's
                        important
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Effective Countermeasures</h5>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-3 border-b text-left text-sm">Trigger</th>
                            <th className="py-2 px-3 border-b text-left text-sm">Countermeasure</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="py-2 px-3 border-b">Analytical Momentum</td>
                            <td className="py-2 px-3 border-b">
                              Return to requirements list before pursuing new research threads
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b">Sunk Cost Fallacy</td>
                            <td className="py-2 px-3 border-b">Have colleagues conduct blind relevance reviews</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b">Novelty Bias</td>
                            <td className="py-2 px-3 border-b">
                              Ask "Is this new information actually important to the PIQs?"
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b">Expertise Showcase</td>
                            <td className="py-2 px-3 border-b">
                              Create a separate "parking lot" document for interesting but non-essential details
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b">Perfectionism</td>
                            <td className="py-2 px-3 border-b">Set explicit page/word limits before starting</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 border-b">Fear of Missing</td>
                            <td className="py-2 px-3 border-b">Use annexes appropriately for secondary information</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Using Explicit Constraints</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Temporal Constraints</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>Explicit Timeframes</strong> - "This analysis covers January-June 2025"
                      </li>
                      <li>
                        • <strong>Coverage Period</strong> - "Based on information available as of 15 April 2025"
                      </li>
                      <li>
                        • <strong>Projection Limits</strong> - "Projections limited to a 12-month horizon"
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Geographic Constraints</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>Regional Focus</strong> - "This assessment addresses activities within Southeast Asia
                        only"
                      </li>
                      <li>
                        • <strong>Exclusion Statements</strong> - "Cross-border implications in Europe are beyond the
                        scope of this report"
                      </li>
                      <li>
                        • <strong>Locational Specificity</strong> - "Analysis limited to naval activities in the South
                        China Sea"
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h5 className="font-medium mb-2">Topical Constraints</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        ��� <strong>Subject Delimitation</strong> - "This report addresses military capabilities, not
                        political intentions"
                      </li>
                      <li>
                        • <strong>Issue Boundaries</strong> - "Economic factors are considered only where directly
                        impacting military decisions"
                      </li>
                      <li>
                        • <strong>Actor Limitations</strong> - "Focus on state-level actors; non-state actors addressed
                        in separate report"
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Identifying and Removing Tangential Information</h4>

                <div className="bg-red-50 p-5 rounded-lg border border-red-200 mb-6">
                  <h5 className="font-medium text-red-800 mb-3">Red Flags for Tangential Content</h5>
                  <p className="text-red-800 mb-2">Content is likely tangential when it:</p>
                  <ul className="space-y-1 text-red-800">
                    <li>• Requires extensive background explanation</li>
                    <li>• Connects to the topic through multiple indirect links</li>
                    <li>• Generates significant "interesting but not relevant" comments in review</li>
                    <li>• Introduces entirely new actors or concepts late in the report</li>
                    <li>• Creates narrative detours that require "returning to the main point"</li>
                  </ul>
                </div>

                <h5 className="font-medium mb-3">Tangential Content Examples</h5>

                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-md">
                    <h6 className="font-medium text-red-800 mb-1">Original Paragraph (with tangential content)</h6>
                    <p className="text-red-800">
                      "North Country's missile program director, General Kim, visited the research facility on March 15.
                      Kim, who previously served as the regional commander during the 2019 border crisis, where he
                      developed a reputation for aggressive tactics against neighboring states leading to three separate
                      diplomatic protests, has been instrumental in accelerating the missile development timeline."
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md">
                    <h6 className="font-medium text-green-800 mb-1">Revised Paragraph (tangential content removed)</h6>
                    <p className="text-green-800">
                      "North Country's missile program director, General Kim, visited the research facility on March 15.
                      Kim has been instrumental in accelerating the missile development timeline."
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Periodic Scope Checks</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Scope Check Intervals</h5>
                    <p className="mb-2">Implement formal scope reviews at key milestones:</p>
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>After initial research plan</li>
                      <li>At 25% draft completion</li>
                      <li>At 50% draft completion</li>
                      <li>At 75% draft completion</li>
                      <li>Before final review</li>
                    </ol>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">The Five-Minute Scope Check</h5>
                    <p className="mb-2">At each checkpoint, take five minutes to:</p>
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>Re-read the original intelligence requirements</li>
                      <li>Review the current outline or draft structure</li>
                      <li>Highlight sections with questionable relevance</li>
                      <li>Make immediate cuts for clearly tangential material</li>
                      <li>Flag borderline content for peer review</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-teal-50 p-5 rounded-lg border border-teal-200 mb-6">
                  <h5 className="font-medium text-teal-800 mb-3">Scope Check Questions</h5>
                  <p className="text-teal-800 mb-2">For each section, ask:</p>
                  <ul className="space-y-1 text-teal-800">
                    <li>• Does this directly support a key judgment?</li>
                    <li>• Is this the minimum necessary information?</li>
                    <li>• Does this belong in the main body or an annex?</li>
                    <li>• Have I included this because it's important or because it's interesting?</li>
                  </ul>
                </div>

                <h4 className="text-lg font-medium mt-6 mb-3">Leveraging Peer Review for Scope Control</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-medium mb-3">Specialized Scope Reviews</h5>
                    <p className="mb-2">Assign specific reviewers to focus exclusively on scope issues:</p>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Provide them with the original requirements document</li>
                      <li>Ask them to flag content that doesn't clearly connect to requirements</li>
                      <li>Have them identify areas where scope could be narrowed</li>
                      <li>Request suggestions for information that could be moved to annexes</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Scope Review Techniques</h5>
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        <strong>Requirement Mapping</strong>: Annotate each paragraph with the specific requirement it
                        addresses
                      </li>
                      <li>
                        <strong>Reverse Outline</strong>: Create an outline from the completed draft to check structure
                      </li>
                      <li>
                        <strong>Executive Summary Test</strong>: Draft the executive summary first, then ensure the full
                        document supports it without significant additions
                      </li>
                      <li>
                        <strong>Outsider Review</strong>: Have someone unfamiliar with the topic identify unclear or
                        seemingly unnecessary sections
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-4">
                  <h4 className="font-medium mb-2">Conclusion</h4>
                  <p>
                    Effective scope control is not about producing shorter reports—it's about delivering intelligence
                    that answers the right questions without distracting or overwhelming decision-makers. By rigorously
                    identifying core requirements, distinguishing essential information, imposing explicit constraints,
                    removing tangential content, conducting periodic scope checks, and leveraging peer review, analysts
                    can create products that directly serve their intended purpose.
                  </p>
                  <p className="mt-2">
                    Remember that the most important information in an intelligence product isn't what you know—it's
                    what the decision-maker needs to know. Sometimes this means setting aside that fascinating but
                    completely irrelevant detail you spent three days researching, knowing that while it won't appear in
                    this report, it contributes to your overall expertise and may prove valuable in future analyses.
                  </p>
                </div>

                <p className="italic text-muted-foreground">
                  The art of not including that fascinating but completely irrelevant detail you spent three days
                  researching.
                </p>
              </TabsContent>
            </Tabs>

            <h2>Conclusion</h2>
            <p>
              Mastering these four fundamental aspects of intelligence report writing—structure and organization,
              precision language, sourcing and attribution, and scope control—will significantly improve the
              effectiveness of your intelligence products. These skills form the foundation upon which all other
              intelligence communication is built.
            </p>

            <p>
              Remember that intelligence reports serve a practical purpose: to inform decisions. Every aspect of your
              report should contribute to that goal, from the overall structure to the specific words you choose.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-200">
              <h3 className="font-semibold text-xl mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Structure your reports using the inverted pyramid approach, with key judgments first</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Use precise language and standardized estimative terminology to communicate uncertainty</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Properly evaluate and cite sources using standardized reliability and credibility ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    Maintain strict scope control by focusing only on information that directly supports your key
                    judgments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    Remember that the purpose of intelligence reporting is to inform decisions, not to showcase your
                    research
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">In This Topic</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Structure and Organization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Precision Language
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Sourcing and Attribution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Scope Control
                  </a>
                </li>
              </ul>
            </div>

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
                    href="/topics/verbal-briefing-techniques"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Verbal Briefing Techniques
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
                <li>
                  <Link
                    href="/topics/estimative-language"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Estimative Language
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <WhatsNext
        moreLearning={{
          title: "Writing Executive Summaries",
          description: "Master the art of creating concise and impactful executive summaries",
          path: "/topics/writing-executive-summaries"
        }}
        advancedLearning={{
          title: "Verbal Briefing Techniques",
          description: "Learn how to effectively present intelligence findings verbally",
          path: "/topics/verbal-briefing-techniques"
        }}
        anotherTopic={{
          title: "Report Writing Learning Path",
          description: "Explore the complete intelligence report writing curriculum",
          path: "/learning-paths/report-writing"
        }}
      />
    </div>
  )
}
