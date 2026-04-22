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
  title: "Clear Writing Principles | The Intel Analyst Academy",
  description:
    "Master the principles of clear, effective writing for intelligence reports including active voice, plain language, and sentence surgery techniques.",
}

export default function ClearWritingPrinciplesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Clear Writing Principles"
        subtitle="Because Nobody Ever Complained That a Report Was Too Easy to Read"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={15}
      >
        <MissionBriefing humorText="Fun fact: the average decision-maker has the attention span of a caffeinated squirrel. Write accordingly.">
          <p className="mb-4">
            Clear writing is the difference between intelligence that drives action and intelligence
            that drives your reader to a nap. In this lesson, you will learn how to strip the fog
            from your prose, wield active voice like a scalpel, and apply the &quot;grandmother
            test&quot; to every sentence you write. Your analysis deserves to be understood -- let&apos;s
            make sure it is.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Active vs Passive Voice ---- */}
        <DeepDive title="Active vs. Passive Voice: The Battle for Your Reader's Attention">
          <p className="mb-4">
            If there is a single change that will improve your intelligence writing overnight, it is
            switching from passive to active voice. Passive voice hides the actor, buries the action,
            and adds unnecessary words. Active voice is direct, concise, and tells the reader exactly
            who did what.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">What Is Active Voice?</h3>
          <p className="mb-4">
            In active voice, the <strong>subject performs the action</strong>. In passive voice, the
            subject receives the action -- or worse, the actor disappears entirely. Compare:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Passive (Avoid)</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The facility was assessed to have been used for weapons storage by the militia.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Active (Better)</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The militia used the facility for weapons storage.&quot;
              </p>
            </div>
          </div>

          <p className="mb-4">
            Notice how the active version is <strong>eight words shorter</strong> and immediately tells
            the reader who did what. In intelligence writing, this matters enormously: your reader
            needs to know the actor, the action, and the target as quickly as possible.
          </p>

          <JokeAside>
            Passive voice is the literary equivalent of a suspect saying &quot;mistakes were made.&quot;
            Analysts should not sound like politicians at a press conference.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">When Passive Voice Is Acceptable</h3>
          <p className="mb-4">
            There are rare cases where passive voice is the right call:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>The actor is unknown:</strong> &quot;The embassy was attacked at 0300 hours.&quot;</li>
            <li><strong>The actor is less important than the action:</strong> &quot;The intelligence was declassified in 2019.&quot;</li>
            <li><strong>Deliberate source protection:</strong> When naming the actor would compromise a source.</li>
          </ul>

          <ProTip>
            <p>
              Try the &quot;by zombies&quot; test: if you can add &quot;by zombies&quot; after the verb and the
              sentence still makes grammatical sense, it is passive voice.
              &quot;The report was written [by zombies]&quot; -- passive.
              &quot;The analyst wrote the report&quot; -- active. No zombies possible.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: The Grandmother Test & Plain Language ---- */}
        <DeepDive title="The Grandmother Test and the Jargon Trap">
          <p className="mb-4">
            Intelligence analysts love jargon. Acronyms multiply like rabbits, and polysyllabic
            words make us feel smart. But here is the uncomfortable truth: if your grandmother
            cannot understand the gist of your report, neither can most policymakers.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Grandmother Test</h3>
          <p className="mb-4">
            Before you finalize any paragraph, imagine reading it to a sharp but non-specialist
            relative. Could they follow the logic? Could they tell you the main point? If not, you
            have a clarity problem -- not an audience problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Fails the Test</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The SIGINT-derived TECHINT indicators corroborate multi-INT fusion
                assessments regarding the adversary&apos;s C4ISR modernization trajectory.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Passes the Test</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Intercepted communications confirm that the adversary is upgrading its
                military command-and-control systems.&quot;
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">The Jargon Trap</h3>
          <p className="mb-4">
            Jargon is a shortcut between specialists. It becomes a trap when you forget that your
            primary audience -- the decision-maker -- may not share your specialty. Common offenders:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>&quot;Utilize&quot;</strong> instead of &quot;use&quot;</li>
            <li><strong>&quot;Operationalize&quot;</strong> instead of &quot;put into practice&quot;</li>
            <li><strong>&quot;Facilitate&quot;</strong> instead of &quot;help&quot; or &quot;enable&quot;</li>
            <li><strong>&quot;Commence&quot;</strong> instead of &quot;begin&quot; or &quot;start&quot;</li>
            <li><strong>&quot;Approximately&quot;</strong> instead of &quot;about&quot;</li>
            <li><strong>&quot;In the vicinity of&quot;</strong> instead of &quot;near&quot;</li>
          </ul>

          <JokeAside>
            If your report sounds like it was written by a thesaurus that swallowed a government
            manual, it is time to simplify.
          </JokeAside>

          <ProTip>
            <p>
              Create a personal &quot;banned words&quot; list. Every time you catch yourself writing a
              bloated word, add it to the list and note its simpler replacement. Over time, plain
              language becomes your default setting.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: Sentence Surgery ---- */}
        <DeepDive title="Sentence Surgery: Cutting Without Losing Meaning">
          <p className="mb-4">
            Good intelligence writing is lean. Every word must earn its place. Sentence surgery is
            the practice of systematically trimming fat from your prose without losing substance.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Technique 1: Kill the Throat-Clearers</h3>
          <p className="mb-4">
            Phrases like &quot;It is important to note that,&quot; &quot;It should be emphasized that,&quot; and
            &quot;It is worth mentioning that&quot; add zero information. They are verbal throat-clearing.
            Cut them and start with the actual point.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Before Surgery</p>
              <p className="text-slate-300 text-sm italic">
                &quot;It is important to note that the threat actor has demonstrated an increasing
                capability to conduct sophisticated cyber operations against critical
                infrastructure targets in the region.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">31 words</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">After Surgery</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The threat actor&apos;s cyber capability against regional critical infrastructure
                is growing.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">13 words -- 58% shorter</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Technique 2: One Idea Per Sentence</h3>
          <p className="mb-4">
            If a sentence contains the word &quot;and&quot; more than once, or uses a semicolon to glue two
            independent thoughts together, consider splitting it. Short sentences are easier to
            parse, especially under time pressure.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Technique 3: Front-Load the Key Information</h3>
          <p className="mb-4">
            Place the most important information at the beginning of each sentence and paragraph.
            Intelligence readers scan -- they do not read every word. If your key judgment is buried
            in the middle of a 40-word sentence, it will be missed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Buried Lead</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Based on our comprehensive review of multiple intelligence streams over the
                past quarter, we assess that the regime will likely test a ballistic missile
                within 30 days.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Lead First</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The regime will likely test a ballistic missile within 30 days, based on
                multiple intelligence streams reviewed over the past quarter.&quot;
              </p>
            </div>
          </div>

          <ProTip>
            <p>
              Read your draft aloud. If you run out of breath before reaching the period, the
              sentence is too long. If you stumble over a word, it is probably the wrong word.
              Your ear catches what your eyes miss.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: Writing for Your Audience ---- */}
        <DeepDive title="Writing for Your Audience: Know Who Is Reading">
          <p className="mb-4">
            The same intelligence can be presented in vastly different ways depending on the
            audience. A tactical military briefing reads nothing like a presidential daily brief,
            and neither reads like a Congressional notification. Tailoring your writing to your
            reader is not optional -- it is a core analytical skill.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Audience Tiers</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Senior Executives / Policymakers:</strong> Want the bottom line, key
              judgments, and implications. Little patience for methodology or sourcing details.
              Keep it to one page when possible.
            </li>
            <li>
              <strong>Mid-Level Managers / Operational Planners:</strong> Need enough detail to
              act. Include the &quot;so what&quot; and the &quot;now what.&quot; Two to five pages is typical.
            </li>
            <li>
              <strong>Peer Analysts / Subject Matter Experts:</strong> Want the full evidence
              trail, methodology, and confidence levels. Longer-form is acceptable here.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Specificity Imperative</h3>
          <p className="mb-4">
            Vague language is the enemy of good intelligence. Every time you write &quot;some,&quot;
            &quot;many,&quot; &quot;recently,&quot; or &quot;significant,&quot; ask yourself: can I be more precise?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Vague</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Several incidents were recently reported in the area.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Specific</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Local police reported four IED detonations in Helmand Province between
                1 and 7 March 2025.&quot;
              </p>
            </div>
          </div>

          <JokeAside>
            Writing &quot;a significant number of troops&quot; is the analytical equivalent of telling
            your boss &quot;I did some work today.&quot; How many troops? Where? When? Your reader
            should not have to play 20 questions with your report.
          </JokeAside>
        </DeepDive>

        <Debrief
          takeaways={[
            "Use active voice by default -- save passive for unknown actors or source protection.",
            "Apply the grandmother test: if a smart non-specialist cannot follow it, simplify.",
            "Perform sentence surgery by killing throat-clearers, splitting compound sentences, and front-loading key information.",
            "Replace jargon with plain language -- 'use' beats 'utilize' every time.",
            "Tailor depth and tone to your specific audience tier.",
            "Be specific: replace vague words like 'several' and 'recently' with concrete numbers and dates.",
          ]}
          humorSummary="Write like your reader is smart, busy, and allergic to the word 'utilize.'"
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Estimative Language",
          description: "Learn how to use language to convey levels of confidence and probability.",
          path: "/topics/estimative-language",
        }}
        moreLearning={{
          title: "Intelligence Report Fundamentals",
          description: "Dive deeper into the core principles of effective intelligence reporting.",
          path: "/topics/intelligence-report-fundamentals",
        }}
      />
    </LessonContainer>
  )
}
