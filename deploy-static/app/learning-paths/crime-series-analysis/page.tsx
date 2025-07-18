import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"
import { TopicCardWithImage } from "@/components/topic-card-with-image"

export const metadata = {
  title: "Crime Series Analysis | The Intel Analyst Academy",
  description: "Learn how to identify and analyze linked crimes committed by the same offender or group",
}

export default function CrimeSeriesAnalysisPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center bg-gray-800 p-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Crime Series Analysis</h1>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/crime-series-analysis-banner-large.png"
              alt="Crime Series Analysis"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl">
          Crime Series Analysis is a specialized intelligence category focused on identifying and analyzing linked
          crimes that are likely committed by the same offender or group. By recognizing patterns, modus operandi, and
          signatures, analysts can connect seemingly isolated incidents and develop targeted strategies for
          investigation and prevention.
        </p>
      </div>

      <LearningFormats />

      {/* Topic Cards - Using the new component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <TopicCardWithImage
          title="What is Crime Series Analysis"
          description="An introduction to the fundamentals of crime series analysis and its importance in law enforcement"
          imageSrc="/what-is-crime-series-analysis.png"
          alt="What is Crime Series Analysis"
          duration="15 min read"
        />

        <TopicCardWithImage
          title="Modus Operandi Analysis"
          description="Techniques for identifying and analyzing criminal methods and behaviors"
          imageSrc="/modus-operandi-analysis.png"
          alt="Modus Operandi Analysis"
          duration="20 min read"
        />

        <TopicCardWithImage
          title="Crime Linkage Techniques"
          description="Methods for connecting related crimes through behavioral and physical evidence"
          imageSrc="/crime-linkage-techniques.png"
          alt="Crime Linkage Techniques"
          duration="25 min read"
        />

        <TopicCardWithImage
          title="Repeat Offender Profiling"
          description="Identifying and analyzing patterns of repeat offenders"
          imageSrc="/repeat-offender-profiling.png"
          alt="Repeat Offender Profiling"
          duration="18 min read"
        />

        <TopicCardWithImage
          title="Series Pattern Detection"
          description="Statistical and analytical methods for identifying crime series"
          imageSrc="/series-pattern-detection.png"
          alt="Series Pattern Detection"
          duration="22 min read"
        />

        <TopicCardWithImage
          title="Predictive Patterning"
          description="Using historical series data to predict future criminal activity"
          imageSrc="/predictive-patterning.png"
          alt="Predictive Patterning"
          duration="20 min read"
        />
      </div>

      {/* Featured Resource */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Resource</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-full md:w-1/3 aspect-video">
            <Image
              src="/crime-series-framework.png"
              alt="Crime Series Analysis Framework"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Crime Series Analysis Framework</h3>
            <p className="mb-4">
              This framework provides a structured approach to identifying, analyzing, and responding to
              crime series. It covers the entire process from initial pattern recognition through to targeted
              intervention strategies.
            </p>
            <p>
              The framework integrates behavioral analysis, geographical profiling, temporal analysis, and forensic
              evidence to build an understanding of linked criminal activities.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
