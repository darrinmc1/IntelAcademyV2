"use client"

import { useEffect, useState } from "react"
import { Shield, Route, ClipboardList, Tag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { label: "Intelligence Types", icon: Shield, href: "#intelligence-types" },
  { label: "Learning Pathways", icon: Route, href: "#learning-paths" },
  { label: "Academy Brief", icon: ClipboardList, href: "/tools/academy-brief" },
]

export function HomepageQuickNav() {
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const read = () => setHash(window.location.hash)
    read()
    window.addEventListener("hashchange", read)
    return () => window.removeEventListener("hashchange", read)
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6 px-4">
      <nav className="flex flex-wrap justify-center gap-1 rounded-lg border border-white/10 bg-slate-900/70 p-1" aria-label="Workspace">
        {tabs.map((item) => {
          const active = item.href.startsWith("#") ? hash === item.href : pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active ? "true" : undefined}
              onClick={() => {
                if (item.href.startsWith("#")) setHash(item.href)
              }}
              className={cn(
                "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-cyan-600 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              )}
            >
              <item.icon className={cn("h-4 w-4", active ? "text-white" : "text-cyan-400")} aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <Link
        href="/pricing"
        className="inline-flex items-center gap-1.5 rounded-sm border border-amber-400/40 bg-transparent px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200/90"
      >
        <Tag className="h-3 w-3" aria-hidden="true" />
        Coming soon
      </Link>
    </div>
  )
}
