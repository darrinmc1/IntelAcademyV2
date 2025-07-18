"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { NeumorphicInput } from "@/components/ui/neumorphic-input"
import { NeumorphicButton } from "@/components/ui/neumorphic-button"
import { cn } from "@/lib/utils"

interface NeumorphicSearchBarProps {
  onSearch?: (query: string) => void
  defaultValue?: string
  placeholder?: string
  className?: string
}

export function NeumorphicSearchBar({
  onSearch,
  defaultValue = "",
  placeholder = "Search intelligence topics...",
  className,
}: NeumorphicSearchBarProps) {
  const [query, setQuery] = useState(defaultValue)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && onSearch) {
      startTransition(() => {
        onSearch(query.trim())
      })
    }
  }

  const handleClear = () => {
    setQuery("")
    if (onSearch) {
      startTransition(() => {
        onSearch("")
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <NeumorphicInput
          type="search"
          placeholder={placeholder}
          className="pl-10 pr-20"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="search"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
        <NeumorphicButton
          type="submit"
          variant="classified"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          disabled={!query.trim() || isPending}
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          <span className="sr-only">Search</span>
        </NeumorphicButton>
      </div>
    </form>
  )
}
