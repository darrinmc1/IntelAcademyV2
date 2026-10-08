import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategic Risk Assessment for Analysts - The Intel Analyst Academy",
  description: "Turn a vague worry into ranked, testable risks with likelihood, impact, confidence and triggers that a decision-maker can act on.",
}

// Added by the Empire weekly lesson workflow on 2026-10-09. Read time is computed from the word count (1449 words at 230 wpm).
const topicContent = `By the end of this lesson you will be able to turn a vague worry ("the region looks unstable") into a short, ranked set of risks that a decision-maker can act on. Each risk will carry a stated likelihood, impact, time horizon, confidence level and a named trigger to watch.

Strategic risk assessment sits between threat work and planning. Threat assessment asks who might harm us and how. Strategic risk assessment asks what could stop the organisation reaching its objectives over the next one to five years, and whether it should spend money or change course now. The product is judged on whether it changes a decision, not on how many risks it lists.

## Start with the decision, not the threat

Before you list a single risk, get four things in writing from the person who will use the assessment:

- The decision on the table, for example whether to qualify a second supplier, enter a market or renew a lease.
- The objective at stake, stated as something the organisation wants to achieve rather than something it wants to avoid.
- The time horizon. A risk that matures in eight months and one that matures in five years need different evidence and different responses.
- The risk appetite: what loss the decision-maker would accept, and what loss would end the project.

Customers rarely volunteer these. "Assess the risks in Country X" names a topic, not a requirement, and you can spend three weeks producing something accurate and unused. Ask in the first meeting and record the answers as your tasking. If the customer cannot answer, that is your first finding, and it is cheaper to discover it on day one.

## Write risk statements that can be wrong

A register full of nouns ("political instability", "cyber", "supply chain") cannot be assessed, because nobody can say what would count as it happening. Write each risk as one sentence with a cause, an event and a consequence for the objective.

"Because the governing coalition depends on fuel subsidies it cannot afford, a sudden subsidy cut may trigger sustained transport strikes within 12 months, halting outbound shipments from our only supplier in the region."

That statement can be proven wrong, which is the point. It also keeps three things apart that tend to blur together:

- Driver: the actor or condition that creates the hazard.
- Exposure: how your organisation is connected to it. A coup in a neighbouring country is a headline. A coup in the one country that hosts your single supplier is a risk.
- Impact: what happens to the objective, not to the world in general.

Drivers come from structured scanning. Strategic Intelligence: Expanding PESTLE Analysis for a Dynamic World covers that step, Risk Factor Indicators for Intelligence Analysis covers what to watch, and Threat Assessment: Methodologies for Evaluating and Prioritizing Threats covers the actor-focused view. This lesson starts where those finish.

## Rate likelihood and impact on scales you have defined

Ratings only help if the reader knows what they mean. Agree the scales with the decision owner before scoring, and print the definitions on the same page as the results.

- Likelihood: judged over the stated time horizon, using standard estimative language ("unlikely", "likely", "very likely") with a short glossary of what each term means for your team. Without definitions, every reader supplies their own.
- Impact: tied to the objective, using thresholds the decision owner sets, such as "production halted for longer than current buffer stock lasts". A bare one-to-five scale invites argument about what a three is.
- Confidence: high, moderate or low, stated separately from likelihood. It reflects source quality, corroboration and gaps. You can judge an event likely with low confidence, and you should say so plainly.

Before you finalise, test your top-rated risks against alternatives. Ask what evidence would show the risk is overstated and what else could produce the same indicators. Analysis of Competing Hypotheses gives a structured way to do this, and Cognitive Biases in Intelligence explains why the vivid risk tends to outscore the dull one that is more probable.

Once ratings are agreed, rank using the approach in Threat Prioritization and hand the top items to the people who own Mitigation Options. Your job is to describe the risk accurately, not to choose the response.

## Worked example: a single supplier in a contested region

Priya is an analyst at a mid-size manufacturer. Marcus, the operations director, must decide within a quarter whether to pay to qualify a second supplier. Priya records the tasking: objective is uninterrupted output of one product line, horizon is 24 months, and Marcus will accept a short disruption but not one longer than the six weeks of buffer stock.

She drafts three risk statements.

1. Fuel subsidy cut leads to transport strikes that block the supplier's export route.
2. New export licensing rules delay shipments beyond the buffer period.
3. A port operator dispute closes the main terminal.

Using the agreed scales, she rates them as follows:

- Risk 1: likely over 24 months, impact above the buffer threshold, moderate confidence. Two reliable reports describe the subsidy debt, but she has seen little on the coalition's intentions.
- Risk 2: unlikely, impact above threshold, low confidence. The evidence is a single press report of a draft rule.
- Risk 3: unlikely, impact below threshold, because the supplier has used a second terminal before.

Her key judgment reads: "We assess with moderate confidence that a transport disruption lasting longer than our buffer stock is likely within 24 months. This is the only risk of the three that exceeds the stated appetite."

Each risk gets a trigger. For Risk 1 it is a formal subsidy-reform announcement or a transport union strike notice. She also lists a gap: no one has confirmed whether the supplier holds its own fuel reserves. Under alternatives, she notes that the coalition could fund the subsidy through external financing, which would lower the likelihood, and says what reporting would show that.

Marcus gets one page, a rated table and a recommendation to task a collection effort on the gap. He can decide in an afternoon. This is the outcome to aim for.

## Checklist before you send it

- Does the first paragraph name the decision and the owner?
- Is every risk a cause, event and consequence statement tied to the objective?
- Are exposure and driver described separately?
- Are scales defined on the page, with a time horizon on every likelihood?
- Is confidence stated separately and explained in a sentence?
- Have you tested the top risks against at least one alternative explanation?
- Does each risk have an observable trigger?
- Are intelligence gaps listed, with a suggested way to close them?
- Is your sourcing described well enough that a reviewer can check it? Intelligence Report Fundamentals covers layout.
- Have you kept recommendations separate from judgments?

## Common mistakes

- Scoring the threat instead of the risk. A capable, hostile actor with no route to your assets is a threat with low risk. Rate exposure, not just capability.
- Averaging. Multiplying likelihood by impact and ranking by the product hides rare, severe events behind frequent, trivial ones. Show both axes and flag low-likelihood, high-impact items separately.
- False precision. "Likelihood 37 percent" on soft evidence suggests knowledge you do not have. Use defined ranges or terms.
- Treating confidence as a hedge. Writing "may possibly occur" tells the reader nothing. State the judgment, then state confidence.
- Listing risks with no owner or trigger. If nobody can act on it and nobody will notice when it changes, it is background reading.
- Never reassessing. A strategic assessment is a baseline. Set a review date and re-rate when a trigger fires. Indicators and Warnings explains how to track them.
- Drifting into advocacy. Once you recommend a response, the customer cannot tell where evidence ends and preference begins.

## Exercise for this week

Pick a real decision your organisation faces in the next year, or invent a plausible one if the real ones are confidential. Spend 90 minutes on the following.

1. Write the tasking in four lines: decision, objective, horizon, appetite.
2. Draft five risk statements in cause, event, consequence form.
3. Define a three-level likelihood scale and a three-level impact scale, with one sentence per level.
4. Rate each risk and give a confidence level with a one-sentence reason.
5. For your top two risks, write one observable trigger and one alternative explanation.
6. List the two biggest intelligence gaps and one lawful, proportionate way to address each.

Give the result to a colleague and ask them one question: "What would you do differently after reading this?" If the answer is "nothing", find out whether the decision was wrong or your assessment was.
`

export default function StrategicRiskAssessmentForAnalystsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title={"Strategic Risk Assessment for Analysts"}
        subtitle={"Turn a vague worry into ranked, testable risks with likelihood, impact, confidence and triggers that a decision-maker can act on."}
        humorSubtitle={"Nobody ever asked for a list of 40 risks. They asked what to do about the three that matter."}
        readTime={7}
        difficulty={"Intermediate"}
        category={"Strategic Intelligence"}
        mascot="foundations"
        mascotMessage={"If your risk has no trigger and no owner, it is a mood, not an assessment."}
      >
        <EnhancedLessonContentLoader content={topicContent} topic="strategic-risk-assessment-for-analysts" />
      </MicroLesson>
    </LessonContainer>
  )
}
