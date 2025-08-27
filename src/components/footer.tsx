"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Plus } from "lucide-react"

export default function Footer() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const footerSections = [
    {
      id: "about",
      title: "About CRDB",
      links: ["About Us", "Board of Directors", "CRDB Leaders"],
    },
    {
      id: "services",
      title: "Our Services",
      links: ["For Our Business", "For You", "About Us"],
    },
    {
      id: "support",
      title: "Help & Support",
      links: ["Feedback & Complaints", "Contact Us", "Social Media Disclaimer"],
    },
    {
      id: "information",
      title: "Related Information",
      links: ["Legal Information", "Careers", "Sales Infrastructure Financing"],
    },
    {
      id: "campaigns",
      title: "CRDB Campaigns",
      links: ["CRDB Foundation"],
    },
  ]

  return (
    <footer className="bg-white relative">
      {/* Top green pattern border */}
      <div
        className="absolute top-0 w-full h-6 bg-repeat-x"
        style={{
          backgroundImage:
            "url('https://www.crdbbank.co.tz/themes/theme-one/assets/images/patterns/green%20patterns.svg')",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="container mx-auto px-4 py-12 pt-16">
        {/* Mobile Collapsible Sections */}
        <div className="block md:hidden space-y-4">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center py-4 text-left font-bold uppercase text-green-900"
              >
                {section.title}
                <Plus
                  className={`w-5 h-5 transition-transform ${openSections.includes(section.id) ? "rotate-45" : ""}`}
                />
              </button>
              {openSections.includes(section.id) && (
                <div className="pb-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="hover:text-green-600 transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.id}>
              <h3 className="font-bold mb-4 uppercase text-green-900">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and App Download */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:items-center">
            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-green-900 mb-4 uppercase">SIGN UP FOR OUR NEWSLETTER</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-0 border-b-2 border-gray-300 rounded-none px-0 py-3 focus:border-green-600 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="sm:w-auto w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 lg:px-16 lg:py-6 rounded-full font-medium uppercase whitespace-nowrap text-base lg:text-xl">
                  SIGN UP
                </Button>
              </div>
            </div>

            <div className="text-center justify-center align-center flex flex-col">
              <h3 className="font-bold text-green-900 mb-4 uppercase">BANK ON THE GO WITH</h3>
              <img
                src="https://www.crdbbank.co.tz/storage/app/media/images/icons/simbanking_1.svg"
                alt="SimBanking"
                className="h-10 mx-auto"
              />
            </div>

            {/* App Download */}
            <div className="text-center justify-center align-center flex flex-col">
              <h3 className="font-bold text-green-900 mb-4 uppercase text-center w-full text-xl">Get the App</h3>
              <div className="flex justify-center lg:justify-end gap-2">
                <img
                  src="https://www.crdbbank.co.tz/storage/app/media/images/icons/g-play%20black.webp"
                  alt="Get it on Google Play"
                  className="h-10"
                />
                <img
                  src="https://www.crdbbank.co.tz/storage/app/media/images/icons/a-store%20black.webp"
                  alt="Download on App Store"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <h4 className="font-bold text-gray-900 uppercase">LET US CONNECT</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <img
                    src="https://www.crdbbank.co.tz/storage/app/media/images/icons/social/facebook.png"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <img
                    src="https://www.crdbbank.co.tz/storage/app/media/images/icons/social/youtube.png"
                    alt="YouTube"
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <img
                    src="https://www.crdbbank.co.tz/storage/app/media/images/icons/social/twitter.png"
                    alt="Twitter"
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <img
                    src="https://www.crdbbank.co.tz/storage/app/media/images/icons/social/instagram.png"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <img
                    src="https://www.crdbbank.co.tz/storage/app/media/images/icons/social/linkedIn.png"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-green-600 transition-colors">
                Privacy Notice
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom green pattern border */}
      <div
        className="absolute bottom-0 w-full h-6 bg-repeat-x"
        style={{
          backgroundImage:
            "url('https://www.crdbbank.co.tz/themes/theme-one/assets/images/patterns/green%20patterns.svg')",
          backgroundSize: "auto 100%",
        }}
      />
    </footer>
  )
}
