import Link from "next/link"
import { FREE_CTA, PAID_CTA, SUPPORT_EMAIL } from "@/lib/pricing"

export function AccountGate({
  mode,
  title,
  nextPath,
}: {
  mode: "need_account" | "coming_soon"
  title: string
  nextPath: string
}) {
  const registerHref = `/register?redirect=${encodeURIComponent(nextPath)}`
  const loginHref = `/login?redirect=${encodeURIComponent(nextPath)}`

  return (
    <section className="my-8 rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {mode === "need_account" ? "Free account" : "Coming soon"}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      {mode === "need_account" ? (
        <p className="mt-3 max-w-2xl text-slate-300">
          This is part of the free sample: three lessons and two PDFs. Create a free account to open it. Checkout is not live.
        </p>
      ) : (
        <p className="mt-3 max-w-2xl text-slate-300">
          This sits in the Path Pack or Written Library. Those packs are not on sale. You can create a free account for the sample, or join the list.
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={registerHref} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500">
          {FREE_CTA}
        </Link>
        <Link href={loginHref} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400/40">
          Sign in
        </Link>
        {mode === "coming_soon" ? (
          <Link href="/waitlist" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400/40">
            {PAID_CTA}
          </Link>
        ) : null}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Questions: <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </section>
  )
}
