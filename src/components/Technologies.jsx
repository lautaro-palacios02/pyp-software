import { Braces, Cloud, Code2, Database, GitBranch, Network, Server, SquareFunction } from 'lucide-react'
import SectionHeader from './SectionHeader'

const technologies = [
  [Code2, 'React'],
  [Server, 'Node.js'],
  [Braces, 'JavaScript'],
  [Network, 'APIs'],
  [SquareFunction, 'SQL'],
  [Cloud, 'Cloud'],
  [GitBranch, 'Git'],
  [Database, 'Bases de datos'],
]

function Technologies() {
  return (
    <section className="border-y border-white/[0.05] bg-[#080b10] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <SectionHeader
            eyebrow="Tecnología"
            title="Tecnología moderna para soluciones modernas."
            description="Elegimos herramientas confiables y actuales para construir sistemas rápidos, seguros y preparados para evolucionar."
          />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
            {technologies.map(([Icon, name]) => (
              <li key={name} className="flex min-h-24 flex-col items-center justify-center gap-3 bg-[#090d13] p-4 text-xs font-medium text-slate-400 transition-colors hover:bg-[#0c121c] hover:text-white">
                <Icon size={19} className="text-blue-500" strokeWidth={1.6} aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Technologies
