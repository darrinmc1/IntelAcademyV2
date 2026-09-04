import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is Tactical Intelligence? - The Intel Analyst Academy",
  description:
    "Understand tactical intelligence: perishable, narrow, decision-ready work on a clock measured in hours — and how the cycle compresses without becoming a guess.",
}

const topicContent = `Tactical intelligence is intelligence produced for immediate use: hours to days, a defined actor or place, a consumer who will move before your second draft. Strategic intelligence asks what we should care about over years. Operational intelligence asks how a campaign should run. Tactical intelligence asks what that unit is doing tonight, and whether the north gate is still a good idea.

If you need it to be elegant, you are on the wrong clock. If you need it to be empty of caveats, you are also wrong. Tactical work is decisive and honest at the same time. That combination is the skill.

## What Makes It Tactical

Five traits. If two are missing, you are writing something else and calling it fast.

- **Perishable.** A movement at 0200 is often trivia by 0600. Date-time is not metadata. It is the claim.
- **Actionable.** Someone can change a route, a posture, a warrant timing, or a shift because of it. If no action is conceivable, you wrote a status.
- **Narrow.** One adversary, one facility, one series, one night. Resist the urge to solve the region in a spot report.
- **Consumer-specific.** Operators, sergeants, watch commanders, first responders. They will not hunt your appendix.
- **Fused under constraint.** You use what is in hand. You do not wait for the perfect second source if the window is closing — but you say that you did not wait.

> Intelligence that arrives after the action is history. History is a fine discipline. It is not this one.

## Products You Will Actually Write

Names vary by shop. The jobs do not.

- **Spot report.** Something changed. Who, what, where, when, so-what, confidence. If it needs a table of contents, it is not a spot report.
- **Threat warning.** A specific harm is imminent or underway. Lead with the action the consumer must consider, then the evidence.
- **Target or package note.** Enough identifier, location, and pattern to support a planned action you are authorized to support. Not a biography.
- **Route or area assessment.** Terrain, hostile pattern, civilians, and the one thing that would abort. Written for the person who will be there.
- **Verbal or radio brief.** Same bones, fewer words. If you cannot say it in a minute, you do not have a brief. You have anxiety.

Worked example. Consumer: night-shift supervisor at a rail yard. Question: "Do we keep the extra patrol on the south fence?" Usable tactical product: "Two nights of cutting marks on the south fence, last at 0110, plus a van circling at 0040; I assess a probe, not kids; moderate confidence; recommend keep the extra patrol through 0400 and reassess at first light." Unusable: a two-page history of rail theft in the county.

## The Cycle, Compressed

Direction, collection, processing, analysis, dissemination still exist. They just stop pretending they have a week.

- **Direction.** A precise question with a clock. "Is the north route clear before 2300?" is direction. "Need eyes on" is a shrug.
- **Collection.** Task what you already have: sensors, patrols, open sources you are allowed to use, a phone call to the person who was there. You are not building a new architecture tonight.
- **Processing.** Get it into a form you can judge: a plot, a translated line, a still with a time. Do not confuse processing with analysis.
- **Analysis.** Weigh fragments. Name the lead judgment and the thing that would flip it. Accept that you are short of data. Do not invent the rest to feel professional.
- **Dissemination.** The channel the consumer already watches. A perfect memo in the wrong inbox is a missed warning.

After action, log what you said and what happened. That log is how tactical work becomes operational pattern. Shops that skip the log relearn the same night every month.

## The Problems That Do Not Go Away

- **Incomplete data.** You will brief on 60 percent. Say so. "I do not know" is a finding when the unknown is the dangerous part.
- **Overload.** Fast environments produce noise as a strategy. Your job is refusal: drop the third rumor until it earns a place.
- **Perishability versus accuracy.** An 80 percent answer on time beats a polished 100 percent after the convoy moved. That is not permission to fabricate the other 20. It is permission to speak with a confidence label.
- **Ego and correction.** The first report will be wrong in a detail. Issue the update without a novella about how you were mostly right.

Tactical accountability is real. People move because of you. That is why caveats belong in the first sentence, not in a footnote you hope nobody reads.

## Practice

Tasking: "I need to know if Company X is staging at the old mill tonight." Walk the compressed cycle in five bullets: the actual question you will answer, two collection actions you can take in the next hour (authorized, legal), how you will process what comes back, the judgment format, and how it reaches the consumer.

If any bullet is "scrape the admin portal" or "get onto a hidden service," you left the lesson. If any bullet is "write a strategic estimate," you left the clock.

## Carry It

Tactical intelligence is judged by whether the person who had to move was less blind than they were before you spoke. Learn the products, compress the cycle, and keep the confidence language adult. The companion lesson on strategic versus tactical is how this sits on the larger chain. Tactical reports is how the written form should look when you are out of time and still on the record.
`

export default function WhatIsTacticalIntelligencePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What Is Tactical Intelligence?"
        subtitle="Answers on a clock: narrow, perishable, and still required to tell the truth about confidence."
        humorSubtitle="If 'I need it yesterday' is a joke, you are not in a tactical shop."
        readTime={22}
        difficulty="Beginner"
        category="Tactical"
        mascot="foundations"
        mascotMessage="Speed is not an excuse to skip the so-what. It is a reason to write a shorter so-what."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="what-is-tactical-intelligence" />
      </MicroLesson>
    </LessonContainer>
  )
}
