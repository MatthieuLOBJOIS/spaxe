import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero/Hero'
import Features from '@/components/landing/Features/Features'
import HowItWorks from '@/components/landing/HowItWorks/HowItWorks'
import CTABanner from '@/components/landing/CTABanner'
import Footer from '@/components/landing/Footer/Footer'

// Landing page — entry point of the application
export default function HomePage() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTABanner />
      <Footer />
    </div>
  )
}
