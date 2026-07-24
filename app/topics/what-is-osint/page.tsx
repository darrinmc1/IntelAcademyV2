import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is OSINT - The Intel Analyst Academy",
  description: "Learn about what is osint in intelligence analysis.",
}

const topicContent = `# What is OSINT?

_"Professional internet stalking with a badge and a really good understanding of privacy settings."_

OSINT, or Open Source Intelligence, is the practice of collecting and analyzing information that is publicly
available. This information can come from a variety of sources, including:

- Websites
- Social media
- News articles
- Government reports
- Academic publications

OSINT is used by a wide range of organizations, including law enforcement, intelligence agencies, and
businesses. It can be used for a variety of purposes, such as:

- Investigating crimes
- Gathering intelligence
- Conducting market research
- Assessing risks

## Key Components of OSINT

_"Google-fu, social media archaeology, and the ability to find anyone's high school yearbook photo."_

- **Identification of Sources:** Knowing where to look for information.

- **Data Collection:** Gathering the information from identified sources.

- **Data Analysis:** Processing and understanding the collected information.

- **Dissemination:** Sharing the analyzed intelligence with stakeholders.

## OSINT in Practice

_"Where 'I found it on the internet' becomes a legitimate intelligence source citation."_

OSINT techniques are applied in various real-world scenarios. Examples include:

- **Cybersecurity:** Identifying potential threats and vulnerabilities.

- **Journalism:** Investigating stories and verifying facts.

- **Business Intelligence:** Understanding competitors and market trends.

## Career in OSINT

_"Professional digital detective with 47 browser tabs open and somehow knowing what each one is for."_

A career in OSINT can be rewarding for those who enjoy research and analysis. Potential roles include:

- Intelligence Analyst
- Security Analyst
- Investigative Journalist

## Advanced OSINT Concepts

_
"When basic Google searches aren't enough, and you need to dive into the digital rabbit hole with specialized
tools."
_

Beyond basic search techniques, advanced OSINT involves:

- Using specialized search engines and databases.
- Analyzing metadata and network traffic.
- Employing scripting and automation for data collection.

)

export default OSINTPage
`

export default function WhatisosintPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What is OSINT?"
        subtitle="Learn about what is osint in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="what-is-osint" />
      </MicroLesson>
    </LessonContainer>
  )
}
