import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "subtle" | "strong"
}

export function GlassmorphismCard({ children, className, variant = "default" }: GlassmorphismCardProps) {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20 shadow-glass",
    subtle: "bg-white/5 backdrop-blur-sm border border-white/10 shadow-glass-subtle",
    strong: "bg-white/20 backdrop-blur-lg border border-white/30 shadow-glass-strong",
  }

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 hover:bg-white/15 hover:shadow-glass-hover",
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}
