import { Metadata } from 'next';
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  FieldExercise,
  ProTip,
  JokeAside,
  Debrief,
  NextLessonLink,
} from '@/components/micro-lesson';
import { LessonContainer } from '@/components/lesson-container';
import { Search, Globe, FileText, Image, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'OSINT Techniques & Methodology | Intel Analyst Academy',
  description: 'Master open source intelligence techniques including search engine operators, social media intelligence, public records research, and verification methods.',
  keywords: ['OSINT', 'open source intelligence', 'Google dorking', 'SOCMINT', 'public records', 'intelligence gathering'],
};

export default function OSINTTechniquesPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="OSINT Techniques & Methodology"
        subtitle="Mastering the art of finding what's hiding in plain sight"
        humorSubtitle="Professional stalking with better coffee and a badge. (The badge is metaphorical.)"
        readTime={15}
        difficulty="Beginner"
        category="OSINT"
        mascot="osint"
        mascotMessage="Listen up, recruit. Everything you need is already out there — published, posted, or accidentally left in a public S3 bucket. Your job is knowing where to look."
      >
        <MissionBriefing
          humorText="By the end of this, you'll never look at a LinkedIn profile the same way again."
        >
          You'll learn core OSINT techniques including search engine operators, social media intelligence, public records research, and how to verify what you find. These skills form the foundation of modern intelligence gathering.
        </MissionBriefing>

        {/* What is OSINT */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">What is OSINT?</h2>
          <p className="text-slate-300 mb-4">
            Open Source Intelligence (OSINT) is intelligence derived from openly available sources. That includes news articles, social media, government databases, corporate filings, academic papers, blogs, forums, podcasts, YouTube videos, and literally anything else you can access without breaking in or hacking.
          </p>
          <p className="text-slate-300 mb-4">
            Here's the kicker: 80-90% of intelligence typically comes from open sources. You don't need classified access to be a valuable intelligence analyst. You need to know where to look and how to verify what you find.
          </p>
          <p className="text-slate-300 mb-6">
            OSINT is legal when conducted properly, ethical, and incredibly powerful. It's the foundation of modern intelligence analysis.
          </p>
          <JokeAside>
            OSINT analysts are basically professional Googlers. But don't let the simplicity fool you — there's a reason "Google it" isn't an intelligence methodology.
          </JokeAside>
        </section>

        {/* Core Techniques */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Core OSINT Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Search Engine Operators */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Search className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Search Engine Operators</h3>
                  <p className="text-slate-300 text-sm mt-2">
                    Advanced search syntax to refine and target your queries. Google dorking, Bing, specialized search engines.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Intelligence */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Social Media Intelligence</h3>
                  <p className="text-slate-300 text-sm mt-2">
                    Mining profiles, metadata, connections, and behavior patterns across LinkedIn, Twitter, Facebook, Instagram, and niche platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Public Records */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Public Records</h3>
                  <p className="text-slate-300 text-sm mt-2">
                    Government databases, court records, corporate filings, property records, business licenses, and regulatory documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Website Analysis */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Website Analysis</h3>
                  <p className="text-slate-300 text-sm mt-2">
                    WHOIS lookups, DNS records, archive.org snapshots, technology stack identification, and historical site changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Image & Video Analysis */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:col-span-2">
              <div className="flex items-start gap-3 mb-3">
                <Image className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Image & Video Analysis</h3>
                  <p className="text-slate-300 text-sm mt-2">
                    Reverse image search, EXIF metadata extraction, geolocation analysis, facial recognition tools, and video analysis techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Dorking */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Google Dorking Basics</h3>
          <p className="text-slate-300 mb-6">
            Google dorking uses advanced search operators to refine results with surgical precision. Here are the most useful ones:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-cyan-400 font-mono font-semibold mb-2">site: domain.com</p>
              <p className="text-slate-300 text-sm">Limit results to a specific domain. Example: site:tesla.com earnings</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-cyan-400 font-mono font-semibold mb-2">filetype: pdf</p>
              <p className="text-slate-300 text-sm">Find specific file types. Example: Company X filetype:pdf quarterly</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-cyan-400 font-mono font-semibold mb-2">intitle: "title text"</p>
              <p className="text-slate-300 text-sm">Search for specific text in page titles. Example: intitle:confidential internal</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-cyan-400 font-mono font-semibold mb-2">inurl: path/to/page</p>
              <p className="text-slate-300 text-sm">Search for text in URLs. Example: inurl:admin login</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-cyan-400 font-mono font-semibold mb-2">"exact phrase"</p>
              <p className="text-slate-300 text-sm">Search for exact phrases. Example: "security vulnerability" "discovered"</p>
            </div>
          </div>

          <ProTip>
            Start broad, then narrow. "Company X" → "Company X filetype:pdf" → "Company X filetype:pdf confidential". Each step refines your results and helps you find exactly what you're looking for.
          </ProTip>

          <JokeAside>
            Google dorking sounds illegal. It isn't. It's just using search operators that Google themselves documented. You're literally reading the manual.
          </JokeAside>
        </section>

        {/* The OSINT Workflow */}
        <section className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">The OSINT Workflow</h3>
          <p className="text-slate-300 mb-6">
            Just like the intelligence cycle, OSINT has its own process. Good OSINT work is systematic and documentable:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-semibold">1</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Plan</h4>
                <p className="text-slate-300">Define your objectives, identify what information you need, determine key search terms and sources.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-semibold">2</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Collect</h4>
                <p className="text-slate-300">Execute your searches across multiple sources. Document every source and search query you use.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-semibold">3</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Process</h4>
                <p className="text-slate-300">Organize findings by source type, timeline, and relevance. Flag gaps and contradictions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-semibold">4</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Analyse</h4>
                <p className="text-slate-300">Evaluate reliability, identify patterns, connect dots, assess confidence levels, develop assessments.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-semibold">5</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Report</h4>
                <p className="text-slate-300">Present findings with sources, methodology, confidence levels, and recommendations for further collection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Ethics and Legal Boundaries */}
        <DeepDive title="OSINT Ethics & Legal Boundaries">
          <p className="text-slate-300 mb-4">
            Just because you CAN find something doesn't mean you CAN USE it or SHOULD. OSINT operates in a gray area, and understanding the boundaries is critical.
          </p>

          <h4 className="text-white font-semibold mb-3 mt-6">What You CAN Do:</h4>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Collect publicly available information</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Use information that's been shared on public websites or social media</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Access government databases, court records, and public registries</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Use archive.org to review historical versions of websites</span>
            </li>
          </ul>

          <h4 className="text-white font-semibold mb-3">What You CANNOT Do:</h4>
          <ul className="text-slate-300 space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Hack into systems or access unauthorized databases</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Violate website terms of service or robots.txt directives</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Harass, stalk, or threaten individuals</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Access private information (private social media accounts, passwords, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Misrepresent yourself to gain access to information</span>
            </li>
          </ul>

          <h4 className="text-white font-semibold mb-3">The Gray Areas:</h4>
          <p className="text-slate-300 mb-4">
            Some activities exist in legal gray zones depending on jurisdiction, organization policy, and context:
          </p>
          <ul className="text-slate-300 space-y-2">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>Scraping websites (check terms of service and legal jurisdiction)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>Using information from deleted social media posts (if you have screenshots)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>Following individuals on social media to monitor their activity</span>
            </li>
          </ul>
          <p className="text-slate-300 mt-6">
            When in doubt, ask your organization's legal or compliance team. Reputation is everything in intelligence work.
          </p>
        </DeepDive>

        {/* Field Exercise */}
        <FieldExercise title="Quick OSINT Challenge">
          <p className="text-slate-300 mb-6">
            Using only publicly available information and a search engine, find 3 pieces of verifiable information about any public company (not a person).
          </p>
          <p className="text-slate-300 mb-6">
            Document your sources and the search queries you used to find them. For example:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
            <p className="text-cyan-400 font-semibold mb-3">Example Setup:</p>
            <p className="text-slate-300 text-sm mb-3">
              <span className="text-white font-semibold">Company:</span> Apple Inc.
            </p>
            <p className="text-slate-300 text-sm mb-3">
              <span className="text-white font-semibold">Information 1:</span> Latest quarterly revenue
            </p>
            <p className="text-slate-300 text-sm mb-3">
              <span className="text-white font-semibold">Source:</span> SEC filings (10-Q)
            </p>
            <p className="text-slate-300 text-sm">
              <span className="text-white font-semibold">Search Query:</span> site:sec.gov Apple 10-Q 2024
            </p>
          </div>

          <DeepDive title="Example Methodology">
            <p className="text-slate-300 mb-4">
              When researching a public company, a structured approach yields better results:
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Step 1 - Define what you're looking for:</span> Revenue, executive team, strategic goals, recent news, competitive positioning, market share.
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Step 2 - Identify sources by reliability:</span> SEC filings (highest reliability), company website, analyst reports (medium reliability), news articles, social media (lower reliability, but useful for trends).
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Step 3 - Use search operators:</span> site:sec.gov for filings, site:investors.[company].com for investor relations, filetype:pdf for whitepapers and reports.
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">Step 4 - Cross-reference:</span> Find the same information from multiple sources. If three independent sources say the same thing, confidence is higher.
            </p>
            <p className="text-slate-300">
              <span className="text-cyan-400 font-semibold">Step 5 - Document everything:</span> Write down where you found it, when you found it, and how reliable you think the source is.
            </p>
          </DeepDive>
        </FieldExercise>

        {/* Debrief */}
        <Debrief
          takeaways={[
            'OSINT is intelligence from open sources — 80-90% of what matters is already public.',
            'Systematic search and verification matter more than raw access. Know where to look and how to verify.',
            'Search operators, social media, public records, and website analysis are your primary tools.',
            'Legal boundaries are real. Understand what you can and cannot do in your jurisdiction and organization.',
            'Documentation and source attribution are non-negotiable. You need to be able to explain where everything came from.',
          ]}
          humorSummary="Google is your friend. But verify everything, respect boundaries, and remember — just because you CAN find it doesn't mean you SHOULD share it."
        />

        {/* Next Lesson */}
        <NextLessonLink
          href="/topics/google-dorking"
          title="Google Dorking: Advanced Search"
          description="Master advanced search operators for precision intelligence gathering and uncover hidden information using Google's own search syntax."
        />
      </MicroLesson>
    </LessonContainer>
  );
}
