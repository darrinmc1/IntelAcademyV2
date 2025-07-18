"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

const neumorphicButtonVariants = cva(
  "neu-button inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "neu-button text-foreground",
        classified: "neu-classified text-white",
        secure: "neu-secure text-white",
        alert: "neu-alert text-white",
        ghost: "neu-button hover:bg-accent hover:text-accent-foreground",
        outline: "neu-button border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "neu-button-sm h-9 px-3",
        lg: "neu-button-lg h-11 px-8",
        icon: "h-10 w-10",
      },
      effect: {
        none: "",
        pulse: "neu-pulse",
        glow: "neu-glow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      effect: "none",
    },
  },
)

export interface NeumorphicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neumorphicButtonVariants> {
  asChild?: boolean
}

const NeumorphicButton = React.forwardRef<HTMLButtonElement, NeumorphicButtonProps>(
  ({ className, variant, size, effect, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(neumorphicButtonVariants({ variant, size, effect, className }))} ref={ref} {...props} />
  },
)
NeumorphicButton.displayName = "NeumorphicButton"

export { NeumorphicButton, neumorphicButtonVariants }
