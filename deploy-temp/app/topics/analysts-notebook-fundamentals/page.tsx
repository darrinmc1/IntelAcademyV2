import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsNextCompact } from "@/components/whats-next-compact"

export const metadata: Metadata = {
  title: "Analyst&apos;s Notebook Fundamentals | The Intel Analyst Academy",
  description:"Learn the core interface, features, and capabilities of IBM i2 Analyst&apos;s Notebook.",
}

export default function AnalystsNotebookFundamentalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst&apos;s Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Analyst&apos;s Notebook Fundamentals</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Where intelligence analysts pretend to be CSI detectives with fancy software instead of sunglasses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst&apos;s Notebook - Introduction"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk"
              duration="3:01"
              category="analyst-notebook"
              description="An introduction to the i2 Analyst&apos;s Notebook software and what you&apos;ll learn in this series."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Overview: The Software That Makes You Look Like You Know What You&apos;re Doing</h2>
            <p>
              IBM i2 Analyst&apos;s Notebook is the intelligence community&apos;s answer to &quot;how can we make connecting dots look
              really impressive?&quot; It&apos;s a powerful visual intelligence analysis tool that helps analysts discover
              patterns, connections, and insights in complex data—and makes your investigation board look way more
              professional than red string and thumbtacks.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 my-6">
              <h3 className="text-amber-800 font-medium mb-2">Analyst&apos;s Notebook Truth #1</h3>
              <p className="text-amber-700 mb-0">
                The more complex your chart looks, the less likely anyone will question your conclusions. This is both a
                feature and a danger.
              </p>
            </div>

            <h2>Key Concepts (Or: How to Speak Notebook Without Sounding Like a Newbie)</h2>
            <p>
              Analyst&apos;s Notebook uses a visual approach to intelligence analysis, allowing you to represent entities
              (people, places, events, etc.) as icons and the relationships between them as links. This visual
              representation helps identify patterns and connections that might be missed in textual or tabular data—or
              as we like to call it, &quot;finding needles in haystacks without getting hay fever.&quot;
            </p>

            <h2>The Analyst&apos;s Notebook Interface: Where Buttons Go to Hide</h2>
            <p>
              Upon opening Analyst&apos;s Notebook for the first time, you&apos;ll be greeted by approximately 17,000 buttons,
              menus, and options. Don&apos;t panic—this is normal. By the end of your career, you might understand what 60%
              of them do.
            </p>

            <ul>
              <li>
                <strong>The Ribbon</strong> - Like Microsoft Office, but with more ways to visualize criminal networks
              </li>
              <li>
                <strong>The Chart Surface</strong> - Your digital canvas where you'll create intelligence masterpieces
                (or, more likely, a tangled web that somehow makes sense to only you)
              </li>
              <li>
                <strong>The Palette</strong> - Home to all the entity types you'll need, from "Suspicious Person" to
                "Vehicle That Was Definitely There But No One Got The License Plate"
              </li>
              <li>
                <strong>The Analyst's Notebook Graveyard</strong> - The bottom right corner where features go to die,
                never to be clicked on by anyone
              </li>
            </ul>

            <h2>Things You'll Learn to Create (Besides Eye Strain)</h2>
            <ul>
              <li>
                <strong>Link Charts</strong> - Visual representations of relationships that will make you feel like a
                detective in a TV show
              </li>
              <li>
                <strong>Timeline Charts</strong> - For when you need to prove that Suspect A couldn't have been in two
                places at once (unless they have a twin, which always complicates things)
              </li>
              <li>
                <strong>Transaction Patterns</strong> - Follow the money, because criminals are bad at many things, but
                especially accounting
              </li>
              <li>
                <strong>Social Network Analysis</strong> - Discover who's the Kevin Bacon of your criminal network
                (everyone is six degrees or fewer from Kevin Bacon, even criminals)
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
              <h3 className="text-blue-800 font-medium mb-2">Pro Tip</h3>
              <p className="text-blue-700 mb-0">
                Save your work every 10 minutes. Analyst's Notebook crashes are like tax audits—not a matter of if, but
                when.
              </p>
            </div>

            <h2>Common Rookie Mistakes (That You'll Make Anyway)</h2>
            <ul>
              <li>
                <strong>The "My Chart Looks Like a Plate of Spaghetti"</strong> - When you've added so many entities and
                links that your analysis resembles an Italian dinner
              </li>
              <li>
                <strong>The "Where Did That Icon Go?"</strong> - The frustrating game of hide-and-seek with entities
                that somehow migrated off-screen
              </li>
              <li>
                <strong>The "I Forgot to Save" Tragedy</strong> - Followed by the five stages of grief, ending with
                reluctant acceptance as you start over
              </li>
              <li>
                <strong>The "Accidental Delete" Panic</strong> - That moment of horror when you realize you just deleted
                three hours of work with one misclick
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium">Analyst&apos;s Notebook Fundamentals</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.ibm.com/docs/en/analysts-notebook/latest"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IBM i2 Analyst's Notebook Documentation (Insomnia Cure)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/analysts-notebook-templates" className="text-primary hover:underline">
                    Analyst's Notebook Templates (So You Don't Start From Scratch)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/chart-style-guide" className="text-primary hover:underline">
                    Chart Style Guide (Making Your Analysis Pretty AND Functional)
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/entity-relationship-charts" className="text-primary hover:underline">
                      Creating Entity Relationship Charts (Connect ALL the Dots!)
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/timeline-visualization" className="text-primary hover:underline">
                      Timeline Visualization (Time Is A Flat Circle, But Your Chart Shouldn't Be)
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What's Next Section */}
      <WhatsNextCompact
        anotherTopic={{
          title: "Entity Relationship Charts",
          description: "Learn how to create and analyze entity relationship charts in Analyst's Notebook",
          path: "/topics/entity-relationship-charts",
        }}
        moreLearning={{
          title: "Timeline Visualization",
          description: "Master timeline visualization techniques for temporal analysis",
          path: "/topics/timeline-visualization",
        }}
        advancedLearning={{
          title: "Social Network Analysis",
          description: "Apply advanced social network analysis techniques using Analyst's Notebook",
          path: "/topics/notebook-social-network-analysis",
        }}
      />
    </div>
  )
}
