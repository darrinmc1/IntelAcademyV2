import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// Must match lib/auth.ts
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'intel-academy-secret-change-me-in-production'
)
const COOKIE_NAME = 'intel-session'

// Keep in sync with lib/rbac.ts
const STAFF_ROLES = ['admin', 'editor', 'moderator']
const REVIEWER_ROLES = ['admin', 'moderator']

// Areas only full admins may enter.
const ADMIN_ONLY_PREFIXES = [
  '/admin/users',
  '/admin/settings',
  '/admin/analytics',
  '/admin/status',
]
// Areas reviewers (admin + moderator) may enter.
const REVIEWER_PREFIXES = ['/admin/reviews']

/**
 * Edge choke point for the admin console.
 *  - Any staff role may load /admin (finer control via guards below).
 *  - /admin/users|settings|analytics|status => admin only.
 *  - /admin/reviews => admin or moderator.
 * lib/rbac guards in the pages provide defense in depth.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(COOKIE_NAME)?.value

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('next', pathname)
  const denied = new URL('/unauthorized', request.url)

  if (!token) {
    return NextResponse.redirect(loginUrl)
  }

  let role: string | undefined
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    role = payload.role as string | undefined
  } catch {
    return NextResponse.redirect(loginUrl)
  }

  if (!role || !STAFF_ROLES.includes(role)) {
    return NextResponse.redirect(denied)
  }
  if (ADMIN_ONLY_PREFIXES.some((p) => pathname.startsWith(p)) && role !== 'admin') {
    return NextResponse.redirect(denied)
  }
  if (REVIEWER_PREFIXES.some((p) => pathname.startsWith(p)) && !REVIEWER_ROLES.includes(role)) {
    return NextResponse.redirect(denied)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
