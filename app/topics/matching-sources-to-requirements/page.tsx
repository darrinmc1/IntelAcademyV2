import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matching Sources to Requirements | The Intel Analyst Academy",
  description:
    "Choose collection disciplines against the question you actually have, see single-source risk early, and stop tasking the wrong INT because it is the one you own.",
}

const topicContent = `A requirement is a question. A source is a way of touching evidence. The planning failure in the middle is so common it has become furniture: the unit tasks the discipline it already has, then acts surprised when the answer comes back shaped like that discipline. Matching sources to requirements is the unglamorous craft of asking what kind of evidence could even answer the question, which disciplines can reach it lawfully, and what you will still not know if only one of them speaks.

> Asking a signals collector to explain a minister's mood is like asking a thermometer to write a novel. You will get a number. You wanted a reason.

This lesson stays at the planning table. It does not teach clandestine access, interception, or how to run a human source. Those are separate authorities, separate law, and not a blog post. If your plan only works by going somewhere you are not allowed to go, the plan is not clever. It is out of scope. Rewrite it.

## The Question Picks the Discipline

Start with the gap statement from the gap-analysis lesson. Underline the noun you actually need: a quantity, a location, a relationship, a document, a pattern of movement, a public commitment, a financial flow. The noun is what you match.

Roughly, and with all the humility a one-paragraph sketch deserves:

- **Open source** is the default when the fact has already been published, filed, photographed by a journalist, or disclosed to a market. Corporate filings, statistical releases, court records, satellite imagery that is commercial and licensed, local press. It is fast and it is citable. It is also full of people performing for an audience. Treat performance as a feature of the source, not as the truth.
- **Human intelligence**, where you are authorized to talk to people who know things, is what you reach for when the answer lives in a decision that has not been written down. It is slow, it is biased toward the person who will talk to you, and a single conversation is an anecdote until you corroborate it.
- **Signals intelligence**, in the agencies that have it and the warrants that allow it, tells you that a communication happened, sometimes what was said, often who was in contact with whom. It is a poor mind-reader. Metadata is a map of contact, not a motive.
- **Geospatial intelligence** answers where, what changed on the ground, and sometimes when. It does not tell you why the building was built. Pair it with something that speaks to intent, or say plainly that intent is uncollected.
- **Financial intelligence** follows obligations, payments, and ownership. It is superb at "who is connected through money" and mute on ideology except where money and ideology share a bank.
- **Measurement and signature intelligence** and other technical disciplines answer narrow physical questions. If you do not have the discipline, do not write a requirement that assumes it.

No discipline is a moral category. Each is a tool with a blind spot. Write the blind spot into the plan so the analyst who inherits the take does not confuse "we did not see it" with "it is not there."

## Single-Source Risk Is a Planning Decision

One source can be enough when the fact is simple and the source is the authority for it. A statistical office is the right single source for its own published series. It is a terrible single source for whether a factory is actually operating.

For anything that will support a judgment rather than a citation, plan at least two disciplines or two independent kinds of evidence that could disagree. Independence is the point. Two newspapers rewriting the same wire are one source. A filing and a commercial image of the site are two.

If you cannot get a second source, the plan should say so in advance: **single-source, judgment capped.** That phrase belongs in the tasking note. It stops a later drafter from writing "we assess with high confidence" on the back of one talkative person.

Also plan the disagreeable source. If every input you selected would be happy to confirm the office's favourite story, you have built a choir. Add one input that would embarrass the story if the story is wrong.

## Feasibility Is a Filter, Not an Insult

A beautiful match that cannot be executed is not a match. Score each candidate source on four plain questions.

- **Authority.** Are we allowed to collect this, from this source, for this purpose? If the answer depends on a lawyer you have not asked, the status is "not yet," not "yes."
- **Access.** Does someone we can actually task reach this source in the time we have? "Someone, somewhere" is not access.
- **Time.** Will the take arrive before the decision date on the gap statement? A perfect report next quarter is a different product.
- **Cost and risk.** Risk to a person, risk of blowing a lawful method, risk of mistaking a public relations feed for a sensor. If the cost of knowing exceeds the value of the decision, do not collect. Say that out loud. It is a legitimate planning outcome.

Record a source as **primary, supporting, or ruled out.** Ruled out needs a reason, so the next officer does not reopen it as if you were merely forgetful.

## The Matrix, Kept Small

A source-to-requirement matrix has requirements down the side and candidate sources across the top. The cells are not novels. They are one of: answers this, helps, cannot, or not authorized.

Build it only for the gaps you have already prioritized. A matrix of every question the office has ever loved is a wallpaper project. Six requirements and five source types is already a meeting. If you need more columns, you probably have not cut the gap list.

Read the matrix by row and by column.

- A row of "cannot" means the requirement is not collectable this cycle. Return it to the register as accepted uncertainty. Do not leave it looking tasked.
- A column of "cannot" means that discipline is idle for this problem. Do not task it to be polite.
- A row with one "answers this" and the rest blank is your single-source risk, visible from across the room.

The collection-planning process lesson walks the wider cycle. This matrix is the artifact you bring into that process so phase two is a decision rather than a brainstorm.

## What You Tell the Collector

Collectors do not need your inner life. They need the match, stated cleanly.

- The requirement, in one sentence.
- The source or discipline you are asking them to use, and why that one.
- The fact that would count as an answer, and the fact that would count as a miss.
- The constraints: authority, handling, what not to collect because it is out of scope or unlawful.
- The date the answer stops being a decision and becomes a souvenir.

If you cannot explain why this discipline rather than another, you are tasking habit. Habit is how SIGINT shops receive questions about morale, and how OSINT shops receive questions that required a warrant nobody wanted to request. Both are planning failures. Fix them here, not in the apology after the product.

## Exercise

Take this requirement and do not "improve" it into vagueness: "Before 1 June, can the city rely on Supplier Q for diesel deliveries during a two-week port disruption, or do we need a pre-negotiated backup?"

On one page:

- Underline the nouns you must know. Write at least three.
- Match each noun to a discipline or source type you could actually use with public or authorized information. Name the blind spot.
- Mark one match as ruled out, with a reason that is about authority or access, not about taste.
- Identify the single-source risk if you only get the supplier's own statement.
- Draft four lines you would hand a collector. Include the date and what "no answer" looks like.

If your plan requires pretending to be someone you are not, or getting into a system you are not allowed to enter, throw that line out and replace it.`

export default function MatchingSourcesToRequirementsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Matching Sources to Requirements"
        subtitle="Let the question pick the discipline, and write the blind spot into the plan."
        humorSubtitle="The INT you already own is not a personality. It is a tool with a blind spot."
        readTime={16}
        difficulty="Intermediate"
        category="Data Collection Planning"
        mascot="foundations"
        mascotMessage="If every source you picked would be happy to confirm the office story, you built a choir."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="matching-sources-to-requirements" />
      </MicroLesson>
    </LessonContainer>
  )
}
