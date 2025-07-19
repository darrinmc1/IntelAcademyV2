import { LessonContainer } from "@/components/lesson-container"
import { TopicHeader } from "@/components/topic-header"
import { LessonContent } from "@/components/lesson-content"
import { FullWidthSection } from "@/components/full-width-section"
import Image from "next/image"

export default function SampleTopicPage() {
  return (
    <>
      <LessonContainer>
        <TopicHeader
          title="Defining Intelligence"
          description="Learn the core concepts and definitions of intelligence in the analytical context"
          readTime={15}
          category="Foundations"
        />

        <LessonContent>
          <>
            <div id="defining-intelligence">
              <h2 className="text-2xl font-bold mb-4">Defining Intelligence</h2>
              <p className="mb-4">
                At its core, intelligence is about reducing uncertainty. It provides decision-makers with the knowledge
                they need to understand situations, identify threats and opportunities, and make effective choices.
                Intelligence is both a product (the information itself) and a process (the methods used to gather and
                analyze that information).
              </p>

              <p className="mb-4">Intelligence can be defined in several ways:</p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Information that has been collected, processed, and analyzed to meet specific requirements</li>
                <li>Knowledge and foreknowledge of the world around us that allows leaders to make decisions</li>
                <li>
                  The product resulting from the collection, processing, integration, analysis, and interpretation of
                  available information
                </li>
              </ul>

              <div className="my-8 rounded-lg overflow-hidden border">
                <Image
                  src="/what-is-intelligence.png"
                  alt="Intelligence concept diagram"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div id="key-characteristics">
              <h2 className="text-2xl font-bold mb-4">Key Characteristics of Intelligence</h2>
              <p className="mb-4">
                Effective intelligence has several key characteristics that distinguish it from raw information:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-2">Relevance</h3>
                  <p>Intelligence must be directly applicable to the decision-maker's needs and requirements</p>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-2">Timeliness</h3>
                  <p>Intelligence must be delivered when it's needed to inform decisions</p>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-2">Accuracy</h3>
                  <p>Intelligence should be as factually correct as possible given available information</p>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-2">Actionability</h3>
                  <p>Intelligence should enable and inform specific actions or decisions</p>
                </div>
              </div>
            </div>

            <div id="intelligence-vs-information">
              <h2 className="text-2xl font-bold mb-4">Intelligence vs. Information</h2>
              <p className="mb-4">A critical distinction exists between intelligence and information:</p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left">Information</th>
                      <th className="border p-3 text-left">Intelligence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Raw, unprocessed data</td>
                      <td className="border p-3">Analyzed and contextualized information</td>
                    </tr>
                    <tr>
                      <td className="border p-3">May or may not be relevant</td>
                      <td className="border p-3">Specifically tailored to requirements</td>
                    </tr>
                    <tr>
                      <td className="border p-3">No judgment or interpretation</td>
                      <td className="border p-3">Includes assessment and meaning</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Describes what is known</td>
                      <td className="border p-3">Provides insight and forecasting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        </LessonContent>
      </LessonContainer>

      <FullWidthSection background="muted" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-3">Continue Learning</h3>
            <p className="text-muted-foreground mb-4">
              Explore related topics to deepen your understanding of intelligence fundamentals.
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-1">The Intelligence Cycle</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn the systematic process used to convert information into intelligence
                </p>
                <a href="/topics/intelligence-cycle" className="text-sm font-medium text-primary">
                  Start Learning →
                </a>
              </div>
              <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-1">Types of Intelligence</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Explore the different categories and classifications of intelligence
                </p>
                <a href="/topics/intelligence-types" className="text-sm font-medium text-primary">
                  Start Learning →
                </a>
              </div>
            </div>
          </div>
        </div>
      </FullWidthSection>
    </>
  )
}
