import { useState } from 'react'
import { ArrowUpRight, Camera, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import {
  CONTACT_EMAIL,
  getWhatsAppUrl,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '../config/contact'
import SectionHeader from './SectionHeader'

const projectTypes = [
  'Sistema de gestión',
  'Aplicación web',
  'Automatización',
  'CRM',
  'Integración',
  'Otro',
]

const fieldClass =
  'mt-2 w-full rounded-lg border border-white/[0.09] bg-white/[0.025] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 hover:border-white/[0.15] focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10'

function Contact() {
  const [errors, setErrors] = useState({})
  const [isValidated, setIsValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const nextErrors = {}

    if (!data.name.trim()) nextErrors.name = 'Ingresá tu nombre.'
    if (!data.email.trim()) {
      nextErrors.email = 'Ingresá tu email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = 'Ingresá un email válido.'
    }
    if (!data.message.trim()) nextErrors.message = 'Contanos brevemente qué necesitás.'

    setErrors(nextErrors)
    setIsValidated(false)

    if (Object.keys(nextErrors).length === 0) {
      // No se envían datos: este punto queda preparado para conectar una API real.
      setIsValidated(true)
      form.reset()
    }
  }

  return (
    <section id="contacto" className="section-shell scroll-mt-16 border-t border-white/[0.05] bg-[#080b10]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos de tu proyecto"
            description="Contanos qué necesitás mejorar. Podemos ayudarte a definir la solución adecuada para tu empresa."
          />

          <div className="mt-9 space-y-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="contact-link group"
            >
              <span className="contact-icon"><MessageCircle size={18} /></span>
              <span>
                <span className="block text-xs text-slate-600">WhatsApp</span>
                <span className="mt-1 block text-sm text-slate-300">Iniciar una conversación</span>
              </span>
              <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-link group"
            >
              <span className="contact-icon"><Camera size={18} /></span>
              <span>
                <span className="block text-xs text-slate-600">Instagram</span>
                <span className="mt-1 block text-sm text-slate-300">@{INSTAGRAM_HANDLE}</span>
              </span>
              <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
            </a>
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link group">
                <span className="contact-icon"><Mail size={18} /></span>
                <span>
                  <span className="block text-xs text-slate-600">Email</span>
                  <span className="mt-1 block text-sm text-slate-300">{CONTACT_EMAIL}</span>
                </span>
                <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
              </a>
            ) : (
              <div className="contact-link">
                <span className="contact-icon"><Mail size={18} /></span>
                <span>
                  <span className="block text-xs text-slate-600">Email</span>
                  <span className="mt-1 block text-sm text-slate-500">Canal próximamente disponible</span>
                </span>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/[0.08] bg-[#0a0e14] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-xs font-medium text-slate-400">
              Nombre <span className="text-blue-400">*</span>
              <input name="name" type="text" autoComplete="name" placeholder="Tu nombre" className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span id="name-error" className="mt-1.5 block text-[11px] text-red-400">{errors.name}</span>}
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Empresa
              <input name="company" type="text" autoComplete="organization" placeholder="Nombre de tu empresa" className={fieldClass} />
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Email <span className="text-blue-400">*</span>
              <input name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span id="email-error" className="mt-1.5 block text-[11px] text-red-400">{errors.email}</span>}
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Teléfono
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Tu teléfono" className={fieldClass} />
            </label>
            <label className="block text-xs font-medium text-slate-400 sm:col-span-2">
              Tipo de proyecto
              <select name="projectType" defaultValue="" className={`${fieldClass} appearance-none`}>
                <option value="" disabled>Seleccioná una opción</option>
                {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label className="block text-xs font-medium text-slate-400 sm:col-span-2">
              Mensaje <span className="text-blue-400">*</span>
              <textarea name="message" rows="5" placeholder="Contanos sobre tu idea, proceso o necesidad..." className={`${fieldClass} resize-y`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <span id="message-error" className="mt-1.5 block text-[11px] text-red-400">{errors.message}</span>}
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[10px] leading-4 text-slate-600">Los campos marcados con * son obligatorios.</p>
            <button type="submit" className="button-primary justify-center px-5 py-3.5">
              Enviar consulta
              <Send size={15} aria-hidden="true" />
            </button>
          </div>

          {isValidated && (
            <div className="mt-5 flex gap-3 rounded-lg border border-emerald-400/15 bg-emerald-400/[0.06] p-3.5 text-xs leading-5 text-emerald-300" role="status">
              <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
              <p>¡Gracias! Validamos tu consulta, pero esta versión todavía no envía emails. Por ahora podés escribirnos por WhatsApp o Instagram.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
