import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indicators and Warnings in Strategic Analysis | The Intel Analyst Academy",
  description:
    "Build indicator lists, set watch conditions, and write a warning a decision-maker can use before the event, not after the post-mortem.",
}

const topicContent = `Forecasts describe a future. Warnings tell someone that the future they were counting on is no longer the one they should plan against. Strategic analysts get paid to do both, and they get remembered for the second one — usually for getting the timing wrong. This lesson is the craft of indicators and warnings: how to notice a change in trajectory early enough to matter, and how to say so without crying wolf every Tuesday.

> A warning that arrives after the decision is a history paper. Interesting. Late.

## What an Indicator Actually Is

An indicator is an observable fact you decided, in advance, would mean something if it showed up. That last clause is the whole discipline. After an event, everyone can point at the clues. Before the event, most of those "clues" are just noise that happens to be true. An indicator list is a commitment: if we see these things, we will treat the hypothesis as more likely, and we will say so.

Three cousins get confused in briefings. Keep them apart.

- **Indicator.** A pre-agreed, observable condition tied to a specific hypothesis. "Weekly grain exports from Country X fall below the five-year seasonal band for three consecutive weeks."
- **Signpost.** A broader marker that a scenario, not a single hypothesis, is becoming more plausible. Signposts belong to scenario work. Indicators belong to a warning problem.
- **Forecast.** A judgment about what is likely, with a timeframe and a confidence. The forecast is the product. Indicators are how you know the forecast needs a rewrite.

If you cannot observe it with a source you actually have, it is not an indicator. It is a wish. "Leadership intent shifts toward confrontation" is a hypothesis. "The foreign minister cancels the bilateral and the defence budget's contingency line is drawn down in the same month" is closer to something a collector can report.

## The Warning Problem, Stated Honestly

Warning fails in a few repeatable ways, and none of them are mysterious.

- **Late warning.** The indicators were real. Nobody was assigned to watch them, or the watchers reported into a inbox that had already surrendered.
- **Early warning that nobody wants.** You called it, the principal had already committed, and your paper became a career event rather than a decision.
- **Cry wolf.** You warned on weak movement, nothing happened, and the next warning — the real one — is filed under "analysts again."
- **Warning with no so-what.** The indicator fired. The product described the indicator. It did not say which decision changes if the reader believes you.

The cure is not louder adjectives. It is a list you built when you were calm, thresholds you wrote down, and a product format that states what changed.

## Build the List Before You Need It

Start from the question, not from the news. A useful warning problem sounds like this: "Will Country X restrict exports of critical mineral Y enough to break our contractor's twelve-month supply before the next budget cycle?" That is specific, timed, and tied to a decision. "Monitor instability in the region" is a hobby.

Then do the work in this order.

- Write the hypothesis you are warning on, and the hypothesis you are warning against. Both. A list that only looks for bad news will find it.
- Name the drivers that would have to move for the hypothesis to become likely. Three to five. More than that and you are collecting the encyclopedia.
- For each driver, write two or three observables. Prefer things that are counted, dated, or photographed over things that require you to read a leader's mind.
- Record the normal range. A port that is always congested in August is not an indicator in August. Deviation from baseline is the signal. The baseline is the homework.
- Assign a source, a cadence, and an owner. An indicator nobody is tasked to check is a paragraph in a strategy document.

Kill indicators you cannot collect. Kill indicators that would be true in almost every future. "Rhetoric becomes more nationalistic before an election" tells you the calendar works. It does not tell you a policy is about to change.

## Thresholds and Watch Conditions

An indicator list without a threshold is a scrapbook. Decide, before the data arrives, what level of movement changes your judgment.

Analysts usually need three conditions, not one:

- **Watch.** Something moved, inside a range you still consider normal-but-notable. You log it. You do not wake anyone up.
- **Warning.** The indicator crossed the line you wrote down, or two related indicators moved together. You issue a product. You say what decision it affects.
- **Stand down.** The indicator reversed, or a disconfirming observable showed up. You say that too. Warning shops that only publish in one direction train their readers to ignore them.

Write the threshold in the same units the collector will report. "Significant increase" is not a threshold. "More than 30 percent above the trailing twelve-month median, sustained for two reporting periods" is a threshold. You can be wrong about the number. You cannot defend a vibe.

When two indicators point in opposite directions, do not average them into mush. Say which one you weight more, and why. Conflicting indicators are the job. They are not a reason to wait for a cleaner world.

## What the Warning Product Has to Do

A strategic warning is short because the reader is about to be interrupted. Use this spine.

- **Bottom line.** One or two sentences. What changed, on what question, in what timeframe.
- **Indicator status.** Which items fired, which did not, and which you could not collect. The holes are part of the assessment.
- **Judgment.** Has your prior forecast moved, and by how much? Point at estimative language you already use. Do not invent a new dialect of "may" for warnings.
- **So what.** The decision this touches, and the date by which it stops being useful.
- **What would reverse the call.** One or two disconfirming indicators. This is how you stay employable when you are early.

Do not smuggle a policy recommendation in through the warning. "We assess exports are likely to be licensed within ninety days" is analysis. "You should pre-buy six months of stock" is a decision. Offer the implication. Leave the choice with the person who owns the consequence.

> The analyst who warns in footnotes has not warned. They have arranged to be right later, quietly.

## A Worked Sketch

Question: will a major supplier of a specialized industrial chemical idle capacity in the next two quarters, enough to extend our lead times past sixteen weeks?

Drivers worth watching: domestic energy prices, export-license policy, announced maintenance, and the firm's public order book.

Observables, with baselines:

- Energy prices for the supplier's grid region, against the five-year seasonal band. A spike alone is watch, not warning. A spike plus a public statement that energy is now the binding constraint is warning.
- Official journal notices of new export licensing for that chemical class. Absence of a notice is not evidence of absence. Presence of a notice is an indicator you can cite.
- Company filings and credible trade press on planned outages. One outage inside a published maintenance calendar is baseline. Two unplanned outages, or a published outage that slips twice, is warning.
- Import volumes at your own receiving ports, from customs data you are allowed to use. A fall that matches only your firm is a procurement problem. A fall across several importers is a supply problem.

The product does not say "crisis." It says: two of four indicators are at warning, one is at watch, one is uncollected because the trade-press source went quiet. We now assess idled capacity in the next two quarters as likely, moderate confidence, where last month we assessed it as unlikely. The decision this affects is the June reorder. A reversal would be a published restart date plus two weeks of export volumes back inside the band.

That is a warning. It can be wrong. It can be checked.

## Politics, Without the Cynicism

Senior readers sometimes want warning only when it supports a decision they have already made. You will feel that pressure as a tone note, not as an order. The professional response is dull on purpose: show the list, show the threshold, show the disconfirming evidence you also tracked. If they overrule the judgment, record the disagreement the way a good estimate records a dissent. Do not quietly edit the indicator to match the preferred story. The next officer who inherits your list needs to know what the data did, not what the room preferred.

Also resist the opposite vice. Some analysts hoard a warning until confidence is high enough to survive a hostile read. By then the reorder has been placed. Moderate confidence, delivered while a choice still exists, beats high confidence delivered to an archive.

## Exercise

Pick a strategic question your organization actually has, or invent a sober one: a city's water utility, a firm's single-source component, a ministry's refugee housing capacity. Do not pick a battlefield.

Write one page.

- State the warning question, the decision it serves, and the timeframe.
- Name three drivers.
- For each driver, write one indicator with a baseline and a warning threshold.
- Name one disconfirming indicator.
- Draft the five-line warning you would send if two indicators fired tomorrow.

If your thresholds use the words "significant," "growing," or "emerging," replace them with something a collector could count.`

export default function IndicatorsWarningsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Indicators and Warnings in Strategic Analysis"
        subtitle="Build the list before the event, set a threshold you can defend, and warn while a decision still exists."
        humorSubtitle="Smoke detectors for people who otherwise wait for the fire marshal's memoir."
        readTime={18}
        difficulty="Advanced"
        category="Strategic Intelligence"
        mascot="foundations"
        mascotMessage="If it is not observable and it has no threshold, it is not an indicator. It is a mood."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="indicators-warnings" />
      </MicroLesson>
    </LessonContainer>
  )
}
