"use client"

import React from "react"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Search, X, Loader2, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function MobileSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [isPending, startTransition] = useTransition()
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // Load recent searches from localStorage when component mounts
  React.useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        const parsedSearches = JSON.parse(savedSearches)
        if (Array.isArray(parsedSearches)) {
          setRecentSearches(parsedSearches.slice(0, 5)) // Limit to 5 recent searches
        }
      } catch (e) {
        console.error("Failed to parse recent searches", e)
      }
    }
  }, [])

  const saveSearch = (searchQuery: string) => {
    const updatedSearches = [searchQuery, ...recentSearches.filter((s) => s !== searchQuery)].slice(0, 5)

    setRecentSearches(updatedSearches)
    try {
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    } catch (e) {
      console.error("Failed to save recent searches", e)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (query.trim()) {
      saveSearch(query.trim())
      startTransition(() => {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        setOpen(false)
      })
    }
  }

  const handleRecentSearchClick = (searchQuery: string) => {
    saveSearch(searchQuery)
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setOpen(false)
    })
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    try {
      localStorage.removeItem("recentSearches")
    } catch (e) {
      console.error("Failed to clear recent searches", e)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-search-button">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Search</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search intelligence topics..."
                className="pl-10"
                autoFocus
                data-testid="mobile-search-input"
              />
            </div>
            <Button type="submit" disabled={!query.trim() || isPending} data-testid="mobile-search-submit">
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
            </Button>
          </form>

          {recentSearches.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium flex items-center gap-1">
                  <History className="h-4 w-4" />
                  Recent searches
                </h3>
                <Button variant="ghost" size="sm" onClick={clearRecentSearches} className="text-xs h-auto py-1">
                  Clear
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleRecentSearchClick(search)}
                    className="text-left px-2 py-1.5 hover:bg-gray-100 rounded-md text-sm flex items-center gap-2"
                    data-testid={`recent-search-${index}`}
                  >
                    <Search className="h-3 w-3 text-muted-foreground" />
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <h3 className="text-sm font-medium mb-2">Popular searches</h3>
            <div className="flex flex-wrap gap-2">
              <PopularSearchButton
                label="OSINT"
                onClick={() => {
                  saveSearch("OSINT")
                  router.push("/search?q=OSINT")
                  setOpen(false)
                }}
              />
              <PopularSearchButton
                label="Intelligence Cycle"
                onClick={() => {
                  saveSearch("Intelligence Cycle")
                  router.push("/search?q=Intelligence+Cycle")
                  setOpen(false)
                }}
              />
              <PopularSearchButton
                label="Report Writing"
                onClick={() => {
                  saveSearch("Report Writing")
                  router.push("/search?q=Report+Writing")
                  setOpen(false)
                }}
              />
              <PopularSearchButton
                label="Analysis Techniques"
                onClick={() => {
                  saveSearch("Analysis Techniques")
                  router.push("/search?q=Analysis+Techniques")
                  setOpen(false)
                }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function PopularSearchButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
      data-testid={`popular-search-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {label}
    </button>
  )
}
