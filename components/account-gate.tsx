import Link from "next/link"
import { ACCOUNT_CTA, ACCOUNT_HREF, INTRO_TERMS, PRICE_MAP_LABEL, SUPPORT_EMAIL } from "@/lib/pricing"

export function AccountGate({
  mode,
  title,
  nextPath,
}: {
  mode: "need_account" | "coming_soon"
  title: string
  nextPath: string
}) {
  const registerHref = `${ACCOUNT_HREF}?redirect=${encodeURIComponent(nextPath)}`
  const loginHref = `/login?redirect=${encodeURIComponent(nextPath)}`

  return (
    <section className="my-8 rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {mode === "need_account" ? "Free account" : "Coming soon"}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      {mode === "need_account" ? (
        <p className="mt-3 max-w-2xl text-slate-300">
          This is one of the three free lessons. Create a free account with your email to open it.
          {" "}{PRICE_MAP_LABEL} {INTRO_TERMS} This site does not take payment.
        </p>
      ) : (
        <p className="mt-3 max-w-2xl text-slate-300">
          This is part of the normal plan. {PRICE_MAP_LABEL} {INTRO_TERMS} Checkout is not live.
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={registerHref} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500">
          {ACCOUNT_CTA}
        </Link>
        <Link href={loginHref} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400/40">
          Sign in
        </Link>
        {mode === "coming_soon" ? (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-400 opacity-70"
          >
            Coming soon
          </button>
        ) : null}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Questions: <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </section>
  )
}
