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
  title: "Visual Intelligence Reporting | The Intel Analyst Academy",
  description:
    "Learn how to use charts, maps, timelines, and graphics to create more effective intelligence reports.",
}

export default function VisualIntelligenceReportingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Visual Intelligence Reporting"
        subtitle="Because Your Policymaker Stopped Reading at Page Two"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={17}
      >
        <MissionBriefing humorText="A well-designed chart can save a thousand words of prose that nobody was going to read anyway. Time to make your intelligence look as smart as it actually is.">
          <p className="mb-4">
            Intelligence reports live or die by their ability to communicate complex information
            quickly. Visuals -- charts, maps, timelines, link diagrams, and infographics -- are
            not decorations. They are analytic tools that can convey patterns, relationships, and
            trends far more efficiently than text alone. This lesson covers when visuals beat text,
            how to choose the right visual type, fundamental design principles, the most common
            visual sins, and how to integrate graphics into your narrative without turning your
            report into a picture book.
          </p>
        </MissionBriefing>

        <DeepDive title="When Visuals Beat Text">
          <p className="mb-4">
            Not everything needs a chart. But many things need one desperately and do not get one,
            because the analyst either did not think of it or was afraid of PowerPoint. Here is
            when a visual is not just nice to have but essential:
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Visual Advantage</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Showing relationships and networks.</strong> Describing a 15-person
              organizational network in text requires paragraphs of "A reports to B, who
              coordinates with C." A link diagram shows the same thing in seconds.
            </li>
            <li>
              <strong>Revealing patterns over time.</strong> "Attacks have increased by 40% over
              the past six months" is a sentence. A trend line showing the weekly attack count with
              annotated events is a story.
            </li>
            <li>
              <strong>Geographic context.</strong> "The facility is located 12 kilometers northwest
              of the capital, adjacent to the main highway and 3 kilometers from the airfield" is
              a sentence that begs for a map.
            </li>
            <li>
              <strong>Comparing quantities.</strong> Any time you are asking the reader to compare
              more than three numbers, a chart will be more effective than text.
            </li>
            <li>
              <strong>Timelines of complex events.</strong> Chronologies with multiple overlapping
              sequences are almost impossible to follow in paragraph form.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">When Text Wins</h3>
          <p className="mb-4">
            Visuals are not always the answer. <strong>Nuanced analytic judgments</strong>,
            <strong> caveats</strong>, and <strong>conditional reasoning</strong> ("if X, then
            likely Y, unless Z") are almost always better expressed in text. A chart can show what
            happened; text explains why it matters and what might happen next.
          </p>

          <JokeAside>
            If your chart requires a 200-word caption to explain what it means, you have not
            created a visual aid -- you have created a visual obstacle.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Choosing the Right Visual Type">
          <p className="mb-4">
            The single most common visual mistake is using the wrong chart type for the data. A
            pie chart showing trends over time, a bar chart with 47 categories, a 3D exploding
            donut chart for any reason -- these are crimes against information.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">A Quick Reference Guide</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Bar chart:</strong> Comparing quantities across categories. "Attacks by
              province," "Funding by source," "Weapons seized by type."
            </li>
            <li>
              <strong>Line chart:</strong> Showing trends over time. "Monthly incident count,"
              "GDP growth trajectory," "Force strength over the past decade."
            </li>
            <li>
              <strong>Map:</strong> Any data with a geographic dimension. Incident locations,
              territorial control, infrastructure, routes of movement.
            </li>
            <li>
              <strong>Link/network diagram:</strong> Relationships between people, organizations,
              or entities. Command structures, communication networks, financial flows.
            </li>
            <li>
              <strong>Timeline:</strong> Sequence of events, especially when multiple parallel
              threads need to be tracked. Operations, political developments, intelligence
              collection milestones.
            </li>
            <li>
              <strong>Table:</strong> When the reader needs to look up specific values or compare
              across multiple dimensions simultaneously.
            </li>
            <li>
              <strong>Pie chart:</strong> Parts of a whole, but only when there are 5 or fewer
              categories. If your pie has 12 slices, use a bar chart instead.
            </li>
          </ul>

          <ProTip>
            <p>
              When in doubt, use a bar chart. It is the most versatile, most readable, and hardest
              to misinterpret chart type. Horizontal bars are particularly useful in intelligence
              reporting because they accommodate long category labels (country names, group names)
              without rotating text into illegibility.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="Design Principles and Common Visual Sins">
          <h3 className="text-xl font-bold mb-3 mt-6">Design Principles That Matter</h3>
          <p className="mb-4">
            You do not need to be a graphic designer, but you do need to follow a few fundamental
            principles that separate professional intelligence graphics from amateur hour.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Data-to-ink ratio:</strong> Every drop of ink (or pixel) should convey
              information. Remove gridlines, borders, backgrounds, and decorative elements that
              do not help the reader understand the data. Edward Tufte called unnecessary visual
              elements "chartjunk" -- and he was right.
            </li>
            <li>
              <strong>Color with purpose:</strong> Use color to encode meaning, not to decorate.
              Red for threats, green for friendly forces, amber for caution -- these conventions
              exist for a reason. Limit your palette to 5-7 colors maximum. If you need more,
              your chart is too complex.
            </li>
            <li>
              <strong>Typography:</strong> Use a clean, sans-serif font. Label axes and data
              points directly on the chart rather than forcing the reader to cross-reference a
              legend. If the reader has to look away from the data to understand it, you have
              added friction.
            </li>
            <li>
              <strong>Annotation:</strong> Add brief text annotations to highlight key data points
              or inflection moments. "Ceasefire announced" on a trend line is worth a paragraph
              in the body text.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Seven Deadly Visual Sins</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <strong>Misleading scales:</strong> Starting a y-axis at a non-zero value to
              exaggerate trends. A 2% increase looks like a 200% increase if you truncate the
              axis.
            </li>
            <li>
              <strong>3D charts:</strong> They add visual noise, distort proportions, and make
              accurate comparison impossible. There is no analytical reason to use them. Ever.
            </li>
            <li>
              <strong>Dual y-axes:</strong> Two different scales on the same chart invite
              misinterpretation. If you must compare two variables with different units, use two
              charts side by side.
            </li>
            <li>
              <strong>Rainbow color schemes:</strong> Using the full spectrum makes it impossible
              for colorblind readers (8% of men) to distinguish categories and creates visual
              chaos for everyone else.
            </li>
            <li>
              <strong>Overcrowded charts:</strong> If your scatter plot has 10,000 overlapping
              points, you need a density map, not more data points.
            </li>
            <li>
              <strong>Missing context:</strong> A chart without a title, axis labels, source
              attribution, and date range is not a chart -- it is a Rorschach test.
            </li>
            <li>
              <strong>Decorative illustrations:</strong> Clip art, stock photos, and decorative
              borders do not make data more compelling. They make your report look like a middle
              school science project.
            </li>
          </ol>

          <JokeAside>
            If your pie chart looks like a beach ball and your bar chart has drop shadows, you
            have not enhanced your analysis -- you have auditioned for a job in marketing.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Integrating Visuals with Narrative and Accessibility">
          <h3 className="text-xl font-bold mb-3 mt-6">Visuals as Part of the Story</h3>
          <p className="mb-4">
            A visual should never appear in your report without being referenced in the text. The
            text introduces the visual, the visual provides the evidence, and the text interprets
            what the reader should take away. This three-part integration ensures that visuals
            enhance rather than interrupt the analytic narrative.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Introduce before showing:</strong> "Figure 3 shows the sharp increase in
              border crossings following the policy change" tells the reader what to look for.
            </li>
            <li>
              <strong>Interpret after showing:</strong> "As Figure 3 illustrates, the 60% increase
              occurred within two weeks of the announcement, suggesting the policy change was the
              primary driver" tells the reader what to conclude.
            </li>
            <li>
              <strong>Place visuals near the relevant text.</strong> A chart on page 12 that is
              referenced on page 4 is a chart that will not be seen.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Accessibility Matters</h3>
          <p className="mb-4">
            Intelligence reports are read by people with varying visual abilities, on screens of
            varying quality, and sometimes printed in black and white. Design for the worst case:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Do not rely on color alone</strong> to convey meaning. Use patterns, labels,
              or shapes as secondary encoding. If your chart is meaningless in grayscale, fix it.
            </li>
            <li>
              <strong>Use sufficient contrast.</strong> Light gray text on a white background is
              invisible on a projected slide. Test your visuals in the environments where they
              will actually be viewed.
            </li>
            <li>
              <strong>Include alt text</strong> for digital reports. Not just "Figure 4" but
              "Bar chart showing top five threat groups by number of attacks in 2025, with Group A
              leading at 47 incidents."
            </li>
            <li>
              <strong>Provide data tables</strong> alongside complex charts when the report will
              be distributed digitally. Screen readers cannot parse a JPEG of a chart.
            </li>
          </ul>

          <ProTip>
            <p>
              Before finalizing any visual, show it to someone unfamiliar with your analysis and
              ask them what they see. If their takeaway does not match your intended message, the
              chart needs work -- no matter how accurate the underlying data. A chart that is
              technically correct but routinely misread is a liability, not an asset.
            </p>
          </ProTip>
        </DeepDive>

        <Debrief
          takeaways={[
            "Use visuals when showing relationships, patterns over time, geographic context, or comparisons -- use text for nuanced judgments and conditional reasoning.",
            "Match the chart type to the data: bar charts for comparisons, line charts for trends, maps for geography, network diagrams for relationships.",
            "Follow core design principles: maximize data-to-ink ratio, use color with purpose, label directly, and annotate key moments.",
            "Avoid the seven deadly visual sins, especially misleading scales, 3D charts, and missing context.",
            "Integrate visuals into the narrative with an introduce-show-interpret pattern and place them near the relevant text.",
            "Design for accessibility: ensure charts work in grayscale, include alt text, and provide data tables for digital distribution.",
          ]}
          humorSummary="Your intelligence is only as good as your audience's ability to absorb it. A well-designed chart can make a policymaker understand in five seconds what a five-page memo could not convey in five minutes. A poorly designed chart can make them misunderstand even faster. Learn the difference, and your reports will be the ones that actually get pinned to the wall -- for the right reasons."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Data Visualization for Intelligence",
          description:
            "Explore advanced data visualization techniques and tools used in intelligence analysis.",
          path: "/topics/data-visualization-intelligence",
        }}
        moreLearning={{
          title: "Intelligence Report Fundamentals",
          description:
            "Revisit the foundational reporting principles that visuals are designed to enhance.",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Specialized Intelligence Products",
          description:
            "Learn about the variety of intelligence products where visual reporting plays a critical role.",
          path: "/topics/specialized-intelligence-products",
        }}
      />
    </LessonContainer>
  )
}
