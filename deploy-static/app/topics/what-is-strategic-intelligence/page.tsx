import { StaticImage } from "@/components/static-image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function StrategicIntelligencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics">Topics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/what-is-strategic-intelligence" isCurrentPage>
              What is Strategic Intelligence?
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src="/strategic-intelligence-default.jpg"
            alt="Strategic Intelligence Header"
            
            className="object-cover"
            
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">What is Strategic Intelligence?</h1>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Strategic intelligence is a specialized form of intelligence focused on providing insights and analysis to
          support long-term planning and high-level decision making. Unlike tactical intelligence, which addresses
          immediate operational needs, strategic intelligence takes a broader view, examining trends, patterns, and
          developments that may impact an organization or nation over months or years.
        </p>

        <h2>Core Characteristics of Strategic Intelligence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h3>Long-Term Focus</h3>
            <p>
              Strategic intelligence typically looks months, years, or even decades into the future. It helps leaders
              anticipate changes in the operational environment rather than reacting to immediate events.
            </p>

            <h3>Big Picture Perspective</h3>
            <p>
              Rather than focusing on specific incidents or individuals, strategic intelligence examines broader trends,
              patterns, and relationships between different factors and actors.
            </p>

            <h3>Support for Policy and Strategy</h3>
            <p>
              The primary purpose of strategic intelligence is to inform the development of policies, strategies, and
              long-term plans at the highest levels of an organization or government.
            </p>
          </div>
          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
            <StaticImage
              src="/strategic-intelligence-default.jpg"
              alt="Strategic Intelligence Concept"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <h2>The PESTLE Framework in Strategic Intelligence</h2>
        <p>
          Strategic intelligence analysts often use the PESTLE framework to ensure comprehensive coverage of all
          relevant factors that might impact an organization or nation's future. PESTLE stands for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage
                src="/political-intelligence.png"
                alt="Political Intelligence"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">Political</h3>
            <p>
              Government stability, policy changes, regulatory developments, political movements, and geopolitical
              relationships.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage src="/economic-intelligence.png" alt="Economic Intelligence" fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Economic</h3>
            <p>
              Economic growth trends, market developments, financial stability, trade patterns, and resource
              availability.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage src="/social-intelligence.png" alt="Social Intelligence" fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Social</h3>
            <p>
              Demographic trends, cultural shifts, social movements, public opinion, and changes in societal values or
              behaviors.
            </p>
          </div>
        </div>

        <h2>Strategic Intelligence in Different Sectors</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="border p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage
                src="/government-strategic-intelligence.png"
                alt="Government Strategic Intelligence"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">Government</h3>
            <p>
              National security planning, foreign policy development, defense strategy, and long-term threat assessment.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage
                src="/law-enforcement-strategic-intelligence.png"
                alt="Law Enforcement Strategic Intelligence"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">Law Enforcement</h3>
            <p>
              Emerging crime trends, resource allocation planning, prevention strategies, and cross-jurisdictional
              threat assessment.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <div className="h-40 relative mb-4 rounded overflow-hidden">
              <StaticImage
                src="/private-sector-strategic-intelligence.png"
                alt="Private Sector Strategic Intelligence"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">Private Sector</h3>
            <p>
              Competitive intelligence, market forecasting, geopolitical risk assessment, and long-term business
              planning.
            </p>
          </div>
        </div>

        <h2>Strategic vs. Tactical Intelligence: Key Differences</h2>

        <div className="relative h-64 w-full my-8 rounded-lg overflow-hidden">
          <StaticImage
            src="/strategic-intelligence-comparison.png"
            alt="Strategic vs Tactical Intelligence Comparison"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <table className="w-full border-collapse my-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Characteristic</th>
              <th className="border p-2 text-left">Strategic Intelligence</th>
              <th className="border p-2 text-left">Tactical Intelligence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Time Horizon</td>
              <td className="border p-2">Months to years</td>
              <td className="border p-2">Hours to weeks</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Focus</td>
              <td className="border p-2">Broad trends and patterns</td>
              <td className="border p-2">Specific incidents or targets</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Primary Users</td>
              <td className="border p-2">Senior leadership and policymakers</td>
              <td className="border p-2">Operational personnel and field units</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Purpose</td>
              <td className="border p-2">Inform policy and strategy development</td>
              <td className="border p-2">Support immediate operations and actions</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Level of Detail</td>
              <td className="border p-2">Higher-level, more abstract</td>
              <td className="border p-2">Detailed and specific</td>
            </tr>
          </tbody>
        </table>

        <h2>Conclusion</h2>
        <p>
          Strategic intelligence plays a vital role in helping organizations and governments navigate an increasingly
          complex and rapidly changing world. By providing insights into long-term trends and developments, strategic
          intelligence enables leaders to make more informed decisions about the future direction of their
          organizations, allocate resources more effectively, and develop robust strategies to address emerging
          challenges and opportunities.
        </p>
      </div>
    </div>
  )
}
