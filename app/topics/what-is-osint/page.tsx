import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is OSINT - The Intel Analyst Academy",
  description:
    "Define open-source intelligence as public information collected, evaluated, and turned into a judgment — not a pile of tabs or a personality.",
}

const topicContent = `OSINT is intelligence from information that is lawfully and publicly available: news, official publications, academic work, commercial data you may buy, and the parts of the social web that do not require breaking a door. The "open" refers to the source's accessibility, not to your standards. A tweet can be a source. It cannot be a finished product.

This lesson is the definition and the evaluation habit. Techniques and workflows live in other pages. If you came here for a list of "tools that find anyone," you came to the wrong academy.

## A Definition That Survives a Review

Open-source intelligence is publicly available information collected against a requirement, evaluated, and disseminated as intelligence. Three words do the work: publicly, requirement, evaluated.

- **Publicly available** means you did not need unauthorized access, impersonation, or a bypass. Paid databases can still be OSINT if the vendor sells them in the open market and you are licensed to use them.
- **Against a requirement** means you are not browsing. A bookmark folder is a hobby. A tasked question is a job.
- **Evaluated** means you graded the source and the claim. "I found it" is a method note, not a judgment.

> Open source is not the same as reliable. It is the same as obtainable without a warrant. Those are different compliments.

OSINT is used by governments, journalists, companies, and police because the world publishes more than any classified collector can vacuum. It fails when people treat volume as corroboration.

## What Counts as a Source Family

You do not need to memorize vendor logos. You need categories, because each one lies in a different dialect.

- **Published and official.** Gazettes, court dockets, company filings, parliamentary records, statistical offices. Slow, citeable, often late.
- **News and broadcast.** Useful for first notice and for what a society is being told. Editorial incentives are not a footnote. They are the source.
- **Academic and grey literature.** Methods sections are a gift. Preprints are a draft. Conference slides are a rumor with a university logo.
- **Commercial data.** Imagery, AIS, flight, trade, and registry products. You are buying a model of the world, not the world. Read the coverage notes.
- **Social and user media.** Fast, biased, geolocatable only when you do the work, and full of people performing. Treat as leads until a second family agrees.

Do not call a private group chat "OSINT" because someone forwarded a screenshot. If access depended on a lie, you left open source.

## Evaluation Does Not Relax Because It Was Free

Use the same questions you would use on a human source.

- **Proximity.** Were they there, or are they quoting someone who wants to be there in the replies?
- **Motivation.** Traffic, politics, stock price, ideology, boredom. "No motive" is not a finding. It is a failure to look.
- **Corroboration.** Independent is the word. Three blogs quoting the same telegram channel are one source in a trench coat.
- **Timeliness.** Social posts age like milk. Official PDFs age like wine or like lies, depending on the ministry.
- **Integrity of the object.** Reverse-image the photo. Check whether the video is last year's. Read the URL as if it were trying to fool you, because someone is.

Worked example. A video claims to show a blast at a depot today. OSINT work: find the original upload, test landmarks against known imagery you are allowed to use, compare the blast signature to weather and traffic cams if public, and say what remains unproven (yield, actor, intent). OSINT malpractice: embed the first clip and write "confirmed."

## Collection Hygiene

- **Stay inside the law and the charter.** Public does not mean "collect everything about a private person because you can." Need-to-know applies to open sources.
- **Do not confuse search grammar with access.** Operators help you find published pages. They do not authorize you to enter a system.
- **Preserve what you cite.** Pages move. Your source note needs a date and a copy your shop accepts.
- **Watch your own signature.** How you search can become a story. Use approved accounts and networks for official work.

We will not teach you to harvest hidden services, to impersonate, or to bypass access controls. Those are not OSINT. They are a different, usually illegal, activity.

## Practice

Requirement: "What has the port authority officially said about night-work at Berth 12 this quarter?" List three source families you would check, one query or portal action for each, and the sentence you will not write until two families agree.

If your first instinct is a social rumor mill, keep it as a lead queue, not as the product. Official plus commercial plus local news is a triangulation. Three rumor mills is a chorus.

## Where This Sits

OSINT techniques and OSINT workflow are the how. This page is the what and the why. Google dorking is search literacy for authorized collection. Deep-web research is the unindexed-but-ordinary part of the same job. None of them replace analysis. They only change where the first sentence comes from.
`

export default function WhatisosintPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What is OSINT?"
        subtitle="Public sources, professional standards — accessibility is not a substitute for evaluation."
        humorSubtitle="If your citation is 'I found it on the internet,' you found a hobby, not a product."
        readTime={22}
        difficulty="Beginner"
        category="OSINT"
        mascot="foundations"
        mascotMessage="Open means obtainable. It does not mean done."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="what-is-osint" />
      </MicroLesson>
    </LessonContainer>
  )
}
