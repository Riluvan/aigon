const edges = [
  {
    num: '1',
    title: 'Wind Capture\n(Rotor & Fin Logic)',
    desc: 'Aerodynamically optimized rotors capture energy efficiently under low wind speeds and turbulent urban flow conditions.',
  },
  {
    num: '2',
    title: 'Multi-Stage\npower stabilization',
    desc: 'Maximum Power Point Tracking, and Management of excess energy through dynamic dump-load control.',
  },
  {
    num: '3',
    title: 'Unified Hybrid\nDC Bus',
    desc: 'Multiple renewable sources converge into a single intelligent DC architecture enabling flexible system scaling.',
  },
  {
    num: '4',
    title: 'Grid / Load\nInterface',
    desc: 'Energy is intelligently exported to the grid, stored, or supplied to loads based on system priorities and grid availability.',
  },
]

export default function OurEdge() {
  return (
    <section id="services" className="bg-muted/90 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">OUR EDGE</p>
          {/* h2: 48px / 48px */}
          <h2 className="text-slate-800 mb-4">Smarter Energy, by Design</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm lg:text-base">
            Automated hybrid wind systems for real world energy efficient solutions.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {edges.map((edge) => (
            <div key={edge.num} className="text-center" data-aos="fade-up" data-aos-delay={parseInt(edge.num) * 100}>
              <div
                className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-5"
                aria-hidden="true"
              >
                {edge.num}
              </div>
              {/* h5: 24px / 32px */}
              <h5 className="text-slate-800 mb-3 whitespace-pre-line">{edge.title}</h5>
              <p className="text-sm text-slate-500 leading-relaxed">{edge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
