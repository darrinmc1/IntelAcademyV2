import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Presentation - The Intel Analyst Academy",
  description: "Learn how to effectively present data in intelligence reports using the right charts, tables, and visual design principles.",
}

const topicContent = `"Learn how to effectively present data in intelligence reports using the right charts, tables, and visual design principles.",

Data does not speak for itself -- it needs a translator. As an intelligence analyst,
your job is to transform raw numbers, frequencies, and patterns into visual stories
that decision-makers can absorb in seconds. In this lesson, you will learn how to
choose the right chart type, avoid the cardinal sins of data presentation, and design
visuals that clarify rather than confuse.

{/* ---- Section 1: Choosing the Right Chart Type ---- */}

The single most important decision in data presentation is choosing the right visual
format. The wrong chart type can actively mislead your reader, even when the underlying
data is accurate.

### The Chart Selection Framework

Ask yourself one question: **what relationship am I trying to show?** Your
answer determines the chart type:

- **Comparison between categories:** Bar chart (vertical or horizontal).
Use horizontal bars when category labels are long.

- **Change over time:** Line chart. Use multiple lines to compare trends
across groups. Never use a bar chart for time series if you have more than six time
periods.

- **Part-to-whole relationship:** Stacked bar chart or, sparingly, a pie
chart. Pie charts work only when you have 2-4 slices and the differences are large.

- **Correlation between two variables:** Scatter plot. Add a trend line
if the relationship is meaningful.

- **Geographic distribution:** Map (choropleth or dot map). Essential for
intelligence products involving location-based threats.

- **Flow or process:** Sankey diagram or flowchart. Good for showing
funding flows, organizational structures, or attack pathways.

Using a 3D pie chart to show seven categories is a war crime in data visualization.
Edward Tufte would like a word with you.

### When to Use a Table Instead

Charts are not always the answer. Use a table when:

- The reader needs **exact values** (financial figures, coordinates, dates).
- You are comparing **many attributes** across a few items (e.g., a capability comparison matrix).
- The data set is **small** (fewer than 10 data points) -- a chart adds visual overhead without adding clarity.
- You need to show **mixed data types** (numbers, text, dates) side by side.

When in doubt, ask: "Does my reader need the pattern or the precise numbers?"
If they need the pattern, use a chart. If they need the numbers, use a table.
If they need both, use a chart with a supporting data table below it.

{/* ---- Section 2: Design Principles ---- */}

Even the right chart type can mislead if the design is sloppy. Color choices, axis
scales, and labeling decisions all shape how the reader interprets your data -- for
better or worse.

### Color Principles

- **Use color to encode meaning, not to decorate.** Red for threats or
negative trends, green for positive outcomes, blue for neutral data. Be consistent
across your entire report.

- **Limit your palette.** Three to five colors maximum. If your chart
looks like a bag of Skittles, you have too many categories -- group some together.

- **Consider color blindness.** About 8% of men have red-green color
deficiency. Use patterns, labels, or a colorblind-safe palette as a backup.

- **Avoid traffic-light defaults.** Red-yellow-green is tempting but
overused and inaccessible. A sequential color scale (light-to-dark) often
communicates magnitude more effectively.

### Axis and Scale Integrity

Manipulating axes is the fastest way to lie with data -- intentionally or not.

Misleading

A bar chart showing attack frequency with a Y-axis starting at 95 instead of 0,
making a rise from 97 to 103 incidents look like a 600% increase.

Honest

The same data with a Y-axis starting at 0, showing the rise in proper proportion
-- a modest 6% increase. If the increase matters, annotate it; do not distort
the scale to manufacture drama.

Truncating the Y-axis is the data visualization version of "technically correct but
deeply misleading" -- the kind of thing that gets analysts a quiet talking-to from
the quality review team.

{/* ---- Section 3: Annotating and Contextualizing ---- */}

A chart without context is just a pretty picture. Annotations transform a visual from
"interesting" to "actionable" by telling the reader exactly what they should notice
and why it matters.

### What to Annotate

- **Key inflection points:** Where a trend changes direction. Label what
caused the change -- "Ceasefire declared 14 Jun" or "New sanctions effective."

- **Outliers:** If one data point breaks the pattern, explain it. An
unexplained outlier invites speculation.

- **Thresholds:** Add a reference line for meaningful benchmarks --
"Historical average," "Red line capacity," "Treaty limit."

- **Source and date:** Every visual needs a source citation and the date
range of the data. No exceptions.

### The Title Is Your Headline

A good chart title states the takeaway, not the topic. Compare:

Descriptive Title

"Monthly IED Incidents, 2024-2025"

Analytical Title

"IED Incidents Doubled After Ceasefire Collapse (Sep 2024)"

Use the "five-second rule": show your chart to a colleague for five seconds, then
take it away. Ask them what the main message was. If they cannot tell you, your
annotation and design need work.

{/* ---- Section 4: Common Data Presentation Sins ---- */}

Edward Tufte coined the term "chart junk" to describe all the visual clutter that
adds no information: decorative gridlines, 3D effects, gradient fills, unnecessary
legends, and clip art. In intelligence reporting, chart junk is not just ugly -- it
is dangerous, because it distracts from the signal.

### The Seven Deadly Sins of Intel Data Viz

- **Sin 1: 3D effects.** They distort proportions and make values harder
to read. Always use 2D.

- **Sin 2: Dual-axis charts.** Two different Y-axes on the same chart
invite misinterpretation. Use two separate charts instead.

- **Sin 3: Rainbow color palettes.** More than five colors turns your
chart into abstract art. Group or filter categories.

- **Sin 4: Pie charts for precision.** Humans are terrible at judging
angles. If the difference between slices matters, use a bar chart.

- **Sin 5: Missing units.** "200" means nothing without "200 incidents,"
"$200 million," or "200 kilometers." Always include units.

- **Sin 6: Cherry-picked timeframes.** Showing only the months that
support your narrative destroys credibility when the full dataset tells a different
story.

- **Sin 7: No source attribution.** Unsourced data is unverifiable data.
Always cite where the numbers came from.

Apply the "data-ink ratio" test: what percentage of the ink (or pixels) in your
chart represents actual data? Remove everything that does not. Gridlines, borders,
background fills, and decorative elements should be minimized or eliminated.

)
`

export default function DatapresentationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Data Presentation"
        subtitle="Learn how to effectively present data in intelligence reports using the right charts, tables, and visual design principl"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="data-presentation" />
      </MicroLesson>
    </LessonContainer>
  )
}
