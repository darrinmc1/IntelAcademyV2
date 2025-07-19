import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Creating Entity Relationship Charts | The Intel Analyst Academy",
  description: "Master techniques for building clear and effective link charts showing entities and connections.",
}

export default function EntityRelationshipChartsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst&apos;s Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Creating Entity Relationship Charts</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master the art of making boxes and lines tell stories that would make detective shows jealous.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst's Notebook - Creating Entities"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=181"
              duration="5:30"
              category="analyst-notebook"
              description="Learn how to create entities and build relationship charts in Analyst's Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Building Effective Entity Relationship Charts (Or: How to Make Your Boss Think You&apos;re a Genius)</h2>
            <p>
              Entity relationship charts are the foundation of visual analysis in Analyst&apos;s Notebook. These charts allow
              you to represent people, organizations, events, locations, and other entities as icons and the
              relationships between them as links—essentially turning your investigation into something that looks like
              it belongs on a conspiracy theorist&apos;s wall, but with better graphics.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 my-6">
              <h3 className="text-amber-800 font-medium mb-2">Entity Chart Truth #1</h3>
              <p className="text-amber-700 mb-0">
                The moment you present your chart is the exact moment someone will ask, &quot;But what about this connection
                you missed?&quot; Be prepared to smile through the pain.
              </p>
            </div>

            <h2>Key Skills Covered (That Will Make You Look Like a TV Detective)</h2>
            <ul>
              <li>
                <strong>Creating different types of entities</strong> - From &quot;Definitely Suspicious Person&quot; to &quot;Probably
                Innocent Bystander&quot;
              </li>
              <li>
                <strong>Adding properties and attributes</strong> - Because knowing someone&apos;s favorite ice cream flavor
                might be crucial to the case (but probably isn&apos;t)
              </li>
              <li>
                <strong>Creating links between entities</strong> - Drawing lines that say &quot;these two people definitely
                know each other&quot; based on one phone call three years ago
              </li>
              <li>
                <strong>Defining relationship types</strong> - Going beyond &quot;knows&quot; to the more specific &quot;owes money to&quot;
                or &quot;pretends not to recognize at parties&quot;
              </li>
              <li>
                <strong>Organizing and arranging your chart</strong> - The art of making your tangled web of connections
                look intentional and insightful
              </li>
              <li>
                <strong>Using the palette</strong> - Finding that one specific icon type that&apos;s hiding in a submenu of a
                submenu
              </li>
              <li>
                <strong>Customizing entity appearances</strong> - Making your chart colorful enough to be interesting
                but not so colorful it induces seizures
              </li>
            </ul>

            <h2>Best Practices (That Everyone Agrees With But Few Actually Follow)</h2>
            <p>
              When creating entity relationship charts, consistency is key. Use standard entity types and link types to
              ensure your charts are easily understood by others—or at least as easily understood as a complex network
              of criminal relationships can be.
            </p>
            <ul>
              <li>
                <strong>Use appropriate entity types</strong> - A person is a person, not a building. This seems obvious
                until you&apos;re 14 hours into chart creation.
              </li>
              <li>
                <strong>Label links clearly</strong> - &quot;Associated with&quot; is the analytical equivalent of shrugging your
                shoulders. Be specific!
              </li>
              <li>
                <strong>Include relevant attributes</strong> - But remember, not everything needs to be on the chart. No
                one needs to see a suspect&apos;s entire Netflix viewing history.
              </li>
              <li>
                <strong>Arrange entities logically</strong> - Your chart should not resemble a Jackson Pollock painting
                unless the case involves abstract expressionists.
              </li>
              <li>
                <strong>Use consistent styling</strong> - Pick a color scheme and stick with it. This isn't the time to
                express your artistic side.
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
              <h3 className="text-blue-800 font-medium mb-2">The Entity Chart Paradox</h3>
              <p className="text-blue-700 mb-0">
                A chart with too few entities looks incomplete. A chart with too many entities looks incomprehensible.
                The perfect chart exists in a quantum state between these two extremes that can never actually be
                achieved.
              </p>
            </div>

            <h2>Common Entity Chart Disasters (And How to Recover)</h2>
            <ul>
              <li>
                <strong>The &quot;Everything Is Connected to Everything&quot; Syndrome</strong> - When your chart has so many
                crossing lines it resembles a ball of yarn after a cat attack
              </li>
              <li>
                <strong>The &quot;Mystery Icon&quot; Problem</strong> - When you use a custom icon that made sense at 2 AM but is
                completely baffling in the morning
              </li>
              <li>
                <strong>The &quot;What Does This Link Mean Again?&quot; Dilemma</strong> - When you forgot to label a critical
                connection and now have to pretend you remember what it represents
              </li>
              <li>
                <strong>The &quot;My Chart Is Too Big for the Projector&quot; Crisis</strong> - When you have to zoom out so far
                that all your careful labeling becomes microscopic
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/entity-relationship-templates" className="text-primary hover:underline">
                    Entity Relationship Templates (For the Creatively Challenged)
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
                    <Link href="/topics/timeline-visualization" className="text-primary hover:underline">
                      Timeline Visualization (Time Is A Flat Circle, But Your Chart Shouldn&apos;t Be)
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-social-network-analysis" className="text-primary hover:underline">
                      Social Network Analysis (Finding the Popular Kids in Criminal Networks)
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
