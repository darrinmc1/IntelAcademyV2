import { NextResponse } from 'next/server'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { getUserByResetToken, initDatabase, updatePin } from '@/lib/db'

export async function POST(request: Request) {
  try {
    await initDatabase()

    const { token, pin } = await request.json()

    if (!token || !pin) {
      return NextResponse.json({ error: 'Token and new PIN are required' }, { status: 400 })
    }
    if (!/^\d{4}$/.test(String(pin))) {
      return NextResponse.json({ error: 'PIN must be exactly 4 digits' }, { status: 400 })
    }

    const tokenHash = crypto.createHash('sha256').update(String(token)).digest('hex')
    const user = await getUserByResetToken(tokenHash)

    if (!user) {
      return NextResponse.json(
        { error: 'This reset link is invalid or has expired. Request a new one.' },
        { status: 400 }
      )
    }

    const pinHash = await bcrypt.hash(String(pin), 12)
    // Sets the new PIN, unlocks the account and clears attempts + token.
    await updatePin(user.id, pinHash)

    return NextResponse.json({ success: true, message: 'Your PIN has been reset. You can now log in.' })
  } catch (error) {
    console.error('Reset-PIN error:', error)
    return NextResponse.json({ error: 'Could not reset PIN. Please try again.' }, { status: 500 })
  }
}
