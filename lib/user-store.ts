import { generateCodename } from './codename-generator';

export interface UserProfile {
  id: string;
  codename: string;
  lessonsViewed: string[];
  lessonsCompleted: string[];
  xp: number;
  badges: string[];
  streakDays: number;
  bestStreak: number;
  lastVisitDate: string; // ISO
  createdAt: string; // ISO
  accessTier: 'free' | 'registered' | 'premium' | 'subscriber';
}

const STORAGE_KEY = 'intel-academy-profile';

/**
 * Generate a new default user profile
 */
function createDefaultProfile(): UserProfile {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    codename: generateCodename(),
    lessonsViewed: [],
    lessonsCompleted: [],
    xp: 0,
    badges: [],
    streakDays: 0,
    bestStreak: 0,
    lastVisitDate: now,
    createdAt: now,
    accessTier: 'free',
  };
}

/**
 * Get the current user profile from localStorage.
 * Creates a new profile if none exists.
 * SSR-safe with window check.
 */
export function getUserProfile(): UserProfile {
  if (typeof window === 'undefined') {
    return createDefaultProfile();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UserProfile;
    }
  } catch (error) {
    console.error('Failed to parse stored profile:', error);
  }

  const newProfile = createDefaultProfile();
  saveUserProfile(newProfile);
  return newProfile;
}

/**
 * Save the user profile to localStorage
 */
export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save profile:', error);
  }
}

/**
 * Mark a lesson as viewed (if not already marked)
 */
export function markLessonViewed(slug: string): void {
  const profile = getUserProfile();
  if (!profile.lessonsViewed.includes(slug)) {
    profile.lessonsViewed.push(slug);
    saveUserProfile(profile);
  }
}

/**
 * Mark a lesson as completed (if not already marked) and add 100 XP
 */
export function markLessonCompleted(slug: string): void {
  const profile = getUserProfile();
  if (!profile.lessonsCompleted.includes(slug)) {
    profile.lessonsCompleted.push(slug);
    profile.xp += 100;
    saveUserProfile(profile);
  }
}

/**
 * Update the user's streak based on last visit date.
 * - Same day: no change
 * - Next day: increment streakDays, update bestStreak if higher
 * - Skipped day: reset streakDays to 1
 * Always updates lastVisitDate to today
 */
export function updateStreak(): void {
  const profile = getUserProfile();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const lastVisit = profile.lastVisitDate.split('T')[0]; // YYYY-MM-DD

  if (today === lastVisit) {
    // Same day, no change needed
    return;
  }

  const lastVisitDate = new Date(lastVisit);
  const todayDate = new Date(today);
  const daysDiff = Math.floor(
    (todayDate.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysDiff === 1) {
    // Next day: increment streak
    profile.streakDays += 1;
    if (profile.streakDays > profile.bestStreak) {
      profile.bestStreak = profile.streakDays;
    }
  } else if (daysDiff > 1) {
    // Skipped day: reset to 1
    profile.streakDays = 1;
  }

  profile.lastVisitDate = new Date().toISOString();
  saveUserProfile(profile);
}

/**
 * Generate a new codename and save it to the profile
 */
export function rerollCodename(): string {
  const profile = getUserProfile();
  profile.codename = generateCodename();
  saveUserProfile(profile);
  return profile.codename;
}

/**
 * Get the completion percentage of lessons (0-100)
 */
export function getCompletionPercentage(totalLessons: number): number {
  if (totalLessons === 0) {
    return 0;
  }
  const profile = getUserProfile();
  return Math.round((profile.lessonsCompleted.length / totalLessons) * 100);
}

/**
 * Add a badge to the user's profile (if not already present)
 */
export function addBadge(badgeId: string): void {
  const profile = getUserProfile();
  if (!profile.badges.includes(badgeId)) {
    profile.badges.push(badgeId);
    saveUserProfile(profile);
  }
}
