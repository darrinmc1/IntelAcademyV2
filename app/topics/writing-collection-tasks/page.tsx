import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing Collection Tasks | The Intel Analyst Academy",
  description:
    "Turn a requirement into a task a collector can execute: question, scope, time window, return format, and the constraints that keep the work lawful.",
}

const topicContent = `A collection plan that never becomes a task is a strategy poster. Collectors do not execute posters. They execute tasks: a bounded ask, a clock, a definition of "done," and the constraints that keep the work inside the law and inside the question. This lesson is how to write that task so the return can be analyzed, not so the task reads like you have already decided the ending.

> "Find out everything about the port" is not a task. It is a cry for help with a suspense date stapled to it.

You already have the gap and the source match. The task is the handoff. It is also where analysts accidentally task their conclusion. Do not.

## What a Task Is, and Is Not

- **A requirement** is the question the decision needs answered.
- **A plan** is the set of requirements, sources, and priorities for a period.
- **A task** is one executable ask against one source or one collector, cut from that plan.

If the task restates the whole plan, you have not tasked anyone. You have forwarded your problem. One task, one principal question, one return.

## The Anatomy That Collectors Actually Use

Write these blocks. Skip one and you will get a clarification email, which is the collector being polite about your draft.

- **The question.** One sentence, taken from the gap statement, not embellished with your theory.
- **The information needed.** The essential elements, as observables. Numbers, dates, locations, document types, names of organizations. Not "intent" unless you also say what observable would count as evidence of intent.
- **Scope.** Geography, organization, and the boundary of what is out of scope. Out of scope is a gift. It stops a diligent collector from boiling the ocean you accidentally ordered.
- **Time window.** When the activity of interest occurred, and when you need the return. Both. "Recent" is not a window.
- **Return format.** A note, a table, a set of citations, a map overlay. Say what "enough" looks like. Say what a negative result looks like, because "we found nothing" is useful only if they looked in the place you named.
- **Constraints.** Authority, classification or handling of the return, sources they must not use, and anything that would turn a lawful research task into something else. If you do not know the authority, the task is not ready.
- **Why it matters, in one line.** Not a speech. The decision and the date. Collectors prioritize better when they can see the consequence. They do not need your whole estimate.

That is the task. Anything longer is you thinking on their time.

## Do Not Task the Verdict

Bad task: "Confirm Supplier Q is on the brink of failure and identify evidence of mismanagement."

You have told the collector what to find. You will receive it, because people are helpful, and then you will brief a circle.

Better task: "For Supplier Q, report any of the following dated since 1 January, with the document or release you used: audit opinion other than unqualified; covenant or payment default disclosed to a market or a court; resignation of the finance director or external auditor; publicly posted delivery lead times, if they differ from the figure in last year's contract schedule. If a category has no public item, say 'no public item found' and where you looked. Return by 20 May. Decision: whether procurement opens a backup tender before 1 June. Use open company filings, court records, and the supplier's own site only. Do not contact the supplier. Do not use access you would not put in the citation."

The better task can come back inconvenient. That is the point. A task that cannot come back inconvenient was not a question.

## Negative Results and Partial Returns

Write this sentence into the task or you will not get it: **A negative result is a result. Report it.**

Also define partial. "If you can answer two of the four elements and not the others, send the two and name the miss. Do not wait for a complete set past the date." Analysts who demand completeness train collectors to miss the decision. The evaluation lesson will judge you on whether the decision got what it needed, not on whether the folder looks finished.

## Deconfliction Is a Paragraph, Not a Mystique

Before you send the task, spend twenty minutes finding out whether someone else already asked. Duplicate tasking wastes the asset and, where people are involved, can put a source in a worse position because two offices did not speak. You do not need a secret handshake. You need to ask the collection manager, check the register, and write one line: "Checked against open tasks on Supplier Q as of [date]; no overlap" or "Overlaps Task 14; this task only adds the court-record element."

Deconfliction here is an administrative duty. It is not a license to discuss covert methods, and this lesson will not teach any.

## A Before and After

Before: "OSINT team — need everything on port disruption risk, ASAP, for leadership."

After: "Question: if Terminal 4 publishes a closure longer than ten days in the next quarter, which of our contracted carriers have a published alternative call within 200 kilometres? Information needed: the terminal's current published advisory; each contracted carrier's published schedule and any diversion notice since 1 March; the date each notice was posted. Scope: Terminal 4 and the three carriers on the attached list. Not in scope: labour politics, naval activity, other terminals. Window: notices dated 1 March to today. Return by 12 May as a table with links. Negative cells stay in the table. Constraint: public port, carrier, and notice-to-mariners sources only. Decision: logistics either pre-books the alternative or accepts the delay, at the 15 May meeting."

The after is longer than a slogan and shorter than a memoir. Collectors can do the after on purpose.

## Exercise

Rewrite this into a task using the blocks above.

"Get me the story on whether the warehouse fires in the eastern district are connected. Leadership is nervous."

Rules:

- Invent a decision and a date so the task has a reason to end.
- Name at least three observables and one explicit out-of-scope.
- Include the sentence that makes a negative result reportable.
- Ban any instruction that tells the collector what the connection is.
- Keep the collection inside public incident logs, official fire reports, and maps a resident could open. If your rewrite needs pretext, access to a private account, or a person approached under a lie, delete that line and narrow the question until it can be done in the open.

Then read it once as the collector. If you would have to email back "what do you mean by connected," it is not finished.`

export default function WritingCollectionTasksPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Writing Collection Tasks"
        subtitle="One question, a clock, a definition of done, and room for an answer you did not want."
        humorSubtitle="Collectors do not execute posters. They execute tasks."
        readTime={15}
        difficulty="Intermediate"
        category="Data Collection Planning"
        mascot="foundations"
        mascotMessage="If the task cannot come back inconvenient, it was not a question."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="writing-collection-tasks" />
      </MicroLesson>
    </LessonContainer>
  )
}
