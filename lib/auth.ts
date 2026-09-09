import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { normalizeUserPlan, type UserPlan } from '@/lib/user-plan'

// Require a real secret when signing/verifying in production — never silently
// fall back to a known default, which would let anyone forge a session cookie.
// Do not throw at import time: `next build` collects page data for admin
// routes that import this module, and Preview may not inject JWT_SECRET
// until runtime.
function getJwtSecret() {
  const rawSecret = process.env.JWT_SECRET
  if (!rawSecret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET environment variable is required in production')
  }
  return new TextEncoder().encode(rawSecret || 'intel-academy-dev-only-secret')
}
const COOKIE_NAME = 'intel-session'

export type UserRole = 'admin' | 'moderator' | 'editor' | 'viewer' | 'user'

// Roles allowed into the /admin area.
export const ADMIN_ROLES: UserRole[] = ['admin', 'moderator', 'editor']

export function isAdminRole(role: UserRole | undefined | null): boolean {
  return !!role && ADMIN_ROLES.includes(role)
}

export interface AuthUser {
  id: string
  email: string
  codename: string
  role: UserRole
  createdAt: string
  /** Billing plan. Stripe later writes this same field. Default free. */
  plan?: UserPlan
}

/**
 * Create a JWT token for a user
 */
export async function createToken(user: AuthUser): Promise<string> {
  return new SignJWT({
    id: user.id,
    email: user.email,
    codename: user.codename,
    role: user.role || 'user',
    plan: normalizeUserPlan(user.plan),
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(getJwtSecret())
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string): Promise<AuthUser | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret())
    const user = payload as unknown as AuthUser
    user.plan = normalizeUserPlan(user.plan)
    return user
  } catch {
    return null
  }
}

/**
 * Get the current authenticated user from cookies
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifyToken(token)
}

/**
 * Set the auth cookie
 */
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  })
}

/**
 * Clear the auth cookie
 */
export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/**
 * Ensure the current user has an admin-capable role. Throws if not — use to
 * guard server actions and admin-only API routes.
 */
export async function requireAdmin(): Promise<AuthUser> {
  const user = await getCurrentUser()
  if (!user || !isAdminRole(user.role)) {
    throw new Error('Unauthorized: admin access required')
  }
  return user
}
