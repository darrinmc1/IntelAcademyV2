import React from 'react';

const sisterSites = [
  {
    name: 'ABC of Cyber',
    url: 'https://abcofcyber.com',
    description: 'Cybersecurity fundamentals made simple.',
    status: 'live',
    label: 'Live'
  },
  {
    name: 'FreelancePro',
    url: 'https://freelancepro.vercel.app',
    description: 'Tools and resources for freelance professionals.',
    status: 'preview',
    label: 'Preview'
  },
  {
    name: 'AI for SMB',
    url: 'https://aiformsmb.vercel.app',
    description: 'AI solutions tailored for small and medium businesses.',
    status: 'preview',
    label: 'Preview'
  },
  {
    name: 'Money Mastery',
    url: 'https://moneymastery.vercel.app',
    description: 'Personal finance education and tools.',
    status: 'preview',
    label: 'Preview'
  }
];

const statusStyles: Record<string, string> = {
  live: 'bg-green-100 text-green-800',
  preview: 'bg-yellow-100 text-yellow-800',
  'coming-soon': 'bg-gray-100 text-gray-500'
};

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
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{site.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    statusStyles[site.status] ?? statusStyles['coming-soon']
                  }`}
                >
                  {site.label}
                </span>
              </div>
              <p className="text-sm text-gray-600">{site.description}</p>
            </div>
            {site.status !== 'coming-soon' && (
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Visit site &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
