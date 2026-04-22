import type { Metadata } from "next"
import {
  AlertTriangle, BarChart2, BookOpen, CheckSquare, Clock,
  Database, DollarSign, Download, FileText, Globe,
  HardDrive, MapPin, Network, Presentation, Shield, Table, User, Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Downloads & Templates | The Intel Analyst Academy",
  description: "Free intelligence analysis templates, cheat sheets, and reference guides.",
}

interface Resource {
  title: string
  type: string
  description: string
  icon: React.ElementType
  iconColor: string
  action: string
  tab: string
  status: "available" | "coming-soon"
  file?: string
}

const resources: Resource[] = [
  // ── AVAILABLE ──────────────────────────────────────────────────────────
  {
    title: "Estimative Language Dictionary",
    type: "PDF Reference",
    description: "Standardised probability expressions for analytical accuracy — consistent interpretation of terms like \"likely\" and \"probable\".",
    icon: FileText, iconColor: "text-red-400",
    action: "Download Dictionary", tab: "guides",
    status: "available", file: "estimative-language-dictionary.pdf",
  },
  {
    title: "Cognitive Bias Checklist",
    type: "PDF Checklist",
    description: "Self-assessment tool for identifying potential biases affecting analytical judgement, with prompts for maintaining objectivity.",
    icon: FileText, iconColor: "text-red-400",
    action: "Download Checklist", tab: "cheatsheets",
    status: "available", file: "cognitive-bias-checklist.pdf",
  },
  {
    title: "Professional Writing Checklist",
    type: "PDF Checklist",
    description: "Quality assurance tool for clear, concise intelligence products — covering structure, grammar, and evidence citation.",
    icon: CheckSquare, iconColor: "text-emerald-400",
    action: "Download Checklist", tab: "cheatsheets",
    status: "available", file: "professional-writing-checklist.pdf",
  },
  {
    title: "Key Assumptions Check Form",
    type: "PDF Form",
    description: "Forces analysts to surface and test the assumptions underpinning their assessment before finalising any product.",
    icon: FileText, iconColor: "text-red-400",
    action: "Download Form", tab: "cheatsheets",
    status: "available", file: "key-assumptions-check-form.pdf",
  },
  {
    title: "OSINT Collection Checklist",
    type: "PDF Checklist",
    description: "Systematic protocol for open-source intelligence gathering, covering search strategies, source types, and legal compliance.",
    icon: Globe, iconColor: "text-cyan-400",
    action: "Download Checklist", tab: "cheatsheets",
    status: "available", file: "osint-collection-checklist.pdf",
  },
  {
    title: "Risk Assessment Framework",
    type: "PDF",
    description: "Five-phase framework for evaluating operational hazards — threat identification, vulnerability assessment, risk matrix, and mitigation planning.",
    icon: Shield, iconColor: "text-emerald-400",
    action: "Download Framework", tab: "guides",
    status: "available", file: "risk-assessment-framework.pdf",
  },
  {
    title: "Intelligence Primer Handbook",
    type: "PDF Handbook",
    description: "Foundational reference covering the intelligence cycle, collection types, analytical standards, ethics, and a quick-reference glossary.",
    icon: BookOpen, iconColor: "text-cyan-400",
    action: "Download Handbook", tab: "guides",
    status: "available", file: "intelligence-primer-handbook.pdf",
  },
  {
    title: "Digital Evidence Documentation",
    type: "PDF Guide",
    description: "Standards for collecting, preserving, and documenting electronic evidence — chain of custody form, device handling, and admissibility requirements.",
    icon: HardDrive, iconColor: "text-purple-400",
    action: "Download Guide", tab: "guides",
    status: "available", file: "digital-evidence-documentation.pdf",
  },
  {
    title: "Intelligence Report Template Library",
    type: "PDF — 5 Templates",
    description: "Five standardised report formats: Strategic Assessment, Tactical Brief, Threat Assessment, Intelligence Requirements Register, and Operational Briefing.",
    icon: FileText, iconColor: "text-cyan-400",
    action: "Download Library", tab: "templates",
    status: "available", file: "intelligence-report-template-library.pdf",
  },
  {
    title: "Daily Briefing Document",
    type: "PDF Template",
    description: "Standardised format for routine intelligence updates — threat picture, overnight incidents, emerging trends, and priority actions.",
    icon: FileText, iconColor: "text-cyan-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "daily-briefing-document.pdf",
  },
  {
    title: "Person of Interest Profile",
    type: "PDF Template",
    description: "Seven-section subject profile covering biography, location, associations, criminal history, financial profile, analytical assessment, and review log.",
    icon: User, iconColor: "text-cyan-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "person-of-interest-profile.pdf",
  },
  {
    title: "ACH Matrix Templates",
    type: "PDF — 3 Templates",
    description: "Analysis of Competing Hypotheses — blank 4-hypothesis matrix, worked example with colour-coded scoring, and sensitivity analysis template.",
    icon: Table, iconColor: "text-emerald-400",
    action: "Download Templates", tab: "templates",
    status: "available", file: "ach-matrix-templates.pdf",
  },
  {
    title: "Threat Assessment Matrix",
    type: "PDF Template",
    description: "Likelihood and impact rating scales, colour-coded 5×5 risk matrix, and a 9-row threat register with treatment options.",
    icon: AlertTriangle, iconColor: "text-red-400",
    action: "Download Matrix", tab: "templates",
    status: "available", file: "threat-assessment-matrix.pdf",
  },
  {
    title: "Evidence Matrix Template",
    type: "PDF Template",
    description: "Map evidence to hypotheses, track reliability and credibility ratings, identify gaps, and build a defensible analytical product.",
    icon: Table, iconColor: "text-emerald-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "evidence-matrix-template.pdf",
  },
  {
    title: "Collection Plan Template",
    type: "PDF Template",
    description: "Translates intelligence requirements into taskings — IR register, collection taskings, source register, gap analysis, and reporting requirements.",
    icon: Table, iconColor: "text-emerald-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "collection-plan-template.pdf",
  },
  {
    title: "Timeline Development Tool",
    type: "PDF Template",
    description: "20-row event log, visual timeline strip, pattern analysis table, and temporal gap analysis for case development and intelligence analysis.",
    icon: Clock, iconColor: "text-purple-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "timeline-development-tool.pdf",
  },
  {
    title: "Financial Investigation Worksheet",
    type: "PDF Template",
    description: "Track transactions, map entities and relationships, document suspicious activity indicators, and summarise findings for SMR filing.",
    icon: DollarSign, iconColor: "text-emerald-400",
    action: "Download Worksheet", tab: "templates",
    status: "available", file: "financial-investigation-worksheet.pdf",
  },
  {
    title: "Pattern Analysis Worksheets",
    type: "PDF — 5 Worksheets",
    description: "Five worksheets covering temporal, geographic, behavioural/MO, network association, and trend pattern analysis.",
    icon: BarChart2, iconColor: "text-orange-400",
    action: "Download Worksheets", tab: "templates",
    status: "available", file: "pattern-analysis-worksheets.pdf",
  },
  {
    title: "Intelligence Requirements Database",
    type: "PDF Template",
    description: "Centralised register for PIRs, standing requirements, critical intelligence gaps, and production tracking with consumer feedback.",
    icon: Database, iconColor: "text-cyan-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "intelligence-requirements-database.pdf",
  },
  {
    title: "Pre-Operation Brief Template",
    type: "PDF Template",
    description: "Full SMEAC format — situation, mission, execution, service support, command & signal, subject intelligence package, and acknowledgement.",
    icon: Presentation, iconColor: "text-orange-400",
    action: "Download Template", tab: "templates",
    status: "available", file: "pre-operation-brief-template.pdf",
  },
  // ── COMING SOON ────────────────────────────────────────────────────────
  {
    title: "Geolocation Toolkit",
    type: "PDF & Digital Tools",
    description: "Location identification methods — coordinate systems, map reading, landmark identification, and GPS analysis.",
    icon: MapPin, iconColor: "text-red-400",
    action: "Download Toolkit", tab: "guides",
    status: "coming-soon",
  },
  {
    title: "Link Analysis Network Mapping",
    type: "PDF Templates",
    description: "Visual tools for mapping relationships between suspects, organisations, locations, and assets.",
    icon: Network, iconColor: "text-purple-400",
    action: "Download Templates", tab: "templates",
    status: "coming-soon",
  },
]

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon
  const isAvailable = resource.status === "available"

  return (
    <div className={`group flex flex-col bg-slate-900/60 backdrop-blur-xl border rounded-xl overflow-hidden transition-all duration-300 ${
      isAvailable
        ? "border-white/10 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(8,145,178,0.15)]"
        : "border-white/5 opacity-80"
    }`}>
      <div className="p-6 flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
            {isAvailable
              ? <Icon className={`h-5 w-5 ${resource.iconColor}`} />
              : <Lock className="h-5 w-5 text-slate-500" />
            }
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className={`font-semibold leading-tight ${isAvailable ? "text-white group-hover:text-cyan-400 transition-colors" : "text-slate-400"}`}>
                {resource.title}
              </h3>
              {!isAvailable && (
                <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium shrink-0">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{resource.type}</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 font-light leading-relaxed">{resource.description}</p>
        {isAvailable && (
          <p className="text-xs text-slate-500 mt-3 italic">
            Need Word or Excel?{" "}
            <a href="mailto:info@theintelanalystacademy.com.au" className="text-cyan-500 hover:underline">
              Email us
            </a>
          </p>
        )}
      </div>
      <div className="px-6 pb-6">
        {isAvailable ? (
          <a href={`/downloads/${resource.file}`} download>
            <Button className="w-full bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/30 transition-all duration-300" variant="outline">
              <Download className="mr-2 h-4 w-4" /> {resource.action}
            </Button>
          </a>
        ) : (
          <Link href={`/downloads/coming-soon?resource=${encodeURIComponent(resource.title)}`}>
            <Button className="w-full bg-slate-800/50 text-slate-500 border border-white/5 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-300" variant="outline">
              <Clock className="mr-2 h-4 w-4" /> Notify Me When Available
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Downloads() {
  const availableCount = resources.filter(r => r.status === "available").length

  const tabs = [
    { value: "all", label: "All Resources" },
    { value: "templates", label: "Templates" },
    { value: "cheatsheets", label: "Cheat Sheets" },
    { value: "guides", label: "Guides" },
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span className="mx-2 text-slate-600">/</span>
            <span>Downloads</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Downloads &amp; <span className="text-cyan-400">Templates</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Free tools and reference materials to enhance your intelligence analysis workflow.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8 bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-5 py-3">
          <Download className="h-5 w-5 text-cyan-400 shrink-0" />
          <p className="text-sm text-slate-300">
            <span className="text-cyan-400 font-semibold">{availableCount} resources</span> available now — more added regularly.
            Need a specific format?{" "}
            <a href="mailto:info@theintelanalystacademy.com.au" className="text-cyan-400 hover:underline">
              Email us
            </a>
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-slate-900/60 border border-white/10 p-1 rounded-xl">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="rounded-lg data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-400"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter((r) => t.value === "all" || r.tab === t.value)
                  .map((r) => <ResourceCard key={r.title} resource={r} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
