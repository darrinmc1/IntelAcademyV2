"use client"

import { useRef, useState } from "react"
import { upload } from "@vercel/blob/client"
import { Loader2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type VaultUploadItem = {
  slug: string
  title: string
  filename: string
  pathname: string
  uploaded: boolean
}

export function PathIntroUploadRow({
  item,
  handleUploadUrl = "/api/admin/path-intros/upload",
}: {
  item: VaultUploadItem
  handleUploadUrl?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [uploaded, setUploaded] = useState(item.uploaded)

  async function onFile(file: File | undefined) {
    if (!file) return
    if (file.type !== "video/mp4" && !file.name.toLowerCase().endsWith(".mp4")) {
      setMessage("mp4 only. The vault does not accept other containers.")
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      await upload(item.pathname, file, {
        access: "private",
        handleUploadUrl,
      })
      setUploaded(true)
      setMessage("In the vault. Playback stays gated — no public URL on this page.")
    } catch (error) {
      const text = error instanceof Error ? error.message : "Upload failed"
      setMessage(text)
    } finally {
      setBusy(false)
      if (inputRef.current) inputRef.current.value = ""
    }
  }

  return (
    <tr className="border-b last:border-0">
      <td className="py-3 pr-4 align-top">
        <div className="font-medium">{item.title}</div>
        <div className="text-xs text-muted-foreground">{item.slug}</div>
      </td>
      <td className="py-3 pr-4 align-top font-mono text-xs">{item.filename}</td>
      <td className="py-3 pr-4 align-top">
        <Badge className={uploaded ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
          {uploaded ? "Uploaded" : "Missing"}
        </Badge>
      </td>
      <td className="py-3 align-top">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            ref={inputRef}
            type="file"
            accept="video/mp4"
            className="text-sm"
            disabled={busy}
            onChange={(e) => onFile(e.target.files?.[0])}
          />
          <Button
            type="button"
            size="sm"
            variant="outline"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
            {uploaded ? "Replace" : "Upload"}
          </Button>
        </div>
        {message && <p className="mt-1 text-xs text-muted-foreground">{message}</p>}
      </td>
    </tr>
  )
}
