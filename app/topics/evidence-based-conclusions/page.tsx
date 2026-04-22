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
  title: "Evidence-Based Conclusions | The Intel Analyst Academy",
  description:
    "Learn why all intelligence conclusions must be supported by evidence, how to evaluate sources, and how to build a credible evidence trail.",
}

export default function EvidenceBasedConclusionsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Evidence-Based Conclusions"
        subtitle="Because 'Trust Me, I'm an Analyst' Is Not a Source Citation"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={18}
      >
        <MissionBriefing humorText="Every unsupported judgment is an opinion wearing a trench coat pretending to be intelligence.">
          <p className="mb-4">
            In intelligence analysis, a conclusion without evidence is just an opinion -- and
            opinions do not survive peer review, congressional oversight, or the harsh light of
            being wrong. This lesson covers the evidence chain, source evaluation frameworks,
            how to distinguish facts from analytical judgments, and the costly lessons of what
            happens when evidence standards slip.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: The Evidence Chain ---- */}
        <DeepDive title="The Evidence Chain: From Raw Data to Judgment">
          <p className="mb-4">
            Every analytical judgment sits atop a chain of evidence. If any link in that chain is
            weak, missing, or fabricated, the entire conclusion is compromised. Understanding this
            chain -- and making it visible to your reader -- is what separates professional
            intelligence from punditry.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Four Links</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Raw Data:</strong> The unprocessed information as collected -- a signal
              intercept, a satellite image, a human source report, an open-source article.
            </li>
            <li>
              <strong>Processed Information:</strong> Raw data that has been translated, decrypted,
              formatted, or contextualized. The intercept becomes a transcript; the imagery
              becomes a labeled photograph.
            </li>
            <li>
              <strong>Analyzed Evidence:</strong> Processed information that has been evaluated for
              reliability and relevance, then integrated with other sources. This is where the
              analyst adds value.
            </li>
            <li>
              <strong>Analytical Judgment:</strong> The conclusion drawn from the evidence, stated
              with appropriate estimative language and confidence levels.
            </li>
          </ul>

          <p className="mb-4">
            Your reader should be able to trace backward from your conclusion through each link.
            If they cannot, your evidence chain has a gap.
          </p>

          <JokeAside>
            The evidence chain is like a game of telephone, except the stakes are national security
            and you are not allowed to mumble. Every link must be clear, documented, and auditable.
          </JokeAside>

          <ProTip>
            <p>
              When reviewing your own work, try the &quot;prove it&quot; test: for each analytical
              judgment, ask &quot;What is my evidence?&quot; If you cannot point to specific, cited
              information, the judgment is unsupported and needs either evidence or a caveat.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Source Evaluation ---- */}
        <DeepDive title="Source Evaluation: The Admiralty System and Beyond">
          <p className="mb-4">
            Not all evidence is created equal. A corroborated signals intelligence intercept
            carries different weight than a single-source rumor from an untested informant. Source
            evaluation frameworks give you a systematic way to assess what your evidence is
            actually worth.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Admiralty (NATO) Rating System</h3>
          <p className="mb-4">
            The most widely used framework in Western intelligence is the Admiralty system (also
            called the NATO system), which evaluates two dimensions independently:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Source Reliability</p>
              <ul className="list-none space-y-1 text-slate-300 text-sm">
                <li><strong>A</strong> -- Completely reliable</li>
                <li><strong>B</strong> -- Usually reliable</li>
                <li><strong>C</strong> -- Fairly reliable</li>
                <li><strong>D</strong> -- Not usually reliable</li>
                <li><strong>E</strong> -- Unreliable</li>
                <li><strong>F</strong> -- Reliability cannot be judged</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Information Credibility</p>
              <ul className="list-none space-y-1 text-slate-300 text-sm">
                <li><strong>1</strong> -- Confirmed by other sources</li>
                <li><strong>2</strong> -- Probably true</li>
                <li><strong>3</strong> -- Possibly true</li>
                <li><strong>4</strong> -- Doubtful</li>
                <li><strong>5</strong> -- Improbable</li>
                <li><strong>6</strong> -- Truth cannot be judged</li>
              </ul>
            </div>
          </div>

          <p className="mb-4">
            A rating of <strong>A1</strong> means a completely reliable source providing confirmed
            information -- the gold standard. A rating of <strong>F6</strong> means you know nothing
            about the source and cannot verify the information -- proceed with extreme caution.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Beyond the Admiralty System</h3>
          <p className="mb-4">
            Some agencies use the <strong>CARI framework</strong> (Credibility, Accuracy,
            Reliability, and Integrity) or variations tailored to specific intelligence
            disciplines. The key principle is the same: never treat all sources as equal. A
            conclusion built on three E5 sources is not &quot;well corroborated&quot; -- it is three
            bad sources agreeing with each other.
          </p>

          <JokeAside>
            Three unreliable sources confirming each other is not corroboration. It is a book
            club for rumors.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 3: Facts vs Judgments ---- */}
        <DeepDive title="Distinguishing Facts from Judgments">
          <p className="mb-4">
            One of the most critical skills in evidence-based writing is clearly separating what
            you <strong>know</strong> from what you <strong>think</strong>. Facts are observable and
            verifiable. Judgments are analytical conclusions drawn from facts. Your reader must
            always be able to tell which is which.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Language of Facts vs. Judgments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">Fact</p>
              <p className="text-slate-300 text-sm italic">
                &quot;Satellite imagery from 12 March shows three mobile launchers at the eastern
                test facility.&quot;
              </p>
              <p className="text-xs text-cyan-400 mt-2">Observable, verifiable, sourced.</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Judgment</p>
              <p className="text-slate-300 text-sm italic">
                &quot;The presence of mobile launchers at the test facility indicates the regime
                is likely preparing for a missile test within 30 days.&quot;
              </p>
              <p className="text-xs text-amber-400 mt-2">Analytical conclusion with estimative language.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Dealing with Conflicting Evidence</h3>
          <p className="mb-4">
            Real intelligence rarely points in one direction. When evidence conflicts, you have
            three obligations:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Acknowledge the conflict openly.</strong> Do not cherry-pick the evidence
              that supports your preferred conclusion and ignore the rest.
            </li>
            <li>
              <strong>Explain why you weigh some evidence more heavily.</strong> Source reliability,
              recency, corroboration, and access all factor into this judgment.
            </li>
            <li>
              <strong>Present alternative interpretations.</strong> If the conflicting evidence
              supports a different conclusion, state it and explain why your primary assessment
              is stronger.
            </li>
          </ul>

          <ProTip>
            <p>
              Use explicit signpost language: &quot;The evidence indicates...&quot; for facts,
              &quot;We assess that...&quot; for judgments, and &quot;An alternative interpretation is...&quot;
              for competing hypotheses. This transparency builds trust with your reader.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 4: The Iraq WMD Lesson ---- */}
        <DeepDive title="The Iraq WMD Lesson: When Evidence Standards Fail">
          <p className="mb-4">
            No discussion of evidence-based intelligence is complete without acknowledging the
            most consequential evidence failure in modern intelligence history: the 2002 National
            Intelligence Estimate (NIE) on Iraq&apos;s weapons of mass destruction.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">What Went Wrong</h3>
          <p className="mb-4">
            The Iraq WMD case study is a textbook example of multiple evidence failures converging:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Source fabrication:</strong> Key intelligence came from &quot;Curveball,&quot; a
              single human source whose reporting was fabricated. His information was not
              independently verified before being used to support high-confidence judgments.
            </li>
            <li>
              <strong>Confirmation bias:</strong> Analysts interpreted ambiguous evidence in ways
              that confirmed the pre-existing assumption that Iraq possessed WMD, rather than
              considering alternative explanations.
            </li>
            <li>
              <strong>Groupthink:</strong> Dissenting views within the intelligence community were
              present but were marginalized in the final product rather than given appropriate
              weight.
            </li>
            <li>
              <strong>Analytical leaps:</strong> The gap between evidence and conclusion was
              bridged by assumption rather than data. &quot;We haven&apos;t found proof they
              destroyed their stockpiles&quot; became &quot;they still have stockpiles.&quot;
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">The Lasting Reforms</h3>
          <p className="mb-4">
            The Iraq WMD failure led to fundamental reforms in how the intelligence community
            handles evidence:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>Mandatory inclusion of confidence levels and sourcing transparency in NIEs.</li>
            <li>Formal requirements to present dissenting views and alternative analyses.</li>
            <li>Structured analytic techniques (SATs) to combat cognitive biases.</li>
            <li>The creation of the Office of the Director of National Intelligence (ODNI) to improve coordination.</li>
          </ul>

          <ProTip>
            <p>
              Treat every piece of evidence as if it will be scrutinized in a post-mortem
              investigation -- because someday it might be. Document your evidence trail, flag
              your assumptions, and make your confidence level explicit. Your future self (and
              your institution&apos;s credibility) will thank you.
            </p>
          </ProTip>
        </DeepDive>

        <Debrief
          takeaways={[
            "Every analytical judgment must be traceable through the evidence chain: raw data, processed information, analyzed evidence, and judgment.",
            "Use the Admiralty (NATO) rating system or equivalent to evaluate source reliability and information credibility independently.",
            "Clearly separate facts (observable and verifiable) from judgments (analytical conclusions) using explicit signpost language.",
            "When evidence conflicts, acknowledge it openly, explain your weighting, and present alternative interpretations.",
            "The Iraq WMD failure demonstrates what happens when evidence standards slip: fabricated sources, confirmation bias, and analytical leaps can have catastrophic consequences.",
            "Document everything as if it will be audited -- because the best intelligence cultures assume it will be.",
          ]}
          humorSummary="Evidence is like a parachute: if it is not there when you need it, you are in for a very bad day."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Sourcing and Attribution",
          description: "Learn how to properly cite and evaluate your sources.",
          path: "/topics/sourcing-and-attribution",
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
