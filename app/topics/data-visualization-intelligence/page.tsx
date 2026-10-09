import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Visualization Intelligence - The Intel Analyst Academy",
  description: "Learn about data visualization intelligence in intelligence analysis.",
}

const topicContent = `Charts in intelligence work have one job: to help a reader see something faster than they could from text or a table. A chart that looks impressive but needs a paragraph of explanation has failed at that job, however good it looked on the big screen in the briefing room.

This lesson covers the chart types analysts reach for most, what each is good and bad at, and how to avoid the visual equivalent of an overstated judgment.

## What You'll Learn

- How to choose a chart type based on the question, not on whatever data you happen to have
- When to use timelines, network graphs, maps and flow diagrams
- How charts mislead, even when every data point is accurate
- A checklist for any visual that goes into a finished product

## Start With the Question

Before you open a tool, write down the question the visual answers. Different questions need different charts.

- **When did things happen, and in what order?** Use a timeline.
- **Who is connected to whom?** Use a network graph.
- **Where did things happen?** Use a map.
- **How does something move through a system?** Use a flow diagram, such as a Sankey chart.
- **How much, compared to what?** Use a bar chart. It is boring and it works.

If you cannot write the question in one sentence, the chart will not answer it either.

## Timelines

Timelines are the workhorse of incident analysis. They show sequence, gaps and clustering in a way text struggles to match. A list of twenty events is hard to hold in your head. The same events on a line show you at a glance that eight of them happened in the same week.

Good timelines mark the source of each event, separate confirmed events from reported ones (solid versus hollow markers works well), and keep the time scale honest. If the scale jumps from days to months halfway along, say so on the chart.

## Network Graphs

Network graphs show relationships between people, organisations, accounts, phone numbers or anything else that connects. They are excellent at revealing brokers, the nodes that link otherwise separate groups, and clusters that operate together.

They are also the chart most likely to be misread. A dense graph looks sinister even when the links are trivial. Two people who follow each other on social media and two people who send each other money appear as identical lines unless you make the difference visible. Use line thickness or style to show link type and strength, and say in the caption what a link means.

Size nodes by something meaningful, such as the number of connections, and say what it is. A big node with no explanation reads as "important" to most viewers, whether or not it is.

## Maps

Maps answer "where" and tempt analysts to answer "why" with them as well. A cluster of incidents in one suburb might be a hotspot, or it might be where most of the reporting comes from. Population, reporting coverage and patrol patterns all shape what appears on a map.

When you map incidents, show the coverage of your sources if you can. If collection only covered half the area, shade the other half rather than letting it look quiet.

## Flow Diagrams

Flow diagrams, including Sankey charts, show how volume moves between stages: money through accounts, goods through ports, reports through a collection and analysis process. The width of each band shows quantity, which makes bottlenecks and leaks easy to spot.

They work best with a small number of stages and categories. Past about a dozen bands, a Sankey chart turns into spaghetti, and a table will serve the reader better.

## How Accurate Charts Still Mislead

Every number can be right and the chart can still be wrong. The usual ways this happens:

- **Truncated axes.** A bar chart starting at 90 instead of zero turns a small difference into a dramatic one.
- **Inconsistent scales.** Two charts side by side with different axes invite the reader to compare things that cannot be compared.
- **Colour that implies judgment.** Red means danger to most readers. Use it for a category and you have made an assessment without writing one.
- **Missing denominators.** Twice as many incidents in one area means little if that area has three times the population or twice the reporting.
- **False precision.** Plotting an estimate as a single sharp point hides the uncertainty around it. Show ranges where you have them.

A useful habit: for every chart, ask what a sceptical reader would say about it, and fix that before they get the chance.

## Worked Example: The Invoice Fraud Network

An analyst investigating invoice fraud has 300 transactions across 40 company accounts. The first attempt puts every account on a network graph with every transaction as a line. The result is a hairball that tells the reader nothing except that there is a lot of data.

The second attempt starts with the question: which accounts move money between the two companies under investigation? The analyst filters to transactions above a set value, groups accounts by registered owner, and draws lines only between groups. Line thickness shows total value. Now the graph has nine nodes, and one account stands out as the only link between the two companies. It becomes the focus of the next round of collection.

The data did not change. The question did, and the chart followed it.

## Checklist for Any Visual in a Product

- Does the title state the finding, not just the topic? "Payments routed through one account" beats "Transaction network".
- Can a reader understand it without the surrounding text?
- Are the sources and date range shown?
- Is uncertainty visible where it exists?
- Do axes start at zero, or is there a clear reason they don't?
- Does colour carry the same meaning as in the rest of the product?
- Would the chart still make sense printed in greyscale?
- Has sensitive data been removed or aggregated for this audience?

## Common Mistakes

- **Choosing the chart before the question.** The tool has a nice network view, so everything becomes a network.
- **Showing all the data.** More data rarely means more insight. Filter to what answers the question.
- **Letting the chart make the judgment.** If the visual implies a conclusion, make sure the text states it with a confidence level.
- **Forgetting the reader's screen.** A detailed graph that looks fine on a large monitor is unreadable on a phone in a vehicle.

## Tools

You do not need expensive software to make good charts. A spreadsheet handles bar charts and simple timelines. Gephi is a free option for network analysis, and QGIS is a free option for maps. Code libraries such as D3.js allow custom interactive visuals if you have the skills and the time. Pick the simplest tool that answers the question.

## Exercise

Take ten to twenty events from a recent news story and plot them on a timeline. Mark confirmed events differently from reported ones. Then write a title that states what the timeline shows. If you cannot write that title, the timeline is not finished yet.

## Next Steps

- [Analytical Techniques learning path](/learning-paths/analytical-techniques)
- [Network Analysis learning path](/learning-paths/network-analysis)
- [Intelligence workflow visualizations](/visualizations/intelligence-workflows)
`

export default function DatavisualizationintelligencePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Data Visualization in Intelligence Analysis"
        subtitle="Learn about data visualization intelligence in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="data-visualization-intelligence" />
      </MicroLesson>
    </LessonContainer>
  )
}
