import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileSearch, ShieldCheck, Swords } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Analyst Tools",
  description:
    "AI-powered intelligence analysis tools — generate structured reports, evaluate sources, and assess threats with Gemini Flash.",
}

const tools = [
  {
    id: "intelligence-report",
    name: "Intelligence Report Generator",
    description:
      "Turn your investigation findings into structured intelligence reports. Answer guided questions and receive a formatted report with executive summary, key findings, source assessment, and recommendations.",
    icon: FileSearch,
    gradient: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    id: "source-analysis",
    name: "Source Analysis",
    description:
      "Evaluate source reliability using structured analytic techniques. Assess access levels, past reliability, potential biases, and get an overall rating using professional intelligence community standards.",
    icon: ShieldCheck,
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
  },
  {
    id: "threat-assessment",
    name: "Threat Assessment",
    description:
      "Produce structured threat evaluations covering threat actor intent, capability, opportunity, likelihood, and impact. Get recommended countermeasures formatted for professional intelligence briefings.",
    icon: Swords,
    gradient: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
  },
]

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Analyst Tools
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          AI-powered intelligence analysis tools to accelerate your workflow.
          Powered by Gemini Flash &mdash; one free use to try each tool.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Link key={tool.id} href={`/tools/${tool.id}`} className="group block">
              <Card className="relative flex h-full flex-col overflow-hidden border-slate-800 bg-slate-900/50 p-6 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg">
                {/* Gradient background */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-50`}
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 ${tool.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 group-hover:text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-1 text-sm font-medium text-slate-300 group-hover:text-white">
                    Try tool
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900/30 p-8 text-center">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-slate-300">Free tier:</span> One generation per tool with Gemini Flash.{" "}
          <Link href="/pricing" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
            Pro subscription
          </Link>{" "}
          unlocks advanced AI models for deeper analysis.
        </p>
      </div>
    </div>
  )
}
