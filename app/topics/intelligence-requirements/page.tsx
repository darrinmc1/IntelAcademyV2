import type { Metadata } from "next"
import { LessonContainer } from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"

export const metadata: Metadata = {
  title: "Intelligence Requirements Development | The Intel Analyst Academy",
  description:
    "Learn to write intelligence requirements that are specific, answerable, and prioritized — and to refuse the ones that are really anxiety in a tasking form.",
}

const topicContent = `A requirement is a question a decision needs answered, written so a collector and an analyst can do something besides guess what you meant. It is not a vibe. It is not "need everything on X." It is not a way to outsource your unread inbox.

If the requirement cannot lose — if no conceivable reporting would satisfy it — you did not write a requirement. You wrote a career.

## What You Are Actually Asking For

Most shops use a hierarchy. The names vary. The jobs do not.

- **Priority Intelligence Requirements (PIRs).** The few questions that change a major decision. If the boss asks "do we know yet," they mean these. If you have twelve PIRs, you have none.
- **Essential Elements of Information (EEIs).** The sub-questions that would let you answer a PIR. They are the actual work.
- **Specific Information Requirements (SIRs).** The collector-facing details: what, where, by when, in what form. If a collector has to call you to interpret the PIR, the SIR was missing.

> "I need to know everything about everything immediately" is not a requirement. It is a status. Requirements are how you stop being a status.

Worked rewrite. Bad: "Tell me about the threat to the port." Better PIR: "Will a named group attempt to disrupt Berth 12 night operations in the next 14 days?" EEIs: intent indicators, capability (boats, insiders), timing cues, and what would look like a feint. SIRs: which portals, which patrol reports, which public notices, by which daily cut-off.

## Characteristics of a Requirement That Can Be Collected

- **Specific.** Named actor or hazard, named asset, named window. Adjectives are not specifics.
- **Answerable.** If the only way to know is a mind-read, you need a different question: indicators of intent, not the intent itself.
- **Relevant.** If the answer cannot change a decision, it is trivia. Trivia is expensive.
- **Timed.** "By 1600 Wednesday" is a requirement. "ASAP" is a shrug that will be interpreted as "whenever."
- **Prioritized.** Rank them. If everything is FLASH, the collectors will rank them for you, badly.

Write the decision next to the PIR. "This answers whether we keep the extra tug on night shift." If you cannot name the decision, you are collecting for the museum.

## A Development Process You Can Repeat

- **Start from the decision, not from the topic.** What will someone do differently if they knew?
- **Inventory what you already know and what you only believe.** The second list is where bad PIRs are born.
- **Draft the question in one sentence, then add the window and the format.** Format matters: a warning, a count, a yes/no with confidence.
- **Kill or merge.** Two PIRs that are the same question in different moods should become one.
- **Validate with the consumer in their nouns.** You are not paid to improve their vocabulary while they wait.
- **Translate for collectors.** Decision-speak and collector-speak are dialects. Be bilingual.
- **Review when the world moves.** Yesterday's PIR can become today's "who cares." Retire it in writing so it stops burning hours.

## Pitfalls You Will Hit Anyway

- **Boil the ocean.** A requirement that implies a census of the planet.
- **Mind reader.** Asking for inner state with no indicator path.
- **Time machine.** Needing yesterday's answer about today's event, without saying you want a reconstruction.
- **Moving target.** Changing the question every stand-up so nothing can ever close.
- **Jargon jungle.** A PIR that requires a decoder. If the collector is a linguist, they still need to know what "posture" means here.
- **Hidden collection method.** A requirement that can only be met by unlawful access is not clever. It is a refusal. Rewrite toward lawful indicators.

## Practice

Consumer: "I'm worried about Company X." Decision: whether to brief the board on a possible market entry in 90 days. Write one PIR, three EEIs, and two SIRs. Then write the PIR you refuse (the ocean-boiler) and one sentence on why.

If your PIR contains "any and all information," start over. If your SIRs name a system you are not allowed to use, start over. Collection planning is the next lesson; this one is the questions that plan is allowed to exist for.

## Honest Resource Note

A dedicated "intelligence requirements handbook" PDF is **Coming Soon**. The Downloads page already has a collection-plan template and an intelligence-requirements database sheet. Use those. Do not follow a /resources/ link into a 404 and call it a handbook.
`

export default function IntelligenceRequirementsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Intelligence Requirements Development"
        subtitle="Turn anxiety into a question a collector can close — or refuse."
        humorSubtitle="If everything is a PIR, nothing is. That is not a metaphor. It is your queue."
        readTime={25}
        difficulty="Beginner"
        category="Collection Management"
        mascot="foundations"
        mascotMessage="Write the decision next to the question. If you cannot, you are collecting for sport."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="intelligence-requirements" />
      </MicroLesson>
    </LessonContainer>
  )
}
