"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { approveSubmission, rejectSubmission } from "@/app/actions/reviews"

export function ReviewActions({ submissionId }: { submissionId: string }) {
  const [comments, setComments] = useState("")
  const [busy, setBusy] = useState<"approve" | "reject" | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  async function run(kind: "approve" | "reject") {
    if (kind === "reject" && !comments.trim()) {
      toast({
        title: "Feedback required",
        description: "Add a note so the editor knows what to change.",
        variant: "destructive",
      })
      return
    }
    setBusy(kind)
    try {
      const result =
        kind === "approve"
          ? await approveSubmission(submissionId, comments)
          : await rejectSubmission(submissionId, comments)
      if (result.ok) {
        if (result.emailWarning) {
          toast({
            title: kind === "approve" ? "Approved - email not sent" : "Returned - email not sent",
            description: result.emailWarning,
            variant: "destructive",
          })
        } else {
          toast({ title: kind === "approve" ? "Approved" : "Returned", description: result.message })
        }
        router.refresh()
      } else {
        toast({ title: "Error", description: result.message, variant: "destructive" })
      }
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="space-y-3">
      <Textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Reviewer comments (required to reject, optional to approve)"
        rows={4}
      />
      <div className="flex gap-2">
        <Button onClick={() => run("approve")} disabled={busy !== null}>
          {busy === "approve" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Check className="mr-2 h-4 w-4" />
          )}
          Approve &amp; publish
        </Button>
        <Button variant="outline" onClick={() => run("reject")} disabled={busy !== null}>
          {busy === "reject" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <X className="mr-2 h-4 w-4" />
          )}
          Reject with feedback
        </Button>
      </div>
    </div>
  )
}
