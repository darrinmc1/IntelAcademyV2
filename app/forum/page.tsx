import type { Metadata } from "next"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Plus } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Community Forum | The Intel Analyst Academy",
  description: "Connect with intelligence professionals, ask questions, and share insights.",
}

interface Discussion {
  title: string
  author: string
  initials: string
  time: string
  replies: number
  tag: string
  tagColor: string
  excerpt: string
}

const discussions: Discussion[] = [
  {
    title: "Best practices for validating OSINT sources?",
    author: "Alex Chen", initials: "AC", time: "2 days ago", replies: 15,
    tag: "OSINT", tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    excerpt: "I'm working on a project that requires extensive OSINT research, and I'm looking for advice on how to effectively validate sources. What methods do you use to ensure reliability?",
  },
  {
    title: "Analyst's Notebook alternatives for small teams?",
    author: "Maria Lopez", initials: "ML", time: "3 days ago", replies: 8,
    tag: "Tools", tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    excerpt: "My team is looking for alternatives to Analyst's Notebook that are more budget-friendly. We need link analysis capabilities but can't justify the cost of full i2 licenses.",
  },
  {
    title: "Transitioning from law enforcement to private sector analysis",
    author: "James Wilson", initials: "JW", time: "5 days ago", replies: 12,
    tag: "Career", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    excerpt: "After 10 years in law enforcement intelligence, I'm considering a move to the private sector. What skills should I highlight? Are there certifications private companies value most?",
  },
  {
    title: "How to structure a strategic intelligence assessment?",
    author: "Sarah Kim", initials: "SK", time: "1 week ago", replies: 21,
    tag: "Analysis", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    excerpt: "I've been tasked with producing my first strategic intelligence assessment and I'm not sure how to structure it. Looking for templates or advice from those who've done this before.",
  },
  {
    title: "Cognitive bias — how do you check your own thinking?",
    author: "David Torres", initials: "DT", time: "1 week ago", replies: 19,
    tag: "General", tagColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    excerpt: "We talk a lot about cognitive bias in theory, but I want to hear practical techniques analysts use in their daily work to identify and counteract their own biases.",
  },
]

function DiscussionCard({ d }: { d: Discussion }) {
  return (
    <div className="group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-500/40 hover:shadow-[0_4px_20px_rgba(8,145,178,0.1)] transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
          {d.title}
        </h3>
        <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${d.tagColor}`}>
          {d.tag}
        </span>
      </div>
      <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2 mb-4">{d.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6 ring-1 ring-white/10">
            <AvatarImage src="/abstract-geometric-shapes.png" alt={d.author} />
            <AvatarFallback className="text-xs bg-slate-800 text-slate-300">{d.initials}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-slate-500">{d.author}</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500">{d.time}</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <MessageSquare className="h-3 w-3" /> {d.replies}
          </span>
        </div>
        <Button asChild variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 text-xs">
          <Link href="/coming-soon/community-forums">View →</Link>
        </Button>
      </div>
    </div>
  )
}

const tabs = [
  { value: "all", label: "All" },
  { value: "general", label: "General" },
  { value: "osint", label: "OSINT" },
  { value: "link-analysis", label: "Link Analysis" },
  { value: "case-studies", label: "Case Studies" },
  { value: "career", label: "Career" },
]

export default function Forum() {
  return (
    <>
      <PageHero
        title="Community"
        accentTitle="Forum"
        subtitle="Connect with peers, share insights, and grow with the intelligence analyst community."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Forum" }]}
      >
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <Input
            type="search"
            placeholder="Search discussions..."
            className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50 rounded-full"
          />
          <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-6 shrink-0 glow-primary-hover border border-cyan-400/30">
            <Link href="/coming-soon/community-forums">
              <Plus className="h-4 w-4 mr-2" /> New Discussion
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-slate-900/60 border border-white/10 p-1 rounded-xl flex-wrap h-auto gap-1">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="rounded-lg data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-400"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {discussions.map((d) => <DiscussionCard key={d.title} d={d} />)}
          </TabsContent>
          {tabs.slice(1).map((t) => (
            <TabsContent key={t.value} value={t.value} className="space-y-4">
              {discussions
                .filter((d) => d.tag.toLowerCase() === t.value || d.tag.toLowerCase().includes(t.value))
                .map((d) => <DiscussionCard key={d.title} d={d} />)}
              {discussions.filter((d) => d.tag.toLowerCase() === t.value || d.tag.toLowerCase().includes(t.value)).length === 0 && (
                <div className="text-center py-16 text-slate-500">No discussions in this category yet.</div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
