import {
  BookOpen,
  Target,
  Compass,
  Lightbulb,
  Search,
  Shield,
  FileText,
  BarChart3,
  Map,
  TrendingUp,
  Network,
  User,
  Database,
  FileSpreadsheet,
} from "lucide-react"

interface PathIconProps {
  pathId: string
  className?: string
}

export function PathIcon({ pathId, className }: PathIconProps) {
  switch (pathId) {
    case "foundations":
      return <BookOpen className={className} />
    case "strategic-intelligence":
      return <Lightbulb className={className} />
    case "tactical-intelligence":
      return <Target className={className} />
    case "operational-intelligence":
      return <Compass className={className} />
    case "osint":
      return <Search className={className} />
    case "threat-assessment":
      return <Shield className={className} />
    case "crime-series-analysis":
      return <FileText className={className} />
    case "hot-spot-analysis":
      return <Map className={className} />
    case "target-profiling":
      return <User className={className} />
    case "network-analysis":
      return <Network className={className} />
    case "crime-trend-analysis":
      return <TrendingUp className={className} />
    case "report-writing":
      return <FileText className={className} />
    case "analysts-notebook":
      return <Database className={className} />
    case "techniques":
      return <BarChart3 className={className} />
    case "data-collection":
      return <Database className={className} />
    case "excel":
      return <FileSpreadsheet className={className} />
    default:
      return <BookOpen className={className} />
  }
}
