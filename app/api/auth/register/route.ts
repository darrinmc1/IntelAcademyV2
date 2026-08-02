import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { createUser, getUserByEmail, getUserByCodename, initDatabase } from '@/lib/db'
import { createToken, setAuthCookie } from '@/lib/auth'
import { generateCodename } from '@/lib/codename-generator'
import { generateUUID } from '@/lib/utils'

export async function POST(request: Request) {
  try {
    await initDatabase()

    const { email, pin, codename, existingProfile } = await request.json()

    // Validate input
    if (!email || !pin) {
      return NextResponse.json({ error: 'Email and PIN are required' }, { status: 400 })
    }
    if (!/^\d{4}$/.test(String(pin))) {
      return NextResponse.json({ error: 'PIN must be exactly 4 digits' }, { status: 400 })
    }

    // Check if email already exists
    const existing = await getUserByEmail(email.toLowerCase())
    if (existing) {
      return NextResponse.json({ error: 'An agent with this email already exists' }, { status: 409 })
    }

    // Codename must be unique since it is now the login identifier.
    const agentCodename = (codename && String(codename).trim()) || generateCodename()
    const codenameTaken = await getUserByCodename(agentCodename)
    if (codenameTaken) {
      return NextResponse.json(
        { error: 'That codename is already taken. Re-roll or choose another.' },
        { status: 409 }
      )
    }

    // Hash the PIN (stored in password_hash)
    const pinHash = await bcrypt.hash(String(pin), 12)
    const userId = generateUUID()

    // Create user with optional existing localStorage profile data
    await createUser({
      id: userId,
      email: email.toLowerCase(),
      passwordHash: pinHash,
      codename: agentCodename,
      xp: existingProfile?.xp || 0,
      badges: existingProfile?.badges || [],
      lessonsCompleted: existingProfile?.lessonsCompleted || [],
      lessonsViewed: existingProfile?.lessonsViewed || [],
      streakDays: existingProfile?.streakDays || 0,
      bestStreak: existingProfile?.bestStreak || 0,
      lastVisitDate: existingProfile?.lastVisitDate || new Date().toISOString(),
    })

    // Create JWT and set cookie (new users default to the 'user' role)
    const token = await createToken({
      id: userId,
      email: email.toLowerCase(),
      codename: agentCodename,
      role: 'user',
      createdAt: new Date().toISOString(),
    })
    await setAuthCookie(token)

    return NextResponse.json({
      success: true,
      user: { id: userId, email: email.toLowerCase(), codename: agentCodename },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed. Please try again.' }, { status: 500 })
  }
}
