"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoGridItemProps {
  children: ReactNode
  className?: string
  span?: "sm" | "md" | "lg" | "xl"
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        /* Improved grid layout for better alignment and responsive behavior */
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({ children, className, span = "sm" }: BentoGridItemProps) {
  const spanClasses = {
    /* Fixed span classes for better content alignment */
    sm: "col-span-1 row-span-1 min-h-[280px]",
    md: "col-span-1 md:col-span-2 row-span-1 min-h-[280px]",
    lg: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2 min-h-[400px]",
    xl: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2 min-h-[400px]",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        /* Enhanced glassmorphism with logo-inspired green tints */
        "rounded-2xl p-6 bg-gradient-to-br from-primary/5 via-white/10 to-accent/5 backdrop-blur-md border border-primary/20 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between",
        spanClasses[span],
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
