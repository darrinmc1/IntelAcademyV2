import { Building2, Brain, ShieldCheck } from "lucide-react"
import Link from "next/link"

interface SisterSite {
  name: string
  description: string
  url: string
  icon: React.ReactNode
}

const sites: SisterSite[] = [
  {
    name: "Peel Boss",
    description: "Management & leadership training",
    url: "https://peelboss.com",
    icon: <Building2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "AI Training Hub",
    description: "AI skills, tools & practical training",
    url: "#",
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Cybersecurity Academy",
    description: "Cyber defence training & certification prep",
    url: "#",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
  },
]

export function SisterSites() {
  return (
    <div className="py-8">
      <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-4">
        Sister Networks
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sites.map((site) => {
          const cardContent = (
            <>
              <div className="flex items-start justify-between mb-3">
                <div>{site.icon}</div>
                <div className="text-[10px] bg-amber-500/20 text-amber-400 rounded-full px-2 py-0.5 font-medium">
                  Coming Soon
                </div>
              </div>
              <h5 className="text-white font-medium text-sm mb-2">{site.name}</h5>
              <p className="text-slate-500 text-xs">{site.description}</p>
            </>
          )

          if (site.url === "#") {
            return (
              <div
                key={site.name}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
              >
                {cardContent}
              </div>
            )
          }

          return (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all block"
            >
              {cardContent}
            </a>
          )
        })}
      </div>
    </div>
  )
}
