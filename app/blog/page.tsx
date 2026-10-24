import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Articles",
  description: "Longer notes beside the lessons: OSINT, HUMINT, bias, threat assessment, and report writing.",
}

const posts = [
  {
    href: "/blog/osint-techniques-2026",
    title: "OSINT techniques in 2026",
    blurb: "Search operators, social media, and what not to trust at face value.",
  },
  {
    href: "/blog/humint-interview-techniques",
    title: "HUMINT interview techniques",
    blurb: "A practical note on interviews, not a script you can read off a card.",
  },
  {
    href: "/blog/intelligence-report-writing",
    title: "Intelligence report writing",
    blurb: "Structure, style, and the standards the lessons keep returning to.",
  },
  {
    href: "/blog/cognitive-bias-analysis",
    title: "Cognitive bias in analysis",
    blurb: "How bias shows up in a product, and what a checklist can and cannot catch.",
  },
  {
    href: "/blog/threat-assessment-framework",
    title: "Threat assessment framework",
    blurb: "A structured pass at threat, not a coloured matrix on its own.",
  },
  {
    href: "/blog/analysis-methodology-guide",
    title: "Analysis methodology",
    blurb: "How the methods fit together when you have more than one.",
  },
]

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-3">Articles</h1>
      <p className="text-slate-400 mb-8">
        Longer notes that sit beside the lessons. They are not a separate course.
      </p>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.href} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
            <Link href={post.href} className="text-lg font-semibold text-white hover:text-cyan-300">
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-slate-400">{post.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
