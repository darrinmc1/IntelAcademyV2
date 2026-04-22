/**
 * Safely access environment variables with fallbacks
 */
export function getEnv(key: string, fallback = ""): string {
  // For client-side variables
  if (key.startsWith("NEXT_PUBLIC_")) {
    return typeof window !== "undefined" ? process.env[key] || fallback : fallback
  }

  // For server-side variables
  return process.env[key] || fallback
}

/**
 * Check if we're in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development"
}

/**
 * Get the base URL for the application
 */
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  // For server-side
  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) {
    return `https://${vercelUrl}`
  }

  return "http://localhost:3000"
}
