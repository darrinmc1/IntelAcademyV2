import Image from "next/image"
import Link from "next/link"
import { TopicCardWithImage } from "@/components/topic-card-with-image"
import { LearningFormats } from "@/components/learning-formats"
import { TopicWhereNext } from "@/components/topic-where-next"

export default function DataCollectionPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 rounded-lg overflow-hidden bg-white/5 border border-white/10">
        <div className="relative h-64 w-full">
          <Image
            src="/data-collection-planning-banner.png"
            alt="Data Collection and Planning"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold mb-3">Data Collection and Planning</h1>
          <p className="text-slate-300 max-w-md">
            Ask for the cup of water. The ocean was never going to fit in the tasking note.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About This Learning Path</h2>
          <p className="text-lg mb-4 text-justify">
            Collection is where intelligence shops go to feel busy. This path is the antidote: the cycle that
            collection sits inside, the requirements that justify a task, the gap you are actually trying to fill,
            the discipline that could fill it, the task a collector can execute, and the review that says whether
            any of it answered the decision.
          </p>
          <p className="text-lg mb-4 text-justify">
            Nothing here teaches clandestine access. If a plan only works by going somewhere you are not allowed
            to go, it is not an advanced plan. It is the wrong plan. Rewrite it until a citation could survive
            daylight.
          </p>

          <LearningFormats />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TopicCardWithImage
            title="The Intelligence Cycle"
            description="Direction, collection, processing, analysis, dissemination — and the feedback loop plans like to skip."
            imageSrc="/intelligence-cycle.png"
            href="/topics/intelligence-cycle"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Intelligence Requirements"
            description="PIRs, essential elements, and the art of asking a question a human being can answer before the decision expires."
            imageSrc="/intelligence-requirements.png"
            href="/topics/intelligence-requirements"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Intelligence Gap Analysis"
            description="Name the hole that changes a decision. Close it, task it, or accept the uncertainty on paper."
            imageSrc="/intelligence-collection-planning-thumb.png"
            href="/topics/intelligence-gap-analysis"
            duration="16 min"
          />
          <TopicCardWithImage
            title="The Collection Planning Process"
            description="From prioritized questions to tasked assets, and the evaluation step that keeps the plan from becoming folklore."
            imageSrc="/planning-process.png"
            href="/topics/collection-planning-process-for-intel-analysts"
            duration="20 min"
          />
          <TopicCardWithImage
            title="Matching Sources to Requirements"
            description="Let the question pick the discipline. Write the blind spot down before a single-source story becomes a briefing."
            imageSrc="/source-selection.png"
            href="/topics/matching-sources-to-requirements"
            duration="16 min"
          />
          <TopicCardWithImage
            title="Writing Collection Tasks"
            description="One question, a clock, a definition of done, and enough room for an answer you did not want."
            imageSrc="/collection-management.png"
            href="/topics/writing-collection-tasks"
            duration="15 min"
          />
          <TopicCardWithImage
            title="Evaluating the Collection Plan"
            description="Score the gap, not the bustle. Then retask, narrow, or stop — and tell the person who owns the decision."
            imageSrc="/data-collection-roadmap.png"
            href="/topics/evaluating-collection-plans"
            duration="15 min"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Related Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">OSINT</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              The collection discipline most analysts can actually practice before lunch, and the standards that keep it lawful.
            </p>
            <Link
              href="/learning-paths/osint"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Analytical Techniques</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              What you do with the take once collection has done its job, or confessed that it has not.
            </p>
            <Link
              href="/learning-paths/analytical-techniques"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Strategic Intelligence</h3>
            <p className="text-muted-foreground mb-4 text-justify">
              Where a collection plan has to serve a question measured in years, not in this afternoon&apos;s inbox.
            </p>
            <Link
              href="/learning-paths/strategic-intelligence"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Explore Path
            </Link>
          </div>
        </div>
      </div>
      <TopicWhereNext />
    </div>
  )
}
