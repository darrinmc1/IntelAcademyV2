export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum'
export type BadgeCategory = 'general' | 'streak' | 'completion' | 'exploration' | 'mastery'

export interface Badge {
  id: string
  name: string
  description: string
  icon: string // lucide-react icon name (e.g., 'Target', 'Flame', 'Star')
  tier: BadgeTier
  humorMessage: string
  category: BadgeCategory
}

export const badges: Badge[] = [
  // General
  {
    id: 'first-contact',
    name: 'First Contact',
    description: 'Complete your first lesson',
    icon: 'Handshake',
    tier: 'bronze',
    humorMessage: 'You showed up. That\'s more than most aspiring spies ever manage.',
    category: 'general',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Complete a lesson after 10 PM',
    icon: 'Moon',
    tier: 'bronze',
    humorMessage: 'Good intel happens at night. So does questionable decision-making.',
    category: 'general',
  },
  {
    id: 'coffee-scholar',
    name: 'Coffee Break Scholar',
    description: 'Complete 3 short lessons in a single session',
    icon: 'Coffee',
    tier: 'silver',
    humorMessage: 'Your caffeine-to-knowledge conversion ratio is impressive.',
    category: 'general',
  },

  // Streak
  {
    id: 'streak-3',
    name: 'Warm Trail',
    description: 'Maintain a 3-day learning streak',
    icon: 'Flame',
    tier: 'bronze',
    humorMessage: 'Three days of consistent effort. Barely counts as a habit. Barely.',
    category: 'streak',
  },
  {
    id: 'streak-7',
    name: 'Streak Agent',
    description: 'Maintain a 7-day learning streak',
    icon: 'Flame',
    tier: 'silver',
    humorMessage: 'A full week. Your couch misses you.',
    category: 'streak',
  },
  {
    id: 'streak-30',
    name: 'Persistent Threat',
    description: 'Maintain a 30-day learning streak',
    icon: 'Flame',
    tier: 'gold',
    humorMessage: 'APT status achieved. The A stands for "Actually really committed."',
    category: 'streak',
  },

  // Completion
  {
    id: 'lessons-5',
    name: 'Rookie Analyst',
    description: 'Complete 5 lessons',
    icon: 'BookOpen',
    tier: 'bronze',
    humorMessage: 'You are officially dangerous-adjacent. Keep going.',
    category: 'completion',
  },
  {
    id: 'lessons-10',
    name: 'Classified Clearance',
    description: 'Complete 10 lessons',
    icon: 'ShieldCheck',
    tier: 'silver',
    humorMessage: 'You may now use the word "source" without quotes.',
    category: 'completion',
  },
  {
    id: 'lessons-25',
    name: 'Seasoned Operative',
    description: 'Complete 25 lessons',
    icon: 'Award',
    tier: 'gold',
    humorMessage: 'You are becoming the analyst your briefings warned you about.',
    category: 'completion',
  },
  {
    id: 'lessons-50',
    name: 'Intel Sensei',
    description: 'Complete 50 lessons',
    icon: 'Crown',
    tier: 'platinum',
    humorMessage: 'At this point, you\'re just showing off. (Please don\'t stop.)',
    category: 'completion',
  },

  // Exploration
  {
    id: 'intel-nerd',
    name: 'Intel Nerd',
    description: 'Complete all Foundations lessons',
    icon: 'GraduationCap',
    tier: 'silver',
    humorMessage: 'You now know what information ISN\'T. Big brain energy.',
    category: 'exploration',
  },
  {
    id: 'osint-operative',
    name: 'OSINT Operative',
    description: 'Complete the full OSINT learning path',
    icon: 'Search',
    tier: 'gold',
    humorMessage: 'You can now find anyone online. Please use this power responsibly.',
    category: 'exploration',
  },
  {
    id: 'explorer',
    name: 'Cartographer',
    description: 'Visit lessons from 5 different learning paths',
    icon: 'Map',
    tier: 'silver',
    humorMessage: 'Jack of all trades, master of... a growing number of things, actually.',
    category: 'exploration',
  },

  // Mastery
  {
    id: 'meme-lord',
    name: 'Meme Lord',
    description: 'Visit the meme generator',
    icon: 'Sparkles',
    tier: 'bronze',
    humorMessage: 'Culture is intel. Memes are culture. You\'ve been doing research.',
    category: 'mastery',
  },
]

/**
 * Get a badge by ID
 */
export function getBadge(id: string): Badge | undefined {
  return badges.find((b) => b.id === id)
}

/**
 * Get all badges in a specific category
 */
export function getBadgesByCategory(category: BadgeCategory): Badge[] {
  return badges.filter((b) => b.category === category)
}
