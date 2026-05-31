import { Metadata } from 'next';
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  FieldExercise,
  ProTip,
  JokeAside,
  Debrief,
  NextLessonLink,
} from '@/components/micro-lesson';
import LessonContainer from '@/components/lesson-container';
import {
  Network,
  Users,
  GitBranch,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Analysis | Intel Analyst Academy',
  description:
    'Learn how to analyze networks using graph theory — nodes, edges, centrality measures, and interpreting relationship maps.',
  keywords: [
    'network analysis',
    'nodes and edges',
    'centrality',
    'degree centrality',
    'betweenness',
    'intelligence analysis',
    'link analysis',
  ],
  openGraph: {
    title: 'Network Analysis',
    description:
      'Master the art of finding who really runs the operation using graph theory and centrality measures.',
    type: 'article',
  },
};

export default function NetworkAnalysisPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Network Analysis"
        subtitle="Understanding relationships, power dynamics, and hidden structures through graph theory"
        humorSubtitle="It's not what you know — it's who they know. And who those people know."
        readTime={15}
        difficulty="Intermediate"
        category="Analytical Techniques"
        mascot="network-analysis"
        mascotMessage="Welcome, analyst. Networks are everywhere — criminal cells, corporate boards, terrorist finance flows. I see the connections. Now it's your turn. Try not to get tangled."
      >
        <MissionBriefing
          humorText="Translation: by the end of this lesson you will be professionally nosy about who talks to whom."
        >
          Every intelligence problem is, at some level, a network problem. A terrorist cell
          is a network. A drug trafficking route is a network. A money laundering scheme is
          a network. Understanding who is connected to whom — and what those connections mean
          — is one of the most powerful analytical tools at your disposal. In this lesson, you
          will learn the fundamentals of network analysis, the key measures that reveal hidden
          power structures, and how to read a network chart like an operational picture.
        </MissionBriefing>

        {/* ---- Section 1: Nodes, Edges, and the Fine Art of Connecting Dots ---- */}
        <DeepDive title="Nodes, Edges, and the Fine Art of Connecting Dots">
          <p className="mb-4">
            Every network analysis begins with two basic building blocks: nodes and edges. A
            <strong> node</strong> (also called a vertex) represents an entity — a person, a
            phone number, a bank account, a location, a company shell. An <strong>edge</strong>
            (also called a link) represents a relationship between two nodes — a phone call,
            a financial transaction, a meeting, a shared address.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">What Makes a Network Analysis</h3>
          <p className="mb-4">
            Network analysis is not just drawing circles and arrows. It is a mathematical
            approach to understanding structure. When you map a criminal network, you are not
            trying to produce a pretty picture — you are trying to answer specific questions:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>Who are the key players?</li>
            <li>Who connects otherwise separate groups?</li>
            <li>Who is peripheral and likely replaceable?</li>
            <li>Where is the network most vulnerable to disruption?</li>
          </ul>

          <div className="bg-slate-950 border-l-4 border-indigo-400 pl-4 py-3 my-4">
            <p className="text-slate-300 italic">
              &quot;In a terrorist network of 40 operatives, if you remove the three individuals
              with the highest betweenness centrality, the network fragments into 12 disconnected
              components. That is not guesswork — that is math.&quot;
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">The Analyst&apos;s Rule of Thumb</h3>
          <p className="mb-4">
            Not every connection matters equally. A phone call between two mid-level
            facilitators that lasts three seconds is less significant than a weekly one-hour
            call — unless that three-second call happens at 3 AM. Weight your edges by
            frequency, duration, recency, and contextual relevance. Raw connectivity is data;
            weighted connectivity is intelligence.
          </p>

          <JokeAside>
            Network analysis tip: If your chart looks like a plate of spaghetti thrown at a
            wall, you have not done analysis yet. You have done arts and crafts. Try filtering
            by edge weight.
          </JokeAside>

          <ProTip>
            <p>
              When building a network chart, start small. Many analysts make the mistake of
              throwing 500 nodes on the screen because the data is available. A useful network
              chart has between 15 and 60 nodes for manual analysis. Beyond that, you need
              automated clustering. Your eyeballs are good — but they are not that good.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Centrality ---- */}
        <DeepDive title="Centrality: Who Actually Runs This Operation?">
          <p className="mb-4">
            Not all nodes are created equal. Some people in a network barely matter — they
            know one person and do one thing. Others are linchpins. Centrality measures are
            mathematical tools that quantify importance. There are four measures every analyst
            should know.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Degree Centrality: Who Has the Most Friends</h3>
          <p className="mb-4">
            Degree centrality is the simplest measure: count how many direct connections a
            node has. A person with 20 phone contacts has higher degree centrality than a
            person with 3. In an undirected network, degree is the total number of edges
            incident to a node. In a directed network, you distinguish <strong>in-degree</strong>
            (how many people call them) from <strong>out-degree</strong> (how many people they
            call). A high in-degree with low out-degree suggests a hub — someone people report to.
          </p>

          <div className="bg-slate-950 border-l-4 border-indigo-400 pl-4 py-3 my-4">
            <p className="text-slate-300 italic">
              High degree centrality tells you who is popular. It does not tell you who is
              important. There is a difference — ask anyone who has ever been popular in high
              school versus anyone who actually ran the student council.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Betweenness Centrality: The Gatekeeper</h3>
          <p className="mb-4">
            Betweenness centrality measures how often a node sits on the shortest path between
            two other nodes. This is the single most useful measure for intelligence analysts.
            A node with high betweenness controls the flow of information or resources. Remove
            this node and the network fractures. In operational terms, the person with the
            highest betweenness is your high-value target — they are the broker, the
            facilitator, the one who knows everyone and connects the groups.
          </p>

          <ProTip>
            <p>
              When targeting a network, look at betweenness before degree. The person with the
              most connections is often just the loudest. The person with the highest
              betweenness is the one the network cannot function without. That is your target.
            </p>
          </ProTip>

          <h3 className="text-xl font-bold mb-3 mt-6">Closeness Centrality: The Speed of Influence</h3>
          <p className="mb-4">
            Closeness centrality measures how quickly a node can reach all other nodes in the
            network. A node with high closeness can spread information (or orders) faster than
            anyone else. In intelligence work, this is useful for identifying command nodes and
            individuals who can coordinate action rapidly.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Eigenvector Centrality: Connected to the Connected</h3>
          <p className="mb-4">
            Eigenvector centrality is degree centrality with a prestige adjustment. It does not
            just count connections — it weights them by the importance of the people you are
            connected to. One connection to a king is worth more than a hundred connections to
            peasants. PageRank, the algorithm Google used to rank web pages, is a variant of
            eigenvector centrality. If you have high eigenvector centrality, you are connected
            to people who themselves are well-connected. That is power by association.
          </p>

          <JokeAside>
            Eigenvector centrality is the mathematical way of saying &quot;it is not what you
            know, it is who you know — and also who those people know, and who they know, and
            who they know.&quot; By the third degree you are probably connected to someone on a
            watchlist. Congratulations.
          </JokeAside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">Degree</p>
              <p className="text-slate-300 text-sm">Count of direct connections</p>
              <p className="text-slate-400 text-xs mt-1">Who is popular?</p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">Betweenness</p>
              <p className="text-slate-300 text-sm">Lies on shortest paths between others</p>
              <p className="text-slate-400 text-xs mt-1">Who is the gatekeeper?</p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">Closeness</p>
              <p className="text-slate-300 text-sm">Shortest distance to all other nodes</p>
              <p className="text-slate-400 text-xs mt-1">Who can act fastest?</p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">Eigenvector</p>
              <p className="text-slate-300 text-sm">Weighted by the importance of your connections</p>
              <p className="text-slate-400 text-xs mt-1">Who is connected to power?</p>
            </div>
          </div>
        </DeepDive>

        {/* ---- Section 3: Reading the Tea Leaves of a Network Chart ---- */}
        <DeepDive title="Reading the Tea Leaves of a Network Chart">
          <p className="mb-4">
            Once you have built your network and calculated your metrics, the real analysis
            begins. A network chart is not a conclusion — it is a starting point. Here is how
            to read what the network is telling you.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Finding Brokers</h3>
          <p className="mb-4">
            Brokers (high betweenness nodes) are individuals who sit between otherwise separate
            clusters. They are the single point of failure. In a drug cartel, the broker might
            be the only person who knows both the supplier in Colombia and the distributor in
            Miami. Remove the broker, and the two groups cannot communicate. Brokers are almost
            always your highest-priority targets.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Identifying Isolates</h3>
          <p className="mb-4">
            Isolates are nodes with only one or two connections. In a criminal network, isolates
            are often foot soldiers, low-level couriers, or disposable assets. They are
            operationally insignificant on their own, but they can be useful entry points.
            Observing an isolate — following their single connection — often leads you to
            someone more interesting upstream.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Spotting Clusters</h3>
          <p className="mb-4">
            A cluster (or community) is a group of nodes that are densely connected to each
            other and sparsely connected to the rest of the network. Clusters often correspond
            to operational cells, geographic regions, organizational units, or functional roles.
            Identifying clusters is the first step in understanding the structure of the
            organization you are mapping.
          </p>

          <ProTip>
            <p>
              Use the &quot;two hops&quot; rule: if you can reach 80% of the network within two
              hops from a single node, that node is either the leader or the broker. If you
              cannot reach 80% of the network within three hops from any single node, you are
              looking at a highly decentralized or compartmented structure — characteristic of
              counter-surveillance-aware organizations.
            </p>
          </ProTip>

          <JokeAside>
            A network with no clusters and everyone connected to everyone else is not a
            criminal network. It is a poorly planned office party. Real operations have
            compartments.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: Directed vs. Undirected ---- */}
        <DeepDive title="Directed vs. Undirected: When Arrows Matter">
          <p className="mb-4">
            Not all relationships are two-way. Some edges have a direction — a phone call goes
            from caller to receiver; money flows from payer to recipient; an order travels from
            commander to subordinate. Understanding when to use directed edges versus undirected
            edges can make or break your analysis.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Undirected Networks</h3>
          <p className="mb-4">
            An undirected edge simply means &quot;A is connected to B.&quot; Use undirected
            networks when the relationship is inherently mutual: shared addresses, co-membership
            in an organization, familial relationships. If removing direction does not lose
            information, your network is probably undirected.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Directed Networks</h3>
          <p className="mb-4">
            Directed edges have an arrow. Use directed networks when the relationship has a
            clear origin and destination: phone calls, financial flows, command-and-control
            relationships, travel itineraries. Direction reveals hierarchy. If person A always
            calls person B and person B never calls person A, you have identified a dependency
            — and probably a reporting structure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Undirected</p>
              <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                <li>Shared bank account</li>
                <li>Same address</li>
                <li>Co-defendants in a case</li>
                <li>Family relationship</li>
              </ul>
            </div>
            <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Directed</p>
              <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                <li>Phone call records (CDR)</li>
                <li>Money transfer (sender → recipient)</li>
                <li>Email (from → to)</li>
                <li>Command authority</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">The Asymmetry Trap</h3>
          <p className="mb-4">
            A common analytical mistake is to treat all directed edges as undirected. Consider
            phone call data: if A calls B ten times and B calls A once, it is tempting to draw
            an undirected edge and note &quot;11 calls between A and B.&quot; But that 10:1
            ratio tells a story — A is the one seeking contact, A is the driver, A is probably
            the subordinate reporting up. That asymmetry is the intelligence. Do not discard it
            by drawing undirected lines.
          </p>

          <JokeAside>
            If your network chart does not have arrows, it is not a network analysis. It is a
            very complicated Venn diagram. Arrows are what separate analysis from abstract art.
          </JokeAside>
        </DeepDive>

        <FieldExercise
          title="Field Exercise: Map the Cell"
        >
          <p className="text-slate-300 mb-4">
            You have intercepted the following communication records from a suspected human
            trafficking network over a 48-hour period. Draw the network (on paper or in your
            head) and answer the questions below.
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-slate-300 font-mono">
              Person A → Person B: 12 calls<br />
              Person B → Person C: 7 calls<br />
              Person C → Person A: 1 call<br />
              Person D → Person B: 4 calls<br />
              Person E → Person D: 2 calls<br />
              Person F → Person A: 1 call<br />
              Person A → Person F: 0 calls<br />
              Person D → Person E: 0 calls
            </div>
          </div>
          <p className="text-slate-300 mb-2 font-semibold">Questions:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
            <li>Who has the highest degree centrality?</li>
            <li>Who has the highest betweenness centrality? (Hint: who connects the separate clusters?)</li>
            <li>If you had to arrest exactly one person to disrupt the network, who would it be and why?</li>
            <li>What does the asymmetric call pattern between A and F tell you?</li>
          </ol>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Networks consist of nodes (entities) and edges (relationships) — the basic vocabulary of every link analysis.",
            "Degree centrality counts connections; betweenness centrality reveals gatekeepers and brokers who control information flow.",
            "Closeness centrality identifies who can act fastest; eigenvector centrality reveals who is connected to power.",
            "High betweenness individuals are typically the highest-value targets — removal fragments the network.",
            "Clusters represent operational compartments; isolates are entry points; brokers are the structural glue.",
            "Use directed edges when direction conveys information (calls, money, command) — never flatten asymmetry into undirected lines.",
          ]}
          humorSummary="Draw circles, add arrows, find the gatekeeper, disrupt everything. You now have a new superpower. Wear it responsibly."
        />

        <NextLessonLink
          href="/topics/entity-relationship-charts"
          title="Entity Relationship Charts"
          description="Take network analysis to the next level by building detailed entity relationship charts for complex cases"
        />
      </MicroLesson>
    </LessonContainer>
  );
}
