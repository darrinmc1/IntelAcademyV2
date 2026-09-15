"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { updateTopicRequestStatusAction } from "@/app/actions/admin-feedback"

export function TopicRequestDetailClient({
  id,
  currentStatus,
  currentNotes,
}: {
  id: string
  currentStatus: string
  currentNotes: string | null
}) {
  const [status, setStatus] = useState(currentStatus)
  const [notes, setNotes] = useState(currentNotes || "")
  const [busy, setBusy] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  async function handleUpdate() {
    setBusy(true)
    try {
      const result = await updateTopicRequestStatusAction(
        id,
        status as "new" | "reviewed" | "planned" | "completed" | "archived",
        notes
      )
      if (result.ok) {
        toast({ title: "Updated", description: result.message })
        router.refresh()
      } else {
        toast({ title: "Error", description: result.message, variant: "destructive" })
      }
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-4 rounded-md border p-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="planned">Planned</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Admin Notes</label>
        <Textarea
          placeholder="Planning notes — do not generate a page from feedback items"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
        />
      </div>

      <Button onClick={handleUpdate} disabled={busy}>
        {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Save
      </Button>
    </div>
  )
}
