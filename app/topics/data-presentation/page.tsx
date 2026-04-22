import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  ProTip,
  JokeAside,
  Debrief,
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Data Presentation | The Intel Analyst Academy",
  description:
    "Learn how to effectively present data in intelligence reports using the right charts, tables, and visual design principles.",
}

export default function DataPresentationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Data Presentation"
        subtitle="Turning Raw Numbers into Intelligence That Actually Gets Read"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={16}
      >
        <MissionBriefing humorText="A picture is worth a thousand words. A bad chart is worth a thousand confused policymakers.">
          <p className="mb-4">
            Data does not speak for itself -- it needs a translator. As an intelligence analyst,
            your job is to transform raw numbers, frequencies, and patterns into visual stories
            that decision-makers can absorb in seconds. In this lesson, you will learn how to
            choose the right chart type, avoid the cardinal sins of data presentation, and design
            visuals that clarify rather than confuse.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Choosing the Right Chart Type ---- */}
        <DeepDive title="Choosing the Right Chart Type">
          <p className="mb-4">
            The single most important decision in data presentation is choosing the right visual
            format. The wrong chart type can actively mislead your reader, even when the underlying
            data is accurate.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Chart Selection Framework</h3>
          <p className="mb-4">
            Ask yourself one question: <strong>what relationship am I trying to show?</strong> Your
            answer determines the chart type:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Comparison between categories:</strong> Bar chart (vertical or horizontal).
              Use horizontal bars when category labels are long.
            </li>
            <li>
              <strong>Change over time:</strong> Line chart. Use multiple lines to compare trends
              across groups. Never use a bar chart for time series if you have more than six time
              periods.
            </li>
            <li>
              <strong>Part-to-whole relationship:</strong> Stacked bar chart or, sparingly, a pie
              chart. Pie charts work only when you have 2-4 slices and the differences are large.
            </li>
            <li>
              <strong>Correlation between two variables:</strong> Scatter plot. Add a trend line
              if the relationship is meaningful.
            </li>
            <li>
              <strong>Geographic distribution:</strong> Map (choropleth or dot map). Essential for
              intelligence products involving location-based threats.
            </li>
            <li>
              <strong>Flow or process:</strong> Sankey diagram or flowchart. Good for showing
              funding flows, organizational structures, or attack pathways.
            </li>
          </ul>

          <JokeAside>
            Using a 3D pie chart to show seven categories is a war crime in data visualization.
            Edward Tufte would like a word with you.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">When to Use a Table Instead</h3>
          <p className="mb-4">
            Charts are not always the answer. Use a table when:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>The reader needs <strong>exact values</strong> (financial figures, coordinates, dates).</li>
            <li>You are comparing <strong>many attributes</strong> across a few items (e.g., a capability comparison matrix).</li>
            <li>The data set is <strong>small</strong> (fewer than 10 data points) -- a chart adds visual overhead without adding clarity.</li>
            <li>You need to show <strong>mixed data types</strong> (numbers, text, dates) side by side.</li>
          </ul>

          <ProTip>
            <p>
              When in doubt, ask: &quot;Does my reader need the pattern or the precise numbers?&quot;
              If they need the pattern, use a chart. If they need the numbers, use a table.
              If they need both, use a chart with a supporting data table below it.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Design Principles ---- */}
        <DeepDive title="Color, Design, and the Art of Not Lying with Visuals">
          <p className="mb-4">
            Even the right chart type can mislead if the design is sloppy. Color choices, axis
            scales, and labeling decisions all shape how the reader interprets your data -- for
            better or worse.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Color Principles</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Use color to encode meaning, not to decorate.</strong> Red for threats or
              negative trends, green for positive outcomes, blue for neutral data. Be consistent
              across your entire report.
            </li>
            <li>
              <strong>Limit your palette.</strong> Three to five colors maximum. If your chart
              looks like a bag of Skittles, you have too many categories -- group some together.
            </li>
            <li>
              <strong>Consider color blindness.</strong> About 8% of men have red-green color
              deficiency. Use patterns, labels, or a colorblind-safe palette as a backup.
            </li>
            <li>
              <strong>Avoid traffic-light defaults.</strong> Red-yellow-green is tempting but
              overused and inaccessible. A sequential color scale (light-to-dark) often
              communicates magnitude more effectively.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Axis and Scale Integrity</h3>
          <p className="mb-4">
            Manipulating axes is the fastest way to lie with data -- intentionally or not.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Misleading</p>
              <p className="text-slate-300 text-sm italic">
                A bar chart showing attack frequency with a Y-axis starting at 95 instead of 0,
                making a rise from 97 to 103 incidents look like a 600% increase.
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Honest</p>
              <p className="text-slate-300 text-sm italic">
                The same data with a Y-axis starting at 0, showing the rise in proper proportion
                -- a modest 6% increase. If the increase matters, annotate it; do not distort
                the scale to manufacture drama.
              </p>
            </div>
          </div>

          <JokeAside>
            Truncating the Y-axis is the data visualization version of &quot;technically correct but
            deeply misleading&quot; -- the kind of thing that gets analysts a quiet talking-to from
            the quality review team.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: Annotating and Contextualizing ---- */}
        <DeepDive title="Annotating Data: Making Your Visuals Self-Explanatory">
          <p className="mb-4">
            A chart without context is just a pretty picture. Annotations transform a visual from
            &quot;interesting&quot; to &quot;actionable&quot; by telling the reader exactly what they should notice
            and why it matters.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">What to Annotate</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Key inflection points:</strong> Where a trend changes direction. Label what
              caused the change -- &quot;Ceasefire declared 14 Jun&quot; or &quot;New sanctions effective.&quot;
            </li>
            <li>
              <strong>Outliers:</strong> If one data point breaks the pattern, explain it. An
              unexplained outlier invites speculation.
            </li>
            <li>
              <strong>Thresholds:</strong> Add a reference line for meaningful benchmarks --
              &quot;Historical average,&quot; &quot;Red line capacity,&quot; &quot;Treaty limit.&quot;
            </li>
            <li>
              <strong>Source and date:</strong> Every visual needs a source citation and the date
              range of the data. No exceptions.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Title Is Your Headline</h3>
          <p className="mb-4">
            A good chart title states the takeaway, not the topic. Compare:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Descriptive Title</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Monthly IED Incidents, 2024-2025&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Analytical Title</p>
              <p className="text-slate-300 text-sm italic">
                &quot;IED Incidents Doubled After Ceasefire Collapse (Sep 2024)&quot;
              </p>
            </div>
          </div>

          <ProTip>
            <p>
              Use the &quot;five-second rule&quot;: show your chart to a colleague for five seconds, then
              take it away. Ask them what the main message was. If they cannot tell you, your
              annotation and design need work.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: Common Data Presentation Sins ---- */}
        <DeepDive title='The "Chart Junk" Problem and Other Deadly Sins'>
          <p className="mb-4">
            Edward Tufte coined the term &quot;chart junk&quot; to describe all the visual clutter that
            adds no information: decorative gridlines, 3D effects, gradient fills, unnecessary
            legends, and clip art. In intelligence reporting, chart junk is not just ugly -- it
            is dangerous, because it distracts from the signal.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Seven Deadly Sins of Intel Data Viz</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Sin 1: 3D effects.</strong> They distort proportions and make values harder
              to read. Always use 2D.
            </li>
            <li>
              <strong>Sin 2: Dual-axis charts.</strong> Two different Y-axes on the same chart
              invite misinterpretation. Use two separate charts instead.
            </li>
            <li>
              <strong>Sin 3: Rainbow color palettes.</strong> More than five colors turns your
              chart into abstract art. Group or filter categories.
            </li>
            <li>
              <strong>Sin 4: Pie charts for precision.</strong> Humans are terrible at judging
              angles. If the difference between slices matters, use a bar chart.
            </li>
            <li>
              <strong>Sin 5: Missing units.</strong> &quot;200&quot; means nothing without &quot;200 incidents,&quot;
              &quot;$200 million,&quot; or &quot;200 kilometers.&quot; Always include units.
            </li>
            <li>
              <strong>Sin 6: Cherry-picked timeframes.</strong> Showing only the months that
              support your narrative destroys credibility when the full dataset tells a different
              story.
            </li>
            <li>
              <strong>Sin 7: No source attribution.</strong> Unsourced data is unverifiable data.
              Always cite where the numbers came from.
            </li>
          </ul>

          <ProTip>
            <p>
              Apply the &quot;data-ink ratio&quot; test: what percentage of the ink (or pixels) in your
              chart represents actual data? Remove everything that does not. Gridlines, borders,
              background fills, and decorative elements should be minimized or eliminated.
            </p>
          </ProTip>
        </DeepDive>

        <Debrief
          takeaways={[
            "Choose chart types based on the relationship you are showing: comparison, trend, part-to-whole, or correlation.",
            "Use tables when the reader needs exact values, mixed data types, or very small datasets.",
            "Maintain axis integrity -- never truncate scales to manufacture visual drama.",
            "Annotate key inflection points, outliers, and thresholds so your visuals are self-explanatory.",
            "Write analytical titles that state the takeaway, not just the topic.",
            "Eliminate chart junk: 3D effects, rainbow palettes, dual axes, and missing units are credibility killers.",
          ]}
          humorSummary="If Edward Tufte would weep at your chart, it is time for a redesign."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Data Visualization for Intelligence",
          description: "Explore advanced techniques for visualizing intelligence data.",
          path: "/topics/data-visualization-intelligence",
        }}
        moreLearning={{
          title: "Intelligence Report Fundamentals",
          description: "Dive deeper into the core principles of effective intelligence reporting.",
          path: "/topics/intelligence-report-fundamentals",
        }}
      />
    </LessonContainer>
  )
}
