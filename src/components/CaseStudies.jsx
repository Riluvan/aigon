import { useState, useEffect, useRef } from 'react'
import imgVagamon  from '../assets/Slider_02.webp'
import imgInfosys  from '../assets/Pic_02.webp'
import imgSacredH  from '../assets/SH02.webp'

const cases = [
  {
    title: '100% Off-Grid Hybrid Microgrid with Wind-Solar-Storage-DG',
    desc: 'Located at Mountain Villa Resorts, Vagamon, Kerala — demonstrates a scalable off-grid microgrid model for remote resorts & institutions. Integrates wind, solar, storage, and DG into a single resilient system. Evaluates continuous 24-hour operation under real site conditions & monitors wind/solar generation, battery SOC, load demand, and DG run-hours.',
    img: imgVagamon,
    imgAlt: 'Off-grid hybrid microgrid at Mountain Villa Resorts, Vagamon, Kerala',
  },
  {
    title: 'Grid-Direct Standalone Wind Turbine Project at INFOSYS Ltd, Trivandrum',
    desc: 'Demonstrates viable grid-interactive small wind turbine for commercial campuses. Approved by CEIG, Govt. of Kerala. Monitors energy export to grid under real wind & grid conditions with battery-less architecture.',
    img: imgInfosys,
    imgAlt: 'Grid-direct standalone wind turbine at Infosys Trivandrum',
  },
  {
    title: 'Parallel Wind Microgeneration Study',
    desc: 'Located at Sacred Hearts College, Cochin, Kerala. Validates parallel small-wind integration in off-grid campus-friendly systems and generates rare local wind performance data for Kerala.',
    img: imgSacredH,
    imgAlt: 'Parallel wind microgeneration study at Sacred Hearts College, Cochin',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)
  const study = cases[active]

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % cases.length)
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
    <section className="py-12 overflow-hidden" onMouseEnter={pauseTimer} onMouseLeave={startTimer}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Case study photo */}
          <div className="rounded-2xl overflow-hidden h-72 md:h-80" data-aos="fade-right">
            <img
              src={study.img}
              alt={study.imgAlt}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <p className="ag-semi-bold text-primary mb-6">CASE STUDIES</p>

            {/* Dots */}
            <div className="flex items-center gap-2 mb-6" role="tablist" aria-label="Case studies">
              {cases.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Case study ${i + 1}`}
                  onClick={() => handleDotClick(i)}
                  className={`slider-dot h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-8 bg-primary' : 'w-4 bg-border'
                  }`}
                />
              ))}
            </div>

            <h3 className="ag-h3 text-foreground mb-4">{study.title}</h3>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              {study.desc}
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
