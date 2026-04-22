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
import { LessonContainer } from '@/components/lesson-container';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Intelligence Cycle | Intel Analyst Academy',
  description: 'Learn the five phases of the intelligence cycle: Direction, Collection, Processing, Analysis, and Dissemination.',
  keywords: ['intelligence cycle', 'intelligence process', 'DCPAI', 'intelligence phases'],
};

export default function IntelligenceCyclePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="The Intelligence Cycle"
        subtitle="The systematic process for turning chaos into clarity"
        humorSubtitle="Think of it as a washing machine for information — what goes in messy comes out... well, less messy."
        readTime={12}
        difficulty="Beginner"
        category="Foundations"
        mascot="foundations"
        mascotMessage="Ah, the Intelligence Cycle. It's like doing laundry — direction, collection, processing, analysis, dissemination. Except the laundry is classified and the machine occasionally catches fire."
      >
        <MissionBriefing
          humorText="Because 'I had a feeling about this' is not a methodology."
        >
          You'll learn the five phases of the intelligence cycle, understand how each phase feeds into the next, and discover why this systematic approach prevents analysts from just winging it.
        </MissionBriefing>

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">The Five Phases</h2>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {['Direction', 'Collection', 'Processing', 'Analysis', 'Dissemination'].map((phase, idx) => (
              <div key={phase} className="flex items-center gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center min-w-32">
                  <p className="text-white font-semibold">{phase}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          <p className="text-slate-300 mb-4">
            The intelligence cycle is a continuous, systematic process that transforms raw information into actionable intelligence. Each phase builds on the previous one, creating a feedback loop that improves intelligence quality over time.
          </p>
        </section>

        {/* Phase 1: Direction */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Phase 1: Direction</h3>
          <p className="text-slate-300 mb-4">
            Direction is where it all begins. This phase determines what intelligence is needed, why it's needed, and how it will be used. Intelligence requirements flow from policymakers, military commanders, or organizational leadership. Your job as an analyst is to understand the priority of these requirements and help structure the collection effort.
          </p>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Define intelligence requirements and priorities</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Determine collection strategy and resource allocation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Establish timelines and quality standards</span>
            </li>
          </ul>
          <JokeAside>
            This is where someone in a suit says "find out everything about X" and walks away. Your job is to figure out what "everything" actually means.
          </JokeAside>
        </section>

        {/* Phase 2: Collection */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Phase 2: Collection</h3>
          <p className="text-slate-300 mb-4">
            Once requirements are set, intelligence collectors go to work. Collection happens across multiple disciplines, each providing unique insights. The challenge is gathering the right information without drowning in noise.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-cyan-400 font-semibold text-sm">HUMINT</p>
              <p className="text-slate-300 text-sm">Human intelligence</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-cyan-400 font-semibold text-sm">SIGINT</p>
              <p className="text-slate-300 text-sm">Signals intelligence</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-cyan-400 font-semibold text-sm">OSINT</p>
              <p className="text-slate-300 text-sm">Open source intelligence</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-cyan-400 font-semibold text-sm">GEOINT</p>
              <p className="text-slate-300 text-sm">Geospatial intelligence</p>
            </div>
          </div>
          <ProTip>
            Don't try to collect everything. Intelligence requirements should focus collection efforts on what's actually needed. Unfocused collection creates noise that buries signal.
          </ProTip>
        </section>

        {/* Phase 3: Processing */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Phase 3: Processing</h3>
          <p className="text-slate-300 mb-4">
            Raw collected data is useless without processing. This phase converts raw material into a usable format. Translation of foreign language materials, decryption of coded messages, data entry, cataloging, and organization all happen here.
          </p>
          <ul className="text-slate-300 space-y-2">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Translation and transcription</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Decryption and decoding</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Database entry and indexing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Quality control and validation</span>
            </li>
          </ul>
        </section>

        {/* Phase 4: Analysis */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Phase 4: Analysis</h3>
          <p className="text-slate-300 mb-4">
            This is where intelligence becomes valuable. Analysis is the critical thinking phase where you examine processed information, identify patterns, test hypotheses, and produce assessments. You're answering the "so what?" question.
          </p>
          <p className="text-slate-300 mb-4">
            Good analysis connects dots, identifies gaps, distinguishes between facts and assumptions, and clearly communicates confidence levels and uncertainties.
          </p>
          <JokeAside>
            This is the part where you stare at data until it confesses. Sometimes it cooperates. Sometimes it lawyers up.
          </JokeAside>
        </section>

        {/* Phase 5: Dissemination */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Phase 5: Dissemination</h3>
          <p className="text-slate-300 mb-4">
            Intelligence is only valuable if it reaches decision-makers. Dissemination is about getting the right intelligence to the right people, in the right format, at the right time. This might be a formal written report, a briefing, a database update, or a real-time alert.
          </p>
          <ProTip>
            Tailor your output to your audience. A general officer needs different information presented differently than a tactical unit commander. Know your consumer and deliver accordingly.
          </ProTip>
        </section>

        {/* Deep Dive: Why It's a Cycle */}
        <DeepDive title="Why It's a Cycle, Not a Line">
          <p className="text-slate-300 mb-4">
            The intelligence cycle isn't called a cycle for nothing. After dissemination, feedback loops back to direction. Decision-makers consuming your intelligence might have new questions. Collectors might discover gaps. Analysis might reveal new requirements.
          </p>
          <p className="text-slate-300 mb-4">
            This continuous nature is critical. It means:
          </p>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Intelligence improves with iteration</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>You're never done — there's always more to learn</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Consumer feedback drives quality improvements</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Assumptions are continuously tested and refined</span>
            </li>
          </ul>
          <p className="text-slate-300">
            The worst intelligence work treats the cycle as a line: "I analyzed this, now I'm done." Great intelligence work embraces the cycle: "This is what I know now. Here's what I don't know. Here's what might change my assessment."
          </p>
        </DeepDive>

        {/* Field Exercise */}
        <FieldExercise title="Map the Cycle">
          <p className="text-slate-300 mb-6">
            Your boss says: "I need to know if Company X is planning to expand into our market."
          </p>
          <p className="text-slate-300 mb-6">
            Walk through each phase of the intelligence cycle for this tasking. What would you do at each step?
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
            <p className="text-cyan-400 font-semibold mb-3">Take a moment to think through:</p>
            <ul className="text-slate-300 space-y-2">
              <li>• What specific information do you need? (Direction)</li>
              <li>• Where would you look for it? (Collection)</li>
              <li>• How would you organize the information you find? (Processing)</li>
              <li>• How would you connect the dots? (Analysis)</li>
              <li>• How would you present your findings? (Dissemination)</li>
            </ul>
          </div>
          <DeepDive title="Example Approach">
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Direction:</span> Requirements might include: financial capacity, management's strategic goals, regulatory environment, competitive positioning, market entry timeline indicators.
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Collection:</span> Review SEC filings, quarterly earnings reports, management interviews, industry analyst reports, LinkedIn profiles of executives, patent filings, real estate activity, hiring patterns, company press releases, and industry news.
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Processing:</span> Organize by source type, timeline, reliability. Flag gaps in information. Note any contradictions.
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Analysis:</span> Assess capital availability, strategic fit, management intent, competitive threats, regulatory barriers. Build a timeline of indicators. Identify best/worst case scenarios.
            </p>
            <p className="text-slate-300">
              <span className="text-cyan-400 font-semibold">Dissemination:</span> Present findings in a briefing with your assessment and confidence levels. Identify gaps that need more collection.
            </p>
          </DeepDive>
        </FieldExercise>

        {/* Debrief */}
        <Debrief
          takeaways={[
            'The intelligence cycle is a systematic process, not a random effort. Each phase is critical.',
            'The cycle is continuous. Analysis feeds back into direction, driving refinement and improvement.',
            'Your role as an analyst is to understand how each phase impacts others and to work toward seamless information flow.',
            'Good intelligence requires discipline, structure, and feedback loops.',
          ]}
          humorSummary="Direction → Collection → Processing → Analysis → Dissemination → Repeat until retired or reassigned."
        />

        {/* Next Lesson */}
        <NextLessonLink
          href="/topics/intelligence-types"
          title="Types of Intelligence"
          description="Explore the different intelligence disciplines from HUMINT to OSINT and understand each one's strengths and limitations."
        />
      </MicroLesson>
    </LessonContainer>
  );
}
