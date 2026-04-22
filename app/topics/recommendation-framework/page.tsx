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
  title: "Recommendation Framework | The Intel Analyst Academy",
  description:
    "Learn how to develop and present actionable recommendations in your intelligence reports using the SMART framework.",
}

export default function RecommendationFrameworkPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Recommendation Framework"
        subtitle="From Analysis to Action Without Accidentally Becoming the Policymaker"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={16}
      >
        <MissionBriefing humorText="You've done the hard work of analysis. Now comes the terrifying part: telling powerful people what they should actually do about it.">
          <p className="mb-4">
            Intelligence analysts walk a razor-thin line between informing decisions and making them.
            This lesson covers when recommendations are appropriate, how to structure them using the
            SMART framework, and how to present options without overstepping the analyst-policymaker
            boundary. You will learn to link your analysis directly to action, stress-test your
            recommendations for feasibility, and navigate the delicate politics of advising people
            who outrank you by several pay grades.
          </p>
        </MissionBriefing>

        <DeepDive title="To Recommend or Not to Recommend">
          <p className="mb-4">
            Before you start drafting recommendations, ask yourself a fundamental question:
            <strong> should you even be making recommendations at all?</strong> The answer depends
            on your role, your organization's culture, and the specific product you are writing.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">When Recommendations Are Appropriate</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>You were explicitly asked.</strong> A policymaker or commander has requested
              courses of action. This is the clearest green light you will ever get.
            </li>
            <li>
              <strong>Your product type calls for it.</strong> Threat assessments, vulnerability
              analyses, and risk reports often include mitigation recommendations by convention.
            </li>
            <li>
              <strong>Operational context demands it.</strong> In tactical and law enforcement
              intelligence, recommendations for immediate action (surveillance, interdiction, etc.)
              are expected and sometimes legally required.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">When to Stay in Your Lane</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Strategic national assessments.</strong> Products like the National Intelligence
              Estimate traditionally present analysis without policy prescriptions. The IC informs;
              the NSC decides.
            </li>
            <li>
              <strong>When you lack operational context.</strong> If you do not understand the
              decision-maker's constraints, resources, or political environment, your recommendation
              may be worse than none at all.
            </li>
            <li>
              <strong>When it would compromise objectivity.</strong> If recommending action X would
              make your future analysis on topic X appear biased, think twice.
            </li>
          </ul>

          <JokeAside>
            The fastest way to end your intelligence career: include "the President should
            probably just call them and apologize" in a finished intelligence product.
          </JokeAside>

          <ProTip>
            <p>
              When in doubt, frame your analysis in terms of <strong>implications</strong> rather
              than recommendations. "This trend suggests that current border security measures may
              be insufficient" communicates urgency without prescribing a specific policy response.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="The SMART Recommendation Framework">
          <p className="mb-4">
            When recommendations are appropriate, vague advice is worse than no advice. "The
            government should do something about cyber threats" is not a recommendation -- it is a
            bumper sticker. The SMART framework ensures your recommendations are actually useful.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Breaking Down SMART</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Specific:</strong> What exactly should be done? Name the action, the actor,
              and the target. "The Cyber Division should deploy endpoint monitoring on all
              contractor workstations" beats "improve cybersecurity."
            </li>
            <li>
              <strong>Measurable:</strong> How will success be determined? Include metrics or
              observable indicators. "Reduce average incident response time from 72 hours to 24
              hours" gives the decision-maker a benchmark.
            </li>
            <li>
              <strong>Achievable:</strong> Is this within the decision-maker's authority and
              resources? Recommending a $500 million program to a branch chief with a $2 million
              discretionary budget is not helpful.
            </li>
            <li>
              <strong>Relevant:</strong> Does the recommendation flow directly from your analysis?
              Every recommendation must trace back to a specific finding. If you cannot draw a
              straight line from evidence to recommendation, delete it.
            </li>
            <li>
              <strong>Time-bound:</strong> When should this happen? "Within 90 days" is actionable.
              "Soon" is not.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Before and After</h3>
          <p className="mb-2"><strong>Before (vague):</strong></p>
          <p className="mb-4 pl-4 border-l-4 border-red-500/50 italic">
            "The agency should enhance its collection posture regarding the target network."
          </p>
          <p className="mb-2"><strong>After (SMART):</strong></p>
          <p className="mb-4 pl-4 border-l-4 border-green-500/50 italic">
            "The SIGINT Division should task two additional collection platforms against Network
            Alpha's C2 infrastructure within 30 days, with the goal of identifying at least three
            new nodes by the end of Q2. This directly addresses the gap identified in Finding 3,
            where current collection covers only 40% of known C2 channels."
          </p>

          <JokeAside>
            "We recommend continued monitoring" is the intelligence equivalent of "thoughts and
            prayers." It technically counts as a recommendation, but nobody's life was ever changed
            by it.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Linking Analysis to Action">
          <p className="mb-4">
            The most common failure in intelligence recommendations is the <strong>analytic
            gap</strong> -- the disconnect between what the evidence shows and what the analyst
            recommends. Your reader should never have to wonder, "Where did that recommendation
            come from?"
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Evidence Chain</h3>
          <p className="mb-4">
            Think of your recommendation as the final link in a chain:
            <strong> Raw Data → Key Finding → Analytic Judgment → Implication → Recommendation.</strong>{" "}
            If any link is missing, the chain breaks and your recommendation looks like opinion
            dressed up in fancy formatting.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Options vs. Single Recommendations</h3>
          <p className="mb-4">
            Senior decision-makers often prefer options over a single recommendation. Presenting
            two to three courses of action with trade-offs respects their authority and gives them
            genuine choices. Structure each option with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Description:</strong> What the option entails.</li>
            <li><strong>Advantages:</strong> Why this option addresses the problem.</li>
            <li><strong>Risks:</strong> What could go wrong or what trade-offs are involved.</li>
            <li><strong>Resource requirements:</strong> Cost, personnel, time.</li>
          </ul>
          <p className="mb-4">
            You may indicate which option the analysis best supports, but be transparent about
            doing so. Label it clearly: "Based on the analysis presented, Option B most directly
            addresses the identified threat."
          </p>

          <ProTip>
            <p>
              When presenting multiple options, always include a <strong>"status quo"
              option</strong> that describes what happens if no action is taken. This gives
              decision-makers a baseline to compare against and often makes the case for action
              more compelling than any recommendation could on its own.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="The Feasibility Test and the Analyst-Policymaker Relationship">
          <p className="mb-4">
            Before you finalize any recommendation, run it through the <strong>feasibility
            test</strong> -- a mental checklist that separates actionable advice from fantasy.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Five-Question Feasibility Test</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <strong>Authority:</strong> Does the decision-maker have the power to implement this?
            </li>
            <li>
              <strong>Resources:</strong> Are the necessary budget, personnel, and technology
              available or obtainable?
            </li>
            <li>
              <strong>Timeline:</strong> Can this be done within the relevant decision window?
            </li>
            <li>
              <strong>Political viability:</strong> Will this survive scrutiny from stakeholders,
              oversight bodies, and the media?
            </li>
            <li>
              <strong>Second-order effects:</strong> Have you considered unintended consequences?
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-3 mt-6">Navigating the Relationship</h3>
          <p className="mb-4">
            The analyst-policymaker relationship is one of the most important and most fraught
            dynamics in intelligence. A few principles will keep you out of trouble:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Inform, do not advocate.</strong> Your job is to illuminate choices, not to
              lobby for a preferred outcome. The moment you become an advocate, you lose your
              credibility as an objective analyst.
            </li>
            <li>
              <strong>Know your audience.</strong> A military commander expects direct, actionable
              recommendations. A cabinet secretary may prefer implications and options. Tailor your
              approach to the consumer.
            </li>
            <li>
              <strong>Accept that they may ignore you.</strong> Policymakers have information,
              pressures, and priorities that you do not see. A rejected recommendation is not a
              personal failure -- it is the system working as designed.
            </li>
            <li>
              <strong>Never say "I told you so."</strong> Even when you were right. Especially
              when you were right.
            </li>
          </ul>

          <JokeAside>
            The ideal analyst-policymaker relationship is like a good GPS: you provide the best
            route, they decide whether to take it, and when they ignore you and drive into a lake,
            you calmly say "recalculating."
          </JokeAside>
        </DeepDive>

        <Debrief
          takeaways={[
            "Determine whether recommendations are appropriate before writing them -- not every product calls for them.",
            "Use the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) to ensure recommendations are actionable.",
            "Link every recommendation directly to your analytic findings with a clear evidence chain.",
            "Present options with trade-offs rather than a single course of action when writing for senior decision-makers.",
            "Run every recommendation through the five-question feasibility test before finalizing.",
            "Respect the analyst-policymaker boundary: inform and illuminate, but do not advocate or lobby.",
          ]}
          humorSummary="Remember: your job is to be the analyst, not the president. Provide the best possible advice, present it clearly, and accept that the final call belongs to someone else. If they ignore your recommendation and everything goes sideways, at least your assessment is on the record -- and that's what performance reviews are for."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Intelligence and Decision-Making",
          description:
            "Explore the relationship between intelligence analysis and the decision-making process.",
          path: "/topics/intelligence-decision-making",
        }}
        moreLearning={{
          title: "Intelligence Report Fundamentals",
          description:
            "Revisit the core principles that underpin every effective intelligence report.",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Strategic Reports",
          description:
            "Learn to write for the highest levels of government where recommendations carry the most weight.",
          path: "/topics/strategic-reports",
        }}
      />
    </LessonContainer>
  )
}
