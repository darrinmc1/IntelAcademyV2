import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Network Analysis - The Intel Analyst Academy",
  description: "Learn about network analysis in intelligence analysis.",
}

const topicContent = `Every intelligence problem is, at some level, a network problem. A terrorist cell
is a network. A drug trafficking route is a network. A money laundering scheme is
a network. Understanding who is connected to whom - and what those connections mean
- is one of the most powerful analytical tools at your disposal. In this lesson, you
will learn the fundamentals of network analysis, the key measures that reveal hidden
power structures, and how to read a network chart like an operational picture.

{/* ---- Section 1: Nodes, Edges, and the Fine Art of Connecting Dots ---- */}

Every network analysis begins with two basic building blocks: nodes and edges. A
** node** (also called a vertex) represents an entity - a person, a
phone number, a bank account, a location, a company shell. An **edge**
(also called a link) represents a relationship between two nodes - a phone call,
a financial transaction, a meeting, a shared address.

### What Makes a Network Analysis

Network analysis is not just drawing circles and arrows. It is a mathematical
approach to understanding structure. When you map a criminal network, you are not
trying to produce a pretty picture - you are trying to answer specific questions:

- Who are the key players?
- Who connects otherwise separate groups?
- Who is peripheral and likely replaceable?
- Where is the network most vulnerable to disruption?

"In a terrorist network of 40 operatives, if you remove the three individuals
with the highest betweenness centrality, the network fragments into 12 disconnected
components. That is not guesswork - that is math."

### The Analyst's Rule of Thumb

Not every connection matters equally. A phone call between two mid-level
facilitators that lasts three seconds is less significant than a weekly one-hour
call - unless that three-second call happens at 3 AM. Weight your edges by
frequency, duration, recency, and contextual relevance. Raw connectivity is data;
weighted connectivity is intelligence.

Network analysis tip: If your chart looks like a plate of spaghetti thrown at a
wall, you have not done analysis yet. You have done arts and crafts. Try filtering
by edge weight.

When building a network chart, start small. Many analysts make the mistake of
throwing 500 nodes on the screen because the data is available. A useful network
chart has between 15 and 60 nodes for manual analysis. Beyond that, you need
automated clustering. Your eyeballs are good - but they are not that good.

{/* ---- Section 2: Centrality ---- */}

Not all nodes are created equal. Some people in a network barely matter - they
know one person and do one thing. Others are linchpins. Centrality measures are
mathematical tools that quantify importance. There are four measures every analyst
should know.

### Degree Centrality: Who Has the Most Friends

Degree centrality is the simplest measure: count how many direct connections a
node has. A person with 20 phone contacts has higher degree centrality than a
person with 3. In an undirected network, degree is the total number of edges
incident to a node. In a directed network, you distinguish **in-degree**
(how many people call them) from **out-degree** (how many people they
call). A high in-degree with low out-degree suggests a hub - someone people report to.

High degree centrality tells you who is popular. It does not tell you who is
important. There is a difference - ask anyone who has ever been popular in high
school versus anyone who actually ran the student council.

### Betweenness Centrality: The Gatekeeper

Betweenness centrality measures how often a node sits on the shortest path between
two other nodes. This is the single most useful measure for intelligence analysts.
A node with high betweenness controls the flow of information or resources. Remove
this node and the network fractures. In operational terms, the person with the
highest betweenness is your high-value target - they are the broker, the
facilitator, the one who knows everyone and connects the groups.

When targeting a network, look at betweenness before degree. The person with the
most connections is often just the loudest. The person with the highest
betweenness is the one the network cannot function without. That is your target.

### Closeness Centrality: The Speed of Influence

Closeness centrality measures how quickly a node can reach all other nodes in the
network. A node with high closeness can spread information (or orders) faster than
anyone else. In intelligence work, this is useful for identifying command nodes and
individuals who can coordinate action rapidly.

### Eigenvector Centrality: Connected to the Connected

Eigenvector centrality is degree centrality with a prestige adjustment. It does not
just count connections - it weights them by the importance of the people you are
connected to. One connection to a king is worth more than a hundred connections to
peasants. PageRank, the algorithm Google used to rank web pages, is a variant of
eigenvector centrality. If you have high eigenvector centrality, you are connected
to people who themselves are well-connected. That is power by association.

Eigenvector centrality is the mathematical way of saying "it is not what you
know, it is who you know - and also who those people know, and who they know, and
who they know." By the third degree you are probably connected to someone on a
watchlist. Congratulations.

Degree
Count of direct connections
Who is popular?

Betweenness
Lies on shortest paths between others
Who is the gatekeeper?

Closeness
Shortest distance to all other nodes
Who can act fastest?

Eigenvector
Weighted by the importance of your connections
Who is connected to power?

{/* ---- Section 3: Reading the Tea Leaves of a Network Chart ---- */}

Once you have built your network and calculated your metrics, the real analysis
begins. A network chart is not a conclusion - it is a starting point. Here is how
to read what the network is telling you.

### Finding Brokers

Brokers (high betweenness nodes) are individuals who sit between otherwise separate
clusters. They are the single point of failure. In a drug cartel, the broker might
be the only person who knows both the supplier in Colombia and the distributor in
Miami. Remove the broker, and the two groups cannot communicate. Brokers are almost
always your highest-priority targets.

### Identifying Isolates

Isolates are nodes with only one or two connections. In a criminal network, isolates
are often foot soldiers, low-level couriers, or disposable assets. They are
operationally insignificant on their own, but they can be useful entry points.
Observing an isolate - following their single connection - often leads you to
someone more interesting upstream.

### Spotting Clusters

A cluster (or community) is a group of nodes that are densely connected to each
other and sparsely connected to the rest of the network. Clusters often correspond
to operational cells, geographic regions, organizational units, or functional roles.
Identifying clusters is the first step in understanding the structure of the
organization you are mapping.

Use the "two hops" rule: if you can reach 80% of the network within two
hops from a single node, that node is either the leader or the broker. If you
cannot reach 80% of the network within three hops from any single node, you are
looking at a highly decentralized or compartmented structure - characteristic of
counter-surveillance-aware organizations.

A network with no clusters and everyone connected to everyone else is not a
criminal network. It is a poorly planned office party. Real operations have
compartments.

{/* ---- Section 4: Directed vs. Undirected ---- */}

Not all relationships are two-way. Some edges have a direction - a phone call goes
from caller to receiver; money flows from payer to recipient; an order travels from
commander to subordinate. Understanding when to use directed edges versus undirected
edges can make or break your analysis.

### Undirected Networks

An undirected edge simply means "A is connected to B." Use undirected
networks when the relationship is inherently mutual: shared addresses, co-membership
in an organization, familial relationships. If removing direction does not lose
information, your network is probably undirected.

### Directed Networks

Directed edges have an arrow. Use directed networks when the relationship has a
clear origin and destination: phone calls, financial flows, command-and-control
relationships, travel itineraries. Direction reveals hierarchy. If person A always
calls person B and person B never calls person A, you have identified a dependency
- and probably a reporting structure.

Undirected

- Shared bank account
- Same address
- Co-defendants in a case
- Family relationship

Directed

- Phone call records (CDR)
- Money transfer (sender → recipient)
- Email (from → to)
- Command authority

### The Asymmetry Trap

A common analytical mistake is to treat all directed edges as undirected. Consider
phone call data: if A calls B ten times and B calls A once, it is tempting to draw
an undirected edge and note "11 calls between A and B." But that 10:1
ratio tells a story - A is the one seeking contact, A is the driver, A is probably
the subordinate reporting up. That asymmetry is the intelligence. Do not discard it
by drawing undirected lines.

If your network chart does not have arrows, it is not a network analysis. It is a
very complicated Venn diagram. Arrows are what separate analysis from abstract art.

You have intercepted the following communication records from a suspected human
trafficking network over a 48-hour period. Draw the network (on paper or in your
head) and answer the questions below.

Person A → Person B: 12 calls

Person B → Person C: 7 calls

Person C → Person A: 1 call

Person D → Person B: 4 calls

Person E → Person D: 2 calls

Person F → Person A: 1 call

Person A → Person F: 0 calls

Person D → Person E: 0 calls

Questions:

- Who has the highest degree centrality?
- Who has the highest betweenness centrality? (Hint: who connects the separate clusters?)
- If you had to arrest exactly one person to disrupt the network, who would it be and why?
- What does the asymmetric call pattern between A and F tell you?
`

export default function NetworkanalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Network Analysis"
        subtitle="Learn about network analysis in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="network-analysis" />
      </MicroLesson>
    </LessonContainer>
  )
}
