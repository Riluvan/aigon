import { useEffect } from 'react'

export default function PageHero({ label, title, subtitle, children }) {
  useEffect(() => {
    document.body.classList.add('inner-page')
    return () => document.body.classList.remove('inner-page')
  }, [])

  return (
    <section className="relative pt-24 md:pt-28 pb-10 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="ag-medium-sm text-muted-foreground mb-3">{label}</p>
        <h1 className="ag-h1 bg-gradient-to-br from-[#0068AB] to-[#0083D4] bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="ag-normal-base text-muted-foreground max-w-xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
