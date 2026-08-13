import type { Metadata } from "next"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { academyBriefFaqs, faqJsonLd } from "@/lib/aeo"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about Academy Brief, pricing, and The Intel Analyst Academy method. Training and education only — not an operational intelligence product.",
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Answer-ready</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50">FAQs</h1>
      <p className="mt-3 text-slate-400">
        Parseable answers for people and answer engines. Machine-readable copy also lives at{" "}
        <Link href="/llm.txt" className="text-cyan-400 underline underline-offset-2">
          /llm.txt
        </Link>{" "}
        and{" "}
        <Link href="/pricing.json" className="text-cyan-400 underline underline-offset-2">
          /pricing.json
        </Link>
        .
      </p>

      <Accordion type="single" collapsible className="mt-8">
        {academyBriefFaqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`} className="border-slate-800">
            <AccordionTrigger className="text-left text-slate-200">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
