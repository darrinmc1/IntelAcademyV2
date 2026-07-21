import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { createUser, getUserByEmail, initDatabase } from '@/lib/db'
import { createToken, setAuthCookie } from '@/lib/auth'
import { generateCodename } from '@/lib/codename-generator'

export async function POST(request: Request) {
  try {
    await initDatabase()
    
    const { email, password, codename, existingProfile } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }
    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    // Check if email already exists
    const existing = await getUserByEmail(email.toLowerCase())
    if (existing) {
      return NextResponse.json({ error: 'An agent with this email already exists' }, { status: 409 })
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12)
    const userId = crypto.randomUUID()
    const agentCodename = codename || generateCodename()

    // Create user with optional existing localStorage profile data
    await createUser({
      id: userId,
      email: email.toLowerCase(),
      passwordHash,
      codename: agentCodename,
      xp: existingProfile?.xp || 0,
      badges: existingProfile?.badges || [],
      lessonsCompleted: existingProfile?.lessonsCompleted || [],
      lessonsViewed: existingProfile?.lessonsViewed || [],
      streakDays: existingProfile?.streakDays || 0,
      bestStreak: existingProfile?.bestStreak || 0,
      lastVisitDate: existingProfile?.lastVisitDate || new Date().toISOString(),
    })

    // Create JWT and set cookie
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
      user: { id: userId, email: email.toLowerCase(), codename: agentCodename } 
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed. Please try again.' }, { status: 500 })
  }
}
