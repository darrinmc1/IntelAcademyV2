"use client"

import { useState } from "react"
import { lessonVideos } from "@/data/lesson-videos"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminVideosPage() {
  const [videoData, setVideoData] = useState(lessonVideos)

  // Function to update video ID
  const updateVideoId = (category: string, lessonSlug: string, videoId: string) => {
    setVideoData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [lessonSlug]: {
          ...prev[category][lessonSlug],
          videoId,
        },
      },
    }))
  }

  // Function to generate code to update the data file
  const generateUpdateCode = () => {
    const codeString = JSON.stringify(videoData, null, 2)
    return `// Update this in data/lesson-videos.ts\nexport const lessonVideos = ${codeString}`
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Video Management</h1>
      <p className="mb-8 text-muted-foreground">
        Use this interface to manage YouTube video IDs for each lesson. After updating, copy the generated code to
        update your data file.
      </p>

      <Tabs defaultValue={Object.keys(videoData)[0]}>
        <TabsList className="mb-4">
          {Object.keys(videoData).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category.replace("-", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(videoData).map(([category, lessons]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(lessons).map(([lessonSlug, data]) => (
                <Card key={lessonSlug}>
                  <CardHeader>
                    <CardTitle className="capitalize">{lessonSlug.replace(/-/g, " ")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">YouTube Video ID</label>
                        <Input
                          value={data.videoId || ""}
                          onChange={(e) => updateVideoId(category, lessonSlug, e.target.value)}
                          placeholder="e.g. dQw4w9WgXcQ"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          The ID is the part after v= in YouTube URLs
                        </p>
                      </div>

                      {data.videoId && (
                        <div className="aspect-video relative">
                          <img
                            src={`https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`}
                            alt={`Thumbnail for ${lessonSlug}`}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Generated Update Code</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-96">
          <pre className="text-sm">{generateUpdateCode()}</pre>
        </div>
        <Button
          className="mt-4"
          onClick={() => {
            navigator.clipboard.writeText(generateUpdateCode())
            alert("Code copied to clipboard!")
          }}
        >
          Copy to Clipboard
        </Button>
      </div>
    </div>
  )
}
