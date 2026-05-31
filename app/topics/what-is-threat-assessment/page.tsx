import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  FieldExercise,
  ProTip,
  JokeAside,
  Debrief,
  NextLessonLink,
} from "@/components/micro-lesson"

export const metadata: Metadata = {
  title: "What Is Threat Assessment | The Intel Analyst Academy",
  description:
    "Learn the fundamentals of threat assessment including the differences between threats, risks, and vulnerabilities, the four-step assessment process, threat actor profiles, and the capability-intent model.",
}

export default function WhatIsThreatAssessmentPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What Is Threat Assessment?"
        subtitle="Everything That Can Go Wrong, and What to Do About It"
        humorSubtitle="Not every threat becomes an attack. Your job is to figure out which ones might."
        category="Threat Assessments"
        difficulty="Beginner"
        mascot="threat-assessment"
        mascotMessage="Right then. Before you go diagnosing every shadow as an assassin, let me clarify what we actually mean by 'threat.' Because not everything that worries you is a threat, and not every threat wants to hurt you. Some just want your lunch money."
        readTime={10}
      >
        <MissionBriefing humorText="Fun fact: in the time it took you to read this sentence, three analysts somewhere argued about the difference between 'threat' and 'risk.' We aim to stop that.">
          <p className="mb-4">
            Threat assessment is the systematic process of identifying, characterizing, and evaluating
            threats to determine what could cause harm and how likely that harm is to occur. It is the
            foundation upon which all security decisions are built. Without a proper threat assessment,
            you are guessing -- and guessing is how threats become attacks.
          </p>
          <p>
            In this lesson, you will untangle the trio of terms everyone confuses (threat, risk,
            vulnerability), walk through the four-step assessment process, meet the cast of characters
            who might be targeting you, and understand why capability without intent is just expensive
            showmanship.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Threat vs. Risk vs. Vulnerability ---- */}
        <DeepDive title="Threat vs. Risk vs. Vulnerability: The Trio Everyone Confuses">
          <p className="mb-4">
            These three terms get thrown around like jargon confetti at an intelligence conference.
            But they mean very different things, and confusing them leads to bad analysis. Let us
            settle this once and for all.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Threat</h3>
          <p className="mb-4">
            A <strong>threat</strong> is any actor, event, or condition with the potential to cause
            harm. It is the thing that <em>could</em> do damage. A threat does not have to be
            deliberate -- a hurricane is a threat. A disgruntled employee with a badge is a threat.
            A poorly configured firewall is a threat (yes, inanimate objects can be threats too, if
            they can cause harm).
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Vulnerability</h3>
          <p className="mb-4">
            A <strong>vulnerability</strong> is a weakness that a threat can exploit. It is the open
            window the burglar climbs through, the unpatched server the hacker pokes, the employee
            who clicks every link that says &quot;You have won a prize.&quot; Without vulnerabilities,
            threats are just standing outside, rattling locked doors.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Risk</h3>
          <p className="mb-4">
            <strong>Risk</strong> is the likelihood that a threat will exploit a vulnerability and
            the impact if it does. It is the intersection of the other two. Risk is what you actually
            manage. Threats are what you worry about. Vulnerabilities are what you fix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Threat</p>
              <p className="text-slate-300 text-sm italic">
                A nation-state&apos;s advanced persistent threat group.
              </p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Vulnerability</p>
              <p className="text-slate-300 text-sm italic">
                An unpatched VPN server with access to the internal network.
              </p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Risk</p>
              <p className="text-slate-300 text-sm italic">
                Moderate-to-high: the group has the capability, the door is open, and the data behind
                it is valuable.
              </p>
            </div>
          </div>

          <JokeAside>
            Analysts who use &quot;threat&quot; and &quot;risk&quot; interchangeably are the same people who call
            every four-legged animal a &quot;dog.&quot; Yes, a wolf is technically a dog. No, you should not
            pet it.
          </JokeAside>

          <ProTip>
            <p>
              A simple mnemonic: a threat is the wolf, a vulnerability is the unlocked gate, and
              risk is whether the wolf notices the gate and decides dinner is on the other side.
              If any element is missing, the equation changes.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Four-Step Process ---- */}
        <DeepDive title="The Threat Assessment Process: A Four-Step Dance">
          <p className="mb-4">
            Threat assessment is not staring at a whiteboard and hoping inspiration strikes. It is a
            structured, repeatable process. Think of it as a dance with four moves. You can do them
            in order, or circles if you have to, but you cannot skip any.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Step 1: Identify</h3>
          <p className="mb-4">
            What threats exist? This is the brainstorming phase, but with discipline. You identify
            threat actors, natural hazards, system failures, and anything else that could cause harm.
            Use intelligence sources, historical data, and subject matter expertise. At this stage,
            no threat is too unlikely to list. You can filter later.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Step 2: Characterize</h3>
          <p className="mb-4">
            Once you have identified a threat, you need to know what it is capable of. What are its
            tactics, techniques, and procedures (TTPs)? What tools does it have? What targets has it
            hit before? What is its operational tempo? Characterisation turns a name into a profile.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Step 3: Evaluate</h3>
          <p className="mb-4">
            Now you assess likelihood and impact. How probable is it that this threat will manifest?
            If it does, how bad is the outcome? This is where you assign risk levels -- low, medium,
            high, critical -- based on evidence, not gut feeling. Gut feelings are what you have for
            lunch, not for intelligence analysis.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Step 4: Recommend</h3>
          <p className="mb-4">
            Analysis without recommendations is a monologue. Based on your evaluation, what should
            be done? Accept the risk? Mitigate it? Transfer it? Avoid it entirely? Your
            recommendations drive action. Make them clear, prioritised, and actionable.
          </p>

          <JokeAside>
            Step 4 is where the analysts who love data meet the decision-makers who love certainty.
            Neither group gets what they want. This is normal.
          </JokeAside>

          <ProTip>
            <p>
              Do not skip Step 1 just because you think you already know the threats. Confirmation
              bias loves a shortcut. A thorough identification phase often reveals threats that
              everyone assumed were someone else&apos;s problem.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: Threat Actor Profiles ---- */}
        <DeepDive title="Who's Knocking at the Door? Threat Actor Profiles">
          <p className="mb-4">
            Threats do not float around in the abstract. They come from specific actors with specific
            motivations and specific methods. Understanding who is out there is half the assessment.
            Here are the categories you will encounter most often.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Nation-State Actors</h3>
          <p className="mb-4">
            These are state-sponsored groups operating under government direction. Their motivations
            are geopolitical: espionage, sabotage, influence operations, and preparation for conflict.
            They have significant resources, patience measured in years, and a tolerance for risk that
            keeps security contractors employed. Think APT groups such as Cozy Bear, Lazarus, or
            APT10. Their TTPs often include advanced persistent threats, supply chain compromises, and
            zero-day exploitation.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Criminal Actors</h3>
          <p className="mb-4">
            Cybercriminals, organised crime groups, and individual operators motivated by financial
            gain. They are the pragmatists of the threat world -- they go where the money is.
            Ransomware, business email compromise, data theft, and fraud are their specialties.
            Unlike nation-states, they tend to follow the path of least resistance. Make yourself
            harder to exploit than the next target, and they move on.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Insider Threats</h3>
          <p className="mb-4">
            The most personal category. Insiders are current or former employees, contractors, or
            partners with legitimate access who misuse that access. Their motivations include
            financial pressure, disgruntlement, ideological alignment with an external group, or
            simple carelessness. Insider threats are difficult to detect because their behaviour
            starts out looking normal. They already have the keys.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Hacktivists and Ideological Actors</h3>
          <p className="mb-4">
            Motivated by political or social causes rather than money or state interests. They seek
            attention, disruption, or embarrassment. Their capabilities vary wildly -- from teenage
            script kiddies defacing websites to sophisticated operations by groups like Anonymous.
            Their TTPs typically favour distributed denial of service attacks, website defacement,
            data leaks, and doxing. They want an audience more than they want your data.
          </p>

          <JokeAside>
            Ideological actors are like motivational speakers with malware. They really want you to
            understand their message, and they will crash your website to make sure you do.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: Capability and Intent ---- */}
        <DeepDive title="Capability and Intent: You Need Both">
          <p className="mb-4">
            This is the core model that separates analytical threat assessment from paranoid
            speculation. A complete threat requires both <strong>capability</strong> (can the actor
            do it?) and <strong>intent</strong> (does the actor want to do it?). If either is
            missing, the threat level drops significantly.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Two-Factor Model</h3>
          <p className="mb-4">
            Imagine a grid with capability on one axis and intent on the other. An actor with both
            high capability and high intent represents the most serious threat. This is the scenario
            that keeps security teams awake at night. But if a threat actor has high capability and
            low intent, you still need to watch them -- intentions can change overnight. A new leader,
            a diplomatic shift, an ideological radicalisation -- and suddenly the capability that was
            sitting idle has a purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">High Capability, Low Intent</p>
              <p className="text-slate-300 text-sm italic">
                A nation-state with advanced cyber weapons that has shown no hostile intent toward
                your sector. Monitor. Do not panic.
              </p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Low Capability, High Intent</p>
              <p className="text-slate-300 text-sm italic">
                A hacktivist group that wants to destroy your network but can barely run a port scan.
                Annoying, not apocalyptic.
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">High Capability, High Intent</p>
              <p className="text-slate-300 text-sm italic">
                The adversary with both the means and the motive. This is your highest priority.
                Act now.
              </p>
            </div>
            <div className="bg-slate-600/10 border border-slate-600/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Low Capability, Low Intent</p>
              <p className="text-slate-300 text-sm italic">
                Noise. File it and move on. Unless capability or intent changes, this is not worth
                your time.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">When One Is Missing</h3>
          <p className="mb-4">
            A common analytical error is to confuse &quot;has the capability&quot; with &quot;is a threat.&quot;
            Many actors have the capability to cause harm but lack the intent. Treating a
            capable-but-indifferent actor the same as a capable-and-hostile one wastes resources,
            dilutes focus, and generates false alarms. Your job is to track both factors, assess
            their trajectories, and adjust your posture accordingly.
          </p>

          <ProTip>
            <p>
              Intent indicators can be subtle -- leadership changes, public statements, shifts in
              rhetoric, unusual reconnaissance activity. Watch for the intent shift. Capability
              changes slowly. Intent can change in a press release.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Field Exercise ---- */}
        <FieldExercise>
          <p className="mb-4 font-semibold text-amber-300">Scenario: Midnight Data Access</p>
          <p className="mb-4">
            You are an analyst at a mid-sized defence contractor. The security team reports that a
            database containing design specifications for a sensitive component was accessed at
            0245 hours over the weekend. The access used a legitimate employee credential. The
            credential belongs to a senior engineer who has been with the company for 12 years and
            has no history of policy violations. The engineering team says the data pull was not
            related to any active project.
          </p>
          <p className="mb-2">
            <strong>Your task:</strong> Apply the principles from this lesson. Identify the threat
            actors who could be involved, characterise their capability and intent, evaluate the
            risk level, and recommend at least three actions the company should take.
          </p>
          <p className="text-xs text-amber-400/60 italic mt-2">
            Hint: Consider both insider and external possibilities. The credential was legitimate,
            but that does not mean the person holding it was.
          </p>
        </FieldExercise>

        {/* ---- Debrief ---- */}
        <Debrief
          takeaways={[
            "Threats are actors or conditions with the potential to cause harm; vulnerabilities are weaknesses; risk is the likelihood and impact of a threat exploiting a vulnerability.",
            "The threat assessment process has four steps: Identify, Characterize, Evaluate, and Recommend. Do not skip the first one.",
            "Threat actors fall into categories -- nation-state, criminal, insider, hacktivist -- each with distinct motivations, capabilities, and TTPs.",
            "Both capability and intent are required for a threat to be serious. An actor with one but not the other warrants monitoring, not panic.",
            "Intent can change faster than capability. Watch for signals of shifting intent as a leading indicator.",
            "Analysis without actionable recommendations is a briefing, not an assessment.",
          ]}
          humorSummary="Threats, vulnerabilities, risks -- they are different things. Your colleagues will still use them interchangeably. Accept this and move on."
        />

        <NextLessonLink
          href="/topics/threat-assessment-models"
          title="Threat Assessment Models"
          description="Explore structured models like DHS NTAS, CARVER, and OCTAVE for systematic threat evaluation."
        />
      </MicroLesson>
    </LessonContainer>
  )
}
