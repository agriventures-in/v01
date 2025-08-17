"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/agriventures-logo.png"
                alt="AgriVentures India"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-heading font-bold text-xl text-primary">AgriVentures India</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Button asChild variant="outline">
              <Link href="#newsletter">Join Newsletter</Link>
            </Button>
            <Button asChild>
              <Link href="#submit-startup">Submit Startup</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#community"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#team"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#newsletter" onClick={() => setIsMenuOpen(false)}>
                    Join Newsletter
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="#submit-startup" onClick={() => setIsMenuOpen(false)}>
                    Submit Startup
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
