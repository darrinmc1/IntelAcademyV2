import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Evaluating Collection Plans | The Intel Analyst Academy",
  description:
    "Judge a collection plan by whether it answered the decision, not by how busy the collectors looked, and retask or stop with a straight face.",
}

const topicContent = `Collection feels productive. People are tasked, folders thicken, a dashboard goes green. None of that answers the only evaluation question that matters: did we fill the gap that justified the plan, in time for the decision, with evidence we can stand on? This lesson is the after-action for a collection plan — how to score it without vanity metrics, when to retask, and when to stop.

> A collection plan that was never reviewed is a diary. Flattering to the author. Useless to the person who needed an answer.

The intelligence cycle already tells you feedback exists. The collection-planning process already names evaluation as a phase. This lesson is what you actually write down so the next plan is not a sequel to the same mistake.

## Start From the Gap, Not the Activity

Put the original gap statement at the top of the review. If you cannot find it, that is finding number one: you collected without a decision to serve. Reconstruct it if you must, and mark it reconstructed so you do not pretend the plan was tighter than it was.

Then answer, in order:

- Was the decision made, deferred, or overtaken?
- Did the decision-maker get the specific information the gap named, or a neighbouring fact we found more comfortable to collect?
- Did it arrive before the date, after the date, or in time to be ignored politely?
- What did we still not know, and did we say so in the product or did we write around the hole?

A plan can be busy and fail all four. A plan can look thin and pass. Judge the gap.

## Four Checks That Are Not Vanity

Vanity metrics: number of reports, number of sources "touched," pages produced, hours charged. They measure motion. Use these instead.

- **Coverage of the essential elements.** Take the list you put in the task. Mark each element filled, partially filled, negative-and-reported, or silent. Silent is a failure of the task or of the collector's return. Negative-and-reported is a success. Do not blur them.
- **Timeliness against the decision date.** Not against how fast you felt. A return two days after the tender closed is a miss even if everyone worked hard.
- **Independence.** Did you get the second kind of evidence you said you needed, or did five items collapse into one wire story and a briefing that cited it twice?
- **Contradictions handled.** If two sources disagreed, did the product show the disagreement, or did the disagreement get edited out because the slide had room for one bullet?

Add a fifth only if it changes a future task: **what we collected that nobody asked for, and whether it opened a real new gap or merely a longer annex.** Bonus collection is not free. It costs the element you did not fill.

## Retask, Narrow, or Stop

Evaluation that never changes the next task is a book report. You have three honest moves.

- **Retask** when the gap is still live, the decision date still exists, and you now know which element failed. The new task names the miss. It does not say "try again, but more." Say what was silent, what source you will not repeat, and what "done" means this time.
- **Narrow** when the original requirement was a wardrobe and the decision only needed a coat. Cut the elements that did not move the decision. Tell the collector which ones died so they do not keep fetching them out of loyalty.
- **Stop** when the decision is made, the gap is accepted as unknown, or further collection costs more than the remaining uncertainty is worth. Stopping is a product. Write it down: gap closed as accepted uncertainty, owner informed, no further task. Otherwise someone will reopen it next Tuesday because the register still says open.

Do not retask to punish a collector for a negative result you yourself defined as useful. That is how you train people to hide negatives, and then your coverage marks become fiction.

## The Short After-Action

Keep it to a page. Longer reviews do not get read, which means they do not change plans.

- **Gap and decision date.** One or two lines.
- **Score.** Filled, partial, or missed — for the gap, not for the effort.
- **Element table.** A few lines. Filled, negative, or silent.
- **Source independence.** Did the plan's second source happen?
- **What we will do differently.** One retask, one narrow, or one stop. Not a list of aspirations.
- **Who was told.** The requirement owner. If they were not told the gap stayed open, the evaluation did not leave the analyst's notebook.

File it where the next planner will trip over it, attached to the register, not in a lessons-learned folder that is actually a landfill.

## Feedback People Can Hear

Requirement owners do not want a lecture on the intelligence cycle. They want to know whether to decide. Say it in their units.

"You asked whether Supplier Q's filings show a default before 1 June. They do not, in the public record we were allowed to use, as of 20 May. We did not get a second source on operational delays. I would not treat the financial silence as proof the deliveries are safe. The gap on delays is still open. I recommend you either accept that uncertainty for the June tender or slip the tender. I am not tasking further financial collection. It answered."

That is feedback. "Collection efforts are ongoing" is what you say when you do not want to be evaluated.

## When the Plan Was Wrong Before Anyone Collected

Sometimes the review shows the failure was upstream. The gap was vague, the source match was the discipline you happened to own, the task smuggled the verdict. Say that. Blaming the take for a bad task is how the same task gets issued next month with a new suspense date. The other lessons on this path — gap analysis, source matching, task writing — exist so this paragraph gets shorter over time. If it does not, the evaluation is decorative.

## Exercise

You receive this "result" on the diesel-supplier question from the source-matching lesson.

The OSINT return includes: the supplier's annual report, which is unqualified and silent on covenants; three trade-press articles that all quote the same company statement about "robust logistics"; no court filings found in the two jurisdictions you named; nothing on actual delivery performance. It arrived four days before the tender meeting. Nobody tasked a second source.

Write the one-page after-action.

- Score the gap, not the effort.
- Mark each element filled, negative, or silent.
- Name the independence failure in one sentence.
- Choose retask, narrow, or stop, and write the exact next line you would send — either a new task, a narrowed task, or a stop note to the requirement owner.

You may not award the plan a pass because the collector was fast.`

export default function EvaluatingCollectionPlansPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Evaluating Collection Plans"
        subtitle="Score the gap, not the bustle, and then retask, narrow, or stop."
        humorSubtitle="Hours charged are not a finding. They are a timesheet."
        readTime={15}
        difficulty="Intermediate"
        category="Data Collection Planning"
        mascot="foundations"
        mascotMessage="A negative you asked for is a result. Silence is not."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="evaluating-collection-plans" />
      </MicroLesson>
    </LessonContainer>
  )
}
