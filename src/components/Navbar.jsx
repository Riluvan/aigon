import { useState, useEffect, useRef } from 'react'
import logo from '../assets/Logo.png'

const navLinks = [
  { label: 'Home',     href: '#'          },
  { label: 'Products', href: '#products'  },
  { label: 'Services', href: '#services'  },
  { label: 'About',    href: '#about'     },
  { label: 'Connect',  href: '#connect'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const isAtTop = currentY <= 0

      setAtTop(isAtTop)

      if (isAtTop) {
        setVisible(true)
      } else if (currentY > lastY.current) {
        setVisible(false)
        setMenuOpen(false)
      } else {
        setVisible(true)
      }
      lastY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          atTop
            ? 'bg-transparent border-b border-transparent'
            : 'bg-white/70 backdrop-blur-md border-b border-border'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" aria-label="Aigon — Home" className="flex-shrink-0">
              <img src={logo} alt="Aigon" className="h-7 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-foreground ${
                    link.label === 'Home'
                      ? 'ag-semi-bold text-foreground relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                      : 'ag-medium text-muted-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#"
              className="hidden md:inline-flex items-center px-5 py-2.5 btn-gradient text-white ag-medium-sm rounded-full"
            >
              Try it yourself
            </a>

            {/* Mobile toggle — hamburger / X */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                className="w-5 h-5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden overflow-hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
          <img src={logo} alt="Aigon" className="h-7 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-6 gap-1 flex-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full py-3 px-4 rounded-xl transition-colors ${
                link.label === 'Home'
                  ? 'ag-semi-bold text-primary bg-primary/5'
                  : 'ag-medium text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8 flex-shrink-0">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full px-5 py-3 btn-gradient text-white ag-medium-sm rounded-full"
          >
            Try it yourself
          </a>
        </div>
      </div>
    </>
  )
}
