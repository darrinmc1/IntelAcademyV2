"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Download, RefreshCw } from "lucide-react"

interface TestSuite {
  name: string
  description: string
  tests: Array<{
    name: string
    url: string
    expectedStatus: number
    timeout: number
  }>
}

const testSuites: TestSuite[] = [
  {
    name: "Page Load Tests",
    description: "Test all major pages load without errors",
    tests: [
      { name: "Home Page", url: "/", expectedStatus: 200, timeout: 5000 },
      { name: "Learning Paths", url: "/learning-paths", expectedStatus: 200, timeout: 5000 },
      { name: "Topics Page", url: "/topics", expectedStatus: 200, timeout: 5000 },
      { name: "Data Validation", url: "/admin/data-validation", expectedStatus: 200, timeout: 5000 },
      { name: "Test Resilience", url: "/learning-paths/test-resilience", expectedStatus: 200, timeout: 5000 },
    ],
  },
  {
    name: "API Endpoint Tests",
    description: "Test API endpoints respond correctly",
    tests: [
      { name: "Search API", url: "/api/search?q=intelligence", expectedStatus: 200, timeout: 3000 },
      { name: "Placeholder API", url: "/api/placeholder", expectedStatus: 200, timeout: 3000 },
    ],
  },
  {
    name: "Error Handling Tests",
    description: "Test error pages and invalid routes",
    tests: [
      { name: "404 Page", url: "/nonexistent-page", expectedStatus: 404, timeout: 3000 },
      { name: "Invalid Learning Path", url: "/learning-paths/invalid", expectedStatus: 404, timeout: 3000 },
    ],
  },
]

interface TestResult {
  suiteName: string
  testName: string
  url: string
  passed: boolean
  status?: number
  duration: number
  error?: string
}

export default function TestRunnerPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentSuite, setCurrentSuite] = useState<string | null>(null)
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<TestResult[]>([])
  const [startTime, setStartTime] = useState<number | null>(null)

  const totalTests = testSuites.reduce((sum, suite) => sum + suite.tests.length, 0)

  const runTest = async (suiteName: string, test: any): Promise<TestResult> => {
    const startTime = performance.now()

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), test.timeout)

      const response = await fetch(test.url, {
        signal: controller.signal,
        method: "HEAD", // Use HEAD to avoid loading full content
      })

      clearTimeout(timeoutId)
      const duration = performance.now() - startTime

      return {
        suiteName,
        testName: test.name,
        url: test.url,
        passed: response.status === test.expectedStatus,
        status: response.status,
        duration,
      }
    } catch (error) {
      const duration = performance.now() - startTime
      return {
        suiteName,
        testName: test.name,
        url: test.url,
        passed: false,
        duration,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  const runAllTests = async () => {
    setIsRunning(true)
    setResults([])
    setProgress(0)
    setStartTime(performance.now())

    let completedTests = 0

    for (const suite of testSuites) {
      setCurrentSuite(suite.name)

      for (const test of suite.tests) {
        setCurrentTest(test.name)

        const result = await runTest(suite.name, test)
        setResults((prev) => [...prev, result])

        completedTests++
        setProgress((completedTests / totalTests) * 100)

        // Small delay for visual feedback
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }

    setIsRunning(false)
    setCurrentSuite(null)
    setCurrentTest(null)
  }

  const exportResults = () => {
    const report = {
      timestamp: new Date().toISOString(),
      totalTests,
      passed: results.filter((r) => r.passed).length,
      failed: results.filter((r) => !r.passed).length,
      duration: startTime ? performance.now() - startTime : 0,
      results,
    }

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-results-${new Date().toISOString().split("T")[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const passedTests = results.filter((r) => r.passed).length
  const failedTests = results.filter((r) => !r.passed).length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">🚀 Automated Test Runner</h1>
        <p className="text-gray-600 mb-6">
          Execute comprehensive tests across all application components and endpoints.
        </p>

        {/* Control Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Test Execution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Button onClick={runAllTests} disabled={isRunning} className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Run All Tests ({totalTests})
              </Button>

              {results.length > 0 && (
                <Button onClick={exportResults} variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Results
                </Button>
              )}

              <Button onClick={() => window.location.reload()} variant="outline" className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Reset
              </Button>
            </div>

            {/* Progress */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: {Math.round(progress)}%</span>
                  <span>
                    {results.length} of {totalTests} tests completed
                  </span>
                </div>
                <Progress value={progress} className="w-full" />
                {currentSuite && (
                  <div className="text-sm text-gray-600">
                    Running: {currentSuite} - {currentTest}
                  </div>
                )}
              </div>
            )}

            {/* Real-time Stats */}
            {results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{passedTests}</div>
                  <div className="text-sm text-gray-600">Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{failedTests}</div>
                  <div className="text-sm text-gray-600">Failed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{results.length}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {results.length > 0 ? Math.round((passedTests / results.length) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Test Suites */}
      <div className="space-y-6">
        {testSuites.map((suite) => (
          <Card key={suite.name}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {suite.name}
                <Badge variant="outline">{suite.tests.length} tests</Badge>
              </CardTitle>
              <p className="text-gray-600">{suite.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {suite.tests.map((test) => {
                  const result = results.find((r) => r.suiteName === suite.name && r.testName === test.name)
                  const isRunning = currentSuite === suite.name && currentTest === test.name

                  return (
                    <div key={test.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{test.name}</div>
                        <div className="text-sm text-gray-500">{test.url}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        {result && (
                          <>
                            <Badge variant={result.passed ? "default" : "destructive"}>
                              {result.passed ? "Pass" : "Fail"}
                            </Badge>
                            <span className="text-sm text-gray-500">{result.duration.toFixed(0)}ms</span>
                            {result.status && <Badge variant="outline">{result.status}</Badge>}
                          </>
                        )}
                        {isRunning && <Badge variant="secondary">Running...</Badge>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Failed Tests Details */}
      {failedTests > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-red-600">Failed Tests Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results
                .filter((r) => !r.passed)
                .map((result, index) => (
                  <div key={index} className="p-3 border border-red-200 rounded-lg bg-red-50">
                    <div className="font-medium text-red-800">
                      {result.suiteName} - {result.testName}
                    </div>
                    <div className="text-sm text-red-600">URL: {result.url}</div>
                    {result.error && <div className="text-sm text-red-600">Error: {result.error}</div>}
                    {result.status && <div className="text-sm text-red-600">Status: {result.status}</div>}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
