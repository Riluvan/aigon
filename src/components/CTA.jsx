export default function CTA() {
  return (
    <section
      id="about"
      className="py-20"
      style={{ background: 'linear-gradient(135deg, rgba(235,245,251,0.9) 0%, rgba(244,249,253,0.9) 50%, rgba(237,243,248,0.9) 100%)' }}
      aria-label="Call to action"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center" data-aos="fade-up">
        {/* h2: 48px / 48px */}
        <h2 className="text-slate-800 mb-4">Engineer Your Energy System</h2>

        <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm lg:text-base">
          Automated hybrid wind systems for real world energy efficient solutions.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-3.5 border border-foreground text-foreground font-semibold text-sm rounded-full hover:border-primary hover:text-primary transition-colors">
            Talk to Us
          </button>
          <button className="px-8 py-3.5 btn-gradient text-white font-semibold text-sm rounded-full transition-all">
            Try it yourself
          </button>
        </div>
      </div>
    </section>
  )
}
