import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Visualization in Intelligence Analysis - The Intel Analyst Academy",
  description:
    "Learn how to choose, design, and brief intelligence visuals so a decision-maker can see the argument without needing a decoder ring.",
}

const topicContent = `A chart is not decoration for a report that already failed in prose. It is an argument in a shape. If the reader still has to ask what the picture means, you did not visualize the intelligence. You illustrated your confusion.

This lesson is about choosing the right visual for the question, keeping it honest, and briefing it so the consumer can act. It is not a software tutorial. Tools change. Bad charts survive every upgrade.

## What a Visual Is For

Intelligence visualization exists to answer one of five questions faster than a paragraph can:

- **Compared with what?** Rank, share, or difference. Use a bar or a simple table before you reach for anything that spins.
- **Changed when?** Sequence, rate, or break. Use a timeline or a line. Do not bury dates in a network chart and hope someone notices Tuesday.
- **Connected to whom?** Relationship, broker, isolate. Use a link chart only when the relationship is the finding.
- **Located where?** Concentration, route, or gap. Use a map when geography is doing work, not because maps look official.
- **Flowed through what?** Volume moving between stages. Use a flow or Sankey only when the widths are real quantities, not vibes.

If you cannot name which question the visual answers, delete it. A slide with four unanswered questions is a briefing, not a product.

> Pretty is a side effect. Clarity is the job. The consumer who says "nice graphic" and then asks you to explain it has already told you the graphic failed.

## Match the Chart to the Judgment

Start from the key judgment, then pick the shape. Reverse that order and you will spend an afternoon making a network that proves you imported the spreadsheet.

- **Magnitude and rank.** Horizontal bars beat pie charts for more than three categories. The human eye compares length. It does not compare wedges, no matter how many times marketing insists otherwise.
- **Change over time.** One line per series, labeled in the chart, not in a legend that requires a scavenger hunt. Mark the event that matters. A line without a break, a policy date, or a collection gap is a weather report.
- **Relationships.** Nodes and links earn their keep when the finding is structure: a broker, a cut-out, a cluster that should not exist. If the finding is "Person A called Person B on Thursday," write the sentence. A two-node chart is a waste of toner.
- **Geography.** Maps lie politely. Projection, symbol size, and missing data all editorialize. If the hot spot is an artifact of reporting volume, say so on the map or do not publish the map.
- **Process and flow.** Intelligence-cycle diagrams are teaching aids. Operational flow charts are products only when the widths or counts are sourced. A decorative cycle with equal arrows is a logo.

Worked example. Judgment: "Reporting of warehouse thefts shifted from the industrial park to the rail spur over six weeks; the series is more likely relocation than a new offender." The visual is a small-multiple map or a paired timeline, not a 40-node network of every named person in the case file. The network can live in the working folder. The consumer gets the shift.

## Design Rules That Survive Contact With a Boss

These are not aesthetic preferences. They are how you keep the visual from arguing with the text.

- **One claim per visual.** If you need a paragraph to introduce the chart, the chart is doing two jobs. Split it.
- **Label in the visual.** Axis units, time zone, classification, source, and "n=". A chart that requires the speaker is a hostage situation.
- **Encode once.** Color means one thing. Size means one thing. If red means both "high threat" and "unconfirmed," you have invented a new dialect.
- **Show the denominator.** Counts without a base rate are how a precinct with aggressive reporting becomes a "crime wave."
- **Preserve uncertainty.** A hard-edged polygon around a fuzzy estimate is a lie with a border. Use ranges, dashed lines, or an explicit confidence note.
- **Classify the picture.** A sanitized chart that still reveals a source or a method is not sanitized. Visuals leak. Treat them like the paragraph they replace.

The most common failure is the "dashboard": twelve tiles, three traffic lights, and no judgment. That is a status page. Intelligence is a claim about the world. If the visual cannot carry the claim, it belongs in an appendix you will not have time to open.

## Honesty Checks Before You Brief It

Run this list the way you run a key-assumptions check. It is faster than explaining yourself after the meeting.

- **Does the visual agree with the key judgment?** If the chart shows a decline and the BLUF says "rising," one of them is unemployed.
- **What did you leave out?** Truncated axes, cherry-picked windows, and dropped outliers are the visual version of quote-mining.
- **Can a skeptic reconstruct the data?** If the answer is "trust the tool," you do not have a product. You have a screenshot.
- **Would this still be true in black and white?** Colorblind consumers exist. So do printers. So do people who forward your slide at 6 percent zoom.
- **Is the interactive version required?** If the insight only appears after three filters, write the insight. Do not ship a toy and call it analysis.

> A visualization that cannot survive a hostile question is not "interactive." It is unfinished.

## Tools, Without the Catalog Fantasy

You do not need a stack. You need a tool you can defend in a review.

- **A disciplined spreadsheet** still produces most honest intelligence charts. If you cannot make the argument in a table first, software will only hide the problem.
- **Analyst's Notebook and similar link tools** are for relationship questions you have already framed. They are not a place to discover meaning by spinning the layout until it looks like a conspiracy.
- **GIS** is for spatial arguments with known coordinate quality. A pin on a city name is not geospatial analysis.
- **Specialized libraries and BI platforms** are fine when your shop supports them. They are not a prerequisite for this lesson, and they are not a substitute for a sentence that states the finding.

Interactive training sandboxes and custom workflow visualizations are **Coming Soon**. Until they ship, practice on public, unclassified, or instructor-provided data. Do not wait for a D3 demo to learn whether a bar chart is lying.

## Practice: Choose the Visual

A fusion cell has four judgments to support. Pick a visual type and one honesty risk for each.

- **Judgment A:** "Calls between the two companies clustered in the 72 hours before each shipment, then went quiet."
- **Judgment B:** "The subject used three addresses in six months; two are mail drops."
- **Judgment C:** "Seizures rose, but reporting standards changed in week four, so the increase is not yet diagnostic."
- **Judgment D:** "Money moved from the front company to the logistics vendor, then to a cash-intensive retailer."

Reasonable answers: A is a timeline or aligned event bars; risk is time-zone drift. B is a short table or a map with date labels; risk is treating a mail drop as a residence. C is a line with an annotation at the standard change; risk is a clean upward slope that buries the caveat. D is a flow or a three-node link chart with amounts; risk is implying volume you did not measure.

If you chose a 3D pie for any of them, close the file and start the lesson again. The pie was never going to help.

## What You Should Be Able to Do After This

You should be able to name the question a visual answers, refuse a chart that does not earn its space, and brief a picture in two sentences: what it shows, and what would change the picture. That is the entire skill. Everything else is software training, and software training is not intelligence.
`

export default function DatavisualizationintelligencePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Data Visualization in Intelligence Analysis"
        subtitle="Choose the chart that carries the judgment — and keep it from lying on your behalf."
        humorSubtitle="If the slide needs a narrator, it is not a visual. It is a hostage note."
        readTime={25}
        difficulty="Beginner"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="A chart is a claim. If you cannot say the claim out loud, do not publish the picture."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="data-visualization-intelligence" />
      </MicroLesson>
    </LessonContainer>
  )
}
