import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import TopicHeader from "@/components/topic-header"
import LessonContent from "@/components/lesson-content"
import WhatsNext from "@/components/whats-next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Intelligence Failures: Case Studies | The Intel Analyst Academy",
  description:
    "Examine historical intelligence failures, their causes, and lessons learned to improve future analysis.",
}

export default function IntelligenceFailuresPage() {
  return (
    <LessonContainer>
      <TopicHeader
        title="Intelligence Failures: Case Studies"
        subtitle="Learning from History's Most Expensive 'Oops' Moments"
        imageUrl="/intelligence-failures.png"
      />

      <LessonContent>
        <h2 className="text-2xl font-bold mb-4">When Intelligence Goes Wrong: A Highlight Reel</h2>

        <p className="mb-4">
          Welcome to the Intelligence Community&apos;s Hall of Shame, where we examine the most spectacular &quot;we probably
          should have seen that coming&quot; moments in history. These case studies aren&apos;t just fascinating examples of human
          error—they&apos;re valuable learning opportunities wrapped in layers of bureaucratic embarrassment.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="font-semibold">Analyst Humor:</p>
          <p>
            Intelligence agencies have a unique way of describing failures: &quot;unforeseen developments,&quot; &quot;intelligence
            gaps,&quot; or the ever-popular &quot;alternative success scenario.&quot;
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">
          Pearl Harbor (1941): The Original "We Should Have Seen It Coming"
        </h3>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-2/3">
            <p className="mb-4">
              Despite numerous warning signs—including intercepted Japanese communications, diplomatic signals, and
              military preparations—the U.S. was caught completely off guard by the attack on Pearl Harbor.
            </p>
            <p className="mb-4">
              <strong>What went wrong:</strong> Information silos, failure to connect dots, and the classic &quot;they
              wouldn&apos;t dare&quot; assumption. Turns out, they would dare. They dared quite spectacularly, in fact.
            </p>
            <p className="mb-4">
              <strong>Lesson learned:</strong> Just because something seems unlikely doesn't mean it is. Also, maybe
              share information between departments? Just a thought.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/placeholder-dzp13.png"
              alt="Pearl Harbor attack"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Bay of Pigs (1961): When Wishful Thinking Meets Reality</h3>

        <p className="mb-4">
          The CIA-sponsored invasion of Cuba by Cuban exiles was based on the assumption that the Cuban people would
          rise up and join the invaders. Spoiler alert: they didn&apos;t.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="italic">
            &quot;The Bay of Pigs operation was the perfect intelligence failure: excellent in theory, catastrophic in
            practice, and somehow nobody&apos;s fault afterward.&quot;
          </p>
        </div>

        <p className="mb-4">
          <strong>What went wrong:</strong> Groupthink, confirmation bias, and the dangerous assumption that &quot;the enemy
          of my enemy must love me.&quot; Turns out, not everyone who dislikes Castro was eager to join a U.S.-backed
          invasion. Who knew?
        </p>

        <p className="mb-4">
          <strong>Lesson learned:</strong> Don't confuse what you want to happen with what will happen. Also, maybe have
          a backup plan that isn't "hope for the best."
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">9/11 Attacks (2001): Connect the Dots... After the Fact</h3>

        <p className="mb-4">
          Despite various intelligence agencies having pieces of information about the plot, the U.S. failed to prevent
          the September 11 attacks. In hindsight, the signals seem obvious. In foresight, not so much.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="font-semibold">Analyst Humor:</p>
          <p>
            The 9/11 Commission Report could have been subtitled: &quot;How to Find a Needle in a Haystack... After Someone
            Points Out Which Haystack and Which Needle.&quot;
          </p>
        </div>

        <p className="mb-4">
          <strong>What went wrong:</strong> Information silos between agencies, failure to share critical intelligence,
          and the inability to imagine this type of attack. The FBI and CIA were like two people each holding half of a
          treasure map but refusing to show each other.
        </p>

        <p className="mb-4">
          <strong>Lesson learned:</strong> Share information, break down silos, and maybe consider that the unimaginable
          is actually quite imaginable. Also, create the Department of Homeland Security, because what we really needed
          was another agency in the mix.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Iraq WMDs (2003): The Case of the Missing Weapons</h3>

        <p className="mb-4">
          Intelligence agencies concluded that Iraq possessed weapons of mass destruction, leading to the 2003 invasion.
          After extensive searching, these weapons were found to be as real as your childhood imaginary friend.
        </p>

        <p className="mb-4">
          <strong>What went wrong:</strong> Political pressure, confirmation bias, over-reliance on unreliable sources,
          and a dash of "we've already decided what we want to find." It's like deciding you want pizza for dinner and
          then only looking for evidence that supports eating pizza.
        </p>

        <p className="mb-4">
          <strong>Lesson learned:</strong> Question your sources, resist political pressure, and remember that absence
          of evidence is not evidence of absence... but it's also not evidence of presence. Also, maybe double-check
          before starting a war?
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Arab Spring (2011): The Revolution Will Not Be Predicted</h3>

        <p className="mb-4">
          Intelligence agencies largely failed to predict the Arab Spring uprisings that swept across the Middle East
          and North Africa. Turns out, predicting mass social movements is hard, especially when you&apos;re not paying
          attention to social media.
        </p>

        <p className="mb-4">
          <strong>What went wrong:</strong> Overemphasis on stability, underestimation of social media&apos;s impact, and the
          classic &quot;it hasn&apos;t happened before, so it won&apos;t happen now&quot; fallacy. It&apos;s like saying &quot;I&apos;ve never been in a
          car accident, so I don&apos;t need insurance.&quot;
        </p>

        <p className="mb-4">
          <strong>Lesson learned:</strong> Pay attention to social indicators, don&apos;t assume stability, and maybe check
          Twitter once in a while? Also, revolutions don&apos;t always announce themselves with a save-the-date card.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Common Threads: The Greatest Hits of Failure</h3>

        <p className="mb-4">Across these failures, several patterns emerge:</p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Information Silos:</strong> When agencies hoard information like dragons hoarding gold, nobody wins
            (except maybe the adversaries).
          </li>
          <li>
            <strong>Cognitive Biases:</strong> Confirmation bias, groupthink, and mirror-imaging lead analysts to see
            what they expect to see, not what&apos;s actually there. It&apos;s like wearing rose-colored glasses to a crime scene.
          </li>
          <li>
            <strong>Failure of Imagination:</strong> The inability to consider scenarios outside the norm. &quot;They
            wouldn&apos;t do that&quot; is often followed by &quot;Oh wait, they just did that.&quot;
          </li>
          <li>
            <strong>Political Pressure:</strong> When intelligence becomes what policymakers want to hear rather than
            what they need to hear. It's like telling your boss their idea is brilliant when it's actually terrible.
          </li>
          <li>
            <strong>Overconfidence:</strong> The dangerous belief that &quot;we would know if something was happening.&quot;
            Narrator: They did not know.
          </li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h4 className="font-bold mb-2">The Analyst's Failure Prevention Checklist:</h4>
          <p className="mb-4">Ask yourself these questions to avoid joining the Intelligence Failure Hall of Fame:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Am I considering all possible scenarios, even the unlikely ones? (Remember, "unlikely" doesn't mean
              "impossible.")
            </li>
            <li>
              Have I shared this information with relevant stakeholders? (Your brilliant analysis isn't helpful if it's
              just sitting in your drawer.)
            </li>
            <li>
              Am I being influenced by what policymakers want to hear? (Your job is to tell the truth, not to make
              friends.)
            </li>
            <li>Have I challenged my own assumptions? (Your first instinct might be wrong, and that's okay.)</li>
            <li>
              Am I relying too heavily on past patterns? (History doesn't always repeat itself, sometimes it just posts
              memes about itself.)
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Conclusion: Failing Forward</h3>

        <p className="mb-4">
          Intelligence failures are inevitable—we&apos;re trying to predict the future with incomplete information, after
          all. The key is to learn from these failures rather than repeat them. As the saying goes, &quot;It&apos;s fine to make
          mistakes as long as they&apos;re new mistakes.&quot;
        </p>

        <p className="mb-4">
          By studying these historical failures, analysts can develop a more nuanced understanding of the pitfalls that
          await them. Remember, the goal isn't perfect prediction (that's impossible) but rather reducing the frequency
          and impact of intelligence failures.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="font-semibold">Final Analyst Humor:</p>
          <p>
            Intelligence analysis is the art of being wrong with confidence, learning why you were wrong, and then being
            wrong about something completely different next time. Progress!
          </p>
        </div>
      </LessonContent>

      <WhatsNext
        nextTopics={[
          {
            title: "Cognitive Biases in Intelligence",
            description: "Understand the mental traps that lead to intelligence failures",
            href: "/topics/cognitive-biases",
          },
          {
            title: "Structured Analytical Techniques",
            description: "Methods to improve analysis and avoid common pitfalls",
            href: "/topics/structured-analytical-techniques",
          },
          {
            title: "Intelligence Success Stories",
            description: "Because we don't always get it wrong",
            href: "/topics/intelligence-successes",
          },
        ]}
      />
    </LessonContainer>
  )
}
