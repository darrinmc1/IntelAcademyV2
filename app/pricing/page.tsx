import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Zap, Shield, Crown, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Intel Academy",
  description:
    "Choose the plan that fits your intelligence analysis journey. From free fundamentals to full professional access.",
};

const tiers = [
  {
    id: "free",
    name: "Explorer",
    icon: BookOpen,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Start building your analytical foundation at no cost.",
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to 10 foundational topics", included: true },
      { label: "Core analytical frameworks", included: true },
      { label: "Community discussion access", included: true },
      { label: "Progress tracking", included: true },
      { label: "Structured learning paths", included: false },
      { label: "Advanced tradecraft modules", included: false },
      { label: "Downloadable reference guides", included: false },
      { label: "Certificate of completion", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    id: "analyst",
    name: "Analyst",
    icon: Zap,
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Everything you need to develop professional-grade analytical skills.",
    cta: "Start Analyst Plan",
    ctaHref: "/signup?plan=analyst",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to 10 foundational topics", included: true },
      { label: "Core analytical frameworks", included: true },
      { label: "Community discussion access", included: true },
      { label: "Progress tracking", included: true },
      { label: "Structured learning paths", included: true },
      { label: "Advanced tradecraft modules", included: true },
      { label: "Downloadable reference guides", included: true },
      { label: "Certificate of completion", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    icon: Shield,
    monthlyPrice: 59,
    annualPrice: 47,
    description: "Full platform access with credentials to validate your expertise.",
    cta: "Go Professional",
    ctaHref: "/signup?plan=professional",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Access to 10 foundational topics", included: true },
      { label: "Core analytical frameworks", included: true },
      { label: "Community discussion access", included: true },
      { label: "Progress tracking", included: true },
      { label: "Structured learning paths", included: true },
      { label: "Advanced tradecraft modules", included: true },
      { label: "Downloadable reference guides", included: true },
      { label: "Certificate of completion", included: true },
      { label: "Priority support", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    monthlyPrice: null,
    annualPrice: null,
    description: "Custom training programs for teams, agencies, and institutions.",
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to 10 foundational topics", included: true },
      { label: "Core analytical frameworks", included: true },
      { label: "Community discussion access", included: true },
      { label: "Progress tracking", included: true },
      { label: "Structured learning paths", included: true },
      { label: "Advanced tradecraft modules", included: true },
      { label: "Downloadable reference guides", included: true },
      { label: "Certificate of completion", included: true },
      { label: "Priority support", included: true },
    ],
  },
];

const comparisonRows = [
  { label: "Foundational topics", explorer: "10", analyst: "All", professional: "All", enterprise: "All" },
  { label: "Learning paths", explorer: "—", analyst: "✓", professional: "✓", enterprise: "✓" },
  { label: "Advanced tradecraft", explorer: "—", analyst: "✓", professional: "✓", enterprise: "✓" },
  { label: "Reference guides (PDF)", explorer: "—", analyst: "✓", professional: "✓", enterprise: "✓" },
  { label: "Completion certificates", explorer: "—", analyst: "—", professional: "✓", enterprise: "✓" },
  { label: "Priority support", explorer: "—", analyst: "—", professional: "—", enterprise: "✓" },
  { label: "Team management dashboard", explorer: "—", analyst: "—", professional: "—", enterprise: "✓" },
  { label: "Custom curriculum", explorer: "—", analyst: "—", professional: "—", enterprise: "✓" },
  { label: "SSO / LMS integration", explorer: "—", analyst: "—", professional: "—", enterprise: "✓" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Invest in Your Analytical Edge
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            From foundational concepts to advanced tradecraft — choose the plan that matches your ambition.
          </p>

          {/* Billing toggle label */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-4 py-2 text-sm font-medium">
            <span className="text-muted-foreground">Monthly</span>
            <span className="text-foreground font-semibold">Annual</span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-2 py-0.5 rounded-full">
              Save up to 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.highlight
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${
                      tier.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>

                <div className="mb-6">
                  {tier.annualPrice !== null ? (
                    <>
                      <span className="text-4xl font-extrabold">
                        ${tier.annualPrice}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">/mo</span>
                      {tier.monthlyPrice !== tier.annualPrice && tier.monthlyPrice !== 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Billed annually · ${tier.monthlyPrice}/mo month-to-month
                        </p>
                      )}
                      {tier.monthlyPrice === 0 && (
                        <p className="text-xs text-muted-foreground mt-1">Free forever</p>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold">Custom</span>
                      <p className="text-xs text-muted-foreground mt-1">Tailored to your team</p>
                    </>
                  )}
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors mb-6 ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      <span
                        className={feature.included ? "text-foreground" : "text-muted-foreground/60"}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-6 py-4 font-semibold text-foreground w-1/3">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">Explorer</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">Analyst</th>
                  <th className="text-center px-4 py-4 font-semibold text-primary">Professional</th>
                  <th className="text-center px-4 py-4 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border last:border-0 ${
                      i % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-foreground font-medium">{row.label}</td>
                    <td className="px-4 py-3.5 text-center text-muted-foreground">{row.explorer}</td>
                    <td className="px-4 py-3.5 text-center text-muted-foreground">{row.analyst}</td>
                    <td className="px-4 py-3.5 text-center font-semibold text-foreground">{row.professional}</td>
                    <td className="px-4 py-3.5 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="px-4 pb-24 bg-muted/30">
        <div className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
              },
              {
                q: "Is there a free trial for paid plans?",
                a: "The Explorer plan is free forever and gives you a genuine taste of the platform. Paid plans include a 7-day money-back guarantee.",
              },
              {
                q: "How does annual billing work?",
                a: "Annual plans are billed once per year at the discounted rate shown. You save up to 20% compared to paying month-to-month.",
              },
              {
                q: "What counts as an \"Enterprise\" team?",
                a: "Enterprise is designed for groups of 5 or more learners — government agencies, consulting firms, academic institutions, and corporate intelligence teams.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to sharpen your analytical thinking?</h2>
          <p className="text-muted-foreground mb-8">
            Join analysts, researchers, and intelligence professionals who are building real tradecraft skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              Start for Free
            </Link>
            <Link
              href="/signup?plan=professional"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold hover:bg-muted transition-colors"
            >
              View Professional Plan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
