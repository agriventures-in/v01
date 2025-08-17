"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/glassmorphism-card"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-transparent"
          >
            Innovating Agriculture Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-body"
          >
            Join India's premier agritech community connecting founders, farmers, investors, and corporates to shape the
            future of agriculture. With over 6,000 active agritech startups, the opportunity has never been greater.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-4 shadow-glass hover:shadow-glass-hover transition-all duration-300"
            >
              <Link href="#newsletter">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm shadow-glass"
            >
              <Link href="#submit-startup">Submit Your Startup</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <GlassmorphismCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-3xl font-bold font-heading text-white">6,000+</div>
              <div className="text-white/80 font-body">Active Startups</div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-3xl font-bold font-heading text-white">₹2.5B+</div>
              <div className="text-white/80 font-body">Funding Raised</div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-3xl font-bold font-heading text-white">100M+</div>
              <div className="text-white/80 font-body">Farmers Impacted</div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
