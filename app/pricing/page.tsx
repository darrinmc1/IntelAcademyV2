import Link from 'next/link'
import { Check, X, Zap, BookOpen, Crown } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    icon: BookOpen,
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for exploring and getting started with the basics.',
    cta: 'Get Started Free',
    ctaHref: '/register',
    highlighted: false,
    color: 'from-slate-500 to-slate-600',
    features: [
      { text: 'Access to 5 free courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Basic progress tracking', included: true },
      { text: 'Mobile-friendly learning', included: true },
      { text: 'Certificate of completion', included: false },
      { text: 'Downloadable resources', included: false },
      { text: 'Live Q&A sessions', included: false },
      { text: 'Mentor support', included: false },
      { text: 'Offline access', included: false },
      { text: 'Team management', included: false },
    ],
  },
  {
    name: 'Pro',
    icon: Zap,
    price: { monthly: 29, annual: 19 },
    description: 'For serious learners who want full access and career support.',
    cta: 'Start Pro Plan',
    ctaHref: '/register?plan=pro',
    highlighted: true,
    color: 'from-violet-600 to-indigo-600',
    features: [
      { text: 'Access to all 200+ courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Advanced progress tracking', included: true },
      { text: 'Mobile-friendly learning', included: true },
      { text: 'Certificate of completion', included: true },
      { text: 'Downloadable resources', included: true },
      { text: 'Live Q&A sessions', included: true },
      { text: 'Mentor support', included: false },
      { text: 'Offline access', included: false },
      { text: 'Team management', included: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: { monthly: 99, annual: 79 },
    description: 'For teams and organizations scaling their learning programs.',
    cta: 'Contact Sales',
    ctaHref: '/contact?plan=enterprise',
    highlighted: false,
    color: 'from-amber-500 to-orange-500',
    features: [
      { text: 'Access to all 200+ courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Advanced progress tracking', included: true },
      { text: 'Mobile-friendly learning', included: true },
      { text: 'Certificate of completion', included: true },
      { text: 'Downloadable resources', included: true },
      { text: 'Live Q&A sessions', included: true },
      { text: 'Mentor support', included: true },
      { text: 'Offline access', included: true },
      { text: 'Team management', included: true },
    ],
  },
]

const faqs = [
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer:
      'Absolutely. Every paid plan comes with a 14-day free trial — no credit card required. Cancel anytime before the trial ends.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise plans.',
  },
  {
    question: 'Do certificates expire?',
    answer:
      'No. Certificates of completion are yours to keep forever and can be shared directly to LinkedIn or downloaded as PDF.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee on all paid plans. If you are not satisfied, contact support for a full refund.',
  },
  {
    question: 'How does team billing work for Enterprise?',
    answer:
      'Enterprise plans are billed per seat. You can add or remove team members at any time and billing adjusts automatically.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            Simple, transparent pricing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Invest in your{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              future
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your goals. Upgrade, downgrade, or cancel anytime — no hidden fees, ever.
          </p>

          {/* Billing toggle */}
          <BillingToggle />
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Value callout */}
        <div className="max-w-3xl mx-auto mt-16 rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/20 p-8 text-center">
          <p className="text-slate-300 text-lg">
            🎓 <strong className="text-white">Over 50,000 learners</strong> have advanced their careers with our courses.
            Join them today with a{' '}
            <strong className="text-violet-400">14-day free trial</strong> — no credit card required.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Full feature{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              comparison
            </span>
          </h2>
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-slate-800/50 border border-slate-700/50 px-6 py-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-200 list-none">
                  {faq.question}
                  <span className="ml-4 text-violet-400 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-400 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of learners already building skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 font-semibold transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Get started for free
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-all duration-200"
            >
              Browse courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function BillingToggle() {
  // Static render — interactivity can be added with a client component later
  return (
    <div className="mt-10 inline-flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 rounded-full px-2 py-2">
      <button className="px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold">
        Monthly
      </button>
      <button className="px-5 py-2 rounded-full text-slate-400 text-sm font-semibold hover:text-white transition-colors">
        Annual
        <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5">
          Save 35%
        </span>
      </button>
    </div>
  )
}

function TierCard({ tier }: { tier: (typeof tiers)[number] }) {
  const Icon = tier.icon
  return (
    <div
      className={`relative flex flex-col rounded-2xl border ${
        tier.highlighted
          ? 'border-violet-500/50 bg-gradient-to-b from-violet-950/60 to-slate-900/80 shadow-2xl shadow-violet-500/20'
          : 'border-slate-700/50 bg-slate-800/40'
      } p-8`}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} mb-4`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{tier.name}</h3>
        <p className="text-slate-400 text-sm mt-1">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        {tier.price.monthly === 0 ? (
          <div className="flex items-end gap-1">
            <span className="text-5xl font-extrabold text-white">Free</span>
          </div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-5xl font-extrabold text-white">${tier.price.monthly}</span>
            <span className="text-slate-400 mb-2">/mo</span>
          </div>
        )}
        {tier.price.annual > 0 && (
          <p className="text-sm text-emerald-400 mt-1">
            ${tier.price.annual}/mo billed annually
          </p>
        )}
      </div>

      {/* CTA */}
      <Link
        href={tier.ctaHref}
        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
          tier.highlighted
            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25'
            : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border border-slate-600/50'
        }`}
      >
        {tier.cta}
      </Link>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {tier.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            )}
            <span
              className={`text-sm ${
                feature.included ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const comparisonRows = [
  { category: 'Content', feature: 'Free courses', starter: '5 courses', pro: 'All 200+', enterprise: 'All 200+' },
  { category: 'Content', feature: 'New course releases', starter: 'Limited', pro: 'Immediate', enterprise: 'Immediate' },
  { category: 'Content', feature: 'Downloadable resources', starter: false, pro: true, enterprise: true },
  { category: 'Content', feature: 'Offline access', starter: false, pro: false, enterprise: true },
  { category: 'Learning', feature: 'Progress tracking', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { category: 'Learning', feature: 'Quizzes & assessments', starter: true, pro: true, enterprise: true },
  { category: 'Learning', feature: 'Certificate of completion', starter: false, pro: true, enterprise: true },
  { category: 'Support', feature: 'Community forum', starter: true, pro: true, enterprise: true },
  { category: 'Support', feature: 'Live Q&A sessions', starter: false, pro: true, enterprise: true },
  { category: 'Support', feature: 'Dedicated mentor', starter: false, pro: false, enterprise: true },
  { category: 'Support', feature: 'Priority support', starter: false, pro: false, enterprise: true },
  { category: 'Team', feature: 'Team management dashboard', starter: false, pro: false, enterprise: true },
  { category: 'Team', feature: 'Analytics & reporting', starter: false, pro: false, enterprise: true },
  { category: 'Team', feature: 'SSO / SAML', starter: false, pro: false, enterprise: true },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-slate-600 mx-auto" />
    )
  }
  return <span className="text-sm text-slate-300">{value}</span>
}

function ComparisonTable() {
  const categories = [...new Set(comparisonRows.map((r) => r.category))]
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700/50">
            <th className="text-left px-6 py-4 text-slate-400 font-medium w-1/3">Feature</th>
            {tiers.map((tier) => (
              <th key={tier.name} className="px-6 py-4 text-center">
                <span
                  className={`font-bold ${
                    tier.highlighted ? 'text-violet-400' : 'text-slate-200'
                  }`}
                >
                  {tier.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <>
              <tr key={`cat-${category}`} className="bg-slate-800/60">
                <td
                  colSpan={4}
                  className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {category}
                </td>
              </tr>
              {comparisonRows
                .filter((r) => r.category === category)
                .map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-slate-800/60 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-6 py-3 text-slate-300">{row.feature}</td>
                    <td className="px-6 py-3 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="px-6 py-3 text-center bg-violet-950/20">
                      <CellValue value={row.pro} />
                    </td>
                    <td className="px-6 py-3 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
