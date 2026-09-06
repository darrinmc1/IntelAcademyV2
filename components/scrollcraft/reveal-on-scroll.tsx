"use client"

import { useEffect, useRef, type ReactNode } from "react"

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: "div" | "section" | "li"
}

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-in")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in")
          observer.unobserve(node)
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`sc-reveal ${className}`.trim()}
      style={{ ["--sc-delay" as string]: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  )
}
