import Link from "next/link"
import { requireAdmin } from "@/lib/rbac"
import { listPathIntroCatalogStatus } from "@/lib/path-intro-blob"
import { listLessonVideoCatalogStatus } from "@/lib/lesson-video-blob"
import { VideoVaultTabs } from "./vault-tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const dynamic = "force-dynamic"

export default async function AdminPathIntrosPage({
  searchParams,
}: {
  searchParams?: Promise<{ tab?: string }>
}) {
  await requireAdmin()
  const params = (await searchParams) ?? {}
  const defaultTab = params.tab === "lessons" ? "lessons" : "paths"
  const [paths, lessons] = await Promise.all([
    listPathIntroCatalogStatus(),
    listLessonVideoCatalogStatus(),
  ])
  const storageConfigured = paths.storageConfigured || lessons.storageConfigured
  const storageError = paths.error || lessons.error

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold tracking-tight">Private video vault</h1>
      <p className="mb-6 mt-2 max-w-3xl text-muted-foreground">
        Two desks, one private Blob store. <strong>Path intros</strong> are 75s path reels.{" "}
        <strong>Lessons</strong> are per-topic mp4s at{" "}
        <code className="text-xs">videos/lessons/{"{slug}"}-lesson-16x9.mp4</code>. Playback is a
        short-lived signed URL after an access check — $19 video plan and admins. Free / $5 / $10
        stay locked. Public YouTube clips are a different desk:{" "}
        <Link href="/admin/videos" className="underline">
          /admin/videos
        </Link>
        . Do not upload a lesson file into the path-intro slot.
      </p>

      {!storageConfigured && (
        <Alert className="mb-6" variant="destructive">
          <AlertTitle>Add BLOB_READ_WRITE_TOKEN</AlertTitle>
          <AlertDescription>
            {storageError} Create a <strong>private</strong> Blob store on the Vercel project, then
            add <code>BLOB_READ_WRITE_TOKEN</code> to Production and Preview. Uploads will fail until
            that token is present.
          </AlertDescription>
        </Alert>
      )}

      {storageConfigured && storageError && (
        <Alert className="mb-6" variant="destructive">
          <AlertTitle>Blob list failed</AlertTitle>
          <AlertDescription>{storageError}</AlertDescription>
        </Alert>
      )}

      <VideoVaultTabs defaultTab={defaultTab} pathItems={paths.items} lessonItems={lessons.items} />
    </div>
  )
}
