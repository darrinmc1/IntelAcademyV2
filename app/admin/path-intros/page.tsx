import Link from "next/link"
import { requireAdmin } from "@/lib/rbac"
import { listPathIntroCatalogStatus } from "@/lib/path-intro-blob"
import { PathIntroUploadRow } from "./upload-row"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export default async function AdminPathIntrosPage() {
  await requireAdmin()
  const catalog = await listPathIntroCatalogStatus()
  const uploadedCount = catalog.items.filter((item) => item.uploaded).length

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold tracking-tight">Path intro videos</h1>
      <p className="mb-6 mt-2 max-w-3xl text-muted-foreground">
        24 × ~75s 16:9 mp4s, stored private on Vercel Blob. Filename must be{" "}
        <code className="text-xs">videos/paths/{"{slug}"}-path-intro-75s-16x9.mp4</code>. Playback is
        a short-lived signed URL after an access check — Early, Pro, and admins. Free stays locked.
        Public YouTube lesson clips are a different desk:{" "}
        <Link href="/admin/videos" className="underline">
          /admin/videos
        </Link>
        .
      </p>

      {!catalog.storageConfigured && (
        <Alert className="mb-6" variant="destructive">
          <AlertTitle>Add BLOB_READ_WRITE_TOKEN</AlertTitle>
          <AlertDescription>
            {catalog.error} Create a <strong>private</strong> Blob store on the Vercel project, then
            add <code>BLOB_READ_WRITE_TOKEN</code> to Production and Preview. Uploads will fail until
            that token is present.
          </AlertDescription>
        </Alert>
      )}

      {catalog.storageConfigured && catalog.error && (
        <Alert className="mb-6" variant="destructive">
          <AlertTitle>Blob list failed</AlertTitle>
          <AlertDescription>{catalog.error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Official catalog</CardTitle>
          <CardDescription>
            {uploadedCount} of {catalog.items.length} in the vault. Empty until you upload. Do not
            commit mp4s to GitHub or <code>public/</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Path</th>
                  <th className="py-2 pr-4 font-medium">Filename</th>
                  <th className="py-2 pr-4 font-medium">Status</th>
                  <th className="py-2 font-medium">Upload mp4</th>
                </tr>
              </thead>
              <tbody>
                {catalog.items.map((item) => (
                  <PathIntroUploadRow key={item.slug} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
