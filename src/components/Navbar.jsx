import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand'

const navLinks = [
  ['Inicio', '#inicio'],
  ['Servicios', '#servicios'],
  ['Soluciones', '#soluciones'],
  ['Proyectos', '#proyectos'],
  ['Nosotros', '#nosotros'],
  ['Contacto', '#contacto'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-white/[0.07] bg-[#05070a]/85 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Navegación principal"
      >
        <Brand />

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-sm text-[13px] font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="button-primary hidden px-4 py-2.5 text-xs lg:inline-flex"
        >
          Contanos tu proyecto
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-200 transition-colors hover:border-white/20 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`overflow-hidden border-t border-white/[0.06] bg-[#05070a]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? 'max-h-[480px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="rounded-lg border-b border-white/[0.05] px-3 py-3.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="button-primary mt-4 justify-center"
          >
            Contanos tu proyecto
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
