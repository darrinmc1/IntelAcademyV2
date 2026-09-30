import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financial Network Mapping - The Intel Analyst Academy",
  description:
    "How analysts map financial networks: transaction charts versus control charts, how to label edges, and how to fuse open sources without promoting a leak or a news clip into proof.",
}

const topicContent = `A financial network map is a picture of who is connected to whom by money, ownership,
or a shared identifier. It is also a place where analysts go to feel finished.
A dense chart looks like understanding. Sometimes it is only every wire you found,
glued to every name you met, with the bank in the middle because everyone uses a bank.

This lesson is how to build a map that can survive the question "what does this
line mean." It assumes you can already follow a payment, read a registry, and
grade an open source. Those are the earlier lessons. Here they share a page.


Draw two pictures, even if they later sit on one sheet. They answer different
questions.

### The transaction map

Nodes are accounts, companies, and people that sent or received value. Edges are
payments. Each edge needs a date or a range, an amount or a range, a direction,
and a source. This map answers: where did the value go. It does not answer who
controls the account unless you have added that as a separate fact.

### The control map

Nodes are humans and the entities they own, direct, or sign for. Edges are
"shareholder of," "director of," "signs for," "beneficiary of." This map answers:
who can move the account, or who benefits if it moves. A person can control an
account that never shows their name on a wire. If you only draw wires, that person
is invisible, which is often the point of the structure.

### How they fail when you merge them too early

If you use the same line style for "paid" and "owns," a reader will brief ownership
as if it were a transfer, or a transfer as if it were control. Pick two styles and
keep them. A legend is not decoration. It is the difference between a chart and a
poster.

When a decision-maker asks "who is behind this," show the control map first and
the transaction map second. When they ask "where did the money go on Tuesday,"
do the reverse. The wrong map is how a true chart misleads.


Every edge earns its place by being specific. If you cannot fill the blanks, you
do not have an edge yet. You have a suspicion, and suspicions go in the analytic
note, not in the solid line.

### Payment edges

- Direction: who paid whom. A line with no arrow is a shrug.
- Amount and currency, or a stated range if you are protecting a figure your rules say to generalize.
- Date or window.
- Stated purpose, quoted, not improved.
- Source: which statement, filing, or disclosure.

### Ownership and role edges

- The role: shareholder, member, director, trustee, signatory.
- The percentage if you have it. "Owns" without a figure pretends you saw the cap table.
- The date of the filing. Roles change. A director who resigned before the wire is context, not a current controller.
- The registry or mandate you read.

### Attribute edges, drawn weaker on purpose

Same registered office, same phone, same formation agent, same email domain.
These are leads. They are not payments and they are not ownership. Draw them
dashed, or in a third style, and say so in the legend. A formation agent who
hosts hundreds of companies will connect half your chart if you let a shared
address become a solid line. You will have drawn the agent's business model and
called it a gang.

The test: could two honest strangers share this attribute without being in league.
If yes, the edge stays weak until a second, harder fact agrees.


Open sources make financial maps faster and riskier. A corporate registry, a court
filing, a company website, a leak, and a newspaper are not the same species.

### A minimum grade on every external node

- **What it is.** Registry extract, news report, leaked document, social-media post, commercial database.
- **Date.** When it was true, not when you downloaded it. A news article from three years ago about a former director is not a current officer.
- **What it actually says.** Quote the claim. "The paper says X was a shareholder in 2019." You do not write "X owns the group."
- **What would raise it.** A second independent source, or the official filing itself.

### Leaks

A leak can be the reason you look. It is a poor thing to hang a final judgment on
alone. You often cannot examine how it was collected, whether it was altered, or
whether the document was a draft. Use it to task registries, bank records you are
allowed to seek, and interviews your office is allowed to do. In the chart, mark
leak-only edges so a later reader does not cite them as filings.

### Fusion with the rest of the path

The trade lesson gives you a discrepancy between invoice and shipment. That
discrepancy is an annotation on a payment edge, not a new node. The sanctions
lesson gives you a list check with a date. That is an attribute of a node, with
the list name attached. The crypto lesson gives you hops that are hypotheses.
Those hops do not get the same line as a bank wire you have in a statement.
Fusion means the grades stay visible after you combine the stories. It does not
mean everything becomes one color because you worked hard.


Centrality measures will happily tell you the most connected node. In a financial
chart the most connected node is often a bank, a payment processor, or a formation
agent. They are central because they are infrastructure. Briefing them as the
ringleader is a category error.

### Questions that beat a centrality score

- **Who is unavoidable.** If you remove this person, do the control paths still reach the account. That is closer to a key player than "has many lines."
- **Who touches the value last.** The last hop before an asset purchase is often more interesting than the noisiest account in the middle.
- **Who never appears, but everyone answers to them.** A controller who is absent from the wires and present on three mandates. Absence from the transaction map is a finding if the control map is solid.
- **What is an artifact of your collection.** If you pulled every wire from one bank, that bank will look like the sun. You collected the solar system from inside one planet. Say so, or the picture will lie about the sky.

If you use a software score, publish the definition in a caption: degree, betweenness,
or whatever you actually ran. A number without a definition is decoration.


A map is ready to brief when a skeptical colleague can point at any line and you
can answer, without opening a new search, what it means and where it came from.

Before you send it:

- Legend present, and the styles match the legend.
- No node whose only label is a first name you are not sure of.
- Time window in the title. A map of "the network" with no dates merges 2016 and last Thursday.
- Hypotheses parked in a note or a dashed style, not in the title.
- The infrastructure nodes identified as infrastructure, so nobody tasks the wrong raid on a high-street bank.
- One sentence on what the map does not show. The missing bank. The missing owner. The hop you stopped at.

The point of the picture is to make a gap obvious. A chart that hides its gap is
advertising.


**Scenario.** You are asked for a one-page map of "the Harbor Lane group." You hold:

- A wire from Pier Consulting to Harbor Lane Properties LLC, dated 3 June, described as "strategic advice," amount in the statement.
- A registry filing: Harbor Lane Properties LLC's only member is Harbor Lane Holdings Ltd.
- Harbor Lane Holdings Ltd's current director was appointed eleven days before the wire and is a director of dozens of other companies at one formation address.
- A three-year-old news article quoting a person named R. Hale as "behind Harbor Lane." No date of birth, and you cannot find Hale on either registry.
- A leaked spreadsheet, provenance unclear, listing Hale as a shareholder of Harbor Lane Holdings Ltd in a year before the current director was appointed.

**Build the briefing map in words:**

- Which edges are solid, and the source for each.
- Which edges are dashed, and why they are not ready to be solid.
- Where R. Hale sits: in the title, in a hypothesis note, or off the page. Choose and defend it.
- The infrastructure node you will label as infrastructure so it does not become the villain by accident.
- The single record that would most improve the control map.

If Hale is in the title, you promoted a nickname from a newspaper and a spreadsheet
you cannot audit. The wire does not know who Hale is. Do not make the wire say it.`

export default function FinancialNetworkMappingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Financial Network Mapping"
        subtitle="Transaction maps and control maps, with edges that say what they mean and open sources that keep their grade."
        humorSubtitle="If the bank is the ringleader, you charted the plumbing and called it a plot."
        readTime={18}
        difficulty="Intermediate"
        category="Financial Intelligence"
        mascot="foundations"
        mascotMessage="Two maps. A legend. And a sentence about the gap you did not paper over."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="financial-network-mapping" />
      </MicroLesson>
    </LessonContainer>
  )
}
