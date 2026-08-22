import Link from 'next/link';
import { MessageSquare, Users, TrendingUp, HelpCircle, Star, Clock } from 'lucide-react';

const categories = [
  {
    icon: HelpCircle,
    title: 'General Discussion',
    description: 'Ask questions, share ideas, and connect with the community.',
    threads: 142,
    posts: 1089,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Trading Strategies',
    description: 'Discuss trading approaches, market analysis, and investment ideas.',
    threads: 87,
    posts: 634,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Star,
    title: 'Platform Feedback',
    description: 'Share your feedback, report bugs, and suggest new features.',
    threads: 56,
    posts: 412,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Users,
    title: 'Introductions',
    description: 'New to the community? Introduce yourself here.',
    threads: 203,
    posts: 891,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

const recentThreads = [
  {
    title: 'Best practices for portfolio diversification in volatile markets',
    author: 'alex_trader',
    replies: 23,
    views: 412,
    time: '2 hours ago',
    category: 'Trading Strategies',
  },
  {
    title: 'How do I set up price alerts for multiple assets?',
    author: 'newbie_investor',
    replies: 8,
    views: 156,
    time: '4 hours ago',
    category: 'General Discussion',
  },
  {
    title: 'Feature request: Dark mode improvements for mobile',
    author: 'ux_fan_2024',
    replies: 15,
    views: 289,
    time: '6 hours ago',
    category: 'Platform Feedback',
  },
  {
    title: 'Hello from Singapore! Long-time lurker, first-time poster',
    author: 'sg_investor',
    replies: 31,
    views: 520,
    time: '1 day ago',
    category: 'Introductions',
  },
  {
    title: 'Understanding the new analytics dashboard — tips & tricks',
    author: 'power_user_pro',
    replies: 44,
    views: 873,
    time: '1 day ago',
    category: 'General Discussion',
  },
];

export default function ForumPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gray-900/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Community Forum</h1>
          </div>
          <p className="text-gray-400 max-w-xl">
            Connect with fellow investors, share strategies, ask questions, and help shape the platform.
          </p>
          <div className="flex gap-6 mt-6 text-sm text-gray-400">
            <span><strong className="text-white">488</strong> members online</span>
            <span><strong className="text-white">3,026</strong> posts this week</span>
            <span><strong className="text-white">12,400+</strong> community members</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Categories */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-xl border border-white/10 bg-gray-900 p-5 hover:border-white/20 transition cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${cat.bg}`}>
                      <Icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white">{cat.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cat.description}</p>
                      <div className="flex gap-4 mt-3 text-xs text-gray-500">
                        <span>{cat.threads} threads</span>
                        <span>{cat.posts} posts</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Threads */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Discussions</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">View all</button>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-900 divide-y divide-white/5">
            {recentThreads.map((thread) => (
              <div
                key={thread.title}
                className="p-4 hover:bg-white/5 transition cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white truncate">{thread.title}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span>by <span className="text-gray-400">{thread.author}</span></span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                        {thread.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 shrink-0">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {thread.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {thread.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Join the conversation</h3>
          <p className="text-gray-400 text-sm mb-4">Sign in to post, reply, and connect with other members.</p>
          <div className="flex justify-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/5 text-white text-sm font-medium transition"
            >
              Create account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
