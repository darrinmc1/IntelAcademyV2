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
  title: "Estimative Language | The Intel Analyst Academy",
  description:
    "Master the use of estimative language to convey probability and confidence in intelligence assessments, including the Kent scale and common pitfalls.",
}

export default function EstimativeLanguagePage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Estimative Language"
        subtitle="Saying 'Maybe' with Precision, Discipline, and a Straight Face"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={17}
      >
        <MissionBriefing humorText="In intelligence, 'probably' is not a vague guess -- it is a precisely calibrated statement that you will still get yelled at for.">
          <p className="mb-4">
            Intelligence analysts almost never deal in certainty. The future is murky, sources are
            incomplete, and the adversary is not cooperating with your timeline. Estimative language
            is the disciplined system analysts use to communicate how likely something is and how
            confident they are in that judgment. Get it right, and you empower decision-makers. Get
            it wrong, and you could launch a crisis -- or miss one entirely.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: The Kent Scale and Its History ---- */}
        <DeepDive title="The Kent Scale: A Brief History of Saying 'Probably'">
          <p className="mb-4">
            The modern framework for estimative language traces back to <strong>Sherman Kent</strong>,
            the father of modern intelligence analysis. In the 1960s, Kent noticed that when CIA
            analysts wrote &quot;probable,&quot; some readers interpreted that as 80% likely while others
            read it as 55% likely. That gap could mean the difference between mobilizing troops
            and writing a memo.
          </p>

          <p className="mb-4">
            Kent&apos;s solution was a standardized probability scale that assigns numerical ranges to
            specific words and phrases. While exact ranges vary by agency and country, the hierarchy
            is broadly consistent across the Western intelligence community.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Probability Scale</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-emerald-400 w-20 text-right">99-95%</span>
              <span className="text-sm text-slate-300"><strong>Almost Certain / Nearly Certain</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-emerald-400 w-20 text-right">93-80%</span>
              <span className="text-sm text-slate-300"><strong>Very Likely / Highly Probable</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-amber-400 w-20 text-right">75-60%</span>
              <span className="text-sm text-slate-300"><strong>Likely / Probable</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-slate-400 w-20 text-right">55-45%</span>
              <span className="text-sm text-slate-300"><strong>Roughly Even Chance</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-amber-400 w-20 text-right">40-20%</span>
              <span className="text-sm text-slate-300"><strong>Unlikely / Improbable</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-red-400 w-20 text-right">15-5%</span>
              <span className="text-sm text-slate-300"><strong>Very Unlikely / Highly Improbable</strong></span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
              <span className="text-xs font-mono font-bold text-red-400 w-20 text-right">5-1%</span>
              <span className="text-sm text-slate-300"><strong>Remote / Almost No Chance</strong></span>
            </div>
          </div>

          <JokeAside>
            Sherman Kent once said that if intelligence analysts cannot agree on what &quot;probable&quot;
            means, we have bigger problems than the Soviet Union. He was right. And we still
            argue about it.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">Agency Variations</h3>
          <p className="mb-4">
            Not all agencies use the same scale. The U.S. Intelligence Community (IC) and the UK&apos;s
            Joint Intelligence Committee (JIC) use slightly different terminology and ranges. The
            Australian intelligence community has its own variant. When working in coalition
            environments or reading foreign intelligence, always check which scale is in use.
            &quot;Likely&quot; in a CIA product and &quot;likely&quot; in a JIC assessment may carry different
            implied probabilities.
          </p>

          <ProTip>
            <p>
              When your report will be read across agencies or by coalition partners, include a
              brief footnote defining your probability terms. Two sentences can prevent a
              misunderstanding that leads to very expensive decisions.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Confidence vs Probability ---- */}
        <DeepDive title="Confidence vs. Probability: Two Different Questions">
          <p className="mb-4">
            One of the most misunderstood distinctions in intelligence writing is the difference
            between <strong>probability</strong> and <strong>confidence</strong>. They answer
            different questions, and conflating them is a fast track to misleading your reader.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Probability: How Likely Is It?</h3>
          <p className="mb-4">
            Probability addresses the <strong>likelihood of an event occurring</strong>. When you
            write &quot;Iran will likely continue uranium enrichment,&quot; you are making a statement about
            the expected future behavior of the subject.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Confidence: How Good Is Our Evidence?</h3>
          <p className="mb-4">
            Confidence addresses the <strong>quality and quantity of your evidence</strong>. A
            &quot;high confidence&quot; judgment means you have strong sourcing, corroboration, and
            analytical support. A &quot;low confidence&quot; judgment means you are working with thin,
            uncorroborated, or potentially unreliable information.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Why the Distinction Matters</h3>
          <p className="mb-4">
            You can have high probability with low confidence, and vice versa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">High Probability, Low Confidence</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We assess that the regime will likely [70%] conduct a missile test within
                60 days (low confidence), based on a single uncorroborated human intelligence
                report.&quot;
              </p>
              <p className="text-xs text-amber-400 mt-2">
                The event seems likely, but the evidence is thin. Proceed with caution.
              </p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Low Probability, High Confidence</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We assess that the regime is unlikely [25%] to abandon its nuclear program
                (high confidence), based on consistent signals intelligence, imagery, and
                diplomatic reporting over 18 months.&quot;
              </p>
              <p className="text-xs text-cyan-400 mt-2">
                The event is unlikely, and we are quite sure about that judgment.
              </p>
            </div>
          </div>

          <JokeAside>
            Confusing confidence and probability is like confusing &quot;I&apos;m pretty sure I locked the
            door&quot; with &quot;the door is probably locked.&quot; One is about your memory; the other is
            about the door. Both matter, but they are not the same thing.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: Common Misuses ---- */}
        <DeepDive title="Common Misuses of Estimative Language">
          <p className="mb-4">
            Even analysts who know the scale make mistakes in application. Here are the most
            frequent offenders:
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Misuse 1: Stacking Hedges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Hedge Stack</p>
              <p className="text-slate-300 text-sm italic">
                &quot;It is possible that the group may potentially be likely to consider conducting
                an attack.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">Four hedges in one sentence. What is the actual probability?</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Clean</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The group will likely conduct an attack within six months.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">One estimative term. Clear probability. Defined timeframe.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Misuse 2: Inconsistent Terminology</h3>
          <p className="mb-4">
            Using &quot;likely,&quot; &quot;probable,&quot; and &quot;expected&quot; interchangeably within the same report
            creates confusion. Pick one term per probability level and stick with it throughout.
            If you say &quot;likely&quot; on page 2 and &quot;probable&quot; on page 5, your reader may wonder if
            you are describing different levels of likelihood.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Misuse 3: Hiding Behind &quot;Could&quot; and &quot;May&quot;</h3>
          <p className="mb-4">
            The words &quot;could&quot; and &quot;may&quot; are capability statements, not probability statements.
            &quot;Iran could develop a nuclear weapon&quot; says nothing about whether they will -- only that
            they have the potential. Analysts sometimes retreat to &quot;could&quot; and &quot;may&quot; to avoid
            committing to a probability judgment. This is a failure of analytical courage.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Misuse 4: The Missing Timeframe</h3>
          <p className="mb-4">
            &quot;The regime will likely test a missile.&quot; When? This week? This decade? Without a
            timeframe, an estimative judgment is incomplete. Always pair your probability with a
            defined period.
          </p>

          <ProTip>
            <p>
              Before finalizing your report, do an &quot;estimative language audit.&quot; Search for every
              instance of likely, unlikely, possible, probable, and may. For each one, verify:
              (1) it maps to a specific probability range, (2) it is consistent with other uses in
              the same report, and (3) it includes a timeframe.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: Before and After Examples ---- */}
        <DeepDive title="Before and After: Estimative Language in Practice">
          <p className="mb-4">
            Let us put it all together with full before-and-after examples drawn from common
            intelligence writing scenarios.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Example 1: Threat Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Before</p>
              <p className="text-slate-300 text-sm italic">
                &quot;There is a possibility that the group might try to attack the embassy at some
                point in the future.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">After</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We assess with moderate confidence that the group will likely (60-75%) attempt
                to attack the embassy within the next 90 days, based on intercepted
                communications and observed pre-operational surveillance activity.&quot;
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Example 2: Political Forecast</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Before</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The president might not survive the next election.&quot;
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">After</p>
              <p className="text-slate-300 text-sm italic">
                &quot;We assess with high confidence that the incumbent is unlikely (20-35%) to
                win re-election in the March 2026 cycle, given persistent economic decline,
                falling approval ratings, and credible opposition consolidation.&quot;
              </p>
            </div>
          </div>

          <p className="mb-4">
            Notice the pattern: the &quot;after&quot; versions include <strong>a probability term, a
            confidence level, a timeframe, and the supporting evidence</strong>. This is the gold
            standard for estimative writing.
          </p>

          <JokeAside>
            The before version of Example 1 is the analytical equivalent of a fortune cookie.
            Technically true, but nobody is going to scramble fighter jets over it.
          </JokeAside>
        </DeepDive>

        <Debrief
          takeaways={[
            "Use the standardized probability scale (Kent scale) to assign specific numerical ranges to words like 'likely' and 'unlikely.'",
            "Probability (how likely) and confidence (how good is the evidence) are separate concepts -- always communicate both.",
            "Avoid stacking hedges, inconsistent terminology, and hiding behind 'could' and 'may.'",
            "Always pair estimative language with a defined timeframe -- 'likely' without 'when' is incomplete.",
            "When working with coalition partners, define your terms -- 'likely' does not mean the same thing everywhere.",
            "Conduct an estimative language audit before finalizing any report.",
          ]}
          humorSummary="'Probably' is not a guess. It is a calibrated statement of uncertainty that took decades of bureaucratic evolution to standardize. Use it with respect."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Cognitive Biases",
          description: "Learn how to recognize and mitigate the cognitive biases that can affect your analysis.",
          path: "/topics/cognitive-biases",
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
