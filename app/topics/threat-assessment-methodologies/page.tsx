import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Threat Assessment Methodologies - The Intel Analyst Academy",
  description:
    "Learn how to choose and apply threat-assessment methods — qualitative, quantitative, scenario, actor-based, and vulnerability-centric — without pretending a matrix is a fact.",
}

const topicContent = `A threat assessment is a ranked claim about who can hurt what, how soon, and how badly. The methodology is how you keep that claim from being a mood. Pick the method to fit the question and the data you actually have. Do not pick it because the last briefing used a five-by-five in teal.

This lesson walks the common methods, when each earns its keep, and how they fail in the same meeting.

## The Object You Are Building

Every serious method still has to produce the same five parts. If a step is missing, you have a narrative, not an assessment.

- **Actor or hazard.** Who or what could cause the harm. "The environment" is not an actor. "Flooding of the south depot after two days of rain" is a hazard you can work.
- **Intent or initiating condition.** Why they would, or what has to be true in nature or accident.
- **Capability.** What they can actually do with the resources they have, not the resources a movie would give them.
- **Opportunity / vulnerability.** The path to the asset. A capable actor with no path is a poster. A fragile asset with no actor is a maintenance issue.
- **Likelihood and impact, then priority.** The combination that decides who gets sleep and who gets a team.

Write those in sentences before you color a cell. The matrix is a display. The sentences are the product.

> A red square is not a finding. It is a formatting decision. If you cannot say why it is red, it is interior design.

## Qualitative Assessment

This is the default when data are thin and time is shorter than the spreadsheet.

- **How it works.** You score likelihood and impact on an ordinal scale (rare to almost certain; negligible to severe), then combine them on a matrix. The value is the conversation the scores force, not the arithmetic.
- **When to use it.** First cut of a problem, mixed sources, leadership that needs a shared language by Thursday.
- **How it dies.** Anchoring on the first color someone shouted; treating "medium" as a personality trait; refusing to write the assumption behind a High.
- **Honesty move.** Pair every score with one piece of evidence and one thing that would move it. If you cannot name either, the score is theater.

Worked sketch. Three threats to a transit hub: a named protest that has a permit, an unlocated package-threat phone call, and a long-running theft series at the bike cages. Qualitative ranking is allowed. Putting the phone call in Critical because it is vivid is availability bias, not method.

## Quantitative Assessment

Numbers help when you have them. They do not appear because you want a decimal.

- **How it works.** You estimate frequency or probability and a measurable impact (hours of outage, dollars, casualties in a defined band), then combine. Annualized loss is one form. So is a simple expected-value table if you can defend the inputs.
- **When to use it.** Recurring hazards, insurance-like questions, resource fights where "more red" is not an argument.
- **How it dies.** Fake precision. A 13.7 percent likelihood that came from a shrug is still a shrug. So is an impact figure that ignores the tail.
- **Honesty move.** Show the range, the source of the rate, and the sensitivity: which input, if wrong, flips the rank.

If you do not have a rate, stay qualitative and say so. Promoting a guess to two decimal places is how analysts become confident and wrong in the same paragraph.

## Scenario-Based Assessment

Use this when the future is the problem and a single-point forecast would be a lie.

- **How it works.** You build a small set of plausible worlds (usually two to four), each with drivers, a story, and what the threat looks like inside that world. Then you ask which indicators would tell you which world you are entering.
- **When to use it.** Novel combinations, political shocks, "what if the vendor fails during the storm."
- **How it dies.** Ten scenarios that are really one scenario in different hats; scenarios written to smuggle a preferred policy; no indicators, so nobody can update.
- **Honesty move.** Name the driver you are least sure of. That is the collection requirement hiding in the method.

## Actor-Based and Vulnerability-Centric

These are mirrors. Use both or you will worship the wrong end of the problem.

- **Actor-based.** Start with a specific group or person: history, intent, capability, targeting pattern. Priority follows the actor. Good for persistent, named threats. Weak against opportunists and accidents.
- **Vulnerability-centric.** Start with the crown jewels and their weak points, then ask who could use them. Good for protection planning. Weak if you only patch last year's actor.

A competent shop runs a pass from each end and reconciles. If the actor brief and the vulnerability brief disagree, that disagreement is the finding. Do not average them into beige.

## Choosing and Combining

Use the requirement as the selector.

- **Broad scan, little data.** Qualitative matrix plus a one-page narrative.
- **Recurring, measurable harm.** Quantitative, with ranges.
- **High uncertainty, high consequence.** Scenarios plus indicators.
- **Named adversary.** Actor-based, then a vulnerability pass on the likely targets.
- **Hardening a site.** Vulnerability-centric, then a short actor overlay so you do not gold-plate against ghosts.

Hybrid is normal. Sequential is better than simultaneous mush. Write which method produced which rank. Future you will need that when the rank changes.

## Practice

A hospital asks what to worry about this quarter: ransomware against a known-capable crew, a seasonal respiratory surge, and a protest that has blocked the ambulance bay twice. Pick a primary method for each, one evidence need, and the mistake you refuse (for example: scoring the protest Critical because last week's photo was loud).

If every threat comes out Critical, you did not assess. You panicked in a grid. Re-rank until something is allowed to be merely serious.

## What You Take to the Next Lesson

Models and matrices in this academy are only useful if you can explain them in speech. Threat-assessment models and "what is threat assessment" sit next door. Use them. Do not collect methods like souvenirs. One method, done out loud, beats four methods copied into a slide.
`

export default function ThreatAssessmentMethodologiesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Threat Assessment: Methodologies for Evaluating and Prioritizing Threats"
        subtitle="Pick a method that fits the data. Then write the sentences the colors are pretending to be."
        humorSubtitle="A five-by-five is a display. It is not a personality."
        readTime={25}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="If you cannot say why a cell is red, it is not a threat. It is interior design."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="threat-assessment-methodologies" />
      </MicroLesson>
    </LessonContainer>
  )
}
