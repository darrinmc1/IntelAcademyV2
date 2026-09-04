import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeline Visualization - The Intel Analyst Academy",
  description:
    "Learn to build analytical timelines that reveal sequence, gaps, and triggers — in Analyst's Notebook or a disciplined table — without treating a date sort as a finding.",
}

const topicContent = `A timeline is an argument about order. It turns a bag of stamps into a sequence you can attack: what came first, what is missing, what always happens before the thing you care about. Software helps. A sorted column is not a conclusion.

This lesson covers the analytic job first, then how that job looks in Analyst's Notebook and in tools you already have. It will not 404 you into a "timeline toolkit" that does not exist.

## Why Order Is a Finding

- **Sequence.** Cause wants a before. A payment after a seizure is a different story from a payment before it. If you cannot order them, you do not have a story. You have a coincidence.
- **Gaps.** Quiet is data. A three-week hush in a noisy account is OPSEC, a holiday, a lost device, or a dead man. The timeline makes you pick and test.
- **Triggers.** A single event followed by a burst is a hypothesis generator. The burst without a marked trigger is how you invent a mastermind.
- **Overlap.** Two streams on one axis — travel and money, patrols and thefts — is where fusion earns its name.

> If every event has the same visual weight, you made a calendar. Calendars are honest. They are not analysis until you mark the claim.

## Build One Without Lying

- **Collect dated things, including metadata.** Document created, last seen, first filed. Those times are often better than the narrative time.
- **Triage.** If it does not answer the question, it stays in the working file. A hundred pins is how the trigger hides.
- **Normalize.** One timezone. One date format. "Tuesday night" is not a time. Convert or caveat.
- **Separate observation time from event time.** When the witness reported is not when it happened. Charts that collapse those two invent speed.
- **Group on theme lines** when several actors or streams matter. One line per stream beats a single dump with colors you will not remember.
- **Annotate the claim.** "Acceleration starts here." "Collection gap, not inactivity." If the annotation is the finding, put it in the product sentence too.

Worked example. Question: "Did the front company pay the hauler before or after the warehouse emptied?" Events: invoice dated Monday, AIS departure Wednesday, payment cleared Thursday, photo of empty bay Tuesday night. The timeline, once timezones and "dated" versus "cleared" are honest, may kill a lead hypothesis in five minutes. A link chart of the same entities will not.

## Patterns Worth a Name

- **Acceleration.** Tightening intervals. Preparation, panic, or a reporting change. Ask which.
- **Rhythm.** Weekly, payday, shift change. A break in rhythm is often the story.
- **Trigger plus cascade.** Useful when you can name the trigger without poetry.
- **Lull then event.** Sometimes OPSEC. Sometimes you were not looking. Draw the collection gap so you cannot confuse the two.

Do not force a name onto noise. "Pattern of life" is a phrase that has covered a lot of thin files.

## Tools, Honest

- **Analyst's Notebook** can switch between network and timeline views, attach dates to events, and use a time bar. Learn the date fields or the view will lie politely.
- **A table** with start, end, timezone, source, and a flag for event-versus-report time will outperform a pretty tool you do not trust.
- **Gantt-style views** help when duration matters (a stay, a lease, a patrol window). They do not help when you only have instants.

Coming Soon: extra academy timeline templates beyond what Downloads already ships. A timeline-development PDF is already on the Downloads page. Use it. "Timeline Analysis Templates" as a separate /resources/ page is not a live product.

## Practice

Events (messy on purpose): a call "late Friday," a payment timestamp in UTC, a door-cam still labeled local time, a news article posted Saturday that describes Friday. Build a six-row table with your normalized times and one gap you refuse to fill. Write the sentence the timeline supports — and the sentence it does not.

If you filled the gap with "must have," you wrote fiction. Leave the hole. Holes are why the next collector gets a task.
`

export default function TimelinevisualizationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Timeline Visualization"
        subtitle="Order, gaps, and triggers — a timeline is a claim about sequence, not a prettier sort."
        humorSubtitle="A hundred undated icons is not a timeline. It is confetti."
        readTime={20}
        difficulty="Beginner"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Normalize the clock first. Most 'patterns' are timezone errors with confidence."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="timeline-visualization" />
      </MicroLesson>
    </LessonContainer>
  )
}
