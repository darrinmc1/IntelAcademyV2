import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intelligence Report Examples - The Intel Analyst Academy",
  description: "Learn from good and bad examples of intelligence reports.",
}

const topicContent = `Breadcrumb,
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

Home

Topics

Report Writing

Intelligence Report Examples

Back to Report Writing

# Intelligence Report Examples

Learning to distinguish between effective and ineffective intelligence reporting is a critical skill. This section provides examples of both good and bad reports, with explanations to help you understand the key principles in practice.

Good Example 1
Good Example 2
Good Example 3
Bad Example 1
Bad Example 2
Bad Example 3

{/* Good Report Examples */}

Good Example 1: Strategic Assessment

**TO:** National Security Advisor
**FROM:** Directorate of Intelligence
**DATE:** 10 July 2025
**SUBJECT:** (S) Assessment of Crimson Republic's Intentions in the Azure Sea

**(S) Key Judgments**

We assess with **high confidence** that the Crimson Republic will increase its naval patrols in the Azure Sea over the next six months to assert its territorial claims and test the response of regional powers. We assess it is **unlikely** that this will lead to direct military conflict within this timeframe, but the risk of miscalculation will be significantly elevated.

- (S) The recent deployment of three new frigates and the expansion of naval facilities at Port Indigo are consistent with preparations for sustained, long-term operations.

- (S) Public statements from Crimson Republic officials, combined with state-controlled media narratives, are preparing the domestic population for a more assertive posture.

- (S) We judge it is **likely** that the Republic will initially use its coast guard to enforce its claims, reserving its navy for situations that escalate.

Why This Is a Good Report

- **BLUF (Bottom Line Up Front):** The key judgments are presented immediately, allowing a time-constrained reader to grasp the essential information instantly.
- **Use of Estimative Language:** Terms like "high confidence," "unlikely," and "likely" are used correctly to convey the analyst's level of certainty.
- **Clear and Concise:** The language is direct and to the point. There is no unnecessary jargon or filler.
- **Strategic Focus:** The report focuses on the "so what" – the implications for regional stability and the risk of miscalculation – which is exactly what a National Security Advisor needs to know.
- **Evidence-Based:** The judgments are clearly linked to specific pieces of evidence (frigate deployment, public statements).

Good Example 2: Operational Update

**TO:** Commander, Joint Task Force Griffin
**FROM:** J2 Intelligence Directorate
**DATE:** 10 July 2025, 0600Z
**SUBJECT:** (TS) Insurgent Activity in the Aridan Valley, 09 July 2025

**1. (TS) Summary:** The Aridan Valley Insurgent Network (AVIN) conducted three attacks against supply convoys yesterday, 09 July. We assess with **moderate confidence** that AVIN will attempt a similar attack on the main supply route (MSR) north of Checkpoint Sierra within the next 48 hours, likely targeting fuel tankers.

**2. (TS) Details of Activity:**
- 091030Z: IED attack on logistics convoy at grid 12345678. Two vehicles damaged, no casualties.
- 091400Z: Small arms fire on patrol near village of Kasra. One friendly WIA.
- 092130Z: Mortar attack on Firebase Phoenix. No damage or casualties.

**3. (TS) Assessment:** SIGINT intercepts from late yesterday indicate AVIN leadership was pleased with the disruption and is planning a "more significant" attack. A HUMINT source (rated B2) reported seeing AVIN members conducting surveillance on the MSR near Checkpoint Sierra. The focus on fuel tankers is assessed based on intercepted communications discussing the operational impact of fuel shortages.

Why This Is a Good Report

- **Actionable Intelligence:** The report provides a specific, time-sensitive warning that the commander can act on (e.g., by increasing patrols on the MSR).
- **Operational Relevance:** The information is directly relevant to the commander's mission and area of responsibility.
- **Structured for Clarity:** The use of numbered paragraphs and clear headings makes the report easy to read and digest quickly.
- **Source Evaluation:** It includes information about the sources (SIGINT, HUMINT) and their reliability (B2 rating), allowing the commander to weigh the evidence appropriately.
- **Fusion of Intelligence:** It effectively combines different intelligence disciplines (SIGINT and HUMINT) to build a more complete picture.

Good Example 3: Tactical Alert

**TYPE:** Tactical Alert
**PRECEDENCE:** FLASH
**DTG:** 101100Z JUL 25
**SUBJECT:** (U) Imminent IED Threat, Route Irish

(U) A trusted local source reports observing two individuals planting a suspected IED at approximately 101045Z JUL 25.

(U) Location: Grid 98765432, vicinity of the culvert 500m east of Checkpoint 4.

(U) Description: Two military-aged males in a blue sedan.

(U) Action: All patrols avoid Route Irish until cleared by EOD.

Why This Is a Good Report

- **Timeliness:** The FLASH precedence indicates the urgency of the information.
- **Extreme Conciseness:** The report contains only the most essential information needed for immediate action. There are no wasted words.
- **Clear, Direct Action:** It tells the recipient exactly what to do ("avoid Route Irish").
- **Specificity:** It provides a precise location and description of the threat.
- **Audience-Appropriate:** It is formatted for a tactical user who needs to make a split-second decision.

{/* Bad Report Examples */}

Bad Example 1: Vague and Unfocused

**SUBJECT:** Situation in the Crimson Republic

It seems that the Crimson Republic is continuing its various activities. There are a number of reports that suggest things might be changing in the region. Some sources have indicated that naval movements could be significant, and this appears to be a point of interest. The leadership has made several speeches, and these are being analyzed for their meaning. It is possible that their intentions are becoming more assertive. This could lead to a number of outcomes, and it is important to keep watching the situation as it develops. We believe that this is a situation that warrants further attention.

Why This Is a Bad Report

- **No BLUF:** The main point is completely buried, if one exists at all. The reader is left wondering what the report is trying to say.
- **Vague Language:** Words like "seems," "various activities," "number of reports," "might be," and "possible" are "weasel words" that convey almost no useful information.
- **No Evidence:** The report mentions "reports" and "sources" but provides no specifics.
- **No Assessment:** It fails to provide a clear judgment or assessment of what is likely to happen. It simply states that things are happening.
- **Useless Conclusion:** Stating that the situation "warrants further attention" is a classic sign of a report that has nothing to say.

How to Improve It

- **Start with an Intelligence Question:** The analyst should first define what question they are trying to answer (e.g., "What are the Crimson Republic's intentions in the Azure Sea?").
- **Formulate a Clear BLUF:** Write a one-sentence summary that directly answers the intelligence question with an assessment.
- **Use Precise Language:** Replace vague terms with specific details and estimative language (e.g., instead of "naval movements could be significant," write "The deployment of three new frigates indicates...").
- **Provide Evidence:** Link every assessment back to a specific piece of information or source.

Bad Example 2: Buried Lead & Poor Structure

**SUBJECT:** Analysis of AVIN Activities

The Aridan Valley has long been a hotbed of insurgent activity. The Aridan Valley Insurgent Network (AVIN) has operated in the region for several years, primarily focusing on disrupting supply lines. Historically, their attacks have been small-scale. On 09 July, several events occurred. At 1030Z, a logistics convoy was struck by an IED at grid 12345678. Later, at 1400Z, a patrol took small arms fire near Kasra. Finally, Firebase Phoenix was targeted by mortars at 2130Z. Analysis of these events, combined with other intelligence, suggests a change in tactics. SIGINT has revealed that AVIN leadership was pleased with the disruption. Furthermore, a human source has reported seeing AVIN members conducting surveillance on the MSR near Checkpoint Sierra. Therefore, based on all this information, it is our assessment that AVIN will likely attempt an attack on the MSR north of Checkpoint Sierra within 48 hours.

Why This Is a Bad Report

- **Buried Lead:** The most important piece of information - the warning of a future attack - is at the very end of the paragraph. A busy commander might miss it entirely.
- **Academic Structure:** The report is written like a mystery novel or an academic paper, building a case before revealing the conclusion. Intelligence writing must do the opposite.
- **Lack of Headings:** The single block of text makes it difficult to scan for key information.
- **Inefficient:** It forces the reader to process a lot of background information before getting to the point.

How to Improve It

- **Adopt the Inverted Pyramid:** Restructure the report to put the most critical information first. The assessment of the future attack should be the very first sentence.
- **Use Headings and Sections:** Break the report into logical sections like "Summary," "Details of Activity," and "Assessment," as seen in Good Example 2.
- **Create a BLUF:** The first sentence should be a clear, concise summary of the most important finding.
- **Use Bullet Points:** The list of attacks would be much easier to read as a bulleted or numbered list.

Bad Example 3: Biased and Un-sourced

**SUBJECT:** The Obvious Threat from the Crimson Republic

It is absolutely clear that the Crimson Republic is an aggressive and expansionist power that will stop at nothing to achieve its goals. Their recent naval deployments are undeniable proof that they are preparing for war. We have seen them do this before, and every time it means they are about to attack. To suggest they are only conducting patrols is naive and ignores the obvious danger. The only possible conclusion is that they intend to launch a full-scale invasion of their neighbors within the next month. We must act now before it's too late.

Why This Is a Bad Report

- **Emotional and Biased Language:** Words like "obvious," "absolutely clear," "undeniable proof," and "naive" are signs of advocacy, not objective analysis.
- **Lack of Sourcing:** The report makes bold claims without citing any evidence or sources. "We have seen them do this before" is not a substitute for specific, sourced examples.
- **Presents Opinion as Fact:** The conclusion ("they intend to launch a full-scale invasion") is stated as a certainty, not an assessment.
- **No Consideration of Alternatives:** It dismisses other possibilities ("to suggest they are only conducting patrols is naive") without any analysis, which is a classic indicator of confirmation bias.
- **Advocacy, Not Analysis:** The final sentence ("We must act now...") is a policy recommendation, which is generally inappropriate for an intelligence report unless specifically requested.

How to Improve It

- **Use Neutral Language:** Strip out all emotional and subjective words. The analysis should be dispassionate.
- **Cite Evidence:** Every assessment must be linked to a source (e.g., "Satellite imagery from 08 July shows...").
- **Use Estimative Language:** Frame conclusions as assessments with clear levels of confidence (e.g., "We assess with high confidence...").
- **Acknowledge Alternatives:** A good report will consider other plausible explanations and explain why the primary conclusion is more likely.
- **Separate Analysis from Policy:** The analyst's job is to assess the situation, not to recommend a course of action. Stick to the analysis.

)
`

export default function IntelligencereportexamplesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Intelligence Report Examples"
        subtitle="Learn from good and bad examples of intelligence reports."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="intelligence-report-examples" />
      </MicroLesson>
    </LessonContainer>
  )
}
