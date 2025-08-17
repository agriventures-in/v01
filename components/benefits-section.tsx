"use client"

import { Network, Lightbulb, TrendingUp, Users, Award, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"

const benefits = [
  {
    icon: Network,
    title: "Network with Industry Leaders",
    description: "Connect with successful agritech founders, experienced investors, and forward-thinking corporates.",
    span: "md" as const,
  },
  {
    icon: Lightbulb,
    title: "Showcase Your Innovation",
    description: "Get your startup featured and voted on by the community, gaining visibility and validation.",
    span: "sm" as const,
  },
  {
    icon: TrendingUp,
    title: "Access Growth Resources",
    description: "Discover funding opportunities, mentorship programs, and strategic partnerships.",
    span: "sm" as const,
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a supportive community of like-minded innovators working to transform agriculture.",
    span: "sm" as const,
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Participate in community challenges and get recognized for your contributions to agritech.",
    span: "sm" as const,
  },
  {
    icon: BookOpen,
    title: "Industry Insights",
    description: "Stay updated with the latest trends, research, and opportunities in agricultural technology.",
    span: "md" as const,
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">
            Why Join AgriVentures India?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body">
            Become part of India's most vibrant agritech community and unlock opportunities that will accelerate your
            journey in agricultural innovation.
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BentoGridItem
              key={index}
              span={benefit.span}
              className="group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-full flex flex-col justify-start">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-glass flex-shrink-0">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 text-foreground group-hover:text-gradient-primary transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
