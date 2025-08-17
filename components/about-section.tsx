"use client"
import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/glassmorphism-card"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">
            About AgriVentures India
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            We're building India's first dedicated community platform for agritech innovation - think "Product Hunt for
            Agriculture." Our mission is to connect the entire agritech ecosystem and accelerate innovation that
            transforms farming across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To create a thriving ecosystem where agritech innovations can flourish, connecting founders with the resources and networks they need to succeed.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "To make India the global leader in agricultural technology by fostering collaboration between startups, farmers, investors, and corporations.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "Innovation, sustainability, and farmer-centricity guide everything we do. We believe technology should serve those who feed the world.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="text-center p-8 h-full group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-glass">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassmorphismCard variant="strong" className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gradient-primary">
                Why AgriVentures India?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                India's agritech sector is booming with over 6,000 active startups, but there's no central hub for
                discovery, collaboration, and growth. We're changing that by creating the first community-driven
                platform dedicated to agricultural innovation.
              </p>
              <div className="text-sm text-muted-foreground font-body italic">
                "Agriculture is not just a sector, it's the backbone of our economy. Technology can transform how we
                feed the world." - AgriVentures Team
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </section>
  )
}
