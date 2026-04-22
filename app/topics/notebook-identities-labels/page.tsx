import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Identities and Labels in Analyst&apos;s Notebook | The Intel Analyst Academy",
  description:
    "Learn how to use identity and label item properties in i2 Analyst&apos;s Notebook for effective chart creation.",
}

export default function NotebookIdentitiesLabelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst&apos;s Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Identities and Labels in Analyst&apos;s Notebook</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master the fundamental concepts of identities and labels for effective chart creation and analysis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst&apos;s Notebook - Identities and Labels"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=0"
              duration="6:15"
              category="analyst-notebook"
              description="Learn how to use identity and label item properties in i2 Analyst&apos;s Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Understanding Identities and Labels</h2>
            <p>
              Identities and labels are fundamental components in i2 Analyst&apos;s Notebook. They provide the foundation for
              creating meaningful visualizations and conducting effective analysis.
            </p>

            <h3>Identities in Analyst&apos;s Notebook</h3>
            <p>
              An identity in Analyst&apos;s Notebook is a unique identifier for an entity or link. Identities serve several
              important purposes:
            </p>
            <ul>
              <li>They uniquely identify each item on your chart</li>
              <li>They allow the software to recognize when two items represent the same real-world entity</li>
              <li>They enable merging of duplicate entities during data import</li>
              <li>They support matching operations across different charts</li>
            </ul>

            <p>
              When creating entities manually, you&apos;ll assign identities through the entity properties. When importing
              data, identities are typically mapped from a unique field in your dataset.
            </p>

            <h3>Labels in Analyst&apos;s Notebook</h3>
            <p>
              Labels are the visible text that appears on your chart items. Effective labeling is crucial for chart
              readability and analysis:
            </p>
            <ul>
              <li>Labels provide context and meaning to the visual elements</li>
              <li>They can display key attributes of an entity or relationship</li>
              <li>They can be formatted to highlight important information</li>
              <li>They support search operations within your chart</li>
            </ul>

            <p>
              Analyst&apos;s Notebook provides flexible options for configuring labels, including multi-line labels, custom
              formatting, and conditional display based on attributes.
            </p>

            <h2>Best Practices for Identities and Labels</h2>
            <p>Consider these best practices when working with identities and labels in your charts:</p>
            <ul>
              <li>Use consistent naming conventions for identities</li>
              <li>Include sufficient detail in labels to make entities distinguishable</li>
              <li>Keep labels concise to avoid visual clutter</li>
              <li>Use formatting (bold, color, etc.) sparingly to highlight key information</li>
              <li>Consider using multi-line labels to organize information logically</li>
              <li>Ensure that identity fields are properly mapped during data imports</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Related Topics</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/topics/notebook-creating-chart" className="text-primary hover:underline">
                    Creating a Chart
                  </Link>
                </li>
                <li>
                  <Link href="/topics/notebook-editing-items" className="text-primary hover:underline">
                    Editing Chart Items
                  </Link>
                </li>
                <li>
                  <Link href="/topics/entity-relationship-charts" className="text-primary hover:underline">
                    Creating Entity Relationship Charts
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/notebook-creating-chart" className="text-primary hover:underline">
                      Creating a Chart
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-example-materials" className="text-primary hover:underline">
                      Example Materials in Analyst's Notebook
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
