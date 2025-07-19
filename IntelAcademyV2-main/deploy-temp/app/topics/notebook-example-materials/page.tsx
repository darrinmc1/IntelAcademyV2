import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Example Materials in Analyst&apos;s Notebook | The Intel Analyst Academy",
  description:
    "Explore the example charts and import specifications provided with i2 Analyst&apos;s Notebook for practice and learning.",
}

export default function NotebookExampleMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst&apos;s Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Example Materials in Analyst&apos;s Notebook</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the example charts and import specifications provided with i2 Analyst&apos;s Notebook
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst&apos;s Notebook - Example Materials"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=600"
              duration="5:45"
              category="analyst-notebook"
              description="Explore the example charts and import specifications provided with i2 Analyst&apos;s Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Exploring Example Materials</h2>
            <p>
              i2 Analyst&apos;s Notebook comes with a variety of example materials that can help you learn the software and
              understand its capabilities. These materials include sample charts, import specifications, and data files
              that demonstrate different analytical techniques and chart types.
            </p>

            <h3>Accessing Example Materials</h3>
            <p>To access the example materials in Analyst&apos;s Notebook:</p>
            <ol>
              <li>Launch i2 Analyst's Notebook</li>
              <li>Select "Help" &gt; "Example Materials" from the menu</li>
              <li>Browse through the available folders to explore different types of examples</li>
              <li>Open example charts by double-clicking on .anb files</li>
            </ol>

            <h3>Types of Example Materials</h3>
            <p>The example materials typically include:</p>
            <ul>
              <li>
                <strong>Sample Charts</strong>: Pre-built charts demonstrating various analytical techniques and
                visualization approaches
              </li>
              <li>
                <strong>Import Specifications</strong>: Templates for importing data from external sources like Excel or
                CSV files
              </li>
              <li>
                <strong>Data Files</strong>: Sample data sets that can be used with the import specifications
              </li>
              <li>
                <strong>Analytical Templates</strong>: Specialized charts for specific types of analysis, such as
                timeline analysis or social network analysis
              </li>
            </ul>

            <h3>Learning from Example Charts</h3>
            <p>Example charts are valuable learning resources. When exploring them, pay attention to these aspects:</p>
            <ul>
              <li>The overall structure and organization of the chart</li>
              <li>How entities and links are labeled and formatted</li>
              <li>The use of different entity and link types to represent different objects and relationships</li>
              <li>How complex information is visualized clearly</li>
              <li>The use of attributes and properties to store additional information</li>
              <li>Any analytical techniques demonstrated, such as social network analysis or timeline analysis</li>
            </ul>

            <h3>Using Example Import Specifications</h3>
            <p>
              Import specifications in the example materials show you how to bring external data into Analyst&apos;s
              Notebook:
            </p>
            <ul>
              <li>Open an example import specification to see how it&apos;s configured</li>
              <li>Examine how data fields are mapped to entity and link properties</li>
              <li>Look at how the specification handles the creation of different entity types based on the data</li>
              <li>Note how relationships are established between entities during import</li>
              <li>Use these specifications as templates for your own data imports</li>
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
                  <Link href="/topics/notebook-importing-data" className="text-primary hover:underline">
                    Importing an Example Dataset
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
                    <Link href="/topics/notebook-importing-data" className="text-primary hover:underline">
                      Importing an Example Dataset
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-editing-items" className="text-primary hover:underline">
                      Editing Chart Items
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
