import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['home', 'Home'],
  ['about', 'About Us'],
  ['services', 'Services'],
  ['portfolio', 'Portfolio'],
  ['process', 'Our Process'],
  ['contact', 'Contact'],
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )
    links.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="/#home"
          className="brand-link"
          aria-label="AUREVIA INTERIORS home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/img/aurevia-logo.png"
            alt="AUREVIA INTERIORS — Design Beyond Imagination"
            width="1100"
            height="1047"
            className="brand-logo"
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([id, title]) => (
            <a
              href={`/#${id}`}
              key={id}
              className={active === id ? 'nav-link is-active' : 'nav-link'}
              aria-current={active === id ? 'location' : undefined}
            >
              {title}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="button button-outline header-cta">
          Let’s Talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          id="menu-toggle"
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([id, title], index) => (
            <a href={`/#${id}`} key={id} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {title}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
          <a className="mobile-phone" href="tel:+8801986894752">
            Call 01986894752
          </a>
        </nav>
      )}
    </header>
  )
}
