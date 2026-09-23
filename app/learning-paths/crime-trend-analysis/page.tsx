import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"
import { PathLessonList } from "@/components/learning-path-template"
import { TopicWhereNext } from "@/components/topic-where-next"

export const metadata = {
  title: "Crime Trend Analysis | The Intel Analyst Academy",
  description: "Learn techniques for identifying and analyzing patterns and trends in criminal activity",
}

export default function CrimeTrendAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Crime Trend Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/crime-trend-analysis-banner-large.png"
              alt="Crime Trend Analysis"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-xl">
          A spike is a briefing. A trend is a decision. These lessons separate the weekly panic from the pattern
          that is still there in six months, then show how to forecast the series that sits inside it.
        </p>
      </div>

      <LearningFormats />

      <PathLessonList
        topics={[
          {
            title: "Crime Trend Analysis",
            description: "Seasonality, displacement, and the statistics that flatter a nervous commander.",
            slug: "crime-trend-analysis",
            readTime: 20,
          },
          {
            title: "Series Pattern Detection",
            description: "Statistical methods for deciding a set of incidents is a series, not a pile.",
            slug: "series-pattern-detection-statistical-analytical-methods-crime-series",
            readTime: 18,
          },
          {
            title: "Predictive Patterning",
            description: "Using the series you already have to say something careful about the next one.",
            slug: "predictive-patterning-using-historical-series-data-to-predict-future-criminal-ac",
            readTime: 18,
          },
          {
            title: "Predictive Modeling and Resource Allocation",
            description: "Forecast the series, then put the people where the forecast says they will matter.",
            slug: "advanced-crime-series-analysis-predictive-modeling-resource-allocation",
            readTime: 18,
          },
        ]}
      />
      <TopicWhereNext />
    </main>
  )
}
