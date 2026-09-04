import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cognitive Biases in Intelligence Analysis - The Intel Analyst Academy",
  description:
    "Learn the biases that quietly write assessments for you — and the structured habits that make them earn their keep instead of running the shop.",
}

const topicContent = `Your brain is optimized to keep you alive on a savannah, not to grade sources at 2 a.m. Cognitive biases are the systematic shortcuts that feel like judgment. They are not moral failures. They are default settings. Tradecraft is how you keep those settings from publishing themselves.

This lesson names the biases that show up in intelligence work, shows how they look in a draft, and gives you techniques that do not require a personality transplant.

## What a Bias Is Doing

A bias is a consistent lean, not a one-off mistake. Fatigue makes errors. Bias makes the same error in the same direction until a surprise arrives with a press conference.

- **They are unconscious.** If you could see them in the moment, they would be preferences. You notice them in after-action, which is late but still useful.
- **They love incomplete files.** The less you have, the more the shortcut writes the ending.
- **They love consensus.** A room that agrees quickly is not necessarily a room that checked.
- **They survive intelligence.** Clearance does not grant immunity. It grants better stationery.

> The most dangerous bias is the one that feels like expertise. Experience is a prior. It is not a source.

## The Set You Will Meet This Week

You do not need a psychology catalog. You need the ones that keep appearing in products.

- **Confirmation.** You notice the traffic that fits the lead hypothesis and file the rest under "noise." Fix: write what would disprove you before you collect the next increment.
- **Anchoring.** The first number, the first briefing, the first witness becomes the furniture of the case. Fix: generate a second frame on purpose, even a crude one.
- **Availability.** The vivid incident (the fire, the viral clip, the last war) sets the base rate. Fix: ask how often this actually happens in the relevant class, not how it felt.
- **Mirror imaging.** You assume the other side values what you value and will not accept the losses you would not accept. Fix: write their incentives in their words, then look for evidence they are not you.
- **Sunk cost / premature closure.** You have already briefed the story, so new facts become "complications." Fix: treat an update as a product, not as an apology.
- **Groupthink.** Dissent is expensive, so the room converges on the chair's adjective. Fix: assign a dissenting job before the meeting, not after the consensus hardens.
- **Framing.** "70 percent chance it holds" and "30 percent chance it fails" are the same number. Consumers do not treat them the same. Fix: state both faces when the decision is binary.

Worked failure. An analyst sees two reports that a factory is "idle" and writes "program paused." Three logistics trucks still enter at night. Confirmation files the trucks as residual. A month later the program was never paused. The bias was not stupidity. It was a story that got there first.

## Structured Habits That Interrupt the Shortcut

Techniques do not make you unbiased. They make the bias fill out a form.

- **Analysis of Competing Hypotheses.** Put the lead story next to two others and score evidence for what it does not fit. You are trying to kill hypotheses, not elect one.
- **Key assumptions check.** List the load-bearing beliefs. Ask what happens if each is false. If the product collapses when one assumption moves, that assumption is a collection requirement.
- **Devil's advocacy / Team A–Team B.** Someone is paid to argue the other side while the facts are still cheap. After publication is theater.
- **Premortem.** "It is six months later and this assessment was wrong. What did we miss?" You will hate how fast the room fills the whiteboard.
- **Peer review with a prompt.** "What would you have to believe for this to be false?" is a better ask than "thoughts?"

Institutional habits matter more than personal virtue: mixed teams, recorded dissent, and a culture that rewards the update. A lone genius who "just sees it" is a bias with a reputation.

## How Bias Looks in a Sentence

Train yourself to hear it in drafts.

- **"As we have long assessed…"** Anchor and sunk cost. Follow with what would change the long assessment.
- **"There is no evidence that…"** Often means you did not look, or the absence is not diagnostic. Say which.
- **"They would never…"** Mirror imaging until proven otherwise.
- **"This is just like…"** Availability. Maybe it is. Show the base rate.
- **"Everyone agrees…"** Either you did not ask or people stopped spending political capital. Note the dissent you did not hear.

## Practice

A desk has a lead judgment: "The group will not attack during the holiday because they never have." List two biases in that sentence, two pieces of evidence that would be needed to keep it, and one alternative that would still fit the same thin file (capability pause, deception, target shift, calendar they do not share).

If your alternative is "they might though," you have not generated a hypothesis. You have shrugged. Write a version a collector could task.

## What You Owe the Consumer

You will not purge bias. You will show your work: alternatives considered, assumptions named, confidence explained. That is what "objective" means in this trade. It does not mean empty of a view. It means the view had to survive contact with a method.

ACH, estimative language, and evidence-based conclusions are the neighboring lessons. Use them when the shortcut starts typing.
`

export default function CognitiveBiasesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Cognitive Biases in Intelligence Analysis"
        subtitle="Your mind writes first drafts without asking. Tradecraft is how you make it show its work."
        humorSubtitle="Confirmation bias is the only colleague who never takes leave."
        readTime={22}
        difficulty="Beginner"
        category="Analytical Techniques"
        mascot="foundations"
        mascotMessage="You cannot fire your brain. You can put it on a checklist."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="cognitive-biases" />
      </MicroLesson>
    </LessonContainer>
  )
}
