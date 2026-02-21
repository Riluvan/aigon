import bannerImg from '../assets/service-image10 1.png'
import fanIcon from '../assets/Fan.svg'
import powerIcon from '../assets/power.svg'
import plugIcon from '../assets/Plug.svg'
import satelliteDishIcon from '../assets/SatelliteDish.svg'
import graduationCapIcon from '../assets/GraduationCap.svg'
import leafIcon from '../assets/Leaf.svg'

const featureCards = [
  {
    title: 'Wind Optimized\nTurbine Engineering',
    desc: 'Aerodynamically optimized rotors designed for low-wind urban and rooftop environments with modular, recyclable construction.',
    icon: (
      <img src={fanIcon} alt="" aria-hidden="true" className="w-6 h-6" />
    ),
  },
  {
    title: 'Grid-Direct Hybrid\nRenewable Systems',
    desc: 'Export power through standard grid-tie inverters combining wind, solar, and thermal energy sources.',
    icon: (
      <img src={powerIcon} alt="" aria-hidden="true" className="w-6 h-6" />
    ),
  },
  {
    title: 'Universal Hybrid\nCharge Controllers',
    desc: 'Intelligent MPPT charge controllers that manage wind, solar, and battery banks for maximum system efficiency.',
    icon: (
      <img src={plugIcon} alt="" aria-hidden="true" className="w-6 h-6" />
    ),
  },
  {
    title: 'AI-Enabled\nData Loggers',
    desc: 'Real-time monitoring and remote analytics for energy installations with AI-driven insights and predictive alerts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#0068AB" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const engineeringFeatures = [
  {
    label: 'Telecom Towers',
    icon: (
      <img src={satelliteDishIcon} alt="" aria-hidden="true" className="w-full h-full" />
    ),
  },
  {
    label: 'Smart Campus Applications',
    icon: (
      <img src={graduationCapIcon} alt="" aria-hidden="true" className="w-full h-full" />
    ),
  },
  {
    label: 'Industrial & Commercial Facilities',
    icon: (
      <img src={fanIcon} alt="" aria-hidden="true" className="w-full h-full" />
    ),
  },
  {
    label: 'Renewable Micro-Grids in rural areas',
    icon: (
      <img src={leafIcon} alt="" aria-hidden="true" className="w-full h-full" />
    ),
  },
  {
    label: 'EV Charging Infrastructures',
    icon: (
      <img src={plugIcon} alt="" aria-hidden="true" className="w-full h-full" />
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-muted/90 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {featureCards.map((card, i) => (
            <article
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-[0_4px_24px_rgba(0,131,212,0.14)] hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {/* Icon pill — fills with primary on hover, icon turns white */}
              <div className="inline-flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                {card.icon}
              </div>

              <p className="ag-h5 text-foreground whitespace-pre-line">
                {card.title}
              </p>

              {/* Description — collapses to 0 height, expands only on THIS card's hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                <div className="overflow-hidden">
                  <p className="ag-normal text-muted-foreground pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {card.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Offshore Wind Farm Banner — real photo */}
        <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden" data-aos="zoom-in">
          <img
            src={bannerImg}
            alt="Offshore wind farm — Aigon energy solutions"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Designs Custom Engineering Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-4">
          <div data-aos="fade-right">
            {/* h2: 48px / 48px */}
            <h2 className="ag-h2 text-foreground mb-4">
              Designs Custom<br />Engineering Solution
            </h2>
            <p className="ag-normal-base text-muted-foreground max-w-sm">
              Integrates engineering excellence with intelligent energy management to deliver
              reliable, distributed, clean power solutions for various industries.
            </p>
          </div>

          <ul className="space-y-4 pt-2 list-none p-0 m-0" data-aos="fade-left" data-aos-delay="150">
            {engineeringFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 text-primary">{f.icon}</span>
                <span className="ag-semi-bold text-foreground">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
