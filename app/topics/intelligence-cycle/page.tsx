import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intelligence Cycle - The Intel Analyst Academy",
  description:
    "Learn the intelligence cycle as a working model: direction, collection, processing, analysis, dissemination, and feedback — and where real shops cheat the diagram.",
}

const topicContent = `The intelligence cycle is a diagram of how raw information is supposed to become a product a decision-maker can use. It is a model, not a religion. Real work overlaps, skips, and loops. You still need the names, because they are how you notice which part you faked.

This lesson uses six jobs: direction, collection, processing, analysis, dissemination, and feedback. Some shops count five and hide feedback inside dissemination. Call it six so the loop has a noun.

## Why a Cycle and Not a Line

- **Outputs create new questions.** A good product is expensive because it works. The consumer comes back. That is success, not scope creep — unless you let them.
- **You are never "done."** "I analyzed this" is a date stamp. The world continued after it.
- **The consumer sits in the middle.** Work that does not change a decision is activity. The cycle exists to keep activity from calling itself intelligence.

> The worst shops treat the cycle as a line: collect, write, file, go home. The best shops treat it as a loop: here is what I know, here is what would change it, here is the next ask.

Process versus reality: phases overlap. A tactical warning may be collected, judged, and spoken in one breath. The model still helps you see that you skipped processing (and maybe laundered raw take as analysis) or skipped direction (and collected a hobby).

## Direction

Direction is the most skipped phase and the one that determines whether the rest was theater.

- **Requirements, not topics.** "Country X" is a continent. "Will Group Y try to disrupt Berth 12 in 14 days?" is a requirement.
- **Priority.** PIRs get oxygen. Everything else is best effort. If everything is PIR, collectors will prioritize by whoever shouted last.
- **Collection planning.** Which lawful sources could answer this, in time, without burning a capability for a trivia question.
- **Consumer engagement.** Analysts who never talk to the decision-maker produce beautiful irrelevance. Talk early. Talk after. Do not only talk when the product is late.

Someone will say "find out everything about X" and leave. Your job is to turn that into a question that can close. See intelligence requirements.

## Collection

Collection is gathering information on purpose. It is not "see what is out there."

- **HUMINT.** People. Intent and plans you cannot photograph. Also: access, bias, and the oldest lies.
- **SIGINT.** Signals and communications you are lawfully allowed to use. Access is not the same as meaning.
- **GEOINT.** Place and picture. Time of image is the claim.
- **OSINT.** Public and licensed open sources. Evaluation does not get a holiday because it was free.
- **MASINT.** Physical signatures. Comparison to a library, not a séance.

Do not collect everything. Unfocused collection is how signal drowns. Do not collect unlawfully. "The cycle said collect" is not a defense.

## Processing

Raw take is not a product. Processing is the unglamorous conversion: translation, decryption you are allowed to do, formatting, triage, quality checks.

- **Language and format.** A mistranslated modal verb can become a war. Treat processing errors as source errors.
- **Triage.** Most of what you collected will never be analyzed. That is the job working. Selecting is not bias if you can say the rule.
- **Indexing.** If nobody can find it next week, you did not process it. You visited it.

Shops that skip this phase brief raw intercepts and call it analysis. Consumers then think analysis is a font.

## Analysis

This is the so-what. Integration, interpretation, assessment, production.

- **Integration.** Multiple sources, graded, reconciled. Contradictions stay visible.
- **Interpretation.** What the activity means, not just that it occurred.
- **Assessment.** What is known, inferred, and still open, with confidence.
- **Production.** The form the consumer will actually use: warning, brief, estimate, table.

Good analysis names the gap. Bad analysis papers it. "This is the part where you stare at data until it confesses" is a joke. Data does not confess. You propose, and the next fact is allowed to fire you.

## Dissemination and Feedback

- **Push and pull.** Send what they need; let them find what they did not know to ask. Neither works if the title is clever and the BLUF is on page four.
- **Tailor.** Clearance, role, and time. One product, several skins, same judgment.
- **Feedback.** Did it arrive, did it matter, was it right enough? Review the misses and the hits. An office that only reviews failures learns to be timid. An office that never reviews learns nothing.

Feedback is how direction gets smarter. Without it, you will answer last year's question with this year's overtime.

## Practice

Tasking: "I need to know if Company X is planning to expand into our market." Walk all six jobs in short bullets: the real PIR, three lawful collection families, what processing looks like, the judgment format, who gets it, and what feedback you will ask for in a week.

Direction might include capital, intent, regulation, and timing indicators. Collection might include filings, hiring, and press — not someone's private mail. Analysis is the assessed likelihood and the window, not a scrapbook. Dissemination is a brief with confidence, not a folder.

If any step is "wing it," you have described the problem this lesson exists to prevent.
`

export default function IntelligencecyclePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Intelligence Cycle"
        subtitle="A working model of how information becomes a product — and a loop, not a line."
        humorSubtitle="If you treat the cycle as a line, your estimate is already stale. The world did not wait."
        readTime={25}
        difficulty="Beginner"
        category="Foundations"
        mascot="foundations"
        mascotMessage="Name the phase you skipped. That is usually the phase that will embarrass you."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="intelligence-cycle" />
      </MicroLesson>
    </LessonContainer>
  )
}
