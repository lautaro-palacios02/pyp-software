import { ArrowRight, Check } from 'lucide-react'
import DashboardVisual from './DashboardVisual'

const trustPoints = ['Software a medida', 'Soluciones escalables', 'Atención personalizada']

function Hero() {
  return (
    <section id="inicio" className="hero-grid relative scroll-mt-20 overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_35%,rgba(37,99,235,0.11),transparent_30%)]" />
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-16 px-5 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:pb-28">
        <div className="hero-copy max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300 sm:text-xs">
            <span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_#3b82f6]" />
            Software · Automatización · Gestión
          </div>
          <h1 className="text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-[3.75rem] lg:text-[4.1rem] xl:text-[4.65rem]">
            Software diseñado para hacer crecer{' '}
            <span className="text-gradient">empresas.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Desarrollamos sistemas y soluciones digitales a medida para optimizar procesos, automatizar tareas y ayudar a empresas a trabajar de forma más eficiente.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="button-primary justify-center px-5 py-3.5 sm:justify-start">
              Contanos tu proyecto
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#servicios" className="button-secondary justify-center px-5 py-3.5 sm:justify-start">
              Ver servicios
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500" aria-label="Características principales">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <span className="grid size-4 place-items-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <Check size={9} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual w-full pb-5 lg:pb-0">
          <DashboardVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero
