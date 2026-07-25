import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executive Summaries - The Intel Analyst Academy",
  description: "Master the art of writing tight, actionable executive summaries using BLUF, the five-paragraph formula, and ruthless editing.",
}

const topicContent = `"Master the art of writing tight, actionable executive summaries using BLUF, the five-paragraph formula, and ruthless editing.",

The executive summary is the most valuable real estate in any intelligence product.
It is also the most mistreated. Analysts treat it as a afterthought — a quick
condensation slapped onto the front of a finished report. In reality, it is the only
part most decision-makers will ever read. This lesson will teach you how to write
executive summaries that deliver the bottom line at the top, follow a battle-tested
five-paragraph structure, survive the red pen of ruthless editing, and pass the
one-page test every time.

{/* ---- Section 1: Bottom Line at the Top ---- */}

There is a reason the U.S. military codified the BLUF (Bottom Line Up Front) principle
decades ago: it works. Decision-makers do not have the time or inclination to read your
methodology, your sourcing tree, or your carefully crafted narrative arc. They need the
answer to one question — "What do I need to know?" — and they need it in the first
two sentences.

### Why BLUF Matters for Exec Summaries

Studies of executive reading behavior consistently show that decision-makers spend an
average of 30 to 90 seconds on an executive summary before deciding whether to read
deeper. If your key judgment is not delivered in that window, it does not exist. The
executive summary is not a "teaser" — it is the main event. The rest of the report is
the supporting evidence.

Buried Bottom Line

"This report examines the ongoing insurgency in the eastern provinces
using data from multiple intelligence sources collected over the past
quarter. After reviewing patterns of attacks, logistical movements, and
financial transfers, we have concluded that the insurgency is not losing."

The conclusion arrives after 40 words of throat-clearing.

BLUF Delivered

"The insurgency in the eastern provinces is not losing (high confidence).
Attack frequency has remained steady for six consecutive months, and
the insurgent financial network shows no signs of disruption despite
sustained counter-efforts. The core leadership remains intact and
continues to recruit effectively."

Key judgment, confidence level, and supporting evidence — all in the first paragraph.

### The Hierarchy of the Bottom Line

Not all bottom lines are created equal. Within your executive summary, the bottom line
has a clear hierarchy:

- **Primary bottom line:** The single most important thing the decision-maker must know. This goes in sentence one.
- **Secondary bottom lines:** Additional key judgments that support or qualify the primary. These fill paragraphs two and three.
- **Actionable implication:** What the decision-maker should do, stop doing, or prepare for. This closes the summary.

If your executive summary can be tweeted and still make sense, it is probably too long. If it can be tweeted and still makes sense, congratulations — you have mastered BLUF.

Write your key judgment on a sticky note before you write the summary. If the sticky
note does not fit on a real sticky note, your judgment is not sharp enough. Trim
until it fits.

{/* ---- Section 2: The Five-Paragraph Formula ---- */}

Every intelligence executive summary should follow a variation of the SMEAC
(Situation, Mission, Execution, Administration/Logistics, Command/Signal) format
adapted for analytical products. It is the structure that military decision-makers
already know — and it works because it forces you to answer the right questions in
the right order.

### Paragraph 1: Situation — The Key Judgment

This is your BLUF paragraph. It answers: **What is happening, and what does it
mean?** Include the key judgment, confidence level, and time horizon. Keep it to
two or three sentences. This is the paragraph that determines whether the reader keeps
going.

### Paragraph 2: Mission — Why We Care

This paragraph answers: **Why does this matter to the reader or the
organization?** Connect the analytical finding to the decision-maker's equities,
responsibilities, or strategic objectives. If you cannot articulate why the reader
should care, neither will they.

### Paragraph 3: Execution — The Evidence

This paragraph answers: **What evidence supports this judgment, and what are the
key drivers?** Provide the two to three most compelling pieces of evidence or
analytical drivers. This is where you prove your case — briefly. Detailed sourcing
belongs in the body.

### Paragraph 4: Admin — Implications and Risks

This paragraph answers: **What are the implications, and what could go
wrong?** Include second- and third-order effects, potential blowback, or
alternative scenarios. Flag any significant information gaps that affect confidence.

### Paragraph 5: Command — Recommended Actions

This paragraph answers: **What should the reader do?** Include specific,
actionable recommendations or at minimum, define the decision space. Even "no action
required at this time" is useful — it tells the leader they can stop worrying about it.

The five-paragraph format is older than most of the analysts writing it. There is a
reason it has survived: because anything that is five paragraphs long can be read in
under two minutes, and anything that takes longer than two minutes to read will not
be read.

{/* ---- Section 3: Killing Your Darlings ---- */}

Every analyst has a beloved paragraph they fought hard to write. Maybe it contains a
particularly elegant turn of phrase. Maybe it connects two disparate data points in
a way that made you feel brilliant. If it does not serve the executive summary, it has
to go. This is called "killing your darlings" — and it is the hardest part of writing
tight.

### The Word Budget

A proper executive summary should not exceed 300 to 500 words. That is roughly one
page of standard formatting. Here is how a 400-word budget typically breaks down:

- **Paragraph 1 (Situation):** 75 words — the key judgment and confidence level.
- **Paragraph 2 (Mission):** 75 words — why it matters.
- **Paragraph 3 (Execution):** 100 words — the evidence.
- **Paragraph 4 (Admin):** 75 words — implications and risks.
- **Paragraph 5 (Command):** 75 words — recommendations.

### The Editing Checklist

When editing your executive summary, ask these questions about every sentence:

- **Does this sentence contain a key judgment or implication?** If not, cut it.
- **Does this sentence require prior knowledge the reader may not have?** If yes, either make it self-contained or cut it.
- **Can this sentence be shortened without losing meaning?** Aim for a 25 percent word reduction on every pass.
- **Does this sentence use passive voice when active would be clearer?** Rewrite it.
- **Would the reader lose critical information if this sentence vanished?** If no, it is dead weight.

Before Editing

"It is important to note that the threat actor in question has been
observed utilizing multiple different types of cyber attack vectors
against critical infrastructure targets in the region during the time
period under review."

35 words, zero analytical value in the first clause.

After Editing

"The threat actor is using multiple cyber attack vectors against
regional critical infrastructure."

14 words — 60 percent shorter, zero substance lost.

Read your executive summary out loud. Every time you hear a word that feels
unnecessary, strike it. Then read it again. After three passes, compare the
original to the final version. The difference will shock you.

{/* ---- Section 4: The One-Page Test ---- */}

There is a simple rule in intelligence writing: if your executive summary is longer
than one page, it is not an executive summary. It is an abstract, a précis, or a
condensed report — call it what you want, but do not call it an executive summary.
The one-page test is brutally simple: print it. If it spills onto a second page,
cut until it does not.

### Why One Page?

The one-page limit is not an arbitrary constraint. It is rooted in how senior leaders
consume information. A single page fits on a desk, on a tablet screen, or in a briefing
binder without flipping. It can be read in under three minutes. It forces prioritization.
It eliminates the temptation to include "just one more detail."

### When One Page Is Too Much

Some executive summaries should be shorter than one page. A tactical intelligence
update for an operational commander may be three paragraphs. A warning report for a
national security advisor may be five sentences. Know your audience and adjust. The
one-page test is a ceiling, not a target.

### How to Survive the One-Page Test

- **Eliminate all background sections.** The reader either knows the context or can infer it.
- **Remove every adjective and adverb that does not carry analytical weight.** "Significant" and "very" are usually filler.
- **Convert sentences to bullet points where appropriate.** A list of three key judgments reads faster than a sentence containing three commas.
- **Merge paragraphs that cover related points.** Two half-paragraphs waste more space than one full paragraph.
- **Delete the final paragraph if it says nothing new.** If your recommendations are implicit in the analysis, stop writing.

The one-page test reveals a universal truth about intelligence writing: your first draft is always too long, your second draft is still too long, and your third draft is finally the right length — unless you let yourself add "just one more sentence."

Below is a poorly written executive summary. Your mission: rewrite it in 300 to 500
words using the BLUF principle and the five-paragraph SMEAC formula. Then cut it to
one page.

"This report has been prepared to provide an overview of the security situation
in the coastal region. It is based on information collected from various sources
over the last three months. It is important to note that the situation has been
evolving and there are many factors to consider. The report examines patterns
of criminal activity, the influence of organized crime groups, and the capacity
of local law enforcement to respond effectively. Additionally, the report considers
the economic conditions that may be contributing to the security environment. After
reviewing all of the available information, we have reached several conclusions about
the current state of affairs and what it might mean for future operations. These
conclusions are presented below along with supporting evidence and source references.
We hope that this report proves useful to the reader in their decision-making
process."

**Challenge:** Rewrite this to pass the one-page test. Apply BLUF by
inventing a concrete key judgment. Structure the result into the five-paragraph SMEAC
format. Strike every word that does not carry analytical weight. When you are done,
the original should look like a rough draft — because it is.

)
`

export default function ExecutivesummariesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Executive Summaries"
        subtitle="Master the art of writing tight, actionable executive summaries using BLUF, the five-paragraph formula, and ruthless edi"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="executive-summaries" />
      </MicroLesson>
    </LessonContainer>
  )
}
