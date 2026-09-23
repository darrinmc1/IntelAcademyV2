import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"
import { PathLessonList } from "@/components/learning-path-template"
import { TopicWhereNext } from "@/components/topic-where-next"

export const metadata = {
  title: "Hot Spot Analysis | The Intel Analyst Academy",
  description: "Learn techniques for identifying and analyzing geographic concentrations of criminal activity",
}

export default function HotSpotAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Hot Spot Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/hot-spot-analysis-banner-large.png"
              alt="Hot Spot Analysis"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl">
          Hot Spot Analysis is a specialized intelligence technique that identifies geographic areas with higher than
          average concentrations of criminal or terrorist activity. By analyzing spatial and temporal patterns, analysts
          can help direct resources more effectively and develop targeted prevention strategies.
        </p>
      </div>

      <LearningFormats />

      <PathLessonList
        topics={[
          {
            title: "Hot Spot Analysis",
            description:
              "Diffuse, clustered, and hotspot types; KDE and Gi*; time of day; and the victims who keep showing up.",
            slug: "hot-spot-analysis",
            readTime: 20,
          },
        ]}
      />
      <TopicWhereNext />
    </main>
  )
}
