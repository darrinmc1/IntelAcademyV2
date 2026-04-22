"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NeumorphicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search" | "secure"
}

const NeumorphicInput = React.forwardRef<HTMLInputElement, NeumorphicInputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "neu-input",
      search: "neu-input pl-10",
      secure: "neu-input border-2 border-green-200 dark:border-green-800",
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
NeumorphicInput.displayName = "NeumorphicInput"

export { NeumorphicInput }
