import { Building2, Brain, ShieldCheck } from "lucide-react"

interface SisterSite {
  name: string
  description: string
  url: string
  icon: React.ReactNode
}

// Only real, verified-live URLs. Verified 2026-09-21 (all HTTP 200).
const sites: SisterSite[] = [
  {
    name: "PeelBoss",
    description: "Management platform — ops, teams and delivery",
    url: "https://peelboss.com",
    icon: <Building2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "FreelancePro",
    description: "Contracts, proposals & pricing for freelancers",
    url: "https://freelancepro-teal.vercel.app",
    icon: <Building2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "AI for SMB",
    description: "AI tools for small business operations",
    url: "https://aiforsmb.vercel.app",
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "ABC of Cyber",
    description: "Cybersecurity training without the scare tactics",
    url: "https://abcofcyber.com",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
  },
]

export function SisterSites() {
  return (
    <div className="py-8">
      <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-4">
        Sister Networks
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all block"
          >
            <div className="mb-3">{site.icon}</div>
            <h5 className="text-white font-medium text-sm mb-2">{site.name}</h5>
            <p className="text-slate-500 text-xs">{site.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
