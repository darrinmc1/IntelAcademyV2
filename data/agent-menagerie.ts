export type AnimalTier = 'locked' | 'recruit' | 'operative' | 'specialist'
export type AgentTier = AnimalTier

export const TIER_CONFIG = {
  recruit: {
    threshold: 10,
    label: 'Recruit',
    color: 'text-blue-400',
    bg: 'bg-blue-900/20',
    border: 'border-blue-500/30',
    glow: 'hover:glow-blue-500/20'
  },
  operative: {
    threshold: 50,
    label: 'Operative',
    color: 'text-purple-400',
    bg: 'bg-purple-900/20',
    border: 'border-purple-500/30',
    glow: 'hover:glow-purple-500/20'
  },
  specialist: {
    threshold: 100,
    label: 'Specialist',
    color: 'text-amber-400',
    bg: 'bg-amber-900/20',
    border: 'border-amber-500/30',
    glow: 'hover:glow-amber-500/20'
  },
  locked: {
    threshold: 0,
    label: 'Locked',
    color: 'text-slate-500',
    bg: 'bg-slate-900/10',
    border: 'border-slate-500/10',
    glow: 'hover:glow-slate-500/10'
  }
}

export interface AgentAnimal {
  pathSlug: string
  pathTitle: string
  animal: string
  codename: string
  emoji: string
  icon: string // lucide-react icon name
  imagePath: string // path to mascot SVG (e.g. "/mascots/the-chief.svg")
  description: string
  personality: string
  tierThresholds: {
    recruit: number   // complete 1 lesson = recruit
    operative: number // complete 50% = operative
    specialist: number // complete 100% = specialist
  }
  tierLabels: {
    recruit: string
    operative: string
    specialist: string
  }
}

export const agentMenagerie: AgentAnimal[] = [
  {
    pathSlug: "foundations",
    pathTitle: "Foundations of Intelligence",
    animal: "Owl",
    codename: "The Chief",
    emoji: "🦉",
    icon: "Bird",
    imagePath: "/mascots/the-chief.svg",
    description: "Wise, all-seeing, and mildly judgemental. Knows everything and won't let you forget it.",
    personality: "The mentor who watches over all agents-in-training.",
    tierThresholds: { recruit: 1, operative: 6, specialist: 12 },
    tierLabels: { recruit: "Owlet", operative: "Night Watch", specialist: "Grand Owl" },
  },
  {
    pathSlug: "strategic-intelligence",
    pathTitle: "Strategic Intelligence",
    animal: "Fox",
    codename: "Slick",
    emoji: "🦊",
    icon: "Crosshair",
    imagePath: "/mascots/slick.svg",
    description: "Always three moves ahead. Plays chess while everyone else plays checkers.",
    personality: "The cunning strategist of the menagerie.",
    tierThresholds: { recruit: 1, operative: 8, specialist: 15 },
    tierLabels: { recruit: "Kit", operative: "Tactician", specialist: "Grand Strategist" },
  },
  {
    pathSlug: "osint",
    pathTitle: "Open Source Intelligence",
    animal: "Raccoon",
    codename: "Agent Nightshift",
    emoji: "🦝",
    icon: "Search",
    imagePath: "/mascots/agent-nightshift.svg",
    description: "Digs through digital bins and finds gold. Comes with a natural disguise.",
    personality: "The resourceful scavenger who can find anything online.",
    tierThresholds: { recruit: 1, operative: 9, specialist: 18 },
    tierLabels: { recruit: "Bin Diver", operative: "Data Raider", specialist: "Ghost Operative" },
  },
  {
    pathSlug: "report-writing",
    pathTitle: "Intelligence Report Writing",
    animal: "Beaver",
    codename: "The Scribe",
    emoji: "🦫",
    icon: "FileText",
    imagePath: "/mascots/the-scribe.svg",
    description: "Builds reports like dams - methodical, sturdy, and occasionally impressive.",
    personality: "Patient, detail-oriented, never misses a typo.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Scribbler", operative: "Wordsmith", specialist: "Master Scribe" },
  },
  {
    pathSlug: "threat-assessment",
    pathTitle: "Threat Assessment",
    animal: "Hedgehog",
    codename: "Bristles",
    emoji: "🦔",
    icon: "ShieldAlert",
    imagePath: "/mascots/bristles.svg",
    description: "Small, defensive, and extremely pointy when provoked. Don't underestimate.",
    personality: "The cautious defender who sees danger everywhere.",
    tierThresholds: { recruit: 1, operative: 6, specialist: 12 },
    tierLabels: { recruit: "Prickle", operative: "Sentinel", specialist: "Threat Master" },
  },
  {
    pathSlug: "analyst-notebook",
    pathTitle: "IBM Analyst Notebook",
    animal: "Spider",
    codename: "The Weaver",
    emoji: "🕷️",
    icon: "GitBranch",
    imagePath: "/mascots/the-weaver.svg",
    description: "Spins webs of connections. Every thread leads somewhere interesting.",
    personality: "Meticulous, pattern-obsessed, sees links nobody else does.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Spinner", operative: "Web Builder", specialist: "Grand Weaver" },
  },
  {
    pathSlug: "tactical-intelligence",
    pathTitle: "Tactical Intelligence",
    animal: "Hawk",
    codename: "Skyfall",
    emoji: "🦅",
    icon: "Eye",
    imagePath: "/mascots/skyfall.svg",
    description: "Strikes fast from above. Doesn't believe in long meetings.",
    personality: "Sharp-eyed, action-oriented, gets results NOW.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Fledgling", operative: "Raptor", specialist: "Sky Marshal" },
  },
  {
    pathSlug: "operational-intelligence",
    pathTitle: "Operational Intelligence",
    animal: "Wolf",
    codename: "Pack Leader",
    emoji: "🐺",
    icon: "Users",
    imagePath: "/mascots/pack-leader.svg",
    description: "Runs with the pack. Coordinates ops while looking effortlessly cool.",
    personality: "Born leader, team player, howls at deadlines.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Pup", operative: "Tracker", specialist: "Alpha" },
  },
  {
    pathSlug: "crime-series-analysis",
    pathTitle: "Crime Series Analysis",
    animal: "Ant",
    codename: "Pattern",
    emoji: "🐜",
    icon: "Layers",
    imagePath: "/mascots/pattern.svg",
    description: "Tiny, tireless, and finds patterns in everything. Even your lunch routine.",
    personality: "Methodical, never misses a detail, disturbingly thorough.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Worker", operative: "Scout", specialist: "Colony Mind" },
  },
  {
    pathSlug: "hot-spot-analysis",
    pathTitle: "Hot Spot Analysis",
    animal: "Meerkat",
    codename: "Lookout",
    emoji: "🐿️",
    icon: "MapPin",
    imagePath: "/mascots/lookout.svg",
    description: "Always standing on something tall, scanning the horizon. Professionally nosy.",
    personality: "Vigilant, alert, knows every corner of the territory.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Spotter", operative: "Watchman", specialist: "All-Seeing" },
  },
  {
    pathSlug: "network-analysis",
    pathTitle: "Network Analysis",
    animal: "Octopus",
    codename: "The Web",
    emoji: "🐙",
    icon: "Network",
    imagePath: "/mascots/the-web.svg",
    description: "Eight arms, each doing something useful. The ultimate multitasker.",
    personality: "Connected, coordinated, and slightly terrifying in meetings.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Tentacle", operative: "Connector", specialist: "Network Master" },
  },
  {
    pathSlug: "target-profiling",
    pathTitle: "Target Profiling",
    animal: "Shark",
    codename: "The Hunter",
    emoji: "🦈",
    icon: "Target",
    imagePath: "/mascots/the-hunter.svg",
    description: "Locks on and never lets go. Smells a lead from miles away.",
    personality: "Focused, relentless, surprisingly good conversationalist.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Pup", operative: "Predator", specialist: "Apex Hunter" },
  },
  {
    pathSlug: "crime-trend-analysis",
    pathTitle: "Crime Trend Analysis",
    animal: "Monkey",
    codename: "The Stats Monkey",
    emoji: "🐵",
    icon: "BarChart3",
    imagePath: "/mascots/stats-monkey.svg",
    description: "Crunches numbers so fast the calculator files a complaint.",
    personality: "Energetic, cheeky, lives for a good bar chart.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Counter", operative: "Analyst", specialist: "Data Lord" },
  },
  {
    pathSlug: "analytical-techniques",
    pathTitle: "Analytical Techniques",
    animal: "Chameleon",
    codename: "Camo",
    emoji: "🦎",
    icon: "Palette",
    imagePath: "/mascots/camo.svg",
    description: "Adapts to any situation. Sees things from every angle. Literally.",
    personality: "Versatile, adaptive, one eye on the data, one on the exit.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Shifter", operative: "Adapter", specialist: "Master of Disguise" },
  },
  {
    pathSlug: "excel-for-analysts",
    pathTitle: "Excel for Analysts",
    animal: "Hamster",
    codename: "Wheels",
    emoji: "🐹",
    icon: "Table",
    imagePath: "/mascots/wheels.svg",
    description: "Runs on the wheel of spreadsheets. Never stops. Send help. (And caffeine.)",
    personality: "Tireless, obsessive, has strong opinions about pivot tables.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Cell Filler", operative: "Formula Wizard", specialist: "Spreadsheet God" },
  },
  {
    pathSlug: "data-collection-planning",
    pathTitle: "Data Collection Planning",
    animal: "Squirrel",
    codename: "The Hoarder",
    emoji: "🐿️",
    icon: "Archive",
    imagePath: "/mascots/the-hoarder.svg",
    description: "Collects everything. Organises most of it. Forgets where the rest is.",
    personality: "Compulsive collector, surprisingly strategic about it.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Gatherer", operative: "Stockpiler", specialist: "Grand Archivist" },
  },
  {
    pathSlug: "intelligence-tools",
    pathTitle: "Intelligence Tools",
    animal: "Crow",
    codename: "The Collector",
    emoji: "🐦‍⬛",
    icon: "Wrench",
    imagePath: "/mascots/the-collector.svg",
    description: "Attracted to shiny tech. Hoards tools like precious gems.",
    personality: "Curious, tool-obsessed, always recommending something new.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Tinkerer", operative: "Toolsmith", specialist: "Tech Magpie" },
  },
  {
    pathSlug: "source-evaluation",
    pathTitle: "Source Evaluation",
    animal: "Goat",
    codename: "The Skeptic",
    emoji: "🐐",
    icon: "HelpCircle",
    imagePath: "/mascots/the-skeptic.svg",
    description: "Questions everything. Especially your sources. Especially YOU.",
    personality: "Professionally doubtful, demands evidence, accepts nothing at face value.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Doubter", operative: "Verifier", specialist: "Supreme Skeptic" },
  },
  {
    pathSlug: "digital-intelligence",
    pathTitle: "Digital Intelligence",
    animal: "Cat",
    codename: "The Shadow",
    emoji: "🐈‍⬛",
    icon: "Laptop",
    imagePath: "/mascots/the-shadow.svg",
    description: "Moves silently through digital spaces. Knocks things off your desktop for fun.",
    personality: "Stealthy, independent, judges your browser history silently.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Kitten", operative: "Prowler", specialist: "Phantom Cat" },
  },
  {
    pathSlug: "geospatial-intelligence",
    pathTitle: "Geospatial Intelligence",
    animal: "Eagle",
    codename: "Skyfall",
    emoji: "🦅",
    icon: "Globe",
    imagePath: "/mascots/skyfall-geo.svg",
    description: "Sees the whole map. Can spot a suspect from orbit. (Almost.)",
    personality: "Majestic, precise, obsessed with satellite imagery.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Spotter", operative: "Surveyor", specialist: "Eye in the Sky" },
  },
  {
    pathSlug: "intelligence-ethics",
    pathTitle: "Intelligence Ethics",
    animal: "Tortoise",
    codename: "The Patient",
    emoji: "🐢",
    icon: "Scale",
    imagePath: "/mascots/the-patient.svg",
    description: "Slow, deliberate, and always asking 'but should we?'",
    personality: "The moral compass of the menagerie. Annoyingly right most of the time.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Novice", operative: "Ethical Mind", specialist: "Conscience Keeper" },
  },
  {
    pathSlug: "cognitive-bias",
    pathTitle: "Cognitive Bias",
    animal: "Parrot",
    codename: "Mockingbird",
    emoji: "🦜",
    icon: "Brain",
    imagePath: "/mascots/mockingbird.svg",
    description: "Repeats your biases back at you until you see the problem.",
    personality: "Loud, opinionated, surprisingly insightful when you listen.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Echo", operative: "Mirror", specialist: "Bias Breaker" },
  },
  {
    pathSlug: "financial-intelligence",
    pathTitle: "Financial Intelligence",
    animal: "Pig",
    codename: "Tally",
    emoji: "🐷",
    icon: "Banknote",
    imagePath: "/mascots/tally.svg",
    description: "Follows the money. Always follows the money. Even to the laundrette.",
    personality: "Thorough, financially savvy, has a suspicious number of calculators.",
    tierThresholds: { recruit: 1, operative: 5, specialist: 10 },
    tierLabels: { recruit: "Penny Counter", operative: "Auditor", specialist: "Money Trail Master" },
  },
  {
    pathSlug: "intelligence-communication",
    pathTitle: "Intelligence Communication",
    animal: "Dolphin",
    codename: "Sonar",
    emoji: "🐬",
    icon: "Radio",
    imagePath: "/mascots/sonar.svg",
    description: "Communicates complex intel with clicks, whistles, and surprisingly clear briefs.",
    personality: "Articulate, persuasive, makes even bad news sound manageable.",
    tierThresholds: { recruit: 1, operative: 4, specialist: 8 },
    tierLabels: { recruit: "Caller", operative: "Broadcaster", specialist: "Signal Master" },
  },
]

/**
 * Get animal entry for a learning path slug
 */
export function getAnimalForPath(pathSlug: string): AgentAnimal | undefined {
  return agentMenagerie.find((a) => a.pathSlug === pathSlug)
}

/**
 * Get the tier for a given animal based on completed lessons count
 */
export function getAnimalTier(animal: AgentAnimal, completedCount: number): AnimalTier {
  if (completedCount >= animal.tierThresholds.specialist) return 'specialist'
  if (completedCount >= animal.tierThresholds.operative) return 'operative'
  if (completedCount >= animal.tierThresholds.recruit) return 'recruit'
  return 'locked'
}

/**
 * Get the label for a tier
 */
export function getAnimalTierLabel(animal: AgentAnimal, tier: AnimalTier): string {
  if (tier === 'locked') return 'Locked'
  return animal.tierLabels[tier]
}
