import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executive Summaries - The Intel Analyst Academy",
  description:
    "Learn to write executive summaries that survive the two-minute read: bottom line up front, calibrated confidence, and the discipline to cut everything that does not change a decision.",
}

const topicContent = `An executive summary is the most read and least written-for document in
intelligence. The senior decision-maker who receives your assessment has
perhaps two minutes, no context, and a decision to make. If your bottom line
is on page four, you have written it for nobody. This lesson covers the
discipline of compression: leading with the judgement, calibrating confidence
honestly, distinguishing what changes a decision from what merely interests
you, and resisting the temptation to hedge your way into meaninglessness.

By the end of this lesson, you will be able to:

- Place the bottom line first and support it afterwards
- Write judgements that are specific, testable, and decision-relevant
- Calibrate confidence language so it means the same thing every time
- Cut the analysis that does not change a decision
- Avoid the twin failures of false certainty and unreadable hedging

"Assume your reader has two minutes, no context, and a decision to make.
If that is not who you are writing for, you are writing for nobody."

## What an Executive Summary Is For

An executive summary exists to transfer a judgement, not to demonstrate the
work behind it. That distinction drives everything else.

- **It answers a decision, not a question.** A summary that ends with "further
  analysis is required" has not done its job. The reader needs to know what you
  assess, how confident you are, and what it means for the choice in front of
  them.
- **It is a compression, not an extract.** Copying your first three paragraphs
  into a summary is not summarising. Compression means identifying the smallest
  set of statements that preserves the decision-relevant meaning.
- **It stands alone.** Many readers will never see the full assessment. If the
  summary is unclear without the annexes, it has failed.

## Bottom Line Up Front

The core structural principle of intelligence writing is that the judgement
comes first and the reasoning supports it.

- **Lead with the assessment.** The first sentence should be the conclusion.
  Supporting evidence, methodology, and caveats follow. This inverts academic
  writing, and that inversion is deliberate.
- **Front-load the *so what*.** State the implication for the decision-maker,
  not just the finding. "Kidnapping is assessed as the most likely threat to
  your staff" is useful; "we analysed kidnapping trends" is not.
- **One idea per paragraph in the opening.** A reader skimming the first four
  sentences should come away with the judgement, the confidence, and the
  implication.

## Writing Judgements That Are Specific and Testable

A vague judgement cannot be acted on, and cannot be proven wrong - which makes
it worthless to everyone.

- **Name the actor, the action, and the timeframe.** "Attacks are possible"
  tells the reader nothing. "Non-state actors are likely to attempt an attack
  on the port facility within the next six months" gives them something to plan
  against.
- **Avoid empty qualifiers.** Words like "significant," "concerning," and
  "evolving" carry no information. They feel like analysis and communicate
  nothing.
- **Make it falsifiable.** If you cannot describe evidence that would prove your
  judgement wrong, you have not made a judgement - you have made an observation
  about your own feelings.

## Calibrated Confidence Language

Confidence language is a tool with a defined scale. Used inconsistently, it
actively misleads.

- **Confidence is not likelihood.** "We are highly confident" describes the
  quality of your sourcing. "It is highly likely" describes the probability of
  the event. Confusing the two is one of the most common errors in intelligence
  writing.
- **Hold the meaning of the words constant.** If "likely" means 70-85% this
  week and "likely" means 55% next week, the reader cannot track your
  assessments over time. Standardise your vocabulary and use it consistently.
- **Separate what you know from what you infer.** State your sources for facts
  and your reasoning for judgements. A reader should be able to see where the
  evidence ends and your interpretation begins.

## Cutting What Does Not Change a Decision

The hardest discipline in summary writing is deletion.

- **Apply the decision test to every sentence.** Ask whether the sentence
  changes what the reader would do. If it does not, it belongs in the annex -
  or nowhere.
- **Compress history ruthlessly.** Background context that your reader already
  has is the most common form of padding. Two sentences, not two paragraphs.
- **Move methodology to an annex.** How you did the analysis matters for
  auditability. It rarely changes the decision, so it rarely belongs up front.

## The Two Failures to Avoid

Executive summaries fail in two characteristic ways, and they sit at opposite
ends of the same spectrum.

- **False certainty.** Overclaiming to sound decisive. This destroys
  credibility the first time you are wrong, and it is wrong at the same rate as
  any other forecast - you have simply removed your ability to have been
  appropriately uncertain.
- **Unreadable hedging.** Stacking so many caveats that no judgement survives.
  "It may or may not be possible that perhaps some elements could potentially
  consider acting" is not caution, it is abdication. Pick your judgement, state
  your confidence, and name your key assumption.

The aim is a summary where a reader can extract the judgement in thirty
seconds, understand the confidence in another thirty, and know exactly which
assumption would change your assessment if it were proven wrong.

## Practical Checklist Before You Send

- **Is the judgement in the first sentence?** If not, rewrite the opening.
- **Is each judgement specific, actionable, and falsifiable?** Name actor,
  action, timeframe.
- **Do your confidence terms mean what they meant last month?** Check against
  your standard vocabulary.
- **Can you delete a quarter of it without losing meaning?** If yes, delete it
  before sending - not after.
- **Would the reader know what to do differently?** If the summary does not
  change or inform a decision, it is not an executive summary.

The measure of a good executive summary is not whether it impresses another
analyst. It is whether a busy decision-maker, reading it once and quickly,
comes away with a correct understanding of what you assess and how much to
trust it.`

export default function ExecutiveSummariesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Executive Summaries"
        subtitle="Learn to write executive summaries that survive the two-minute read: bottom line up front, calibrated confidence, and the discipline to cut everything that does not change a decision."
        humorSubtitle="Two minutes, no context, one decision - and you thought the analysis was the hard part"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="executive-summaries" />
      </MicroLesson>
    </LessonContainer>
  )
}
