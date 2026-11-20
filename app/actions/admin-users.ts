"use server"

import { revalidatePath } from "next/cache"
import { getCurrentUser, type UserRole } from "@/lib/auth"
import { isAdmin } from "@/lib/rbac"
import { getUserByEmail, initDatabase, setUserEntitlement, setUserPlan, setUserRole } from "@/lib/db"
import { USER_PLANS, isUserPlan, type UserPlan } from "@/lib/user-plan"
import { ENTITLEMENTS, isEntitlement, isPackId, normalizePacks, type Entitlement } from "@/lib/entitlement"
import { newAccountWritesAllowed } from "@/lib/accounts-gate"

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
    return { ok: false, message: `Invalid plan. Use one of: ${USER_PLANS.join(", ")}` }
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

export async function setUserEntitlementAction(
  email: string,
  entitlement: string,
  packs: string[],
): Promise<PlanUpdateResult> {
  const actor = await getCurrentUser()
  if (!actor || !isAdmin(actor)) {
    return { ok: false, message: "Forbidden: admin access required" }
  }

  const normalizedEmail = email.trim().toLowerCase()
  if (!normalizedEmail) return { ok: false, message: "Email is required" }
  if (!isEntitlement(entitlement)) {
    return { ok: false, message: `Invalid entitlement. Use one of: ${ENTITLEMENTS.join(", ")}` }
  }
  if (!Array.isArray(packs) || packs.some((pack) => !isPackId(pack))) {
    return { ok: false, message: "Invalid collection pack." }
  }
  if (!newAccountWritesAllowed()) {
    return {
      ok: false,
      message:
        "Entitlement updates are off. Set POSTGRES_URL to a database this app is allowed to write, then apply documentation/database/migrations/005_entitlements_usage_rls.sql yourself. This app does not apply that file.",
    }
  }

  const target = await getUserByEmail(normalizedEmail)
  if (!target) return { ok: false, message: `No user found with email ${normalizedEmail}` }

  try {
    await setUserEntitlement(normalizedEmail, entitlement as Entitlement, normalizePacks(packs))
    revalidatePath("/admin/users")
    revalidatePath("/admin/usage")
    revalidatePath("/dashboard")
    const packNote = packs.length ? ` Packs: ${normalizePacks(packs).join(", ")}.` : " No collection packs."
    return {
      ok: true,
      message: `${normalizedEmail} is now ${entitlement}.${packNote} They should sign in again so the session picks it up.`,
    }
  } catch (error) {
    console.error("setUserEntitlementAction error:", error)
    return {
      ok: false,
      message:
        "Update failed. Apply documentation/database/migrations/005_entitlements_usage_rls.sql in the database console first. This app does not apply it.",
    }
  }
}
