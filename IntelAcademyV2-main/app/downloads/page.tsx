import {
  AlertTriangle,
  BarChart2,
  BookOpen,
  CheckSquare,
  Clock,
  Database,
  DollarSign,
  Download,
  FileText,
  Globe,
  HardDrive,
  MapPin,
  Network,
  Presentation,
  Shield,
  Table,
  User,
} from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Downloads() {
  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Downloads & Templates</h1>
          <p className="text-muted-foreground mt-2">Free resources to enhance your intelligence analysis workflow</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Input type="search" placeholder="Search resources..." className="w-full md:w-[300px]" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="cheatsheets">Cheat Sheets</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Intelligence Report Template Library</CardTitle>
                <CardDescription>Document Collection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Word Documents</span>
                </div>
                <p className="text-sm">
                  A collection of standardized report formats for all intelligence product types,
                  including strategic assessments, operational briefings, and threat analyses.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Templates
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ACH Matrix Templates</CardTitle>
                <CardDescription>Excel Templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Table className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheets</span>
                </div>
                <p className="text-sm">
                  Analysis of Competing Hypotheses (ACH) matrices that help analysts systematically evaluate multiple
                  theories by listing evidence against each hypothesis.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Templates
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collection Plan Template</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Table className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Strategic framework for organizing intelligence gathering efforts, outlining information requirements,
                  available sources, collection methods, and timelines.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Link Analysis Network Mapping</CardTitle>
                <CardDescription>Visio Templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Network className="h-8 w-8 text-purple-600" />
                  <span className="text-sm text-muted-foreground">Visio Templates</span>
                </div>
                <p className="text-sm">
                  Visual tools for mapping relationships between suspects, organizations, locations, and assets. Shows
                  connections, communication patterns, and hierarchies in criminal networks.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Templates
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pattern Analysis Worksheets</CardTitle>
                <CardDescription>PDF & Excel Templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="h-8 w-8 text-orange-600" />
                  <span className="text-sm text-muted-foreground">Multiple Formats</span>
                </div>
                <p className="text-sm">
                  Structured tools for identifying trends, cycles, and recurring behaviors in crime data. Helps analysts
                  recognize modus operandi and predict future activities.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Worksheets
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Threat Assessment Matrix</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Risk evaluation tool that categorizes threats by likelihood and impact severity. Provides standardized
                  scoring system for prioritizing resources and responses.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Matrix
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intelligence Requirements Database</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Centralized system for tracking and prioritizing information needs across the organization. Manages
                  standing requirements and critical intelligence gaps.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Briefing Document</CardTitle>
                <CardDescription>Word Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Word Document</span>
                </div>
                <p className="text-sm">
                  Standardized format for routine intelligence updates, including overnight incidents, emerging trends,
                  threat alerts, and priority actions for shift personnel.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Evidence Matrix Template</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Table className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Organizational tool for mapping evidence to hypotheses in investigations. Tracks consistency of
                  information and identifies gaps in cases.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pre-Operation Brief Template</CardTitle>
                <CardDescription>PowerPoint Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Presentation className="h-8 w-8 text-orange-600" />
                  <span className="text-sm text-muted-foreground">PowerPoint Template</span>
                </div>
                <p className="text-sm">
                  Mission intelligence package format containing subject information, location details, threat
                  assessments, support requirements, and contingency procedures.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cognitive Bias Checklist</CardTitle>
                <CardDescription>PDF Checklist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Self-assessment tool for identifying potential biases affecting analytical judgment. Includes common
                  biases with prompts for maintaining objectivity.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Assumptions Check Form</CardTitle>
                <CardDescription>PDF Form</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Critical analysis tool for identifying and challenging underlying beliefs in investigations. Forces
                  analysts to explicitly state and test assumptions against evidence.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Form
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OSINT Collection Checklist</CardTitle>
                <CardDescription>PDF Checklist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Systematic protocol for open-source intelligence gathering, covering search strategies, source types,
                  verification methods, and legal compliance considerations.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timeline Development Tool</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Visual chronology creator for case development, showing event sequences and temporal relationships.
                  Useful for understanding criminal activities and predicting future actions.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Framework</CardTitle>
                <CardDescription>PDF & Excel Templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">Multiple Formats</span>
                </div>
                <p className="text-sm">
                  System for evaluating operational hazards, including threat analysis, vulnerability
                  assessment, impact evaluation, and mitigation planning.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Framework
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intelligence Primer Handbook</CardTitle>
                <CardDescription>PDF Handbook</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Foundational reference guide covering core intelligence concepts, methodologies, terminology, best
                  practices, and ethical considerations for analysts.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Handbook
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estimative Language Dictionary</CardTitle>
                <CardDescription>PDF Reference</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Standardized probability expressions for analytical accuracy, providing consistent interpretation of
                  terms like &quot;likely,&quot; &quot;possible,&quot; and &quot;probable&quot; for clear communication.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Dictionary
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Writing Checklist</CardTitle>
                <CardDescription>PDF Checklist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Quality assurance tool ensuring clear, concise, and accurate intelligence products. Covers structure,
                  grammar, evidence citation, and audience appropriateness.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Person of Interest Profile</CardTitle>
                <CardDescription>Word Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Word Document</span>
                </div>
                <p className="text-sm">
                  Subject research framework for gathering biographical information, criminal history,
                  associations, behavioral patterns, and relevant background data.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Investigation Worksheet</CardTitle>
                <CardDescription>Excel Template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-muted-foreground">Excel Spreadsheet</span>
                </div>
                <p className="text-sm">
                  Structured tool for tracking money flow, asset ownership, business relationships, financial
                  transactions, and suspicious activity patterns in economic crime investigations.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Worksheet
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geolocation Toolkit</CardTitle>
                <CardDescription>PDF & Digital Tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                  <span className="text-sm text-muted-foreground">Multiple Formats</span>
                </div>
                <p className="text-sm">
                  Collection of location identification methods, including coordinate systems, map reading, landmark
                  identification, GPS analysis, and geographic reference resources.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Toolkit
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Evidence Documentation</CardTitle>
                <CardDescription>PDF Guide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="h-8 w-8 text-purple-600" />
                  <span className="text-sm text-muted-foreground">PDF Document</span>
                </div>
                <p className="text-sm">
                  Standards for collecting, preserving, and documenting electronic evidence, including chain of custody
                  procedures, data extraction methods, and admissibility requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </div>
  )
}
