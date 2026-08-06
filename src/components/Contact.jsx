import { useRef, useState } from 'react'
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  getPhoneUrl,
  getWhatsAppUrl,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  isPhoneConfigured,
  isWhatsAppConfigured,
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
  'mt-2 w-full rounded-lg border border-white/[0.09] bg-white/[0.025] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 hover:border-white/[0.15] focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60'

function getFormValues(form) {
  const data = Object.fromEntries(new FormData(form))
  const clean = (value) => String(value ?? '').trim()

  return {
    nombre: clean(data.nombre),
    empresa: clean(data.empresa),
    email: clean(data.email),
    telefono: clean(data.telefono),
    tipoProyecto: clean(data.tipoProyecto),
    mensaje: clean(data.mensaje),
    website: clean(data.website),
  }
}

function validateForm(values) {
  const nextErrors = {}

  if (!values.nombre) nextErrors.nombre = 'Ingresá tu nombre.'
  else if (values.nombre.length > 100) nextErrors.nombre = 'El nombre no puede superar los 100 caracteres.'

  if (values.empresa.length > 150) nextErrors.empresa = 'La empresa no puede superar los 150 caracteres.'

  if (!values.email) nextErrors.email = 'Ingresá tu email.'
  else if (values.email.length > 200) nextErrors.email = 'El email no puede superar los 200 caracteres.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Ingresá un email válido.'

  if (values.telefono.length > 50) nextErrors.telefono = 'El teléfono no puede superar los 50 caracteres.'
  if (values.tipoProyecto.length > 100) nextErrors.tipoProyecto = 'El tipo de proyecto no puede superar los 100 caracteres.'

  if (!values.mensaje) nextErrors.mensaje = 'Contanos brevemente qué necesitás.'
  else if (values.mensaje.length > 3000) nextErrors.mensaje = 'El mensaje no puede superar los 3000 caracteres.'

  return nextErrors
}

function buildWhatsAppMessage(values) {
  const lines = [
    'Hola PYP Software 👋',
    '',
    'Quisiera realizar una consulta por un desarrollo.',
  ]
  const contactDetails = [
    values.nombre && `Nombre: ${values.nombre}`,
    values.empresa && `Empresa: ${values.empresa}`,
    values.email && `Email: ${values.email}`,
    values.telefono && `Teléfono: ${values.telefono}`,
  ].filter(Boolean)

  if (contactDetails.length) lines.push('', ...contactDetails)
  if (values.tipoProyecto) lines.push('', 'Tipo de proyecto:', values.tipoProyecto)
  if (values.mensaje) lines.push('', 'Consulta:', values.mensaje)

  return lines.join('\n')
}

function FieldError({ id, children }) {
  if (!children) return null

  return <span id={id} className="mt-1.5 block text-[11px] text-red-400">{children}</span>
}

function Contact() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const clearResultMessage = () => {
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'loading') return

    const form = event.currentTarget
    const values = getFormValues(form)
    const nextErrors = validateForm(values)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      const firstInvalidField = form.elements.namedItem(Object.keys(nextErrors)[0])
      firstInvalidField?.focus()
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.ok) throw new Error('Contact request failed')

      form.reset()
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const handleWhatsApp = () => {
    if (!isWhatsAppConfigured || !formRef.current) return

    const message = buildWhatsAppMessage(getFormValues(formRef.current))
    const url = getWhatsAppUrl(message)

    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  const isLoading = status === 'loading'

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
            {isPhoneConfigured && (
              <a href={getPhoneUrl()} className="contact-link group">
                <span className="contact-icon"><Phone size={18} /></span>
                <span>
                  <span className="block text-xs text-slate-600">Teléfono</span>
                  <span className="mt-1 block text-sm text-slate-300">{CONTACT_PHONE}</span>
                </span>
                <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
              </a>
            )}
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link group">
              <span className="contact-icon"><Mail size={18} /></span>
              <span>
                <span className="block text-xs text-slate-600">Email</span>
                <span className="mt-1 block text-sm text-slate-300">{CONTACT_EMAIL}</span>
              </span>
              <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group"
            >
              <span className="contact-icon"><Camera size={18} /></span>
              <span>
                <span className="block text-xs text-slate-600">Instagram</span>
                <span className="mt-1 block text-sm text-slate-300">@{INSTAGRAM_HANDLE}</span>
              </span>
              <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
            </a>
            {isWhatsAppConfigured && (
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group"
              >
                <span className="contact-icon"><MessageCircle size={18} /></span>
                <span>
                  <span className="block text-xs text-slate-600">WhatsApp</span>
                  <span className="mt-1 block text-sm text-slate-300">Iniciar una conversación</span>
                </span>
                <ArrowUpRight size={15} className="ml-auto text-slate-700 transition-colors group-hover:text-blue-400" />
              </a>
            )}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onInput={clearResultMessage}
          noValidate
          className="relative rounded-2xl border border-white/[0.08] bg-[#0a0e14] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-8"
        >
          <div aria-hidden="true" className="absolute -left-[10000px] top-auto size-px overflow-hidden">
            <label htmlFor="website">Sitio web</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-xs font-medium text-slate-400">
              Nombre <span className="text-blue-400">*</span>
              <input name="nombre" type="text" maxLength="100" autoComplete="name" placeholder="Tu nombre" disabled={isLoading} className={fieldClass} aria-invalid={Boolean(errors.nombre)} aria-describedby={errors.nombre ? 'nombre-error' : undefined} />
              <FieldError id="nombre-error">{errors.nombre}</FieldError>
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Empresa
              <input name="empresa" type="text" maxLength="150" autoComplete="organization" placeholder="Nombre de tu empresa" disabled={isLoading} className={fieldClass} aria-invalid={Boolean(errors.empresa)} aria-describedby={errors.empresa ? 'empresa-error' : undefined} />
              <FieldError id="empresa-error">{errors.empresa}</FieldError>
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Email <span className="text-blue-400">*</span>
              <input name="email" type="email" maxLength="200" autoComplete="email" placeholder="nombre@empresa.com" disabled={isLoading} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              <FieldError id="email-error">{errors.email}</FieldError>
            </label>
            <label className="block text-xs font-medium text-slate-400">
              Teléfono
              <input name="telefono" type="tel" maxLength="50" inputMode="tel" autoComplete="tel" placeholder="Tu teléfono" disabled={isLoading} className={fieldClass} aria-invalid={Boolean(errors.telefono)} aria-describedby={errors.telefono ? 'telefono-error' : undefined} />
              <FieldError id="telefono-error">{errors.telefono}</FieldError>
            </label>
            <label className="block text-xs font-medium text-slate-400 sm:col-span-2">
              Tipo de proyecto
              <select name="tipoProyecto" defaultValue="" disabled={isLoading} className={`${fieldClass} appearance-none`}>
                <option value="" disabled>Seleccioná una opción</option>
                {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label className="block text-xs font-medium text-slate-400 sm:col-span-2">
              Mensaje <span className="text-blue-400">*</span>
              <textarea name="mensaje" rows="5" maxLength="3000" placeholder="Contanos sobre tu idea, proceso o necesidad..." disabled={isLoading} className={`${fieldClass} resize-y`} aria-invalid={Boolean(errors.mensaje)} aria-describedby={errors.mensaje ? 'mensaje-error' : undefined} />
              <FieldError id="mensaje-error">{errors.mensaje}</FieldError>
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <p className="text-[10px] leading-4 text-slate-600">Los campos marcados con * son obligatorios.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              {isWhatsAppConfigured && (
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={isLoading}
                  className="button-secondary justify-center px-5 py-3.5 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Consultar por WhatsApp
                </button>
              )}
              <button type="submit" disabled={isLoading} className="button-primary min-w-40 justify-center px-5 py-3.5 disabled:cursor-wait disabled:opacity-70">
                {isLoading ? (
                  <><LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> Enviando...</>
                ) : (
                  <>Enviar consulta <Send size={15} aria-hidden="true" /></>
                )}
              </button>
            </div>
          </div>

          <div className="mt-5" aria-live="polite" aria-atomic="true">
            {status === 'success' && (
              <div className="flex gap-3 rounded-lg border border-emerald-400/15 bg-emerald-400/[0.06] p-3.5 text-xs leading-5 text-emerald-300" role="status">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>¡Gracias! Recibimos tu consulta. Nos comunicaremos a la brevedad.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex gap-3 rounded-lg border border-red-400/15 bg-red-400/[0.06] p-3.5 text-xs leading-5 text-red-300" role="alert">
                <CircleAlert size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>
                  No pudimos enviar tu consulta. Intentá nuevamente
                  {isWhatsAppConfigured ? ' o contactanos por WhatsApp.' : '.'}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
