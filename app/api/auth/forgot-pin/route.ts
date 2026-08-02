import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { getUserByEmail, initDatabase, setResetToken } from '@/lib/db'
import { sendPinResetEmail } from '@/lib/email'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

// Always respond the same way so we never reveal whether an email is registered.
const GENERIC_RESPONSE = {
  success: true,
  message: 'If that email matches an agent on file, a reset link is on its way.',
}

export async function POST(request: Request) {
  try {
    // Throttle: max 3 reset requests per IP per 10 minutes.
    const limit = rateLimit(`forgot-pin:${getClientIp(request)}`, 3, 10 * 60 * 1000)
    if (!limit.allowed) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${limit.retryAfter}s.` },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      )
    }

    await initDatabase()

    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const user = await getUserByEmail(String(email).toLowerCase())

    if (user) {
      // Random token emailed to the user; only its SHA-256 hash is stored.
      const token = crypto.randomBytes(32).toString('hex')
      const tokenHash = crypto.createHash('sha256').update(token).digest('hex')
      const expiry = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

      await setResetToken(user.id, tokenHash, expiry)

      const origin =
        process.env.NEXT_PUBLIC_SITE_URL ||
        request.headers.get('origin') ||
        new URL(request.url).origin
      const resetUrl = `${origin}/reset-pin?token=${token}`

      try {
        await sendPinResetEmail(user.email, user.codename, resetUrl)
      } catch (err) {
        // Don't leak email-delivery failures to the client.
        console.error('Failed to send PIN reset email:', err)
      }
    }

    return NextResponse.json(GENERIC_RESPONSE)
  } catch (error) {
    console.error('Forgot-PIN error:', error)
    // Still generic to avoid enumeration.
    return NextResponse.json(GENERIC_RESPONSE)
  }
}
