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
  title: "Main Body Organization | The Intel Analyst Academy",
  description:
    "Learn how to structure the main body of your intelligence reports using chronological, thematic, geographical, and other frameworks.",
}

export default function MainBodyOrganizationPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Main Body Organization"
        subtitle="Structuring Your Analysis So the Reader Doesn't Need a Machete to Find Your Point"
        category="Report Writing"
        difficulty="Intermediate"
        mascot="report-writing"
        readTime={17}
      >
        <MissionBriefing humorText="An unorganized report is like a jigsaw puzzle dumped on someone's desk. Technically, all the pieces are there. Good luck.">
          <p className="mb-4">
            The main body is where your analysis lives or dies. You can nail the executive summary and
            craft perfect key judgments, but if the main body is a disorganized wall of text, your reader
            will lose confidence in your thinking -- even if the thinking is brilliant. This lesson covers
            the four primary organizational structures, when to use each one, how to handle hybrid
            approaches, and the paragraph-level techniques that keep your prose sharp and navigable.
          </p>
        </MissionBriefing>

        <DeepDive title="The Four Primary Organizational Structures">
          <p className="mb-4">
            Before you write a single paragraph of analysis, you need to decide on a structure. The
            structure you choose should be driven by <strong>the nature of your topic and the needs of
            your reader</strong>, not by personal preference or habit.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">1. Chronological</h3>
          <p className="mb-4">
            Presents events in the order they occurred. This is the most intuitive structure for narrative
            accounts and is particularly effective when the <strong>sequence of events is itself
            analytically significant</strong> -- when understanding the order helps the reader understand
            causation.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Post-incident analyses, escalation timelines, historical case
            studies, tracking how a situation evolved.
          </p>
          <p className="mb-4">
            <strong>Pitfall:</strong> Chronological structure can encourage &quot;and then... and then...&quot;
            writing that describes events without analyzing them. Always pair the timeline with analytical
            commentary explaining <em>why</em> each development matters.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">2. Thematic</h3>
          <p className="mb-4">
            Organizes information by topic, factor, or analytical dimension. This is the most versatile
            structure and is the default choice for complex subjects that have multiple distinct facets.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Multi-factor assessments (political, military, economic, social),
            capability analyses, comparative studies, any topic where distinct threads need separate
            treatment.
          </p>
          <p className="mb-4">
            <strong>Pitfall:</strong> Thematic organization can create artificial silos. If political
            factors are deeply intertwined with economic ones, separating them into different sections
            may obscure the connections. Use cross-references to bridge themes.
          </p>

          <JokeAside>
            Choosing between chronological and thematic is like choosing between telling a story from the
            beginning or explaining a concept from the outside in. Either works -- but doing both at once
            just confuses everyone.
          </JokeAside>

          <h3 className="text-lg font-bold mb-3 mt-6">3. Geographical</h3>
          <p className="mb-4">
            Arranges analysis by location, region, or area of operations. This is natural for topics where
            the situation varies significantly across different areas and the reader needs to understand
            each area&apos;s dynamics separately.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Theater-wide assessments, regional stability reports, assessments of
            geographically dispersed networks, any topic where &quot;where&quot; is the primary variable.
          </p>
          <p className="mb-4">
            <strong>Pitfall:</strong> Geographic organization can miss cross-regional trends. A threat
            that manifests in three different provinces may look like three separate issues when it is
            actually one coordinated campaign. Always include a synthesis section that looks across regions.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">4. By Source or Intelligence Discipline</h3>
          <p className="mb-4">
            Groups information by the collection discipline that produced it (HUMINT, SIGINT, OSINT,
            GEOINT, etc.). This structure is uncommon in finished intelligence but is useful in specific
            contexts.
          </p>
          <p className="mb-4">
            <strong>Best for:</strong> Source reliability assessments, collection gap analyses, methodological
            reviews, and situations where the reader specifically needs to understand what each discipline
            is contributing.
          </p>
          <p className="mb-4">
            <strong>Pitfall:</strong> This structure can make your report read like a collection summary
            rather than finished analysis. For most products, integrate sources within an analytical
            framework rather than organizing around them.
          </p>

          <ProTip>
            <p>
              When in doubt, default to thematic. It is the most flexible structure and works for the widest
              range of topics. Reserve chronological for event-driven analyses, geographical for
              area-specific assessments, and source-based for collection-focused products.
            </p>
          </ProTip>
        </DeepDive>

        <DeepDive title="Hybrid Approaches and the Inverted Pyramid">
          <p className="mb-4">
            Real-world reports rarely use a single pure structure. Most effective products use a
            <strong> hybrid approach</strong> -- thematic at the top level, with chronological sub-sections
            within individual themes, for example.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">Common Hybrid Patterns</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Thematic + Chronological:</strong> Organize by theme (military, political, economic),
              then within each theme, present developments in time order.
            </li>
            <li>
              <strong>Geographic + Thematic:</strong> Organize by region, then within each region, break
              out by factor (security, governance, humanitarian).
            </li>
            <li>
              <strong>Chronological + Thematic synthesis:</strong> Walk through events in order, then
              conclude with a thematic analysis of what the pattern means.
            </li>
          </ul>

          <h3 className="text-lg font-bold mb-3 mt-6">The Inverted Pyramid</h3>
          <p className="mb-4">
            Borrowed from journalism, the inverted pyramid principle says: <strong>put the most important
            information first</strong>. This applies at every level of your report -- the document level,
            the section level, and the paragraph level. If a reader stops reading at any point, they
            should have already received the most important information available up to that point.
          </p>
          <p className="mb-4">
            In practice, this means:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The executive summary contains the most critical findings.</li>
            <li>Each section opens with its key point before diving into supporting detail.</li>
            <li>Each paragraph leads with its analytical contribution, not with background or evidence.</li>
          </ul>

          <JokeAside>
            The inverted pyramid: the only architectural concept where the most important part is at the top
            and the foundation is at the bottom. Engineers hate it. Readers love it.
          </JokeAside>
        </DeepDive>

        <DeepDive title="Paragraph Structure and Transition Techniques">
          <p className="mb-4">
            Organization is not just about choosing between chronological and thematic. It extends down to
            the <strong>paragraph level</strong>, where small structural choices make the difference between
            prose that flows and prose that jolts the reader from thought to thought.
          </p>

          <h3 className="text-lg font-bold mb-3 mt-6">The Analytical Paragraph</h3>
          <p className="mb-4">
            Every paragraph in the analysis section should follow a consistent internal pattern:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Topic sentence:</strong> States the paragraph&apos;s analytical point.</li>
            <li><strong>Evidence:</strong> Presents the supporting information (with sourcing).</li>
            <li><strong>Analysis:</strong> Explains what the evidence means and why it matters.</li>
            <li><strong>Transition:</strong> Connects to the next paragraph&apos;s point.</li>
          </ul>
          <p className="mb-4">
            <strong>Before (weak):</strong> &quot;On March 3, satellite imagery showed increased vehicle
            traffic at the facility. On March 5, a human source reported unusual activity. On March 7,
            signals intelligence detected test-related communications. This suggests preparations for
            a test.&quot;
          </p>
          <p className="mb-4">
            <strong>After (strong):</strong> &quot;Multiple sources indicate the facility is preparing for a
            test. Satellite imagery from March 3 shows increased vehicle traffic consistent with
            pre-test logistics, corroborated by a human source reporting unusual activity on March 5 and
            signals intelligence detecting test-related communications on March 7. The convergence of
            these indicators across three independent disciplines increases our confidence in this
            assessment.&quot;
          </p>

          <ProTip>
            <p>
              Read your analysis section with only the topic sentences of each paragraph. If those sentences
              alone tell a coherent story, your structure is working. If they jump erratically or repeat,
              you need to reorganize.
            </p>
          </ProTip>

          <h3 className="text-lg font-bold mb-3 mt-6">Transition Techniques</h3>
          <p className="mb-4">
            Smooth transitions between paragraphs and sections help the reader follow your logical flow.
            Useful techniques include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Linking phrases:</strong> &quot;This military buildup has economic consequences as well...&quot;</li>
            <li><strong>Contrast signals:</strong> &quot;While the northern region has stabilized, the south presents a different picture...&quot;</li>
            <li><strong>Causal bridges:</strong> &quot;The diplomatic breakdown in January directly contributed to the escalation seen in March...&quot;</li>
            <li><strong>Signposting:</strong> &quot;Having examined the political factors, we now turn to the military dimensions...&quot;</li>
          </ul>

          <p className="mb-4">
            Avoid abrupt topic changes without transitions. If the reader feels a &quot;wait, why are we
            talking about this now?&quot; reaction, you have skipped a transition.
          </p>
        </DeepDive>

        <Debrief
          takeaways={[
            "Choose your organizational structure based on the topic and audience, not personal habit",
            "Chronological works for event-driven analysis; thematic is the most versatile default choice",
            "Geographic structure needs a cross-regional synthesis to avoid missing coordinated patterns",
            "Hybrid approaches are the norm -- use thematic at the top level with other structures nested within",
            "The inverted pyramid principle applies at every level: document, section, and paragraph",
            "Strong paragraphs follow a topic-evidence-analysis-transition pattern that makes your reasoning transparent",
          ]}
          humorSummary="Organizing a report is like organizing a closet. You can sort by color, by season, by occasion, or by how much you paid for it. Just pick a system and stick with it, or you'll end up wearing mismatched socks to the briefing."
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Conclusion Development",
          description: "Learn how to write strong, well-supported analytical conclusions",
          path: "/topics/conclusion-development",
        }}
        moreLearning={{
          title: "Report Fundamentals",
          description: "Dive deeper into the core principles of effective intelligence reporting",
          path: "/topics/intelligence-report-fundamentals",
        }}
        advancedLearning={{
          title: "Report Components",
          description: "Understand how all the sections of a report work together",
          path: "/topics/intelligence-report-components",
        }}
      />
    </LessonContainer>
  )
}
