import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tactical Reports - The Intel Analyst Academy",
  description: "Learn how to write tactical intelligence reports to support immediate operations.",
}

const topicContent = `Learn how to write tactical intelligence reports to support immediate operations and decision-making.


## What You'll Learn

Structure and format of tactical reports

Time-sensitive reporting techniques

Operational intelligence requirements

Clear and actionable language

## Overview

Tactical reports are time-sensitive intelligence products designed to support immediate
operational decisions. Unlike strategic reports, tactical reports focus on near-term
threats, opportunities, and operational requirements.

## Key Components
### 1. Executive Summary

Begin with a concise summary of the most critical information that decision-makers
need to know immediately.

### 2. Situation Assessment

Provide context about the current operational environment and relevant background
information.

### 3. Threat Analysis

Identify and assess immediate threats, including capability, intent, and timeline.

### 4. Recommendations

Offer specific, actionable recommendations based on the intelligence findings.

## The Purpose of Tactical Reports

Tactical intelligence reports serve a fundamentally different purpose from strategic assessments. While strategic intelligence informs long-term policy and planning, tactical reports support immediate operational decisions - often at the unit level, with timelines measured in hours or days rather than months or years.

- **Actionable Timeliness:** A tactical report that arrives after the operation has commenced has lost most of its value. Speed of production is the defining characteristic of effective tactical reporting.
- **Specificity:** Tactical reports focus on specific targets, locations, and timeframes. Where a strategic assessment might analyse "trends in terrorist financing," a tactical report identifies "the location of a known financier's safe house as of 0600 hours."
- **Direct Consumer:** The primary audience is the operator or tactical commander who will act on the intelligence. This shapes the format, language, and level of detail.

## Structure of a Tactical Report

While formats vary between agencies and mission types, effective tactical reports share common structural elements:

1. **Heading:** Classification level, report series identifier, date-time group, and warn order (a summary of the most critical information).
2. **Source Reliability:** A clear statement of the source and its assessed reliability, using standard evaluation scales (e.g., A-F for source reliability, 1-6 for information credibility).
3. **Situation Overview:** A concise description of the current situation relevant to the operational question. This section should be no more than a few sentences.
4. **Target Information:** Specific details about the target - location (with grid coordinates if applicable), activity, numbers, equipment, movements, and predicted intent.
5. **Assessment:** The analyst's judgement about likely developments, recommended courses of action, and confidence level in the assessment.
6. **Administrative Details:** Dissemination restrictions, handling instructions, and point of contact for follow-up questions.

## Speed vs. Accuracy

Tactical intelligence exists in permanent tension between speed and accuracy:

- **The 80% Rule:** Many tactical intelligence units operate on the principle that an 80% accurate report delivered in time to act is more valuable than a 100% accurate report delivered after the operation. This is a calculated risk - the analyst must clearly communicate their confidence level so the operator can factor it into their risk assessment.
- **Source Limitations:** Tactical reports often rely on a single source or a limited number of sources. Analysts must resist the temptation to present single-source reporting as confirmed fact.
- **Update Culture:** Tactical reporting should be dynamic. The first report may be fragmentary; subsequent reports should refine, correct, and expand the initial picture. Analysts must be comfortable issuing corrections and updates without ego.

## Dissemination and Handling

Tactical intelligence is only useful if it reaches the right consumer at the right time through the right channel:

- **Digital Dissemination:** Modern tactical reporting systems deliver intelligence directly to handheld devices and vehicle-mounted terminals in near real-time.
- **Verbal Briefings:** For time-critical tactical intelligence, a verbal briefing delivered face-to-face or over encrypted voice channels may precede the written report.
- **Classification and Caveats:** Tactical reports often contain sensitive sources or methods. Proper classification, handling instructions, and dissemination restrictions protect both the intelligence and the sources who provided it.

## Worked Example: Rewriting a Weak Report

Here is a first draft from a junior analyst, written at 0415 after an overnight report from the security contractor at a mine site:

"Overnight there were some reports of suspicious activity near the eastern fence. A vehicle may have been seen and some people were possibly observed. It is assessed that this could potentially indicate a threat to the site and further monitoring is recommended."

Every sentence hedges, nothing is specific, and the reader cannot act on any of it. Here is the same report rewritten:

**Summary:** Two people in a white utility vehicle were seen at the eastern perimeter fence at 0240 and left at 0255. Likely reconnaissance or an attempted theft. Recommend a fence inspection at first light and an extra patrol on the eastern perimeter tonight.

**Source:** Site security contractor, direct observation via thermal camera. Usually reliable. Footage reviewed by the analyst.

**Situation:** Two copper cable thefts were reported at neighbouring sites in the past month. The eastern fence borders an unsealed public road with no lighting.

**Detail:** The vehicle stopped near fence post E14. Both people spent about ten minutes at the fence. No breach was seen on camera, but the camera does not cover the base of the fence at E14.

**Assessment:** Likely reconnaissance ahead of a theft attempt, moderate confidence. The timing and location match the pattern at neighbouring sites. It may have been unrelated, such as people stopping on the road, but the time spent at the fence makes that less likely.

**Gaps:** No registration captured. No confirmation of whether the fence was tampered with.

**Recommendations:** Inspect the fence at E14 at first light. Add a patrol on the eastern perimeter between 0100 and 0400 for the next three nights. Adjust the camera to cover the base of the fence.

The rewrite is longer, but it is faster to use. The site manager can read the summary in ten seconds and know what to do before breakfast.

## Checklist Before Release

- Can the reader act on the summary alone?
- Is every time stated, with the time zone if there is any doubt?
- Is the source and its reliability stated in plain terms?
- Have I separated what was seen from what I think it means?
- Have I listed the gaps?
- Are the recommendations specific enough to assign to a named person?
- Is the handling or dissemination restriction correct?

## Common Mistakes

- **Hedging every sentence.** One clear confidence statement in the assessment is enough. Stacking "possibly" on "may" on "could" tells the reader you are nervous, not how likely something is.
- **Writing the story in order.** Chronology belongs in the detail section. The summary leads with what matters.
- **Vague recommendations.** "Further monitoring" is not a task. Who monitors what, where, and until when?
- **Forgetting the follow-up.** If the fence check finds a cut wire, the next report should say so and update the assessment.

## Exercise

Find a short news report about a local incident, such as a break-in, a road closure or a protest. Rewrite it as a tactical report using the structure above: a summary of no more than three sentences, a stated source, an assessment with a confidence level, the gaps, and two specific recommendations.
`

export default function TacticalreportsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Tactical Reports"
        subtitle="Learn how to write tactical intelligence reports to support immediate operations."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="tactical-reports" />
      </MicroLesson>
    </LessonContainer>
  )
}
