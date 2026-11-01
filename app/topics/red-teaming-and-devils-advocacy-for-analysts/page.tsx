import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/red-teaming-and-devils-advocacy-for-analysts" },
  title: "Red Teaming and Devil's Advocacy for Analysts",
  description: "Run a structured challenge against your own judgment: build the best case against it, then view the problem from the adversary's side.",
}

// Added by the Empire weekly lesson workflow on 2026-11-02. Read time is computed from the word count (1693 words at 230 wpm).
const topicContent = `By the end of this lesson you will be able to run two short, structured challenges against your own work: a devil's advocacy review of a specific judgment, and a red team exercise that asks how an adversary or a sceptical outsider sees the same situation. Both fit into a normal working week and neither needs a committee.

This matters because the author of an assessment is the worst-placed person to find its flaws. You know what you meant, so you read what you meant. A planned challenge before release costs an hour. The same challenge delivered by a customer, an auditor or a bad outcome costs considerably more, and comes with minutes.

## Two techniques, two different questions

Devil's advocacy asks: if this judgment is wrong, what is the strongest case that it is? One person takes a specific conclusion and builds the best argument against it, using the same evidence plus anything that was set aside along the way.

Red teaming asks: how does this look from the other side? A person or small group adopts the perspective of an adversary, a competitor or a hostile reviewer and produces an independent view of goals, options and likely behaviour.

In short, devil's advocacy attacks a judgment and red teaming attacks a perspective. In this lesson "red team" means an analytic exercise on reasoning. It is not penetration testing of a network or a building.

Neither replaces techniques you may already use:

- A key assumptions check lists what your judgment rests on. Devil's advocacy attacks the conclusion itself. Run the check first (see *Key Assumptions Check: Testing What Your Judgment Rests On*) and hand the list to your challenger.
- Analysis of Competing Hypotheses compares several explanations against all the evidence. Devil's advocacy picks one explanation and tries to break it.
- Cognitive bias awareness tells you what goes wrong in your head. A challenge puts a second head on the problem. See *Cognitive Biases in Intelligence*.

Spend the effort where it pays:

- Judgments that are expensive to reverse, such as resource deployment, account closures or a recommendation to escalate.
- Judgments that have not moved in months. Stability can mean the picture is stable, or that nobody is looking.
- Conclusions reached quickly and without argument. A judgment everyone agreed with by Tuesday lunchtime deserves a second look on Tuesday afternoon.
- Assessments that lean heavily on one source or one type of source.
- Anything where the customer has made clear which answer they would prefer.

Skip it for routine updates and low-stakes products. A challenge on everything becomes a ritual, and rituals get skipped.

## Running a devil's advocacy review

Time-box it. An hour is enough for most tactical products. A strategic assessment may justify a day.

1. **State the judgment.** Write it in one sentence with its confidence level and the two or three sources it leans on most. If you cannot state it in one sentence, you have found your first problem.
2. **Pick the challenger.** Choose someone who did not draft the product, knows enough of the subject to be credible, and cannot be penalised for disagreeing. Rotate the role so it does not become one person's reputation.
3. **Hand over the material.** Give the challenger the evidence, the source evaluations and your assumptions list. Withhold nothing inconvenient. A challenge built on a curated file is a rehearsal.
4. **Let them build the case against.** The challenger rereads the evidence for alternative readings, looks at reporting you discounted, asks what would have to be true for the judgment to be wrong, and checks where sourcing is thin or circular.
5. **Get it in writing.** One page, plain language, ranked by how much each point would change the judgment.
6. **Respond point by point.** For each challenge you either accept it and change the product, reject it with a stated reason, or convert it into a collection task or intelligence gap.
7. **Record the outcome.** Judgment changed, confidence changed, caveat added, or unchanged with reasons. Unchanged is a legitimate result. A judgment that survived a real attack is stronger, and you can say so.

The challenger must work from the evidence. Inventing facts to make a point is advocacy of the wrong kind. The standard is "this reading is also consistent with what we hold", not "imagine if".

## Red teaming: the adversary's view

Red teaming uses the same discipline, aimed at a different target. You are not predicting the adversary from your own perspective. You are writing from theirs.

Keep it lawful and proportionate. Work from reporting your organisation already holds and from open sources you are entitled to use. The exercise concerns the reasoning of a group, a market actor or a type of threat. It is not a way to plan harm, and it is not a licence to collect new material on a named individual.

Answer these in the adversary's voice, in a page or less:

- What are my goals, and what do I fear losing?
- What do I believe the defender knows about me, and how reliable is that belief?
- Given my skills, money, time and people, which options do I realistically have?
- What would I do that the defender is not expecting or not set up to see?
- Who decides, under what pressure, and with what habits or rules?

Two traps spoil most red team products.

The first is mirror imaging: assuming the adversary would choose what you would choose. Ask what is rational given their goals and constraints, not yours. The second is caricature, where the adversary is either stupid or omniscient. Neither is useful. A competent adversary with limited resources and imperfect information is the working assumption.

If the subject may be hiding or misleading, add one more question: what would we see if they were doing this well? *Denial and Deception: Spotting Indicators of Manipulation* covers that angle in more depth.

The product is short: the adversary's likely view, the options they would favour, and a list of things the current assessment or monitoring plan would miss. That last list is where the value is.

## Worked example

This is an illustration with invented details.

Priya is an analyst in a bank's financial crime unit. She has assessed with high confidence that eleven recently opened accounts are controlled by one money mule network. Her evidence: shared device identifiers on several accounts and similar transaction timing across all eleven.

She asks Marcus, who did not work the case, to argue against her. He returns a page with three points.

- Device identifier overlap can come from shared hardware, public terminals or a fingerprinting method that produces collisions. How many accounts actually overlap?
- Similar timing is what you would expect from people paid on the same day. Does the timing distinguish a network from a payroll cycle?
- Her high confidence rests on two indicators that may not be independent, because both come from the same onboarding data.

Priya checks. Only four accounts share device identifiers. Six of the eleven receive deposits from the same employer's payroll. Her original judgment overreached.

Marcus then switches to a red team view. A mule operator who knows banks flag shared devices would use separate devices. So the absence of overlap on seven accounts does not clear them. It simply means this indicator cannot assess them. He suggests beneficiary-account overlap as a better test.

The revised product reads: moderate confidence that four accounts are linked, based on device overlap and timing. The remaining seven are not assessed as linked on current evidence. A collection task is raised on beneficiary accounts. Priya's product is less dramatic and more defensible. The customer gets an accurate picture and a clear next step.

## Before you release: a checklist

- Is the judgment stated in one sentence with a confidence level?
- Has someone who did not draft it tried to build the case against it?
- Did the challenger see the full evidence, including discounted reporting?
- Is each challenge answered as accepted, rejected with reasons, or tasked?
- Does the red team view avoid both mirror imaging and caricature?
- Is the outcome recorded, including if nothing changed?
- Do confidence wording and caveats match what survived the challenge? See *Estimative Language*.

## Common mistakes

- **Choosing a friendly challenger.** If your challenger always agrees with you, you have bought a signature, not a review.
- **Challenging after sign-off.** Once the product has been approved, nobody wants it to change. Run the challenge while changing it is still cheap.
- **Treating it as a vote.** The challenger is not a second author. The drafter still owns the judgment but must answer each point with reasons.
- **Playing the adversary as yourself.** If the red team product reads like your own plan with a hood on, start again.
- **Making it personal.** Challenge the reasoning, not the analyst. If people dread the exercise, they will start hiding weak spots.
- **Skipping the record.** Next quarter, someone will rerun the same objections. A short note saves them the trouble and shows your work if the judgment is later questioned. For wider context on what happens when it is not, see *Intelligence Failures*.
- **Using it on everything.** Reserve it for judgments that carry weight, or the process will be treated as paperwork.

## Exercise for this week

Pick one judgment you have made in the last month that someone acted on or could act on. Take 45 minutes.

1. Write the judgment in one sentence with your confidence level.
2. List the three assumptions it depends on most.
3. Write a 150-word case against it using only evidence you already hold. If you can, ask a colleague to do this step instead.
4. Write five lines from the adversary's or a sceptical outsider's viewpoint: goals, constraints, options, what they think you know, what they would do that you would not expect.
5. Decide and record: change the judgment, change the confidence, add a caveat or collection task, or leave it with reasons.

Keep the note. If the result was "no change", you now hold a documented reason to trust the judgment more. If it did change, you have also found something worth telling your supervisor about before they find it for you.
`

export default function RedTeamingAndDevilsAdvocacyForAnalystsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title={"Red Teaming and Devil's Advocacy for Analysts"}
        subtitle={"Run a structured challenge against your own judgment: build the best case against it, then view the problem from the adversary's side."}
        humorSubtitle={"Your assessment survives its first critic more easily if the critic is in the building."}
        readTime={8}
        difficulty={"Intermediate"}
        category={"Analysis"}
        mascot="foundations"
        mascotMessage={"Better a colleague finds the hole on Tuesday than the customer finds it in the briefing."}
      >
        <EnhancedLessonContentLoader content={topicContent} topic="red-teaming-and-devils-advocacy-for-analysts" />
      </MicroLesson>
    </LessonContainer>
  )
}
