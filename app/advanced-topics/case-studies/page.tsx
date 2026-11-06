import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata(
  "/advanced-topics/case-studies",
  "Advanced topic case studies",
  "Illustrative case studies linked from advanced topics. Invented details, written as analyst tradecraft.",
)

const studies = [
  {
    href: "/advanced-topics/case-studies/tracking-stolen-data",
    title: "Tracking Stolen Data Through the Deep Web",
    description:
      "An illustrative case about testing a stolen-data claim from records the company already holds, and stopping before anyone tries to fetch the file.",
  },
  {
    href: "/advanced-topics/case-studies/hidden-criminal-infrastructure",
    title: "Uncovering a Hidden Criminal Infrastructure",
    description:
      "An illustrative case about three supplier invoices that were one set of paperwork, and the judgment that was not allowed to grow past the evidence.",
  },
]

export default function AdvancedCaseStudiesPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link href="/advanced-topics/deep-web-research" className="text-sm text-cyan-300 hover:text-cyan-200">
        ← Deep Web Research
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-white">Case studies</h1>
      <p className="mt-3 text-slate-400">
        Two illustrative cases from the deep web research topic. The companies are invented. The limits are not.
      </p>
      <ul className="mt-8 space-y-4">
        {studies.map((study) => (
          <li key={study.href}>
            <Link
              href={study.href}
              className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors"
            >
              <h2 className="text-xl font-semibold text-white">{study.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{study.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
