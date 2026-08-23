"use client"

import { Shield, Route, ClipboardList, Tag } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Intelligence Types", icon: Shield, href: "#intelligence-types" },
  { label: "Learning Pathways", icon: Route, href: "#learning-paths" },
  { label: "Academy Brief", icon: ClipboardList, href: "/tools/academy-brief" },
  { label: "Pricing", icon: Tag, href: "/pricing" },
]

export function HomepageQuickNav() {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-6">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full 
                     bg-white/5 border border-white/10 hover:border-cyan-500/40 
                     hover:bg-cyan-500/10 transition-all duration-300
                     text-slate-300 hover:text-cyan-400 text-sm font-medium"
        >
          <item.icon className="w-4 h-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
          {item.label}
        </Link>
      ))}
    </div>
  )
}
