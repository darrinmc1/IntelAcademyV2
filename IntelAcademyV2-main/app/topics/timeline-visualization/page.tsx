import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Timeline Visualization | The Intel Analyst Academy",
  description: "Create temporal analysis charts to visualize events over time and identify patterns.",
}

export default function TimelineVisualizationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst's Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Timeline Visualization</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Create temporal analysis charts to visualize events over time and identify patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst's Notebook - Timeline Analysis"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=511"
              duration="4:15"
              category="analyst-notebook"
              description="Learn how to create and analyze timelines in Analyst's Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Understanding Timeline Analysis</h2>
            <p>
              Timeline visualization is a powerful feature in Analyst's Notebook that allows you to analyze events and
              activities over time. By visualizing temporal data, you can identify patterns, sequences, and anomalies
              that might not be apparent in traditional link charts.
            </p>

            <h2>Key Skills Covered</h2>
            <ul>
              <li>Creating timeline charts</li>
              <li>Adding date and time information to entities</li>
              <li>Working with theme lines</li>
              <li>Visualizing event sequences</li>
              <li>Identifying temporal patterns</li>
              <li>Switching between network and timeline views</li>
              <li>Using the time bar for navigation</li>
            </ul>

            <h2>Applications of Timeline Analysis</h2>
            <p>Timeline analysis is particularly valuable in various intelligence contexts:</p>
            <ul>
              <li>Crime series analysis to identify patterns in criminal activity</li>
              <li>Investigating communication patterns between individuals</li>
              <li>Tracking movement of persons of interest</li>
              <li>Analyzing financial transactions over time</li>
              <li>Reconstructing sequences of events in investigations</li>
            </ul>

            <h2>Best Practices</h2>
            <p>When creating timeline visualizations, consider these best practices:</p>
            <ul>
              <li>Use consistent time formats for all entities</li>
              <li>Group related events on theme lines</li>
              <li>Include sufficient detail in event descriptions</li>
              <li>Use color coding to distinguish different types of events</li>
              <li>Consider using both absolute and relative time views for analysis</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/timeline-templates" className="text-primary hover:underline">
                    Timeline Analysis Templates
                  </Link>
                </li>
                <li>
                  <Link href="/resources/temporal-analysis-guide" className="text-primary hover:underline">
                    Temporal Analysis Guide
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/notebook-social-network-analysis" className="text-primary hover:underline">
                      Social Network Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-importing-data" className="text-primary hover:underline">
                      Importing and Managing Data
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
