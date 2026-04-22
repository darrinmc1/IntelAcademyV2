export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function getTransitionDuration(baseValue: number): number {
  return prefersReducedMotion() ? Math.min(baseValue * 0.5, 0.3) : baseValue
}

export function getTransitionDelay(baseValue: number): number {
  return prefersReducedMotion() ? 0 : baseValue
}
