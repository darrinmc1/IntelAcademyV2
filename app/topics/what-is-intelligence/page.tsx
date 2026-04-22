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
  Brain,
  Search,
  Target,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is Intelligence? | Intel Analyst Academy',
  description:
    'Understand the fundamental concepts of intelligence, how it differs from information, and why it matters for decision-making.',
  keywords: [
    'intelligence',
    'information',
    'analysis',
    'decision-making',
    'intelligence fundamentals',
  ],
  openGraph: {
    title: 'What is Intelligence?',
    description:
      'Learn the difference between raw information and processed intelligence.',
    type: 'article',
  },
};

export default function WhatIsIntelligencePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="What is Intelligence?"
        subtitle="Understanding the fundamental concepts of intelligence and how it differs from information"
        humorSubtitle="Spoilers: It's not just about James Bond and fancy gadgets."
        readTime={15}
        difficulty="Beginner"
        category="Foundations"
        mascot="foundations"
        mascotMessage="Welcome, recruit. Today we learn the difference between knowing things and actually understanding them. Try not to fall asleep — the quiz is real."
      >
        <MissionBriefing
          humorText="Translation: you'll stop using 'intel' and 'information' interchangeably at dinner parties."
        >
          By the end of this lesson, you'll understand what intelligence actually is, how it differs from raw information, and why it matters for decision-making. You'll also learn the key areas where intelligence creates real-world impact.
        </MissionBriefing>

        {/* Defining Intelligence Section */}
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-white text-3xl font-bold mb-4">
            Defining Intelligence (The Non-IQ Kind)
          </h2>
          <p className="text-slate-300 mb-6">
            Intelligence is processed information. But that's too simple. Really, intelligence
            is information that has been analyzed, contextualized, and transformed into something
            actionable. It includes insights derived from facts, implications for decision-making,
            and conclusions about past, present, or future situations.
          </p>
          <p className="text-slate-300 mb-6">
            At its core, intelligence answers the question: "What does this mean, and what should
            we do about it?" Raw data just sits there. Intelligence moves you forward.
          </p>

          <JokeAside>
            It's like having superpowers, except your superpower is being really good at Google and asking the right questions.
          </JokeAside>

          {/* Process Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <Search className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Raw Information</h3>
              <p className="text-slate-300 text-sm">Facts, observations, data points</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Analysis Process</h3>
              <p className="text-slate-300 text-sm">
                Evaluate, contextualize, synthesize
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Actionable Intelligence</h3>
              <p className="text-slate-300 text-sm">
                Insights, implications, decisions
              </p>
            </div>
          </div>

          <ProTip>
            <strong>Think of Intelligence as a GPS</strong> Intelligence is not a backseat driver telling you what to do. It's a navigation system providing you with current location, possible routes, and terrain ahead. The driver (decision-maker) still chooses the path. Intelligence just makes sure they're not driving blind.
          </ProTip>
        </div>

        <DeepDive
          title="The Academic Definition"
        >
          <div>
            <p className="text-slate-300 mb-4">
              In professional intelligence doctrine, intelligence is defined as:
            </p>
            <div className="bg-slate-950 border-l-4 border-cyan-400 pl-4 py-3 my-4">
              <p className="text-slate-300 italic">
                "Information that has been processed into a form suitable for use in informing
                decisions and in planning military, diplomatic, or other operations; information
                about an enemy or potential enemy; or an organization engaged in espionage or
                sabotage."
              </p>
            </div>
            <p className="text-slate-300">
              The key phrase: "processed into a form suitable for use." That's what separates
              intelligence from information. Intelligence is purposeful. It's designed to change
              understanding and enable better decisions.
            </p>
          </div>
        </DeepDive>

        {/* Intelligence vs Information Section */}
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6 mt-6">
          <h2 className="text-white text-3xl font-bold mb-6">
            Intelligence vs Information (They're Not the Same)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Information Card */}
            <div className="bg-white/5 border border-white/10 border-t-2 border-t-red-500 rounded-lg p-5">
              <h3 className="text-white font-bold text-lg mb-4">Information</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Raw facts and observations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>May be inaccurate or incomplete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Not necessarily relevant to your question</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Requires further processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>Example: "Three vehicles spotted moving north"</span>
                </li>
              </ul>
            </div>

            {/* Intelligence Card */}
            <div className="bg-white/5 border border-white/10 border-t-2 border-t-emerald-500 rounded-lg p-5">
              <h3 className="text-white font-bold text-lg mb-4">Intelligence</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  <span>Processed and analyzed information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  <span>Evaluated for accuracy and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  <span>Directly relevant to decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  <span>Ready for immediate use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  <span>
                    Example: "Enemy recon probing defenses, likely precursor to assault within
                    12-24 hours"
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <JokeAside>
            Information is ingredients. Intelligence is the recipe that turns them into something useful. Data is a tomato. Intelligence is knowing not to put it in fruit salad.
          </JokeAside>
        </div>

        <FieldExercise
          title="Test Your Understanding"
        >
          <p className="text-slate-300 mb-4">Below are three statements. Classify each as Raw Information (I) or Processed Intelligence (P):</p>
          <div className="space-y-4">
            <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
              <p className="text-slate-300 mb-2">
                <span className="font-semibold text-white">1.</span> A man was seen entering the
                building at 3am.
              </p>
            </div>
            <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
              <p className="text-slate-300 mb-2">
                <span className="font-semibold text-white">2.</span> Based on communication
                patterns and prior activity, Subject A is likely coordinating a handoff at
                location B between 0200-0400.
              </p>
            </div>
            <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
              <p className="text-slate-300 mb-2">
                <span className="font-semibold text-white">3.</span> Website traffic from IP range
                192.168.x.x increased by 400% today.
              </p>
            </div>
          </div>
        </FieldExercise>

        <DeepDive
          title="Check Your Answers"
        >
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold mb-2">1. Answer: Information (I)</p>
              <p className="text-slate-300">
                This is an observation. We don't know who the man is, why he was there, or what
                it means. It's raw data.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">2. Answer: Intelligence (P)</p>
              <p className="text-slate-300">
                This connects multiple pieces of information (communication patterns, prior
                activity) and produces actionable conclusions (subject, location, time window).
                This is processed intelligence.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">3. Answer: Information (I)</p>
              <p className="text-slate-300">
                A statistic by itself. Intelligence would involve analysis: "Increased traffic
                suggests testing prior to a DDoS attack" or "Traffic pattern indicates normal
                seasonal behavior."
              </p>
            </div>
          </div>
        </DeepDive>

        {/* Value of Intelligence Section */}
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6 mt-6">
          <h2 className="text-white text-3xl font-bold mb-6">Why Intelligence Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* National Security */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-bold text-lg">National Security</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Intelligence agencies protect nations by identifying threats before they
                materialize. Strategic intelligence informs defense policy; tactical intelligence
                prevents attacks.
              </p>
              <p className="text-cyan-400 text-xs font-semibold">
                Strategic + Operational Value
              </p>
            </div>

            {/* Business Strategy */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-bold text-lg">Business Strategy</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Market intelligence guides competitive decisions. Understanding competitor moves,
                customer needs, and industry trends allows organizations to make strategic bets
                with confidence.
              </p>
              <p className="text-cyan-400 text-xs font-semibold">
                Strategic Value
              </p>
            </div>

            {/* Law Enforcement */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-bold text-lg">Law Enforcement</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Criminal intelligence connects dots between cases, identifies patterns, and helps
                investigators solve crimes and prevent future offenses.
              </p>
              <p className="text-cyan-400 text-xs font-semibold">
                Tactical + Operational Value
              </p>
            </div>

            {/* Military Operations */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-bold text-lg">Military Operations</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Military intelligence provides situational awareness. It saves lives by reducing
                uncertainty before engagement and supporting tactical decision-making in the field.
              </p>
              <p className="text-cyan-400 text-xs font-semibold">
                Tactical Value
              </p>
            </div>
          </div>

          <JokeAside>
            Good intelligence is like having tomorrow's newspaper today. Bad intelligence is like having yesterday's weather forecast.
          </JokeAside>

          <ProTip>
            <strong>The Cost of Poor Intelligence</strong> Decisions made without intelligence are just guesses. Decisions made with poor intelligence are worse — they're confident guesses. History is full of catastrophic failures caused by bad intelligence or ignoring good intelligence. As a future intelligence professional, your job is to make sure decision-makers never have to guess.
          </ProTip>
        </div>

        <Debrief
          takeaways={[
            "Intelligence is processed information with context, analysis, and implications — not just raw data",
            "The purpose of intelligence is to reduce uncertainty and provide decision advantage",
            "Intelligence doesn't tell decision-makers what to do — it helps them understand the situation",
            "Poor intelligence (or its absence) can lead to catastrophic failures",
          ]}
          humorSummary="Data is the tomatoes. Intelligence is the salad. You are now the chef. Congratulations."
        />

        <NextLessonLink
          href="/topics/intelligence-cycle"
          title="The Intelligence Cycle"
          description="Learn the systematic process for turning raw information into actionable intelligence"
        />
      </MicroLesson>
    </LessonContainer>
  );
}
