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
  title: "Components of a Basic Intelligence Report | The Intel Analyst Academy",
  description:
    "Master the standard sections of an intelligence report -- from executive summary to appendices -- and learn how each component serves the reader.",
}

export default function IntelligenceReportComponentsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Components of a Basic Intelligence Report"
        subtitle="The Anatomy of an Intelligence Product, Dissected Without Anesthesia"
        category="Report Writing"
        difficulty="Beginner"
        mascot="report-writing"
        readTime={16}
      >
        <MissionBriefing humorText="Think of a report like a sandwich. Nobody wants to find the lettuce where the meat should be. Structure matters.">
          <p className="mb-4">
            A standardized report structure is not bureaucratic busywork -- it is a contract with your reader.
            Decision-makers who receive dozens of reports a day rely on predictable formats to find the
            information they need fast. This lesson breaks down each standard component, explains its purpose,
            walks through common mistakes, and shows how the pieces work together to create a coherent
            intelligence product.
          </p>
        </MissionBriefing>

        <DeepDive title="Executive Summary and Key Judgments">
          <p className="mb-4">
            These two sections are the most important real estate in your entire report. If your consumer reads
            nothing else, they will read these. Treat them accordingly.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">The Executive Summary</h3>
          <p className="mb-4">
            The executive summary is a <strong>standalone miniature</strong> of your entire report. It should
            contain the bottom line, the key supporting evidence, and the primary implications -- all in
            roughly one-half to one full page. A senior leader should be able to read the executive summary,
            skip the rest, and still walk into a meeting with a sound understanding of the issue.
          </p>
          <p className="mb-4">
            <strong>Purpose:</strong> Give the busiest people in the building everything they need in 60 seconds.
          </p>
          <p className="mb-4">
            <strong>Common mistake:</strong> Writing the executive summary as a vague teaser (&quot;This report
            examines the growing threat of...&quot;) instead of leading with the conclusion (&quot;We assess
            with high confidence that the threat has increased by 40% since January because...&quot;).
          </p>

          <ProTip>
            <p>
              Write your executive summary <strong>last</strong>, even though it appears first. You cannot
              summarize what you have not yet fully analyzed. Draft a placeholder, write the full report,
              then come back and distill.
            </p>
          </ProTip>

          <h3 className="text-lg font-bold mb-3 mt-6">Key Judgments</h3>
          <p className="mb-4">
            Key judgments are your analytical conclusions stated as clear, declarative sentences with
            associated confidence levels. They are not summaries of facts -- they are <strong>assessments</strong>.
            Each key judgment should be something the reader could disagree with, because if it is merely
            a statement of undisputed fact, it does not need to be a judgment.
          </p>
          <p className="mb-4">
            <strong>Good example:</strong> &quot;We assess with moderate confidence that Country X will conduct
            a nuclear test within the next six months, driven by domestic political pressure and the
            completion of key technical milestones.&quot;
          </p>
          <p className="mb-4">
            <strong>Bad example:</strong> &quot;Country X has a nuclear program.&quot; (This is a fact, not a judgment.)
          </p>

          <JokeAside>
            Key judgments are like movie trailers: they should tell you exactly what to expect without making
            you sit through the whole thing. Unlike movie trailers, they should not be misleading.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Background and Context">
          <p className="mb-4">
            The background section answers the question: &quot;What does the reader need to know to understand
            this analysis?&quot; It provides historical context, relevant previous reporting, and the
            foundational facts that set the stage for your analytical sections.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">What to Include</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Relevant history:</strong> Key events, trends, or decisions that led to the current situation.</li>
            <li><strong>Previous assessments:</strong> What has the intelligence community said about this before? Has the situation changed?</li>
            <li><strong>Definitions and scope:</strong> If you are using terms the reader might not know, define them here.</li>
            <li><strong>Geographic or organizational context:</strong> Maps, org charts, or relationship diagrams that orient the reader.</li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">What to Leave Out</h3>
          <p className="mb-4">
            Background is not a history textbook. Include only what is necessary to understand the current
            analysis. If the reader needs to go back to 1947 to understand your assessment of a 2026
            cyber threat, you are probably including too much. A good rule of thumb: if removing a background
            paragraph does not diminish the reader&apos;s understanding of your analysis, cut it.
          </p>

          <ProTip>
            <p>
              For recurring products (weekly updates, periodic assessments), keep the background section
              short and reference previous reports rather than repeating context. Your regular readers
              already have that foundation.
            </p>
          </ProTip>

          <p className="mb-4">
            <strong>Common mistake:</strong> Using the background section as a dumping ground for all the
            research you did that did not fit anywhere else. If it does not directly support the analysis
            that follows, it belongs in an appendix -- or nowhere.
          </p>
        </DeepDive>

        <DeepDive title="The Analysis Section: Where the Real Work Lives">
          <p className="mb-4">
            This is the main body -- the engine room of your report. Here you present your evidence, explain
            your reasoning, and build the case for your key judgments. Everything before this section sets
            the stage; everything after it draws conclusions from it.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Structure Within the Analysis</h3>
          <p className="mb-4">
            The analysis section itself needs internal organization. Common approaches include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Thematic:</strong> Organized by topic (political factors, military factors, economic factors).</li>
            <li><strong>Chronological:</strong> Following events in time sequence.</li>
            <li><strong>Problem-solution:</strong> Identifying challenges and assessing responses.</li>
            <li><strong>Argument-evidence:</strong> Stating a judgment, then presenting the evidence that supports it.</li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">The Evidence-Assessment Balance</h3>
          <p className="mb-4">
            A common trap is presenting pages of evidence without analysis, forcing the reader to draw their
            own conclusions. The opposite trap is making bold assessments without showing your work. The
            sweet spot is a clear pattern: <strong>evidence, then assessment, then implication</strong>,
            repeated for each major point.
          </p>

          <JokeAside>
            The analysis section is where you prove you are not just a very expensive search engine. Anyone
            can find information. You are paid to make sense of it.
          </JokeAside>

          <p className="mb-4">
            <strong>Common mistake:</strong> Burying the analytical point at the end of a long paragraph of
            evidence. Lead with the assessment, then support it. The reader should never have to hunt for
            your conclusion.
          </p>
        </DeepDive>

        <DeepDive title="Outlook, Implications, and Appendices">
          <h3 className="text-lg font-bold mb-3 mt-6">Outlook / Implications</h3>
          <p className="mb-4">
            This section answers the most important question your consumer has: <strong>&quot;What happens
            next, and what does it mean for me?&quot;</strong> It projects forward from your analysis,
            identifies likely scenarios, and connects your findings to the decisions your consumer faces.
          </p>
          <p className="mb-4">
            Good outlook sections present a range of possibilities with associated likelihoods, not just
            a single prediction. They also identify indicators the consumer should watch for -- signposts
            that would indicate which scenario is unfolding.
          </p>
          <p className="mb-4">
            <strong>Example:</strong> &quot;If the government proceeds with the proposed reforms (which we
            assess as likely), expect moderate protests in the capital within two weeks. If it reverses
            course (less likely), opposition groups will likely interpret this as weakness and escalate
            demands.&quot;
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Appendices and Annexes</h3>
          <p className="mb-4">
            Appendices are where you put the material that supports your analysis but would clutter the
            main narrative: detailed data tables, full source citations, technical methodology notes,
            extended timelines, biographical sketches, or large-format maps.
          </p>
          <p className="mb-4">
            The key principle: <strong>appendices should be referenced from the main text</strong>. An
            appendix that nobody knows exists is an appendix that does not exist. Use clear cross-references
            (&quot;See Appendix B for the full timeline&quot;) so readers know where to find supporting detail.
          </p>

          <ProTip>
            <p>
              Think of your report components as a pyramid. The executive summary is the tip -- sharp and
              visible. Key judgments, background, and analysis form the body. Appendices are the broad base
              that supports everything above. Each layer serves a different reader with a different amount
              of time.
            </p>
          </ProTip>

          <h3 className="text-lg font-bold mb-3 mt-6">How the Components Work Together</h3>
          <p className="mb-4">
            No component exists in isolation. The executive summary distills the key judgments. The key
            judgments are supported by the analysis. The analysis builds on the background. The outlook
            projects from the analysis. The appendices provide depth for anyone who wants to verify
            the evidence. When all components align, the reader experiences a seamless flow from
            &quot;what do I need to know?&quot; to &quot;what should I do about it?&quot;
          </p>
          <p className="mb-4">
            When they do not align -- when the executive summary promises something the analysis does
            not deliver, or the key judgments contradict the outlook -- the reader loses trust. Internal
            consistency is not optional.
          </p>
        </DeepDive>

        <Debrief
          takeaways={[
            "The executive summary is a standalone product -- a busy leader should be able to act on it alone",
            "Key judgments are assessments with confidence levels, not restatements of facts",
            "Background provides only the context necessary to understand the analysis; everything else goes in an appendix",
            "The analysis section should follow an evidence-assessment-implication pattern, not bury conclusions",
            "The outlook section projects forward and connects findings to the consumer's decisions",
            "Internal consistency across all components is what builds reader trust",
          ]}
          humorSummary="Your report is a well-organized house: executive summary is the curb appeal, key judgments are the foundation, analysis is the load-bearing walls, and appendices are the basement full of stuff nobody looks at unless there's a leak."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Main Body Organization",
          description: "Learn how to structure the analysis section for maximum clarity",
          path: "/topics/main-body-organization",
        }}
        moreLearning={{
          title: "Report Fundamentals",
          description: "Dive deeper into the core principles of effective intelligence reporting",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Executive Summaries",
          description: "Master the art of the one-page distillation",
          path: "/topics/writing-executive-summaries",
        }}
      />
    </LessonContainer>
  )
}
