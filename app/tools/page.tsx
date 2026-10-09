import Link from 'next/link';

export const metadata = {
  title: 'Analyst Tools',
  description: 'Practice tools for intelligence analysts: practical exercises, an AI instructor and the Academy Brief.',
};

const LIVE_TOOLS = [
  {
    href: '/exercises',
    title: 'Practical Exercises',
    text: 'Work a fictional brief pack end to end — grade the sources, find the gaps, test competing hypotheses, write the assessment — and get marked against an expert answer key.',
    tag: 'Training exercise',
  },
  {
    href: '/instructor',
    title: 'The Chief — AI Instructor',
    text: 'Explains techniques, questions your reasoning, evaluates your assessments, points you to real lessons and writes fresh practice exercises.',
    tag: 'AI instructor',
  },
  {
    href: '/tools/academy-brief',
    title: 'Academy Brief',
    text: 'Paste a raw intel dump or your notes. Get a structured brief using the academy method — BLUF, key judgments, source assessment and gaps — citing real lessons.',
    tag: 'One-job layer',
  },
];

const PLANNED_TOOLS = [
  {
    title: 'Intelligence Report Generator',
    text: 'A one-job layer that turns a set of verified source URLs into a structured intelligence report outline.',
  },
  {
    title: 'Source Analysis',
    text: 'A one-job layer that scores a single source against a fixed credibility checklist.',
  },
  {
    title: 'Threat Assessment',
    text: 'A one-job layer that maps a described situation to a standard threat-level framework and surfaces the key unknowns.',
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-slate-50">Tools</h1>
      <p className="text-slate-400 mb-10">
        Focused utilities — each does one job. No dashboards, no suites.
      </p>

      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Available now
        </h2>
        <div className="space-y-4">
          {LIVE_TOOLS.map((tool) => (
            <div key={tool.href} className="border border-slate-800 bg-slate-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-1 text-slate-50">
                <Link href={tool.href} className="hover:text-cyan-300 hover:underline">
                  {tool.title}
                </Link>
              </h3>
              <p className="text-slate-400 text-sm">{tool.text}</p>
              <span className="inline-block mt-3 text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5">
                {tool.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          On the roadmap — not built yet
        </h2>
        <div className="space-y-4">
          {PLANNED_TOOLS.map((tool) => (
            <div key={tool.title} className="border border-dashed border-slate-700 rounded-lg p-6 opacity-70">
              <h3 className="text-lg font-semibold mb-1 text-slate-200">{tool.title}</h3>
              <p className="text-slate-400 text-sm">
                {tool.text} Not live — listed here so you know it&apos;s coming.
              </p>
              <span className="inline-block mt-3 text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 rounded px-2 py-0.5">
                Planned one-job layer
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
