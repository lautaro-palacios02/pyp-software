import { Check, CircleX, Minus, MoveRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const problems = [
  'Planillas de Excel dispersas',
  'Información duplicada',
  'Procesos manuales',
  'Errores frecuentes',
  'Falta de seguimiento',
  'Datos difíciles de consultar',
  'Tareas repetitivas',
  'Falta de control',
]

const before = ['Excel', 'WhatsApp', 'Papeles', 'Información dispersa', 'Procesos manuales']
const after = [
  'Sistema centralizado',
  'Automatizaciones',
  'Información en tiempo real',
  'Reportes y seguimiento',
  'Mayor control',
]

function ComparisonList({ title, items, improved = false }) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-7 ${
        improved
          ? 'border-blue-400/20 bg-blue-500/[0.055] shadow-[inset_0_1px_0_rgba(96,165,250,0.08)]'
          : 'border-white/[0.07] bg-white/[0.02]'
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
        <p className={`text-xs font-semibold tracking-[0.18em] ${improved ? 'text-blue-400' : 'text-slate-500'}`}>
          {title}
        </p>
        <span className={`size-2 rounded-full ${improved ? 'bg-blue-400 shadow-[0_0_12px_#3b82f6]' : 'bg-slate-700'}`} />
      </div>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-full ${
                improved ? 'bg-blue-500/15 text-blue-400' : 'bg-white/[0.04] text-slate-600'
              }`}
            >
              {improved ? <Check size={11} strokeWidth={2.5} /> : <Minus size={11} />}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Problems() {
  return (
    <section className="section-shell relative border-y border-white/[0.05] bg-[#080b10]">
      <div className="absolute left-0 top-1/3 -z-0 size-72 rounded-full bg-blue-600/[0.05] blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <SectionHeader
            eyebrow="El problema"
            title="¿Tu empresa todavía depende de procesos manuales?"
            description="Muchas empresas pierden tiempo y control utilizando herramientas desconectadas. Un sistema desarrollado a medida puede centralizar toda la operación."
          />
          <ul className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <li key={problem} className="flex items-center gap-2.5 text-sm text-slate-500">
                <CircleX size={15} className="shrink-0 text-slate-600" strokeWidth={1.7} aria-hidden="true" />
                {problem}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <ComparisonList title="ANTES" items={before} />
          <div className="mx-auto grid size-10 rotate-90 place-items-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400 sm:rotate-0">
            <MoveRight size={17} aria-label="se transforma en" />
          </div>
          <ComparisonList title="DESPUÉS" items={after} improved />
        </div>
      </div>
    </section>
  )
}

export default Problems
