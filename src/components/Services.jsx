import {
  AppWindow,
  Blocks,
  CodeXml,
  PanelsTopLeft,
  RefreshCw,
  Workflow,
} from 'lucide-react'
import { services } from '../data/services'
import SectionHeader from './SectionHeader'

const icons = {
  code: CodeXml,
  panels: PanelsTopLeft,
  workflow: Workflow,
  browser: AppWindow,
  plug: Blocks,
  refresh: RefreshCw,
}

function Services() {
  return (
    <section id="servicios" className="section-shell scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Qué hacemos"
          title="Soluciones digitales para tu empresa"
          description="No adaptamos tu empresa al software. Desarrollamos software adaptado a tu empresa."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon]

            return (
              <article key={service.title} className="card group relative overflow-hidden p-6 sm:p-7">
                <span className="absolute right-5 top-4 text-xs font-medium tracking-widest text-white/[0.07]">
                  0{index + 1}
                </span>
                <div className="grid size-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-blue-400 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.12]">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
