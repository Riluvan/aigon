import { Link } from 'react-router-dom'

export default function PageCTA() {
  return (
    <section className="py-16 bg-muted/60" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center" data-aos="fade-up">
        <h2 className="ag-h2 text-slate-800 mb-4">Engineer Your Energy System</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto ag-normal-base">
          Automated hybrid wind systems for real world energy efficient solutions.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="px-7 py-3 border border-border text-foreground ag-base-medium rounded-full hover:border-primary hover:text-primary btn-outline"
          >
            Talk to Us
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 btn-gradient text-white ag-medium-sm rounded-full"
          >
            Try it yourself
          </Link>
        </div>
      </div>
    </section>
  )
}
