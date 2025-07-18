"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search/search-bar"
import { SearchResults } from "@/components/search/search-results"
import { testSearchFunctionality, searchTestCases } from "@/utils/search-test-utils"
import { CheckCircle2, XCircle, Clock, SearchIcon, AlertTriangle } from "lucide-react"

export default function SearchVerificationPage() {
  const [query, setQuery] = useState("")
  const [isRunningTests, setIsRunningTests] = useState(false)
  const [testResults, setTestResults] = useState<any>(null)

  const runTests = async () => {
    setIsRunningTests(true)
    try {
      const results = await testSearchFunctionality()
      setTestResults(results)
    } catch (error) {
      console.error("Error running tests:", error)
    } finally {
      setIsRunningTests(false)
    }
  }

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Search Verification</h1>
      <p className="text-muted-foreground mb-8">
        Test and verify that the search functionality is working correctly from the user interface.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Manual Testing</h2>
          <Card>
            <CardHeader>
              <CardTitle>Search Test</CardTitle>
              <CardDescription>Enter a search query to test the search functionality manually.</CardDescription>
            </CardHeader>
            <CardContent>
              <SearchBar initialQuery={query} onSearch={handleSearch} />
            </CardContent>
          </Card>

          {query && (
            <div className="mt-4">
              <SearchResults query={query} />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Automated Testing</h2>
          <Card>
            <CardHeader>
              <CardTitle>Automated Search Tests</CardTitle>
              <CardDescription>
                Run automated tests to verify search functionality across multiple queries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This will test {searchTestCases.length} predefined search queries:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {searchTestCases.map((testCase, index) => (
                  <Badge key={index} variant="outline">
                    {testCase.query}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={runTests} disabled={isRunningTests} className="w-full">
                {isRunningTests ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  <>
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Run Search Tests
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {testResults && (
            <div className="mt-4">
              <Card>
                <CardHeader className={testResults.overallSuccess ? "bg-green-50" : "bg-red-50"}>
                  <div className="flex items-center justify-between">
                    <CardTitle>Test Results</CardTitle>
                    {testResults.overallSuccess ? (
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        All Tests Passed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                        <XCircle className="mr-1 h-3 w-3" />
                        Tests Failed
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    {testResults.testResults.map((result: any, index: number) => (
                      <div key={index} className={`p-3 rounded-md ${result.success ? "bg-green-50" : "bg-red-50"}`}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium flex items-center">
                            {result.success ? (
                              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                            ) : (
                              <XCircle className="mr-2 h-4 w-4 text-red-600" />
                            )}
                            Query: "{result.query}"
                          </div>
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" />
                            {result.timeTaken}ms
                          </Badge>
                        </div>
                        <div className="text-sm">
                          {result.success ? (
                            <p>Found {result.resultCount} results</p>
                          ) : (
                            <p className="text-red-600 flex items-center">
                              <AlertTriangle className="mr-1 h-3 w-3" />
                              {result.error || "No results found"}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
