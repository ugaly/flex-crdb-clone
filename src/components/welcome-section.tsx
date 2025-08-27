"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tabServices = {
  ACCOUNTS: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/save_open.svg",
      title: "Open An Account",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/save_set.svg",
      title: "Standing orders",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/save_compare.svg",
      title: "Compare Accounts",
    },
  ],
  INVEST: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Invest/invest_open.svg",
      title: "Open an Account",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Invest/invest_bonds.svg",
      title: "Buy Bonds",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Invest/invest_shares.svg",
      title: "Buy CRDB Bank Shares",
    },
  ],
  BORROW: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Borrow/borrow_apply.svg",
      title: "View loans",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Borrow/borrow_get.svg",
      title: "Get a loan Statement",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Borrow/borrow_loan.svg",
      title: "Loan Calculator",
    },
  ],
  INSURE: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Insure/insure_buy.svg",
      title: "Buy Insurance",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Insure/insure_register.svg",
      title: "Register a Claim",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Insure/insure_calculator.svg",
      title: "Insurance Calculator",
    },
  ],
  TRANSACT: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Transact/transact_signup.svg",
      title: "Internet Banking",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Transact/transact_download.svg",
      title: "Download Simbanking App",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Transact/transact_apply.svg",
      title: "Apply for Tembocard VISA",
    },
  ],
  DIASPORA: [
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Diaspora/tanzanite.svg",
      title: "Tanzanite Account",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Diaspora/insurance.svg",
      title: "Kava Insurance",
    },
    {
      icon: "https://www.crdbbank.co.tz/storage/app/media/Icons/General/Diaspora/morgage.svg",
      title: "Mortgage Financing",
    },
  ],
}

const tabs = ["ACCOUNTS", "INVEST", "BORROW", "INSURE", "TRANSACT", "DIASPORA"]

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState("ACCOUNTS")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <section style={{ backgroundColor: "#43b02a" }} className="text-white py-16 relative">
      <div
        className="absolute top-0 left-0 w-full h-7 bg-repeat-x"
        style={{
          backgroundImage:
            "url('https://www.crdbbank.co.tz/themes/theme-one/assets/images/patterns/white%20patterns.svg')",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Roboto', sans-serif" }} className="text-4xl font-bold mb-8">
            Welcome! How can we help you?
          </h2>

          {/* Tabs */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex justify-center gap-8 mb-12 relative min-w-max px-4 md:px-0">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px" }}
                    onClick={() => setActiveTab(tab)}
                    className={`font-semibold pb-2 tracking-widest border-b-2 transition-colors relative z-10 whitespace-nowrap ${
                      activeTab === tab
                        ? "border-white text-white"
                        : "border-transparent text-white hover:text-white hover:border-green-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                {/* Horizontal baseline under all tabs */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30"></div>
              </div>
            </div>
          </div>

          {/* Service Icons */}
          <div className="relative">
            {/* Mobile carousel */}
            <div className="md:hidden relative">
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-12 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {tabServices[activeTab as keyof typeof tabServices].map((service, index) => (
                  <div key={index} className="text-center cursor-pointer flex-shrink-0 snap-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                      className="text-md mb-2 text-gray-100 tracking-wider whitespace-nowrap"
                    >
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {tabServices[activeTab as keyof typeof tabServices].map((service, index) => (
                <div key={index} className="text-center cursor-pointer">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border border-gray-300 flex items-center justify-center">
                    <img
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                    className="text-md mb-2 text-gray-100 tracking-wider"
                  >
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-7 bg-repeat-x"
        style={{
          backgroundImage:
            "url('https://www.crdbbank.co.tz/themes/theme-one/assets/images/patterns/white%20patterns.svg')",
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  )
}
