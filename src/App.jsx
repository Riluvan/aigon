import { useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import OurEdge from './components/OurEdge'
import TheStack from './components/TheStack'
import CaseStudies from './components/CaseStudies'
import ClientLogos from './components/ClientLogos'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 })
  }, [])

  return (
    <HelmetProvider>
      {/* Page-level SEO (supplements index.html meta) */}
      <Helmet>
        <title>Aigon – Engineering the Future of Distributed Clean Power</title>
        <meta
          name="description"
          content="Automated micro hybrid wind energy systems engineered for low-wind, grid-interactive, and off-grid environments. Aigon Mechatronics – India's clean energy innovator."
        />
      </Helmet>

      {/* Skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <Products />
        <OurEdge />
        <TheStack />
        <CaseStudies />
        <ClientLogos />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </HelmetProvider>
  )
}
