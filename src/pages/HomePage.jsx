import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import CTASection from '../sections/CTASection'

export default function HomePage() {
  return (
    <div className="all-wrap">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
