import Navbar from '@/components/landing/navbar/Navbar'
import Hero from '@/components/landing/hero/Hero'
import Features from '@/components/landing/features/Features'
import HowItWorks from '@/components/landing/how-it-works/HowItWorks'
import CTABanner from '@/components/landing/CTABanner'
import Footer from '@/components/landing/footer/Footer'

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
