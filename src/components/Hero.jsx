import turbineLeg from '../assets/turbain-leg.png'
import turbineFan from '../assets/turbain-fan.png'
import arrowDown from '../assets/arrow-down.svg'
import arrowWhite from '../assets/arrow-white.svg'

export default function Hero() {
  return (
    <section
      className="relative md:h-screen overflow-hidden pt-16"
      aria-label="Hero — Distributed Clean Power"
    >
      {/* Soft blue radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[65%] h-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 90% 20%, rgba(0,131,212,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Layout wrapper — column on mobile, row on md+ */}
      <div className="flex flex-col h-full md:flex-row md:items-center md:min-h-[calc(100vh-4rem)]">

        {/* Mobile turbine — top, only below md */}
        <div
          className="md:hidden flex justify-center pt-6 pb-2 w-full"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="relative w-[280px] h-[280px]">
            <img
              src={turbineLeg}
              alt="Wind turbine"
              className="absolute bottom-0 w-[14px] h-[148px] object-fill"
              style={{ left: '43.5%' }}
              loading="eager"
            />
            <div
              className="absolute z-10"
              style={{ top: '132px', left: '10%', transform: 'translate(-10%, -50%)' }}
            >
              <img
                src={turbineFan}
                alt=""
                aria-hidden="true"
                className="fan-spin block w-[264px] h-[264px]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-10 md:py-20 lg:py-0">
          <div className="w-full md:w-1/2 z-10" data-aos="fade-right" data-aos-delay="100">
            <h5 className="ag-h5 text-foreground mb-4">
              Engineering the future of
            </h5>

            <h1 className="ag-h1 mb-4 bg-gradient-to-br from-[#0068AB] to-[#0083D4] bg-clip-text text-transparent">
              Distributed Clean <br className="hidden md:block" />Power.
            </h1>

            <p className="ag-normal-lg text-muted-foreground mb-6 max-w-[32rem]">
              Automated micro hybrid wind energy systems engineered for
              low-wind, grid-interactive, and off-grid environments.
            </p>

            <a
              href="#products"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 btn-gradient text-white ag-medium rounded-full transition-all"
            >
              Explore
              <img src={arrowWhite} alt="" aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>

      </div>

      {/* Scroll arrow — always anchored 48px from bottom, aligned to content container */}
      <div className="md:absolute bottom-12 left-0 right-0 z-10 pointer-events-none mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <a
            href="#features"
            aria-label="Scroll to features"
            className="arrow-scroll-wrap flex items-center justify-center w-11 h-11 overflow-hidden pointer-events-auto"
          >
            <img src={arrowDown} alt="" aria-hidden="true" className="arrow-scroll" />
          </a>
        </div>
      </div>

      {/* Tablet + Desktop turbine — absolute right, vertically centered, md and up */}
      <div
        className="hidden md:block absolute right-0 z-0 md:top-[20%] lg:top-[15%]"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="relative md:w-[420px] md:h-[420px] lg:w-[680px] lg:h-[680px]">

          {/* Leg */}
          <img
            src={turbineLeg}
            alt="Wind turbine"
            className="absolute bottom-0 object-fill md:w-[20px] md:h-[222px] lg:w-[32px] lg:h-[360px]"
            style={{ left: '43.5%' }}
            loading="eager"
          />

          {/* Fan */}
          <div
            className="absolute z-10 md:top-[198px] lg:top-[320px]"
            style={{ left: '10%', transform: 'translate(-10%, -50%)' }}
          >
            <img
              src={turbineFan}
              alt=""
              aria-hidden="true"
              className="fan-spin block md:w-[396px] md:h-[396px] lg:w-[640px] lg:h-[640px]"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
