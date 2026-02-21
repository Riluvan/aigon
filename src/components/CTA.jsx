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
        <h3 className="ag-h3 text-slate-800 mb-4">Engineer Your Energy System</h3>

        <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm md:text-base">
          Automated hybrid wind systems for real world energy efficient solutions.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 border border-border text-foreground ag-base-medium rounded-full hover:border-primary hover:text-primary btn-outline">
            Talk to Us
          </button>
          <button className="px-6 py-3 btn-gradient text-white ag-medium-sm rounded-full">
            Try it yourself
          </button>
        </div>
      </div>
    </section>
  )
}
