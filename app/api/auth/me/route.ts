import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { getUserProfile } from '@/lib/db'

export async function GET() {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ user: null })
  }

  try {
    const profile = await getUserProfile(user.id)
    return NextResponse.json({ user: profile })
  } catch {
    return NextResponse.json({ user: null })
  }
}
