import { Camera, Mail, MessageCircle, Phone } from 'lucide-react'
import Brand from './Brand'
import { useConsent } from './privacy/ConsentProvider'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  getPhoneUrl,
  getWhatsAppUrl,
  INSTAGRAM_URL,
  isPhoneConfigured,
  isWhatsAppConfigured,
} from '../config/contact'

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
  const { openSettings } = useConsent()
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
              {isPhoneConfigured && (
                <li>
                  <a href={getPhoneUrl()} className="footer-contact-link">
                    <Phone size={14} /> {CONTACT_PHONE}
                  </a>
                </li>
              )}
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <Camera size={14} /> Instagram
                </a>
              </li>
              {isWhatsAppConfigured && (
                <li>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="footer-contact-link">
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} P&P Software. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2"><a href="/privacidad" className="hover:text-white">Política de Privacidad</a><a href="/cookies" className="hover:text-white">Política de Cookies</a><a href="/terminos" className="hover:text-white">Términos y Condiciones</a><button type="button" onClick={openSettings} className="hover:text-white">Configurar privacidad</button></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
