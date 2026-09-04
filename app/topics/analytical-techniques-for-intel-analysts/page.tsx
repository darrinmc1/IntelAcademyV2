import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytical Techniques for Intelligence Analysts - The Intel Analyst Academy",
  description:
    "Learn when to use structured analytic techniques — ACH, key assumptions, devil's advocacy, red teaming, and scenarios — as habits, not souvenirs.",
}

const topicContent = `Structured analytic techniques are how you keep your first story from becoming the only story. They are not extra credit for slow days. They are the difference between an assessment and a mood that got a header.

This lesson is a field guide: which technique for which problem, what "done" looks like, and how shops fake the process with a template nobody filled in.

## Why Structure Exists

Your head will close early. It will do this faster when you are tired, senior, or already on the record. SATs make closure expensive in a useful way.

- **They externalize the argument.** A matrix or a list can be attacked. A vibe cannot.
- **They create dissent on purpose** while facts are still cheap.
- **They produce collection requirements** instead of "more reporting, please."
- **They leave a trail.** When the world disagrees, you can see which assumption died.

> If the technique takes longer than the decision, you chose the wrong technique — or you started it as theater after the decision.

## Analysis of Competing Hypotheses

Use ACH when two or more stories still fit the file and the consumer is about to pick one anyway.

- **Done looks like.** A short list of hypotheses (three to five, mutually exclusive enough to matter), evidence scored for inconsistency, and a surviving story that won by not dying.
- **Fails when.** You only invent hypotheses that make your lead look moderate; you score "consistent" as a gold star instead of hunting disconfirmers; you never update the matrix after Tuesday.
- **Output the consumer can use.** "H1 survives; H2 is inconsistent with the night traffic; H3 needs a second look at the registry. Collection: ownership change, not more color commentary."

There is a full lesson on ACH in this academy. Use this page to know when to open it.

## Key Assumptions Check

Use KAC when the product is load-bearing and polite.

- **Done looks like.** A list of beliefs the argument needs, each tagged: solid, questionable, or vulnerable. One sentence on what happens if it fails.
- **Fails when.** You list trivia ("the sun rose") or you refuse to list the belief that would embarrass the office.
- **Output.** "This estimate dies if the vendor is not actually a cut-out. That is now a PIR."

Most bad estimates are not missing a fact. They are standing on an assumption nobody wrote down because it felt like weather.

## Devil's Advocacy and Red Teaming

These are cousins. Do not use the words as synonyms to sound funded.

- **Devil's advocacy.** Someone argues against the lead judgment using the same file. Cheap, fast, and enough for most desk products.
- **Red teaming.** An independent effort to inhabit the other side's incentives and options, sometimes with a separate team. Expensive. Use when the decision is large or the shop is in love with itself.
- **Done looks like.** A written counter-case and a response, not a meeting where someone "played devil's advocate" for ninety seconds and sat down.
- **Fails when.** The dissenter is junior and already knows the cost; or the red team is scored on how clever the briefing looked.

## Scenario Planning

Use scenarios when a single-point forecast would be a lie you will have to eat later.

- **Done looks like.** Two to four worlds, named drivers, and indicators that would tell you which world you are entering.
- **Fails when.** You write ten novellas; or all roads lead to the policy you already wanted; or there are no indicators, so the scenarios cannot lose.
- **Output.** "If indicator set B lights up, we are in the supply-shock world, not the demand-shock world. Here is the collection to tell them apart."

## How to Choose in Under a Minute

- **Two stories, one file.** ACH.
- **The argument feels obvious.** Key assumptions, then devil's advocate.
- **High stakes, shop consensus.** Red team or Team A/B.
- **Forked future.** Scenarios plus indicators.
- **You have eleven minutes.** Write the lead judgment, one alternative, and one killer fact you do not have. That is a SAT. It just is not branded.

Combining techniques is normal. Stacking them to avoid writing the assessment is procrastination with worksheets.

## Practice

Tasking: "Is the factory idle or deceptive?" Pick a primary SAT, list three hypotheses or two assumptions, and name the evidence that would hurt your favorite story. Then write the sentence you will put in the product even if nobody asks for the matrix.

If your answer is "we should monitor," you used no technique. Monitoring is what you do after the structure produces a question.

## Coming Soon, Honestly

A printable SAT handbook and extra case packets are **Coming Soon**. ACH matrix PDFs already live on the Downloads page. Use those. Do not wait for a handbook 404 to start putting alternatives on paper.
`

export default function AnalyticalTechniquesForIntelAnalystsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Analytical Techniques for Intelligence Analysts"
        subtitle="Structured methods are how you make your first story earn the page."
        humorSubtitle="A blank ACH matrix is not tradecraft. Neither is a finished one you never update."
        readTime={22}
        difficulty="Beginner"
        category="Analysis"
        mascot="foundations"
        mascotMessage="Pick one technique and finish it. Collecting methods is not the same as thinking."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="analytical-techniques-for-intel-analysts" />
      </MicroLesson>
    </LessonContainer>
  )
}
