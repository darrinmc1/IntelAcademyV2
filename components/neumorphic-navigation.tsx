"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NeumorphicButton } from "@/components/ui/neumorphic-button"
import { NeumorphicCard } from "@/components/ui/neumorphic-card"
import { NeumorphicToggle } from "@/components/ui/neumorphic-toggle"
import { NeumorphicSearchBar } from "./neumorphic-search-bar"
import { Home, BookOpen, Search, Users, Menu, X, Shield, Brain, Target, Eye } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learning-paths", label: "Learning Paths", icon: BookOpen },
  { href: "/topics", label: "Topics", icon: Brain },
  { href: "/search", label: "Search", icon: Search },
  { href: "/community", label: "Community", icon: Users },
]

const intelligenceTypes = [
  { href: "/learning-paths/strategic-intelligence", label: "Strategic", icon: Shield },
  { href: "/learning-paths/tactical-intelligence", label: "Tactical", icon: Target },
  { href: "/learning-paths/osint", label: "OSINT", icon: Eye },
]

export function NeumorphicNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  const handleSearch = (query: string) => {
    // Handle search functionality
    console.log("Searching for:", query)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <NeumorphicCard className="hidden lg:block fixed top-4 left-4 right-4 z-50 p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Intel Academy</span>
            </Link>

            <div className="flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <NeumorphicButton
                    key={item.href}
                    asChild
                    variant={isActive ? "classified" : "default"}
                    size="sm"
                    effect={isActive ? "glow" : "none"}
                  >
                    <Link href={item.href} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </NeumorphicButton>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <NeumorphicSearchBar onSearch={handleSearch} className="w-64" />

            <div className="flex items-center space-x-2">
              <span className="text-sm">Dark Mode</span>
              <NeumorphicToggle checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
          </div>
        </nav>
      </NeumorphicCard>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <NeumorphicCard className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Intel Academy</span>
            </Link>

            <NeumorphicButton variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </NeumorphicButton>
          </div>
        </NeumorphicCard>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <NeumorphicCard className="fixed top-16 left-4 right-4 p-6 space-y-6">
              <NeumorphicSearchBar onSearch={handleSearch} className="w-full" />

              <nav className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Main Navigation</h3>
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <NeumorphicButton
                        key={item.href}
                        asChild
                        variant={isActive ? "classified" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.href} className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </NeumorphicButton>
                    )
                  })}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Intelligence Types</h3>
                  {intelligenceTypes.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <NeumorphicButton
                        key={item.href}
                        asChild
                        variant={isActive ? "secure" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.href} className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </NeumorphicButton>
                    )
                  })}
                </div>
              </nav>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm">Dark Mode</span>
                <NeumorphicToggle checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              </div>
            </NeumorphicCard>
          </div>
        )}
      </div>
    </>
  )
}
