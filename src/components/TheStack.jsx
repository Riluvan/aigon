import stackImg from '../assets/wind-turbine-solar.jpg'

export default function TheStack() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Content — second on mobile, first on md+ */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <p className="ag-semi-bold text-primary mb-6">THE STACK</p>

            <h3 className="ag-h3 text-foreground mb-4">
              Wind. Solar. Intelligence.
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Automated Wind-Solar Hybrid systems for real world.
            </p>

            <button className="px-6 py-3 border border-border text-foreground ag-base-medium rounded-full hover:border-primary hover:text-primary btn-outline">
              Learn more
            </button>
          </div>

          {/* Right: Wind-Solar photo — first on mobile, second on md+ */}
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden h-72 md:h-52" data-aos="fade-left" data-aos-delay="150">
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
