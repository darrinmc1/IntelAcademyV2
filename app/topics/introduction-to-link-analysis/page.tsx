import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction to Link Analysis - The Intel Analyst Academy",
  description:
    "Learn link analysis as a way to test relationships — nodes, links, and metrics in service of a question, not a hairball that proves you imported the file.",
}

const topicContent = `Link analysis is the habit of treating relationships as first-class evidence: who is connected to whom, through what, how often, and with what direction. The chart is optional. The thinking is not. A hairball that impresses a hallway is not analysis. It is a printout of your import.

This lesson is the grammar. Analyst's Notebook lessons in this academy are one software dialect of the same grammar.

## The Objects

- **Nodes (entities).** People, phones, accounts, companies, locations, events, vehicles. A node without a definition is a label you will argue about later. "John" and "J. Smith" are two nodes until you prove they are one. Merging is a judgment.
- **Links (edges).** A typed relationship: called, paid, employed, seen-at, owns. Untyped lines ("associated") are how charts become modern art.
- **Direction and time.** A sent a message to B on Tuesday is not the same as an undated "knows." Time turns a web into a story.
- **Attributes.** Weight, source, reliability, and the date you last believed it. A thick line that means "I feel strongly" is a lie.

> If you cannot say what the line means in a sentence, delete the line. The chart will get quieter and smarter in the same minute.

## What It Is For

Use link analysis when the question is structure.

- **Who matters in this network?** Degree is not the only answer. Brokers (people who sit between clusters) often matter more than celebrities with many redundant friends.
- **What should not be connected?** A vendor that appears in two "unrelated" cases is a finding if the link is real and dated.
- **Where is the cut-out?** A node that appears only as a relay is a collection target, not a biography project.
- **What is missing?** A person with no communications in a period when everyone else is noisy is a lull worth a sentence.

Do not use it when the finding is a single event. "A met B at the cafe" is a sentence. Drawing two circles and a line will not make it deeper.

## A Process You Can Finish

- **Question first.** "Who brokers money between the front company and the retailer?" is a question. "Map the network" is a stall.
- **Entity resolution.** Decide what counts as the same thing. Record the rule. Future you will thank present you during the argument.
- **Type the links.** A short controlled vocabulary beats forty synonyms for "associated."
- **Plot a first view, then a second.** One view by time, one by type. If both are unreadable, your question is too wide.
- **Measure a little.** Count, path, and a simple centrality can support a sentence. A dashboard of twelve metrics is how you hide that you do not have a sentence.
- **Test a hypothesis.** "If C is a cut-out, removing C should separate the clusters." Then look. Then write.

Worked example. Three companies share a bookkeeper and a warehouse address. The chart is three firms, one person, one location, dated filings. The judgment is "administrative spine consistent with a common operator; not yet proof of a single criminal enterprise." The hairball of every employee is how you lose the spine.

## Tools, Without the Shopping List

Paper and a whiteboard still work for small problems. Spreadsheets work until they do not. Analyst's Notebook, Maltego, Gephi, and larger platforms are fine when licensed and trained. None of them invents a typed link you did not enter. Garbage in remains a network-shaped garbage.

Coming Soon: extra academy chart packs. Downloads already include some analysis worksheets. Use those. Do not wait for a 404 "network toolkit."

## Ethics and Errors

- **Guilt by topology.** A short path to a bad node is not a case. It is a reason to ask a better question.
- **Data shadows.** Phones and bank data over-represent people who use phones and banks. Absence may be poverty, OPSEC, or your coverage.
- **Over-merge.** Combining identities because the names are close is how you invent a mastermind.
- **Privacy.** Need-to-know applies to charts. A wall-sized printout in a hallway is a dissemination choice.

## Practice

Entities: a driver, a warehouse, a front shop, a cash retailer, two dated invoices, one shared accountant. Draw (or list) the typed links. Write one structural judgment and one thing the chart cannot tell you (intent, for example).

If your judgment is "they are all connected," you described the import. Try again until the sentence would survive a defense attorney or a skeptical commander — same test, different room.
`

export default function IntroductionToLinkAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Introduction to Link Analysis"
        subtitle="Relationships as evidence: typed, dated, and in service of a question."
        humorSubtitle="If the chart looks like a hydra, you imported a hydra. Zoom is not a finding."
        readTime={22}
        difficulty="Beginner"
        category="Analysis"
        mascot="foundations"
        mascotMessage="Name the link or delete it. 'Associated' is how hairballs are born."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="introduction-to-link-analysis" />
      </MicroLesson>
    </LessonContainer>
  )
}
