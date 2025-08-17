import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TeamSection } from "@/components/team-section"
import { CommunitySection } from "@/components/community-section"
import { StartupShowcase } from "@/components/startup-showcase"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { Interactive3DBackground } from "@/components/interactive-3d-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <Interactive3DBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <TeamSection />
        <CommunitySection />
        <StartupShowcase />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
