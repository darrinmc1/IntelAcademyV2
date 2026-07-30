'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  UserProfile,
  getUserProfile,
  saveUserProfile,
  markLessonViewed as libMarkLessonViewed,
  markLessonCompleted as libMarkLessonCompleted,
  rerollCodename as libRerollCodename,
  updateStreak,
  setAvatar as libSetAvatar,
  removeAvatar as libRemoveAvatar,
} from '@/lib/user-store';
import { checkForNewBadges } from '@/lib/badge-checker';
import { getBadge } from '@/data/badges';
import { triggerBadgeUnlockToast } from '@/components/badge-enable-toast';

export interface UserContextType {
  profile: UserProfile | null;
  isLoaded: boolean;
  markLessonViewed: (slug: string) => void;
  markLessonCompleted: (slug: string) => void;
  rerollCodename: () => string;
  checkBadges: () => void;
  setAvatar: (dataUrl: string) => void;
  removeAvatar: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * UserProvider component - wraps the app with user profile context
 */
export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize profile on mount
  useEffect(() => {
    const initialProfile = getUserProfile();
    updateStreak();
    const updatedProfile = getUserProfile();
    setProfile(updatedProfile);
    processAndNotifyBadges();
    setIsLoaded(true);
  }, []);

  const processAndNotifyBadges = () => {
    const currentProfile = getUserProfile();
    const newBadgeIds = checkForNewBadges(currentProfile);
    if (newBadgeIds.length > 0) {
      newBadgeIds.forEach((id) => {
        const badge = getBadge(id);
        if (badge) {
          // Add to profile
          currentProfile.badges.push(id);
          // Trigger toast with slight stagger
          setTimeout(() => triggerBadgeUnlockToast(badge), 300);
        }
      });
      saveUserProfile(currentProfile);
      setProfile({ ...currentProfile });
      return true;
    }
    return false;
  };

  const markLessonViewed = (slug: string) => {
    libMarkLessonViewed(slug);
    const updated = getUserProfile();
    setProfile(updated);
    processAndNotifyBadges();
  };

  const markLessonCompleted = (slug: string) => {
    libMarkLessonCompleted(slug);
    const updated = getUserProfile();
    setProfile(updated);
    processAndNotifyBadges();
  };

  const rerollCodename = (): string => {
    const newCodename = libRerollCodename();
    const updated = getUserProfile();
    setProfile(updated);
    return newCodename;
  };

  const setAvatar = (dataUrl: string) => {
    libSetAvatar(dataUrl);
    setProfile(getUserProfile());
  };

  const removeAvatar = () => {
    libRemoveAvatar();
    setProfile(getUserProfile());
  };

  const value: UserContextType = {
    profile,
    isLoaded,
    markLessonViewed,
    markLessonCompleted,
    rerollCodename,
    checkBadges: processAndNotifyBadges,
    setAvatar,
    removeAvatar,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

/**
 * Hook to use the user context
 * Throws if used outside of UserProvider
 */
export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Re-export the UserProfile type for convenience
export type { UserProfile };
