import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is Threat Assessment - The Intel Analyst Academy",
  description: "Learn the fundamentals of threat assessment including the differences between threats, risks, and vulnerabilities, the four-step assessment process, threat actor profiles, and the capability-intent model.",
}

const topicContent = `"Learn the fundamentals of threat assessment including the differences between threats, risks, and vulnerabilities, the four-step assessment process, threat actor profiles, and the capability-intent model.",

Threat assessment is the systematic process of identifying, characterizing, and evaluating
threats to determine what could cause harm and how likely that harm is to occur. It is the
foundation upon which all security decisions are built. Without a proper threat assessment,
you are guessing -- and guessing is how threats become attacks.

In this lesson, you will untangle the trio of terms everyone confuses (threat, risk,
vulnerability), walk through the four-step assessment process, meet the cast of characters
who might be targeting you, and understand why capability without intent is just expensive
showmanship.

{/* ---- Section 1: Threat vs. Risk vs. Vulnerability ---- */}

These three terms get thrown around like jargon confetti at an intelligence conference.
But they mean very different things, and confusing them leads to bad analysis. Let us
settle this once and for all.

### Threat

A **threat** is any actor, event, or condition with the potential to cause
harm. It is the thing that _could_ do damage. A threat does not have to be
deliberate -- a hurricane is a threat. A disgruntled employee with a badge is a threat.
A poorly configured firewall is a threat (yes, inanimate objects can be threats too, if
they can cause harm).

### Vulnerability

A **vulnerability** is a weakness that a threat can exploit. It is the open
window the burglar climbs through, the unpatched server the hacker pokes, the employee
who clicks every link that says "You have won a prize." Without vulnerabilities,
threats are just standing outside, rattling locked doors.

### Risk

**Risk** is the likelihood that a threat will exploit a vulnerability and
the impact if it does. It is the intersection of the other two. Risk is what you actually
manage. Threats are what you worry about. Vulnerabilities are what you fix.

Threat

A nation-state's advanced persistent threat group.

Vulnerability

An unpatched VPN server with access to the internal network.

Risk

Moderate-to-high: the group has the capability, the door is open, and the data behind
it is valuable.

Analysts who use "threat" and "risk" interchangeably are the same people who call
every four-legged animal a "dog." Yes, a wolf is technically a dog. No, you should not
pet it.

A simple mnemonic: a threat is the wolf, a vulnerability is the unlocked gate, and
risk is whether the wolf notices the gate and decides dinner is on the other side.
If any element is missing, the equation changes.

{/* ---- Section 2: Four-Step Process ---- */}

Threat assessment is not staring at a whiteboard and hoping inspiration strikes. It is a
structured, repeatable process. Think of it as a dance with four moves. You can do them
in order, or circles if you have to, but you cannot skip any.

### Step 1: Identify

What threats exist? This is the brainstorming phase, but with discipline. You identify
threat actors, natural hazards, system failures, and anything else that could cause harm.
Use intelligence sources, historical data, and subject matter expertise. At this stage,
no threat is too unlikely to list. You can filter later.

### Step 2: Characterize

Once you have identified a threat, you need to know what it is capable of. What are its
tactics, techniques, and procedures (TTPs)? What tools does it have? What targets has it
hit before? What is its operational tempo? Characterisation turns a name into a profile.

### Step 3: Evaluate

Now you assess likelihood and impact. How probable is it that this threat will manifest?
If it does, how bad is the outcome? This is where you assign risk levels -- low, medium,
high, critical -- based on evidence, not gut feeling. Gut feelings are what you have for
lunch, not for intelligence analysis.

### Step 4: Recommend

Analysis without recommendations is a monologue. Based on your evaluation, what should
be done? Accept the risk? Mitigate it? Transfer it? Avoid it entirely? Your
recommendations drive action. Make them clear, prioritised, and actionable.

Step 4 is where the analysts who love data meet the decision-makers who love certainty.
Neither group gets what they want. This is normal.

Do not skip Step 1 just because you think you already know the threats. Confirmation
bias loves a shortcut. A thorough identification phase often reveals threats that
everyone assumed were someone else's problem.

{/* ---- Section 3: Threat Actor Profiles ---- */}

Threats do not float around in the abstract. They come from specific actors with specific
motivations and specific methods. Understanding who is out there is half the assessment.
Here are the categories you will encounter most often.

### Nation-State Actors

These are state-sponsored groups operating under government direction. Their motivations
are geopolitical: espionage, sabotage, influence operations, and preparation for conflict.
They have significant resources, patience measured in years, and a tolerance for risk that
keeps security contractors employed. Think APT groups such as Cozy Bear, Lazarus, or
APT10. Their TTPs often include advanced persistent threats, supply chain compromises, and
zero-day exploitation.

### Criminal Actors

Cybercriminals, organised crime groups, and individual operators motivated by financial
gain. They are the pragmatists of the threat world -- they go where the money is.
Ransomware, business email compromise, data theft, and fraud are their specialties.
Unlike nation-states, they tend to follow the path of least resistance. Make yourself
harder to exploit than the next target, and they move on.

### Insider Threats

The most personal category. Insiders are current or former employees, contractors, or
partners with legitimate access who misuse that access. Their motivations include
financial pressure, disgruntlement, ideological alignment with an external group, or
simple carelessness. Insider threats are difficult to detect because their behaviour
starts out looking normal. They already have the keys.

### Hacktivists and Ideological Actors

Motivated by political or social causes rather than money or state interests. They seek
attention, disruption, or embarrassment. Their capabilities vary wildly -- from teenage
script kiddies defacing websites to sophisticated operations by groups like Anonymous.
Their TTPs typically favour distributed denial of service attacks, website defacement,
data leaks, and doxing. They want an audience more than they want your data.

Ideological actors are like motivational speakers with malware. They really want you to
understand their message, and they will crash your website to make sure you do.

{/* ---- Section 4: Capability and Intent ---- */}

This is the core model that separates analytical threat assessment from paranoid
speculation. A complete threat requires both **capability** (can the actor
do it?) and **intent** (does the actor want to do it?). If either is
missing, the threat level drops significantly.

### The Two-Factor Model

Imagine a grid with capability on one axis and intent on the other. An actor with both
high capability and high intent represents the most serious threat. This is the scenario
that keeps security teams awake at night. But if a threat actor has high capability and
low intent, you still need to watch them -- intentions can change overnight. A new leader,
a diplomatic shift, an ideological radicalisation -- and suddenly the capability that was
sitting idle has a purpose.

High Capability, Low Intent

A nation-state with advanced cyber weapons that has shown no hostile intent toward
your sector. Monitor. Do not panic.

Low Capability, High Intent

A hacktivist group that wants to destroy your network but can barely run a port scan.
Annoying, not apocalyptic.

High Capability, High Intent

The adversary with both the means and the motive. This is your highest priority.
Act now.

Low Capability, Low Intent

Noise. File it and move on. Unless capability or intent changes, this is not worth
your time.

### When One Is Missing

A common analytical error is to confuse "has the capability" with "is a threat."
Many actors have the capability to cause harm but lack the intent. Treating a
capable-but-indifferent actor the same as a capable-and-hostile one wastes resources,
dilutes focus, and generates false alarms. Your job is to track both factors, assess
their trajectories, and adjust your posture accordingly.

Intent indicators can be subtle -- leadership changes, public statements, shifts in
rhetoric, unusual reconnaissance activity. Watch for the intent shift. Capability
changes slowly. Intent can change in a press release.

{/* ---- Field Exercise ---- */}

Scenario: Midnight Data Access

You are an analyst at a mid-sized defence contractor. The security team reports that a
database containing design specifications for a sensitive component was accessed at
0245 hours over the weekend. The access used a legitimate employee credential. The
credential belongs to a senior engineer who has been with the company for 12 years and
has no history of policy violations. The engineering team says the data pull was not
related to any active project.

**Your task:** Apply the principles from this lesson. Identify the threat
actors who could be involved, characterise their capability and intent, evaluate the
risk level, and recommend at least three actions the company should take.

Hint: Consider both insider and external possibilities. The credential was legitimate,
but that does not mean the person holding it was.

{/* ---- Debrief ---- */}

)
`

export default function WhatisthreatassessmentPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What Is Threat Assessment"
        subtitle="Learn the fundamentals of threat assessment including the differences between threats, risks, and vulnerabilities, the f"
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="what-is-threat-assessment" />
      </MicroLesson>
    </LessonContainer>
  )
}
