import React from 'react';

// Only real, verified-live URLs. Verified 2026-09-21 (all HTTP 200).
const sisterSites = [
  {
    name: 'ABC of Cyber',
    url: 'https://abcofcyber.com',
    description: 'Cybersecurity fundamentals made simple.',
  },
  {
    name: 'PeelBoss',
    url: 'https://peelboss.com',
    description: 'Management platform — ops, teams and delivery.',
  },
  {
    name: 'FreelancePro',
    url: 'https://freelancepro-teal.vercel.app',
    description: 'Tools and resources for freelance professionals.',
  },
  {
    name: 'AI for SMB',
    url: 'https://aiforsmb.vercel.app',
    description: 'AI solutions tailored for small and medium businesses.',
  },
  {
    name: 'Money Mastery',
    url: 'https://moneymastery.vercel.app',
    description: 'Personal finance education and tools.',
  },
];

export default function SisterCards() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Sister Sites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sisterSites.map((site) => (
          <div
            key={site.name}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3">{site.name}</h3>
              <p className="text-sm text-gray-600">{site.description}</p>
            </div>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Visit site &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
