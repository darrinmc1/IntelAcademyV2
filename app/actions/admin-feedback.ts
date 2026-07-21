"use server"

import { getCurrentUser } from "@/lib/auth"
import { isAdmin } from "@/lib/rbac"
import { updateFeedbackStatus, updateTopicRequestStatus } from "@/lib/db"

export type UpdateResult = { ok: boolean; message: string }

/**
 * Admin-only: update feedback status and add notes.
 */
export async function updateFeedbackStatusAction(
  id: string,
  status: "new" | "reviewed" | "responded" | "archived",
  notes: string
): Promise<UpdateResult> {
  const user = await getCurrentUser()
  if (!user || !isAdmin(user)) {
    return { ok: false, message: "Forbidden: admin access required" }
  }

  try {
    await updateFeedbackStatus(id, status, notes || undefined)
    return { ok: true, message: "Feedback updated." }
  } catch (error) {
    console.error("updateFeedbackStatusAction error:", error)
    return { ok: false, message: "Update failed. Please try again." }
  }
}

/**
 * Admin-only: update topic request status and add notes.
 */
export async function updateTopicRequestStatusAction(
  id: string,
  status: "new" | "reviewed" | "planned" | "completed" | "archived",
  notes: string
): Promise<UpdateResult> {
  const user = await getCurrentUser()
  if (!user || !isAdmin(user)) {
    return { ok: false, message: "Forbidden: admin access required" }
  }

  try {
    await updateTopicRequestStatus(id, status, notes || undefined)
    return { ok: true, message: "Request updated." }
  } catch (error) {
    console.error("updateTopicRequestStatusAction error:", error)
    return { ok: false, message: "Update failed. Please try again." }
  }
}
