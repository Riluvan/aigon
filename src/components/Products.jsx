import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import windTurbineImg from '../assets/Wind Turbine.webp'

const products = [
  {
    subtitle: 'Small Wind Turbine – 1kW',
    model: 'AGN-1K',
    desc: 'Compact turbine engineered for low-wind coastal and rural environments. Hybrid-ready with 12/24/48/96V output. Start-up wind speed of just 1.8 m/s.',
    img: windTurbineImg,
    imgAlt: 'AGN-1K small wind turbine installation',
  },
  {
    subtitle: 'Compact Wind Turbine – 3kW',
    model: 'AGN-3K',
    desc: 'Versatile off-grid and on-grid turbine for institutions and commercial sites. Supports 48/96V and grid-tie configurations with hybrid-ready architecture.',
    img: windTurbineImg,
    imgAlt: 'AGN-3K compact wind turbine in field',
  },
  {
    subtitle: 'Advanced Wind Turbine – 5kW',
    model: 'AGN-5K',
    desc: 'High-capacity turbine for industries, corporates, and large campuses. Delivers 5000W with 3 m blade length, supporting both off-grid and on-grid modes.',
    img: windTurbineImg,
    imgAlt: 'AGN-5K advanced wind turbine row',
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

  const pauseTimer = () => clearInterval(intervalRef.current)

  return (
    <section id="products" className="bg-white py-12 overflow-hidden" onMouseEnter={pauseTimer} onMouseLeave={startTimer}>
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
            <div className="flex items-center gap-2 mb-4" role="tablist" aria-label="Products">
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

            <h4 className="ag-h4 text-muted-foreground mb-1">{product.subtitle}</h4>
            <h2 className="ag-h2 text-foreground mb-4">{product.model}</h2>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              {product.desc}
            </p>

            <Link
              to="/products"
              className="px-6 py-3 border border-border text-foreground ag-base-medium rounded-full hover:border-primary hover:text-primary btn-outline"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
