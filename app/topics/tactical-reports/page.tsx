import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tactical Reports - The Intel Analyst Academy",
  description:
    "Learn to write tactical intelligence reports that arrive in time, name the action they support, and tell the truth about sources and confidence.",
}

const topicContent = `A tactical report is a written product for a decision that will not wait for your second coffee. It is not a short strategic estimate. It is not a diary of everything the watch heard. It is the minimum text that lets an operator change a plan without calling you to translate.

If the reader needs you in the room for the report to work, you wrote a script. Write a product.

## Purpose Before Template

Tactical reporting exists to move a specific next action: a route, a shift, a raid timing, a protective posture, a go/no-go. Everything in the page either serves that action or it is cut.

- **Timeliness is a requirement, not a vibe.** A precise report after the convoy moved is an after-action note. Label it that way if you must file it.
- **Specificity is the virtue.** Names, grids or addresses you are allowed to print, clocks, counts. "Activity in the area" is how people drive into the wrong area.
- **The consumer is the operator.** Write their nouns. If they say "south fence," do not rename it "southern perimeter in the industrial sector" to sound like a college.

> An 80 percent report on time, with the missing 20 percent named, is professional. A 100 percent report that arrives as history is a different genre.

## A Structure That Fits on One Screen

Shops rename the blocks. Keep these jobs in this order.

- **Header.** Classification, title, date-time group, and a warn line that is the judgment in one sentence. If they only read this, they should still know the so-what.
- **Source and reliability.** Who or what told you, and how much that is worth. A-F / 1-6 or your shop's words. Single-source must be said as single-source, not implied as weather.
- **Situation in four lines.** Only the context that changes the action. History goes in a later product.
- **The picture.** Location, activity, numbers, equipment, direction of movement, time. Separate observation from inference with words, not with formatting tricks.
- **Assessment.** What you think it means, the window, the confidence, and the one indicator that would flip you.
- **Implication or recommendation** if your role allows it. "Keep the extra patrol through 0400" is a recommendation. "Consider all options" is a shrug.
- **Admin.** Handling, next update time, who to call. People forget this and then wonder why nobody called.

Worked product (unclassified training voice): "As of 0110, cutting marks on the south fence plus a circling van; I assess a probe of the yard, not casual trespass; moderate confidence, two observations, no identified actor; recommend the extra patrol through 0400; update at 0515 or on any new cut." That is a tactical report. A three-page recap of county theft is not.

## Speed Versus Accuracy, Without the Myth

The 80 percent rule is not permission to invent.

- **Say the confidence in the warn line.** Do not hide it under a map.
- **Prefer an update to a masterpiece.** Fragmentary first, refinement second. Your reputation is the correction speed, not the first adjective.
- **Do not launder one source into "reporting indicates."** That phrase is how single-source becomes folklore.
- **Corrections are products.** "Update: the van was a contractor, badge logged at 0048" is how adults work. Silence is how the next shift inherits your error.

If you cannot get to 80 percent, send a status: what you know, what you do not, when the next look happens. A vacuum will fill with someone else's guess.

## Dissemination Is Part of the Writing

- **Use the channel they already watch.** A perfect paragraph in a folder they open on Mondays is a missed warning.
- **Verbal first is allowed.** Then file the written line so the night is not a rumor.
- **Classification is not decoration.** Overclassifying to look serious hides the warning. Underclassifying to be fast burns a source. Both are report-writing failures.

## Practice

Rewrite this sludge into a tactical report of eight lines or fewer: "There have been some issues at the yard lately and folks are worried and we should maybe keep an eye on things because last month there were thefts and also a van might have been there but we are not sure and leadership wants awareness."

Your rewrite must include a time, a place, a judgment, a confidence, and a next look. If it still contains "awareness," you have not finished.

## Neighboring Lessons

What is tactical intelligence is the clock. Verbal briefing techniques is the spoken form. Intelligence report fundamentals is the larger anatomy. This page is the written form when the clock is the enemy and still not an excuse.
`

export default function TacticalreportsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Tactical Reports"
        subtitle="Write the minimum that changes the next action — on time, sourced, and updateable."
        humorSubtitle="If it needs a table of contents, it is not tactical. It is homesick for a binder."
        readTime={20}
        difficulty="Beginner"
        category="Reporting"
        mascot="foundations"
        mascotMessage="Lead with the warn line. Everything else is how you defend it."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="tactical-reports" />
      </MicroLesson>
    </LessonContainer>
  )
}
