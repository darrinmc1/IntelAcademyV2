import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LessonVideo } from "@/components/lesson-video"

export const metadata: Metadata = {
  title: "OSINT Video Library | The Intel Analyst Academy",
  description: "Browse our collection of OSINT training videos.",
}

export default function OSINTVideoLibraryPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/video-library">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Video Library
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">OSINT Video Library</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Browse our collection of Open Source Intelligence (OSINT) training videos.
      </p>

      <Tabs defaultValue="fundamentals" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="fundamentals">OSINT Fundamentals</TabsTrigger>
          <TabsTrigger value="techniques">OSINT Techniques</TabsTrigger>
          <TabsTrigger value="tools">OSINT Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="fundamentals">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="What is Open Source Intelligence (OSINT)?"
                  description="Learn the fundamentals of OSINT and how it's used in intelligence analysis"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/Sa5LbKqCmFI"
                  duration="23:00"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="OSINT Types and Categories"
                  description="Explore the different types and categories of OSINT and how they're used in intelligence work"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/SbYVcIQJY-o"
                  duration="15:21"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="techniques">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="Google Dorking for OSINT Investigations"
                  description="Learn advanced Google search operators and techniques for effective information gathering"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/u_gOnwWEXiA"
                  duration="13:37"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="Social Media Intelligence (SOCMINT) Techniques"
                  description="Learn how to gather and analyze intelligence from social media platforms"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/SMxzRhUiYAA"
                  duration="18:42"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="Essential OSINT Tools for Analysts"
                  description="Discover the most important tools for OSINT investigations"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/OfX8WWxfLtE"
                  duration="16:24"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <LessonVideo
                  title="OSINT Framework Overview"
                  description="Learn about the OSINT Framework and how to use it effectively"
                  category="osint"
                  videoUrl="https://www.youtube.com/embed/PbvS9L5N06Q"
                  duration="12:18"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured OSINT Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-video relative mb-3">
                <img
                  src="/category-images/osint.png"
                  alt="OSINT Fundamentals Playlist"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">6 Videos</span>
                </div>
              </div>
              <h3 className="font-bold text-lg">OSINT Fundamentals</h3>
              <p className="text-muted-foreground text-sm">
                A introduction to OSINT concepts and methodologies
              </p>
              <Button className="w-full mt-3" asChild>
                <Link href="/video-library/osint/fundamentals">View Playlist</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="aspect-video relative mb-3">
                <img
                  src="digital-investigation-interface.png"
                  alt="OSINT Tools Playlist"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">8 Videos</span>
                </div>
              </div>
              <h3 className="font-bold text-lg">OSINT Tools & Techniques</h3>
              <p className="text-muted-foreground text-sm">Advanced tools and techniques for OSINT investigations</p>
              <Button className="w-full mt-3" asChild>
                <Link href="/video-library/osint/tools">View Playlist</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="aspect-video relative mb-3">
                <img
                  src="/socmint-techniques-thumb.png"
                  alt="SOCMINT Playlist"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5 Videos</span>
                </div>
              </div>
              <h3 className="font-bold text-lg">Social Media Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Specialized techniques for gathering intelligence from social platforms
              </p>
              <Button className="w-full mt-3" asChild>
                <Link href="/video-library/osint/socmint">View Playlist</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
