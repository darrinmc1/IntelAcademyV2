import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Situational Awareness - The Intel Analyst Academy",
  description: "Learn about situational awareness in intelligence analysis.",
}

const topicContent = `Situational awareness (SA) is the single most important cognitive skill in
tactical intelligence. It is the ability to perceive what is happening in your
environment, comprehend what it means, and project what is about to happen next.
Without SA, you are not analyzing - you are reacting. In this lesson, you will
learn the OODA loop framework, how to build a common operating picture, the three
levels of SA according to Endsley's model, and the most common failure mode
that gets analysts killed or outmaneuvered: cognitive tunneling.

{/* ---- Section 1: The OODA Loop ---- */}

Developed by United States Air Force Colonel John Boyd, the OODA loop is the
foundational framework for decision-making under uncertainty. OODA stands for
** Observe, Orient, Decide, Act**. The core insight is simple but
profound: whoever can cycle through these four steps faster - and more accurately
- wins.

### Observe

Observation is the collection of information from the environment. This is not
passive looking - it is active seeking. In an intelligence context, observation
means pulling from every available sensor: human intelligence (HUMINT), signals
intelligence (SIGINT), open-source intelligence (OSINT), geospatial intelligence
(GEOINT). The quality of your observation determines everything that follows.
Garbage in, garbage out.

### Orient

Orientation is the analysis step. It is where you place your observations into
context using your existing knowledge, experience, training, assumptions, and
cultural understanding. Boyd called this the "schwerpunkt" - the
reference point that gives the situation meaning. This is the most complex and
most critical step. It is also where cognitive biases can derail your entire
loop.

### Decide

Decision is the selection of a course of action based on your orientation. It is
the "what to do about it" step. In a fast-moving tactical situation,
a good decision made quickly is better than a perfect decision made too late.

### Act

Action is the execution of your decision. It changes the environment, which
generates new observations, and the loop begins again. The goal is not to stop
the loop - it is to keep cycling faster than your adversary.

Boyd's key insight: in a competitive situation, you do not just need good
decisions. You need to cycle through OODA faster than the other side can cycle
through theirs. Speed of the loop matters as much as accuracy of the orientation.

The OODA loop is basically the scientific method with more urgency and fewer lab
coats. Observe, think, decide, do - then do it again before the guy shooting at
you finishes his loop.

Watch for "OODA lock" - when an adversary cannot complete their loop
because your actions create disorientation. Feints, decoys, and information
operations all serve to jam an opponent's Orientation phase. Make them
observe things that do not make sense.

{/* ---- Section 2: Building a Common Operating Picture ---- */}

A Common Operating Picture (COP) is a shared display of relevant information that
gives all participants in an operation the same understanding of the situation.
Without a COP, the intelligence analyst sees one thing, the tactical commander sees
another, and the operator on the ground sees something entirely different. That
misalignment gets people killed.

### What to Track

An effective COP must track at least these dimensions:

- **Location:** Where are friendly forces, neutral actors, and threats?
- **Activity:** What is happening now? Recent events, ongoing operations.
- **Intent:** What do we know about adversary plans and objectives?
- **Timeline:** When did things happen, and what is the projected sequence?
- **Confidence:** How certain are we about each piece of information?

### How to Display It

The best COP is not the one with the most data - it is the one with the right data
presented clearly. Principles:

- Use a map as the base layer. Location is always the primary reference.
- Use symbols and colors consistently. Red for threats, blue for friendlies, yellow for unknown.
- Keep it current. A stale COP is worse than no COP - it creates false confidence.
- Keep it simple. If a new operator cannot understand the picture in 30 seconds, it is too complex.

If your common operating picture requires a user manual and a decoder ring, it is
not common and it is not operating. It is a very expensive screensaver. Simplify.

Use the "grandmother test" of COPs: show a fresh operator the picture
for 10 seconds, then look away and ask them to describe the situation. If they
get it mostly right, your COP works. If they describe something unrecognizable,
redesign it.

{/* ---- Section 3: The Three Levels ---- */}

Dr. Mica Endsley developed the most widely accepted model of situational awareness,
defining it across three ascending levels. Each level builds on the one before it.
Most analysts get stuck at Level 1. Great analysts operate at Level 3.

### Level 1: Perception

Perception is the awareness of relevant elements in the environment. You see the
truck. You hear the gunshot. You notice the phone number appears three times in
the call log. This is the "what is happening" level. Surprisingly, many
analysts fail here simply because they are not looking at the right things or their
sensors are not calibrated correctly.

### Level 2: Comprehension

Comprehension is the understanding of what those perceived elements mean in context.
You do not just see the truck - you recognize it is the same truck that was linked
to the logistics hub. You do not just hear the gunshot - you understand it came
from the direction of the checkpoint. This is the "so what" level. This
is where raw observation becomes analysis.

### Level 3: Projection

Projection is the ability to predict what will happen next based on current
perception and comprehension. You see the truck approaching the checkpoint (Level 1),
you understand it is carrying explosives based on its route deviation (Level 2),
and you predict it will detonate in approximately 4 minutes (Level 3). Projection
is the highest form of SA and the most valuable to decision-makers. It is also
the hardest to maintain under pressure.

### Level 1
Perception
What is happening?

### Level 2
Comprehension
So what does it mean?

### Level 3
Projection
What happens next?

Most intelligence products deliver solid Level 1 SA. Good ones add Level 2. The
ones that actually change decisions deliver Level 3. If your report says "we
saw a thing" without telling anyone what it means or what happens next, you
are a scribe, not an analyst.

{/* ---- Section 4: Cognitive Tunneling ---- */}

Cognitive tunneling is the single most dangerous failure of situational awareness.
It occurs when an analyst becomes so focused on one element of the environment that
they lose awareness of everything else. It is tunnel vision - literal or figurative
- and it has caused more tactical failures than bad intelligence ever did.

### How Tunneling Happens

Cognitive tunneling is not stupidity - it is a natural human response to stress and
cognitive load. Under time pressure, your brain narrows its focus to reduce
information processing demands. The problem is that it tends to narrow to the wrong
thing. An analyst tracking a single vehicle on a surveillance feed may miss the
second vehicle approaching from the flank. A commander reading an intelligence
report may miss the mortar team setting up 200 meters away.

### Common SA Failures

- **Fixation:** Staring at one data point while the situation changes
around you. The classic - watching the front door while the threat comes through
the back.

- **Assumption creep:** Operating on outdated information because you
assume nothing has changed. "The convoy was at grid 1234 ten minutes ago, so
it is probably still there." No. It is not.

- **Data saturation:** So much information that you stop processing
anything. The COP becomes noise, and you disengage.

- **Complacency:** The situation has been quiet for too long, so you
stop actively observing. This is when the enemy attacks.

### Breaking the Tunnel

Countering cognitive tunneling requires deliberate techniques:

- **Scanning:** Force yourself to deliberately survey the full picture every 30-60 seconds.
- **Red teaming:** Ask yourself "what am I not seeing right now?" as a regular discipline.
- **Peer check:** Have another analyst look at the same picture and tell you what they see.
- **Step back:** Physically lean back, look away from the screen, and re-engage. Resets the visual field.
- **Automation alerts:** Use system alerts for changes outside your current focus zone.

The "90-second rule": every 90 seconds, force yourself to verbalize
what has changed since the last check. If nothing has changed, you are probably
tunneled. Something always changes. A shift in ambient noise. A new radio
transmission. A vehicle that did not move. If you are seeing zero change, you
are not looking hard enough.

Cognitive tunneling is why people walk into traffic while staring at their phones.
Except in intelligence work, the traffic is shooting back. Put the phone down.
Look up. Scan the horizon.

You are the intelligence watch officer for a forward operating base. It has been
quiet for three hours. Your COP shows the following:

**COP Snapshot - Time: 1430Z**

- Three local nationals observed at the north checkpoint 22 minutes ago
- Civilian vehicle traffic on Main Supply Route (MSR) - normal pattern
- Local cell tower signal spike - 47% above baseline, originating southeast
- One scheduled logistics convoy inbound - ETA 45 minutes
- Weather: clear, visibility 10 km

Tasks (execute the 90-second scan discipline):

- Identify what Level 1 information needs immediate re-perception (what is stale?).
- Comprehend: what does the cell tower signal spike combined with the checkpoint observation suggest at Level 2?
- Project: what is your Level 3 assessment for the inbound convoy? What would you recommend?
- What are you most likely missing because the environment is quiet and you have been sitting in the same chair for four hours?
`

export default function SituationalawarenessPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Situational Awareness"
        subtitle="Learn about situational awareness in intelligence analysis."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="situational-awareness" />
      </MicroLesson>
    </LessonContainer>
  )
}
