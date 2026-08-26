"use server"

import { revalidatePath } from "next/cache"
import { getCurrentUser, type UserRole } from "@/lib/auth"
import { isAdmin } from "@/lib/rbac"
import { getUserByEmail, initDatabase, setUserPlan, setUserRole } from "@/lib/db"
import { isUserPlan, type UserPlan } from "@/lib/user-plan"

const VALID_ROLES: UserRole[] = ["admin", "moderator", "editor", "viewer", "user"]

export type RoleUpdateResult = { ok: boolean; message: string }

/**
 * Admin-only: set a user's role by email. Lets an admin promote editors,
 * moderators, etc. from the UI instead of raw SQL.
 */
export async function setUserRoleAction(
  email: string,
  role: string
): Promise<RoleUpdateResult> {
  const actor = await getCurrentUser()
  if (!actor || !isAdmin(actor)) {
    return { ok: false, message: "Forbidden: admin access required" }
  }

  const normalizedEmail = email.trim().toLowerCase()
  if (!normalizedEmail) {
    return { ok: false, message: "Email is required" }
  }
  if (!VALID_ROLES.includes(role as UserRole)) {
    return { ok: false, message: `Invalid role. Use one of: ${VALID_ROLES.join(", ")}` }
  }

  const target = await getUserByEmail(normalizedEmail)
  if (!target) {
    return { ok: false, message: `No user found with email ${normalizedEmail}` }
  }

  // Guard against removing the last admin.
  if (target.role === "admin" && role !== "admin" && target.id === actor.id) {
    return { ok: false, message: "You cannot remove your own admin role." }
  }

  try {
    await setUserRole(normalizedEmail, role as UserRole)
    revalidatePath("/admin/users")
    return { ok: true, message: `${normalizedEmail} is now ${role}. They must re-login for it to take effect.` }
  } catch (error) {
    console.error("setUserRoleAction error:", error)
    return { ok: false, message: "Update failed. Please try again." }
  }
}

export type PlanUpdateResult = { ok: boolean; message: string }

/**
 * Admin-only: set a user's plan by email. Used until Stripe writes this field.
 */
export async function setUserPlanAction(
  email: string,
  plan: string
): Promise<PlanUpdateResult> {
  const actor = await getCurrentUser()
  if (!actor || !isAdmin(actor)) {
    return { ok: false, message: "Forbidden: admin access required" }
  }

  const normalizedEmail = email.trim().toLowerCase()
  if (!normalizedEmail) {
    return { ok: false, message: "Email is required" }
  }
  if (!isUserPlan(plan)) {
    return { ok: false, message: "Invalid plan. Use one of: free, early, pro" }
  }

  const target = await getUserByEmail(normalizedEmail)
  if (!target) {
    return { ok: false, message: `No user found with email ${normalizedEmail}` }
  }

  try {
    await initDatabase()
    await setUserPlan(normalizedEmail, plan as UserPlan)
    revalidatePath("/admin/users")
    return {
      ok: true,
      message: `${normalizedEmail} is now ${plan}. Path intros update immediately; they should re-login to refresh the session badge.`,
    }
  } catch (error) {
    console.error("setUserPlanAction error:", error)
    return { ok: false, message: "Update failed. Please try again." }
  }
}
