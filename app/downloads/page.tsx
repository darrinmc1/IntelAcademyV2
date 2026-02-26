import type { Metadata } from "next"
import {
  AlertTriangle, BarChart2, BookOpen, CheckSquare, Clock,
  Database, DollarSign, Download, FileText, Globe,
  HardDrive, MapPin, Network, Presentation, Shield, Table, User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHero } from "@/components/page-hero"

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
}

const resources: Resource[] = [
  { title: "Intelligence Report Template Library", type: "Document Collection", description: "Standardised report formats for all intelligence product types — strategic assessments, operational briefings, and threat analyses.", icon: FileText, iconColor: "text-cyan-400", action: "Download Templates", tab: "templates" },
  { title: "ACH Matrix Templates", type: "Excel Templates", description: "Analysis of Competing Hypotheses matrices that help analysts systematically evaluate multiple theories against available evidence.", icon: Table, iconColor: "text-emerald-400", action: "Download Templates", tab: "templates" },
  { title: "Collection Plan Template", type: "Excel Template", description: "Strategic framework for organising intelligence gathering efforts, outlining requirements, sources, collection methods, and timelines.", icon: Table, iconColor: "text-emerald-400", action: "Download Template", tab: "templates" },
  { title: "Link Analysis Network Mapping", type: "Visio Templates", description: "Visual tools for mapping relationships between suspects, organisations, locations, and assets — showing connections and hierarchies.", icon: Network, iconColor: "text-purple-400", action: "Download Templates", tab: "templates" },
  { title: "Pattern Analysis Worksheets", type: "PDF & Excel", description: "Structured tools for identifying trends, cycles, and recurring behaviours. Helps analysts recognise modus operandi and predict future activity.", icon: BarChart2, iconColor: "text-orange-400", action: "Download Worksheets", tab: "templates" },
  { title: "Threat Assessment Matrix", type: "Excel Template", description: "Risk evaluation tool that categorises threats by likelihood and impact severity with a standardised scoring system.", icon: AlertTriangle, iconColor: "text-red-400", action: "Download Matrix", tab: "templates" },
  { title: "Intelligence Requirements Database", type: "Excel Template", description: "Centralised system for tracking and prioritising information needs. Manages standing requirements and critical intelligence gaps.", icon: Database, iconColor: "text-cyan-400", action: "Download Template", tab: "templates" },
  { title: "Daily Briefing Document", type: "Word Template", description: "Standardised format for routine intelligence updates including overnight incidents, emerging trends, and priority actions.", icon: FileText, iconColor: "text-cyan-400", action: "Download Template", tab: "templates" },
  { title: "Evidence Matrix Template", type: "Excel Template", description: "Organisational tool for mapping evidence to hypotheses in investigations. Tracks information consistency and identifies case gaps.", icon: Table, iconColor: "text-emerald-400", action: "Download Template", tab: "templates" },
  { title: "Pre-Operation Brief Template", type: "PowerPoint Template", description: "Mission intelligence package format containing subject information, threat assessments, support requirements, and contingency procedures.", icon: Presentation, iconColor: "text-orange-400", action: "Download Template", tab: "templates" },
  { title: "Cognitive Bias Checklist", type: "PDF Checklist", description: "Self-assessment tool for identifying potential biases affecting analytical judgement, with prompts for maintaining objectivity.", icon: FileText, iconColor: "text-red-400", action: "Download Checklist", tab: "cheatsheets" },
  { title: "Key Assumptions Check Form", type: "PDF Form", description: "Critical analysis tool for identifying and challenging underlying beliefs. Forces analysts to explicitly state and test assumptions against evidence.", icon: FileText, iconColor: "text-red-400", action: "Download Form", tab: "cheatsheets" },
  { title: "OSINT Collection Checklist", type: "PDF Checklist", description: "Systematic protocol for open-source intelligence gathering, covering search strategies, source types, and legal compliance.", icon: Globe, iconColor: "text-cyan-400", action: "Download Checklist", tab: "cheatsheets" },
  { title: "Timeline Development Tool", type: "Excel Template", description: "Visual chronology creator for case development showing event sequences and temporal relationships.", icon: Clock, iconColor: "text-purple-400", action: "Download Template", tab: "templates" },
  { title: "Risk Assessment Framework", type: "PDF & Excel", description: "System for evaluating operational hazards, including threat analysis, vulnerability assessment, and mitigation planning.", icon: Shield, iconColor: "text-emerald-400", action: "Download Framework", tab: "guides" },
  { title: "Intelligence Primer Handbook", type: "PDF Handbook", description: "Foundational reference guide covering core intelligence concepts, methodologies, terminology, best practices, and ethics.", icon: BookOpen, iconColor: "text-cyan-400", action: "Download Handbook", tab: "guides" },
  { title: "Estimative Language Dictionary", type: "PDF Reference", description: "Standardised probability expressions for analytical accuracy — consistent interpretation of terms like \"likely\" and \"probable\".", icon: FileText, iconColor: "text-red-400", action: "Download Dictionary", tab: "guides" },
  { title: "Professional Writing Checklist", type: "PDF Checklist", description: "Quality assurance tool ensuring clear, concise, and accurate intelligence products — structure, grammar, evidence citation.", icon: CheckSquare, iconColor: "text-emerald-400", action: "Download Checklist", tab: "cheatsheets" },
  { title: "Person of Interest Profile", type: "Word Template", description: "Subject research framework for biographical information, criminal history, associations, and behavioural patterns.", icon: User, iconColor: "text-cyan-400", action: "Download Template", tab: "templates" },
  { title: "Financial Investigation Worksheet", type: "Excel Template", description: "Structured tool for tracking money flow, asset ownership, business relationships, and suspicious activity patterns.", icon: DollarSign, iconColor: "text-emerald-400", action: "Download Worksheet", tab: "templates" },
  { title: "Geolocation Toolkit", type: "PDF & Digital Tools", description: "Collection of location identification methods — coordinate systems, map reading, landmark identification, and GPS analysis.", icon: MapPin, iconColor: "text-red-400", action: "Download Toolkit", tab: "guides" },
  { title: "Digital Evidence Documentation", type: "PDF Guide", description: "Standards for collecting, preserving, and documenting electronic evidence — chain of custody and admissibility requirements.", icon: HardDrive, iconColor: "text-purple-400", action: "Download Guide", tab: "guides" },
]

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon
  return (
    <div className="group flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(8,145,178,0.15)] transition-all duration-300">
      <div className="p-6 flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
            <Icon className={`h-5 w-5 ${resource.iconColor}`} />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors leading-tight">{resource.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{resource.type}</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 font-light leading-relaxed">{resource.description}</p>
      </div>
      <div className="px-6 pb-6">
        <Button className="w-full bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/30 transition-all duration-300" variant="outline">
          <Download className="mr-2 h-4 w-4" /> {resource.action}
        </Button>
      </div>
    </div>
  )
}

export default function Downloads() {
  const tabs = [
    { value: "all", label: "All Resources" },
    { value: "templates", label: "Templates" },
    { value: "cheatsheets", label: "Cheat Sheets" },
    { value: "guides", label: "Guides" },
  ]

  return (
    <>
      <PageHero
        title="Downloads &"
        accentTitle="Templates"
        subtitle="Free tools and reference materials to enhance your intelligence analysis workflow."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
      />

      <div className="container mx-auto px-4 py-12">
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
