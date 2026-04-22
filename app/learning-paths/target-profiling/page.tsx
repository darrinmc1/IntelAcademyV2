import Image from "next/image"
import { LearningFormats } from "@/components/learning-formats"

export const metadata = {
  title: "Target Profiling | The Intel Analyst Academy",
  description: "Learn techniques for developing profiles of high-value targets",
}

import React from "react"
export default function TargetProfilingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <Image src="/target-profiling-banner-large.png" alt="Target Profiling" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Target Profiling</h1>
        </div>
      </div>






      {/* Introduction */}
      <div className="mb-12">
        <p className="text-xl">
          Target Profiling is a specialized intelligence discipline focused on developing profiles of
          high-value individuals or groups. By systematically collecting and analyzing information about targets,
          analysts can provide decision-makers with actionable intelligence for operations, investigations, and risk
          assessment.
        </p>
      </div>

      <LearningFormats />

      {/* Topic Cards - Simple HTML version */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/what-is-target-profiling-thumb.png"
              alt="What is Target Profiling"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">What is Target Profiling</h3>
            <p className="text-gray-600 mb-4">
              An introduction to the fundamentals of target profiling and its applications
            </p>
            <p className="text-blue-600 font-medium">15 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/behavioral-analysis-thumb.png" alt="Behavioral Analysis" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Behavioral Analysis</h3>
            <p className="text-gray-600 mb-4">Techniques for analyzing and predicting target behaviors and patterns</p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/target-package-thumb.png" alt="Target Package Development" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Target Package Development</h3>
            <p className="text-gray-600 mb-4">
              Methods for creating intelligence packages on high-value targets
            </p>
            <p className="text-blue-600 font-medium">25 min read</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/criminal-profiling-basics-thumb.png"
              alt="Criminal Profiling Basics"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Criminal Profiling Basics</h3>
            <p className="text-gray-600 mb-4">Fundamental techniques for developing criminal profiles</p>
            <p className="text-blue-600 font-medium">18 min read</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/priority-offender-programs-thumb.png"
              alt="Priority Offender Programs"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Priority Offender Programs</h3>
            <p className="text-gray-600 mb-4">Strategies for identifying and targeting high-impact offenders</p>
            <p className="text-blue-600 font-medium">22 min read</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/high-risk-identification-thumb.png"
              alt="High-Risk Target Identification"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">High-Risk Target Identification</h3>
            <p className="text-gray-600 mb-4">Methods for identifying individuals who pose significant threats</p>
            <p className="text-blue-600 font-medium">20 min read</p>
          </div>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Resource</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-full md:w-1/3 aspect-video">
            <Image
              src="/target-profiling-concept.png"
              alt="Target Profiling Concept"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Target Profiling Methodology Guide</h3>
            <p className="mb-4">
              This guide outlines a structured methodology for developing detailed target profiles that
              support operational planning and risk assessment.
            </p>
            <p>
              The guide includes templates, case studies, and best practices for collecting, organizing, and analyzing
              target information from multiple sources.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
