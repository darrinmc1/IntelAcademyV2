import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Threat Prioritization | The Intel Analyst Academy",
  description:
    "Rank threats when every stakeholder says theirs is critical: likelihood, impact, time to intervene, and a priority list you can defend without theatre.",
}

const topicContent = `A threat assessment that calls everything critical has not assessed anything. It has agreed with the room. Prioritization is the part where you spend a scarce resource — attention, a protective package, a patrol hour, a briefing slot — on one problem instead of another, and you can say why. This lesson is that ranking. It assumes you already know what a threat, a vulnerability, and a risk are, and that you have seen a model or two. The models lesson shows you frames. This lesson is how you leave the frame with an order.

> If every threat is critical, your priority list is a mood.

## Priority Is a Resource Decision

You are not ranking how upsetting a story is. You are ranking where the next unit of effort changes the outcome most. That is why a lurid low-likelihood case can lose to a dull high-likelihood one, and why a senior officer's favourite threat does not automatically sit at the top. If your list cannot change someone's Tuesday, it is a taxonomy. Taxonomies are fine in an annex. They are not a priority.

Say the resource out loud at the top of the product. "This order is for the protective detail's hours this month." A different resource — a policy review, a capital project, a criminal investigation — can produce a different order from the same facts. Analysts who hide the resource produce lists that feel inconsistent and are actually about two different decisions.

## Three Factors, Not Two

Likelihood and impact are the usual pair. They are not enough, because a high-impact threat you cannot affect before it arrives is a different management problem from a high-impact threat you can still interrupt by ordinary means.

- **Likelihood.** How probable is the harmful event in the timeframe of this decision? Use the estimative language your organization already published. Do not invent a private scale the night before the brief.
- **Impact.** Harm to the thing you are actually charged to protect: people, a service, a legal duty, a defined asset. Not "reputational" as a fog. Whose reputation, measured how, against what alternative.
- **Time to intervene.** How long before the decision window closes, and is there a lawful, practical action that still changes the outcome? A threat with no remaining intervention is a warning and a recovery problem. It should not outrank a threat you can still reduce, unless the impact gap is so large that recovery planning itself is the priority. Say which.

Opportunity and capability belong inside likelihood, not as a second secret formula. The fundamentals lesson already separates capability from intent. If either is weak, likelihood comes down. Do not double-count them by scoring "intent" again as its own crisis.

## Build the Order in the Open

Pick a method and stick to it for the product. Mixing methods mid-list is how a favoured threat gets a custom ruler.

- **Matrix.** Likelihood bands against impact bands, with time-to-intervene as a note that can move a case one band. Good when you have many comparable cases and a room that will argue unless they can see a grid.
- **Ordinal ranking.** A forced order, one through n, with a sentence of reasons under each. Better when the cases are few and unlike each other. A matrix pretends a protest-related disruption and a failing flood pump are the same kind of object. Sometimes they are not.
- **Narrative with explicit criteria.** You state the criteria first, then apply them. Use this when the reader will not look at a grid but will claim you were arbitrary. The criteria are your defence.

Whichever you pick, write the criteria before you score. Scoring first and discovering your criteria afterwards is called a justification. People can tell.

Calibrate impact against a real loss, not against infinity. "Catastrophic" for a city emergency-management shop means mass casualty or loss of a critical service. It does not mean a rude headline. If you let headline-risk occupy the catastrophic band, everything else flattens, and the word is spent.

## Residual Risk, or You Will Re-Rank Last Year's Work

Score the threat given the controls that already exist, and say so. A site with a working access-control system and a trained receptionist is not the same case as the same site on paper with neither. If you score the untreated threat every cycle, you will recommend the same control forever and call it analysis.

Also note the control you are assuming. "This ranks third only while the weekend alarm contract is in force." When the contract lapses, the rank changes without any new adversary. That sentence is more useful than a fresh colour on a slide.

## Defend the List When the Room Disagrees

Someone will want their issue moved up. Treat that as information, not as an attack, and not as an order.

- Ask which factor they think you scored wrong: likelihood, impact, or time. Make them pick. "It's just more serious" is not a factor.
- Show the comparable case that would have to fall if theirs rises. Priority is ordinal. Rising is not free.
- If they have a fact you did not have, change the score and say you changed it. Stubbornness is not rigor.
- If they have a preference and no fact, record the analytic order and the decision-maker's chosen order as two different things. They are allowed to spend the resource differently. They are not allowed to call their preference your assessment.

Do not privately edit the list after the meeting so the slides match the loudest person. The next analyst will inherit a list that no longer matches the evidence, and will not know which half to trust.

## What Changes the Order

A priority list is perishable. Put a review trigger on it.

- A factor moves: new capability, a stated intent you can source, a control that fails, a date that arrives.
- The resource changes: you are now ranking for an investigation, not for a guard rota.
- The timeframe changes: a one-week event plan is not a one-year capital plan.

If none of those happened, do not reshuffle the list to look busy. Stability in the face of no new evidence is a finding.

## Exercise

You support a hospital preparing for a city festival weekend. You may only use these four problems. Rank them for the duty manager's weekend plan, not for a national strategy.

- A scheduled protest march will pass the ambulance bay on Saturday afternoon. Organizers have published a route and a steward plan. No violence has been associated with this group in the past two years. Likelihood of a short bay obstruction: likely. Impact if it happens: delayed ambulance access for under an hour.
- A pharmacy supplier has missed two routine deliveries this month. The controlled-drug cupboard covers four days at current use. The next delivery is booked for Friday, with no second supplier under contract.
- An anonymous social-media account posted a vague grievance about the hospital and a festival photo. No specific target, time, or method. The account has no history you can verify.
- The basement sump pump failed its monthly test. Facilities can replace it Monday. Heavy rain is forecast Saturday night. Facilities says a failure would flood records storage, not clinical floors, if the temporary pump they own is staged.

Write one page.

- State the resource you are prioritizing.
- Put the four in order using likelihood, impact, and time to intervene.
- Say which one you refuse to call critical, and why the word does not fit.
- Name the single fact that would move your number-three case up to number one.
- Note one control you assumed, and what happens to the rank if it is not actually in place.

Do not add weapons, plots, or tactics. The exercise is the ranking.`

export default function ThreatPrioritizationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Threat Prioritization When Everything Is Urgent"
        subtitle="Rank where the next hour of effort changes the outcome, and keep the word critical scarce."
        humorSubtitle="A list on which nothing is allowed to be second is not a list. It is applause."
        readTime={16}
        difficulty="Advanced"
        category="Threat Assessment"
        mascot="foundations"
        mascotMessage="Make them name the factor. 'It feels worse' is not a factor."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="threat-prioritization" />
      </MicroLesson>
    </LessonContainer>
  )
}
