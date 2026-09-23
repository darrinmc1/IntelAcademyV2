import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"
import { PathLessonList } from "@/components/learning-path-template"
import { TopicWhereNext } from "@/components/topic-where-next"

export const metadata = {
  title: "Network Analysis | The Intel Analyst Academy",
  description: "Learn techniques for mapping and analyzing criminal and terrorist networks",
}

export default function NetworkAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Network Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image src="/network-analysis-banner-large.png" alt="Network Analysis" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-xl">
          Network analysis maps who is connected to whom, then asks which of those connections actually matter.
          The lessons below are the ones on disk: the method, the chart, and the tool most of those charts end up in.
        </p>
      </div>

      <LearningFormats />

      <PathLessonList
        topics={[
          {
            title: "Network Analysis",
            description:
              "Nodes, edges, betweenness, and the three people whose removal splits the chart into pieces.",
            slug: "network-analysis",
            readTime: 20,
          },
          {
            title: "Introduction to Link Analysis",
            description: "Why a relationship chart is a question, and how to read hubs, bridges, and the quiet nodes.",
            slug: "introduction-to-link-analysis",
            readTime: 15,
          },
          {
            title: "Entity Relationship Charts",
            description: "Document the connection so the next analyst can see what you claimed and why.",
            slug: "entity-relationship-charts",
            readTime: 18,
          },
          {
            title: "Social Network Analysis in Analyst's Notebook",
            description: "The same structure, drawn in the tool most link charts eventually end up in.",
            slug: "notebook-social-network-analysis",
            readTime: 18,
          },
        ]}
      />
      <TopicWhereNext />
    </main>
  )
}
