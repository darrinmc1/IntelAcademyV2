"use client"

import { useState } from "react"
import { testSearch } from "@/utils/test-search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle, Search } from "lucide-react"

export default function SearchTestPage() {
  const [query, setQuery] = useState("")
  const [testResults, setTestResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [testQueries, setTestQueries] = useState<string[]>([
    "intelligence cycle",
    "osint techniques",
    "report writing",
    "strategic analysis",
    "crime mapping",
  ])

  const runTest = async (testQuery: string) => {
    setIsLoading(true)
    setQuery(testQuery)

    try {
      const result = await testSearch(testQuery)
      setTestResults(result)
    } catch (error) {
      setTestResults({
        success: false,
        error: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  const runAllTests = async () => {
    const results = []

    for (const testQuery of testQueries) {
      setQuery(testQuery)
      setIsLoading(true)

      try {
        const result = await testSearch(testQuery)
        results.push({ query: testQuery, ...result })
      } catch (error) {
        results.push({
          query: testQuery,
          success: false,
          error: error instanceof Error ? error.message : String(error),
        })
      }

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    setTestResults({ batchResults: results })
    setIsLoading(false)
  }

  const addTestQuery = () => {
    if (query && !testQueries.includes(query)) {
      setTestQueries([...testQueries, query])
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Search Functionality Test</h1>
      <p className="text-muted-foreground mb-6">
        Use this page to verify that the search functionality is working correctly with the Groq integration.
      </p>

      <div className="flex gap-2 mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a search query"
          className="max-w-md"
        />
        <Button onClick={() => runTest(query)} disabled={!query || isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
          Test Search
        </Button>
        <Button variant="outline" onClick={addTestQuery} disabled={!query || testQueries.includes(query)}>
          Add to Test List
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Test Queries</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {testQueries.map((testQuery) => (
            <Button key={testQuery} variant="outline" size="sm" onClick={() => runTest(testQuery)} className="text-sm">
              {testQuery}
            </Button>
          ))}
        </div>
        <Button onClick={runAllTests} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Run All Tests
        </Button>
      </div>

      {testResults && !testResults.batchResults && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              {testResults.success ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              Search Test Result
            </CardTitle>
            <CardDescription>
              Query: <span className="font-medium">{query}</span>
              {testResults.timing && <span className="ml-2 text-xs">({testResults.timing}ms)</span>}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {testResults.success ? (
              <div>
                {testResults.enhancedQuery && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-md">
                    <p className="text-sm font-medium text-blue-700">
                      Query enhanced to: "{testResults.enhancedQuery}"
                    </p>
                  </div>
                )}
                <p className="mb-2">Found {testResults.results?.length || 0} results</p>
                {testResults.results && testResults.results.length > 0 ? (
                  <div className="border rounded-md divide-y">
                    {testResults.results.map((result: any, index: number) => (
                      <div key={index} className="p-3">
                        <p className="font-medium">{result.title}</p>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                        <p className="text-xs text-blue-600">{result.path}</p>
                        {result.highlights && <p className="text-xs mt-1 italic">"{result.highlights}"</p>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-amber-600">No results found</p>
                )}
              </div>
            ) : (
              <div className="text-red-500">
                <p>Error: {testResults.error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {testResults && testResults.batchResults && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Batch Test Results</h2>
          <div className="space-y-4">
            {testResults.batchResults.map((result: any, index: number) => (
              <Card key={index}>
                <CardHeader className="py-3">
                  <CardTitle className="text-base flex items-center">
                    {result.success ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    )}
                    {result.query}
                    {result.timing && <span className="ml-2 text-xs">({result.timing}ms)</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  {result.success ? (
                    <div>
                      {result.enhancedQuery && (
                        <p className="text-xs text-blue-700 mb-1">Enhanced to: "{result.enhancedQuery}"</p>
                      )}
                      <p className="text-sm">Found {result.results?.length || 0} results</p>
                    </div>
                  ) : (
                    <p className="text-sm text-red-500">Error: {result.error}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
