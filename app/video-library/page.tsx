import type { Metadata } from "next"
import Link from "next/link"
import { lessonVideos } from "@/data/lesson-videos"
import { VideoPlaceholder } from "@/components/video-placeholder"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Video Library | The Intel Analyst Academy",
  description: "Browse our collection of intelligence analysis training videos.",
}

export default function VideoLibraryPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">Video Library</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Browse our collection of intelligence analysis training videos
      </p>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(lessons).map(([lessonSlug, data]) => {
                const title = lessonSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
                return (
                  <Card key={lessonSlug} className="overflow-hidden">
                    <Link href={`/topics/${lessonSlug}`}>
                      <VideoPlaceholder
                        title={title}
                        description={data.description}
                        thumbnailUrl={`/${category}/${lessonSlug}.png`}
                        videoId={data.videoId}
                        duration={data.duration}
                      />
                    </Link>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
