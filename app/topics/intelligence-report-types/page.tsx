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
  title: "Strategic, Operational, and Tactical Reports | The Intel Analyst Academy",
  description:
    "Understand the three levels of intelligence reporting -- strategic, operational, and tactical -- and learn when to use each.",
}

export default function IntelligenceReportTypesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Strategic, Operational, and Tactical Reports"
        subtitle="Three Levels of Intelligence Reporting for Three Very Different Audiences"
        category="Report Writing"
        difficulty="Beginner"
        mascot="report-writing"
        readTime={18}
      >
        <MissionBriefing humorText="Sending a tactical report to a strategic consumer is like texting your boss a play-by-play of your lunch. They just wanted to know if the deal closed.">
          <p className="mb-4">
            Intelligence reporting is not one-size-fits-all. A report designed for the National Security
            Council looks nothing like one written for a patrol leader in the field, and both look nothing
            like the product supporting a regional campaign planner. Understanding the three tiers --
            strategic, operational, and tactical -- is fundamental to writing analysis that actually
            reaches the right audience in the right format at the right time.
          </p>
        </MissionBriefing>

        <DeepDive title="Strategic Intelligence: The Big Picture">
          <p className="mb-4">
            Strategic intelligence addresses <strong>long-term, broad-scope questions</strong> that inform
            national policy and high-level decision-making. It deals with trends, capabilities, intentions,
            and scenarios that play out over months, years, or even decades.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Audience</h3>
          <p className="mb-4">
            Senior policymakers, heads of state, cabinet-level officials, congressional oversight committees,
            and senior military leadership. These are people who think in terms of national interests,
            alliance dynamics, and global trends. They are not interested in what happened yesterday at a
            specific location -- they want to know where the world is heading.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Timeframe:</strong> Months to years. Some strategic estimates look out a decade or more.</li>
            <li><strong>Scope:</strong> National, regional, or global. Broad enough to inform policy decisions.</li>
            <li><strong>Depth:</strong> Deep analytical rigor, extensive sourcing, multi-discipline integration.</li>
            <li><strong>Tone:</strong> Measured, authoritative, carefully hedged with estimative language.</li>
            <li><strong>Length:</strong> Can run long (10-50+ pages) because the audience has staff to digest and brief the highlights.</li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">Real-World Examples</h3>
          <p className="mb-4">
            The U.S. Intelligence Community&apos;s <strong>National Intelligence Estimates (NIEs)</strong> are
            the gold standard of strategic intelligence. These products represent the coordinated judgment
            of multiple agencies on a major national security question. Other examples include the
            <strong> Worldwide Threat Assessment</strong>, country-specific strategic assessments, and
            long-range technology forecasts.
          </p>

          <JokeAside>
            Strategic intelligence is like weather forecasting for geopolitics. You are often wrong about
            the specifics, but you had better get the general direction right, or people will stop
            checking your forecast.
          </JokeAside>

          <ProTip>
            <p>
              When writing strategic products, resist the urge to include tactical details that will be
              outdated before the ink dries. Your consumer does not need to know the serial number of the
              missile -- they need to know whether the missile changes the regional balance of power.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="Operational Intelligence: Supporting the Campaign">
          <p className="mb-4">
            Operational intelligence sits in the middle tier, bridging the gap between broad strategic
            goals and immediate tactical needs. It supports <strong>ongoing campaigns, operations, and
            sustained efforts</strong> at the theater or regional level.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Audience</h3>
          <p className="mb-4">
            Theater commanders, campaign planners, regional task force leaders, and senior operational
            staff. These consumers are managing multi-week or multi-month efforts and need intelligence
            that helps them allocate resources, sequence operations, and anticipate the adversary&apos;s
            next moves within their area of responsibility.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Timeframe:</strong> Weeks to months. Long enough to plan, short enough to remain actionable.</li>
            <li><strong>Scope:</strong> Regional or theater-level. A specific area of operations or campaign.</li>
            <li><strong>Focus:</strong> Adversary capabilities and intentions within the operational environment, logistics, terrain, key actors.</li>
            <li><strong>Format:</strong> More structured than tactical, less formal than strategic. Often includes maps, timelines, and force laydowns.</li>
            <li><strong>Update cycle:</strong> Regular updates tied to the operational planning cycle (weekly, bi-weekly).</li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">Real-World Examples</h3>
          <p className="mb-4">
            Joint Intelligence Preparation of the Operational Environment (JIPOE) products, campaign
            assessments, operational environment assessments, and periodic theater intelligence summaries.
            In law enforcement, think multi-agency task force assessments tracking a drug trafficking
            network over several months.
          </p>

          <p className="mb-4">
            <strong>Key distinction from strategic:</strong> Operational intelligence is tied to a specific
            operation with a defined objective. Strategic intelligence informs whether to start the
            operation in the first place.
          </p>
        </DeepDive>

        <DeepDive title="Tactical Intelligence: Right Here, Right Now">
          <p className="mb-4">
            Tactical intelligence is <strong>immediate, localized, and action-oriented</strong>. It
            supports the people at the sharp end -- the patrol leader, the field agent, the first
            responder -- who need to make decisions in hours or minutes, not weeks.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Audience</h3>
          <p className="mb-4">
            Field commanders, patrol leaders, law enforcement officers on the street, special operations
            teams, and anyone executing a specific mission. These consumers have no time for nuance --
            they need clear, direct, immediately actionable information.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Timeframe:</strong> Hours to days. Often real-time or near-real-time.</li>
            <li><strong>Scope:</strong> Localized. A specific area, target, route, or event.</li>
            <li><strong>Format:</strong> Short, direct, often standardized templates. Brevity is survival.</li>
            <li><strong>Tone:</strong> Blunt and unambiguous. No room for hedging when someone is making a go/no-go decision.</li>
            <li><strong>Delivery:</strong> Pushed to the consumer, often verbally or via secure message. The consumer cannot wait for email.</li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">Real-World Examples</h3>
          <p className="mb-4">
            Intelligence summaries (INTSUMs), spot reports, target packages, route clearance assessments,
            threat warnings, and pre-mission briefs. In law enforcement, think warrant-support packages,
            suspect profiles, and real-time surveillance updates.
          </p>

          <JokeAside>
            Tactical intelligence is the only kind where &quot;TL;DR&quot; is not just acceptable -- it is
            the entire product. When the patrol is leaving in five minutes, nobody wants your footnotes.
          </JokeAside>

          <ProTip>
            <p>
              For tactical products, design your format so the most critical information (threat, location,
              time) is always in the same place. Your consumer should be able to find what they need without
              reading a single word of prose -- just by knowing where to look on the page.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="How the Three Levels Feed Each Other">
          <p className="mb-4">
            The three tiers are not independent silos -- they form an <strong>intelligence ecosystem</strong>
            where information flows in both directions. Understanding this flow is critical for any analyst.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Top-Down Flow</h3>
          <p className="mb-4">
            Strategic assessments set the context for operational planning, which in turn drives tactical
            collection and action. A strategic estimate that a country is developing a new weapons system
            leads to an operational plan to monitor key facilities, which generates tactical collection
            requirements for specific sites.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Bottom-Up Flow</h3>
          <p className="mb-4">
            Tactical reporting feeds operational assessments, which inform strategic judgments. A patrol
            report noting unusual activity at a border crossing becomes part of an operational assessment
            of smuggling routes, which contributes to a strategic estimate of regional instability.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">When to Use Which</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Use strategic</strong> when the question is &quot;What are the long-term trends and
              what policies should we adopt?&quot;
            </li>
            <li>
              <strong>Use operational</strong> when the question is &quot;How do we plan and resource this
              campaign over the coming weeks?&quot;
            </li>
            <li>
              <strong>Use tactical</strong> when the question is &quot;What do we need to know to execute
              this mission safely and effectively right now?&quot;
            </li>
          </ul>

          <p className="mb-4">
            The biggest mistake analysts make is writing at the wrong level for their audience. A tactical
            consumer does not need your strategic context. A strategic consumer does not need your tactical
            details. Know who you are writing for and pitch your product accordingly.
          </p>
        </DeepDive>

        <Debrief
          takeaways={[
            "Strategic intelligence serves policymakers with long-term, broad-scope assessments over months to years",
            "Operational intelligence supports campaign planners with theater-level analysis over weeks to months",
            "Tactical intelligence gives field operators immediate, localized, actionable information in hours to days",
            "The three tiers form an ecosystem where information flows both top-down and bottom-up",
            "The most common reporting mistake is writing at the wrong level for your audience",
            "Format, length, tone, and delivery method should all match the tier you are writing for",
          ]}
          humorSummary="Strategic analysts worry about the forest. Operational analysts worry about the specific grove of trees. Tactical analysts worry about whether there's someone behind that tree right there. All three are correct -- they just have very different lunch conversations."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Strategic Reports",
          description: "Deep dive into writing for senior policymakers and national leadership",
          path: "/topics/strategic-reports",
        }}
        moreLearning={{
          title: "Report Fundamentals",
          description: "Core principles of effective intelligence reporting across all levels",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Operational Reports",
          description: "Master the art of supporting campaigns and sustained operations",
          path: "/topics/operational-reports",
        }}
      />
    </LessonContainer>
  )
}
