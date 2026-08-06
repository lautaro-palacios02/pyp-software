import { ArrowRight, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, isWhatsAppConfigured } from '../config/contact'

function MainCta() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/15 px-6 py-14 text-center sm:px-10 sm:py-20">
        <div className="absolute left-1/2 top-0 -z-0 h-56 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">Empecemos</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            ¿Tenés una idea o un proceso que querés mejorar?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Contanos cómo funciona tu empresa y evaluemos juntos qué solución podemos desarrollar.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contacto" className="button-primary justify-center px-5 py-3.5">
              Quiero hablar de mi proyecto
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            {isWhatsAppConfigured && (
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary justify-center px-5 py-3.5"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Contactar por WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCta
