import Link from 'next/link';

const courses = [
  {
    id: 'osint',
    title: 'Open Source Intelligence (OSINT)',
    level: 'Beginner to Intermediate',
    duration: '8 weeks',
    prerequisites: ['Basic computer literacy', 'Familiarity with web browsers', 'No prior intelligence experience required'],
    description: 'Master the art of gathering, analyzing, and synthesizing publicly available information to produce actionable intelligence. This course covers the full OSINT lifecycle from collection planning through finished intelligence products.',
    outcomes: [
      'Conduct systematic open source collection across digital and physical sources',
      'Apply structured analytic techniques to raw OSINT data',
      'Build and maintain source reliability assessments',
      'Produce professional intelligence reports from open source material',
      'Navigate legal and ethical boundaries in open source collection',
      'Use advanced search operators and specialized OSINT tools',
    ],
    modules: [
      {
        number: 1,
        title: 'Foundations of OSINT',
        duration: '1 week',
        topics: ['Intelligence cycle overview', 'OSINT vs. other collection disciplines', 'Legal and ethical frameworks', 'Collection planning basics'],
      },
      {
        number: 2,
        title: 'Digital Footprint Analysis',
        duration: '1 week',
        topics: ['Social media intelligence (SOCMINT)', 'Username and account enumeration', 'Metadata extraction', 'Reverse image search techniques'],
      },
      {
        number: 3,
        title: 'Advanced Search Techniques',
        duration: '1 week',
        topics: ['Google dorking and advanced operators', 'Deep web vs. dark web', 'Cached and archived content', 'Boolean search logic'],
      },
      {
        number: 4,
        title: 'Network and Infrastructure Analysis',
        duration: '1 week',
        topics: ['WHOIS and DNS analysis', 'IP geolocation', 'Certificate transparency logs', 'Passive network reconnaissance'],
      },
      {
        number: 5,
        title: 'Human and Organizational Intelligence',
        duration: '1 week',
        topics: ['Corporate registry research', 'Professional network analysis', 'Public records and court documents', 'Organizational mapping'],
      },
      {
        number: 6,
        title: 'Geospatial OSINT',
        duration: '1 week',
        topics: ['Satellite imagery sources', 'Geolocation from photos', 'Mapping tools for analysts', 'Location verification techniques'],
      },
      {
        number: 7,
        title: 'Analysis and Synthesis',
        duration: '1 week',
        topics: ['Link analysis and visualization', 'Timeline construction', 'Confidence and source grading', 'Analytic line development'],
      },
      {
        number: 8,
        title: 'Capstone: Full OSINT Investigation',
        duration: '1 week',
        topics: ['End-to-end collection exercise', 'Finished intelligence product', 'Peer review and critique', 'Professional presentation'],
      },
    ],
    instructor: {
      name: 'Marcus Webb',
      title: 'Senior Intelligence Analyst',
      background: 'Former signals intelligence analyst with 12 years of government service. Transitioned to private sector intelligence consulting, specializing in corporate due diligence and threat actor profiling. Certified OSINT practitioner and regular speaker at intelligence community conferences.',
      expertise: ['Digital forensics', 'Threat actor attribution', 'Corporate intelligence', 'Training and curriculum development'],
    },
  },
  {
    id: 'threat-assessment',
    title: 'Threat Assessment & Risk Analysis',
    level: 'Intermediate',
    duration: '10 weeks',
    prerequisites: ['Basic understanding of security concepts', 'Analytical writing experience', 'Recommended: completion of OSINT fundamentals or equivalent'],
    description: 'Develop systematic frameworks for identifying, evaluating, and communicating threats across physical, cyber, and hybrid domains. Learn to produce threat assessments that drive organizational decision-making and resource allocation.',
    outcomes: [
      'Apply structured threat assessment methodologies to real-world scenarios',
      'Distinguish between threat, vulnerability, and risk in complex environments',
      'Produce written threat assessments meeting professional standards',
      'Brief senior stakeholders on threat findings and recommendations',
      'Integrate multiple intelligence disciplines into unified threat pictures',
      'Develop and maintain threat monitoring programs',
    ],
    modules: [
      {
        number: 1,
        title: 'Threat Assessment Fundamentals',
        duration: '1 week',
        topics: ['Threat vs. risk vs. vulnerability', 'Assessment methodologies overview', 'Stakeholder requirements analysis', 'Intelligence-driven security'],
      },
      {
        number: 2,
        title: 'Threat Actor Profiling',
        duration: '1.5 weeks',
        topics: ['Actor typology and motivation', 'Capability and intent assessment', 'Historical pattern analysis', 'Behavioral indicators'],
      },
      {
        number: 3,
        title: 'Physical Threat Assessment',
        duration: '1.5 weeks',
        topics: ['Venue and facility risk', 'Personnel security threats', 'Surveillance detection', 'Attack methodology analysis'],
      },
      {
        number: 4,
        title: 'Cyber Threat Assessment',
        duration: '1.5 weeks',
        topics: ['Threat landscape mapping', 'TTPs and MITRE ATT&CK', 'Sector-specific threats', 'Cyber-physical convergence'],
      },
      {
        number: 5,
        title: 'Geopolitical Risk Integration',
        duration: '1 week',
        topics: ['Country and regional risk', 'Political violence indicators', 'Sanctions and regulatory risk', 'Travel security assessment'],
      },
      {
        number: 6,
        title: 'Structured Analytic Techniques',
        duration: '1 week',
        topics: ['Analysis of competing hypotheses', 'Red team thinking', 'Key assumptions check', 'Scenario development'],
      },
      {
        number: 7,
        title: 'Writing and Communicating Assessments',
        duration: '1 week',
        topics: ['Assessment formats and standards', 'Confidence language', 'Executive briefing skills', 'Visual communication of risk'],
      },
      {
        number: 8,
        title: 'Threat Monitoring Programs',
        duration: '1 week',
        topics: ['Indicator development', 'Early warning systems', 'Collection requirements management', 'Continuous assessment cycles'],
      },
      {
        number: 9,
        title: 'Case Studies in Threat Assessment',
        duration: '0.5 weeks',
        topics: ['Corporate security cases', 'Government threat assessments', 'Lessons learned analysis', 'Failure mode review'],
      },
      {
        number: 10,
        title: 'Capstone: Comprehensive Threat Assessment',
        duration: '1 week',
        topics: ['Full assessment exercise', 'Stakeholder briefing simulation', 'Written product submission', 'Instructor and peer feedback'],
      },
    ],
    instructor: {
      name: 'Dr. Priya Nair',
      title: 'Threat Intelligence Director',
      background: 'PhD in Security Studies from Georgetown University. Spent eight years as a threat analyst for a major financial institution before founding a boutique risk consultancy. Advises Fortune 500 companies and government agencies on threat assessment program development.',
      expertise: ['Corporate threat programs', 'Geopolitical risk', 'Insider threat', 'Executive protection intelligence'],
    },
  },
  {
    id: 'geospatial',
    title: 'Geospatial Intelligence (GEOINT)',
    level: 'Intermediate to Advanced',
    duration: '9 weeks',
    prerequisites: ['Basic GIS familiarity helpful but not required', 'Completion of OSINT fundamentals recommended', 'Comfort with technical tools and software'],
    description: 'Learn to exploit imagery, mapping data, and location intelligence to answer analytical questions. This course bridges traditional GEOINT tradecraft with modern commercial satellite capabilities and open source geospatial tools.',
    outcomes: [
      'Interpret and exploit commercial satellite and aerial imagery',
      'Conduct geolocation and site analysis using open source tools',
      'Integrate geospatial data with other intelligence disciplines',
      'Produce map-based intelligence products for decision-makers',
      'Apply change detection and pattern-of-life analysis',
      'Navigate legal and privacy considerations in geospatial collection',
    ],
    modules: [
      {
        number: 1,
        title: 'GEOINT Foundations',
        duration: '1 week',
        topics: ['History and evolution of GEOINT', 'Imagery types and sensors', 'Commercial satellite landscape', 'GEOINT in the intelligence cycle'],
      },
      {
        number: 2,
        title: 'Imagery Interpretation Basics',
        duration: '1 week',
        topics: ['Photointerpretation fundamentals', 'Scale, resolution, and perspective', 'Feature identification', 'Imagery annotation standards'],
      },
      {
        number: 3,
        title: 'Open Source Geospatial Tools',
        duration: '1 week',
        topics: ['Google Earth Pro advanced features', 'Sentinel Hub and Copernicus', 'Planet Labs and commercial providers', 'QGIS for analysts'],
      },
      {
        number: 4,
        title: 'Geolocation Techniques',
        duration: '1.5 weeks',
        topics: ['Photo geolocation methodology', 'Shadow and sun angle analysis', 'Landmark and terrain matching', 'Video geolocation'],
      },
      {
        number: 5,
        title: 'Change Detection and Monitoring',
        duration: '1 week',
        topics: ['Temporal imagery comparison', 'Infrastructure monitoring', 'Military and industrial activity', 'Environmental change analysis'],
      },
      {
        number: 6,
        title: 'Pattern of Life Analysis',
        duration: '1 week',
        topics: ['Movement and activity patterns', 'AIS and flight tracking', 'Crowd and event analysis', 'Anomaly detection'],
      },
      {
        number: 7,
        title: 'Geospatial Intelligence Products',
        duration: '1 week',
        topics: ['Map product design', 'Annotated imagery reports', 'Geospatial databases', 'Briefing with maps and imagery'],
      },
      {
        number: 8,
        title: 'Advanced Applications',
        duration: '0.5 weeks',
        topics: ['3D modeling and terrain analysis', 'Multispectral imagery', 'SAR imagery basics', 'AI-assisted image analysis'],
      },
      {
        number: 9,
        title: 'Capstone: GEOINT Investigation',
        duration: '1 week',
        topics: ['Full geospatial investigation', 'Multi-source integration', 'Finished product development', 'Presentation and critique'],
      },
    ],
    instructor: {
      name: 'James Okafor',
      title: 'Geospatial Intelligence Specialist',
      background: 'Fifteen years of imagery analysis experience spanning military, government, and commercial sectors. Contributed to major open source investigations for international NGOs and journalism organizations. Certified GIS Professional (GISP) and instructor for multiple intelligence community training programs.',
      expertise: ['Satellite imagery analysis', 'Open source geolocation', 'Conflict zone monitoring', 'Commercial GEOINT applications'],
    },
  },
  {
    id: 'financial-intelligence',
    title: 'Financial Intelligence (FININT)',
    level: 'Intermediate to Advanced',
    duration: '10 weeks',
    prerequisites: ['Basic understanding of financial concepts', 'Familiarity with corporate structures helpful', 'Recommended: completion of OSINT fundamentals'],
    description: 'Develop expertise in following money flows, identifying financial networks, and producing financial intelligence that supports investigations, due diligence, and sanctions compliance. Covers both open source financial research and analytical frameworks used by government and private sector practitioners.',
    outcomes: [
      'Trace financial flows through corporate and banking structures',
      'Identify beneficial ownership and shell company networks',
      'Conduct open source financial research using public records',
      'Apply anti-money laundering (AML) analytical frameworks',
      'Produce financial intelligence products for legal and compliance use',
      'Understand sanctions regimes and their intelligence implications',
    ],
    modules: [
      {
        number: 1,
        title: 'Financial Intelligence Foundations',
        duration: '1 week',
        topics: ['FININT in the intelligence community', 'Financial crime typologies', 'Regulatory and legal framework', 'Key data sources overview'],
      },
      {
        number: 2,
        title: 'Corporate Structure Analysis',
        duration: '1.5 weeks',
        topics: ['Corporate registry research', 'Shell companies and nominees', 'Beneficial ownership identification', 'Cross-border corporate structures'],
      },
      {
        number: 3,
        title: 'Open Source Financial Research',
        duration: '1.5 weeks',
        topics: ['SEC and regulatory filings', 'Court records and litigation', 'Property and asset records', 'Bankruptcy and insolvency filings'],
      },
      {
        number: 4,
        title: 'Banking and Payment Systems',
        duration: '1 week',
        topics: ['Correspondent banking networks', 'SWIFT and wire transfer analysis', 'Trade-based money laundering', 'Cryptocurrency basics for analysts'],
      },
      {
        number: 5,
        title: 'Cryptocurrency and Digital Assets',
        duration: '1 week',
        topics: ['Blockchain analysis fundamentals', 'Tracing crypto transactions', 'Mixing and obfuscation techniques', 'Exchange and wallet identification'],
      },
      {
        number: 6,
        title: 'Sanctions and Designations',
        duration: '1 week',
        topics: ['OFAC and international sanctions regimes', 'Sanctions evasion typologies', 'Screening and compliance tools', 'Sanctions intelligence products'],
      },
      {
        number: 7,
        title: 'Due Diligence and KYC',
        duration: '1 week',
        topics: ['Enhanced due diligence frameworks', 'Politically exposed persons (PEPs)', 'Adverse media research', 'Risk rating methodologies'],
      },
      {
        number: 8,
        title: 'Network Analysis for FININT',
        duration: '1 week',
        topics: ['Financial network visualization', 'Link analysis tools', 'Identifying key nodes and facilitators', 'Pattern recognition in financial data'],
      },
      {
        number: 9,
        title: 'FININT Products and Reporting',
        duration: '0.5 weeks',
        topics: ['Suspicious activity report (SAR) analysis', 'Financial intelligence briefs', 'Legal and evidentiary standards', 'Communicating financial complexity'],
      },
      {
        number: 10,
        title: 'Capstone: Financial Investigation',
        duration: '1 week',
        topics: ['End-to-end financial investigation', 'Multi-source research integration', 'Finished intelligence product', 'Peer review and instructor feedback'],
      },
    ],
    instructor: {
      name: 'Sofia Marchetti',
      title: 'Financial Intelligence Analyst',
      background: 'Former financial crimes investigator with a major international bank and subsequent work with a government financial intelligence unit. Holds certifications in anti-money laundering (CAMS) and fraud examination (CFE). Consults for law firms, asset recovery specialists, and compliance teams globally.',
      expertise: ['Anti-money laundering', 'Asset tracing', 'Sanctions compliance', 'Cryptocurrency investigations'],
    },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Course Curriculum</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Detailed syllabi, module breakdowns, learning outcomes, and instructor profiles for our core intelligence training programs.
          </p>
        </div>
      </div>

      {/* Course Navigation */}
      <div className="border-b border-gray-800 bg-gray-900 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-1 overflow-x-auto py-3">
            {courses.map((course) => (
              <a
                key={course.id}
                href={`#${course.id}`}
                className="whitespace-nowrap px-4 py-2 rounded text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                {course.title.split('(')[0].trim()}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {courses.map((course) => (
          <section key={course.id} id={course.id} className="scroll-mt-20">
            {/* Course Header */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-semibold rounded-full border border-blue-800">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-semibold rounded-full border border-gray-700">
                  {course.duration}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{course.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">{course.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Learning Outcomes */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-900/50 border border-green-800 rounded flex items-center justify-center text-green-400 text-xs">✓</span>
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {course.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-1 w-5 h-5 rounded-full bg-green-900/40 border border-green-800/60 flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">{i + 1}</span>
                        <span className="text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Module Breakdown */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-5">Module Breakdown</h3>
                  <div className="space-y-3">
                    {course.modules.map((module) => (
                      <details key={module.number} className="group border border-gray-800 rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800/50 transition-colors list-none">
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">
                              {module.number}
                            </span>
                            <span className="font-medium text-gray-200 text-sm">{module.title}</span>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                            <span className="text-xs text-gray-500">{module.duration}</span>
                            <span className="text-gray-500 group-open:rotate-180 transition-transform text-xs">▼</span>
                          </div>
                        </summary>
                        <div className="px-4 pb-4 pt-2 bg-gray-800/30">
                          <ul className="space-y-1.5 ml-10">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0"></span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Prerequisites */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructor Bio */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Instructor</h3>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-3">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="font-semibold text-white">{course.instructor.name}</div>
                    <div className="text-sm text-blue-400">{course.instructor.title}</div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{course.instructor.background}</p>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Areas of Expertise</div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.instructor.expertise.map((area, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-300">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-blue-950/50 border border-blue-900/50 rounded-xl p-6 text-center">
                  <p className="text-sm text-gray-400 mb-4">Ready to start this course?</p>
                  <Link
                    href="/topics"
                    className="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href="/topics"
                    className="block w-full mt-2 py-2.5 px-4 bg-transparent hover:bg-gray-800 text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-colors border border-gray-700"
                  >
                    Browse All Courses
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our learning paths guide you through courses in the right sequence based on your background and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/topics"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
            >
              View Learning Paths
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors border border-gray-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
