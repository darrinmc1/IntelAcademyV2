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
  title: "Executive Summaries | The Intel Analyst Academy",
  description:
    "Master the art of writing tight, actionable executive summaries using BLUF, the five-paragraph formula, and ruthless editing.",
}

export default function ExecutiveSummariesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Executive Summaries"
        subtitle="The TL;DR That Generals Actually Read. Make Every Word Count."
        humorSubtitle="The one place where shorter is always better. Unlike this sentence."
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        mascotMessage="The TL;DR that generals actually read. Make every word count."
        readTime={12}
      >
        <MissionBriefing
          humorText="Fun fact: a three-star general once told us our 200-page report was 'interesting.' Then he read the exec summary and made a decision in 90 seconds."
        >
          <p className="mb-4">
            The executive summary is the most valuable real estate in any intelligence product.
            It is also the most mistreated. Analysts treat it as a afterthought — a quick
            condensation slapped onto the front of a finished report. In reality, it is the only
            part most decision-makers will ever read. This lesson will teach you how to write
            executive summaries that deliver the bottom line at the top, follow a battle-tested
            five-paragraph structure, survive the red pen of ruthless editing, and pass the
            one-page test every time.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Bottom Line at the Top ---- */}
        <DeepDive title="The Bottom Line Must Be at the Bottom — Wait, No, the Top">
          <p className="mb-4">
            There is a reason the U.S. military codified the BLUF (Bottom Line Up Front) principle
            decades ago: it works. Decision-makers do not have the time or inclination to read your
            methodology, your sourcing tree, or your carefully crafted narrative arc. They need the
            answer to one question — &quot;What do I need to know?&quot; — and they need it in the first
            two sentences.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Why BLUF Matters for Exec Summaries</h3>
          <p className="mb-4">
            Studies of executive reading behavior consistently show that decision-makers spend an
            average of 30 to 90 seconds on an executive summary before deciding whether to read
            deeper. If your key judgment is not delivered in that window, it does not exist. The
            executive summary is not a &quot;teaser&quot; — it is the main event. The rest of the report is
            the supporting evidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Buried Bottom Line</p>
              <p className="text-slate-300 text-sm italic">
                &quot;This report examines the ongoing insurgency in the eastern provinces
                using data from multiple intelligence sources collected over the past
                quarter. After reviewing patterns of attacks, logistical movements, and
                financial transfers, we have concluded that the insurgency is not losing.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">The conclusion arrives after 40 words of throat-clearing.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">BLUF Delivered</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The insurgency in the eastern provinces is not losing (high confidence).
                Attack frequency has remained steady for six consecutive months, and
                the insurgent financial network shows no signs of disruption despite
                sustained counter-efforts. The core leadership remains intact and
                continues to recruit effectively.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">Key judgment, confidence level, and supporting evidence — all in the first paragraph.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">The Hierarchy of the Bottom Line</h3>
          <p className="mb-4">
            Not all bottom lines are created equal. Within your executive summary, the bottom line
            has a clear hierarchy:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Primary bottom line:</strong> The single most important thing the decision-maker must know. This goes in sentence one.</li>
            <li><strong>Secondary bottom lines:</strong> Additional key judgments that support or qualify the primary. These fill paragraphs two and three.</li>
            <li><strong>Actionable implication:</strong> What the decision-maker should do, stop doing, or prepare for. This closes the summary.</li>
          </ul>

          <JokeAside>
            If your executive summary can be tweeted and still make sense, it is probably too long. If it can be tweeted and still makes sense, congratulations — you have mastered BLUF.
          </JokeAside>

          <ProTip>
            <p>
              Write your key judgment on a sticky note before you write the summary. If the sticky
              note does not fit on a real sticky note, your judgment is not sharp enough. Trim
              until it fits.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: The Five-Paragraph Formula ---- */}
        <DeepDive title="The Five-Paragraph Formula That Generals Don't Hate">
          <p className="mb-4">
            Every intelligence executive summary should follow a variation of the SMEAC
            (Situation, Mission, Execution, Administration/Logistics, Command/Signal) format
            adapted for analytical products. It is the structure that military decision-makers
            already know — and it works because it forces you to answer the right questions in
            the right order.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Paragraph 1: Situation — The Key Judgment</h3>
          <p className="mb-4">
            This is your BLUF paragraph. It answers: <strong>What is happening, and what does it
            mean?</strong> Include the key judgment, confidence level, and time horizon. Keep it to
            two or three sentences. This is the paragraph that determines whether the reader keeps
            going.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Paragraph 2: Mission — Why We Care</h3>
          <p className="mb-4">
            This paragraph answers: <strong>Why does this matter to the reader or the
            organization?</strong> Connect the analytical finding to the decision-maker's equities,
            responsibilities, or strategic objectives. If you cannot articulate why the reader
            should care, neither will they.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Paragraph 3: Execution — The Evidence</h3>
          <p className="mb-4">
            This paragraph answers: <strong>What evidence supports this judgment, and what are the
            key drivers?</strong> Provide the two to three most compelling pieces of evidence or
            analytical drivers. This is where you prove your case — briefly. Detailed sourcing
            belongs in the body.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Paragraph 4: Admin — Implications and Risks</h3>
          <p className="mb-4">
            This paragraph answers: <strong>What are the implications, and what could go
            wrong?</strong> Include second- and third-order effects, potential blowback, or
            alternative scenarios. Flag any significant information gaps that affect confidence.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Paragraph 5: Command — Recommended Actions</h3>
          <p className="mb-4">
            This paragraph answers: <strong>What should the reader do?</strong> Include specific,
            actionable recommendations or at minimum, define the decision space. Even &quot;no action
            required at this time&quot; is useful — it tells the leader they can stop worrying about it.
          </p>

          <JokeAside>
            The five-paragraph format is older than most of the analysts writing it. There is a
            reason it has survived: because anything that is five paragraphs long can be read in
            under two minutes, and anything that takes longer than two minutes to read will not
            be read.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: Killing Your Darlings ---- */}
        <DeepDive title="Killing Your Darlings: When That Beautiful Paragraph Has to Go">
          <p className="mb-4">
            Every analyst has a beloved paragraph they fought hard to write. Maybe it contains a
            particularly elegant turn of phrase. Maybe it connects two disparate data points in
            a way that made you feel brilliant. If it does not serve the executive summary, it has
            to go. This is called &quot;killing your darlings&quot; — and it is the hardest part of writing
            tight.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Word Budget</h3>
          <p className="mb-4">
            A proper executive summary should not exceed 300 to 500 words. That is roughly one
            page of standard formatting. Here is how a 400-word budget typically breaks down:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Paragraph 1 (Situation):</strong> 75 words — the key judgment and confidence level.</li>
            <li><strong>Paragraph 2 (Mission):</strong> 75 words — why it matters.</li>
            <li><strong>Paragraph 3 (Execution):</strong> 100 words — the evidence.</li>
            <li><strong>Paragraph 4 (Admin):</strong> 75 words — implications and risks.</li>
            <li><strong>Paragraph 5 (Command):</strong> 75 words — recommendations.</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Editing Checklist</h3>
          <p className="mb-4">
            When editing your executive summary, ask these questions about every sentence:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Does this sentence contain a key judgment or implication?</strong> If not, cut it.</li>
            <li><strong>Does this sentence require prior knowledge the reader may not have?</strong> If yes, either make it self-contained or cut it.</li>
            <li><strong>Can this sentence be shortened without losing meaning?</strong> Aim for a 25 percent word reduction on every pass.</li>
            <li><strong>Does this sentence use passive voice when active would be clearer?</strong> Rewrite it.</li>
            <li><strong>Would the reader lose critical information if this sentence vanished?</strong> If no, it is dead weight.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Before Editing</p>
              <p className="text-slate-300 text-sm italic">
                &quot;It is important to note that the threat actor in question has been
                observed utilizing multiple different types of cyber attack vectors
                against critical infrastructure targets in the region during the time
                period under review.&quot;
              </p>
              <p className="text-xs text-red-400 mt-2">35 words, zero analytical value in the first clause.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">After Editing</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The threat actor is using multiple cyber attack vectors against
                regional critical infrastructure.&quot;
              </p>
              <p className="text-xs text-emerald-400 mt-2">14 words — 60 percent shorter, zero substance lost.</p>
            </div>
          </div>

          <ProTip>
            <p>
              Read your executive summary out loud. Every time you hear a word that feels
              unnecessary, strike it. Then read it again. After three passes, compare the
              original to the final version. The difference will shock you.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: The One-Page Test ---- */}
        <DeepDive title="The One-Page Test">
          <p className="mb-4">
            There is a simple rule in intelligence writing: if your executive summary is longer
            than one page, it is not an executive summary. It is an abstract, a précis, or a
            condensed report — call it what you want, but do not call it an executive summary.
            The one-page test is brutally simple: print it. If it spills onto a second page,
            cut until it does not.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Why One Page?</h3>
          <p className="mb-4">
            The one-page limit is not an arbitrary constraint. It is rooted in how senior leaders
            consume information. A single page fits on a desk, on a tablet screen, or in a briefing
            binder without flipping. It can be read in under three minutes. It forces prioritization.
            It eliminates the temptation to include &quot;just one more detail.&quot;
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">When One Page Is Too Much</h3>
          <p className="mb-4">
            Some executive summaries should be shorter than one page. A tactical intelligence
            update for an operational commander may be three paragraphs. A warning report for a
            national security advisor may be five sentences. Know your audience and adjust. The
            one-page test is a ceiling, not a target.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">How to Survive the One-Page Test</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li><strong>Eliminate all background sections.</strong> The reader either knows the context or can infer it.</li>
            <li><strong>Remove every adjective and adverb that does not carry analytical weight.</strong> &quot;Significant&quot; and &quot;very&quot; are usually filler.</li>
            <li><strong>Convert sentences to bullet points where appropriate.</strong> A list of three key judgments reads faster than a sentence containing three commas.</li>
            <li><strong>Merge paragraphs that cover related points.</strong> Two half-paragraphs waste more space than one full paragraph.</li>
            <li><strong>Delete the final paragraph if it says nothing new.</strong> If your recommendations are implicit in the analysis, stop writing.</li>
          </ul>

          <JokeAside>
            The one-page test reveals a universal truth about intelligence writing: your first draft is always too long, your second draft is still too long, and your third draft is finally the right length — unless you let yourself add &quot;just one more sentence.&quot;
          </JokeAside>
        </DeepDive>

        <FieldExercise title="The Executive Summary Red Pen">
          <p className="mb-4">
            Below is a poorly written executive summary. Your mission: rewrite it in 300 to 500
            words using the BLUF principle and the five-paragraph SMEAC formula. Then cut it to
            one page.
          </p>
          <div className="bg-slate-950 border border-white/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              &quot;This report has been prepared to provide an overview of the security situation
              in the coastal region. It is based on information collected from various sources
              over the last three months. It is important to note that the situation has been
              evolving and there are many factors to consider. The report examines patterns
              of criminal activity, the influence of organized crime groups, and the capacity
              of local law enforcement to respond effectively. Additionally, the report considers
              the economic conditions that may be contributing to the security environment. After
              reviewing all of the available information, we have reached several conclusions about
              the current state of affairs and what it might mean for future operations. These
              conclusions are presented below along with supporting evidence and source references.
              We hope that this report proves useful to the reader in their decision-making
              process.&quot;
            </p>
          </div>
          <p className="text-slate-300 text-sm">
            <strong>Challenge:</strong> Rewrite this to pass the one-page test. Apply BLUF by
            inventing a concrete key judgment. Structure the result into the five-paragraph SMEAC
            format. Strike every word that does not carry analytical weight. When you are done,
            the original should look like a rough draft — because it is.
          </p>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Always lead with the bottom line: your key judgment belongs in sentence one, not paragraph four.",
            "Use the five-paragraph SMEAC format (Situation, Mission, Execution, Admin, Command) as your default structure.",
            "Apply a strict word budget of 300-500 words — every word must earn its place.",
            "Pass the one-page test: if it spills onto a second page, cut until it does not.",
            "Kill your darlings: remove every sentence, phrase, and word that does not directly serve the decision-maker.",
            "Write the executive summary from scratch after the body is complete — never by compressing the report.",
          ]}
          humorSummary="Your executive summary should make a busy leader stop, read, and decide — not sigh, skim, and close the PDF."
        />

        <NextLessonLink
          href="/topics/writing-executive-summaries"
          title="Writing Executive Summaries"
          description="Put your skills into practice with hands-on exercises, templates, and before-and-after examples."
        />
      </MicroLesson>
    </LessonContainer>
  )
}
