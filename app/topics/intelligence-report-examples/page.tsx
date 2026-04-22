
import Link from "next/link"
import { ArrowLeft, Clock, FileText, CheckCircle, XCircle, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaticImage } from "@/components/static-image"
import { WhatsNext } from "@/components/whats-next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Intelligence Report Examples | The Intel Analyst Academy",
  description: "Learn from good and bad examples of intelligence reports.",
}

export default function IntelligenceReportExamplesPage() {
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
            <BreadcrumbLink href="/topics/intelligence-report-examples" isCurrentPage>
              Intelligence Report Examples
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">Intelligence Report Examples</h1>
        <p className="text-lg text-muted-foreground">
          Learning to distinguish between effective and ineffective intelligence reporting is a critical skill. This section provides examples of both good and bad reports, with explanations to help you understand the key principles in practice.
        </p>
      </div>

      <Tabs defaultValue="good-1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-4">
          <TabsTrigger value="good-1">Good Example 1</TabsTrigger>
          <TabsTrigger value="good-2">Good Example 2</TabsTrigger>
          <TabsTrigger value="good-3">Good Example 3</TabsTrigger>
          <TabsTrigger value="bad-1">Bad Example 1</TabsTrigger>
          <TabsTrigger value="bad-2">Bad Example 2</TabsTrigger>
          <TabsTrigger value="bad-3">Bad Example 3</TabsTrigger>
        </TabsList>

        {/* Good Report Examples */}
        <TabsContent value="good-1">
          <Card>
            <CardHeader>
              <CardTitle>Good Example 1: Strategic Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6">
                <p><strong>TO:</strong> National Security Advisor</p>
                <p><strong>FROM:</strong> Directorate of Intelligence</p>
                <p><strong>DATE:</strong> 10 July 2025</p>
                <p><strong>SUBJECT:</strong> (S) Assessment of Crimson Republic's Intentions in the Azure Sea</p>
                
                <p><strong>(S) Key Judgments</strong></p>
                <p>
                  We assess with <strong>high confidence</strong> that the Crimson Republic will increase its naval patrols in the Azure Sea over the next six months to assert its territorial claims and test the response of regional powers. We assess it is <strong>unlikely</strong> that this will lead to direct military conflict within this timeframe, but the risk of miscalculation will be significantly elevated.
                </p>

                <p>
                  - (S) The recent deployment of three new frigates and the expansion of naval facilities at Port Indigo are consistent with preparations for sustained, long-term operations.
                </p>
                <p>
                  - (S) Public statements from Crimson Republic officials, combined with state-controlled media narratives, are preparing the domestic population for a more assertive posture.
                </p>
                <p>
                  - (S) We judge it is <strong>likely</strong> that the Republic will initially use its coast guard to enforce its claims, reserving its navy for situations that escalate.
                </p>
              </div>
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-800">Why This Is a Good Report</AlertTitle>
                <AlertDescription className="text-green-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>BLUF (Bottom Line Up Front):</strong> The key judgments are presented immediately, allowing a time-constrained reader to grasp the essential information instantly.</li>
                    <li><strong>Use of Estimative Language:</strong> Terms like &quot;high confidence,&quot; &quot;unlikely,&quot; and &quot;likely&quot; are used correctly to convey the analyst&apos;s level of certainty.</li>
                    <li><strong>Clear and Concise:</strong> The language is direct and to the point. There is no unnecessary jargon or filler.</li>
                    <li><strong>Strategic Focus:</strong> The report focuses on the &quot;so what&quot; – the implications for regional stability and the risk of miscalculation – which is exactly what a National Security Advisor needs to know.</li>
                    <li><strong>Evidence-Based:</strong> The judgments are clearly linked to specific pieces of evidence (frigate deployment, public statements).</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="good-2">
          <Card>
            <CardHeader>
              <CardTitle>Good Example 2: Operational Update</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6">
                <p><strong>TO:</strong> Commander, Joint Task Force Griffin</p>
                <p><strong>FROM:</strong> J2 Intelligence Directorate</p>
                <p><strong>DATE:</strong> 10 July 2025, 0600Z</p>
                <p><strong>SUBJECT:</strong> (TS) Insurgent Activity in the Aridan Valley, 09 July 2025</p>
                
                <p><strong>1. (TS) Summary:</strong> The Aridan Valley Insurgent Network (AVIN) conducted three attacks against supply convoys yesterday, 09 July. We assess with <strong>moderate confidence</strong> that AVIN will attempt a similar attack on the main supply route (MSR) north of Checkpoint Sierra within the next 48 hours, likely targeting fuel tankers.</p>

                <p><strong>2. (TS) Details of Activity:</strong></p>
                <p>  - 091030Z: IED attack on logistics convoy at grid 12345678. Two vehicles damaged, no casualties.</p>
                <p>  - 091400Z: Small arms fire on patrol near village of Kasra. One friendly WIA.</p>
                <p>  - 092130Z: Mortar attack on Firebase Phoenix. No damage or casualties.</p>

                <p><strong>3. (TS) Assessment:</strong> SIGINT intercepts from late yesterday indicate AVIN leadership was pleased with the disruption and is planning a "more significant" attack. A HUMINT source (rated B2) reported seeing AVIN members conducting surveillance on the MSR near Checkpoint Sierra. The focus on fuel tankers is assessed based on intercepted communications discussing the operational impact of fuel shortages.</p>
              </div>
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-800">Why This Is a Good Report</AlertTitle>
                <AlertDescription className="text-green-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Actionable Intelligence:</strong> The report provides a specific, time-sensitive warning that the commander can act on (e.g., by increasing patrols on the MSR).</li>
                    <li><strong>Operational Relevance:</strong> The information is directly relevant to the commander&apos;s mission and area of responsibility.</li>
                    <li><strong>Structured for Clarity:</strong> The use of numbered paragraphs and clear headings makes the report easy to read and digest quickly.</li>
                    <li><strong>Source Evaluation:</strong> It includes information about the sources (SIGINT, HUMINT) and their reliability (B2 rating), allowing the commander to weigh the evidence appropriately.</li>
                    <li><strong>Fusion of Intelligence:</strong> It effectively combines different intelligence disciplines (SIGINT and HUMINT) to build a more complete picture.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="good-3">
          <Card>
            <CardHeader>
              <CardTitle>Good Example 3: Tactical Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6">
                <p><strong>TYPE:</strong> Tactical Alert</p>
                <p><strong>PRECEDENCE:</strong> FLASH</p>
                <p><strong>DTG:</strong> 101100Z JUL 25</p>
                <p><strong>SUBJECT:</strong> (U) Imminent IED Threat, Route Irish</p>
                
                <p>
                  (U) A trusted local source reports observing two individuals planting a suspected IED at approximately 101045Z JUL 25.
                </p>
                <p>
                  (U) Location: Grid 98765432, vicinity of the culvert 500m east of Checkpoint 4.
                </p>
                <p>
                  (U) Description: Two military-aged males in a blue sedan.
                </p>
                <p>
                  (U) Action: All patrols avoid Route Irish until cleared by EOD.
                </p>
              </div>
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-800">Why This Is a Good Report</AlertTitle>
                <AlertDescription className="text-green-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Timeliness:</strong> The FLASH precedence indicates the urgency of the information.</li>
                    <li><strong>Extreme Conciseness:</strong> The report contains only the most essential information needed for immediate action. There are no wasted words.</li>
                    <li><strong>Clear, Direct Action:</strong> It tells the recipient exactly what to do ("avoid Route Irish").</li>
                    <li><strong>Specificity:</strong> It provides a precise location and description of the threat.</li>
                    <li><strong>Audience-Appropriate:</strong> It is formatted for a tactical user who needs to make a split-second decision.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bad Report Examples */}
        <TabsContent value="bad-1">
          <Card>
            <CardHeader>
              <CardTitle>Bad Example 1: Vague and Unfocused</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6 bg-red-50">
                <p><strong>SUBJECT:</strong> Situation in the Crimson Republic</p>
                <p>
                  It seems that the Crimson Republic is continuing its various activities. There are a number of reports that suggest things might be changing in the region. Some sources have indicated that naval movements could be significant, and this appears to be a point of interest. The leadership has made several speeches, and these are being analyzed for their meaning. It is possible that their intentions are becoming more assertive. This could lead to a number of outcomes, and it is important to keep watching the situation as it develops. We believe that this is a situation that warrants further attention.
                </p>
              </div>
              <Alert variant="destructive" className="bg-red-50 border-red-200">
                <XCircle className="h-5 w-5 text-red-600" />
                <AlertTitle className="text-red-800">Why This Is a Bad Report</AlertTitle>
                <AlertDescription className="text-red-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>No BLUF:</strong> The main point is completely buried, if one exists at all. The reader is left wondering what the report is trying to say.</li>
                    <li><strong>Vague Language:</strong> Words like "seems," "various activities," "number of reports," "might be," and "possible" are "weasel words" that convey almost no useful information.</li>
                    <li><strong>No Evidence:</strong> The report mentions "reports" and "sources" but provides no specifics.</li>
                    <li><strong>No Assessment:</strong> It fails to provide a clear judgment or assessment of what is likely to happen. It simply states that things are happening.</li>
                    <li><strong>Useless Conclusion:</strong> Stating that the situation "warrants further attention" is a classic sign of a report that has nothing to say.</li>
                  </ul>
                </AlertDescription>
              </Alert>
              <Alert variant="default" className="bg-yellow-50 border-yellow-200">
                <TrendingUp className="h-5 w-5 text-yellow-700" />
                <AlertTitle className="text-yellow-800">How to Improve It</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Start with an Intelligence Question:</strong> The analyst should first define what question they are trying to answer (e.g., "What are the Crimson Republic's intentions in the Azure Sea?").</li>
                    <li><strong>Formulate a Clear BLUF:</strong> Write a one-sentence summary that directly answers the intelligence question with an assessment.</li>
                    <li><strong>Use Precise Language:</strong> Replace vague terms with specific details and estimative language (e.g., instead of "naval movements could be significant," write "The deployment of three new frigates indicates...").</li>
                    <li><strong>Provide Evidence:</strong> Link every assessment back to a specific piece of information or source.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bad-2">
          <Card>
            <CardHeader>
              <CardTitle>Bad Example 2: Buried Lead & Poor Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6 bg-red-50">
                <p><strong>SUBJECT:</strong> Analysis of AVIN Activities</p>
                <p>
                  The Aridan Valley has long been a hotbed of insurgent activity. The Aridan Valley Insurgent Network (AVIN) has operated in the region for several years, primarily focusing on disrupting supply lines. Historically, their attacks have been small-scale. On 09 July, several events occurred. At 1030Z, a logistics convoy was struck by an IED at grid 12345678. Later, at 1400Z, a patrol took small arms fire near Kasra. Finally, Firebase Phoenix was targeted by mortars at 2130Z. Analysis of these events, combined with other intelligence, suggests a change in tactics. SIGINT has revealed that AVIN leadership was pleased with the disruption. Furthermore, a human source has reported seeing AVIN members conducting surveillance on the MSR near Checkpoint Sierra. Therefore, based on all this information, it is our assessment that AVIN will likely attempt an attack on the MSR north of Checkpoint Sierra within 48 hours.
                </p>
              </div>
              <Alert variant="destructive" className="bg-red-50 border-red-200">
                <XCircle className="h-5 w-5 text-red-600" />
                <AlertTitle className="text-red-800">Why This Is a Bad Report</AlertTitle>
                <AlertDescription className="text-red-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Buried Lead:</strong> The most important piece of information—the warning of a future attack—is at the very end of the paragraph. A busy commander might miss it entirely.</li>
                    <li><strong>Academic Structure:</strong> The report is written like a mystery novel or an academic paper, building a case before revealing the conclusion. Intelligence writing must do the opposite.</li>
                    <li><strong>Lack of Headings:</strong> The single block of text makes it difficult to scan for key information.</li>
                    <li><strong>Inefficient:</strong> It forces the reader to process a lot of background information before getting to the point.</li>
                  </ul>
                </AlertDescription>
              </Alert>
              <Alert variant="default" className="bg-yellow-50 border-yellow-200">
                <TrendingUp className="h-5 w-5 text-yellow-700" />
                <AlertTitle className="text-yellow-800">How to Improve It</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Adopt the Inverted Pyramid:</strong> Restructure the report to put the most critical information first. The assessment of the future attack should be the very first sentence.</li>
                    <li><strong>Use Headings and Sections:</strong> Break the report into logical sections like "Summary," "Details of Activity," and "Assessment," as seen in Good Example 2.</li>
                    <li><strong>Create a BLUF:</strong> The first sentence should be a clear, concise summary of the most important finding.</li>
                    <li><strong>Use Bullet Points:</strong> The list of attacks would be much easier to read as a bulleted or numbered list.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bad-3">
          <Card>
            <CardHeader>
              <CardTitle>Bad Example 3: Biased and Un-sourced</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none border rounded-md p-6 bg-red-50">
                <p><strong>SUBJECT:</strong> The Obvious Threat from the Crimson Republic</p>
                <p>
                  It is absolutely clear that the Crimson Republic is an aggressive and expansionist power that will stop at nothing to achieve its goals. Their recent naval deployments are undeniable proof that they are preparing for war. We have seen them do this before, and every time it means they are about to attack. To suggest they are only conducting patrols is naive and ignores the obvious danger. The only possible conclusion is that they intend to launch a full-scale invasion of their neighbors within the next month. We must act now before it&apos;s too late.
                </p>
              </div>
              <Alert variant="destructive" className="bg-red-50 border-red-200">
                <XCircle className="h-5 w-5 text-red-600" />
                <AlertTitle className="text-red-800">Why This Is a Bad Report</AlertTitle>
                <AlertDescription className="text-red-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Emotional and Biased Language:</strong> Words like &quot;obvious,&quot; &quot;absolutely clear,&quot; &quot;undeniable proof,&quot; and &quot;naive&quot; are signs of advocacy, not objective analysis.</li>
                    <li><strong>Lack of Sourcing:</strong> The report makes bold claims without citing any evidence or sources. "We have seen them do this before" is not a substitute for specific, sourced examples.</li>
                    <li><strong>Presents Opinion as Fact:</strong> The conclusion (&quot;they intend to launch a full-scale invasion&quot;) is stated as a certainty, not an assessment.</li>
                    <li><strong>No Consideration of Alternatives:</strong> It dismisses other possibilities (&quot;to suggest they are only conducting patrols is naive&quot;) without any analysis, which is a classic indicator of confirmation bias.</li>
                    <li><strong>Advocacy, Not Analysis:</strong> The final sentence ("We must act now...") is a policy recommendation, which is generally inappropriate for an intelligence report unless specifically requested.</li>
                  </ul>
                </AlertDescription>
              </Alert>
              <Alert variant="default" className="bg-yellow-50 border-yellow-200">
                <TrendingUp className="h-5 w-5 text-yellow-700" />
                <AlertTitle className="text-yellow-800">How to Improve It</AlertTitle>
                <AlertDescription className="text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Use Neutral Language:</strong> Strip out all emotional and subjective words. The analysis should be dispassionate.</li>
                    <li><strong>Cite Evidence:</strong> Every assessment must be linked to a source (e.g., "Satellite imagery from 08 July shows...").</li>
                    <li><strong>Use Estimative Language:</strong> Frame conclusions as assessments with clear levels of confidence (e.g., &quot;We assess with high confidence...&quot;).</li>
                    <li><strong>Acknowledge Alternatives:</strong> A good report will consider other plausible explanations and explain why the primary conclusion is more likely.</li>
                    <li><strong>Separate Analysis from Policy:</strong> The analyst's job is to assess the situation, not to recommend a course of action. Stick to the analysis.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <WhatsNext
        title="Continue Your Learning"
        items={[
          {
            title: "Intelligence Report Fundamentals",
            description: "Review the core principles of effective intelligence reporting.",
            href: "/topics/intelligence-report-fundamentals",
            icon: "GraduationCap",
          },
          {
            title: "Report Writing Pitfalls",
            description: "Learn about common mistakes to avoid in your writing.",
            href: "/topics/report-writing-pitfalls",
            icon: "FileText",
          },
          {
            title: "Cognitive Biases",
            description: "Understand the mental shortcuts that can lead to analytical errors.",
            href: "/topics/cognitive-biases",
            icon: "BrainCircuit",
          },
        ]}
      />
    </div>
  )
}
