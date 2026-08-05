import { Camera, Mail, MessageCircle } from 'lucide-react'
import Brand from './Brand'
import { CONTACT_EMAIL, getWhatsAppUrl, INSTAGRAM_URL } from '../config/contact'

const footerColumns = [
  {
    title: 'Servicios',
    links: [
      ['Software a medida', '#servicios'],
      ['Sistemas de gestión', '#servicios'],
      ['Automatización', '#servicios'],
      ['Aplicaciones web', '#servicios'],
    ],
  },
  {
    title: 'Empresa',
    links: [
      ['Nosotros', '#nosotros'],
      ['Proyectos', '#proyectos'],
      ['Contacto', '#contacto'],
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#05070a]">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">Software diseñado para hacer crecer empresas.</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="rounded-sm text-xs text-slate-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Contacto</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="footer-contact-link">
                  <Camera size={14} /> Instagram
                </a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="footer-contact-link">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                {CONTACT_EMAIL ? (
                  <a href={`mailto:${CONTACT_EMAIL}`} className="footer-contact-link">
                    <Mail size={14} /> Email
                  </a>
                ) : (
                  <span className="footer-contact-link cursor-default opacity-60"><Mail size={14} /> Email próximamente</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PYP Software. Todos los derechos reservados.</p>
          <p>Software · Automatización · Sistemas de gestión</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
