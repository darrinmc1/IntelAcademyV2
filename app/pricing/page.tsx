import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: 49,
    period: 'one-time',
    description: 'Perfect for beginners exploring new skills.',
    features: [
      'Access to 1 course',
      'Lifetime access',
      'Certificate of completion',
      'Community forum access',
      'Mobile & desktop access',
    ],
    notIncluded: [
      'Mentorship sessions',
      'Project reviews',
      'Priority support',
    ],
    cta: 'Get Started',
    href: '/courses',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 149,
    period: 'one-time',
    description: 'Best for professionals leveling up their career.',
    features: [
      'Access to 5 courses',
      'Lifetime access',
      'Certificate of completion',
      'Community forum access',
      'Mobile & desktop access',
      '2 mentorship sessions',
      'Project reviews',
    ],
    notIncluded: [
      'Priority support',
    ],
    cta: 'Go Pro',
    href: '/courses',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 399,
    period: 'per seat / year',
    description: 'For teams that want to grow together.',
    features: [
      'Unlimited courses',
      'Lifetime access',
      'Certificate of completion',
      'Community forum access',
      'Mobile & desktop access',
      'Unlimited mentorship sessions',
      'Project reviews',
      'Priority support',
      'Team analytics dashboard',
      'Custom learning paths',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    href: '/contact',
    highlighted: false,
  },
];

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade at any time and we will credit your previous purchase toward the new plan.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Every course includes a free preview of the first module so you can evaluate the content before purchasing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise orders.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We offer a 30-day money-back guarantee on all plans, no questions asked.',
  },
  {
    q: 'Are certificates recognised by employers?',
    a: 'Our certificates are industry-recognised and can be shared directly to LinkedIn or downloaded as a PDF.',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/60 text-indigo-300 text-sm font-medium tracking-wide">
          Simple, transparent pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Invest in your future.
          <br />
          <span className="text-indigo-400">See the return immediately.</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg">
          Choose the plan that fits your goals. Every tier includes lifetime access and a 30-day money-back guarantee.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 flex flex-col ${
              tier.highlighted
                ? 'bg-indigo-600 ring-2 ring-indigo-400 shadow-2xl shadow-indigo-900/50'
                : 'bg-gray-900 ring-1 ring-gray-800'
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-400 text-gray-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
            <p className={`text-sm mb-6 ${tier.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}>
              {tier.description}
            </p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold">${tier.price}</span>
              <span className={`ml-2 text-sm ${tier.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}>
                {tier.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
              {tier.notIncluded.map((f) => (
                <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlighted ? 'text-indigo-300 line-through' : 'text-gray-600 line-through'}`}>
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                tier.highlighted
                  ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </section>

      {/* ROI Section */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">The numbers speak for themselves</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Our learners consistently report measurable career outcomes within 6 months of completing a course.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '94%', label: 'completion rate' },
              { stat: '3.2×', label: 'average salary increase' },
              { stat: '6 weeks', label: 'avg. time to job offer' },
              { stat: '50k+', label: 'learners worldwide' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold text-indigo-400">{stat}</p>
                <p className="text-gray-400 text-sm mt-1 capitalize">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-extrabold text-center mb-12">Full feature comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 pr-6 text-gray-400 font-medium w-1/2">Feature</th>
                {tiers.map((t) => (
                  <th key={t.name} className={`py-3 px-4 text-center font-bold ${
                    t.highlighted ? 'text-indigo-400' : 'text-white'
                  }`}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Course access', values: ['1 course', '5 courses', 'Unlimited'] },
                { feature: 'Lifetime access', values: [true, true, true] },
                { feature: 'Certificate', values: [true, true, true] },
                { feature: 'Community forum', values: [true, true, true] },
                { feature: 'Mentorship sessions', values: ['—', '2 sessions', 'Unlimited'] },
                { feature: 'Project reviews', values: [false, true, true] },
                { feature: 'Priority support', values: [false, false, true] },
                { feature: 'Team analytics', values: [false, false, true] },
                { feature: 'Custom learning paths', values: [false, false, true] },
              ].map(({ feature, values }) => (
                <tr key={feature} className="border-b border-gray-800/60 hover:bg-gray-900/40 transition-colors">
                  <td className="py-3 pr-6 text-gray-300">{feature}</td>
                  {values.map((v, i) => (
                    <td key={i} className="py-3 px-4 text-center">
                      {typeof v === 'boolean' ? (
                        v ? (
                          <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className={tiers[i].highlighted ? 'text-indigo-300 font-medium' : 'text-gray-300'}>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to start learning?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Join 50,000+ learners already transforming their careers. 30-day money-back guarantee — no risk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-colors"
          >
            Browse Courses
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-colors"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
