import turbineLeg from '../assets/turbain-leg.png'
import turbineFan from '../assets/turbain-fan.png'
import arrowDown from '../assets/arrow-down.svg'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero — Distributed Clean Power"
    >
      {/* Soft blue radial glow top-right (replaces Top-BG wave) */}
      <div
        className="absolute top-0 right-0 w-[65%] h-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 90% 20%, rgba(0,131,212,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Text — constrained to left half */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex items-center min-h-[calc(100vh-4rem)] py-20 lg:py-0">
          <div className="w-full lg:w-1/2 z-10" data-aos="fade-right" data-aos-delay="100">
            <p className="ag-h5 text-muted-foreground mb-3">
              Engineering the future of
            </p>

            <h1 className="mb-6 bg-gradient-to-br from-[#0068AB] to-[#0083D4] bg-clip-text text-transparent">
              Distributed Clean<br />Power.
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Automated micro hybrid wind energy systems engineered for
              low-wind, grid-interactive, and off-grid environments.
            </p>

            <a
              href="#products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 btn-gradient text-white font-semibold rounded-full text-sm transition-all"
            >
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="mt-14">
              <a
                href="#features"
                aria-label="Scroll to features"
                className="flex items-center w-11 h-11 transition-all group"
              >
                <img
                  src={arrowDown}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Turbine — absolutely positioned to right edge of section, free from grid constraints.
          Layout math:
            Fan  640×640 → half-height = 320px (hub / rotation center)
            Leg  360px tall, 32px wide  → top of leg = hub center
            Container height = 320 + 360 = 680px
            Fan center Y from container top = 680 − 360 = 320px
      */}
      <div
        className="hidden lg:block absolute right-0 bottom-0 z-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="relative w-[680px] h-[680px]">

          {/* Leg — 360×32px, anchored to bottom */}
          <img
            src={turbineLeg}
            alt="Wind turbine"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32px] h-[360px] object-fill"
            loading="eager"
          />

          {/* Fan — 640×640px, hub center at Y=320px */}
          <div
            className="absolute left-1/2 z-10"
            style={{ top: '320px', transform: 'translate(-50%, -50%)' }}
          >
            <img
              src={turbineFan}
              alt=""
              aria-hidden="true"
              className="fan-spin block w-[640px] h-[640px]"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
