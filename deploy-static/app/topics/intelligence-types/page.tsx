import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntelligenceTypes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths">Learning Paths</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learning-paths/foundations">Foundations of Intelligence</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/topics/intelligence-types" isCurrentPage>
              Types of Intelligence
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/learning-paths/foundations" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Foundations of Intelligence
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Types of Intelligence</h1>

        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/intelligence-types-header.png"
            alt="Types of Intelligence"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="lead">
            Intelligence is collected from various sources using different methods - think of it as having multiple
            spies in your entourage, each with their own special talents. These collection disciplines, often referred
            to by their acronyms (because intelligence folks LOVE their alphabet soup), each have unique
            characteristics, strengths, and limitations.
          </p>

          <p>
            Understanding the different types of intelligence is essential for intelligence professionals, as each type
            provides a different perspective. It&apos;s like the parable of the blind men and the elephant - except in this
            case, we&apos;re trying to piece together what the elephant had for breakfast, where it&apos;s going, and whether it
            poses a national security threat.
          </p>
        </div>

        <Tabs defaultValue="humint" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-8">
            <TabsTrigger value="humint">HUMINT</TabsTrigger>
            <TabsTrigger value="osint">OSINT</TabsTrigger>
            <TabsTrigger value="sigint">SIGINT</TabsTrigger>
            <TabsTrigger value="geoint">GEOINT</TabsTrigger>
            <TabsTrigger value="masint">MASINT</TabsTrigger>
            <TabsTrigger value="finint">FININT</TabsTrigger>
            <TabsTrigger value="techint">TECHINT</TabsTrigger>
          </TabsList>

          <TabsContent value="humint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">HUMINT (Human Intelligence)</h2>
                <p className="mb-4">
                  Human Intelligence is information collected from human sources. It&apos;s the oldest form of intelligence
                  gathering - basically professional gossip that predates even your neighborhood busybody. It involves
                  direct interaction with people who have access to relevant information.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Collected through interpersonal contact</li>
                  <li>Can provide insights into intentions and plans</li>
                  <li>Often provides context that other intelligence types cannot</li>
                  <li>Requires significant time and resources to develop sources</li>
                  <li>Subject to deception and human biases</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Interviews and debriefings</li>
                  <li>Source operations and recruitment</li>
                  <li>Elicitation techniques</li>
                  <li>Clandestine meetings</li>
                  <li>Overt collection by diplomats, attachés, etc.</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/humint-illustration.png" alt="HUMINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">National Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Understanding intentions of foreign governments and non-state actors</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Law Enforcement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Developing informants within criminal organizations</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Military</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Gathering information about enemy positions and plans</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Business</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Interviews with industry experts and competitors' employees</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="osint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">OSINT (Open Source Intelligence)</h2>
                <p className="mb-4">
                  Open Source Intelligence is derived from publicly available sources such as media, internet, and
                  academic publications. It&apos;s basically what would happen if your internet stalking skills became a
                  legitimate profession. It has grown significantly in importance with the expansion of digital
                  information.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Legally and ethically accessible to anyone</li>
                  <li>Vast and growing volume of information</li>
                  <li>Often provides context for other intelligence types</li>
                  <li>Relatively low cost compared to other collection methods</li>
                  <li>Requires effective filtering to manage information overload</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Media monitoring (news, TV, radio)</li>
                  <li>Internet research and social media analysis</li>
                  <li>Academic and scientific literature review</li>
                  <li>Public records searches</li>
                  <li>Commercial databases and industry reports</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/osint-illustration.png" alt="OSINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">National Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring foreign media for policy changes and public sentiment</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Law Enforcement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Social media monitoring for criminal activity and threats</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Business</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Competitive intelligence and market research</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Crisis Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Real-time monitoring of disasters and emergencies</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sigint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">SIGINT (Signals Intelligence)</h2>
                <p className="mb-4">
                  Signals Intelligence involves the interception and analysis of communications and electronic signals.
                  It&apos;s like eavesdropping, but with fancier equipment and government approval. It includes both
                  communications intelligence (COMINT) and electronic intelligence (ELINT).
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Often collected without the knowledge of the target</li>
                  <li>Can provide real-time information</li>
                  <li>Requires specialized equipment and expertise</li>
                  <li>Subject to encryption and other countermeasures</li>
                  <li>Often governed by strict legal frameworks</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Communications interception (phone, email, etc.)</li>
                  <li>Radar signal collection</li>
                  <li>Satellite communications monitoring</li>
                  <li>Wireless network interception</li>
                  <li>Telemetry interception</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/sigint-illustration.png" alt="SIGINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Military</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Intercepting enemy communications and radar signals</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Counterterrorism</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring terrorist communications networks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Counterintelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Detecting foreign intelligence activities</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Cybersecurity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring network traffic for intrusions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="geoint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">GEOINT (Geospatial Intelligence)</h2>
                <p className="mb-4">
                  Geospatial Intelligence involves the exploitation and analysis of imagery and geospatial information.
                  It&apos;s essentially professional creeping via satellite - &quot;I can see your house from here&quot; taken to a
                  whole new level. GEOINT helps describe, assess, and visually depict physical features and
                  geographically referenced activities on Earth.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Provides visual representation of physical features and activities</li>
                  <li>Combines imagery, imagery intelligence, and geospatial information</li>
                  <li>Can monitor changes over time</li>
                  <li>Requires specialized analytical skills and tools</li>
                  <li>Limited by weather, time of day, and physical obstructions</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Satellite imagery</li>
                  <li>Aerial photography</li>
                  <li>Unmanned aerial vehicle (UAV) imagery</li>
                  <li>LiDAR and radar imaging</li>
                  <li>Geographic information systems (GIS)</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/geoint-illustration.png" alt="GEOINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Military</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Battlefield mapping and target identification</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Disaster Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Damage assessment and resource allocation</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Environmental</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring deforestation, pollution, and climate change</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Infrastructure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Planning and monitoring critical infrastructure</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="masint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">MASINT (Measurement and Signature Intelligence)</h2>
                <p className="mb-4">
                  Measurement and Signature Intelligence involves scientific and technical analysis of data obtained
                  from sensing instruments. It&apos;s the CSI of intelligence disciplines - all about finding unique
                  signatures and forensic evidence, but with fewer dramatic sunglasses removals.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Highly technical and specialized</li>
                  <li>Can detect and identify unique signatures</li>
                  <li>Often provides information that other intelligence types cannot</li>
                  <li>Requires advanced sensors and analytical capabilities</li>
                  <li>Can be difficult to interpret without technical expertise</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nuclear, chemical, and biological sensors</li>
                  <li>Acoustic and seismic monitoring</li>
                  <li>Infrared and multispectral imaging</li>
                  <li>Radar and radio frequency monitoring</li>
                  <li>Materials analysis</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/masint-illustration.png" alt="MASINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">WMD Detection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Identifying nuclear, chemical, and biological weapons programs</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Military</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Identifying and tracking military equipment by unique signatures</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Border Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Detecting tunnels, vehicles, and personnel movements</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring compliance with treaties and agreements</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="finint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">FININT (Financial Intelligence)</h2>
                <p className="mb-4">
                  Financial Intelligence involves the collection and analysis of information about financial assets,
                  transactions, and relationships to understand the activities of individuals, groups, or organizations.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Focuses on money flows and financial relationships</li>
                  <li>Often reveals connections not visible through other means</li>
                  <li>Can provide insights into intentions and capabilities</li>
                  <li>Requires understanding of financial systems and regulations</li>
                  <li>Often involves large datasets and complex patterns</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bank records and transaction monitoring</li>
                  <li>Suspicious activity reports</li>
                  <li>Tax and financial disclosure documents</li>
                  <li>Property and asset ownership records</li>
                  <li>Corporate and business filings</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/finint-illustration.png" alt="FININT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Counterterrorism</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Tracking terrorist financing networks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Law Enforcement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Investigating money laundering and financial crimes</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Sanctions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Monitoring compliance with economic sanctions</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Corruption</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Identifying illicit enrichment and bribery schemes</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="techint">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">TECHINT (Technical Intelligence)</h2>
                <p className="mb-4">
                  Technical Intelligence involves the collection, processing, analysis, and exploitation of information
                  derived from foreign technical equipment and systems. It provides insight into technological
                  capabilities, limitations, and vulnerabilities.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Focuses on technical and scientific information</li>
                  <li>Requires specialized technical expertise</li>
                  <li>Often involves physical examination of equipment</li>
                  <li>Can provide insights into capabilities and intentions</li>
                  <li>Supports both strategic and tactical decision-making</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Collection Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Exploitation of captured equipment</li>
                  <li>Technical surveillance and monitoring</li>
                  <li>Scientific and technical literature review</li>
                  <li>Analysis of technical specifications and patents</li>
                  <li>Reverse engineering</li>
                </ul>
              </div>
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/techint-illustration.png" alt="TECHINT Illustration" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Military</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Assessing adversary weapons systems and capabilities</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Counterproliferation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Identifying weapons development programs</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Cybersecurity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Understanding malware and attack methodologies</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Industrial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Analyzing competitor products and manufacturing techniques</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Integration of Intelligence Types</h2>
          <div className="prose max-w-none">
            <p>
              While each intelligence type provides valuable information on its own, the most comprehensive
              understanding comes from integrating multiple types. This approach, often called &quot;all-source
              intelligence,&quot; is like the Avengers of intelligence - each type brings its own superpower to the team.
              This allows analysts to:
            </p>
            <ul>
              <li>
                Corroborate information across multiple sources (because trust issues are a professional requirement)
              </li>
              <li>
                Fill gaps in one intelligence type with information from another (intelligence patchwork quilting)
              </li>
              <li>
                Develop a more complete picture of a situation or target (the &quot;big picture&quot; everyone keeps talking
                about)
              </li>
              <li>Reduce the impact of deception or misinformation (because people lie, satellites don't)</li>
              <li>
                Increase confidence in assessments and judgments (from "educated guess" to "educated guess with
                supporting documentation")
              </li>
            </ul>
            <p>
              For example, HUMINT might provide information about intentions, SIGINT might confirm communications
              related to those intentions, GEOINT might show physical preparations, and FININT might reveal financial
              transactions supporting the activity. It&apos;s like catching someone in a lie by checking their story against
              their text messages, security camera footage, and bank statements.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/intelligence-integration-diagram.png"
              alt="Intelligence Integration Diagram"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h3 className="font-semibold mb-2">Key Takeaways</h3>
          <ul className="space-y-1">
            <li>Different intelligence types provide different perspectives and insights</li>
            <li>Each type has unique strengths, limitations, and collection methods</li>
            <li>The most effective intelligence comes from integrating multiple types</li>
            <li>The appropriate intelligence type depends on the specific requirements and context</li>
            <li>
              Understanding these types helps intelligence professionals select the right collection methods and
              analytical approaches
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between">
          <Button asChild variant="outline">
            <Link href="/learning-paths/foundations">Back to Learning Path</Link>
          </Button>
          <Button asChild>
            <Link href="/topics/humint-basics">Next Topic: HUMINT (Human Intelligence) Basics</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
