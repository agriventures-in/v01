"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/glassmorphism-card"

export function CommunitySection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard
              variant="strong"
              className="bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70 text-primary-foreground backdrop-blur-lg"
            >
              <div className="p-8 md:p-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center mb-6"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/20 flex items-center justify-center shadow-glass">
                    <Mail className="h-10 w-10 text-secondary" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-heading font-bold mb-4 text-shadow-glow"
                >
                  Join the AgriVentures Community
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto font-body leading-relaxed"
                >
                  Get exclusive access to agritech insights, startup showcases, funding opportunities, and connect with
                  India's most innovative agricultural entrepreneurs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 bg-white/90 backdrop-blur-sm text-foreground border-white/30 shadow-glass"
                        />
                        <Button
                          type="submit"
                          variant="secondary"
                          size="lg"
                          className="shadow-glass hover:shadow-glass-hover transition-all duration-300"
                        >
                          Subscribe
                        </Button>
                      </div>
                      <p className="text-sm text-primary-foreground/80 mt-3 font-body">
                        We respect your privacy. No spam, unsubscribe anytime.
                      </p>
                    </form>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 text-secondary">
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-lg font-medium font-body">Thank you for subscribing!</span>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-8 border-t border-primary-foreground/20"
                >
                  <p className="text-primary-foreground/80 mb-6 font-body">
                    Join thousands of agritech innovators already part of our community
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    {[
                      { number: "2,500+", label: "Community Members" },
                      { number: "150+", label: "Featured Startups" },
                      { number: "50+", label: "Investor Partners" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-glass-subtle"
                      >
                        <div className="text-2xl font-bold text-secondary font-heading">{stat.number}</div>
                        <div className="text-primary-foreground/80 font-body">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
