"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "https://www.crdbbank.co.tz/storage/app/media/Website%20Slider/2025%20Banners/Right%20banner%20sukuk.webp",
    title: "Pata Faida Halal",
    subtitle: "Wekeza kwenye hati fungani ya miaka 5 inayafuata Shariah ya Albarakah Sukuk",
    description: "",
    buttonText: "Pakua Fomu",
    color: "text-white",
    position: "left",
    showSukuk: true,
  },
  {
    id: 2,
    image: "https://www.crdbbank.co.tz/storage/app/media/Website%20Slider/2025%20Banners/GAMIFICATION-WEB.jpg",
    title: "Shinda hadi 200,000/-",
    subtitle: "",
    description: "Fufua akaunti, fanya miamala mitano au zaidi.",
    buttonText: "Jua Zaidi",
    showSukuk: false,
  },
  {
    id: 3,
    image: "https://www.crdbbank.co.tz/storage/app/media/Website%20Slider/2025%20Banners/ZOGO%20MCHONGO-WEB.jpg",
    title: "Michongo ya Elimu ya Fedha",
    subtitle: "Fuatilia episodes za Zogo Mchongo Season ya 3 kupitia YouTube channel yetu.",
    description: "",
    uppercase: true,
    buttonText: "Angalia kwa youtube",
    showSukuk: false,
  },
]

const forexData = [
  { currency: "AED", flag: "🇦🇪", buy: "646", sell: "726" },
  { currency: "EUR", flag: "🇪🇺", buy: "2769", sell: "3069" },
  { currency: "NOK", flag: "🇳🇴", buy: "228", sell: "258" },
  { currency: "OMR", flag: "🇴🇲", buy: "5687", sell: "5687" },
  { currency: "ZWD", flag: "🇿🇼", buy: "1", sell: "1" },
  { currency: "USD", flag: "🇺🇸", buy: "2380", sell: "2420" },
  { currency: "GBP", flag: "🇬🇧", buy: "3100", sell: "3200" },
  { currency: "KES", flag: "🇰🇪", buy: "18.5", sell: "19.2" },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              className="w-full h-full bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                className={`relative z-10 container mx-auto px-4 h-full flex justify-between ${slide.position === "left" ? "text-white top-12" : "text-green-900 items-center "}`}
              >
                <div className="max-w-2xl">
                  <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className="text-4xl font-bold mb-4 text-balance w-5/6 ">{slide.title}</h1>
                  <p
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                    className={` mb-6 text-pretty leading-relaxed ${slide.position === "left" ? "w-2/4 text-2xl top-0" : "text-2xl font-semibold"}`}
                  >
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <div className="flex items-center gap-2 mb-8">
                      <p style={{ fontFamily: "'Roboto', sans-serif" }} className="text-md text-pretty opacity-90">{slide.description}</p>
                    </div>
                  )}
                  <Button
                    size="lg"
                    style={{ fontFamily: "'Roboto', sans-serif", textTransform: slide.uppercase ? "uppercase" : "capitalize" }}
                    className={` px-8 py-3  font-bold ${slide.position === "left" ? "bg-white text-green-600" : "bg-green-600 text-white hover:bg-green-7--"}`}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full transition-colors"
        >
          <img
            src="https://www.crdbbank.co.tz/themes/theme-one/assets/images/icons/arrow_back_ios_green_24dp.svg"
            className="w-6 h-6"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full transition-colors"
        >
          <img
            src="https://www.crdbbank.co.tz/themes/theme-one/assets/images/icons/arrow_forward_ios.svg"
            className="w-6 h-6"
          />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      <div className="bg-white border-t border-gray-200 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 pr-6">
              <span className="text-sm font-semibold text-gray-700">FOREX MARKET</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex animate-step-marquee">
                {[...forexData, ...forexData, ...forexData].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center flex-shrink-0 whitespace-nowrap"
                  >
                    <span className="text-lg">{item.flag}</span>
                    <span className="font-semibold text-gray-800 ml-2">{item.currency}:</span>
                    <span className="text-sm text-gray-600 ml-1">Buy {item.buy}</span>
                    <span className="text-sm text-gray-600 ml-1">Sell {item.sell}</span>

                    {/* Pipe separator with equal spacing */}
                    <span className="text-gray-300 mx-3">|</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 pl-6">
              <button className="text-sm text-green-600 hover:text-green-700 font-semibold">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </div>


      <style>
        {`
        @keyframes step-marquee {
          0% {
            transform: translateX(0%);
          }
          8.33% {
            transform: translateX(-33.33%);
          }
          50%, 100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-step-marquee {
          animation: step-marquee 6s ease-out infinite;
          will-change: transform;
        }
        `}
      </style>
    </div>
  )
}
