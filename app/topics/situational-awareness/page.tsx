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
  Eye,
  EyeOff,
  Activity,
  Map,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Situational Awareness | Intel Analyst Academy',
  description:
    'Master situational awareness — the OODA loop, common operating pictures, Endsley\'s three levels, and avoiding cognitive tunneling.',
  keywords: [
    'situational awareness',
    'OODA loop',
    'common operating picture',
    'Endsley model',
    'cognitive tunneling',
    'intelligence analysis',
    'tactical intelligence',
  ],
  openGraph: {
    title: 'Situational Awareness',
    description:
      'Learn how to perceive, comprehend, and project the operational environment — and how to avoid tunnel vision when it matters most.',
    type: 'article',
  },
};

export default function SituationalAwarenessPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Situational Awareness"
        subtitle="Perceive, comprehend, project — and stop staring at the wrong thing"
        humorSubtitle="Knowing what's happening before it happens. Like spidey-sense, but with spreadsheets."
        readTime={10}
        difficulty="Beginner"
        category="Tactical Intelligence"
        mascot="tactical-intelligence"
        mascotMessage="Eyes up, agent. Most analysts lose a fight before it starts — they just do not see it coming. I will teach you how to see everything. Including what is behind you."
      >
        <MissionBriefing
          humorText="Translation: if a car explodes three blocks away and you did not see it coming, you were not paying attention. This lesson fixes that."
        >
          Situational awareness (SA) is the single most important cognitive skill in
          tactical intelligence. It is the ability to perceive what is happening in your
          environment, comprehend what it means, and project what is about to happen next.
          Without SA, you are not analyzing — you are reacting. In this lesson, you will
          learn the OODA loop framework, how to build a common operating picture, the three
          levels of SA according to Endsley&apos;s model, and the most common failure mode
          that gets analysts killed or outmaneuvered: cognitive tunneling.
        </MissionBriefing>

        {/* ---- Section 1: The OODA Loop ---- */}
        <DeepDive title="The OODA Loop: Faster Than Your Opponent Can Think">
          <p className="mb-4">
            Developed by United States Air Force Colonel John Boyd, the OODA loop is the
            foundational framework for decision-making under uncertainty. OODA stands for
            <strong> Observe, Orient, Decide, Act</strong>. The core insight is simple but
            profound: whoever can cycle through these four steps faster — and more accurately
            — wins.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Observe</h3>
          <p className="mb-4">
            Observation is the collection of information from the environment. This is not
            passive looking — it is active seeking. In an intelligence context, observation
            means pulling from every available sensor: human intelligence (HUMINT), signals
            intelligence (SIGINT), open-source intelligence (OSINT), geospatial intelligence
            (GEOINT). The quality of your observation determines everything that follows.
            Garbage in, garbage out.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Orient</h3>
          <p className="mb-4">
            Orientation is the analysis step. It is where you place your observations into
            context using your existing knowledge, experience, training, assumptions, and
            cultural understanding. Boyd called this the &quot;schwerpunkt&quot; — the
            reference point that gives the situation meaning. This is the most complex and
            most critical step. It is also where cognitive biases can derail your entire
            loop.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Decide</h3>
          <p className="mb-4">
            Decision is the selection of a course of action based on your orientation. It is
            the &quot;what to do about it&quot; step. In a fast-moving tactical situation,
            a good decision made quickly is better than a perfect decision made too late.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Act</h3>
          <p className="mb-4">
            Action is the execution of your decision. It changes the environment, which
            generates new observations, and the loop begins again. The goal is not to stop
            the loop — it is to keep cycling faster than your adversary.
          </p>

          <div className="bg-slate-950 border-l-4 border-cyan-400 pl-4 py-3 my-4">
            <p className="text-slate-300 italic">
              Boyd&apos;s key insight: in a competitive situation, you do not just need good
              decisions. You need to cycle through OODA faster than the other side can cycle
              through theirs. Speed of the loop matters as much as accuracy of the orientation.
            </p>
          </div>

          <JokeAside>
            The OODA loop is basically the scientific method with more urgency and fewer lab
            coats. Observe, think, decide, do — then do it again before the guy shooting at
            you finishes his loop.
          </JokeAside>

          <ProTip>
            <p>
              Watch for &quot;OODA lock&quot; — when an adversary cannot complete their loop
              because your actions create disorientation. Feints, decoys, and information
              operations all serve to jam an opponent&apos;s Orientation phase. Make them
              observe things that do not make sense.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Building a Common Operating Picture ---- */}
        <DeepDive title="Building a Common Operating Picture">
          <p className="mb-4">
            A Common Operating Picture (COP) is a shared display of relevant information that
            gives all participants in an operation the same understanding of the situation.
            Without a COP, the intelligence analyst sees one thing, the tactical commander sees
            another, and the operator on the ground sees something entirely different. That
            misalignment gets people killed.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">What to Track</h3>
          <p className="mb-4">
            An effective COP must track at least these dimensions:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Location:</strong> Where are friendly forces, neutral actors, and threats?</li>
            <li><strong>Activity:</strong> What is happening now? Recent events, ongoing operations.</li>
            <li><strong>Intent:</strong> What do we know about adversary plans and objectives?</li>
            <li><strong>Timeline:</strong> When did things happen, and what is the projected sequence?</li>
            <li><strong>Confidence:</strong> How certain are we about each piece of information?</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">How to Display It</h3>
          <p className="mb-4">
            The best COP is not the one with the most data — it is the one with the right data
            presented clearly. Principles:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>Use a map as the base layer. Location is always the primary reference.</li>
            <li>Use symbols and colors consistently. Red for threats, blue for friendlies, yellow for unknown.</li>
            <li>Keep it current. A stale COP is worse than no COP — it creates false confidence.</li>
            <li>Keep it simple. If a new operator cannot understand the picture in 30 seconds, it is too complex.</li>
          </ul>

          <JokeAside>
            If your common operating picture requires a user manual and a decoder ring, it is
            not common and it is not operating. It is a very expensive screensaver. Simplify.
          </JokeAside>

          <ProTip>
            <p>
              Use the &quot;grandmother test&quot; of COPs: show a fresh operator the picture
              for 10 seconds, then look away and ask them to describe the situation. If they
              get it mostly right, your COP works. If they describe something unrecognizable,
              redesign it.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: The Three Levels ---- */}
        <DeepDive title="The Three Levels: Perception, Comprehension, Projection">
          <p className="mb-4">
            Dr. Mica Endsley developed the most widely accepted model of situational awareness,
            defining it across three ascending levels. Each level builds on the one before it.
            Most analysts get stuck at Level 1. Great analysts operate at Level 3.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Level 1: Perception</h3>
          <p className="mb-4">
            Perception is the awareness of relevant elements in the environment. You see the
            truck. You hear the gunshot. You notice the phone number appears three times in
            the call log. This is the &quot;what is happening&quot; level. Surprisingly, many
            analysts fail here simply because they are not looking at the right things or their
            sensors are not calibrated correctly.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Level 2: Comprehension</h3>
          <p className="mb-4">
            Comprehension is the understanding of what those perceived elements mean in context.
            You do not just see the truck — you recognize it is the same truck that was linked
            to the logistics hub. You do not just hear the gunshot — you understand it came
            from the direction of the checkpoint. This is the &quot;so what&quot; level. This
            is where raw observation becomes analysis.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Level 3: Projection</h3>
          <p className="mb-4">
            Projection is the ability to predict what will happen next based on current
            perception and comprehension. You see the truck approaching the checkpoint (Level 1),
            you understand it is carrying explosives based on its route deviation (Level 2),
            and you predict it will detonate in approximately 4 minutes (Level 3). Projection
            is the highest form of SA and the most valuable to decision-makers. It is also
            the hardest to maintain under pressure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 text-center">
              <Eye className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1 text-sm">Level 1</h3>
              <p className="text-slate-300 text-xs">Perception</p>
              <p className="text-slate-400 text-xs mt-1">What is happening?</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 text-center">
              <Activity className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1 text-sm">Level 2</h3>
              <p className="text-slate-300 text-xs">Comprehension</p>
              <p className="text-slate-400 text-xs mt-1">So what does it mean?</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 text-center">
              <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1 text-sm">Level 3</h3>
              <p className="text-slate-300 text-xs">Projection</p>
              <p className="text-slate-400 text-xs mt-1">What happens next?</p>
            </div>
          </div>

          <JokeAside>
            Most intelligence products deliver solid Level 1 SA. Good ones add Level 2. The
            ones that actually change decisions deliver Level 3. If your report says &quot;we
            saw a thing&quot; without telling anyone what it means or what happens next, you
            are a scribe, not an analyst.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: Cognitive Tunneling ---- */}
        <DeepDive title="Cognitive Tunneling: How to Stop Staring and Start Seeing">
          <p className="mb-4">
            Cognitive tunneling is the single most dangerous failure of situational awareness.
            It occurs when an analyst becomes so focused on one element of the environment that
            they lose awareness of everything else. It is tunnel vision — literal or figurative
            — and it has caused more tactical failures than bad intelligence ever did.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">How Tunneling Happens</h3>
          <p className="mb-4">
            Cognitive tunneling is not stupidity — it is a natural human response to stress and
            cognitive load. Under time pressure, your brain narrows its focus to reduce
            information processing demands. The problem is that it tends to narrow to the wrong
            thing. An analyst tracking a single vehicle on a surveillance feed may miss the
            second vehicle approaching from the flank. A commander reading an intelligence
            report may miss the mortar team setting up 200 meters away.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Common SA Failures</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Fixation:</strong> Staring at one data point while the situation changes
              around you. The classic — watching the front door while the threat comes through
              the back.
            </li>
            <li>
              <strong>Assumption creep:</strong> Operating on outdated information because you
              assume nothing has changed. &quot;The convoy was at grid 1234 ten minutes ago, so
              it is probably still there.&quot; No. It is not.
            </li>
            <li>
              <strong>Data saturation:</strong> So much information that you stop processing
              anything. The COP becomes noise, and you disengage.
            </li>
            <li>
              <strong>Complacency:</strong> The situation has been quiet for too long, so you
              stop actively observing. This is when the enemy attacks.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Breaking the Tunnel</h3>
          <p className="mb-4">
            Countering cognitive tunneling requires deliberate techniques:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Scanning:</strong> Force yourself to deliberately survey the full picture every 30-60 seconds.</li>
            <li><strong>Red teaming:</strong> Ask yourself &quot;what am I not seeing right now?&quot; as a regular discipline.</li>
            <li><strong>Peer check:</strong> Have another analyst look at the same picture and tell you what they see.</li>
            <li><strong>Step back:</strong> Physically lean back, look away from the screen, and re-engage. Resets the visual field.</li>
            <li><strong>Automation alerts:</strong> Use system alerts for changes outside your current focus zone.</li>
          </ul>

          <ProTip>
            <p>
              The &quot;90-second rule&quot;: every 90 seconds, force yourself to verbalize
              what has changed since the last check. If nothing has changed, you are probably
              tunneled. Something always changes. A shift in ambient noise. A new radio
              transmission. A vehicle that did not move. If you are seeing zero change, you
              are not looking hard enough.
            </p>
          </ProTip>

          <JokeAside>
            Cognitive tunneling is why people walk into traffic while staring at their phones.
            Except in intelligence work, the traffic is shooting back. Put the phone down.
            Look up. Scan the horizon.
          </JokeAside>
        </DeepDive>

        <FieldExercise
          title="Field Exercise: The 90-Second Scan"
        >
          <p className="text-slate-300 mb-4">
            You are the intelligence watch officer for a forward operating base. It has been
            quiet for three hours. Your COP shows the following:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-slate-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300">
              <p className="mb-1"><strong>COP Snapshot — Time: 1430Z</strong></p>
              <ul className="space-y-1 text-xs list-disc list-inside">
                <li>Three local nationals observed at the north checkpoint 22 minutes ago</li>
                <li>Civilian vehicle traffic on Main Supply Route (MSR) — normal pattern</li>
                <li>Local cell tower signal spike — 47% above baseline, originating southeast</li>
                <li>One scheduled logistics convoy inbound — ETA 45 minutes</li>
                <li>Weather: clear, visibility 10 km</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-300 mb-2 font-semibold">Tasks (execute the 90-second scan discipline):</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
            <li>Identify what Level 1 information needs immediate re-perception (what is stale?).</li>
            <li>Comprehend: what does the cell tower signal spike combined with the checkpoint observation suggest at Level 2?</li>
            <li>Project: what is your Level 3 assessment for the inbound convoy? What would you recommend?</li>
            <li>What are you most likely missing because the environment is quiet and you have been sitting in the same chair for four hours?</li>
          </ol>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Situational awareness operates at three levels: Perception (what), Comprehension (so what), and Projection (now what).",
            "The OODA loop (Observe, Orient, Decide, Act) is the fundamental decision cycle — the faster you cycle it, the more likely you are to win.",
            "A Common Operating Picture must be simple, current, and shared — if it requires explanation, it is not common.",
            "Cognitive tunneling is the #1 SA failure: fixating on one element while the situation changes around you.",
            "Combat tunneling with deliberate scanning, peer checks, and the 90-second rule — force yourself to look at the full picture.",
            "Trust your Level 3 projection. The most valuable intelligence tells the decision-maker not just what is happening, but what happens next.",
          ]}
          humorSummary="Look around, figure out what it means, guess what happens next, and do not stare at the same spot until something explodes. You now have basic SA. Do not lose it."
        />

        <NextLessonLink
          href="/topics/threat-monitoring"
          title="Threat Monitoring"
          description="Build on your situational awareness skills with continuous threat monitoring techniques"
        />
      </MicroLesson>
    </LessonContainer>
  );
}
