import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useConsent } from './ConsentProvider'

const categories = [
  ['preferences', 'Preferencias', 'Permiten conservar opciones de experiencia cuando el sitio las incorpore.'],
  ['analytics', 'Analíticas', 'Permiten medir el uso del sitio cuando se incorpore una herramienta de analítica.'],
  ['marketing', 'Marketing', 'Permiten personalizar comunicaciones o publicidad cuando se incorpore esa tecnología.'],
]

function CookieSettings() {
  const { consent, isSettingsOpen, closeSettings, save } = useConsent()
  const [choices, setChoices] = useState({ preferences: false, analytics: false, marketing: false })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isSettingsOpen) setChoices({ preferences: Boolean(consent?.preferences), analytics: Boolean(consent?.analytics), marketing: Boolean(consent?.marketing) })
  }, [isSettingsOpen, consent])

  if (!isSettingsOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-3 sm:items-center" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeSettings()}>
      <section role="dialog" aria-modal="true" aria-labelledby="privacy-settings-title" className="max-h-[90svh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0e14] p-5 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-5"><div><h2 id="privacy-settings-title" className="text-xl font-semibold text-white">Configurar privacidad</h2><p className="mt-2 text-sm leading-6 text-slate-400">Elegí libremente las categorías opcionales. Las necesarias siempre están activas.</p></div><button type="button" onClick={closeSettings} className="rounded-md p-1 text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" aria-label="Cerrar configuración"><X size={20} /></button></div>
        <div className="mt-6 space-y-3"><div className="rounded-xl border border-white/10 p-4"><div className="flex items-center justify-between gap-3"><div><h3 className="font-medium text-white">Necesarias</h3><p className="mt-1 text-xs leading-5 text-slate-400">Guardan tu decisión de privacidad y permiten el funcionamiento básico.</p></div><span className="text-xs font-medium text-blue-300">Siempre activas</span></div></div>{categories.map(([key, title, description]) => <label key={key} className="flex cursor-pointer items-center justify-between gap-5 rounded-xl border border-white/10 p-4"><span><span className="block font-medium text-white">{title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{description}</span></span><input type="checkbox" checked={choices[key]} onChange={(event) => setChoices((current) => ({ ...current, [key]: event.target.checked }))} className="size-4 accent-blue-500" /></label>)}</div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3"><button type="button" onClick={() => save({})} className="button-secondary justify-center px-3 py-3">Rechazar opcionales</button><button type="button" onClick={() => save(choices)} className="button-secondary justify-center px-3 py-3">Guardar preferencias</button><button type="button" onClick={() => save({ preferences: true, analytics: true, marketing: true })} className="button-primary justify-center px-3 py-3">Aceptar todas</button></div>
      </section>
    </div>
  )
}

export default CookieSettings
