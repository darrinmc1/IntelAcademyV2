"use client"

import { useState } from "react"
import Link from "next/link"
import { lessonVideos } from "@/data/lesson-videos"
import { VideoPlaceholder } from "@/components/video-placeholder"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid3X3, List } from "lucide-react"

export default function VideoLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Video Library</h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of intelligence analysis training videos
          </p>
        </div>

        <div className="flex gap-2 bg-slate-200 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
              viewMode === "grid"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
            title="Grid view"
          >
            <Grid3X3 className="h-4 w-4" />
            <span className="hidden sm:inline text-sm font-medium">Grid</span>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
              viewMode === "list"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
            title="List view"
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:inline text-sm font-medium">List</span>
          </button>
        </div>
      </div>

      <Tabs defaultValue={Object.keys(lessonVideos)[0]}>
        <TabsList className="mb-6">
          {Object.keys(lessonVideos).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category.replace("-", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(lessonVideos).map(([category, lessons]) => (
          <TabsContent key={category} value={category}>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(lessons).map(([lessonSlug, data]) => {
                  const title = lessonSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
                  return (
                    <Card key={lessonSlug} className="overflow-hidden">
                      <Link href={`/topics/${lessonSlug}`}>
                        <VideoPlaceholder
                          title={title}
                          thumbnailUrl={`/${category}/${lessonSlug}.png`}
                          duration={data.duration}
                        />
                      </Link>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="max-w-4xl space-y-3">
                {Object.entries(lessons).map(([lessonSlug, data]) => {
                  const title = lessonSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
                  return (
                    <Link
                      key={lessonSlug}
                      href={`/topics/${lessonSlug}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all hover:bg-blue-50"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                          <p className="text-sm text-gray-500">Video duration: {data.duration}</p>
                        </div>
                        <span className="text-blue-600 font-medium text-sm">Watch →</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
