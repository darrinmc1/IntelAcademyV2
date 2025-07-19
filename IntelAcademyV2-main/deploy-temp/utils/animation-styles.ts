export type AnimationType = "fade" | "zoom" | "slide-up" | "slide-down" | "pulse" | "shimmer" | "reveal" | "none"

export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
}

export const defaultAnimationConfig: AnimationConfig = {
  duration: 500,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  delay: 0,
}

export const animationStyles = {
  fade: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-500",
  },
  zoom: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
    transition: "transition-all duration-500 transform",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-4",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500 transform",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-4",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500 transform",
  },
  pulse: {
    initial: "opacity-70 scale-95",
    animate: "opacity-100 scale-100",
    transition: "transition-all duration-500 transform",
    loading: "animate-pulse",
  },
  shimmer: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-500",
    loading:
      "before:absolute before:inset-0 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
  },
  reveal: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-all duration-700",
    loading:
      "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:translate-x-full after:animate-reveal",
  },
  none: {
    initial: "",
    animate: "",
    transition: "",
  },
}

export function getAnimationClasses(
  type: AnimationType,
  state: "initial" | "animate" | "loading",
  config?: Partial<AnimationConfig>,
): string {
  const style = animationStyles[type]
  const mergedConfig = { ...defaultAnimationConfig, ...config }

  let classes = style[state] || ""

  // Add custom duration and easing if different from default
  if (state === "transition" && config) {
    if (config.duration && config.duration !== defaultAnimationConfig.duration) {
      classes += ` duration-${config.duration}`
    }

    if (config.delay && config.delay > 0) {
      classes += ` delay-${config.delay}`
    }
  }

  return classes
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Get appropriate animation based on user preferences
export function getAccessibleAnimation(animation: AnimationType): AnimationType {
  if (prefersReducedMotion()) {
    // Use simpler animations for users who prefer reduced motion
    if (animation === "zoom" || animation === "slide-up" || animation === "slide-down") {
      return "fade"
    }
    if (animation === "shimmer" || animation === "reveal") {
      return "pulse"
    }
  }
  return animation
}
