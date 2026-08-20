import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, X, Zap, Building2, Rocket, Crown } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    icon: Zap,
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Perfect for individuals and small projects getting started.',
    cta: 'Get Started Free',
    ctaHref: '/register',
    highlighted: false,
    features: [
      { text: 'Up to 3 projects', included: true },
      { text: '5 GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Community support', included: true },
      { text: 'API access', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'Priority support', included: false },
      { text: 'SSO / SAML', included: false },
      { text: 'SLA guarantee', included: false },
    ],
  },
  {
    name: 'Pro',
    icon: Rocket,
    monthlyPrice: 29,
    annualPrice: 23,
    description: 'For growing teams that need more power and collaboration.',
    cta: 'Start Pro Trial',
    ctaHref: '/register?plan=pro',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: '50 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Email & chat support', included: true },
      { text: 'API access', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Priority support', included: false },
      { text: 'SSO / SAML', included: false },
      { text: 'SLA guarantee', included: false },
    ],
  },
  {
    name: 'Business',
    icon: Building2,
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'For larger teams requiring advanced controls and compliance.',
    cta: 'Start Business Trial',
    ctaHref: '/register?plan=business',
    highlighted: false,
    features: [
      { text: 'Unlimited projects', included: true },
      { text: '500 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'API access', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Priority support', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'SLA guarantee', included: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: Crown,
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large organizations with specific needs.',
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'API access', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Priority support', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'SLA guarantee', included: true },
    ],
  },
];

const comparisonFeatures = [
  'Projects',
  'Storage',
  'Analytics',
  'Support',
  'API access',
  'Custom integrations',
  'Priority support',
  'SSO / SAML',
  'SLA guarantee',
];

const comparisonData: Record<string, string[]> = {
  Starter:    ['Up to 3', '5 GB',       'Basic',    'Community', '—',   '—',   '—',   '—',   '—'],
  Pro:        ['Unlimited', '50 GB',    'Advanced', 'Email & Chat', '✓', '✓',   '—',   '—',   '—'],
  Business:   ['Unlimited', '500 GB',   'Advanced', 'Priority',  '✓',   '✓',   '✓',   '✓',   '—'],
  Enterprise: ['Unlimited', 'Unlimited','Advanced', 'Dedicated', '✓',   '✓',   '✓',   '✓',   '✓'],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your team. Upgrade or downgrade at any time.
          </p>

          {/* Annual toggle hint */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-5 py-2 text-sm font-medium">
            <span className="text-muted-foreground">Monthly</span>
            <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary">
              <span className="inline-block h-3.5 w-3.5 translate-x-4 rounded-full bg-white transition" />
            </span>
            <span className="text-foreground font-semibold">Annual</span>
            <span className="ml-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 text-xs font-bold">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
                  tier.highlighted
                    ? 'border-primary bg-primary/5 ring-2 ring-primary'
                    : 'border-border bg-card'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground shadow">
                    {tier.badge}
                  </span>
                )}

                <div className="mb-4 flex items-center gap-2">
                  <span className={`rounded-lg p-2 ${
                    tier.highlighted ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <h2 className="text-lg font-bold">{tier.name}</h2>
                </div>

                <div className="mb-2">
                  {tier.annualPrice !== null ? (
                    <>
                      <span className="text-4xl font-extrabold">${tier.annualPrice}</span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                      {tier.monthlyPrice !== tier.annualPrice && tier.monthlyPrice !== 0 && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          ${tier.monthlyPrice}/mo billed monthly
                        </p>
                      )}
                      {tier.monthlyPrice === 0 && (
                        <p className="text-xs text-muted-foreground mt-0.5">Free forever</p>
                      )}
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold">Custom</span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      <span className={f.included ? 'text-foreground' : 'text-muted-foreground/60'}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.ctaHref}>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="py-4 px-5 text-left font-semibold text-muted-foreground w-1/3">Feature</th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className={`py-4 px-4 text-center font-bold ${
                        t.highlighted ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr
                    key={feature}
                    className={`border-b border-border last:border-0 ${
                      idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                    }`}
                  >
                    <td className="py-3 px-5 font-medium text-foreground">{feature}</td>
                    {tiers.map((t) => {
                      const val = comparisonData[t.name][idx];
                      return (
                        <td key={t.name} className="py-3 px-4 text-center">
                          {val === '✓' ? (
                            <Check className="h-4 w-4 text-green-500 mx-auto" />
                          ) : val === '—' ? (
                            <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is happy to help you find the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Sales</Button>
            </Link>
            <Link href="/register">
              <Button size="lg">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
