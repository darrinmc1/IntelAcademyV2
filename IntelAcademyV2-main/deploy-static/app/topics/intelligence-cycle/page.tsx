import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import MorphingIntelligenceCycle from "@/components/morphing-intelligence-cycle"
import AdvancedCycleAnimation from "@/components/advanced-cycle-animation"

export default function IntelligenceCycle() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths">Learning Paths</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths/foundations">Foundations of Intelligence</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/intelligence-cycle" isCurrentPage>
              The Intelligence Cycle
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/learning-paths/foundations" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Foundations of Intelligence
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">The Intelligence Cycle</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          The Systematic Process of Intelligence Production
          <br />
          <i>Or: How I Learned to Stop Worrying and Love the Endless Loop</i>
        </h2>

        {/* Interactive Intelligence Cycle Animation */}
        <div className="mb-12">
          <MorphingIntelligenceCycle />
        </div>

        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/intelligence-cycle-header.png"
            alt="Intelligence Cycle Diagram"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="lead">
            The intelligence cycle is a systematic process used by intelligence professionals to convert raw information
            into finished intelligence products.
            <br />
            <i>
              Think of it as the sausage-making process of the intelligence world - you might not want to see how it&apos;s
              made, but the end product helps decision-makers avoid making catastrophically bad choices.
            </i>
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-md">
            <p className="font-semibold text-amber-800">Analyst Humor Corner:</p>
            <p className="italic text-amber-700 mb-0">
              &quot;The intelligence cycle is like doing laundry - it&apos;s never actually finished, something always gets lost
              in the process, and by the time you&apos;re done, there&apos;s already more dirty laundry piling up.&quot;
            </p>
          </div>

          <h2>Advanced Data Flow Visualization</h2>
          <p>
            Understanding how information transforms as it moves through each phase is crucial. The animation below
            shows the actual data flow and transformation process:
          </p>

          {/* Advanced Animation */}
          <div className="my-12">
            <AdvancedCycleAnimation />
          </div>

          <h2><b>Overview of the Intelligence Cycle</b></h2>
          <p>
            The intelligence cycle is typically represented as a continuous process with several distinct phases.
            <br />
            <i>
              
                    It&apos;s like a never-ending merry-go-round of information processing, except instead of horses there are
                    analysts, and instead of calliope music there&apos;s the constant hum of computer servers.

            </i>
          </p>

          <p>
            While different organizations may use slightly different models, the most common version includes six
            phases: direction, collection, processing, analysis, dissemination, and feedback.
          </p>

          <div className="relative h-80 w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/intelligence-cycle-diagram.png"
              alt="Intelligence Cycle Diagram"
              fill
              className="object-cover"
            />
          </div>

          <p>
            This cycle is not strictly linear—activities often occur simultaneously, and the process frequently involves
            going back to previous steps as new information emerges or requirements change.
            <br />
            <i>
              
                    It&apos;s less of a cycle and more of a chaotic pinball machine where the ball occasionally gets stuck between
                    phases.

            </i>
          </p>

          <h2>
            Phase 1: Direction <Coffee className="inline h-5 w-5 text-blue-500" />
          </h2>

          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="md:w-1/2">
              <p>
                The intelligence cycle begins with direction, which involves identifying what information is needed and
                why.
                <br />
                <i>
                  
                        This is where someone important asks, &quot;What the heck is going on with X?&quot; and intelligence
                        professionals scramble to figure out how to answer that question.

                </i>
              </p>

              <p>Key activities in this phase include:</p>
              <ul>
                <li>
                  Identifying intelligence gaps and information needs <i>(the "known unknowns")</i>
                </li>
                <li>
                  Establishing priorities among competing requirements <i>(deciding which fire to put out first)</i>
                </li>
                <li>
                  Formulating specific intelligence requirements{" "}
                  <i>(turning "tell me everything" into answerable questions)</i>
                </li>
                <li>
                  Determining timelines and deadlines <i>(because &quot;ASAP&quot; isn&apos;t specific enough)</i>
                </li>
                <li>
                  Allocating resources for collection and analysis <i>(deciding who gets the fancy satellites today)</i>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/intelligence-direction-phase.png"
                  alt="Intelligence Direction Phase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-md my-4">
            <h4 className="text-blue-700 font-medium">Real World Translation:</h4>
            <p className="mb-0 text-blue-600">
              Direction is when your boss bursts into your office at 4:55 PM on Friday and says, &quot;The CEO needs to know
              everything about our competitor&apos;s new product by Monday morning. Make it happen.&quot; Then leaves before you
              can ask any questions.
            </p>
          </div>

          {/* Continue with other phases... */}

          <div className="bg-muted p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Key Takeaways</h3>
            <ul className="space-y-1">
              <li>
                The intelligence cycle is a systematic process for converting raw information into finished intelligence
                <br />
                <i>(and analysts into coffee-dependent zombies)</i>
              </li>
              <li>
                The six phases of the cycle are direction, collection, processing, analysis, dissemination, and feedback
                <br />
                <i>(also known as confusion, panic, frustration, resignation, disappointment, and denial)</i>
              </li>
              <li>
                The cycle is iterative and flexible, not strictly linear
                <br />
                <i>(much like an analyst&apos;s sanity)</i>
              </li>
              <li>
                Each phase has specific activities and objectives that contribute to the overall intelligence process
                <br />
                <i>(and to the analyst's growing collection of stress-related ailments)</i>
              </li>
              <li>
                Interactive visualizations help understand the flow and transformation of data through each phase
                <br />
                <i>(making the chaos slightly more comprehensible)</i>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/learning-paths/foundations">Back to Learning Path</Link>
          </Button>
          <Button asChild>
            <Link href="/topics/intelligence-direction">Next Topic: Direction: Setting Intelligence Requirements</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
