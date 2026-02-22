import { useState, useEffect, useRef } from 'react'
import img1 from '../assets/Rectangle.png'
import imgControllers from '../assets/product-hybrid-controllers.webp'
import imgSolar from '../assets/product-solar-modules.webp'
import imgLoggers from '../assets/product-data-loggers.webp'
import imgGrid from '../assets/product-grid-interactive.webp'

const products = [
  {
    title: 'Smart Wind Turbines',
    desc: 'Compact horizontal and vertical axis turbines engineered for rooftop, campus, telecom, and industrial applications, with modular and recyclable construction.',
    img: img1,
    imgAlt: 'Smart wind turbines on a rooftop building',
  },
  {
    title: 'Hybrid Controllers',
    desc: 'Universal hybrid charge controllers that manage multiple energy sources with intelligent MPPT algorithms for maximum efficiency.',
    img: imgControllers,
    imgAlt: 'Hybrid charge controllers',
  },
  {
    title: 'Solar Modules',
    desc: 'High-efficiency mono-crystalline solar modules designed for integration with wind systems in hybrid configurations.',
    img: imgSolar,
    imgAlt: 'Solar modules',
  },
  {
    title: 'Data Loggers',
    desc: 'AI-enabled data logging systems that provide real-time monitoring, analytics, and remote management for energy installations.',
    img: imgLoggers,
    imgAlt: 'Data loggers for energy monitoring',
  },
  {
    title: 'Grid-Interactive Systems',
    desc: 'Complete grid-direct solutions combining wind turbines with grid-tie inverters for seamless power export and net metering.',
    img: imgGrid,
    imgAlt: 'Grid-interactive wind-solar system',
  },
]

export default function Products() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)
  const product = products[active]

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % products.length)
    }, 3000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleDotClick = (i) => {
    setActive(i)
    startTimer()
  }

  return (
    <section id="products" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Product image */}
          <div className="rounded-2xl overflow-hidden h-72 md:h-80" data-aos="fade-right">
            <img
              src={product.img}
              alt={product.imgAlt}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <p className="ag-semi-bold text-primary mb-6">PRODUCTS</p>

            {/* Dots */}
            <div className="flex items-center gap-2 mb-6" role="tablist" aria-label="Products">
              {products.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Product ${i + 1}`}
                  onClick={() => handleDotClick(i)}
                  className={`slider-dot h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-8 bg-primary' : 'w-4 bg-border'
                  }`}
                />
              ))}
            </div>

            {/* h2: 48px / 48px */}
            <h2 className="ag-h2 text-foreground mb-4">{product.title}</h2>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              {product.desc}
            </p>

            <button className="px-6 py-3 border border-border text-foreground ag-base-medium rounded-full hover:border-primary hover:text-primary btn-outline">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
