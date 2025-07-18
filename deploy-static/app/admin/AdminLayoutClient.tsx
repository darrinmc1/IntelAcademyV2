"use client"

import React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ImageIcon,
  FileVideo,
  Upload,
  Search,
  Settings,
  Users,
  BookOpen,
  BarChart2,
  Clock,
  Grid,
  Menu,
  Database,
  Home,
  FileText,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: <BookOpen className="h-5 w-5" />,
    submenu: [
      {
        title: "Content Manager",
        href: "/admin/content-manager",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        title: "Content Update",
        href: "/admin/topics",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: "Images",
        href: "/admin/images",
        icon: <ImageIcon className="h-5 w-5" />,
      },
      {
        title: "Image Check",
        href: "/admin/image-check",
        icon: <ImageIcon className="h-5 w-5" />,
      },
      {
        title: "Videos",
        href: "/admin/videos",
        icon: <FileVideo className="h-5 w-5" />,
      },
      {
        title: "Blob Upload",
        href: "/admin/blob-upload",
        icon: <Upload className="h-5 w-5" />,
      },
      {
        title: "Coming Soon Pages",
        href: "/admin/coming-soon-pages",
        icon: <Clock className="h-5 w-5" />,
      },
      {
        title: "Category Thumbnails",
        href: "/admin/category-thumbnails",
        icon: <Grid className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Topics",
    href: "/admin/topics",
    icon: <BookOpen className="h-5 w-5" />,
    submenu: [
      {
        title: "Topic Management",
        href: "/admin/topics",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: "Curriculum Overview",
        href: "/admin/curriculum",
        icon: <Grid className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "System",
    href: "/admin/system",
    icon: <Database className="h-5 w-5" />,
    submenu: [
      {
        title: "Status",
        href: "/admin/status",
        icon: <Settings className="h-5 w-5" />,
      },
      {
        title: "Search Test",
        href: "/admin/search-test",
        icon: <Search className="h-5 w-5" />,
      },
      {
        title: "Verify Search",
        href: "/admin/verify-search",
        icon: <Search className="h-5 w-5" />,
      },
      {
        title: "Settings",
        href: "/admin/settings",
        icon: <Settings className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Return to Site",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
]

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  const isSubmenuActive = (submenu?: NavItem[]) => {
    if (!submenu) return false
    return submenu.some((item) => pathname === item.href)
  }

  // Find which submenu sections should be open initially based on current path
  React.useEffect(() => {
    navItems.forEach((item) => {
      if (item.submenu && item.submenu.some((subItem) => pathname === subItem.href)) {
        setOpenSubmenu(item.title)
      }
    })
  }, [pathname])

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <div key={item.title}>
        {item.submenu ? (
          <>
            <button
              onClick={() => toggleSubmenu(item.title)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                isSubmenuActive(item.submenu) ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-4 w-4 transition-transform", openSubmenu === item.title ? "rotate-180" : "")}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openSubmenu === item.title && (
              <div className="mt-1 ml-4 space-y-1 border-l pl-3">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                      isActive(subItem.href) ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
                    )}
                  >
                    {subItem.icon}
                    <span>{subItem.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
              isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
            )}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        )}
      </div>
    ))
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header - Always visible */}
      <header className="border-b bg-white z-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex h-16 items-center border-b px-6">
                  <Link href="/admin" className="font-bold text-lg">
                    Intel Analyst Academy
                  </Link>
                </div>
                <ScrollArea className="h-[calc(100vh-4rem)]">
                  <div className="px-3 py-2">
                    <nav className="space-y-1">{renderNavItems(navItems)}</nav>
                  </div>
                </ScrollArea>
                <div className="absolute bottom-4 left-4 right-4">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/admin" className="font-bold text-lg">
              Intel Analyst Academy
            </Link>
          </div>

          {/* Top navigation - desktop only */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/admin" className={cn("text-sm font-medium", isActive("/admin") && "text-primary")}>
              Dashboard
            </Link>
            <Link
              href="/admin/content-manager"
              className={cn("text-sm font-medium", isActive("/admin/content-manager") && "text-primary")}
            >
              Content Manager
            </Link>
            <Link
              href="/admin/verify-search"
              className={cn("text-sm font-medium", isActive("/admin/verify-search") && "text-primary")}
            >
              Search Verification
            </Link>
            <Link
              href="/admin/settings"
              className={cn("text-sm font-medium", isActive("/admin/settings") && "text-primary")}
            >
              Settings
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium">
              View Site
            </Link>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r h-[calc(100vh-4rem)] overflow-hidden fixed top-16">
          <ScrollArea className="h-full">
            <div className="px-3 py-2">
              <nav className="space-y-1">{renderNavItems(navItems)}</nav>
            </div>
          </ScrollArea>
        </div>

        {/* Main content */}
        <div className="md:ml-64 w-full flex-1 bg-gray-50 min-h-[calc(100vh-4rem)]">
          <main className="container py-6 px-4">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}
