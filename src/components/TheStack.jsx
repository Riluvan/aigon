import stackImg from '../assets/Rectangle (1).png'

export default function TheStack() {
  return (
    <section className="bg-white/90 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div data-aos="fade-right">
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-5">THE STACK</p>

            {/* h1: 60px / 60px — large bold display */}
            <h1 className="text-foreground mb-5">
              Wind. Solar.<br />Intelligence.
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">
              Automated Wind-Solar Hybrid systems for real world.
            </p>

            <button className="px-6 py-3 border border-foreground text-foreground text-sm font-semibold rounded-full hover:border-primary hover:text-primary transition-colors">
              Learn more
            </button>
          </div>

          {/* Right: Wind-Solar photo */}
          <div className="rounded-2xl overflow-hidden h-72 lg:h-80" data-aos="fade-left" data-aos-delay="150">
            <img
              src={stackImg}
              alt="Wind-Solar hybrid system in a desert environment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
