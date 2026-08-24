import { MessageSquare } from "lucide-react"

export const metadata = {
  title: "Community Forum",
  description: "The Intel Analyst Academy community forum is under development.",
}

export default function ForumPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="border-b border-white/10 bg-gray-900/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Community Forum</h1>
          </div>
          <p className="text-gray-400 max-w-xl">
            The community forum is under development and is not available yet.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="rounded-xl border border-white/10 bg-gray-900 p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Coming soon</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            There are no discussions, member counts, or category activity to show.
            This page is a placeholder until the forum is built.
          </p>
        </div>
      </div>
    </main>
  )
}
