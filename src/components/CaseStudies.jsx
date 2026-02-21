import { useState, useEffect, useRef } from 'react'
import img1 from '../assets/Rectangle.png'
import img2 from '../assets/Rectangle (1).png'
import img3 from '../assets/service-image10 1.png'

const cases = [
  {
    title: 'Infosys Grid-Direct Turbine',
    desc: 'Automated hybrid wind systems for real world energy efficient solutions.',
    img: img1,
    imgAlt: 'Infosys grid-direct wind turbine installation',
  },
  {
    title: 'IIT Palakkad Wind System',
    desc: 'A campus-scale wind energy deployment supporting clean power research and education infrastructure.',
    img: img2,
    imgAlt: 'IIT Palakkad campus wind system',
  },
  {
    title: 'DST Micro-Grid Project',
    desc: 'Department of Science & Technology funded rural micro-grid combining wind and solar for off-grid electrification.',
    img: img3,
    imgAlt: 'DST micro-grid project',
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

  return (
    <section className="bg-white/90 py-16">
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
            <p className="ag-semi-bold text-primary mb-4">CASE STUDIES</p>

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

            {/* h2: 48px / 48px */}
            <h2 className="ag-h2 text-foreground mb-4">{study.title}</h2>

            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
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
