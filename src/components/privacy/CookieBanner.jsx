import { useConsent } from './ConsentProvider'

function CookieBanner() {
  const { consent, openSettings, save } = useConsent()
  if (consent) return null

  return (
    <section className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0a0e14] p-5 shadow-2xl sm:bottom-5 sm:p-6" aria-label="Preferencias de privacidad">
      <p className="text-sm font-semibold text-white">Tu privacidad</p>
      <p className="mt-2 text-xs leading-5 text-slate-400">Usamos almacenamiento local necesario para recordar tus preferencias. Actualmente no usamos cookies opcionales ni herramientas de analítica o marketing. Conocé más en nuestra <a className="text-blue-400 underline underline-offset-2 hover:text-blue-300" href="/cookies">Política de Cookies</a>.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <button type="button" onClick={() => save({})} className="button-secondary justify-center px-4 py-3">Rechazar opcionales</button>
        <button type="button" onClick={openSettings} className="button-secondary justify-center px-4 py-3">Configurar</button>
        <button type="button" onClick={() => save({ preferences: true, analytics: true, marketing: true })} className="button-primary justify-center px-4 py-3">Aceptar</button>
      </div>
    </section>
  )
}

export default CookieBanner
