import { ArrowUpRight, Check } from 'lucide-react'
import { solutions } from '../data/solutions'
import SectionHeader from './SectionHeader'

function Solutions() {
  return (
    <section id="soluciones" className="section-shell scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Posibilidades"
              title="Software adaptado a cada negocio"
              description="Cada empresa trabaja de manera diferente. Diseñamos soluciones que se adaptan a sus procesos reales."
            />
            <a href="#contacto" className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Evaluar una solución
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7">
            <p className="mb-5 text-xs leading-5 text-slate-500">
              Ejemplos de soluciones que podemos diseñar y desarrollar a medida:
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#090d13] px-3.5 py-3 text-sm text-slate-300 transition-colors hover:border-blue-400/20 hover:text-white"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-blue-500/10 text-blue-400">
                    <Check size={11} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
