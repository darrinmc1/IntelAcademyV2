"use client"

import { PathIntroUploadRow } from "./upload-row"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { PathIntroCatalogStatus } from "@/data/path-intro-videos"
import type { LessonVideoCatalogStatus } from "@/data/lesson-blob-videos"

export function VideoVaultTabs({
  defaultTab,
  pathItems,
  lessonItems,
}: {
  defaultTab: "paths" | "lessons"
  pathItems: PathIntroCatalogStatus[]
  lessonItems: LessonVideoCatalogStatus[]
}) {
  const pathUploaded = pathItems.filter((item) => item.uploaded).length
  const lessonUploaded = lessonItems.filter((item) => item.uploaded).length

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="paths">Path intros</TabsTrigger>
        <TabsTrigger value="lessons">Lessons</TabsTrigger>
      </TabsList>

      <TabsContent value="paths">
        <Card>
          <CardHeader>
            <CardTitle>Official path-intro catalog</CardTitle>
            <CardDescription>
              {pathUploaded} of {pathItems.length} in the vault. Filename{" "}
              <code>videos/paths/{"{slug}"}-path-intro-75s-16x9.mp4</code>. Empty until you upload.
              Do not commit mp4s to GitHub or <code>public/</code>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CatalogTable items={pathItems} handleUploadUrl="/api/admin/path-intros/upload" />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="lessons">
        <Card>
          <CardHeader>
            <CardTitle>Official lesson-video catalog</CardTitle>
            <CardDescription>
              {lessonUploaded} of {lessonItems.length} in the vault. Filename{" "}
              <code>videos/lessons/{"{slug}"}-lesson-16x9.mp4</code>. First example:{" "}
              <code>videos/lessons/what-is-intelligence-lesson-16x9.mp4</code>. Path-intro admin is
              the wrong slot for these. Do not commit mp4s.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CatalogTable items={lessonItems} handleUploadUrl="/api/admin/lesson-videos/upload" />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

function CatalogTable({
  items,
  handleUploadUrl,
}: {
  items: Array<{
    slug: string
    title: string
    filename: string
    pathname: string
    uploaded: boolean
  }>
  handleUploadUrl: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-muted-foreground">
            <th className="py-2 pr-4 font-medium">Title</th>
            <th className="py-2 pr-4 font-medium">Filename</th>
            <th className="py-2 pr-4 font-medium">Status</th>
            <th className="py-2 font-medium">Upload mp4</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <PathIntroUploadRow key={item.slug} item={item} handleUploadUrl={handleUploadUrl} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
