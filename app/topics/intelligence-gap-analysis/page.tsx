import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intelligence Gap Analysis | The Intel Analyst Academy",
  description:
    "Diagnose what you actually do not know, write a gap statement a collector can use, and keep a gap register that dies when the question is answered.",
}

const topicContent = `Requirements tell collectors what to go and get. They are only as good as the diagnosis underneath them. Gap analysis is that diagnosis: a disciplined account of what the decision needs, what you already have, and which holes are worth spending a collection asset on. Skip it, and you will write requirements that ask for the entire ocean because nobody sat down and named the missing cup of water.

> "We should really know more" is not a gap. It is a mood with a budget.

The requirements lesson on this path teaches the hierarchy — priority intelligence requirements, essential elements, specific information requirements. This lesson is the step before that hierarchy earns its keep.

## A Gap Is a Hole in a Decision

A gap is not everything you do not know. A gap is a specific unknown that changes a decision you are actually going to make, on a date you can point at. If the answer would not change the decision, you do not have a gap. You have curiosity. Curiosity is allowed. It does not get a collection task.

Write gaps in this sentence and refuse to leave it until it is filled:

**We cannot yet answer [question], which [decision-maker] needs before [date], because we lack [specific information], and without it we will [default action or error].**

Example, in a form you can say in a meeting: "We cannot yet say whether the port authority's public expansion plan covers container berth capacity or only cruise traffic, which procurement needs before the March tender, because the published master plan does not split the two, and without it we will either overbuy a route or miss a real constraint."

That is a gap. "Understand the port" is not.

## Four Boxes, Used Without the Poster

You have seen the known-known matrix on a slide. Use it as a sorting hat, then get off the slide.

- **Known knowns.** Evidence you would cite today, with a source and a date. If you cannot name the source, it is not in this box. It is a story the office tells itself.
- **Known unknowns.** Questions you can already write. These are your candidate gaps. Most of the register lives here.
- **Things you think you know.** The dangerous box. Judgments everyone repeats and nobody has re-sourced since the last rotation. Pull three of these out every cycle and try to break them. A surprising number of "gaps" are actually stale knowns.
- **Unknown unknowns.** You cannot list them by definition. You can only design a scan wide enough to trip over them: a source outside your usual set, a dissent, a local series you do not already believe. Do not pretend a gap register captures this box. Say that it does not.

The practical move is to take the decision, list the known knowns that bear on it, and treat every material hole as a candidate gap. Then cut.

## From a Foggy Worry to a Gap Statement

Decision-makers arrive with weather, not questions. "I'm uneasy about Supplier Q." Your job is to turn weather into a small number of gaps.

Work it in public, with them if you can.

- What decision is uneasy? Switch suppliers, dual-source, do nothing until the contract renews, warn the board.
- What would they need to see to choose? Financial stress, quality failures, political risk to the shipping route, a second source that actually exists.
- Which of those can you already answer from holdings, finished intelligence, or a lawful open source you have not bothered to read?
- What remains is the candidate list. Force-rank it by how much the decision moves, not by how interesting the topic is.

A good gap is collectable in principle. "What is the chief executive really thinking" is usually a known unknown you cannot collect without a mind-reading program you do not have. Rewrite it as observables: delayed filings, covenant breaches, resignation of the finance director, a change in the audit opinion. If even the observables are out of reach, mark the gap **not collectable this cycle** and say what decision you will make under uncertainty. That is more honest than issuing a requirement nobody can satisfy.

## The Register Is a Living Document

A gap register is a table with a pulse. If it looks the same in March as it did in October, it is a shrine.

Minimum columns that earn their space:

- **Gap statement.** The sentence above, not a title.
- **Decision and date.** If the date passed, the gap is either closed, expired, or you are late and should say so.
- **Linked requirement.** Once a gap is accepted, it becomes a PIR or an essential element. If it never links, it was never accepted. Take it off.
- **What we already hold.** So the next analyst does not recollect it.
- **Status.** Open, tasked, partially filled, closed, or accepted-as-unknown.
- **Owner.** A name. A shop is not an owner.

Close gaps. This is the step people skip because an open register looks like productivity. A closed gap means you answered it, the decision was made without it, or the question died. Write one line on which. The collection-evaluation lesson picks up from here: a plan that never closes a gap did not collect, it accumulated.

Review the register when the decision changes, not only on a calendar. A tender that slipped by a quarter makes half your dates wrong. Wrong dates create fake urgency, and fake urgency is how every gap becomes "priority."

## Prioritize Like Someone Who Has Met a Collector

You will have more gaps than assets. Rank on three questions, in this order.

- **Decision impact.** If we stay ignorant, do we make a different and worse choice, or do we merely feel less informed?
- **Time.** Is there a date after which the answer is a souvenir?
- **Feasibility.** Can some discipline you are allowed to task actually touch this, in the time you have? Feasibility is not an excuse to drop hard questions forever. It is a reason not to pretend this week's plan will answer them.

Anything that fails the first question comes off the list. Anything that fails the third stays on the register as accepted risk, not as a task. The matching-sources lesson is where feasibility gets a proper treatment. Do not hide a "no" inside a vague tasking and hope a collector interprets it charitably. They will not. They have seen you before.

## Common Ways This Goes Wrong

- **The gap that is actually a conclusion.** "Gap: confirm that Group R is hostile." You have already decided. A gap asks. It does not recruit evidence for a verdict.
- **The inherited gap.** Last year's question, copied forward because deleting it felt rude. Re-validate it against this year's decision or kill it.
- **The unstated gap.** The office "just knows" the hole, so nobody writes it down, so the new analyst collects the wrong thing with great energy.
- **The gap with no holdings check.** You task collection for a figure that has been in a public statistical release since January. Collectors remember.

## Exercise

Take a decision you can describe in one sentence. A unit choosing whether to renew a facilities contract is enough. A nation choosing a grand strategy is not required.

Produce a one-page register with exactly three gaps.

- Each gap uses the full sentence: question, decision-maker, date, missing information, default error.
- One gap must be marked not collectable this cycle, with the uncertainty you will accept instead.
- One "known" must be listed as a thing you think you know, plus the single check that would retire it.
- One gap must be closed on paper with holdings you could actually cite from open material. Show the citation logic, not a fantasy source.

If all three gaps could be answered only by someone on the inside of a closed organization, rewrite at least one until it has an observable.`

export default function IntelligenceGapAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Intelligence Gap Analysis"
        subtitle="Name the hole that changes a decision, and stop collecting everything else out of politeness."
        humorSubtitle="A gap register that never closes is just a diary with better stationery."
        readTime={16}
        difficulty="Intermediate"
        category="Data Collection Planning"
        mascot="foundations"
        mascotMessage="If the answer would not change the decision, you do not have a gap. You have a hobby."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="intelligence-gap-analysis" />
      </MicroLesson>
    </LessonContainer>
  )
}
