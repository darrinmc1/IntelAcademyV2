import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import { getCurrentUser, type AuthUser, type UserRole } from '@/lib/auth'

/**
 * Permission matrix. Extend as new capabilities are added.
 * Task 2 (review workflow) will consume review_content / submit_for_review.
 */
export const rolePermissions: Record<UserRole, string[]> = {
  admin: [
    'view_dashboard',
    'manage_content',
    'manage_users',
    'view_analytics',
    'review_content',
    'publish_content',
  ],
  moderator: ['view_dashboard', 'review_content', 'ban_users'],
  editor: ['view_dashboard', 'create_content', 'submit_for_review'],
  viewer: ['view_content'],
  user: ['view_public_content'],
}

export function checkPermission(role: UserRole | undefined, resource: string): boolean {
  if (!role) return false
  return rolePermissions[role]?.includes(resource) ?? false
}

// Roles allowed into the /admin console at all (finer gating is per-area).
export const STAFF_ROLES: UserRole[] = ['admin', 'editor', 'moderator']
// Roles allowed to review/approve submissions.
export const REVIEWER_ROLES: UserRole[] = ['admin', 'moderator']

export function isAdmin(user: AuthUser | null): boolean {
  return user?.role === 'admin'
}

export function isStaff(role: UserRole | undefined): boolean {
  return !!role && STAFF_ROLES.includes(role)
}

export function isReviewer(role: UserRole | undefined): boolean {
  return !!role && REVIEWER_ROLES.includes(role)
}

/**
 * Guard for SERVER COMPONENTS / server actions.
 * Redirects to /login (or /unauthorized) if the caller is not an admin.
 * Returns the authenticated admin user on success.
 */
export async function requireAdmin(): Promise<AuthUser> {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login?next=/admin')
  }
  if (user.role !== 'admin') {
    redirect('/unauthorized')
  }
  return user
}

/**
 * Guard for SERVER COMPONENTS / server actions: any staff member.
 * Used by the admin layout so editors can load the console shell.
 */
export async function requireStaff(): Promise<AuthUser> {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login?next=/admin')
  }
  if (!isStaff(user.role)) {
    redirect('/unauthorized')
  }
  return user
}

/**
 * Guard for SERVER COMPONENTS / server actions: reviewers only (admin, moderator).
 */
export async function requireReviewer(): Promise<AuthUser> {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login?next=/admin/reviews')
  }
  if (!isReviewer(user.role)) {
    redirect('/unauthorized')
  }
  return user
}

/**
 * Guard for API ROUTE HANDLERS.
 * Returns null when authorized; returns a 401/403 NextResponse otherwise.
 *
 *   const denied = await requireAdminApi()
 *   if (denied) return denied
 */
export async function requireAdminApi(): Promise<NextResponse | null> {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden: admin access required' }, { status: 403 })
  }
  return null
}

/**
 * Generic permission guard for API route handlers.
 */
export async function requirePermissionApi(resource: string): Promise<NextResponse | null> {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }
  if (!checkPermission(user.role, resource)) {
    return NextResponse.json({ error: 'Forbidden: insufficient permissions' }, { status: 403 })
  }
  return null
}
