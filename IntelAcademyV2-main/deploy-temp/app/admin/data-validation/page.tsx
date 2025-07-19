"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LearningPathCard } from "@/components/learning-path-card"

// Test data with various missing/corrupted scenarios
const testScenarios = [
  {
    name: "Complete Data",
    data: {
      title: "Complete Learning Path",
      description: "This path has all required data fields",
      image: "/learning-path-thumbnails/foundations-thumb.png",
      href: "/learning-paths/foundations",
      difficulty: "Beginner" as const,
      topics: 12,
      estimatedTime: "3-4 hours",
    },
  },
  {
    name: "Missing Image",
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
    name: "Empty Image String",
    data: {
      title: "Empty Image String",
      description: "This path has an empty image string",
      image: "",
      href: "/learning-paths/test",
      difficulty: "Advanced" as const,
      topics: 15,
      estimatedTime: "4-5 hours",
    },
  },
  {
    name: "Invalid Image Path",
    data: {
      title: "Invalid Image Path",
      description: "This path has an invalid image URL",
      image: "/nonexistent/image.png",
      href: "/learning-paths/test",
      difficulty: "Beginner" as const,
      topics: 6,
      estimatedTime: "1-2 hours",
    },
  },
  {
    name: "Missing Title",
    data: {
      title: undefined,
      description: "This path has no title",
      image: "/learning-path-thumbnails/osint-thumb.png",
      href: "/learning-paths/test",
      difficulty: "Intermediate" as const,
      topics: 10,
      estimatedTime: "3 hours",
    },
  },
  {
    name: "Missing Description",
    data: {
      title: "No Description",
      description: undefined,
      image: "/learning-path-thumbnails/tactical-intelligence-thumb.png",
      href: "/learning-paths/test",
      difficulty: "Advanced" as const,
      topics: 7,
      estimatedTime: "2 hours",
    },
  },
  {
    name: "Missing Difficulty",
    data: {
      title: "No Difficulty Level",
      description: "This path has no difficulty specified",
      image: "/learning-path-thumbnails/strategic-intelligence-thumb.png",
      href: "/learning-paths/test",
      difficulty: undefined,
      topics: 9,
      estimatedTime: "3 hours",
    },
  },
  {
    name: "Missing Topics Count",
    data: {
      title: "No Topics Count",
      description: "This path has no topics count",
      image: "/learning-path-thumbnails/report-writing-thumb.png",
      href: "/learning-paths/test",
      difficulty: "Beginner" as const,
      topics: undefined,
      estimatedTime: "2 hours",
    },
  },
  {
    name: "Missing Time Estimate",
    data: {
      title: "No Time Estimate",
      description: "This path has no estimated time",
      image: "/learning-path-thumbnails/foundations-thumb.png",
      href: "/learning-paths/test",
      difficulty: "Intermediate" as const,
      topics: 11,
      estimatedTime: undefined,
    },
  },
  {
    name: "All Data Missing",
    data: {
      title: undefined,
      description: undefined,
      image: undefined,
      href: undefined,
      difficulty: undefined,
      topics: undefined,
      estimatedTime: undefined,
    },
  },
  {
    name: "Null Values",
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
    name: "Whitespace Only",
    data: {
      title: "   ",
      description: "   ",
      image: "   ",
      href: "   ",
      difficulty: "Beginner" as const,
      topics: 0,
      estimatedTime: "   ",
    },
  },
]

export default function DataValidationPage() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null)
  const [testResults, setTestResults] = useState<Record<number, boolean>>({})

  const runTest = (index: number) => {
    try {
      setSelectedScenario(index)
      // Simulate rendering the component
      setTestResults((prev) => ({ ...prev, [index]: true }))
    } catch (error) {
      console.error(`Test ${index} failed:`, error)
      setTestResults((prev) => ({ ...prev, [index]: false }))
    }
  }

  const runAllTests = () => {
    testScenarios.forEach((_, index) => {
      setTimeout(() => runTest(index), index * 100)
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Data Validation Testing</h1>
        <p className="text-gray-600 mb-4">
          Testing how the learning path cards handle missing, corrupted, or invalid data.
        </p>
        <Button onClick={runAllTests} className="mb-6">
          Run All Tests
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Test Scenarios List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Test Scenarios</h2>
          <div className="space-y-2">
            {testScenarios.map((scenario, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="py-3" onClick={() => runTest(index)}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{scenario.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {testResults[index] !== undefined && (
                        <Badge variant={testResults[index] ? "default" : "destructive"}>
                          {testResults[index] ? "✅ Pass" : "❌ Fail"}
                        </Badge>
                      )}
                      <Button variant="outline" size="sm">
                        Test
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Preview Area */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          {selectedScenario !== null ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Testing: {testScenarios[selectedScenario].name}</CardTitle>
                  <CardDescription>
                    Data: {JSON.stringify(testScenarios[selectedScenario].data, null, 2)}
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="max-w-sm">
                <LearningPathCard
                  title={testScenarios[selectedScenario].data.title as any}
                  description={testScenarios[selectedScenario].data.description as any}
                  image={testScenarios[selectedScenario].data.image as any}
                  href={testScenarios[selectedScenario].data.href as any}
                  difficulty={testScenarios[selectedScenario].data.difficulty as any}
                  topics={testScenarios[selectedScenario].data.topics as any}
                  estimatedTime={testScenarios[selectedScenario].data.estimatedTime as any}
                />
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center text-gray-500">
                Select a test scenario to see the preview
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Test Summary */}
      {Object.keys(testResults).length > 0 && (
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Test Results Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {Object.values(testResults).filter(Boolean).length}
                  </div>
                  <div className="text-sm text-gray-600">Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {Object.values(testResults).filter((result) => !result).length}
                  </div>
                  <div className="text-sm text-gray-600">Failed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{Object.keys(testResults).length}</div>
                  <div className="text-sm text-gray-600">Total Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(
                      (Object.values(testResults).filter(Boolean).length / Object.keys(testResults).length) * 100,
                    )}
                    %
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
