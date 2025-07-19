import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BookOpen, Search, AlertTriangle, Coffee, Brain, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Intelligence Glossary | The Intel Analyst Academy",
  description: "A glossary of intelligence terms with humorous definitions",
}

export default function GlossaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 mb-8 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Intelligence Glossary</h1>
        <p className="text-xl italic text-slate-200">The Analyst&apos;s Dictionary of Jargon and Justifications</p>

        <div className="mt-6 p-4 bg-slate-600/50 rounded-md border border-slate-500">
          <div className="flex items-center gap-2 text-amber-300 mb-2">
            <Lightbulb size={20} />
            <p className="font-semibold">Analyst Wisdom:</p>
          </div>
          <p className="italic">
            "Half of intelligence work is knowing what you&apos;re talking about. The other half is convincing others you
            know what you&apos;re talking about."
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-slate-700" />
          <h2 className="text-2xl font-bold text-slate-800">How To Use This Glossary</h2>
        </div>
        <p className="mb-4">
          Each entry contains the official definition followed by the &quot;unofficial translation&quot; that analysts whisper
          when supervisors aren&apos;t listening. Use this guide to navigate intelligence jargon and impress colleagues with
          your vocabulary (while secretly understanding what these terms actually mean in practice).
        </p>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <AlertTriangle size={20} />
            <p className="font-semibold">Caution:</p>
          </div>
          <p>
            Using the unofficial definitions in official reports may result in career limitations, confused
            policymakers, or worst of all, additional mandatory training sessions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        {/* HUMINT */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">HUMINT</h3>
            <p className="text-sm text-blue-100">Human Intelligence</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>Intelligence gathered through interpersonal contact and human sources.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "The art of buying someone coffee until they tell you things they shouldn&apos;t. Alternatively, the reason
                intelligence budgets include expense accounts for bars and restaurants."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Coffee size={16} />
              <p>Expense reports may require creative writing skills</p>
            </div>
          </div>
        </div>

        {/* OSINT */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">OSINT</h3>
            <p className="text-sm text-green-100">Open Source Intelligence</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>Intelligence collected from publicly available sources such as media, internet, and public data.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Professional internet stalking with government approval. What you do on your ex&apos;s social media, but
                with better tools and a paycheck."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Search size={16} />
              <p>Advanced Google searching is a legitimate career skill</p>
            </div>
          </div>
        </div>

        {/* SIGINT */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-purple-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">SIGINT</h3>
            <p className="text-sm text-purple-100">Signals Intelligence</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                Intelligence derived from electronic signals and systems used by foreign targets, such as communications
                systems, radars, and weapons systems.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Eavesdropping with billion-dollar equipment. Like listening to your neighbor&apos;s conversation through the
                wall, but with satellites and a classified budget."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <AlertTriangle size={16} />
              <p>May involve explaining to leadership why we need another satellite</p>
            </div>
          </div>
        </div>

        {/* GEOINT */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-amber-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">GEOINT</h3>
            <p className="text-sm text-amber-100">Geospatial Intelligence</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                Intelligence about the human activity on earth derived from the exploitation and analysis of imagery and
                geospatial information.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Google Earth for spies. Taking satellite photos and saying &apos;Enhance!&apos; until someone asks if you&apos;ve been
                watching too many crime shows."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Brain size={16} />
              <p>Requires explaining that "enhance" button doesn't actually exist</p>
            </div>
          </div>
        </div>

        {/* Intelligence Cycle */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Intelligence Cycle</h3>
            <p className="text-sm text-red-100">Planning, Collection, Processing, Analysis, Dissemination</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                The process by which information is acquired, converted into intelligence, and made available to
                policymakers.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "A theoretical workflow that looks great in PowerPoint presentations but in reality resembles a game of
                telephone played during an earthquake. Starts with someone asking an impossible question and ends with
                an analyst crying into their coffee."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Coffee size={16} />
              <p>Coffee consumption increases at each stage of the cycle</p>
            </div>
          </div>
        </div>

        {/* Intelligence Failure */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-slate-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Intelligence Failure</h3>
            <p className="text-sm text-slate-300">When Intelligence Gets It Wrong</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                A systemic organizational surprise resulting from incorrect, missing, discarded, or inadequate
                hypotheses.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "What happens when analysts get blamed for policymakers ignoring their warnings. Alternatively, the
                reason intelligence agencies suddenly receive budget increases after major events."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <AlertTriangle size={16} />
              <p>Often followed by congressional hearings and reorganizations</p>
            </div>
          </div>
        </div>

        {/* Actionable Intelligence */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-emerald-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Actionable Intelligence</h3>
            <p className="text-sm text-emerald-100">Intelligence That Can Be Used</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                Intelligence information that is directly useful to customers without having to go through the full
                intelligence production process.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Intelligence that arrives before the decision has already been made. Rarer than unicorns. Often claimed
                in retrospect: &apos;We totally had actionable intelligence, they just didn&apos;t act on it.&apos;"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <ArrowRight size={16} />
              <p>The holy grail of intelligence products</p>
            </div>
          </div>
        </div>

        {/* Analysis of Competing Hypotheses */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Analysis of Competing Hypotheses (ACH)</h3>
            <p className="text-sm text-indigo-100">Analytical Methodology</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                A methodology for evaluating multiple competing hypotheses for observed data, to avoid cognitive biases.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Making a spreadsheet to prove your first guess was right all along. A formal way of saying &apos;I
                considered other options but they&apos;re all stupid.&apos;"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Brain size={16} />
              <p>Involves creating matrices no one will read</p>
            </div>
          </div>
        </div>

        {/* Confidence Levels */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-cyan-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Confidence Levels</h3>
            <p className="text-sm text-cyan-100">High, Moderate, Low Confidence</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                An evaluation of the quality and quantity of source information used in forming an analytic judgment.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "How willing you are to stake your career on a guess. High confidence = &apos;I&apos;ll bet my job on it.&apos;
                Moderate confidence = &apos;I think so but don&apos;t quote me.&apos; Low confidence = &apos;This is basically a horoscope
                but we needed to say something.&apos;"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <AlertTriangle size={16} />
              <p>Inversely proportional to how much you'll be blamed if wrong</p>
            </div>
          </div>
        </div>

        {/* Estimative Language */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-rose-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">Estimative Language</h3>
            <p className="text-sm text-rose-100">Probably, Likely, Almost Certainly</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                Standardized language used to convey degrees of likelihood and confidence in intelligence assessments.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "Creative ways to avoid saying &apos;I don&apos;t know&apos; while ensuring plausible deniability. &apos;Highly likely&apos;
                means &apos;pretty sure but not sure enough to bet my pension on it.&apos; &apos;Low confidence&apos; means &apos;this is
                basically a guess but my boss needed something by 5pm.&apos;"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <Lightbulb size={16} />
              <p>The difference between "probably" and "likely" has launched a thousand email chains</p>
            </div>
          </div>
        </div>

        {/* BLUF */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">BLUF</h3>
            <p className="text-sm text-orange-100">Bottom Line Up Front</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h4 className="font-semibold text-slate-700">Official Definition:</h4>
              <p>
                A communication technique that places the most important information at the beginning of the message.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2">Unofficial Translation:</h4>
              <p className="italic text-slate-600">
                "A desperate attempt to get busy executives to read at least one sentence of your 20-page report. An
                acknowledgment that your audience has the attention span of a goldfish with ADHD."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <ArrowRight size={16} />
              <p>The only part of your report anyone will actually read</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="text-amber-600" />
          <h2 className="text-xl font-bold text-slate-800">Analyst Humor Corner</h2>
        </div>
        <div className="p-4 bg-white rounded-md shadow-sm">
          <p className="italic mb-2">Q: How many intelligence analysts does it take to change a light bulb?</p>
          <p>
            A: We can neither confirm nor deny the existence of a light bulb, but we assess with moderate confidence
            that if such a light bulb existed, it would require between 1-5 analysts to change it, depending on
            clearance levels and whether a proper risk assessment has been filed.
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-slate-500 mt-8">
        <p>
          Remember: In intelligence work, a sense of humor is not just recommended—it&apos;s classified as essential
          equipment.
        </p>
        <p className="mt-2">
          <Link href="/learning-paths" className="text-blue-600 hover:underline">
            Return to Learning Paths
          </Link>
        </p>
      </div>
    </div>
  )
}
