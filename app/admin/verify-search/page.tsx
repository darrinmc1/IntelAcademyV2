"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { testSearchApi } from "@/utils/test-search-api"
import { Loader2, CheckCircle, XCircle, Search } from "lucide-react"

export default function VerifySearchPage() {
  // State for the API verification tab
  const [testResults, setTestResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  // State for the individual query tab
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [queryLoading, setQueryLoading] = useState(false)
  const [error, setError] = useState(null)

  // Function to test the entire search API
  const runApiTest = async () => {
    setIsLoading(true)
    try {
      // Get the current URL to use as the base URL for API requests
      const baseUrl = window.location.origin
      const results = await testSearchApi(baseUrl)
      setTestResults(results)
    } catch (error) {
      console.error("Error running test:", error)
      setTestResults({
        success: false,
        error: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Function to test an individual search query
  const runQueryTest = async () => {
    if (!query.trim()) {
      setError("Please enter a search query")
      return
    }
    
    setQueryLoading(true)
    setError(null)
    
    try {
      const searchResults = await testSearchApi(query)
      setResults(searchResults || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      setResults([])
    } finally {
      setQueryLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Search API Verification</h1>
      <p className="text-muted-foreground mb-6">
        Verify that the search API is working correctly and test individual search queries.
      </p>

      <Tabs defaultValue="api-test" className="mb-6">
        <TabsList>
          <TabsTrigger value="api-test">API Verification</TabsTrigger>
          <TabsTrigger value="query-test">Query Testing</TabsTrigger>
        </TabsList>

        {/* API Verification Tab */}
        <TabsContent value="api-test">
          <div className="mb-6">
            <Button onClick={runApiTest} disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
              Test Search API
            </Button>
          </div>

          {testResults && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {testResults.success ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  Test Results
                </CardTitle>
                <CardDescription>
                  {testResults.success
                    ? "All tests passed! The search API is working correctly."
                    : "Some tests failed. Please check the details below."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {testResults.results && testResults.results.length > 0 ? (
                  <div className="space-y-4">
                    {testResults.results.map((result, index) => (
                      <Card key={index} className="bg-gray-50">
                        <CardHeader className="py-3">
                          <CardTitle className="text-base flex items-center">
                            {result.success ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            Query: "{result.query}"
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-3">
                          {result.success ? (
                            <div className="space-y-2">
                              <p className="text-sm">Found {result.resultsCount} results</p>
                              {result.enhancedQuery && (
                                <p className="text-sm text-blue-600">Enhanced to: "{result.enhancedQuery}"</p>
                              )}
                              {result.firstResult && (
                                <p className="text-sm font-medium">First result: {result.firstResult}</p>
                              )}
                            </div>
                          ) : (
                            <p className="text-sm text-red-500">Error: {result.error}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>No test results available.</p>
                )}
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">Test completed at {new Date().toLocaleString()}</p>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        {/* Query Testing Tab */}
        <TabsContent value="query-test">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Test Individual Search Query</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <Input
                  placeholder="Enter search query..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={runQueryTest} disabled={queryLoading}>
                  {queryLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Testing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Test Query
                    </>
                  )}
                </Button>
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Results ({results.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {results.length === 0 ? (
                <p className="text-gray-500">{queryLoading ? 'Searching...' : 'No results found'}</p>
              ) : (
                <ul className="space-y-4">
                  {results.map((result, index) => (
                    <li key={index} className="border-b pb-3">
                      <h3 className="font-semibold">{result.title}</h3>
                      <p className="text-sm text-gray-600">{result.path}</p>
                      {result.description && <p className="mt-1">{result.description}</p>}
                      {result.score && <p className="text-xs text-gray-500 mt-1">Score: {result.score.toFixed(2)}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
