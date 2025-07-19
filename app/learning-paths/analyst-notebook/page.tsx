"use client"

import Image from "next/image"
import Link from "next/link"

import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { FeaturedResource } from "@/components/featured-resource"
import { LearningFormats } from "@/components/learning-formats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalystNotebookPage() {
  // Define a placeholder image for the banner
  const bannerImage = "/analyst-notebook-banner-large.png"

  // Define placeholder images for topics with fallbacks
  const topicImages = {
    fundamentals: "/notebook-fundamentals.png",
    identities: "/identities-labels.png",
    creating: "/creating-chart.png",
    examples: "/xample-materials.png",
    importing: "/importing-data.png",
    editing: "/editing-items.png",
    searching: "/searching-items.png",
    histograms: "/using-histograms.png",
    filters: "/using-filters.png",
    sna: "/social-network-analysis.png",
    printing: "/printing-exporting.png",
    layout: "/chart-layout.png",
    entityRelationship: "/entity-relationship-charts.png",
    timeline: "/timeline-visualization.png",
    advanced: "/advanced-analysis.png",
    geospatial: "/geospatial-mapping.png",
    presentation: "/chart-presentation.png",
    integration: "/tool-integration.png",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-8">
        {/* Use a placeholder if the banner image is not available */}
        {bannerImage ? (
          <Image
            src={bannerImage || "/placeholder.svg"}
            alt="IBM i2 Analyst&apos;s Notebook"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">IBM i2 Analyst&apos;s Notebook</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">IBM i2 Analyst&apos;s Notebook</h1>
            <p className="text-xl max-w-2xl">
              Master the industry-standard tool for visual intelligence analysis and link charting
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4">
            IBM i2 Analyst&apos;s Notebook is the industry standard for visual intelligence analysis. This learning path
            provides training on using Analyst&apos;s Notebook to visualize complex networks, identify key
            entities and relationships, and communicate analytical findings.
          </p>
          <p className="text-lg mb-4">
            From basic chart creation to advanced analytical techniques, you&apos;ll learn how to leverage the full power of
            Analyst&apos;s Notebook in intelligence operations. The course combines technical skills with analytical
            methodologies to help you produce actionable intelligence products.
          </p>

          <div className="mt-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">Getting Started Video Series</h3>
            <div className="aspect-video max-w-3xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=PL_MdWkeY52FGQijg67kYHL-NQpG6Lvp7U"
                title="Getting Started with i2 Analyst's Notebook"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-muted-foreground mt-2">
              This official IBM video series covers the fundamentals of using i2 Analyst's Notebook.
            </p>
          </div>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="core-techniques">Core Techniques</TabsTrigger>
            <TabsTrigger value="advanced-topics">Advanced Topics</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCardWithImage
                title="Analyst&apos;s Notebook Fundamentals"
                description="Learn the core interface, features, and capabilities of IBM i2 Analyst's Notebook."
                imageSrc={topicImages.fundamentals}
                href="/topics/analysts-notebook-fundamentals"
              />
              <TopicCardWithImage
                title="Identities and Labels"
                description="Master the fundamental concepts of identities and labels for effective chart creation."
                imageSrc={topicImages.identities}
                href="/topics/notebook-identities-labels"
              />
              <TopicCardWithImage
                title="Creating a Chart"
                description="Learn how to create a new chart, add entities and links, and begin building a basic network."
                imageSrc={topicImages.creating}
                href="/topics/notebook-creating-chart"
              />
              <TopicCardWithImage
                title="Example Materials"
                description="Explore the example charts and import specifications provided with Analyst&apos;s Notebook."
                imageSrc={topicImages.examples}
                href="/topics/notebook-example-materials"
              />
              <TopicCardWithImage
                title="Importing an Example Dataset"
                description="Learn how to import data from various sources and manage large datasets effectively."
                imageSrc={topicImages.importing}
                href="/topics/notebook-importing-data"
              />
              <TopicCardWithImage
                title="Editing Chart Items"
                description="Learn how to edit chart items, including updating identities, labels, and other properties."
                imageSrc={topicImages.editing}
                href="/topics/notebook-editing-items"
              />
            </div>
          </TabsContent>

          <TabsContent value="core-techniques" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCardWithImage
                title="Searching and Finding Items"
                description="Master techniques for locating specific entities or links within your charts."
                imageSrc={topicImages.searching}
                href="/topics/notebook-searching-items"
              />
              <TopicCardWithImage
                title="Using Histograms"
                description="Learn to use the histogram tool for visualizing and analyzing data distributions."
                imageSrc={topicImages.histograms}
                href="/topics/notebook-using-histograms"
              />
              <TopicCardWithImage
                title="Using Filters"
                description="Apply filters to your chart to focus on specific data subsets or relationships."
                imageSrc={topicImages.filters}
                href="/topics/notebook-using-filters"
              />
              <TopicCardWithImage
                title="Creating Entity Relationship Charts"
                description="Master techniques for building clear and effective link charts showing entities and connections."
                imageSrc={topicImages.entityRelationship}
                href="/topics/entity-relationship-charts"
              />
              <TopicCardWithImage
                title="Timeline Visualization"
                description="Create temporal analysis charts to visualize events over time and identify patterns."
                imageSrc={topicImages.timeline}
                href="/topics/timeline-visualization"
              />
              <TopicCardWithImage
                title="Printing and Exporting Charts"
                description="Learn the process for printing and exporting your charts for sharing or reporting."
                imageSrc={topicImages.printing}
                href="/topics/notebook-printing-exporting"
              />
            </div>
          </TabsContent>

          <TabsContent value="advanced-topics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCardWithImage
                title="Social Network Analysis"
                description="Apply social network analysis techniques to identify key actors and relationships in networks."
                imageSrc={topicImages.sna}
                href="/topics/notebook-social-network-analysis"
              />
              <TopicCardWithImage
                title="Customizing Chart Layout"
                description="Master techniques for customizing the appearance and layout of your charts."
                imageSrc={topicImages.layout}
                href="/topics/notebook-chart-layout"
              />
              <TopicCardWithImage
                title="Advanced Analysis Features"
                description="Explore advanced analytical tools including Find Path, Find Matching Entities, and Visual Search."
                imageSrc={topicImages.advanced}
                href="/topics/notebook-advanced-analysis"
              />
              <TopicCardWithImage
                title="Geospatial Mapping"
                description="Integrate geographic information into your analysis using Analyst's Notebook mapping capabilities."
                imageSrc={topicImages.geospatial}
                href="/topics/notebook-geospatial-mapping"
              />
              <TopicCardWithImage
                title="Chart Presentation Techniques"
                description="Create professional, clear charts for briefings and intelligence products."
                imageSrc={topicImages.presentation}
                href="/topics/notebook-chart-presentation"
              />
              <TopicCardWithImage
                title="Integration with Other Tools"
                description="Connect Analyst's Notebook with other intelligence platforms and data sources."
                imageSrc={topicImages.integration}
                href="/topics/notebook-integration"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tutorial Series</h2>
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with i2 Analyst&apos;s Notebook</CardTitle>
            <CardDescription>
              A tutorial series covering all aspects of using Analyst's Notebook
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Identities and Labels</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Learn how to use identity and label item properties in i2 Analyst&apos;s Notebook.
                </p>
                <Link href="/topics/notebook-identities-labels" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Creating a Chart</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Demonstrates how to create a new chart, add entities and links, and begin building a basic network.
                </p>
                <Link href="/topics/notebook-creating-chart" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Example Materials</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Looks at the example charts and import specifications provided with i2 Analyst&apos;s Notebook.
                </p>
                <Link href="/topics/notebook-example-materials" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Importing an Example Dataset</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Shows how to set up an import specification to import the Example1 data file.
                </p>
                <Link href="/topics/notebook-importing-data" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Editing Chart Items</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Explains how to edit chart items, including updating identities, labels, and other properties.
                </p>
                <Link href="/topics/notebook-editing-items" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Searching and Finding Items</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Covers the use of searching and finding tools to locate specific entities or links.
                </p>
                <Link href="/topics/notebook-searching-items" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Using Histograms</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Introduces the histogram tool for visualizing and analyzing data distributions.
                </p>
                <Link href="/topics/notebook-using-histograms" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Using Filters</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Demonstrates how to apply filters to your chart to focus on specific data subsets.
                </p>
                <Link href="/topics/notebook-using-filters" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Using Social Network Analysis</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Shows how to use social network analysis tools to identify key entities and relationships.
                </p>
                <Link href="/topics/notebook-social-network-analysis" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Printing and Exporting Charts</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Explains the process for printing and exporting your charts for sharing or reporting.
                </p>
                <Link href="/topics/notebook-printing-exporting" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium mb-1">Customizing the Chart Layout</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Covers techniques for customizing the appearance and layout of your chart.
                </p>
                <Link href="/topics/notebook-chart-layout" className="text-primary text-sm hover:underline">
                  Watch tutorial →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedResource
            title="Analyst's Notebook Templates"
            description="Download ready-to-use templates for common intelligence analysis scenarios."
            path="/resources/analysts-notebook-templates"
          />
          <FeaturedResource
            title="Chart Style Guide"
            description="Best practices for creating clear, consistent, and effective link charts."
            path="/resources/chart-style-guide"
          />
          <FeaturedResource
            title="Case Study: Network Disruption Analysis"
            description="Real-world example of using Analyst's Notebook to map and disrupt criminal networks."
            path="/resources/network-disruption-case-study"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Related Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Network Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Learn methodologies for analyzing complex networks and relationships.
            </p>
            <Link href="/learning-paths/network-analysis" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Excel for Intelligence Analysts</h3>
            <p className="text-muted-foreground mb-4">
              Master Excel techniques for intelligence data analysis and visualization.
            </p>
            <Link href="/learning-paths/excel-for-analysts" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Analytic Techniques</h3>
            <p className="text-muted-foreground mb-4">
              Explore structured analytic techniques for intelligence analysis.
            </p>
            <Link href="/learning-paths/analytic-techniques" className="text-primary hover:underline">
              Explore Path →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
