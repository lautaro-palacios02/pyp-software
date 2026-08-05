import { Blocks, ChartSpline, MessageSquareText, RefreshCcw, Sparkles, Workflow } from 'lucide-react'
import SectionHeader from './SectionHeader'

const reasons = [
  [Blocks, 'Software realmente personalizado', 'Cada solución se adapta al funcionamiento real del negocio.'],
  [Sparkles, 'Diseño moderno', 'Interfaces profesionales, claras y fáciles de utilizar.'],
  [ChartSpline, 'Arquitectura escalable', 'Sistemas preparados para crecer junto con la empresa.'],
  [MessageSquareText, 'Comunicación directa', 'Acompañamiento durante todo el proceso.'],
  [Workflow, 'Automatización', 'Eliminamos tareas repetitivas y reducimos errores.'],
  [RefreshCcw, 'Evolución', 'El software puede incorporar nuevas funcionalidades con el tiempo.'],
]

function WhyUs() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Nuestro enfoque"
          title="¿Por qué PYP Software?"
          description="Tecnología pensada para generar una mejora concreta en la forma en que funciona tu empresa."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-x-10 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([Icon, title, description]) => (
            <article key={title} className="group flex gap-4 rounded-xl border border-transparent p-4 transition-colors hover:border-white/[0.07] hover:bg-white/[0.02]">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-blue-400 transition-colors group-hover:border-blue-400/20">
                <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
