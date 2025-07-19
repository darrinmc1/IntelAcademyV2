import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Importing and Managing Data in Analyst&apos;s Notebook | The Intel Analyst Academy",
  description: "Learn how to import data from various sources and manage large datasets effectively.",
}

export default function NotebookImportingDataPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst&apos;s Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Importing and Managing Data</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn how to import data from various sources and manage large datasets effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst&apos;s Notebook - Importing Data"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=1146"
              duration="5:45"
              category="analyst-notebook"
              description="Learn how to import and manage data from various sources in Analyst&apos;s Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Data Import Capabilities</h2>
            <p>
              Analyst&apos;s Notebook allows you to import data from various sources, transforming raw information into
              visual intelligence products. Mastering data import techniques is essential for working with large
              datasets and complex investigations.
            </p>

            <h2>Key Skills Covered</h2>
            <ul>
              <li>Importing data from Excel spreadsheets</li>
              <li>Working with CSV and structured text files</li>
              <li>Using the Import Specification Designer</li>
              <li>Creating reusable import specifications</li>
              <li>Handling different data formats</li>
              <li>Mapping data fields to entity properties</li>
              <li>Dealing with data quality issues</li>
              <li>Merging data from multiple sources</li>
            </ul>

            <h2>Data Management Best Practices</h2>
            <p>When working with large datasets in Analyst's Notebook, consider these best practices:</p>
            <ul>
              <li>Standardize your data before importing</li>
              <li>Create templates for recurring data imports</li>
              <li>Use consistent naming conventions</li>
              <li>Document your import specifications</li>
              <li>Validate imported data for accuracy</li>
              <li>Use filters to manage visual complexity</li>
              <li>Create separate charts for different aspects of analysis</li>
            </ul>

            <h2>Advanced Data Integration</h2>
            <p>As your skills develop, you can explore more advanced data integration techniques:</p>
            <ul>
              <li>Connecting to databases directly</li>
              <li>Working with i2 iBase</li>
              <li>Using the i2 Connect gateway</li>
              <li>Creating custom data connectors</li>
              <li>Automating regular data imports</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/import-specification-templates" className="text-primary hover:underline">
                    Import Specification Templates
                  </Link>
                </li>
                <li>
                  <Link href="/resources/data-preparation-guide" className="text-primary hover:underline">
                    Data Preparation Guide
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/notebook-advanced-analysis" className="text-primary hover:underline">
                      Advanced Analysis Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-geospatial-mapping" className="text-primary hover:underline">
                      Geospatial Mapping
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
