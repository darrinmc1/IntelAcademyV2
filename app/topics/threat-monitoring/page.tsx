import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  ProTip,
  JokeAside,
  FieldExercise,
  Debrief,
  NextLessonLink,
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Threat Monitoring | The Intel Analyst Academy",
  description:
    "Master the discipline of continuous threat monitoring — building dashboards, setting tripwires, and avoiding alert fatigue in intelligence operations.",
}

export default function ThreatMonitoringPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Threat Monitoring"
        subtitle="Watching the Horizon So Nobody Has to Say 'I Didn't See That Coming'"
        humorSubtitle="Because surprise is overrated in this line of work."
        category="Threat Assessments"
        difficulty="Intermediate"
        mascot="threat-assessment"
        readTime={12}
      >
        <MissionBriefing humorText="The universe has a sense of humour. The moment you stop monitoring is the moment something happens. Plan accordingly.">
          <p className="mb-4">
            Threat monitoring is the continuous, systematic observation of the operational
            environment for indicators of emerging threats. It is the intelligence equivalent of
            standing watch — except the horizon never ends, the threats keep evolving, and nobody
            sends a relief shift just because you are tired.
          </p>
          <p className="mb-4">
            This lesson covers the philosophy of continuous versus episodic monitoring, how to design
            threat dashboards that actually get used, the art of setting effective tripwires, and
            how to keep your alert system from crying wolf so often that everybody stops listening.
            By the end, you will understand why monitoring is not just a tool — it is a mindset.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Continuous vs. One-Shot ---- */}
        <DeepDive title="Continuous vs. One-Shot: Why Both Matter">
          <p className="mb-4">
            A common misconception among new analysts is that threat monitoring means watching
            everything all the time. It does not — and it cannot. Resources are finite, attention
            is limited, and the volume of raw information available is effectively infinite. The
            art lies in knowing when to watch continuously and when a single-point assessment will
            suffice.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Continuous Monitoring</h3>
          <p className="mb-4">
            Continuous monitoring is appropriate for threats that are dynamic, imminent, or
            high-impact. Think of an active insurgent group with a pattern of attacks, a volatile
            political situation that could escalate at any moment, or a cyber threat actor actively
            probing your networks. In these cases, you need persistent coverage — daily or even
            hourly updates, live feeds, real-time indicators, and a watch floor that never sleeps.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">One-Shot (Episodic) Assessments</h3>
          <p className="mb-4">
            One-shot assessments are appropriate for threats that are static, distant, or low-impact.
            For example, a dormant terrorist cell with no recent activity, a geopolitical risk that
            is months away from materialising, or a known criminal network that operates on a
            seasonal schedule. These do not need real-time monitoring. A monthly or quarterly review
            is sufficient, with a trigger to escalate if new information appears.
          </p>

          <JokeAside>
            Analysts who treat everything as a continuous monitoring problem burn out faster than a
            sparkler in a rainstorm. Analysts who treat everything as a one-shot problem find out
            they were wrong at the worst possible moment. Balance is the key, and it is harder than
            either extreme.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">The Hybrid Approach</h3>
          <p className="mb-4">
            Most mature monitoring programmes use a hybrid model. A baseline of continuous
            monitoring covers the highest-priority threats. Lower-priority threats are assessed
            periodically but linked to specific triggers that promote them to continuous status. When
            a dormant threat actor suddenly becomes active — a new propaganda video, a known associate
            travelling to a conflict zone, an influx of funding — that trigger escalates them into
            continuous watch. The system pays for constant coverage only where it matters.
          </p>

          <ProTip>
            <p>
              Define your escalation triggers before you need them. It is easy to promote a threat
              to continuous monitoring when you have a clear, pre-agreed criterion. It is harder to
              have that conversation under time pressure while something is already on fire.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Building a Threat Dashboard ---- */}
        <DeepDive title="Building a Threat Dashboard That Doesn't Collect Dust">
          <p className="mb-4">
            A threat dashboard is only useful if people actually look at it. The history of
            intelligence is littered with beautifully designed dashboards that were opened once,
            admired, and then forgotten. A good dashboard is not a work of art — it is a working
            tool. It answers specific questions, surfaces actionable information, and respects the
            limited attention of its audience.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Design Principles</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>One screen, one glance:</strong> The most important information must be visible without scrolling. If your dashboard requires a PhD in data visualisation to interpret, it has failed.</li>
            <li><strong>Traffic-light logic:</strong> Green, amber, red. Every indicator should map to a simple status. If you need to explain what the colour means with a footnote, your system is too complicated.</li>
            <li><strong>Actionable, not ornamental:</strong> Every element on the dashboard should lead to a decision or an action. If an indicator is &quot;interesting but we cannot act on it,&quot; remove it.</li>
            <li><strong>Historical context:</strong> A raw number means nothing without a baseline. Is 12 incidents this month high or low? Compared to what? Show the trend, not just the snapshot.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Core Indicators</h3>
          <p className="mb-4">
            Every threat dashboard should track a core set of indicators:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Frequency indicators:</strong> How often are threat events occurring? Daily, weekly, monthly counts with moving averages.</li>
            <li><strong>Magnitude indicators:</strong> How severe are the events? Casualties, financial damage, geographic spread, or other severity metrics.</li>
            <li><strong>Velocity indicators:</strong> How quickly is the situation changing? Rate of acceleration in threat activity is often the most important leading indicator.</li>
            <li><strong>Capability indicators:</strong> Are threat actors gaining new capabilities? New weapons, new tactics, new funding sources.</li>
            <li><strong>Threshold indicators:</strong> Has any predefined red line been crossed? These are your tripwires.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Setting Thresholds</h3>
          <p className="mb-4">
            A threshold without a rationale is just a guess. Every threshold in your dashboard
            should answer three questions: (1) What is the baseline for this indicator? (2) What
            deviation from baseline is significant enough to flag? (3) Who needs to know when the
            threshold is crossed? Thresholds that are set too low generate noise. Thresholds set too
            high generate false reassurance. Get them wrong either way and your dashboard becomes
            wallpaper.
          </p>

          <ProTip>
            <p>
              Review your dashboard thresholds quarterly. The operational environment changes, and
              thresholds that made sense six months ago may now be either screaming into silence or
              complacently missing real threats. If you have not adjusted a threshold in a year,
              you are probably not paying attention.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: The Tripwire Concept ---- */}
        <DeepDive title="The Tripwire Concept: Specific Events That Trigger Escalation">
          <p className="mb-4">
            A tripwire is a predefined event or condition that, when observed, triggers an automatic
            escalation in response. Tripwires are the backbone of any effective monitoring system
            because they remove the burden of judgment from the moment of detection. By the time the
            tripwire fires, the decision to escalate has already been made — it was made when you
            defined the tripwire.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Characteristics of an Effective Tripwire</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Specific and observable:</strong> &quot;Increased hostile rhetoric&quot; is not a tripwire. It is vague and subjective. &quot;Three or more official statements from Group X calling for attacks on Western targets within a 72-hour period&quot; is a tripwire.</li>
            <li><strong>Pre-agreed:</strong> Everyone who needs to act on the tripwire must agree to it in advance. The time to argue about whether this event warrants escalation is not when it is happening.</li>
            <li><strong>Measurable:</strong> The tripwire must be binary. Either the condition is met or it is not. No grey areas, no &quot;well, it depends.&quot;</li>
            <li><strong>Actionable:</strong> When the tripwire fires, a specific action or set of actions should be triggered. If you do not know what to do when the tripwire goes off, why does it exist?</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Common Tripwire Categories</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Personnel movements:</strong> A known threat actor crosses a border, enters a restricted zone, or establishes contact with another high-value target.</li>
            <li><strong>Resource acquisitions:</strong> A group or individual acquires weapons, explosives, or specialised equipment outside their normal pattern.</li>
            <li><strong>Communications spikes:</strong> A sudden increase in encrypted communications, signal blackout periods, or unusual communication patterns among known associates.</li>
            <li><strong>Financial anomalies:</strong> Large, unexplained transfers, new funding sources, or unusual patterns of cash movement.</li>
            <li><strong>Public signalling:</strong> Threats, warnings, or claims of responsibility issued through media channels, especially if they include specific details about timing or targets.</li>
          </ul>

          <JokeAside>
            A tripwire that triggers fifteen times a day is not a tripwire. It is a doorbell. And
            nobody answers a doorbell that rings every three minutes, not even for pizza deliveries.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">The Tripwire Document</h3>
          <p className="mb-4">
            Every tripwire should be formally documented: the condition, the source or method of
            detection, the escalation path (who is notified and by what means), the response
            protocol (what happens next), and the review date (when the tripwire is reassessed for
            relevance). Without documentation, tripwires exist only in people&apos;s heads, and people
            forget, leave, or disagree about what was agreed.
          </p>

          <FieldExercise title="Field Exercise: Design a Tripwire">
            <p className="mb-3">
              Pick a real or realistic threat scenario relevant to your area of interest —
              for example, a known foreign influence operation targeting your country&apos;s upcoming
              election, or a local extremist group with a history of low-level violence.
            </p>
            <p className="mb-3">
              Define <strong>three tripwires</strong> that would trigger escalation from periodic
              monitoring to active surveillance. For each tripwire, write down: (1) the exact
              observable condition, (2) how it would be detected, (3) who would be notified, and
              (4) what the first response action would be.
            </p>
            <p className="mb-3">
              Then answer this: which of your tripwires is most likely to produce a false positive?
              What would you change to reduce that risk?
            </p>
            <p className="text-slate-400 text-xs">
              Time: 20 minutes | Tools: Notebook or document
            </p>
          </FieldExercise>
        </DeepDive>

        {/* ---- Section 4: Alert Fatigue ---- */}
        <DeepDive title="Alert Fatigue: When Your System Screams Wolf Too Often">
          <p className="mb-4">
            Alert fatigue is the gradual desensitisation of analysts and decision-makers to warning
            signals caused by an excessive volume of alerts. It is one of the most dangerous
            conditions a monitoring system can develop, because it does not announce itself. It
            creeps in quietly, one ignored alert at a time, until the day a real threat triggers an
            alert and nobody responds — because they stopped believing the system would ever tell
            them something they did not already know.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">How Alert Fatigue Happens</h3>
          <p className="mb-4">
            Alert fatigue follows a predictable pattern. Phase one: a monitoring system is deployed
            with inclusive thresholds — better safe than sorry. Phase two: analysts receive dozens of
            alerts per day, most of which turn out to be benign. Phase three: analysts develop
            shortcuts — they only read alerts from certain sources, or certain times of day, or
            certain severity levels. Phase four: a critical alert arrives in the afternoon, gets
            buried in the noise, and nobody acts on it. Phase five: the post-incident review blames
            the analysts, but the system was the real culprit.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Tuning Your Alerts</h3>
          <p className="mb-4">
            Tuning is the process of adjusting alert thresholds to achieve an acceptable balance
            between sensitivity (catching real threats) and specificity (not flooding you with false
            positives). Effective tuning requires:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Baseline data:</strong> You cannot tune what you have not measured. Collect at least 30 days of alert data before making adjustments.</li>
            <li><strong>False positive analysis:</strong> Every false positive is a clue that your threshold or logic is wrong. Investigate each one and adjust accordingly.</li>
            <li><strong>Severity stratification:</strong> Not all alerts are equal. Use tiered severity levels so that low-severity alerts do not compete for attention with high-severity ones.</li>
            <li><strong>Deduplication:</strong> A single event should not trigger multiple alerts. Correlate related indicators and present them as a single alert with supporting context.</li>
            <li><strong>Feedback loop:</strong> Analysts must have a mechanism to flag alerts as useful or useless. A system that does not learn from its mistakes will repeat them.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Prioritisation Frameworks</h3>
          <p className="mb-4">
            A good prioritisation framework helps analysts decide what to look at first. A common
            approach combines two dimensions: <strong>likelihood</strong> (how probable is this
            threat to materialise?) and <strong>impact</strong> (how bad would it be if it did?).
            High-likelihood, high-impact threats get immediate attention. Low-likelihood, low-impact
            threats get logged for review. The dangerous quadrant is low-likelihood, high-impact —
            these are the threats that surprise you, and they deserve periodic review even if they
            do not trigger daily alerts.
          </p>

          <JokeAside>
            There is a special place in intelligence hell reserved for systems that send a
            &quot;CRITICAL — URGENT&quot; alert for a minor data fluctuation at 3 AM, then go silent when
            an actual crisis unfolds at 9 AM. Tune your system. Your analysts have enough problems.
          </JokeAside>

          <ProTip>
            <p>
              Track your &quot;time to indifference.&quot; Measure how long it takes an analyst to stop
              reacting to a new alert type after it is introduced. If the average response time
              drops below 30 seconds within two weeks, you have a noise problem, not an attention
              problem. Fix the signal before you blame the receiver.
            </p>
          </ProTip>
        </DeepDive>

        <Debrief
          takeaways={[
            "Threat monitoring requires a hybrid approach: continuous coverage for dynamic threats, periodic assessments for stable ones, and clear triggers to escalate between modes.",
            "Build dashboards that answer specific questions at a glance — traffic-light logic, actionable indicators, and historical baselines are non-negotiable.",
            "Tripwires must be specific, pre-agreed, measurable, and actionable — vague conditions produce unreliable escalation.",
            "Alert fatigue is a systemic failure, not an individual one: tune thresholds, stratify severity, and build feedback loops.",
            "Use likelihood-impact prioritisation to focus attention where it matters most — and never ignore the low-likelihood, high-impact quadrant.",
            "Every threshold, tripwire, and alert should be reviewed quarterly. Static systems fail in dynamic environments.",
          ]}
          humorSummary="Watch the horizon, tune your sensors, and for crying out loud, stop alerting your analysts about things that do not matter."
        />

        <NextLessonLink
          href="/topics/situational-awareness"
          title="Situational Awareness"
          description="Build the cognitive framework for maintaining continuous operational awareness across multiple threat domains."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Threat Assessment Fundamentals",
          description: "Build on your monitoring skills with foundational threat assessment methodologies.",
          path: "/learning-paths/threat-assessment",
        }}
        moreLearning={{
          title: "Indicators and Warnings",
          description: "Deep dive into the discipline of structured indicators and warnings analysis.",
          path: "/topics/indicators-warnings",
        }}
      />
    </LessonContainer>
  )
}
