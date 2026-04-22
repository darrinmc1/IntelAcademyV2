import { Leaderboard } from '@/components/gamification/leaderboard'

export default function LeaderboardPage() {
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Analyst Leaderboard</h1>
        <p className="text-muted-foreground">
          Top analysts ranked by total XP earned. Complete lessons and maintain streaks to climb the ranks!
        </p>
      </div>
      
      <Leaderboard limit={50} />
      
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h2 className="font-semibold mb-2">How Rankings Work</h2>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>• Earn 50 XP for each lesson completed</li>
          <li>• Earn 100 XP for passing quizzes</li>
          <li>• Earn bonus XP for maintaining learning streaks</li>
          <li>• Only registered users appear on the leaderboard</li>
        </ul>
      </div>
    </div>
  )
}
