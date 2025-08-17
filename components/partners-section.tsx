import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "NASSCOM", logo: "/nasscom-logo.png" },
  { name: "a2i Ventures", logo: "/a2i-ventures-logo.png" },
  { name: "IIT Delhi", logo: "/iit-delhi-logo.png" },
  { name: "Agri-Tech Accelerator", logo: "/placeholder-tw3b2.png" },
  { name: "FarmTech India", logo: "/farmtech-india-logo.png" },
  { name: "Rural Innovation Fund", logo: "/placeholder.svg?height=80&width=120" },
]

export function PartnersSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">Our Partners & Supporters</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Backed by leading organizations committed to advancing agricultural innovation in India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-card-foreground">Become a Partner</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in building India's agritech ecosystem. Partner with AgriVentures India to support innovation,
                connect with startups, and drive agricultural transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold text-card-foreground">For Corporates</div>
                  <div className="text-sm text-muted-foreground">Innovation partnerships & startup scouting</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-card-foreground">For VCs</div>
                  <div className="text-sm text-muted-foreground">Deal flow & startup discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-card-foreground">For Universities</div>
                  <div className="text-sm text-muted-foreground">Research collaboration & talent pipeline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
