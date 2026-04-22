'use client'

/**
 * Leaderboard Component
 * Shows top analysts ranked by XP
 */

import { useEffect, useState } from 'react'
import { Trophy, Medal, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface LeaderboardEntry {
  codename: string
  total_xp: number
  rank_position: number
  current_rank: string
  streak_days: number
}

export function Leaderboard({ limit = 10 }: { limit?: number }) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch(`/api/leaderboard?limit=${limit}`)
        const data = await response.json()
        setEntries(data.leaderboard || [])
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [limit])

  if (loading) {
    return <div className="text-center py-8">Loading leaderboard...</div>
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return <Trophy className="w-6 h-6 text-yellow-500" />
    if (position === 2) return <Medal className="w-6 h-6 text-gray-400" />
    if (position === 3) return <Award className="w-6 h-6 text-amber-600" />
    return <span className="w-6 text-center font-bold text-gray-600">{position}</span>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Analysts</CardTitle>
        <CardDescription>Ranked by total XP earned</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {entries.map((entry, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-3 rounded-lg ${
                entry.rank_position <= 3 ? 'bg-muted' : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 flex justify-center">
                  {getRankIcon(entry.rank_position)}
                </div>
                <div>
                  <div className="font-medium">{entry.codename}</div>
                  <div className="text-sm text-muted-foreground">{entry.current_rank}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{entry.total_xp.toLocaleString()} XP</div>
                <div className="text-xs text-muted-foreground">
                  {entry.streak_days} day streak
                </div>
              </div>
            </div>
          ))}
          {entries.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No entries yet. Complete lessons to appear on the leaderboard!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
