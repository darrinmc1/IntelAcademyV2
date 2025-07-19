"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useAudioCues } from "@/hooks/use-audio-cues"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

interface AudioEnhancedNavProps {
  items: NavItem[]
  className?: string
}

export function AudioEnhancedNav({ items, className }: AudioEnhancedNavProps) {
  const pathname = usePathname()
  const { playSound } = useAudioCues({ volume: 0.08 })

  return (
    <nav className={cn("flex space-x-1", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative"
            onMouseEnter={() => playSound("navHover")}
            onClick={() => playSound("navClick")}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2",
                isActive ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{item.label}</span>
            </motion.div>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
