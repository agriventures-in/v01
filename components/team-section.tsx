"use client"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/glassmorphism-card"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with 15+ years in agritech. Previously founded two successful agtech startups.",
    image: "/indian-ceo-business.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    bio: "Former tech lead at major agritech unicorn. Expert in agricultural data analytics and IoT.",
    image: "/placeholder-sedgy.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Amit Patel",
    role: "Head of Community",
    bio: "Agricultural scientist turned entrepreneur. PhD in Sustainable Agriculture from IIT Delhi.",
    image: "/placeholder-dzqmb.png",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body">
            Passionate leaders with deep expertise in agriculture, technology, and community building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="text-center group hover:scale-[1.02] transition-all duration-300 p-8 h-full">
                <div className="mb-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-glass group-hover:shadow-glass-hover transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-gradient-primary transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4 font-body">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6 font-body leading-relaxed">{member.bio}</p>

                  <div className="flex justify-center space-x-4">
                    <Link
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:from-primary/20 hover:to-accent/20 transition-all duration-300 shadow-glass-subtle hover:shadow-glass"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:from-primary/20 hover:to-accent/20 transition-all duration-300 shadow-glass-subtle hover:shadow-glass"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
