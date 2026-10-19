import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/strategic-risk-assessment-for-analysts" },
  title: "Strategic Risk Assessment for Analysts",
  description: "Build a strategic risk assessment a decision-maker can act on, with scoped scenarios, defined ratings, stated confidence and review triggers.",
}

// Added by the Empire weekly lesson workflow on 2026-10-09. Read time is computed from the word count (1615 words at 230 wpm).
const topicContent = `By the end of this lesson you will be able to build a strategic risk assessment that a decision-maker can act on. It has a defined scope, a small set of scenarios, ratings you can defend, and key judgments that say what you think and how sure you are.

This matters because the usual alternative is a risk register with forty rows, a colour for each and no decision attached. It gets approved, filed, and opened again only after something goes wrong, when it is read for blame rather than information.

## Start with the decision, not the hazard

Strategic risk is risk to an organisation's objectives over a long horizon. So before you list a single hazard, write down four things:

- **The decision.** Who is deciding what? Renew a contract, enter a market, fund a control, keep a supplier.
- **The objectives or assets at stake.** What does the customer actually need to keep working or keep safe?
- **The horizon.** Twelve months and five years produce different assessments of the same subject.
- **The tolerance.** What level of disruption or loss would the customer call unacceptable? If nobody can say, that is a finding in its own right. Ask until someone does.

Put these in a short terms-of-reference paragraph and get the customer to agree to it. "Everything that could go wrong" is a common first request, and it has no end point. You can turn it into a scope by asking which decision the assessment will inform.

This lesson is not the same as *Threat Assessment: Methodologies for Evaluating and Prioritizing Threats*. A threat assessment starts from an actor or hazard and asks how dangerous it is. A strategic risk assessment starts from what you must protect and treats threat assessments as one input among several.

## Write risk statements that can be wrong

A risk has three parts: a source of harm, an exposure that lets the harm land, and a consequence for something the customer cares about. Use a fixed template so vague entries cannot survive:

"Because [source or condition], and given [vulnerability or exposure], [event] could occur, causing [consequence] to [objective] within [horizon]."

"Cyber risk" is a topic. "Theft of vendor credentials, given that supplier portal accounts have no second authentication factor, could halt invoicing for several days within 12 months" is a risk statement. You can test it, rate it and hand it to someone who can fix the exposure.

Not every source is an adversary. Regulatory change, supplier failure, political instability and infrastructure decay all belong here. For broad external drivers, use *Strategic Intelligence: Expanding PESTLE Analysis for a Dynamic World*. For the observable signs that a driver is moving, use *Risk Factor Indicators for Intelligence Analysis*. For slow-building developments, see *Long-Term Threats and Opportunities*.

Check each statement for one event and one consequence. If you wrote "and" between two events, split it. Compound statements cannot be rated honestly.

## Group risks into scenarios, then rate them

Forty risk statements will not fit in a decision-maker's head. Group them into three to five scenarios. A useful set usually includes:

- a plausible, recurring disruption,
- a plausible adverse case that is worse than recurring,
- a low-likelihood, high-impact case the customer would rather not discuss.

Each scenario gets a short narrative, the conditions that must hold for it to happen, the indicators you would see first, and the impact on the stated objectives. If two explanations fit the same indicators, test them against each other using *Analysis of Competing Hypotheses* before you commit to one.

**Rate likelihood** with words, not invented numbers. Use the estimative terms from your organisation's standard, or agree a scale with the customer in advance and print it in the product. Our *Estimative Language* lesson covers the wording. Whatever scale you choose, define it before you rate anything.

**Rate impact** in the customer's terms. "Severe" should mean something like "unable to deliver a core service for longer than the tolerance you gave us", not a feeling. The customer sets these definitions; you apply them.

**Rate confidence separately.** Likelihood says how probable you think the event is. Confidence says how much weight your estimate can bear. It depends on source quality, corroboration, known gaps, and how much rests on assumptions. A scenario can be unlikely with high confidence, or likely with low confidence, and the customer needs to know which.

A risk matrix is fine as a display. Do not multiply two ordinal ratings and present the product as a measurement. A score of 12 is not twelve of anything. Keep the reasoning next to the coloured square, because the square alone cannot be defended.

Also state whether you are rating inherent risk (no controls) or residual risk (with current controls). Pick one per product and say so.

## Worked example: a single-port supply route

This is an illustration with a fictional analyst. Priya works for a mid-sized food distributor. Leadership asks whether to keep importing through one port for the next two years.

**Terms of reference.** Decision: keep or diversify the route. Objective: uninterrupted delivery to retail customers. Horizon: 24 months. Tolerance, as stated by the customer: more than one week of disruption is unacceptable. Rating basis: residual risk with current controls.

**Scenarios, as Priya drafts them:**

1. **Labour action causes intermittent delays.** Likelihood: likely. Impact: moderate. Confidence: moderate. There is a public dispute history and recent statements from both sides, but she cannot see the state of the contract talks.
2. **Prolonged port closure from severe weather or infrastructure failure.** Likelihood: unlikely. Impact: severe, because it exceeds the one-week tolerance. Confidence: low to moderate, because she has limited reliable data on infrastructure condition.
3. **A change to the inspection regime slows clearance.** Likelihood: roughly even chance. Impact: moderate. Confidence: low, because only draft proposals exist.

**Key judgment as she writes it:** "We assess it is likely that labour-related delays will affect at least one shipment cycle in the next 24 months. We have moderate confidence in this judgment. It assumes the current contract negotiations continue without agreement."

Priya also notes the exposure that drives the rating. There is no pre-agreed alternative routing, so every delay lands directly on delivery. She flags this as the controllable factor and passes it to the people choosing responses, using *Mitigation Options*. She does not recommend a mitigation herself unless her terms of reference say she should.

## Key judgments, assumptions and review triggers

Write three to five key judgments. Each one carries the statement, the likelihood, the confidence, and a one-sentence basis. Lead with the judgment that matters most to the decision, not the one you found first.

Then list your assumptions and mark which would change a rating if they failed. In the example above, "negotiations stay unresolved" is one. Most assessments have a handful of load-bearing assumptions, and the customer should see them.

Finally, attach review triggers. These are specific, observable events that mean the assessment needs reopening, such as a signed agreement, a published regulation, or a supplier's change of ownership. This is where *Indicators and Warnings* connects to risk work. Without triggers, your assessment goes stale and keeps its authority.

Before release, check:

- The decision and the named reader are on the first page.
- Scope, horizon and tolerance are stated.
- Every risk statement has a source, an exposure and a consequence.
- Scales are defined, and likelihood, impact and confidence are rated separately.
- Inherent or residual basis is stated.
- Key judgments come first, with assumptions listed.
- Sources and gaps are visible, and gaps link to follow-up collection (see *Intelligence Gap Analysis*).
- Review triggers are listed.

For packaging the finished work, see *Strategic Intelligence Products: Bridging the Gap Between Information and Action*.

## Common mistakes

- **Starting from a generic hazard list.** You get coverage of everything and relevance to nothing. Start from the decision.
- **Rating before defining scales.** "High" means different things to different readers, and they will disagree after the briefing rather than during it.
- **Merging likelihood and confidence.** A reader who sees only "high" cannot tell whether you mean probable or well-evidenced.
- **Treating the matrix as the finding.** The finding is the judgment and its reasoning. The matrix is a summary.
- **Rating only what is easy to find.** The risks with plentiful open-source reporting get detailed treatment. The ones with no data get left out. Record the gap instead, and review your own tilt against *Cognitive Biases in Intelligence*.
- **Hiding assumptions.** If the assessment fails because of something you assumed and did not write down, the failure is yours.
- **Drifting into recommendations.** Show which exposure drives the rating. Leave the choice of response to those who own the budget and the risk, unless you were asked.
- **Never reviewing.** An assessment with no triggers and no date for reconsideration becomes a historical document.

## Exercise for this week

Choose a real decision, either in your organisation or one in public view, such as a city council deciding whether to rely on a single contractor for a key service. Use only lawful, open information. Spend about 90 minutes producing a one-to-two page assessment with:

1. Terms of reference in four lines: decision, objective, horizon, tolerance.
2. Three risk statements in the template format.
3. One scenario narrative with conditions and first indicators.
4. Ratings for likelihood, impact and confidence, with your scales defined at the top.
5. One key judgment with its basis and the assumption it depends on.
6. Two review triggers.

Then give only the key judgment to a colleague and ask what decision they would make from it. If their answer differs from what you intended, fix the judgment before you fix anything else.
`

export default function StrategicRiskAssessmentForAnalystsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title={"Strategic Risk Assessment for Analysts"}
        subtitle={"Build a strategic risk assessment a decision-maker can act on, with scoped scenarios, defined ratings, stated confidence and review triggers."}
        humorSubtitle={"A risk register with forty rows and no decision attached is a filing exercise."}
        readTime={8}
        difficulty={"Intermediate"}
        category={"Strategic Intelligence"}
        mascot="foundations"
        mascotMessage={"Nobody ever asked for a risk matrix. They asked whether to sign the contract."}
      >
        <EnhancedLessonContentLoader content={topicContent} topic="strategic-risk-assessment-for-analysts" />
      </MicroLesson>
    </LessonContainer>
  )
}
