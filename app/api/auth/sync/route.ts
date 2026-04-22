import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { updateUserProfile } from '@/lib/db'

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    const profile = await request.json()
    
    await updateUserProfile(user.id, {
      xp: profile.xp,
      badges: profile.badges,
      lessonsCompleted: profile.lessonsCompleted,
      lessonsViewed: profile.lessonsViewed,
      streakDays: profile.streakDays,
      bestStreak: profile.bestStreak,
      lastVisitDate: profile.lastVisitDate,
      codename: profile.codename,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Sync error:', error)
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
  }
}
