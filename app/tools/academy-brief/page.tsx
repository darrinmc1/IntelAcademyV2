import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { AcademyBriefForm } from "@/components/tools/academy-brief-form"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { academyBriefFaqs, faqJsonLd, softwareJsonLd } from "@/lib/aeo"
import { DISCLAIMER } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Academy Brief",
  description:
    "Paste a raw intel dump or notes. Get a structured brief using the academy method, citing real Intel Analyst Academy topics and lessons. Training and education only.",
}

export default function AcademyBriefPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4 text-slate-400 hover:text-slate-200">
          <Link href="/tools">
            <ArrowLeft className="mr-1 h-4 w-4" />
            All tools
          </Link>
        </Button>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Academy layer</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          Academy Brief
        </h1>
        <p className="mt-2 text-slate-400">
          Paste a raw intel dump. Get a structured brief using the academy method, with citations to
          real catalog topics — not a chat, not a new brand.
        </p>
      </div>

      <div className="mb-6 flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm text-slate-300">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
        <p>{DISCLAIMER}</p>
      </div>

      <AcademyBriefForm />

      <section className="mt-16" aria-labelledby="brief-faq">
        <h2 id="brief-faq" className="text-xl font-semibold text-slate-50">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="mt-4">
          {academyBriefFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`} className="border-slate-800">
              <AccordionTrigger className="text-left text-slate-200">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
