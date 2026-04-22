"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchBarProps extends React.HTMLAttributes<HTMLFormElement> {
  onSearch?: (query: string) => void
  defaultValue?: string
  placeholder?: string
}

export function SearchBar({
  onSearch,
  defaultValue = "",
  placeholder = "Search intelligence topics...",
  className,
  ...props
}: SearchBarProps) {
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
    <form onSubmit={handleSubmit} className={cn("relative", className)} {...props} data-testid="search-form">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-8 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-testid="search-input"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-10 top-0 h-full px-2 flex items-center"
            data-testid="search-clear"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
        <Button
          type="submit"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3"
          disabled={!query.trim() || isPending}
          data-testid="search-submit"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <span className="sr-only">Search</span>
              <Search className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
