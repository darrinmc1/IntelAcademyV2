/**
 * Leaderboard API Route
 * GET /api/leaderboard?limit=10
 */

import { NextRequest, NextResponse } from 'next/server'
import { getLeaderboard } from '@/lib/gamification-enhanced'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = parseInt(searchParams.get('limit') || '10', 10)

    const leaderboard = await getLeaderboard(limit)

    return NextResponse.json({ leaderboard }, { status: 200 })
  } catch (error) {
    console.error('Leaderboard API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    )
  }
}
