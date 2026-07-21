"use server"

import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"
import { isReviewer } from "@/lib/rbac"
import {
  getSubmissionById,
  setSubmissionStatus,
  getUserById,
  publishContent,
} from "@/lib/db"
import { sendReviewApproved, sendReviewRejected } from "@/lib/email"
import { savePageContent } from "@/app/actions/content-manager"

export type ReviewResult = { ok: boolean; message: string; emailWarning?: string }

/**
 * Approve a submission: apply its content to the live store and notify the editor.
 * Reviewer-only (admin, moderator).
 */
export async function approveSubmission(
  submissionId: string,
  comments: string
): Promise<ReviewResult> {
  const reviewer = await getCurrentUser()
  if (!reviewer || !isReviewer(reviewer.role)) {
    return { ok: false, message: "Forbidden: reviewer access required" }
  }

  const submission = await getSubmissionById(submissionId)
  if (!submission) return { ok: false, message: "Submission not found" }
  if (submission.status !== "submitted") {
    return { ok: false, message: `Already ${submission.status}` }
  }

  try {
    // Apply the proposed content to the in-memory store.
    await savePageContent(submission.type, submission.content_id, submission.content)
    
    // Persist to durable content table.
    await publishContent({
      type: submission.type,
      contentId: submission.content_id,
      title: submission.title || submission.content_id,
      content: submission.content,
    })
    
    // Mark as approved + audit log.
    await setSubmissionStatus(submissionId, "approved", reviewer.id, comments || null)

    // Notify the editor.
    let emailWarning: string | undefined
    const editor = submission.submitted_by ? await getUserById(submission.submitted_by) : null
    if (editor?.email) {
      const emailRes = await sendReviewApproved({
        to: editor.email,
        contentTitle: submission.title || submission.content_id,
        reviewerName: reviewer.codename || reviewer.email,
        comments: comments || undefined,
      })
      if (!emailRes.ok) {
        emailWarning = `Published, but the editor could not be notified by email (${(emailRes as { reason?: string }).reason ?? "email_error"}).`
      }
    } else {
      emailWarning = "Published, but no editor email was on file to notify."
    }

    revalidatePath("/admin/reviews")
    revalidatePath(`/admin/reviews/${submissionId}`)
    revalidatePath(`/${submission.type}/${submission.content_id}`)
    return { ok: true, message: "Approved and published.", emailWarning }
  } catch (error) {
    console.error("approveSubmission error:", error)
    return { ok: false, message: "Approval failed. Please try again." }
  }
}

/**
 * Reject a submission with required feedback and notify the editor.
 * Reviewer-only (admin, moderator).
 */
export async function rejectSubmission(
  submissionId: string,
  comments: string
): Promise<ReviewResult> {
  const reviewer = await getCurrentUser()
  if (!reviewer || !isReviewer(reviewer.role)) {
    return { ok: false, message: "Forbidden: reviewer access required" }
  }
  if (!comments || !comments.trim()) {
    return { ok: false, message: "Feedback is required when rejecting." }
  }

  const submission = await getSubmissionById(submissionId)
  if (!submission) return { ok: false, message: "Submission not found" }
  if (submission.status !== "submitted") {
    return { ok: false, message: `Already ${submission.status}` }
  }

  try {
    await setSubmissionStatus(submissionId, "rejected", reviewer.id, comments)

    let emailWarning: string | undefined
    const editor = submission.submitted_by ? await getUserById(submission.submitted_by) : null
    if (editor?.email) {
      const emailRes = await sendReviewRejected({
        to: editor.email,
        contentTitle: submission.title || submission.content_id,
        reviewerName: reviewer.codename || reviewer.email,
        feedback: comments,
      })
      if (!emailRes.ok) {
        emailWarning = `Returned to draft, but the editor could not be notified by email (${(emailRes as { reason?: string }).reason ?? "email_error"}).`
      }
    } else {
      emailWarning = "Returned to draft, but no editor email was on file to notify."
    }

    revalidatePath("/admin/reviews")
    revalidatePath(`/admin/reviews/${submissionId}`)
    return { ok: true, message: "Returned to the editor with feedback.", emailWarning }
  } catch (error) {
    console.error("rejectSubmission error:", error)
    return { ok: false, message: "Rejection failed. Please try again." }
  }
}