import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {
  getUserByEmail,
  getUserByCodename,
  getUserProfile,
  initDatabase,
  incrementFailedAttempts,
  lockAccount,
  resetFailedAttempts,
} from '@/lib/db'
import { createToken, setAuthCookie } from '@/lib/auth'

const MAX_ATTEMPTS = 5

export async function POST(request: Request) {
  try {
    await initDatabase()

    // Accept email (preferred) or codename as the identifier.
    const { email, codename, identifier, pin } = await request.json()
    const id = String(identifier || email || codename || '').trim()

    if (!id || !pin) {
      return NextResponse.json({ error: 'Email and PIN are required' }, { status: 400 })
    }

    // Look up by email first, then fall back to codename.
    let user = await getUserByEmail(id.toLowerCase())
    if (!user) {
      user = await getUserByCodename(id)
    }
    // Generic message so we don't reveal which accounts exist.
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials. Check your intel.' }, { status: 401 })
    }

    // Already locked out — must reset PIN to regain access.
    if (user.locked) {
      return NextResponse.json(
        { error: 'Account locked after too many failed attempts. Reset your PIN to unlock.', locked: true },
        { status: 423 }
      )
    }

    const valid = await bcrypt.compare(String(pin), user.password_hash)
    if (!valid) {
      const attempts = await incrementFailedAttempts(user.id)
      if (attempts >= MAX_ATTEMPTS) {
        await lockAccount(user.id)
        return NextResponse.json(
          { error: 'Too many failed attempts. Account locked — reset your PIN to unlock.', locked: true },
          { status: 423 }
        )
      }
      const remaining = MAX_ATTEMPTS - attempts
      return NextResponse.json(
        { error: `Invalid PIN. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining before lockout.` },
        { status: 401 }
      )
    }

    // Success — clear the failed-attempt counter and issue a session.
    await resetFailedAttempts(user.id)

    const token = await createToken({
      id: user.id,
      email: user.email,
      codename: user.codename,
      role: user.role || 'user',
      createdAt: user.created_at,
      plan: user.plan || 'free',
    })
    await setAuthCookie(token)

    const profile = await getUserProfile(user.id)

    return NextResponse.json({ success: true, user: profile })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed. Please try again.' }, { status: 500 })
  }
}
