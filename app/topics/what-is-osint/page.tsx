import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is OSINT - The Intel Analyst Academy",
  description: "Learn about what is osint in intelligence analysis.",
}

const topicContent = `_"Professional internet stalking with a badge and a really good understanding of privacy settings."_

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

## OSINT Collection Methods

Open source intelligence draws from an enormous range of publicly available information. Understanding the categories of OSINT sources helps analysts know where to look and how to evaluate what they find.

- **Published Media:** Newspapers, journals, magazines, books, and government reports. These often provide verified, authoritative information but may lag behind current events.
- **Broadcast Media:** Television, radio, and podcasts. News broadcasts can provide real-time information from conflict zones or disaster areas, though the analyst must account for editorial bias.
- **Online Sources:** Websites, forums, blogs, social media platforms, and video-sharing sites. The internet has democratised access to information but also introduced unprecedented volumes of noise and disinformation.
- **Commercial Data:** Satellite imagery, financial data, shipping records, and business registries. Commercial providers now offer capabilities once reserved for national intelligence agencies.
- **Grey Literature:** Conference proceedings, academic preprints, technical reports, and working papers. These sit between published and unpublished - often rich in detail but inconsistent in quality control.

## Evaluating OSINT Sources

Not all open sources are equally reliable. Analysts must apply the same source evaluation criteria used in classified intelligence collection:

- **Proximity:** How close is the source to the event or information? A first-hand account carries more weight than a third-hand retelling.
- **Motivation:** Why is the source sharing this information? Propaganda, disinformation, and commercial interests can all colour what appears to be objective reporting.
- **Corroboration:** Can the information be confirmed through independent sources? Single-source OSINT should always be treated as provisional.
- **Timeliness:** When was the information collected or published? OSINT decays rapidly - a social media post from six months ago may no longer reflect the current situation.

## OSINT Tools and Techniques

Professional OSINT practitioners use a range of specialised tools to collect, filter, and analyse open source data efficiently:

- **Search Operators:** Advanced Google operators (site:, filetype:, intitle:, inurl:) allow precise targeting of information within specific domains or file formats.
- **Social Media Analysis Tools:** Tools like Maltego, SpiderFoot, and theHarvester automate the collection of publicly available information about individuals, domains, and organisations.
- **Image Analysis:** Reverse image search (Google Images, TinEye) and metadata extraction (EXIF data) can reveal the origin, location, and history of photographs.
- **Archived Content:** Services like the Wayback Machine allow analysts to view historical versions of websites, uncovering content that has since been removed or altered.`

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
