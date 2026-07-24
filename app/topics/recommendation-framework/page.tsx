import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recommendation Framework - The Intel Analyst Academy",
  description: "Learn how to develop and present actionable recommendations in your intelligence reports using the SMART framework.",
}

const topicContent = `import type { Metadata } from "next"
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

Intelligence analysts walk a razor-thin line between informing decisions and making them.
This lesson covers when recommendations are appropriate, how to structure them using the
SMART framework, and how to present options without overstepping the analyst-policymaker
boundary. You will learn to link your analysis directly to action, stress-test your
recommendations for feasibility, and navigate the delicate politics of advising people
who outrank you by several pay grades.

Before you start drafting recommendations, ask yourself a fundamental question:
** should you even be making recommendations at all?** The answer depends
on your role, your organization's culture, and the specific product you are writing.

### When Recommendations Are Appropriate

- **You were explicitly asked.** A policymaker or commander has requested
courses of action. This is the clearest green light you will ever get.

- **Your product type calls for it.** Threat assessments, vulnerability
analyses, and risk reports often include mitigation recommendations by convention.

- **Operational context demands it.** In tactical and law enforcement
intelligence, recommendations for immediate action (surveillance, interdiction, etc.)
are expected and sometimes legally required.

### When to Stay in Your Lane

- **Strategic national assessments.** Products like the National Intelligence
Estimate traditionally present analysis without policy prescriptions. The IC informs;
the NSC decides.

- **When you lack operational context.** If you do not understand the
decision-maker's constraints, resources, or political environment, your recommendation
may be worse than none at all.

- **When it would compromise objectivity.** If recommending action X would
make your future analysis on topic X appear biased, think twice.

The fastest way to end your intelligence career: include "the President should
probably just call them and apologize" in a finished intelligence product.

When in doubt, frame your analysis in terms of **implications** rather
than recommendations. "This trend suggests that current border security measures may
be insufficient" communicates urgency without prescribing a specific policy response.

When recommendations are appropriate, vague advice is worse than no advice. "The
government should do something about cyber threats" is not a recommendation -- it is a
bumper sticker. The SMART framework ensures your recommendations are actually useful.

### Breaking Down SMART

- **Specific:** What exactly should be done? Name the action, the actor,
and the target. "The Cyber Division should deploy endpoint monitoring on all
contractor workstations" beats "improve cybersecurity."

- **Measurable:** How will success be determined? Include metrics or
observable indicators. "Reduce average incident response time from 72 hours to 24
hours" gives the decision-maker a benchmark.

- **Achievable:** Is this within the decision-maker's authority and
resources? Recommending a $500 million program to a branch chief with a $2 million
discretionary budget is not helpful.

- **Relevant:** Does the recommendation flow directly from your analysis?
Every recommendation must trace back to a specific finding. If you cannot draw a
straight line from evidence to recommendation, delete it.

- **Time-bound:** When should this happen? "Within 90 days" is actionable.
"Soon" is not.

### Before and After
**Before (vague):**

"The agency should enhance its collection posture regarding the target network."

**After (SMART):**

"The SIGINT Division should task two additional collection platforms against Network
Alpha's C2 infrastructure within 30 days, with the goal of identifying at least three
new nodes by the end of Q2. This directly addresses the gap identified in Finding 3,
where current collection covers only 40% of known C2 channels."

"We recommend continued monitoring" is the intelligence equivalent of "thoughts and
prayers." It technically counts as a recommendation, but nobody's life was ever changed
by it.

The most common failure in intelligence recommendations is the **analytic
gap** -- the disconnect between what the evidence shows and what the analyst
recommends. Your reader should never have to wonder, "Where did that recommendation
come from?"

### The Evidence Chain

Think of your recommendation as the final link in a chain:
** Raw Data → Key Finding → Analytic Judgment → Implication → Recommendation.**{" "}
If any link is missing, the chain breaks and your recommendation looks like opinion
dressed up in fancy formatting.

### Options vs. Single Recommendations

Senior decision-makers often prefer options over a single recommendation. Presenting
two to three courses of action with trade-offs respects their authority and gives them
genuine choices. Structure each option with:

- **Description:** What the option entails.
- **Advantages:** Why this option addresses the problem.
- **Risks:** What could go wrong or what trade-offs are involved.
- **Resource requirements:** Cost, personnel, time.

You may indicate which option the analysis best supports, but be transparent about
doing so. Label it clearly: "Based on the analysis presented, Option B most directly
addresses the identified threat."

When presenting multiple options, always include a **"status quo"
option** that describes what happens if no action is taken. This gives
decision-makers a baseline to compare against and often makes the case for action
more compelling than any recommendation could on its own.

Before you finalize any recommendation, run it through the **feasibility
test** -- a mental checklist that separates actionable advice from fantasy.

### The Five-Question Feasibility Test

- **Authority:** Does the decision-maker have the power to implement this?

- **Resources:** Are the necessary budget, personnel, and technology
available or obtainable?

- **Timeline:** Can this be done within the relevant decision window?

- **Political viability:** Will this survive scrutiny from stakeholders,
oversight bodies, and the media?

- **Second-order effects:** Have you considered unintended consequences?

### Navigating the Relationship

The analyst-policymaker relationship is one of the most important and most fraught
dynamics in intelligence. A few principles will keep you out of trouble:

- **Inform, do not advocate.** Your job is to illuminate choices, not to
lobby for a preferred outcome. The moment you become an advocate, you lose your
credibility as an objective analyst.

- **Know your audience.** A military commander expects direct, actionable
recommendations. A cabinet secretary may prefer implications and options. Tailor your
approach to the consumer.

- **Accept that they may ignore you.** Policymakers have information,
pressures, and priorities that you do not see. A rejected recommendation is not a
personal failure -- it is the system working as designed.

- **Never say "I told you so."** Even when you were right. Especially
when you were right.

The ideal analyst-policymaker relationship is like a good GPS: you provide the best
route, they decide whether to take it, and when they ignore you and drive into a lake,
you calmly say "recalculating."

)
`

export default function RecommendationframeworkPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Recommendation Framework"
        subtitle="Learn how to develop and present actionable recommendations in your intelligence reports using the SMART framework."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="recommendation-framework" />
      </MicroLesson>
    </LessonContainer>
  )
}
