import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Course Curriculum | SOCI',
  description: 'Detailed curriculum breakdown for OSINT, threat assessment, geospatial and financial intelligence courses including modules, learning outcomes, and time commitment.',
}

const courses = [
  {
    id: 'osint-fundamentals',
    title: 'OSINT Fundamentals',
    subtitle: 'Open Source Intelligence Collection & Analysis',
    totalHours: 40,
    level: 'Beginner to Intermediate',
    color: 'blue',
    description:
      'Master the art of gathering, verifying, and analyzing publicly available information to produce actionable intelligence.',
    modules: [
      {
        number: 1,
        title: 'Introduction to OSINT',
        hours: 4,
        topics: [
          'History and evolution of open source intelligence',
          'Legal and ethical frameworks',
          'The intelligence cycle applied to OSINT',
          'Source reliability and information credibility',
        ],
        outcomes: [
          'Define OSINT and distinguish it from other intelligence disciplines',
          'Apply ethical guidelines to collection activities',
          'Evaluate source credibility using structured frameworks',
        ],
      },
      {
        number: 2,
        title: 'Digital Footprint Analysis',
        hours: 6,
        topics: [
          'Social media intelligence (SOCMINT)',
          'Username and account enumeration',
          'Metadata extraction from documents and images',
          'Reverse image search techniques',
        ],
        outcomes: [
          'Conduct systematic social media investigations',
          'Extract and interpret metadata from digital files',
          'Build subject profiles from digital footprints',
        ],
      },
      {
        number: 3,
        title: 'Web Intelligence',
        hours: 8,
        topics: [
          'Advanced search operators and dorking',
          'Dark web monitoring fundamentals',
          'Website analysis and WHOIS investigation',
          'Archived content and the Wayback Machine',
          'Forum and paste site monitoring',
        ],
        outcomes: [
          'Use advanced search techniques to surface hidden information',
          'Safely navigate and monitor dark web sources',
          'Reconstruct digital histories using archived content',
        ],
      },
      {
        number: 4,
        title: 'Human Network Mapping',
        hours: 6,
        topics: [
          'Link analysis and relationship mapping',
          'Corporate structure investigation',
          'Professional network analysis',
          'Visualization tools and techniques',
        ],
        outcomes: [
          'Build and interpret network graphs of human relationships',
          'Identify key nodes and influence patterns',
          'Present network analysis findings visually',
        ],
      },
      {
        number: 5,
        title: 'Operational Security for Analysts',
        hours: 6,
        topics: [
          'Analyst OPSEC principles',
          'Virtual machine and browser isolation',
          'VPN and anonymization tools',
          'Sock puppet account management',
        ],
        outcomes: [
          'Implement OPSEC measures to protect investigations',
          'Set up isolated research environments',
          'Manage online personas ethically and securely',
        ],
      },
      {
        number: 6,
        title: 'Reporting and Dissemination',
        hours: 10,
        topics: [
          'Intelligence report writing standards',
          'Source citation and documentation',
          'Confidence levels and uncertainty language',
          'Briefing techniques for non-technical audiences',
          'Capstone project: full OSINT investigation',
        ],
        outcomes: [
          'Produce professional intelligence reports',
          'Communicate findings with appropriate confidence caveats',
          'Deliver intelligence briefings to varied audiences',
        ],
      },
    ],
  },
  {
    id: 'threat-assessment',
    title: 'Threat Assessment',
    subtitle: 'Structured Threat Evaluation & Risk Analysis',
    totalHours: 35,
    level: 'Intermediate',
    color: 'red',
    description:
      'Develop systematic approaches to identifying, evaluating, and communicating threats to people, organizations, and critical infrastructure.',
    modules: [
      {
        number: 1,
        title: 'Foundations of Threat Assessment',
        hours: 5,
        topics: [
          'Threat vs. risk vs. vulnerability distinctions',
          'Behavioral threat assessment models',
          'Historical case studies in threat escalation',
          'Legal considerations and duty to warn',
        ],
        outcomes: [
          'Differentiate between threat, risk, and vulnerability concepts',
          'Apply established behavioral models to real cases',
          'Navigate legal obligations in threat assessment contexts',
        ],
      },
      {
        number: 2,
        title: 'Indicators and Warning Systems',
        hours: 6,
        topics: [
          'Behavioral indicators of concern',
          'Online radicalization pathways',
          'Leakage and pre-attack indicators',
          'Building indicator matrices',
        ],
        outcomes: [
          'Identify and categorize behavioral warning signs',
          'Recognize online radicalization patterns',
          'Develop customized indicator frameworks for specific contexts',
        ],
      },
      {
        number: 3,
        title: 'Structured Analytical Techniques',
        hours: 8,
        topics: [
          'Analysis of Competing Hypotheses (ACH)',
          'Red team and adversarial thinking',
          'Scenario planning and stress testing',
          'Cognitive bias mitigation',
        ],
        outcomes: [
          'Apply ACH to complex threat scenarios',
          'Conduct red team exercises to challenge assumptions',
          'Identify and mitigate cognitive biases in analysis',
        ],
      },
      {
        number: 4,
        title: 'Organizational and Insider Threats',
        hours: 6,
        topics: [
          'Insider threat typologies',
          'Workplace violence prevention programs',
          'Personnel security and vetting',
          'Case management and intervention strategies',
        ],
        outcomes: [
          'Design insider threat detection programs',
          'Develop workplace violence prevention protocols',
          'Manage threat cases through to resolution',
        ],
      },
      {
        number: 5,
        title: 'Threat Communication and Escalation',
        hours: 10,
        topics: [
          'Threat rating scales and communication standards',
          'Stakeholder briefing techniques',
          'Escalation protocols and decision trees',
          'Documentation and audit trails',
          'Capstone: end-to-end threat assessment exercise',
        ],
        outcomes: [
          'Communicate threat levels clearly to decision-makers',
          'Implement structured escalation procedures',
          'Maintain defensible documentation throughout the process',
        ],
      },
    ],
  },
  {
    id: 'geospatial-intelligence',
    title: 'Geospatial Intelligence',
    subtitle: 'GEOINT Collection, Analysis & Visualization',
    totalHours: 45,
    level: 'Intermediate to Advanced',
    color: 'green',
    description:
      'Harness satellite imagery, mapping tools, and location data to derive intelligence from the physical world.',
    modules: [
      {
        number: 1,
        title: 'Geospatial Intelligence Fundamentals',
        hours: 5,
        topics: [
          'GEOINT discipline overview and history',
          'Coordinate systems and map projections',
          'Remote sensing principles',
          'Imagery classification and resolution types',
        ],
        outcomes: [
          'Explain the role of GEOINT in the intelligence community',
          'Work confidently with coordinate systems and projections',
          'Distinguish between imagery types and their applications',
        ],
      },
      {
        number: 2,
        title: 'Satellite Imagery Analysis',
        hours: 10,
        topics: [
          'Commercial satellite imagery sources',
          'Change detection methodologies',
          'Object identification and measurement',
          'Shadow analysis and height estimation',
          'Multispectral and SAR imagery basics',
        ],
        outcomes: [
          'Source and access commercial satellite imagery',
          'Conduct change detection analysis over time',
          'Measure and identify objects from imagery',
        ],
      },
      {
        number: 3,
        title: 'Open Source Geospatial Tools',
        hours: 10,
        topics: [
          'Google Earth Pro advanced techniques',
          'Sentinel Hub and Copernicus data',
          'QGIS for intelligence analysis',
          'OpenStreetMap and crowd-sourced mapping',
          'Planet Labs and commercial platforms',
        ],
        outcomes: [
          'Use Google Earth Pro for professional analysis',
          'Access and process free satellite data sources',
          'Perform basic GIS analysis in QGIS',
        ],
      },
      {
        number: 4,
        title: 'Geolocation and Verification',
        hours: 8,
        topics: [
          'Photo and video geolocation techniques',
          'Sun position and shadow analysis',
          'Terrain and landmark matching',
          'Chronolocation methods',
          'Verification workflows for conflict zones',
        ],
        outcomes: [
          'Geolocate images and videos to specific coordinates',
          'Verify the time and date of visual media',
          'Apply geolocation to conflict documentation',
        ],
      },
      {
        number: 5,
        title: 'Movement and Pattern of Life Analysis',
        hours: 7,
        topics: [
          'AIS and vessel tracking',
          'ADS-B and aircraft monitoring',
          'Ground vehicle tracking methods',
          'Pattern of life analysis frameworks',
        ],
        outcomes: [
          'Track maritime and aviation assets using open data',
          'Develop pattern of life assessments from movement data',
          'Identify anomalies in movement patterns',
        ],
      },
      {
        number: 6,
        title: 'Geospatial Reporting and Visualization',
        hours: 5,
        topics: [
          'Map design for intelligence products',
          'Annotating imagery for reports',
          'Interactive map creation',
          'Capstone: full GEOINT assessment',
        ],
        outcomes: [
          'Produce publication-quality intelligence maps',
          'Create interactive geospatial products',
          'Deliver a complete GEOINT assessment from collection to report',
        ],
      },
    ],
  },
  {
    id: 'financial-intelligence',
    title: 'Financial Intelligence',
    subtitle: 'FININT, AML & Illicit Finance Investigation',
    totalHours: 38,
    level: 'Intermediate to Advanced',
    color: 'yellow',
    description:
      'Trace illicit financial flows, understand money laundering typologies, and investigate complex corporate structures to follow the money.',
    modules: [
      {
        number: 1,
        title: 'Financial Intelligence Foundations',
        hours: 5,
        topics: [
          'FININT in the intelligence and law enforcement context',
          'Global AML/CFT regulatory frameworks',
          'Financial system architecture overview',
          'Key financial databases and registries',
        ],
        outcomes: [
          'Explain the role of financial intelligence in investigations',
          'Navigate major AML regulatory frameworks',
          'Identify and access key financial data sources',
        ],
      },
      {
        number: 2,
        title: 'Money Laundering Typologies',
        hours: 7,
        topics: [
          'Placement, layering, and integration stages',
          'Trade-based money laundering (TBML)',
          'Real estate and luxury goods laundering',
          'Shell company and nominee structures',
          'Hawala and informal value transfer systems',
        ],
        outcomes: [
          'Recognize common money laundering typologies',
          'Identify red flags in trade and real estate transactions',
          'Map shell company structures used for concealment',
        ],
      },
      {
        number: 3,
        title: 'Corporate Structure Investigation',
        hours: 8,
        topics: [
          'Beneficial ownership research',
          'Company registry investigation techniques',
          'Offshore jurisdiction analysis',
          'Sanctions screening and PEP identification',
          'Tools: OpenCorporates, ICIJ databases, Orbis',
        ],
        outcomes: [
          'Trace beneficial ownership through complex structures',
          'Use major corporate databases for investigation',
          'Identify politically exposed persons and sanctions exposure',
        ],
      },
      {
        number: 4,
        title: 'Cryptocurrency and Digital Asset Investigation',
        hours: 8,
        topics: [
          'Blockchain fundamentals for investigators',
          'Cryptocurrency tracing methodologies',
          'Mixer and tumbler detection',
          'DeFi and NFT-based laundering',
          'Tools: Chainalysis, Elliptic, free blockchain explorers',
        ],
        outcomes: [
          'Trace cryptocurrency transactions across blockchains',
          'Identify obfuscation techniques used by bad actors',
          'Produce cryptocurrency investigation reports',
        ],
      },
      {
        number: 5,
        title: 'Financial Investigation Reporting',
        hours: 10,
        topics: [
          'Suspicious activity report (SAR) writing',
          'Financial intelligence products for decision-makers',
          'Evidence standards and chain of custody',
          'Coordination with law enforcement and regulators',
          'Capstone: end-to-end financial investigation',
        ],
        outcomes: [
          'Write compliant and effective SARs',
          'Produce financial intelligence products for varied audiences',
          'Manage evidence to meet legal standards',
        ],
      },
    ],
  },
]

const colorMap: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-800',
    dot: 'bg-red-500',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-800',
    dot: 'bg-green-500',
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800',
    dot: 'bg-yellow-500',
  },
}

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <Link
              href="/about"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              ← Back to About
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Curriculum</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Detailed module breakdowns, learning outcomes, and time commitments for every course.
            Know exactly what you will learn before you enroll.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course) => (
              <a
                key={course.id}
                href={`#${course.id}`}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-colors"
              >
                <div className="text-sm font-medium text-gray-300">{course.title}</div>
                <div className="text-xs text-gray-500 mt-1">{course.totalHours}h total</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {courses.map((course) => {
          const colors = colorMap[course.color]
          return (
            <section key={course.id} id={course.id}>
              {/* Course Header */}
              <div className={`rounded-2xl ${colors.bg} border ${colors.border} p-8 mb-8`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
                    <p className="text-lg text-gray-600 mt-1">{course.subtitle}</p>
                    <p className="text-gray-700 mt-3 max-w-2xl">{course.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <span className={`px-3 py-1 rounded-full font-medium ${colors.badge}`}>
                      {course.totalHours} hours total
                    </span>
                    <span className={`px-3 py-1 rounded-full font-medium ${colors.badge}`}>
                      {course.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full font-medium ${colors.badge}`}>
                      {course.modules.length} modules
                    </span>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="space-y-6">
                {course.modules.map((module) => (
                  <div
                    key={module.number}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    {/* Module Header */}
                    <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full ${colors.dot} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}
                        >
                          {module.number}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                      </div>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                        {module.hours}h
                      </span>
                    </div>

                    {/* Module Body */}
                    <div className="px-6 py-5 grid md:grid-cols-2 gap-6">
                      {/* Topics */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Topics Covered
                        </h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learning Outcomes */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Learning Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {module.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg
                                className={`mt-0.5 w-4 h-4 flex-shrink-0 text-${course.color}-500`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Summary */}
              <div className="mt-6 flex flex-wrap gap-3">
                {course.modules.map((module) => (
                  <div
                    key={module.number}
                    className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-sm"
                  >
                    <span className="text-gray-500">Module {module.number}:</span>
                    <span className="font-medium text-gray-800">{module.hours}h</span>
                  </div>
                ))}
                <div
                  className={`flex items-center gap-2 ${colors.bg} border ${colors.border} rounded-lg px-3 py-2 text-sm`}
                >
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold text-gray-900">{course.totalHours}h</span>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-300 mb-8">
            All courses are available individually or as part of a bundled programme. Contact us to
            discuss enrolment options, group rates, or bespoke training for your organisation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enquire Now
            </Link>
            <Link
              href="/about"
              className="border border-gray-600 text-white font-semibold px-8 py-3 rounded-lg hover:border-gray-400 transition-colors"
            >
              About SOCI
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
