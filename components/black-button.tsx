import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

export function BlackButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-black text-white transition-all duration-300",
        "hover:bg-yellow-500 hover:scale-105 hover:shadow-md",
        "active:bg-yellow-600 active:scale-95 active:shadow-inner active:translate-y-0.5",
        className,
      )}
      {...props}
    />
  )
}
