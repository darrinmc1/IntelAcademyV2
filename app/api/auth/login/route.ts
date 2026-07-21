import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getUserByEmail, getUserProfile, initDatabase } from '@/lib/db'
import { createToken, setAuthCookie } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    await initDatabase()
    
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const user = await getUserByEmail(email.toLowerCase())
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials. Check your intel.' }, { status: 401 })
    }

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials. Check your intel.' }, { status: 401 })
    }

    const token = await createToken({
      id: user.id,
      email: user.email,
      codename: user.codename,
      role: user.role || 'user',
      createdAt: user.created_at,
    })
    await setAuthCookie(token)

    const profile = await getUserProfile(user.id)

    return NextResponse.json({ success: true, user: profile })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed. Please try again.' }, { status: 500 })
  }
}
