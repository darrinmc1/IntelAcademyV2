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
  title: "Executive Summary Mastery | The Intel Analyst Academy",
  description:
    "Master the art of writing executive summaries using BLUF technique, the elevator pitch test, and before-and-after examples.",
}

export default function ExecutiveSummariesMasteryPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Executive Summary Mastery"
        subtitle="The Most Important Paragraph You Will Ever Write"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={15}
      >
        <MissionBriefing humorText="For many executives, your summary IS your report. Everything else is an appendix they may never open.">
          <p className="mb-4">
            The executive summary is where your analysis lives or dies. For senior leaders
            juggling dozens of reports, briefings, and crises, your executive summary may be the
            only thing they read. This lesson covers the BLUF technique in depth, the elevator
            pitch test, what to include and what to ruthlessly exclude, and the common disasters
            that turn executive summaries into executive paperweights.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: BLUF Technique ---- */}
        <DeepDive title="BLUF: Bottom Line Up Front">
          <p className="mb-4">
            BLUF is the single most important writing technique in intelligence communication.
            Borrowed from military communication, it means placing your most critical conclusion
            in the very first sentence. No buildup. No context-setting. No throat-clearing. The
            bottom line comes first; the evidence and reasoning follow.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Why BLUF Works</h3>
          <p className="mb-4">
            Decision-makers are not reading your report for entertainment. They need to know three
            things as fast as possible:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>What is the situation?</strong> The key judgment or finding.</li>
            <li><strong>Why does it matter?</strong> The implications for their decision.</li>
            <li><strong>How confident are you?</strong> The strength of the underlying evidence.</li>
          </ul>
          <p className="mb-4">
            If these three elements are not in the first two sentences, your reader may never reach
            them.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">BLUF in Practice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Without BLUF</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Over the past six months, our team has conducted an extensive review of
                the security situation in the northern provinces, examining trends in militant
                activity, local governance capacity, and population displacement. After analyzing
                data from multiple intelligence streams, we have reached several conclusions
                about the evolving threat picture...&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">Three sentences in and we still do not know the bottom line.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">With BLUF</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The security situation in the northern provinces will likely deteriorate
                significantly over the next 90 days, driven by accelerating militant recruitment
                and collapsing local governance. Without additional security force deployment, we
                assess with high confidence that at least two provincial capitals are at risk.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">Bottom line, timeframe, confidence, and stakes -- all in two sentences.</p>
            </div>
          </div>

          <JokeAside>
            Writing without BLUF is like telling a joke and saving the punchline for the appendix.
            Your audience has already left the room.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 2: The Elevator Pitch Test ---- */}
        <DeepDive title='The Elevator Pitch Test'>
          <p className="mb-4">
            Imagine you step into an elevator with the person who commissioned your report. You
            have 30 seconds before the doors open on their floor. Can you deliver the core message
            of your executive summary in that time? If not, it is too long, too complex, or
            missing the point.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The 30-Second Formula</h3>
          <p className="mb-4">
            A good elevator pitch for an executive summary follows this structure:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Sentence 1:</strong> The key judgment (what is happening or what will happen).</li>
            <li><strong>Sentence 2:</strong> The stakes or implications (why it matters to the reader).</li>
            <li><strong>Sentence 3 (optional):</strong> The key driver or evidence summary (why you believe this).</li>
          </ul>

          <p className="mb-4">
            If your executive summary cannot be distilled to this formula, it has not been
            sufficiently sharpened. An executive summary is not a miniature version of the report
            -- it is a distillation of the report&apos;s most essential elements.
          </p>

          <ProTip>
            <p>
              Practice the elevator pitch out loud before you write. If you can say it clearly
              in conversation, you can write it clearly on the page. If you stumble, your thinking
              is not yet sharp enough.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: What to Include vs Exclude ---- */}
        <DeepDive title="What to Include and What to Ruthlessly Exclude">
          <p className="mb-4">
            The executive summary is an exercise in ruthless prioritization. For every sentence
            you include, you must justify its presence. If it does not directly serve the
            decision-maker, it gets cut.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Include</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Key judgments:</strong> Your most important analytical conclusions. If you
              have three key judgments, all three belong in the summary.
            </li>
            <li>
              <strong>Confidence levels:</strong> The reader must know how solid your evidence is.
              &quot;High confidence&quot; signals they can act; &quot;low confidence&quot; signals they need more
              information.
            </li>
            <li>
              <strong>Timeframes:</strong> When will the assessed event occur? When does the
              window of opportunity close?
            </li>
            <li>
              <strong>Implications:</strong> What does this mean for the decision-maker&apos;s equities?
              What should change?
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Exclude</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Methodology:</strong> How you conducted the analysis belongs in the body.
              The executive does not need to know you used Analysis of Competing Hypotheses.
            </li>
            <li>
              <strong>Detailed sourcing:</strong> &quot;Based on multiple intelligence streams&quot; is
              sufficient for the summary. Source-by-source breakdowns go in the body.
            </li>
            <li>
              <strong>Background information:</strong> Do not set the scene. The reader either
              knows the context or can read the body for it.
            </li>
            <li>
              <strong>Caveats and hedges:</strong> Include your confidence level, but save the
              extended discussion of information gaps and alternative analyses for the body.
            </li>
            <li>
              <strong>Acronyms and jargon:</strong> If the executive summary requires a glossary,
              you have already lost.
            </li>
          </ul>

          <JokeAside>
            Think of the executive summary as a movie trailer. It shows the explosions and the
            plot twist. It does not show the craft services table or the gaffer&apos;s lighting setup.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: Common Executive Summary Disasters ---- */}
        <DeepDive title="Common Executive Summary Disasters">
          <p className="mb-4">
            After years of reviewing intelligence products, certain failure patterns appear again
            and again. Here are the most common ways analysts sabotage their own executive
            summaries:
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Disaster 1: The Miniature Report</h3>
          <p className="mb-4">
            The analyst tries to compress the entire 20-page report into two pages, producing a
            dense, unreadable summary that defeats its own purpose. An executive summary is not a
            smaller report -- it is a different product with a different purpose.
            <strong> Fix:</strong> Write the summary from scratch, not by cutting down the report.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Disaster 2: The Teaser Trailer</h3>
          <p className="mb-4">
            &quot;This report examines the threat posed by Group X and presents our findings.&quot; That
            is a table of contents, not an executive summary. It tells the reader what the report
            is about without telling them what it says.
            <strong> Fix:</strong> Replace descriptive statements with analytical conclusions.
            Instead of &quot;this report examines,&quot; write &quot;we assess that...&quot;
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Disaster 3: The Wall of Text</h3>
          <p className="mb-4">
            A single, unbroken paragraph that spans an entire page. Even if the content is good,
            the visual density signals &quot;this will take effort&quot; -- and busy executives will skip
            it.
            <strong> Fix:</strong> Use two to three short paragraphs, or use bullet points for
            multiple key judgments. White space is your ally.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Disaster 4: The Confidence-Free Zone</h3>
          <p className="mb-4">
            Key judgments presented without any indication of confidence or sourcing strength.
            The reader has no way to calibrate how much weight to give the assessment.
            <strong> Fix:</strong> Attach a confidence level (high, moderate, low) to every key
            judgment in the summary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Disaster Example</p>
              <p className="text-slate-300 text-sm italic">
                &quot;This report provides an overview of the current situation in Region X. It
                examines political, economic, and security dynamics. The report draws on multiple
                sources and analytical frameworks to develop a comprehensive understanding of the
                challenges and opportunities. Key findings are presented in the following
                sections.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">Four sentences. Zero analytical content. Zero value.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">Effective Example</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Region X faces a high risk of political instability over the next six months
                (high confidence). The ruling coalition is fracturing over economic reform, and
                opposition parties are likely to exploit public discontent from rising food
                prices. A leadership crisis before the October elections would create a security
                vacuum that neighboring State Y is positioned to exploit.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">Key judgment, confidence, timeframe, implication, and second-order effect.</p>
            </div>
          </div>

          <ProTip>
            <p>
              Write the executive summary last, after the entire report is complete. You cannot
              distill what you have not yet fully understood. Then, read it the next morning with
              fresh eyes. If the first sentence does not deliver the bottom line, rewrite it.
            </p>
          </ProTip>
        </DeepDive>

        <Debrief
          takeaways={[
            "Always use BLUF: place your most important conclusion in the first sentence, not the last.",
            "Apply the 30-second elevator pitch test -- if you cannot say it in 30 seconds, it is not sharp enough.",
            "Include key judgments, confidence levels, timeframes, and implications. Exclude methodology, detailed sourcing, and background.",
            "Write the executive summary from scratch, not by compressing the report.",
            "Avoid the 'teaser trailer' -- your summary must contain conclusions, not descriptions of what the report covers.",
            "Attach a confidence level to every key judgment so the reader can calibrate appropriately.",
          ]}
          humorSummary="Your executive summary should make busy leaders stop scrolling. If it reads like a table of contents, you have already lost them."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Writing Executive Summaries",
          description: "Practice writing effective executive summaries with examples and exercises.",
          path: "/topics/writing-executive-summaries",
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
