import Link from "next/link"
import { getCurrentUser } from "@/lib/auth"
import { newAccountWritesAllowed } from "@/lib/accounts-gate"
import { getMemberUsage } from "@/lib/db"
import { ENTITLEMENT_LABELS, isPackId, normalizeEntitlement, normalizePacks } from "@/lib/entitlement"
import { USER_PLAN_LABELS } from "@/lib/user-plan"
import {
  ACCOUNT_CTA,
  ACCOUNT_HREF,
  INTRO_TERMS,
  PRICE_MAP_LABEL,
  SUPPORT_EMAIL,
  collectionPacks,
  freeItems,
} from "@/lib/pricing"

export const metadata = {
  title: "Your account",
  description: "Your free account, the normal plan, and your own lesson and download counts.",
}

export default async function MemberDashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Your account</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Create a free account</h1>
        <p className="mt-3 text-slate-300">
          {PRICE_MAP_LABEL} {INTRO_TERMS} This page does not take payment.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={ACCOUNT_HREF} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500">
            {ACCOUNT_CTA}
          </Link>
          <Link href="/login?redirect=/dashboard" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">
            Sign in
          </Link>
          <button type="button" disabled className="cursor-not-allowed rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-400 opacity-70">
            Coming soon
          </button>
        </div>
      </div>
    )
  }

  const entitlement = normalizeEntitlement(user.entitlement, user.plan)
  const packs = normalizePacks(user.packs)
  let usage: Awaited<ReturnType<typeof getMemberUsage>> = null
  let usageNote = ""
  if (!newAccountWritesAllowed()) {
    usageNote = "Usage counts are off until POSTGRES_URL is set on a database this app is allowed to write."
  } else {
    try {
      usage = await getMemberUsage(user.id)
      if (!usage) usageNote = "Usage counts are off."
    } catch (error) {
      console.error("[dashboard] usage unavailable:", error)
      usageNote = "Usage counts appear after documentation/database/migrations/005_entitlements_usage_rls.sql is applied. This page does not apply it."
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Your account</p>
      <h1 className="mt-2 text-3xl font-bold text-white">{user.codename}</h1>
      <p className="mt-2 text-slate-400">{user.email}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">Access</p>
          <p className="mt-1 text-xl font-semibold text-white">{ENTITLEMENT_LABELS[entitlement]}</p>
          <p className="mt-1 text-sm text-slate-400">Stored plan: {USER_PLAN_LABELS[user.plan || "free"]}</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">Price</p>
          <p className="mt-1 text-xl font-semibold text-white">A$9/month inc GST</p>
          <p className="mt-1 text-sm text-slate-400">A$5 first month, then A$9/month. Cancel anytime.</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-sm text-slate-400">Your usage</p>
          {usage ? (
            <ul className="mt-2 text-sm text-slate-200">
              <li>Lesson views: {usage.lessonViews}</li>
              <li>Visible read time: {usage.readSeconds} seconds</li>
              <li>Downloads: {usage.downloads}</li>
            </ul>
          ) : (
            <p className="mt-2 text-sm text-slate-400">{usageNote}</p>
          )}
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Collection packs</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {collectionPacks.map((pack) => (
            <li key={pack.id}>
              {pack.name}: {pack.label}
              {isPackId(pack.id) && packs.includes(pack.id) ? " — on this account" : " — not on this account"}
            </li>
          ))}
        </ul>
        {entitlement !== "normal" ? (
          <button type="button" disabled className="mt-4 cursor-not-allowed rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-400 opacity-70">
            Coming soon
          </button>
        ) : (
          <p className="mt-4 text-sm text-slate-400">The normal plan is on this account. Checkout is not live.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Free lessons</h2>
        <ul className="mt-3 space-y-2">
          {freeItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="text-cyan-400 hover:text-cyan-300">{item.title}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-400">
          <Link href="/downloads" className="text-cyan-400 hover:text-cyan-300">Downloads</Link>
          {" · "}
          <Link href="/pricing" className="text-cyan-400 hover:text-cyan-300">Pricing</Link>
          {" · "}
          <Link href="/profile" className="text-cyan-400 hover:text-cyan-300">Profile</Link>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Questions: <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </section>

      {usage && usage.recent.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Recent activity</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            {usage.recent.map((row, index) => (
              <li key={`${row.created_at}-${index}`}>
                {row.event_type} · {row.resource}
                {row.seconds ? ` · ${row.seconds}s` : ""}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
