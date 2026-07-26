import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { IntelWizard, type IntelTool } from "@/components/tools/intel-wizard"
import { Button } from "@/components/ui/button"

const TOOLS: IntelTool[] = [
  {
    id: "intelligence-report",
    name: "Intelligence Report Generator",
    description: "Turn investigation findings into structured intel reports",
    questions: [
      "What is the subject or target of this intelligence report?",
      "What are the key findings from your investigation?",
      "What sources were used and how reliable are they?",
      "What is the assessed confidence level of the intelligence? (Low / Moderate / High)",
      "What recommendations would you make based on these findings?",
    ],
  },
  {
    id: "source-analysis",
    name: "Source Analysis",
    description: "Evaluates source reliability using structured techniques",
    questions: [
      "What is the source name or identifier?",
      "What type of source is it? (HUMINT, SIGINT, OSINT, GEOINT, etc.)",
      "How reliable has this source been in the past? (A-F rating with justification)",
      "What is the source's level of access to the information provided?",
      "Are there any known biases, motivations, or conflicts of interest that could affect reliability?",
    ],
  },
  {
    id: "threat-assessment",
    name: "Threat Assessment",
    description: "Structured threat evaluation with mitigations",
    questions: [
      "What is the threat actor or entity being assessed?",
      "What is the nature of the threat they pose? (cyber, physical, espionage, etc.)",
      "What is the likelihood of this threat manifesting? (Low / Medium / High) — explain your reasoning.",
      "What would be the potential impact if the threat were realized?",
      "What mitigation measures are currently in place or recommended?",
    ],
  },
]

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ tool: tool.id }))
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool: toolId } = await params
  const tool = TOOLS.find((t) => t.id === toolId)
  if (!tool) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4 text-slate-400 hover:text-slate-200">
          <Link href="/tools">
            <ArrowLeft className="mr-1 h-4 w-4" />
            All tools
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          {tool.name}
        </h1>
        <p className="mt-2 text-slate-400">{tool.description}</p>
      </div>

      <IntelWizard tool={tool} />
    </div>
  )
}
