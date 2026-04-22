"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface AuthUser {
  id: string
  email: string
  codename: string
  xp?: number
  badges?: string[]
  lessonsCompleted?: string[]
  lessonsViewed?: string[]
  streakDays?: number
  bestStreak?: number
  accessTier?: string
  createdAt?: string
}

interface AuthContextType {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, password: string, codename?: string, existingProfile?: any) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  syncProfile: (profile: any) => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check auth status on mount
  useEffect(() => {
    refreshUser()
  }, [])

  async function refreshUser() {
    try {
      const res = await fetch("/api/auth/me")
      const data = await res.json()
      setUser(data.user || null)
    } catch {
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  async function login(email: string, password: string) {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) return { success: false, error: data.error }
      setUser(data.user)
      return { success: true }
    } catch {
      return { success: false, error: "Network error. Check your connection." }
    }
  }

  async function register(email: string, password: string, codename?: string, existingProfile?: any) {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, codename, existingProfile }),
      })
      const data = await res.json()
      if (!res.ok) return { success: false, error: data.error }
      setUser(data.user)
      return { success: true }
    } catch {
      return { success: false, error: "Network error. Check your connection." }
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
  }

  async function syncProfile(profile: any) {
    if (!user) return
    try {
      await fetch("/api/auth/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      })
    } catch {
      // Silently fail sync — localStorage is still the primary store
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      syncProfile,
      refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
