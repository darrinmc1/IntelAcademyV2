import type { Metadata } from "next"
import Link from "next/link"

import { LessonVideo } from "@/components/lesson-video"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Social Network Analysis with Analyst's Notebook | The Intel Analyst Academy",
  description: "Apply social network analysis techniques to identify key actors and relationships in networks.",
}

export default function NotebookSocialNetworkAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/learning-paths/analyst-notebook" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Analyst's Notebook Learning Path
        </Link>
        <h1 className="text-4xl font-bold mb-4">Social Network Analysis</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Apply social network analysis techniques to identify key actors and relationships in networks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <LessonVideo
              title="Getting Started with i2 Analyst's Notebook - Social Network Analysis"
              videoUrl="https://www.youtube.com/embed/Ys-9Kw1mIpk?start=766"
              duration="6:20"
              category="analyst-notebook"
              description="Learn how to apply social network analysis techniques in Analyst's Notebook."
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Understanding Social Network Analysis</h2>
            <p>
              Social Network Analysis (SNA) is a methodology for investigating social structures through the use of
              network and graph theory. In Analyst's Notebook, SNA helps identify key individuals, groups, and
              relationships within complex networks.
            </p>

            <h2>Key Skills Covered</h2>
            <ul>
              <li>Identifying central actors in a network</li>
              <li>Analyzing connection patterns</li>
              <li>Detecting subgroups and clusters</li>
              <li>Measuring network density and centrality</li>
              <li>Using SNA metrics (betweenness, closeness, degree)</li>
              <li>Visualizing network structures effectively</li>
              <li>Identifying bridges and cutpoints in networks</li>
            </ul>

            <h2>Applications in Intelligence Analysis</h2>
            <p>Social Network Analysis has numerous applications in intelligence work:</p>
            <ul>
              <li>Mapping criminal organizations and hierarchies</li>
              <li>Identifying key facilitators and brokers in networks</li>
              <li>Detecting hidden relationships and connections</li>
              <li>Prioritizing targets for investigation</li>
              <li>Understanding information flow in organizations</li>
              <li>Identifying vulnerabilities in network structures</li>
            </ul>

            <h2>Advanced SNA Techniques</h2>
            <p>
              As you become more proficient with Analyst's Notebook, you can apply more sophisticated SNA techniques:
            </p>
            <ul>
              <li>Ego network analysis</li>
              <li>Two-mode network analysis</li>
              <li>Temporal network analysis</li>
              <li>Combining SNA with geospatial analysis</li>
              <li>Using automated layout algorithms for large networks</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/sna-metrics-guide" className="text-primary hover:underline">
                    SNA Metrics Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/network-analysis-case-studies" className="text-primary hover:underline">
                    Network Analysis Case Studies
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Next Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/notebook-importing-data" className="text-primary hover:underline">
                      Importing and Managing Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/notebook-advanced-analysis" className="text-primary hover:underline">
                      Advanced Analysis Features
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
