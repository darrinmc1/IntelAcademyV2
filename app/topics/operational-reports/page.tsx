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
  title: "Operational Reports | The Intel Analyst Academy",
  description:
    "Learn how to write operational intelligence reports that support campaigns, sustained operations, and theater-level decision-making.",
}

export default function OperationalReportsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Writing Operational Intelligence Reports"
        subtitle="Bridging the Gap Between Grand Strategy and Boots on the Ground"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={18}
      >
        <MissionBriefing humorText="Strategic analysts think in years. Tactical analysts think in hours. You're the one who has to think in 'weeks to months,' which somehow feels like the most awkward timeframe of all.">
          <p className="mb-4">
            Operational intelligence is the middle child of the intelligence family -- often overlooked but
            absolutely essential. It supports the planners and commanders who translate strategic objectives
            into executable campaigns. This lesson covers the operational environment assessment, the key
            elements of an operational report, how to sync with the planning cycle, and the unique
            challenge of serving an audience that needs more detail than strategic consumers but more
            context than tactical ones.
          </p>
        </MissionBriefing>

        <DeepDive title="The Operational Level: What Makes It Distinct">
          <p className="mb-4">
            Operational intelligence occupies the space between <strong>&quot;why are we doing this?&quot;</strong>
            (strategic) and <strong>&quot;how do we do this specific thing right now?&quot;</strong> (tactical).
            It answers the question: <strong>&quot;How do we plan and execute this campaign to achieve the
            strategic objective?&quot;</strong>
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Key Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Timeframe:</strong> Weeks to months. Long enough to plan phased operations, short
              enough that the intelligence remains actionable.
            </li>
            <li>
              <strong>Scope:</strong> Theater, region, or campaign-level. A specific area of operations
              or a defined mission set.
            </li>
            <li>
              <strong>Focus:</strong> The operational environment -- adversary order of battle, terrain,
              infrastructure, key actors, logistics, population dynamics, and how these factors interact.
            </li>
            <li>
              <strong>Audience:</strong> Theater commanders, campaign planners, task force leaders, and
              their staffs. These people are making resource allocation and sequencing decisions.
            </li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">The Audience&apos;s Mindset</h3>
          <p className="mb-4">
            Your operational consumer is asking questions like:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>&quot;What does the adversary look like in my area of operations, and how are they likely to respond to my actions?&quot;</li>
            <li>&quot;Where should I concentrate my resources over the next four weeks?&quot;</li>
            <li>&quot;What are the second- and third-order effects of the operation we are planning?&quot;</li>
            <li>&quot;What indicators should I watch for that would tell me the campaign is succeeding or failing?&quot;</li>
          </ul>

          <JokeAside>
            The operational analyst is the person who tells the chef what ingredients are available and what
            the guests are allergic to. The strategic analyst picked the restaurant. The tactical analyst
            is plating the dish. Everyone thinks their job is the hardest.
          </JokeAside>
        </DeepDive>

        <DeepDive title="The Operational Environment Assessment">
          <p className="mb-4">
            The <strong>Operational Environment Assessment (OEA)</strong> is the foundational product of
            operational intelligence. It provides a comprehensive picture of the operating environment
            that enables planning and decision-making. In military doctrine, this process is formalized
            as <strong>Joint Intelligence Preparation of the Operational Environment (JIPOE)</strong>,
            but the principles apply in any operational context.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Core Components of an OEA</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Physical environment:</strong> Terrain, weather, infrastructure, lines of
              communication, key terrain features. What does the battlespace look like?
            </li>
            <li>
              <strong>Adversary assessment:</strong> Order of battle, capabilities, tactics, leadership,
              logistics, morale, and most importantly -- <em>probable courses of action</em>. What will
              the adversary likely do?
            </li>
            <li>
              <strong>Civil considerations:</strong> Population demographics, governance structures,
              economic activity, cultural factors, humanitarian concerns. How will the local environment
              affect and be affected by operations?
            </li>
            <li>
              <strong>Information environment:</strong> Media landscape, narrative dynamics, social media
              influence, information operations by all parties.
            </li>
            <li>
              <strong>Threat integration:</strong> How adversary capabilities interact with the terrain
              and civil environment to create specific threats to friendly operations.
            </li>
          </ul>

          <ProTip>
            <p>
              The best OEAs are living documents, not one-time products. Establish an update cycle that
              matches your operational tempo. A fast-moving campaign may need weekly updates; a stability
              operation might update monthly. The key is that the OEA always reflects current reality,
              not the reality that existed when you first wrote it.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="Key Elements of an Operational Report">
          <p className="mb-4">
            Beyond the foundational OEA, operational analysts produce a range of products tied to the
            planning and execution cycle. While formats vary by organization, most operational reports
            share these essential elements.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Situation Overview</h3>
          <p className="mb-4">
            Open with a concise summary of the current operational situation. What has changed since the
            last report? What is the adversary doing? What are the key developments that affect the
            campaign? This should be readable in under two minutes.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Adversary Course of Action Analysis</h3>
          <p className="mb-4">
            This is often the most valuable section for campaign planners. Present the most likely and
            most dangerous adversary courses of action (COAs), with supporting evidence and indicators
            for each. Planners use this to war-game their own options and develop contingencies.
          </p>
          <p className="mb-4">
            <strong>Most Likely COA:</strong> What does the evidence suggest the adversary will probably
            do? Base this on observed patterns, capabilities, and assessed intent.
          </p>
          <p className="mb-4">
            <strong>Most Dangerous COA:</strong> What is the worst-case scenario that the adversary has
            the capability to execute, even if it is less likely? Planners need to account for this even
            if they optimize against the most likely scenario.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Campaign Impact Assessment</h3>
          <p className="mb-4">
            How are current operations affecting the adversary and the operational environment? Are the
            campaign objectives being met? This section connects intelligence to <strong>measures of
            effectiveness (MOEs)</strong> and <strong>measures of performance (MOPs)</strong> to help
            the commander assess progress.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Intelligence Gaps and Collection Priorities</h3>
          <p className="mb-4">
            Be honest about what you do not know. Identify the critical intelligence gaps that affect
            planning and recommend collection priorities to fill them. This section drives the collection
            cycle and demonstrates analytical integrity.
          </p>

          <JokeAside>
            An operational report without an intelligence gaps section is like a weather forecast that
            never mentions clouds. Sure, the sunny parts sound great, but the commander really needs to
            know about the storms they cannot see yet.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Syncing with the Planning Cycle and Bridging Tiers">
          <h3 className="text-lg font-bold mb-3 mt-6">The Intelligence-Operations Planning Cycle</h3>
          <p className="mb-4">
            Operational intelligence does not exist in a vacuum -- it is tightly coupled with the
            operations planning cycle. Intelligence inputs are needed at every stage:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Mission analysis:</strong> Intelligence provides the environmental context and
              adversary assessment that shapes how the mission is understood.
            </li>
            <li>
              <strong>COA development:</strong> Intelligence informs which friendly COAs are feasible
              by assessing adversary reactions and environmental constraints.
            </li>
            <li>
              <strong>COA comparison:</strong> Intelligence helps war-game each option by projecting
              adversary responses and identifying risks.
            </li>
            <li>
              <strong>Execution:</strong> Intelligence provides the indicators and warnings that trigger
              branches and sequels during execution.
            </li>
            <li>
              <strong>Assessment:</strong> Intelligence helps evaluate whether the operation achieved
              its objectives and what adjustments are needed.
            </li>
          </ul>

          <ProTip>
            <p>
              Know where your planning staff is in the cycle and tailor your products accordingly. During
              COA development, they need adversary COA analysis. During execution, they need indicators
              and warnings. Delivering the right product at the wrong time is almost as bad as delivering
              the wrong product.
            </p>
          </ProTip>

          <h3 className="text-lg font-bold mb-3 mt-6">Bridging Strategic and Tactical</h3>
          <p className="mb-4">
            The operational analyst serves as a translator between two very different worlds. Strategic
            guidance comes down in broad terms: &quot;Degrade the adversary&apos;s capability to project
            force in the region.&quot; Tactical reports come up in granular detail: &quot;Patrol observed
            three vehicles at grid reference XY1234 at 0600.&quot;
          </p>
          <p className="mb-4">
            Your job is to <strong>translate strategic objectives into operational intelligence
            requirements</strong> that drive tactical collection, and to <strong>aggregate tactical
            reporting into operational assessments</strong> that inform strategic decision-making.
          </p>
          <p className="mb-4">
            <strong>Top-down:</strong> &quot;The strategic objective requires us to understand the
            adversary&apos;s logistics network. This means we need operational-level mapping of supply
            routes, which requires tactical-level surveillance of key nodes.&quot;
          </p>
          <p className="mb-4">
            <strong>Bottom-up:</strong> &quot;Tactical reporting over the past three weeks shows increased
            movement along Route Alpha. At the operational level, this suggests the adversary is
            repositioning forces for a spring offensive, which has strategic implications for regional
            stability.&quot;
          </p>
        </DeepDive>

        <Debrief
          takeaways={[
            "Operational intelligence bridges strategic objectives and tactical execution, answering 'how do we execute this campaign?'",
            "The Operational Environment Assessment is your foundational product -- keep it current as a living document",
            "Always present both most likely and most dangerous adversary courses of action for planners",
            "Sync your products to the planning cycle: the right intelligence at the wrong time is nearly useless",
            "Be transparent about intelligence gaps -- they drive collection and demonstrate analytical integrity",
            "Your unique value is translating between strategic guidance and tactical reporting",
          ]}
          humorSummary="You're the middle manager of the intelligence world. Nobody fully appreciates what you do until you stop doing it, and then suddenly everything falls apart. Wear it as a badge of honor."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Tactical Reports",
          description: "Learn how to write for the operators who need intelligence right now",
          path: "/topics/tactical-reports",
        }}
        moreLearning={{
          title: "Report Fundamentals",
          description: "Core principles of effective intelligence reporting across all levels",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Report Types Overview",
          description: "Compare all three tiers of intelligence reporting side by side",
          path: "/topics/intelligence-report-types",
        }}
      />
    </LessonContainer>
  )
}
