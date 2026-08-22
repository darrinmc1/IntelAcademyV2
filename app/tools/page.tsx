import Link from 'next/link';

export const metadata = {
  title: 'Tools | OSINT Observer',
  description: 'One-job layers and utilities for open-source intelligence work.',
};

export default function ToolsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Tools</h1>
      <p className="text-gray-600 mb-10">
        Focused utilities — each does one job. No dashboards, no suites.
      </p>

      {/* Live one-job layers */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Available now
        </h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-1">
            <Link href="/tools/academy-brief" className="hover:underline">
              Academy Brief
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Paste a source URL. Get a one-paragraph plain-language brief — who published it,
            what it claims, and what to verify before you cite it.
          </p>
          <span className="inline-block mt-3 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded px-2 py-0.5">
            One-job layer
          </span>
        </div>
      </section>

      {/* Planned — not yet built */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          On the roadmap — not built yet
        </h2>
        <div className="space-y-4">
          <div className="border border-dashed border-gray-200 rounded-lg p-6 opacity-60">
            <h3 className="text-lg font-semibold mb-1">Intelligence Report Generator</h3>
            <p className="text-gray-500 text-sm">
              A one-job layer that turns a set of verified source URLs into a structured
              intelligence report outline. Not live — listed here so you know it&apos;s coming.
            </p>
            <span className="inline-block mt-3 text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200 rounded px-2 py-0.5">
              Planned one-job layer
            </span>
          </div>

          <div className="border border-dashed border-gray-200 rounded-lg p-6 opacity-60">
            <h3 className="text-lg font-semibold mb-1">Source Analysis</h3>
            <p className="text-gray-500 text-sm">
              A one-job layer that scores a single source against a fixed credibility checklist.
              Not live — listed here so you know it&apos;s coming.
            </p>
            <span className="inline-block mt-3 text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200 rounded px-2 py-0.5">
              Planned one-job layer
            </span>
          </div>

          <div className="border border-dashed border-gray-200 rounded-lg p-6 opacity-60">
            <h3 className="text-lg font-semibold mb-1">Threat Assessment</h3>
            <p className="text-gray-500 text-sm">
              A one-job layer that maps a described situation to a standard threat-level
              framework and surfaces the key unknowns. Not live — listed here so you know
              it&apos;s coming.
            </p>
            <span className="inline-block mt-3 text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200 rounded px-2 py-0.5">
              Planned one-job layer
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
