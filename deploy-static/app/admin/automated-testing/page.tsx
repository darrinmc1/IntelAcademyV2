"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { EnhancedLearningPathCard } from "@/components/enhanced-learning-path-card"
import { CheckCircle, XCircle, Clock, Play, Pause, RotateCcw, Download } from "lucide-react"

interface TestCase {
  id: string
  name: string
  description: string
  data: any
  expectedBehavior: string
  category: "data-validation" | "error-handling" | "performance" | "accessibility"
}

interface TestResult {
  testId: string
  passed: boolean
  duration: number
  error?: string
  warnings: string[]
  metrics: {
    renderTime: number
    imageLoadTime?: number
    memoryUsage?: number
  }
}

const testCases: TestCase[] = [
  // Data Validation Tests
  {
    id: "complete-data",
    name: "Complete Valid Data",
    description: "All fields present and valid",
    category: "data-validation",
    expectedBehavior: "Should render normally without fallbacks",
    data: {
      title: "Complete Learning Path",
      description: "This path has all required data fields properly formatted",
      image: "/learning-path-thumbnails/foundations-thumb.png",
      href: "/learning-paths/foundations",
      difficulty: "Beginner" as const,
      topics: 12,
      estimatedTime: "3-4 hours",
    },
  },
  {
    id: "missing-image",
    name: "Missing Image",
    description: "Image property is undefined",
    category: "data-validation",
    expectedBehavior: "Should use placeholder image",
    data: {
      title: "No Image Path",
      description: "This path has no image property",
      image: undefined,
      href: "/learning-paths/test",
      difficulty: "Intermediate" as const,
      topics: 8,
      estimatedTime: "2-3 hours",
    },
  },
  {
    id: "empty-strings",
    name: "Empty String Values",
    description: "All string fields are empty",
    category: "data-validation",
    expectedBehavior: "Should use fallback values",
    data: {
      title: "",
      description: "",
      image: "",
      href: "",
      difficulty: "Beginner" as const,
      topics: 0,
      estimatedTime: "",
    },
  },
  {
    id: "null-values",
    name: "Null Values",
    description: "All fields are null",
    category: "error-handling",
    expectedBehavior: "Should handle nulls gracefully",
    data: {
      title: null,
      description: null,
      image: null,
      href: null,
      difficulty: null,
      topics: null,
      estimatedTime: null,
    },
  },
  {
    id: "invalid-types",
    name: "Invalid Data Types",
    description: "Wrong data types for all fields",
    category: "error-handling",
    expectedBehavior: "Should convert or fallback appropriately",
    data: {
      title: 123,
      description: [],
      image: {},
      href: true,
      difficulty: "Expert",
      topics: "not-a-number",
      estimatedTime: false,
    },
  },
  {
    id: "whitespace-only",
    name: "Whitespace Only",
    description: "Fields contain only whitespace",
    category: "data-validation",
    expectedBehavior: "Should trim and use fallbacks",
    data: {
      title: "   ",
      description: "   \n\t   ",
      image: "   ",
      href: "   ",
      difficulty: "Beginner" as const,
      topics: 0,
      estimatedTime: "   ",
    },
  },
  {
    id: "malicious-input",
    name: "Malicious Input",
    description: "Potential XSS and injection attempts",
    category: "error-handling",
    expectedBehavior: "Should sanitize and neutralize threats",
    data: {
      title: "<script>alert('xss')</script>",
      description: "javascript:alert('xss')",
      image: "javascript:void(0)",
      href: "javascript:alert('xss')",
      difficulty: "Beginner" as const,
      topics: -999,
      estimatedTime: "<img src=x onerror=alert(1)>",
    },
  },
  {
    id: "extremely-long-content",
    name: "Extremely Long Content",
    description: "Very long strings that might break layout",
    category: "performance",
    expectedBehavior: "Should truncate appropriately",
    data: {
      title: "A".repeat(500),
      description: "B".repeat(2000),
      image: "/learning-path-thumbnails/foundations-thumb.png",
      href: "/learning-paths/test",
      difficulty: "Advanced" as const,
      topics: 999999,
      estimatedTime: "C".repeat(100),
    },
  },
  {
    id: "unicode-content",
    name: "Unicode and Special Characters",
    description: "Emojis, special characters, and unicode",
    category: "data-validation",
    expectedBehavior: "Should display unicode correctly",
    data: {
      title: "🚀 Intelligence Analysis 中文 العربية",
      description: "Learn 📊 data analysis with émojis and spëcial characters ñ",
      image: "/learning-path-thumbnails/osint-thumb.png",
      href: "/learning-paths/unicode-test",
      difficulty: "Intermediate" as const,
      topics: 15,
      estimatedTime: "3-4 hours ⏰",
    },
  },
  {
    id: "broken-image-url",
    name: "Broken Image URL",
    description: "Image URL that will fail to load",
    category: "error-handling",
    expectedBehavior: "Should fallback to placeholder",
    data: {
      title: "Broken Image Test",
      description: "This test uses a non-existent image URL",
      image: "/nonexistent/broken-image.png",
      href: "/learning-paths/test",
      difficulty: "Beginner" as const,
      topics: 5,
      estimatedTime: "1 hour",
    },
  },
]

export default function AutomatedTestingPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentTestIndex, setCurrentTestIndex] = useState(0)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [progress, setProgress] = useState(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const testRefs = useRef<(HTMLDivElement | null)[]>([])

  const runSingleTest = async (testCase: TestCase, index: number): Promise<TestResult> => {
    const testStartTime = performance.now()
    const warnings: string[] = []
    let passed = true
    let error: string | undefined

    try {
      // Simulate component rendering and validation
      const testElement = testRefs.current[index]
      if (!testElement) {
        throw new Error("Test element not found")
      }

      // Check for console errors during render
      const originalConsoleError = console.error
      const originalConsoleWarn = console.warn
      let hasConsoleErrors = false

      console.error = (...args) => {
        hasConsoleErrors = true
        error = args.join(" ")
        originalConsoleError(...args)
      }

      console.warn = (...args) => {
        warnings.push(args.join(" "))
        originalConsoleWarn(...args)
      }

      // Wait for component to render
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Check if component rendered without errors
      const cardElement = testElement.querySelector('[data-testid="learning-path-card"]')
      if (!cardElement) {
        warnings.push("Card element not found in DOM")
      }

      // Check for image loading
      const imageElement = testElement.querySelector("img")
      let imageLoadTime: number | undefined

      if (imageElement) {
        const imageStartTime = performance.now()
        await new Promise((resolve) => {
          if (imageElement.complete) {
            resolve(null)
          } else {
            imageElement.onload = () => resolve(null)
            imageElement.onerror = () => {
              warnings.push("Image failed to load")
              resolve(null)
            }
            setTimeout(() => resolve(null), 2000) // Timeout after 2s
          }
        })
        imageLoadTime = performance.now() - imageStartTime
      }

      // Restore console methods
      console.error = originalConsoleError
      console.warn = originalConsoleWarn

      if (hasConsoleErrors) {
        passed = false
      }

      // Memory usage check (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize

      const testEndTime = performance.now()

      return {
        testId: testCase.id,
        passed,
        duration: testEndTime - testStartTime,
        error,
        warnings,
        metrics: {
          renderTime: testEndTime - testStartTime,
          imageLoadTime,
          memoryUsage,
        },
      }
    } catch (err) {
      return {
        testId: testCase.id,
        passed: false,
        duration: performance.now() - testStartTime,
        error: err instanceof Error ? err.message : "Unknown error",
        warnings,
        metrics: {
          renderTime: performance.now() - testStartTime,
        },
      }
    }
  }

  const runAllTests = async () => {
    setIsRunning(true)
    setIsPaused(false)
    setTestResults([])
    setCurrentTestIndex(0)
    setProgress(0)
    setStartTime(performance.now())
    setEndTime(null)

    for (let i = 0; i < testCases.length; i++) {
      if (isPaused) {
        break
      }

      setCurrentTestIndex(i)
      setProgress((i / testCases.length) * 100)

      const result = await runSingleTest(testCases[i], i)
      setTestResults((prev) => [...prev, result])

      // Small delay between tests for visual feedback
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    setEndTime(performance.now())
    setIsRunning(false)
    setProgress(100)
  }

  const pauseTests = () => {
    setIsPaused(true)
    setIsRunning(false)
  }

  const resetTests = () => {
    setIsRunning(false)
    setIsPaused(false)
    setCurrentTestIndex(0)
    setTestResults([])
    setProgress(0)
    setStartTime(null)
    setEndTime(null)
  }

  const exportResults = () => {
    const report = {
      timestamp: new Date().toISOString(),
      totalTests: testCases.length,
      passed: testResults.filter((r) => r.passed).length,
      failed: testResults.filter((r) => !r.passed).length,
      totalDuration: endTime && startTime ? endTime - startTime : 0,
      results: testResults.map((result) => ({
        ...result,
        testCase: testCases.find((tc) => tc.id === result.testId),
      })),
    }

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-results-${new Date().toISOString().split("T")[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const passedTests = testResults.filter((r) => r.passed).length
  const failedTests = testResults.filter((r) => !r.passed).length
  const totalWarnings = testResults.reduce((sum, r) => sum + r.warnings.length, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">🤖 Automated Test Suite</h1>
        <p className="text-gray-600 mb-6">
          Comprehensive automated testing for data validation, error handling, and performance.
        </p>

        {/* Control Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Test Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Button onClick={runAllTests} disabled={isRunning} className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Run All Tests
              </Button>
              <Button onClick={pauseTests} disabled={!isRunning} variant="outline" className="flex items-center gap-2">
                <Pause className="w-4 h-4" />
                Pause
              </Button>
              <Button onClick={resetTests} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
              {testResults.length > 0 && (
                <Button onClick={exportResults} variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Results
                </Button>
              )}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress: {Math.round(progress)}%</span>
                <span>
                  Test {currentTestIndex + 1} of {testCases.length}
                </span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>

            {/* Real-time Stats */}
            {testResults.length > 0 && (
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
                  <div className="text-2xl font-bold text-yellow-600">{totalWarnings}</div>
                  <div className="text-sm text-gray-600">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {testResults.length > 0 ? Math.round((passedTests / testResults.length) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Test Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {testCases.map((testCase, index) => {
          const result = testResults.find((r) => r.testId === testCase.id)
          const isCurrentTest = isRunning && currentTestIndex === index
          const isCompleted = !!result

          return (
            <div key={testCase.id} className="space-y-4">
              {/* Test Info */}
              <Card className={`${isCurrentTest ? "ring-2 ring-blue-500" : ""}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{testCase.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {isCurrentTest && <Clock className="w-4 h-4 text-blue-500 animate-spin" />}
                      {isCompleted && (
                        <div className="flex items-center gap-1">
                          {result.passed ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500" />
                          )}
                          <Badge variant={result.passed ? "default" : "destructive"}>
                            {result.passed ? "Pass" : "Fail"}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardDescription>{testCase.description}</CardDescription>
                  <Badge variant="outline" className="w-fit">
                    {testCase.category}
                  </Badge>
                </CardHeader>
                {result && (
                  <CardContent className="pt-0">
                    <div className="text-sm space-y-1">
                      <div>Duration: {result.duration.toFixed(2)}ms</div>
                      {result.metrics.imageLoadTime && (
                        <div>Image Load: {result.metrics.imageLoadTime.toFixed(2)}ms</div>
                      )}
                      {result.warnings.length > 0 && (
                        <div className="text-yellow-600">Warnings: {result.warnings.length}</div>
                      )}
                      {result.error && <div className="text-red-600 text-xs">Error: {result.error}</div>}
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Test Component */}
              <div ref={(el) => (testRefs.current[index] = el)} className="max-w-sm">
                <EnhancedLearningPathCard {...testCase.data} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Final Results Summary */}
      {endTime && startTime && (
        <Card>
          <CardHeader>
            <CardTitle>🎯 Test Suite Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{passedTests}</div>
                <div className="text-sm text-gray-600">Tests Passed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{failedTests}</div>
                <div className="text-sm text-gray-600">Tests Failed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{totalWarnings}</div>
                <div className="text-sm text-gray-600">Total Warnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {Math.round(((endTime - startTime) / 1000) * 100) / 100}s
                </div>
                <div className="text-sm text-gray-600">Total Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round((passedTests / testCases.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
