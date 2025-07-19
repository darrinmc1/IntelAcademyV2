"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import { StaticImage } from "@/components/static-image"
import { SearchBar } from "@/components/search/search-bar"
import { MobileSearch } from "@/components/search/mobile-search"
import { CategoryThumbnail } from "@/components/category-thumbnail"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdowns()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdowns()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when route changes
  useEffect(() => {
    closeDropdowns()
  }, [pathname])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  // Simplified main navigation items
  const mainNavItems = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      id: "learning",
      label: "Learning",
      active: pathname.startsWith("/learning-paths") || pathname.startsWith("/topics"),
      hasDropdown: true,
    },
    {
      id: "resources",
      label: "Resources",
      active: pathname === "/downloads" || pathname === "/forum" || pathname.startsWith("/forum/"),
      hasDropdown: true,
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      id: "admin",
      label: "Admin",
      active: pathname.startsWith("/admin"),
      hasDropdown: true,
    },
  ]

  // Mobile navigation items (more detailed)
  const mobileNavItems = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/learning-paths",
      label: "Learning Paths",
      active: pathname === "/learning-paths",
    },
    {
      href: "/learning-paths/foundations",
      label: "Foundations",
      active: pathname === "/learning-paths/foundations",
    },
    {
      href: "/learning-paths/strategic-intelligence",
      label: "Strategic Intelligence",
      active: pathname === "/learning-paths/strategic-intelligence",
    },
    {
      href: "/learning-paths/tactical-intelligence",
      label: "Tactical Intelligence",
      active: pathname === "/learning-paths/tactical-intelligence",
    },
    {
      href: "/learning-paths/operational-intelligence",
      label: "Operational Intelligence",
      active: pathname === "/learning-paths/operational-intelligence",
    },
    {
      href: "/learning-paths/osint",
      label: "OSINT",
      active: pathname === "/learning-paths/osint",
    },
    {
      href: "/learning-paths/digital-intelligence",
      label: "Digital Intelligence",
      active: pathname === "/learning-paths/digital-intelligence",
    },
    {
      href: "/learning-paths/geospatial-intelligence",
      label: "Geospatial Intelligence",
      active: pathname === "/learning-paths/geospatial-intelligence",
    },
    {
      href: "/learning-paths/financial-intelligence",
      label: "Financial Intelligence",
      active: pathname === "/learning-paths/financial-intelligence",
    },
    {
      href: "/learning-paths/intelligence-tools",
      label: "Intelligence Tools",
      active: pathname === "/learning-paths/intelligence-tools",
    },
    {
      href: "/learning-paths/source-evaluation",
      label: "Source Evaluation",
      active: pathname === "/learning-paths/source-evaluation",
    },
    {
      href: "/learning-paths/intelligence-ethics",
      label: "Intelligence Ethics",
      active: pathname === "/learning-paths/intelligence-ethics",
    },
    {
      href: "/learning-paths/cognitive-bias",
      label: "Cognitive Bias",
      active: pathname === "/learning-paths/cognitive-bias",
    },
    {
      href: "/learning-paths/intelligence-communication",
      label: "Intelligence Communication",
      active: pathname === "/learning-paths/intelligence-communication",
    },
    {
      href: "/video-library",
      label: "Video Library",
      active: pathname === "/video-library",
    },
    {
      href: "/advanced-topics",
      label: "Advanced Topics",
      active: pathname === "/advanced-topics",
    },
    {
      href: "/forum",
      label: "Community Forum",
      active: pathname === "/forum" || pathname.startsWith("/forum/"),
    },
    {
      href: "/downloads",
      label: "Downloads",
      active: pathname === "/downloads",
    },
    {
      href: "/learn-more",
      label: "Learn More",
      active: pathname === "/learn-more",
    },
    {
      href: "/coming-soon",
      label: "Coming Soon",
      active: pathname === "/coming-soon",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/admin/images",
      label: "Manage Images",
      active: pathname === "/admin/images",
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md" : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`}
      data-testid="site-header"
    >
      {activeDropdown && (
        <div className="fixed inset-0 bg-transparent z-40" onClick={closeDropdowns} aria-hidden="true" />
      )}
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-menu-button">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex items-center gap-2 mb-6">
                <StaticImage
                  src="/intelligence-analysis-workspace.png"
                  alt="Intelligence Analyst Academy Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="font-bold text-lg">Intelligence Analyst Academy</span>
              </div>
              <nav className="flex flex-col gap-4">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 p-2 rounded-md",
                      item.active ? "text-primary bg-muted" : "text-muted-foreground",
                    )}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      <StaticImage
                        src={`/${getIconForNavItem(item.label)}`}
                        alt=""
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2" data-testid="site-logo">
            <div className="relative w-8 h-8 overflow-hidden rounded-md">
              <StaticImage
                src="/intelligence-analysis-workspace.png"
                alt="Intelligence Analyst Academy Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="font-bold hidden md:inline-block">The Intel Analyst Academy</span>
            <span className="font-bold md:hidden">IAA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNavItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.id} className="relative" ref={item.id === activeDropdown ? dropdownRef : null}>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:text-primary group",
                      item.active || activeDropdown === item.id ? "text-primary" : "text-muted-foreground",
                    )}
                    data-testid={`nav-dropdown-${item.id}`}
                    aria-expanded={activeDropdown === item.id}
                    aria-controls={`dropdown-${item.id}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        activeDropdown === item.id ? "rotate-180" : "group-hover:translate-y-[2px]",
                      )}
                    />
                  </button>
                  <div
                    id={`dropdown-${item.id}`}
                    className={cn(
                      "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 transition-all duration-300 ease-in-out origin-top",
                      activeDropdown === item.id
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-95 translate-y-[-10px] pointer-events-none",
                    )}
                    style={{
                      maxWidth: "min(900px, 90vw)",
                      width: isTablet ? "90vw" : "900px",
                    }}
                  >
                    {item.id === "learning" && (
                      <LearningDropdown closeDropdowns={closeDropdowns} isMobile={isMobile} isTablet={isTablet} />
                    )}
                    {item.id === "resources" && (
                      <ResourcesDropdown closeDropdowns={closeDropdowns} isMobile={isMobile} isTablet={isTablet} />
                    )}
                    {item.id === "admin" && (
                      <AdminDropdown closeDropdowns={closeDropdowns} isMobile={isMobile} isTablet={isTablet} />
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    item.active ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={closeDropdowns}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
              Categories
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Search form - now separated from the Request a Topic button */}
          <div className="relative hidden md:block">
            <SearchBar
              className="w-[200px] lg:w-[300px]"
              onSearch={(query) => {
                if (query) {
                  router.push(`/search?q=${encodeURIComponent(query)}`)
                }
              }}
            />
          </div>

          {/* Mobile search button */}
          <MobileSearch />

          {/* Request a Topic button - now clearly separated */}
          <Button asChild className="ml-2" data-testid="request-topic-button">
            <Link href="/request-topic">Request a Topic</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

interface DropdownProps {
  closeDropdowns: () => void
  isMobile: boolean
  isTablet: boolean
}

function LearningDropdown({ closeDropdowns, isMobile, isTablet }: DropdownProps) {
  if (isTablet) {
    return (
      <div
        className="p-4 animate-fadeIn relative"
        onClick={closeDropdowns}
        style={{
          backgroundImage: "url('/intelligence-images/strategic-intelligence/strategic-intelligence-default.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        data-testid="learning-dropdown"
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

        <div className="relative z-10 flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg">Learning Paths</h3>
          <button onClick={closeDropdowns} className="text-gray-500 hover:text-gray-700" aria-label="Close dropdown">
            <X size={20} />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {/* Core Intelligence Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Core Intelligence</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learning-paths/foundations" className="flex items-center gap-2 hover:text-primary">
                  <CategoryThumbnail category="foundations" size="xs" />
                  <span className="text-sm">Foundations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/strategic-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="strategic-intelligence" size="xs" />
                  <span className="text-sm">Strategic Intelligence</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/tactical-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="tactical-intelligence" size="xs" />
                  <span className="text-sm">Tactical Intelligence</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/operational-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="operational-intelligence" size="xs" />
                  <span className="text-sm">Operational Intelligence</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Intelligence Methods Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Intelligence Methods</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learning-paths/osint" className="flex items-center gap-2 hover:text-primary">
                  <CategoryThumbnail category="osint" size="xs" />
                  <span className="text-sm">OSINT</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/digital-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="digital-intelligence" size="xs" />
                  <span className="text-sm">Digital Intelligence</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/geospatial-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="geospatial-intelligence" size="xs" />
                  <span className="text-sm">Geospatial Intelligence</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-paths/financial-intelligence"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <CategoryThumbnail category="financial-intelligence" size="xs" />
                  <span className="text-sm">Financial Intelligence</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-4 pt-4 border-t">
          <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Analysis & Skills</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Link href="/learning-paths/analytical-techniques" className="hover:text-primary flex items-center gap-2">
              <CategoryThumbnail category="analytical-techniques" size="xs" />
              <span className="text-xs">Analytical Techniques</span>
            </Link>
            <Link href="/learning-paths/intelligence-tools" className="hover:text-primary flex items-center gap-2">
              <CategoryThumbnail category="intelligence-tools" size="xs" />
              <span className="text-xs">Intelligence Tools</span>
            </Link>
            <Link href="/learning-paths/source-evaluation" className="hover:text-primary flex items-center gap-2">
              <CategoryThumbnail category="source-evaluation" size="xs" />
              <span className="text-xs">Source Evaluation</span>
            </Link>
            <Link href="/learning-paths/report-writing" className="hover:text-primary flex items-center gap-2">
              <CategoryThumbnail category="report-writing" size="xs" />
              <span className="text-xs">Report Writing</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-4 text-center">
          <Link
            href="/learning-paths"
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100"
          >
            View All Learning Paths →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-3 p-6 gap-6 animate-fadeIn relative"
      onClick={closeDropdowns}
      style={{
        backgroundImage: "url('/strategic-intelligence-default.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      data-testid="learning-dropdown"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

      {/* Core Intelligence Disciplines */}
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">Core Intelligence</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "50ms" }}>
            <Link href="/learning-paths/foundations" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="foundations" size="sm" />
              <div>
                <div className="font-medium">Foundations</div>
                <div className="text-sm text-muted-foreground">Intelligence fundamentals</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "100ms" }}>
            <Link href="/learning-paths/strategic-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="strategic-intelligence" size="sm" />
              <div>
                <div className="font-medium">Strategic Intelligence</div>
                <div className="text-sm text-muted-foreground">Long-term planning</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "150ms" }}>
            <Link href="/learning-paths/tactical-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="tactical-intelligence" size="sm" />
              <div>
                <div className="font-medium">Tactical Intelligence</div>
                <div className="text-sm text-muted-foreground">Immediate operations</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "200ms" }}>
            <Link href="/learning-paths/operational-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="operational-intelligence" size="sm" />
              <div>
                <div className="font-medium">Operational Intelligence</div>
                <div className="text-sm text-muted-foreground">Day-to-day operations</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Intelligence Methods */}
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">Intelligence Methods</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "250ms" }}>
            <Link href="/learning-paths/osint" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="osint" size="sm" />
              <div>
                <div className="font-medium">OSINT</div>
                <div className="text-sm text-muted-foreground">Open Source Intelligence</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "300ms" }}>
            <Link href="/learning-paths/digital-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="digital-intelligence" size="sm" />
              <div>
                <div className="font-medium">Digital Intelligence</div>
                <div className="text-sm text-muted-foreground">Digital evidence & analysis</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "350ms" }}>
            <Link href="/learning-paths/geospatial-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="geospatial-intelligence" size="sm" />
              <div>
                <div className="font-medium">Geospatial Intelligence</div>
                <div className="text-sm text-muted-foreground">Geographic analysis</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "400ms" }}>
            <Link href="/learning-paths/financial-intelligence" className="flex items-start gap-2 hover:text-primary">
              <CategoryThumbnail category="financial-intelligence" size="sm" />
              <div>
                <div className="font-medium">Financial Intelligence</div>
                <div className="text-sm text-muted-foreground">Financial investigations</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Analysis Techniques & Tools */}
      <div className="border-l pl-6 relative z-10">
        <h3 className="font-bold text-lg mb-2">Analysis & Skills</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <Link href="/learning-paths/analytical-techniques" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="analytical-techniques" size="sm" />
            <span className="text-sm">Analytical Techniques</span>
          </Link>
          <Link href="/learning-paths/intelligence-tools" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="intelligence-tools" size="sm" />
            <span className="text-sm">Intelligence Tools</span>
          </Link>
          <Link href="/learning-paths/source-evaluation" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="source-evaluation" size="sm" />
            <span className="text-sm">Source Evaluation</span>
          </Link>
          <Link href="/learning-paths/report-writing" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="report-writing" size="sm" />
            <span className="text-sm">Report Writing</span>
          </Link>
          <Link href="/learning-paths/intelligence-ethics" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="intelligence-ethics" size="sm" />
            <span className="text-sm">Intelligence Ethics</span>
          </Link>
          <Link href="/learning-paths/cognitive-bias" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="cognitive-bias" size="sm" />
            <span className="text-sm">Cognitive Bias</span>
          </Link>
          <Link
            href="/learning-paths/intelligence-communication"
            className="hover:text-primary flex items-center gap-2"
          >
            <CategoryThumbnail category="intelligence-communication" size="sm" />
            <span className="text-sm">Communication</span>
          </Link>
          <Link href="/learning-paths/excel-for-analysts" className="hover:text-primary flex items-center gap-2">
            <CategoryThumbnail category="excel-for-analysts" size="sm" />
            <span className="text-sm">Excel for Analysts</span>
          </Link>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <StaticImage
              src="/learning-adventure.png"
              alt=""
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <h4 className="font-semibold mb-1">View All Learning Paths</h4>
            <p className="text-sm text-muted-foreground mb-2">Explore our complete curriculum</p>
            <Link href="/learning-paths" className="text-sm text-blue-600 hover:underline">
              Browse All Paths →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResourcesDropdown({ closeDropdowns, isMobile, isTablet }: DropdownProps) {
  if (isTablet) {
    return (
      <div
        className="p-4 animate-fadeIn relative"
        onClick={closeDropdowns}
        style={{
          backgroundImage: "url('/collaborative-intelligence-hub.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        data-testid="resources-dropdown"
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

        <div className="relative z-10 flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg">Resources</h3>
          <button onClick={closeDropdowns} className="text-gray-500 hover:text-gray-700" aria-label="Close dropdown">
            <X size={20} />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {/* Community Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/forum" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                    <StaticImage
                      src="/online-forum-threads.png"
                      alt="Community Forum"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Community Forum</span>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                    <StaticImage
                      src="/learning-adventure.png"
                      alt="Coming Soon"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Coming Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Materials Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Materials</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/downloads" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                    <StaticImage
                      src="/excel-dashboard-insights.png"
                      alt="Downloads"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Downloads</span>
                </Link>
              </li>
              <li>
                <Link href="/learn-more" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                    <StaticImage
                      src="/immersive-learning-lab.png"
                      alt="Learn More"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Learn More</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-4 text-center">
          <Link
            href="/request-topic"
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100"
          >
            Request a Topic →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-3 p-6 gap-6 animate-fadeIn relative"
      onClick={closeDropdowns}
      style={{
        backgroundImage: "url('/collaborative-intelligence-hub.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      data-testid="resources-dropdown"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">Community</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "50ms" }}>
            <Link href="/forum" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                <StaticImage
                  src="/online-forum-threads.png"
                  alt="Community Forum"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Community Forum</div>
                <div className="text-sm text-muted-foreground">Connect with other analysts</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "100ms" }}>
            <Link href="/coming-soon" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                <StaticImage
                  src="/learning-adventure.png"
                  alt="Coming Soon"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Coming Soon</div>
                <div className="text-sm text-muted-foreground">Upcoming features and content</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">Materials</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "150ms" }}>
            <Link href="/downloads" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                <StaticImage
                  src="/excel-dashboard-insights.png"
                  alt="Downloads"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Downloads</div>
                <div className="text-sm text-muted-foreground">Templates, guides, and tools</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "200ms" }}>
            <Link href="/learn-more" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                <StaticImage
                  src="/immersive-learning-lab.png"
                  alt="Learn More"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Learn More</div>
                <div className="text-sm text-muted-foreground">Additional learning resources</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-l pl-6 relative z-10">
        <div className="bg-gray-50 p-4 rounded-md overflow-hidden">
          <div className="h-32 mb-3 rounded-md overflow-hidden">
            <StaticImage
              src="/intelligence-analysis-workspace.png"
              alt="Intelligence Analysis Workspace"
              width={300}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="font-semibold mb-1">Request a Topic</h4>
          <p className="text-sm text-muted-foreground mb-2">Don't see what you're looking for? Request new content.</p>
          <Link href="/request-topic" className="text-sm text-blue-600 hover:underline">
            Submit Request →
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/admin/images"
            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
          >
            <div className="w-4 h-4 rounded overflow-hidden shrink-0">
              <StaticImage src="/digital-badge-display.png" alt="" width={16} height={16} className="object-cover" />
            </div>
            Admin: Manage Images
          </Link>
        </div>
      </div>
    </div>
  )
}

function AdminDropdown({ closeDropdowns, isMobile, isTablet }: DropdownProps) {
  if (isTablet) {
    return (
      <div
        className="p-4 animate-fadeIn relative"
        onClick={closeDropdowns}
        style={{
          backgroundImage: "url('/intelligence-analysis-workspace.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        data-testid="admin-dropdown"
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

        <div className="relative z-10 flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg">Admin</h3>
          <button onClick={closeDropdowns} className="text-gray-500 hover:text-gray-700" aria-label="Close dropdown">
            <X size={20} />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {/* Content Management Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">Content Management</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/images" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                    <StaticImage
                      src="/intelligence-collection-thumb.png"
                      alt="Manage Images"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Manage Images</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/videos" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                    <StaticImage
                      src="/intelligence-dissemination-thumb.png"
                      alt="Manage Videos"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Manage Videos</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/blob-upload" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                    <StaticImage
                      src="/intelligence-direction-thumb.png"
                      alt="Blob Upload"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Blob Upload</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* System Management Section */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-600 uppercase tracking-wider">System Management</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/status" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                    <StaticImage
                      src="/intelligence-analysis-thumb.png"
                      alt="System Status"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">System Status</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/search-test" className="flex items-center gap-2 hover:text-primary">
                  <div className="w-6 h-6 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                    <StaticImage
                      src="/intelligence-feedback-thumb.png"
                      alt="Search Test"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">Search Test</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-4 text-center">
          <Link
            href="/admin"
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100"
          >
            Go to Dashboard →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-3 p-6 gap-6 animate-fadeIn relative"
      onClick={closeDropdowns}
      style={{
        backgroundImage: "url('/intelligence-analysis-workspace.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      data-testid="admin-dropdown"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

      {/* Content Management */}
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">Content Management</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "50ms" }}>
            <Link href="/admin/images" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-collection-thumb.png"
                  alt="Manage Images"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Manage Images</div>
                <div className="text-sm text-muted-foreground">Upload and organize images</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "100ms" }}>
            <Link href="/admin/videos" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-dissemination-thumb.png"
                  alt="Manage Videos"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Manage Videos</div>
                <div className="text-sm text-muted-foreground">Upload and organize videos</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "150ms" }}>
            <Link href="/admin/blob-upload" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-direction-thumb.png"
                  alt="Blob Upload"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Blob Upload</div>
                <div className="text-sm text-muted-foreground">Upload files to blob storage</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "200ms" }}>
            <Link href="/admin/coming-soon-pages" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-processing-thumb.png"
                  alt="Coming Soon Pages"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Coming Soon Pages</div>
                <div className="text-sm text-muted-foreground">Manage coming soon pages</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* System Management */}
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">System Management</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "250ms" }}>
            <Link href="/admin/status" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-analysis-thumb.png"
                  alt="System Status"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">System Status</div>
                <div className="text-sm text-muted-foreground">Check system health</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "300ms" }}>
            <Link href="/admin/search-test" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-feedback-thumb.png"
                  alt="Search Test"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Search Test</div>
                <div className="text-sm text-muted-foreground">Test search functionality</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "350ms" }}>
            <Link href="/admin/verify-search" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-cycle-overview-thumb.png"
                  alt="Verify Search"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Verify Search</div>
                <div className="text-sm text-muted-foreground">Verify search results</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "400ms" }}>
            <Link href="/admin/category-thumbnails" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/what-is-intelligence-thumb.png"
                  alt="Category Thumbnails"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Category Thumbnails</div>
                <div className="text-sm text-muted-foreground">Manage category thumbnails</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Dashboard & Analytics */}
      <div className="border-l pl-6 relative z-10">
        <h3 className="font-bold text-lg mb-2">Dashboard & Analytics</h3>
        <ul className="space-y-2">
          <li className="animate-slideIn" style={{ animationDelay: "450ms" }}>
            <Link href="/admin" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/intelligence-decision-making-thumb.png"
                  alt="Admin Dashboard"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Admin Dashboard</div>
                <div className="text-sm text-muted-foreground">Overview and quick actions</div>
              </div>
            </Link>
          </li>
          <li className="animate-slideIn" style={{ animationDelay: "500ms" }}>
            <Link href="/admin/image-check" className="flex items-start gap-2 hover:text-primary">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-blue-50 flex items-center justify-center">
                <StaticImage
                  src="/information-vs-intelligence-thumb.png"
                  alt="Image Check"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">Image Check</div>
                <div className="text-sm text-muted-foreground">Verify image integrity</div>
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-6 bg-blue-50 p-4 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <StaticImage
              src="/digital-investigation-interface.png"
              alt=""
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <h4 className="font-semibold mb-1">Admin Dashboard</h4>
            <p className="text-sm text-muted-foreground mb-2">Access all admin tools and settings</p>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              Go to Dashboard →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get icon for nav item
function getIconForNavItem(label: string): string {
  switch (label) {
    case "Home":
      return "what-is-intelligence-thumb.png"
    case "Learning Paths":
      return "intelligence-cycle-overview-thumb.png"
    case "Community Forum":
      return "intelligence-feedback-thumb.png"
    case "Downloads":
      return "intelligence-dissemination-thumb.png"
    case "Learn More":
      return "intelligence-analysis-thumb.png"
    case "Coming Soon":
      return "intelligence-direction-thumb.png"
    case "About":
      return "intelligence-processing-thumb.png"
    case "Manage Images":
      return "intelligence-collection-thumb.png"
    case "Advanced Topics":
      return "intelligence-collection-thumb.png"
    case "Video Library":
      return "intelligence-collection-thumb.png"
    default:
      return "what-is-intelligence-thumb.png"
  }
}
