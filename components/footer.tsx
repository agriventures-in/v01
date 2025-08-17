"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send } from "lucide-react"

export function Footer() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
    setIsSubmitted(true)
    setContactForm({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 id="newsletter" className="text-2xl font-heading font-bold mb-6">
              Get in Touch
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Have questions about AgriVentures India? Want to partner with us? We'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>hello@agriventures.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h4 className="text-xl font-heading font-semibold mb-4">Send us a Message</h4>

              {!isSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button type="submit" variant="secondary" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-secondary text-4xl mb-4">✓</div>
                  <p className="text-lg">Thank you for your message!</p>
                  <p className="text-primary-foreground/80">We'll get back to you soon.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/agriventures-logo.png" alt="AgriVentures India" width={32} height={32} className="w-8 h-8" />
              <span className="font-heading font-bold text-lg">AgriVentures India</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <span>© 2025 AgriVentures India. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
