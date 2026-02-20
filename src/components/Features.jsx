import bannerImg from '../assets/service-image10 1.png'

const featureCards = [
  {
    title: 'Wind Optimized\nTurbine Engineering',
    desc: 'Aerodynamically optimized rotors designed for low-wind urban and rooftop environments with modular, recyclable construction.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v3.5M12 18.5V22M5.05 5.05l2.47 2.47M16.48 16.48l2.47 2.47M2 12h3.5M18.5 12H22M5.05 18.95l2.47-2.47M16.48 7.52l2.47-2.47" />
      </svg>
    ),
  },
  {
    title: 'Grid-Direct Hybrid\nRenewable Systems',
    desc: 'Export power through standard grid-tie inverters combining wind, solar, and thermal energy sources.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Universal Hybrid\nCharge Controllers',
    desc: 'Intelligent MPPT charge controllers that manage wind, solar, and battery banks for maximum system efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7V3M17 7V3M6 11h12a1 1 0 011 1v2a6 6 0 01-6 6h0a6 6 0 01-6-6v-2a1 1 0 011-1zM12 20v2" />
      </svg>
    ),
  },
  {
    title: 'AI-Enabled\nData Loggers',
    desc: 'Real-time monitoring and remote analytics for energy installations with AI-driven insights and predictive alerts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const engineeringFeatures = [
  {
    label: 'Telecom Towers',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    label: 'Smart Campus Applications',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'Industrial & Commercial Facilities',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Renewable Micro-Grids in rural areas',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'EV Charging Infrastructures',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7zM19 7l-1-3M21 11l2-1M15 3l1-2" />
      </svg>
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
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_4px_14px_rgba(0,131,212,0.35)]">
                {card.icon}
              </div>

              <p className="text-sm font-semibold text-foreground leading-snug whitespace-pre-line">
                {card.title}
              </p>

              {/* Description — collapses to 0 height, expands only on THIS card's hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                <div className="overflow-hidden">
                  <p className="text-xs text-muted-foreground leading-relaxed pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
            <h2 className="text-foreground mb-4">
              Designs Custom<br />Engineering Solution
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
              Integrates engineering excellence with intelligent energy management to deliver
              reliable, distributed, clean power solutions for various industries.
            </p>
          </div>

          <ul className="space-y-4 pt-2 list-none p-0 m-0" data-aos="fade-left" data-aos-delay="150">
            {engineeringFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 text-primary">{f.icon}</span>
                <span className="text-sm text-foreground">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
