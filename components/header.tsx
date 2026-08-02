"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import { StaticImage } from "@/components/static-image"
import { SearchBar } from "@/components/search/search-bar"
import { MobileSearch } from "@/components/search/mobile-search"
import { CategoryThumbnail } from "@/components/category-thumbnail"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ProfileBar } from "@/components/profile-bar"
import { HumorModeToggle } from "@/components/humor-mode-toggle"
import { useAuth } from "@/components/auth-provider"
import { logout } from "@/app/actions/auth"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { isLoading: authLoading, isAuthenticated, user } = useAuth()
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

  const isStaff = isAuthenticated && user && ['admin', 'editor', 'moderator'].includes(user.role ?? '')

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
    ...(isStaff ? [{
      href: "/admin",
      label: "Admin",
      active: pathname.startsWith("/admin"),
    }] : []),
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}
      data-testid="site-header"
    >
      {activeDropdown && (
        <div className="fixed inset-0 bg-transparent z-40" onClick={closeDropdowns} aria-hidden="true" />
      )}
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-cyan-400">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] bg-slate-950/95 backdrop-blur-xl border-r border-white/10 text-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <StaticImage
                  src="/intelligence-analysis-workspace.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-md ring-2 ring-cyan-500/30"
                />
                <span className="font-bold text-lg text-white">Intel Academy</span>
              </div>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">Home</Link>
                <Link href="/learning-paths" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">Learning Paths</Link>
                <Link href="/downloads" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">Downloads</Link>
                <Link href="/about" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">About</Link>
                <Link href="/categories" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">Categories</Link>
                {isStaff && <Link href="/admin" className="text-sm p-2 rounded-md hover:bg-white/5 hover:text-cyan-400 text-slate-300">Admin</Link>}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-md ring-2 ring-cyan-500/30 hover:ring-cyan-400 transition-all">
              <StaticImage
                src="/intelligence-analysis-workspace.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-sm text-white">The Intel</span>
              <span className="font-bold text-sm text-white">Analyst Academy</span>
            </div>
            <span className="font-bold text-lg sm:hidden text-white">IAA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 xl:gap-6 ml-6">
            {!authLoading && mainNavItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-all hover:text-cyan-400",
                      item.active || activeDropdown === item.id ? "text-cyan-400" : "text-slate-200",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400",
                    item.active ? "text-cyan-400" : "text-slate-200",
                  )}
                  onClick={closeDropdowns}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/categories" className="text-sm font-medium transition-colors text-slate-200 hover:text-cyan-400">
              Categories
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <SearchBar
              className="w-[160px] lg:w-[220px] bg-slate-900/50 border-white/10 text-white placeholder:text-slate-400 focus-within:border-cyan-500/50 rounded-full transition-all text-sm"
              onSearch={(query) => {
                if (query) {
                  router.push(`/search?q=${encodeURIComponent(query)}`)
                }
              }}
            />
          </div>

          <div className="md:hidden">
            <MobileSearch />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <HumorModeToggle compact />
            {!authLoading && !isAuthenticated ? (
              <>
                <Link href="/login" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                  Login
                </Link>
                <Link href="/register" className="text-xs px-2 py-1 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium border border-cyan-400/30">
                  Register
                </Link>
              </>
            ) : (
              <>
                {user && (
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                    {user.role}
                  </span>
                )}
                <Link href="/profile" className="text-xs text-slate-400 hover:text-cyan-400">
                  Profile
                </Link>
                <button
                  onClick={() => logout()}
                  className="text-xs px-2 py-1 rounded-md text-slate-400 hover:text-red-400 hover:bg-red-900/20 transition-colors flex items-center gap-1"
                  title="Logout"
                >
                  <LogOut className="h-3 w-3" />
                  Logout
                </button>
                <ProfileBar />
              </>
            )}
          </div>

          <Button asChild className="hidden sm:flex bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-4 py-1 text-sm glow-primary-hover border border-cyan-400/30">
            <Link href="/request-topic">Request Topic</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}