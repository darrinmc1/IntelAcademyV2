import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Creating a Chart in Analyst's Notebook | The Intel Analyst Academy",
  description:
    "Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst's Notebook.",
}

export default function NotebookCreatingChartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst's Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Creating a Chart in Analyst's Notebook</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn how to create a new chart, add entities and links, and begin building a basic network
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst&apos;s Notebook - Creating Entities"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=375"
              duration="7:30"
              category="analyst-notebook"
              description="Learn how to create a new chart, add entities and links, and begin building a basic network in Analyst's Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Creating Your First Chart</h2>
            <p>
              Creating a chart in Analyst's Notebook is the first step in visualizing relationships and conducting
              analysis. This process involves setting up a new chart, adding entities, creating links between them, and
              organizing your visualization effectively.
            </p>

            <h3>Starting a New Chart</h3>
            <p>To create a new chart in Analyst's Notebook:</p>
            <ol>
              <li>Launch i2 Analyst's Notebook</li>
              <li>Select "File" &gt; "New" or use the keyboard shortcut Ctrl+N</li>
              <li>Choose a chart template if prompted, or start with a blank chart</li>
              <li>Set up your chart properties, including page size and orientation</li>
            </ol>

            <h3>Adding Entities to Your Chart</h3>
            <p>
              Entities represent the objects of interest in your analysis, such as people, organizations, events, or
              locations. To add entities:
            </p>
            <ol>
              <li>Select the appropriate entity type from the palette on the left side of the screen</li>
              <li>Click on the chart where you want to place the entity</li>
              <li>Enter the entity's identity and label information in the dialog box</li>
              <li>Add any additional attributes or properties as needed</li>
              <li>Click "OK" to create the entity</li>
            </ol>

            <h3>Creating Links Between Entities</h3>
            <p>Links represent relationships between entities. To create links between entities on your chart:</p>
            <ol>
              <li>Select the link tool from the palette</li>
              <li>Click on the first entity (the source)</li>
              <li>Drag to the second entity (the target) and release</li>
              <li>Enter the link's identity and label information in the dialog box</li>
              <li>Select the appropriate link type to represent the relationship</li>
              <li>Add any additional attributes or properties as needed</li>
              <li>Click "OK" to create the link</li>
            </ol>

            <h3>Organizing Your Chart</h3>
            <p>As you add more entities and links, organizing your chart becomes important for clarity and analysis:</p>
            <ul>
              <li>Use the Auto Layout feature to automatically arrange entities</li>
              <li>Manually position entities by dragging them to appropriate locations</li>
              <li>Group related entities together to show clusters or subnetworks</li>
              <li>Use theme lines to organize entities by common characteristics</li>
              <li>Adjust the zoom level to focus on specific areas of interest</li>
            </ul>

            <h2>Saving and Managing Your Chart</h2>
            <p>Once you've created your chart, it's important to save and manage it properly:</p>
            <ol>
              <li>Select "File" {'>'} "Save" or use the keyboard shortcut Ctrl+S</li>
              <li>Choose a location and filename for your chart</li>
              <li>Select the appropriate file format (.anb is the standard format)</li>
              <li>Consider using version numbers in filenames for tracking changes</li>
              <li>Regularly save your work to prevent data loss</li>
            </ol>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Related Topics</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/topics/notebook-identities-labels" className="text-primary hover:underline">
                    Identities and Labels
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
                    <Link href="/topics/notebook-example-materials" className="text-primary hover:underline">
                      Example Materials in Analyst's Notebook
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-importing-data" className="text-primary hover:underline">
                      Importing an Example Dataset
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
