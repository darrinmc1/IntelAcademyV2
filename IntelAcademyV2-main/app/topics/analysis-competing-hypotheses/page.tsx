import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Analysis of Competing Hypotheses | The Intel Analyst Academy",
  description:
    "Master the systematic evaluation of multiple hypotheses to avoid confirmation bias in intelligence analysis.",
}

export default function AnalysisCompetingHypothesesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/learning-paths/analytical-techniques" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Analytical Techniques
      </Link>
      <h1 className="text-4xl font-bold mb-4">Analysis of Competing Hypotheses</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Or: How to Prove Yourself Wrong in the Most Structured Way Possible
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <Image
                src="/competing-hypotheses.png"
                alt="Analysis of Competing Hypotheses matrix"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>What is ACH? (Besides a Sound You Make When Realizing You&apos;ve Been Wrong All Along)</h2>
            <p>
              Analysis of Competing Hypotheses (ACH) is a structured analytical technique that helps intelligence
              analysts avoid the cognitive trap of falling in love with their first hypothesis—a relationship that, like
              many first loves, is often doomed to heartbreak and embarrassment.
            </p>

            <p>
              Developed by Richards Heuer at the CIA, ACH is essentially a methodical way of playing devil&apos;s advocate
              with yourself before someone else does it for you in front of your entire team.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 my-6">
              <h3 className="text-amber-800 font-medium mb-2">The ACH Analyst&apos;s Motto</h3>
              <p className="text-amber-700 mb-0">
                &quot;I&apos;m not just here to prove myself right; I&apos;m here to prove myself wrong in the most elaborate way
                possible.&quot;
              </p>
            </div>

            <h2>The ACH Process: A Step-by-Step Guide to Structured Self-Doubt</h2>
            <ol>
              <li>
                <strong>Identify possible hypotheses</strong> - Come up with all the possible explanations, including
                the ones that make you think, "Well, that's ridiculous, but I guess I should include it."
              </li>
              <li>
                <strong>List evidence and arguments</strong> - Gather all the evidence, including that one piece you&apos;ve
                been conveniently ignoring because it doesn&apos;t fit your favorite theory.
              </li>
              <li>
                <strong>Create a matrix</strong> - Build a spreadsheet that will haunt your dreams, with hypotheses
                across the top and evidence down the side.
              </li>
              <li>
                <strong>Analyze how evidence relates to each hypothesis</strong> - For each piece of evidence, ask:
                &quot;Does this prove my hypothesis wrong?&quot; (Spoiler alert: it often does.)
              </li>
              <li>
                <strong>Draw tentative conclusions</strong> - Figure out which hypothesis has survived your brutal
                assault of evidence. It's rarely the one you started with, much to your ego's dismay.
              </li>
              <li>
                <strong>Analyze sensitivity</strong> - Ask yourself: "What if that crucial piece of evidence turns out
                to be from a source who also believes the Earth is flat?&quot;
              </li>
              <li>
                <strong>Report conclusions</strong> - Explain your findings in a way that doesn't reveal how attached
                you were to your original, now-disproven theory.
              </li>
            </ol>

            <h2>Why ACH Works (When You Actually Follow It)</h2>
            <p>
              ACH forces analysts to consider alternative explanations rather than just gathering evidence to support
              their initial hunch—a cognitive bias known as &quot;confirmation bias&quot; or, in technical terms, &quot;only seeing
              what you want to see.&quot;
            </p>

            <p>
              By focusing on disproving hypotheses rather than proving them, ACH helps analysts avoid the trap of
              becoming emotionally attached to their favorite theory—a relationship that should have ended several
              pieces of contradictory evidence ago.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
              <h3 className="text-blue-800 font-medium mb-2">ACH Reality Check</h3>
              <p className="text-blue-700 mb-0">
                Remember: In the intelligence world, being wrong loudly and confidently isn&apos;t just embarrassing—it can
                lead to real-world consequences. ACH helps you be wrong in private first, so you can be right when it
                counts.
              </p>
            </div>

            <h2>Common ACH Pitfalls (That You'll Probably Fall Into Anyway)</h2>
            <ul>
              <li>
                <strong>The &quot;I&apos;ll Just Do This In My Head&quot; Trap</strong> - No, you won&apos;t. Your brain is lazy and will
                take shortcuts. Use the matrix.
              </li>
              <li>
                <strong>The &quot;My Favorite Hypothesis Is Still Right&quot; Delusion</strong> - If your original hypothesis
                survives intact after ACH, you probably did it wrong.
              </li>
              <li>
                <strong>The &quot;I Don&apos;t Have Time For This&quot; Excuse</strong> - You also don&apos;t have time to explain to your
                boss why you missed a critical alternative explanation.
              </li>
              <li>
                <strong>The &quot;I&apos;ve Added Too Many Hypotheses&quot; Spiral</strong> - Yes, alien intervention is technically a
                hypothesis, but let&apos;s keep it reasonable.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">ACH Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/ach-matrix-template" className="text-primary hover:underline">
                    ACH Matrix Template (Excel Format, Tears Not Included)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/heuer-psychology-intelligence-analysis"
                    className="text-primary hover:underline"
                  >
                    Heuer&apos;s &quot;Psychology of Intelligence Analysis&quot; (The ACH Bible)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/ach-case-studies" className="text-primary hover:underline">
                    ACH Case Studies: When Being Methodically Wrong Saved the Day
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Related Analytical Techniques</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/topics/structured-brainstorming" className="text-primary hover:underline">
                      Structured Brainstorming: Organized Chaos for Better Ideas
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/assumptions-check" className="text-primary hover:underline">
                      Assumptions Check: Questioning Everything You Hold Dear
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics/indicators-warnings" className="text-primary hover:underline">
                      Indicators Development: Crystal Ball Not Required
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
