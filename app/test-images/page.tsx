"use client"

import { useState } from "react"
import { Image } from "@/components/image"
import { TopicCard } from "@/components/topic-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TestImagesPage() {
  const [testScenario, setTestScenario] = useState<string>("all")

  const validImageUrl = "/strategic-intelligence-overview.png"
  const invalidImageUrl = "/non-existent-image.jpg"
  const slowImageUrl = "https://picsum.photos/400/300?random=1"
  const largeImageUrl = "https://picsum.photos/1200/800?random=2"

  const testScenarios = [
    { id: "all", name: "All Tests", description: "Show all test scenarios" },
    { id: "valid", name: "Valid Images", description: "Test with working image URLs" },
    { id: "invalid", name: "Invalid Images", description: "Test with broken image URLs" },
    { id: "slow", name: "Slow Loading", description: "Test with slow-loading images" },
    { id: "responsive", name: "Responsive", description: "Test responsive behavior" },
  ]

  const shouldShowScenario = (scenario: string) => {
    return testScenario === "all" || testScenario === scenario
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Image Components Test Suite</h1>
        <p className="text-lg text-gray-600 mb-6">
          Testing ClientOnlyImage, OptimizedImage, GuaranteedImage, and TopicCard components
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {testScenarios.map((scenario) => (
            <Button
              key={scenario.id}
              variant={testScenario === scenario.id ? "default" : "outline"}
              onClick={() => setTestScenario(scenario.id)}
              className="mb-2"
            >
              {scenario.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Valid Images Test */}
      {shouldShowScenario("valid") && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Valid Images Test
              <Badge variant="secondary">Working URLs</Badge>
            </CardTitle>
            <CardDescription>Testing all components with valid image URLs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Image</h3>
                <Image
                  src={validImageUrl}
                  alt="Strategic Intelligence Overview"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">OptimizedImage</h3>
                <Image
                  src={validImageUrl}
                  alt="Strategic Intelligence Overview"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">GuaranteedImage</h3>
                <Image
                  src={validImageUrl}
                  alt="Strategic Intelligence Overview"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">TopicCard with Valid Image</h3>
              <div className="max-w-sm">
                <TopicCard
                  title="Strategic Intelligence"
                  description="Learn the fundamentals of strategic intelligence analysis and long-term forecasting."
                  imageUrl={validImageUrl}
                  link="/learning-paths/strategic-intelligence"
                  completionCount={1247}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Invalid Images Test */}
      {shouldShowScenario("invalid") && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Invalid Images Test
              <Badge variant="destructive">Broken URLs</Badge>
            </CardTitle>
            <CardDescription>Testing fallback behavior with broken image URLs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Image</h3>
                <Image
                  src={invalidImageUrl}
                  alt="Broken Image Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">OptimizedImage</h3>
                <Image
                  src={invalidImageUrl}
                  alt="Broken Image Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                  fallbackSrc="/placeholder.svg?height=200&width=300"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">GuaranteedImage</h3>
                <Image
                  src={invalidImageUrl}
                  alt="Broken Image Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">TopicCard with Invalid Image</h3>
              <div className="max-w-sm">
                <TopicCard
                  title="Broken Image Test"
                  description="This card should show a placeholder when the image fails to load."
                  imageUrl={invalidImageUrl}
                  link="#"
                  completionCount={0}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Slow Loading Test */}
      {shouldShowScenario("slow") && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Slow Loading Test
              <Badge variant="outline">External URLs</Badge>
            </CardTitle>
            <CardDescription>Testing loading states with slow external images</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Image</h3>
                <Image
                  src={slowImageUrl}
                  alt="Slow Loading Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">OptimizedImage</h3>
                <Image
                  src={slowImageUrl}
                  alt="Slow Loading Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">GuaranteedImage</h3>
                <Image
                  src={slowImageUrl}
                  alt="Slow Loading Test"
                  width={300}
                  height={200}
                  className="rounded-lg border"
                  placeholder="blur"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Responsive Test */}
      {shouldShowScenario("responsive") && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Responsive Images Test
              <Badge variant="secondary">Different Sizes</Badge>
            </CardTitle>
            <CardDescription>Testing responsive behavior and different sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Fill Container Test */}
              <div>
                <h3 className="font-semibold mb-4">Fill Container (aspect-ratio)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={validImageUrl}
                      alt="Fill container test"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={validImageUrl}
                      alt="Square fill test"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Different Sizes */}
              <div>
                <h3 className="font-semibold mb-4">Different Fixed Sizes</h3>
                <div className="flex flex-wrap gap-4 items-end">
                  <Image
                    src={validImageUrl}
                    alt="Small size"
                    width={150}
                    height={100}
                    className="rounded border"
                  />
                  <Image
                    src={validImageUrl}
                    alt="Medium size"
                    width={250}
                    height={167}
                    className="rounded border"
                  />
                  <Image
                    src={validImageUrl}
                    alt="Large size"
                    width={350}
                    height={233}
                    className="rounded border"
                  />
                </div>
              </div>

              {/* Topic Cards Grid */}
              <div>
                <h3 className="font-semibold mb-4">Topic Cards Responsive Grid</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TopicCard
                    title="OSINT Fundamentals"
                    description="Open Source Intelligence gathering and analysis techniques."
                    imageUrl={validImageUrl}
                    link="/learning-paths/osint"
                    completionCount={892}
                  />
                  <TopicCard
                    title="Tactical Intelligence"
                    description="Real-time intelligence for operational decision making."
                    imageUrl="/tactical-intelligence-banner.png"
                    link="/learning-paths/tactical-intelligence"
                    completionCount={654}
                  />
                  <TopicCard
                    title="Network Analysis"
                    description="Understanding relationships and connections in data."
                    imageUrl="/network-analysis-concept.png"
                    link="/learning-paths/network-analysis"
                    completionCount={423}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Performance Test */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Performance Test
            <Badge variant="outline">Multiple Images</Badge>
          </CardTitle>
          <CardDescription>Testing performance with multiple images loading simultaneously</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, i) => (
              <Image
                key={i}
                src={`https://picsum.photos/200/150?random=${i + 10}`}
                alt={`Performance test image ${i + 1}`}
                width={200}
                height={150}
                className="rounded border"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edge Cases Test */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Edge Cases Test
            <Badge variant="outline">Special Scenarios</Badge>
          </CardTitle>
          <CardDescription>Testing edge cases and special scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Empty/Null src */}
            <div>
              <h3 className="font-semibold mb-2">Empty/Null Source</h3>
              <div className="flex gap-4">
                <Image src="" alt="Empty source test" width={200} height={150} className="rounded border" />
                <Image
                  src={null as any}
                  alt="Null source test"
                  width={200}
                  height={150}
                  className="rounded border"
                />
              </div>
            </div>

            {/* Very long alt text */}
            <div>
              <h3 className="font-semibold mb-2">Long Alt Text</h3>
              <Image
                src={validImageUrl}
                alt="This is a very long alt text that describes an intelligence analysis dashboard with multiple data visualization components including charts, graphs, maps, and statistical summaries for situational awareness"
                width={300}
                height={200}
                className="rounded border"
              />
            </div>

            {/* Priority loading */}
            <div>
              <h3 className="font-semibold mb-2">Priority Loading</h3>
              <Image
                src={validImageUrl}
                alt="Priority image"
                width={300}
                height={200}
                className="rounded border"
                priority={true}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Results Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Test Results Summary</CardTitle>
          <CardDescription>What to look for in each test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600">✅ Expected Behaviors:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Valid images should load and display correctly</li>
                <li>Invalid images should show placeholder/fallback images</li>
                <li>Loading states should be visible for slow images</li>
                <li>Images should be responsive and maintain aspect ratios</li>
                <li>TopicCard should handle both valid and invalid images gracefully</li>
                <li>Empty/null sources should show fallback images</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600">❌ Issues to Watch For:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Broken image icons or empty spaces</li>
                <li>Layout shifts during image loading</li>
                <li>Images not respecting container boundaries</li>
                <li>Console errors for missing images</li>
                <li>Performance issues with multiple images</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
