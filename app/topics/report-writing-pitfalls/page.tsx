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
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Report Writing Pitfalls | The Intel Analyst Academy",
  description: "Learn about common mistakes in intelligence report writing and how to avoid them.",
}

export default function ReportWritingPitfallsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Report Writing Pitfalls"
        subtitle="How to Ensure Your Intelligence Reports Don't End Up as Coffee Coasters"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={13}
      >
        <MissionBriefing humorText="Your brilliant analysis deserves readers who are actually awake. Learn to craft reports that decision-makers actually want to read.">
          <p className="mb-4">
            In this mission, you'll explore the seven deadly sins of intelligence report writing, understand how to avoid them, and develop the skills to create reports that actually influence decisions instead of becoming classified coasters.
          </p>
        </MissionBriefing>

        <DeepDive title="The Art of Not Boring Your Readers to Death">
          <p className="mb-4">
            Welcome to the world of intelligence report writing, where your brilliant analysis can either shape national
            policy or become the world's most classified paper airplane. The difference often comes down to avoiding these
            common pitfalls that have been sending decision-makers into impromptu naps since intelligence reports were
            first invented.
          </p>

          <JokeAside>
            How can you tell if your intelligence report was actually read? The coffee stains will be on different
            pages.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #1: The "War and Peace" Syndrome</h3>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                You've spent months researching, so naturally your report should be longer than the tax code, right?
                Wrong. Decision-makers often have minutes, not hours, to absorb your insights.
              </p>
              <p className="mb-4">
                <strong>The Problem:</strong> Excessive length, unnecessary details, and burying the lead under 17 pages
                of background information. Your reader shouldn't need to pack provisions to make it through your executive
                summary.
              </p>
              <p className="mb-4">
                <strong>The Solution:</strong> Be ruthlessly concise. If Hemingway could tell a story in six words ("For
                sale: baby shoes, never worn"), you can summarize the terrorist threat in under five pages.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Stack of lengthy reports"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #2: Jargon Jungle</h3>

          <p className="mb-4">
            Intelligence professionals love acronyms and specialized terminology more than teenagers love texting
            abbreviations. But unlike teenagers, your audience isn't impressed by your ability to create sentences that
            contain more letters than words.
          </p>

          <ProTip>
            <p className="mb-2">
              "The DCINOTAM indicated SIGINT from FVEY re: DPRK ICBM TELs suggests imminent SLBM test in SCS AOO."
            </p>
            <p>
              Translation for humans: "North Korea is probably about to test a missile in the South China Sea."
            </p>
          </ProTip>

          <p className="mb-4">
            <strong>The Problem:</strong> Excessive jargon, unexplained acronyms, and intelligence-speak that requires a
            specialized dictionary to decipher. Your report shouldn't read like you're being paid by the acronym.
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Write for your audience, not your colleagues. Define terms, limit acronyms, and
            remember that clarity trumps sounding smart. If your grandmother couldn't understand the main points, you've
            gone too far into the jargon jungle.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #3: The Commitment-Phobic Analysis</h3>

          <p className="mb-4">
            Some intelligence reports are so hedged they make weather forecasts look definitive. "It might possibly be
            somewhat likely that under certain conditions, if specific factors align, there could potentially be a chance
            that something may or may not occur at some point in the future, perhaps."
          </p>

          <JokeAside>
            Intelligence analyst's fortune cookie: "You will make a decision. Or not. Results unclear. Ask again later."
          </JokeAside>

          <p className="mb-4">
            <strong>The Problem:</strong> Excessive hedging, refusing to commit to assessments, and burying conclusions in
            so many caveats that they become meaningless. Your job is to reduce uncertainty, not manufacture it.
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Use clear estimative language, be transparent about confidence levels, and
            don't be afraid to make assessments. "Medium confidence that X will occur" is infinitely more useful than "X
            might occur but also might not occur depending on numerous factors."
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #4: The Data Dump</h3>

          <p className="mb-4">
            You've collected mountains of information, and by golly, you're going to include ALL of it. Your report reads
            like you're being paid by the footnote, with more raw data than analysis.
          </p>

          <p className="mb-4">
            <strong>The Problem:</strong> Confusing information with intelligence, providing raw data without meaningful
            analysis, and forcing the reader to draw their own conclusions. If your reader wanted raw data, they'd look at
            the source material themselves.
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Remember that your value is in analysis, not data collection. Be selective with
            evidence, focus on what matters, and transform information into intelligence through thoughtful analysis. Your
            job is to make sense of the data, not just regurgitate it.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #5: The "So What?" Report</h3>

          <p className="mb-4">
            You've written a technically perfect report that fails to answer the most important question: "So what?" Your
            analysis of submarine deployments is fascinating, but you never explain why anyone should care.
          </p>

          <p className="mb-4">
            <strong>The Problem:</strong> Failing to explain implications, not connecting analysis to decision-maker
            interests, and missing the "why it matters" component. Your report answers "what" but not "so what."
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Always include implications and relevance to your audience. Explicitly state
            why they should care and how this intelligence affects their decisions. The best analysis in the world is
            useless if no one understands why it matters.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #6: The Time Capsule</h3>

          <p className="mb-4">
            Your report would have been incredibly useful... three weeks ago when the information was still relevant. Now
            it's about as timely as last year's weather forecast.
          </p>

          <JokeAside>
            Intelligence report dated June 5, 1944: "There are indications that Allied forces might be planning
            something in Northern France. Further analysis required."
          </JokeAside>

          <p className="mb-4">
            <strong>The Problem:</strong> Delayed reporting, perfectionism that prevents timely dissemination, and failing
            to understand that "good enough now" beats "perfect too late."
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Prioritize timeliness, use iterative reporting for urgent matters, and remember
            that intelligence has an expiration date. The most brilliant analysis in the world is worthless if it arrives
            after the decision has been made.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Pitfall #7: The Echo Chamber</h3>

          <p className="mb-4">
            Your report simply repeats conventional wisdom or existing assessments without adding new insights. It's the
            intelligence equivalent of a cover band—technically correct but not bringing anything new to the table.
          </p>

          <p className="mb-4">
            <strong>The Problem:</strong> Failing to challenge assumptions, not considering alternative hypotheses, and
            simply echoing existing views. Your report should add value, not just volume.
          </p>

          <p className="mb-4">
            <strong>The Solution:</strong> Always ask "what am I missing?" Consider alternative explanations, challenge
            consensus when evidence warrants, and don't be afraid to present new perspectives. Your job is to think
            critically, not to reinforce groupthink.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-2">The Analyst's Report Writing Checklist:</h4>
            <p className="mb-4">Before submitting your report, ask yourself:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Is it concise? (If your executive summary has an executive summary, you've gone too far.)</li>
              <li>Is it clear? (Could a non-specialist understand the main points?)</li>
              <li>Does it make clear assessments? (Have you actually said something definitive?)</li>
              <li>Does it explain why it matters? (Have you answered "so what?")</li>
              <li>Is it timely? (Will the information still be relevant when it reaches the reader?)</li>
              <li>Does it add value? (Are you contributing new insights or just repeating what's already known?)</li>
              <li>
                Have you spell-checked it? (Nothing undermines credibility faster than confusing "their," "there," and
                "they're.")
              </li>
            </ol>
          </div>
        </DeepDive>

        <DeepDive title="Conclusion: Reports That Actually Get Read">

          <p className="mb-4">
            The best intelligence in the world is useless if it's not communicated effectively. By avoiding these common
            pitfalls, you can ensure your reports actually influence decisions rather than collecting dust or becoming
            impromptu coffee coasters.
          </p>

          <p className="mb-4">
            Remember, your goal is not just to be right—it's to be read, understood, and acted upon. Write reports that
            decision-makers want to read, not reports they feel obligated to skim.
          </p>

          <JokeAside>
            The perfect intelligence report is like a unicorn: everyone has heard of it, but no one has actually seen
            one. But with these tips, you might just create a horse with a party hat—and sometimes, that's close enough.
          </JokeAside>
        </DeepDive>

        <Debrief
          takeaways={[
            "Conciseness matters more than comprehensiveness—decision-makers have minutes, not hours",
            "Clarity trumps sounding smart—define terms, limit jargon, and write for your audience",
            "Make clear assessments using confident estimative language instead of excessive hedging",
            "Transform data into intelligence through analysis, not by dumping raw information",
            "Always explain implications and why decision-makers should care about your analysis",
            "Prioritize timeliness—good enough now beats perfect too late",
            "Add value by challenging consensus and offering new perspectives, not just echoing existing views",
          ]}
          humorSummary="Your report isn't a test of how much you know—it's a communication tool. Success isn't measured by how long it is, but by whether the decision-maker actually reads it and acts on it. Remember: the best report is the one that doesn't become a coffee coaster."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Executive Summaries",
          description: "Craft compelling summaries that capture attention",
          path: "/topics/executive-summaries",
        }}
        moreLearning={{
          title: "Confidence Levels in Reporting",
          description: "How to effectively communicate certainty in your assessments",
          path: "/topics/confidence-levels",
        }}
        advancedLearning={{
          title: "Visual Aids in Intelligence",
          description: "Using graphics to enhance understanding",
          path: "/topics/visual-aids",
        }}
      />
    </LessonContainer>
  )
}
