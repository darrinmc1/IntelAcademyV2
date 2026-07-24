import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OSINT Workflow - The Intel Analyst Academy",
  description: "Learn systematic approaches to OSINT investigations and establish effective workflows.",
}

const topicContent = `import type { Metadata } from "next"
import { LessonContainer } from "@/components/lesson-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Search, FileText, Shield, AlertTriangle } from "lucide-react"
import {
MicroLesson,
MissionBriefing,
DeepDive,
FieldExercise,
ProTip,
JokeAside,
Debrief,
} from "@/components/micro-lesson"

export const metadata: Metadata = {
title: "OSINT Workflow and Methodology | The Intel Analyst Academy",
description: "Learn systematic approaches to OSINT investigations and establish effective workflows.",

By the end of this lesson, you'll be able to:

- Understand the six-phase OSINT investigation framework
- Develop comprehensive planning and requirements documents
- Identify and evaluate both primary and secondary intelligence sources
- Create and execute effective collection strategies with proper OPSEC
- Analyze and verify information systematically
- Document and report findings in a professional, legally defensible manner

"Turning chaotic internet browsing into systematic intelligence gathering"

Effective OSINT investigations require a structured approach to ensure coverage, maintain
evidence integrity, and produce reliable intelligence. A well-defined workflow helps analysts stay organized,
avoid missing critical information, and document their findings properly.

"Where you figure out what you're actually looking for before diving into the internet rabbit hole"

Requirements Definition

- **Intelligence Requirements:** What specific information is needed?

- **Target Definition:** Who or what is the subject of investigation?

- **Scope and Limitations:** What are the boundaries of the investigation?

- **Timeline:** When is the intelligence needed?

- **Legal and Ethical Constraints:** What limitations must be observed?

- **Success Criteria:** How will you know when you have enough information?

"Mapping the digital universe before you start exploring it"

Primary Sources
Direct sources of information about your target

- Official websites and publications
- Social media profiles
- Government databases
- Corporate filings
- News articles and press releases

Secondary Sources
Sources that reference or discuss your target

- Academic papers and research
- Industry reports
- Forum discussions
- Blog posts and articles
- Third-party databases

"Your battle plan for conquering the information landscape"

Search Strategy Development

#### Keyword Development

- Primary keywords and variations
- Alternative spellings and translations
- Related terms and synonyms
- Industry-specific terminology

#### Search Operators

- Boolean operators (AND, OR, NOT)
- Google dorking techniques
- Platform-specific search features
- Advanced filtering options

Operational Security Planning

- VPN and proxy configuration
- Research account setup
- Browser security settings
- Data storage and encryption
- Communication security

"The actual hunting and gathering phase, but with keyboards instead of spears"

Systematic Collection Process

- **Start Broad:** Begin with general searches to understand the landscape

- **Narrow Focus:** Use specific keywords and operators to drill down

- **Cross-Reference:** Verify information across multiple sources

- **Document Everything:** Maintain detailed logs of searches and findings

- **Follow Leads:** Pursue new information discovered during collection

- **Time Management:** Set limits to avoid endless rabbit holes

Just like a detective would never trust a "totally reliable" tipster without verification, we don't trust any single source. The internet is full of lies, so we gather evidence like we're building a case in court!

"Separating the wheat from the chaff, or in OSINT terms, facts from internet nonsense"

Information Analysis

- Source credibility assessment
- Information correlation
- Gap identification
- Pattern recognition
- Timeline construction

Verification Methods

- Multiple source confirmation
- Reverse image searches
- Metadata analysis
- Fact-checking resources
- Expert consultation

"Making your digital detective work look professional and legally defensible"

Documentation Requirements

#### Evidence Chain

- Source URLs and access timestamps
- Screenshots and archived copies
- Search queries and methodologies
- Tool configurations and settings

#### Analysis Documentation

- Analytical assumptions and limitations
- Confidence levels and reliability assessments
- Alternative hypotheses considered
- Recommendations for further investigation

"Your OSINT toolkit for staying organized and professional"

Essential Templates

- **Investigation Plan Template:** Standardized planning document

- **Source Evaluation Matrix:** Systematic source assessment

- **Collection Log:** Detailed record of searches and findings

- **Evidence Inventory:** Catalog of collected materials

- **Analysis Worksheet:** Structured analytical framework

- **Report Template:** Professional intelligence product format

Develop your own OSINT workflow checklist based on your specific requirements and environment. Regularly
review and update your processes based on lessons learned and new tools or techniques. A well-refined
workflow is often the difference between amateur internet searching and professional intelligence gathering.

)
`

export default function OsintworkflowPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="OSINT Workflow"
        subtitle="Learn systematic approaches to OSINT investigations and establish effective workflows."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="osint-workflow" />
      </MicroLesson>
    </LessonContainer>
  )
}
