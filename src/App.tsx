import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import WhatsNewSection from "@/components/whats-new-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"




export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <WelcomeSection />
        <WhatsNewSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
