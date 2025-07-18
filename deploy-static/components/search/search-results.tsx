"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { StaticImage } from "@/components/static-image"
import { Loader2, AlertCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SearchResult {
  title: string
  description: string
  category: string
  path: string
  imagePath?: string
  highlights?: string
}

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [enhancedQuery, setEnhancedQuery] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    async function fetchResults() {
      if (!query.trim()) {
        setResults([])
        setEnhancedQuery(null)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        })

        if (!response.ok) {
          throw new Error(`Search failed with status: ${response.status}`)
        }

        const data = await response.json()
        setResults(data.results || [])
        setEnhancedQuery(data.enhancedQuery)
      } catch (err) {
        console.error("Search error:", err)
        setError(`Failed to perform search: ${err instanceof Error ? err.message : "Unknown error"}`)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query, retryCount])

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
        <p className="text-muted-foreground">Searching for intelligence resources...</p>
        <p className="text-sm text-muted-foreground mt-2">Query: "{query}"</p>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="flex flex-col gap-2">
          <p>{error}</p>
          <Button onClick={handleRetry} variant="outline" size="sm" className="self-start">
            Retry Search
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if (results.length === 0 && query.trim()) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
          <Search className="h-6 w-6 text-blue-600" />
        </div>
        <p className="text-lg font-medium mb-2">No results found for "{query}"</p>
        <p className="text-muted-foreground mb-6">Try different keywords or browse our learning paths</p>

        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          <Link href="/learning-paths" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-1">Browse Learning Paths</h3>
            <p className="text-sm text-muted-foreground">Explore our structured learning content</p>
          </Link>
          <Link href="/topics/all-topics" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-1">View All Topics</h3>
            <p className="text-sm text-muted-foreground">See a complete list of available topics</p>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {enhancedQuery && enhancedQuery !== query && (
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <p className="text-sm text-blue-700">
            <span className="font-medium">Search enhanced:</span> Showing results for "{enhancedQuery}"
          </p>
          <p className="text-xs text-blue-600 mt-1">Original search: "{query}"</p>
        </div>
      )}

      {results.length > 0 && (
        <p className="text-sm text-muted-foreground mb-4" data-testid="search-result-count">
          Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result, index) => (
          <Link
            href={result.path}
            key={index}
            className="block group border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            data-testid={`search-result-${index}`}
          >
            <div className="h-40 overflow-hidden bg-gray-100">
              <StaticImage
                src={result.imagePath || "/placeholder.svg?height=400&width=600&query=intelligence analysis"}
                alt={result.title}
                width={400}
                height={160}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                {result.category}
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{result.title}</h3>
              <p className="text-sm text-muted-foreground">{result.description}</p>
              {result.highlights && (
                <div className="mt-2 text-xs text-gray-500 border-t pt-2">
                  <p>"{result.highlights}"</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
