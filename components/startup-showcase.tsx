import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

const featuredStartups = [
  {
    name: "FarmTech Solutions",
    description: "AI-powered crop monitoring and yield prediction platform",
    category: "Precision Agriculture",
    votes: 234,
    image: "/placeholder-jnhex.png",
  },
  {
    name: "AgroConnect",
    description: "Direct farmer-to-consumer marketplace with logistics support",
    category: "Supply Chain",
    votes: 189,
    image: "/agricultural-marketplace-app.png",
  },
  {
    name: "SmartIrrigation Pro",
    description: "IoT-based automated irrigation system for water conservation",
    category: "Water Management",
    votes: 156,
    image: "/placeholder-z8zcs.png",
  },
]

export function StartupShowcase() {
  return (
    <section id="startup-showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">Featured Startups</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover innovative agritech startups that are transforming agriculture across India. Vote for your
            favorites and help them gain visibility.
          </p>

          <div id="submit-startup">
            <Button size="lg" asChild className="mb-8">
              <Link href="https://forms.google.com/startup-submission" target="_blank" rel="noopener noreferrer">
                Submit Your Startup
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Redirects to Google Form for startup applications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredStartups.map((startup, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={startup.image || "/placeholder.svg"}
                    alt={startup.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{startup.votes}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{startup.category}</div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-card-foreground">{startup.name}</h3>
                  <p className="text-muted-foreground mb-4">{startup.description}</p>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Upvote
                    </Button>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-4 text-primary">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Submit Your Startup</h4>
              <p className="text-sm text-muted-foreground">Fill out our simple application form</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Community Review</h4>
              <p className="text-sm text-muted-foreground">Get featured and voted by our community</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Gain Visibility</h4>
              <p className="text-sm text-muted-foreground">Connect with investors and partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
