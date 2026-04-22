"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface NeumorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "inset" | "hover"
  size?: "sm" | "default" | "lg"
}

const NeumorphicCard = React.forwardRef<HTMLDivElement, NeumorphicCardProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "neu-card",
      inset: "neu-inset",
      hover: "neu-card hover:shadow-2xl",
    }

    const sizeClasses = {
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    return <div ref={ref} className={cn(variantClasses[variant], sizeClasses[size], className)} {...props} />
  },
)
NeumorphicCard.displayName = "NeumorphicCard"

const NeumorphicCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props} />
  ),
)
NeumorphicCardHeader.displayName = "NeumorphicCardHeader"

const NeumorphicCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
NeumorphicCardTitle.displayName = "NeumorphicCardTitle"

const NeumorphicCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
NeumorphicCardDescription.displayName = "NeumorphicCardDescription"

const NeumorphicCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
NeumorphicCardContent.displayName = "NeumorphicCardContent"

const NeumorphicCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />,
)
NeumorphicCardFooter.displayName = "NeumorphicCardFooter"

export {
  NeumorphicCard,
  NeumorphicCardHeader,
  NeumorphicCardFooter,
  NeumorphicCardTitle,
  NeumorphicCardDescription,
  NeumorphicCardContent,
}
