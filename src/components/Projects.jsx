import { ArrowUpRight, Boxes, ChartNoAxesCombined, Users } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

const previewIcons = [Boxes, Users, ChartNoAxesCombined]

function ProjectPreview({ project, index }) {
  const Icon = previewIcons[index % previewIcons.length]

  return (
    <div className={`relative h-44 overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${project.accent} p-5`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative ml-auto h-full w-[86%] translate-y-5 rounded-t-xl border border-white/[0.09] bg-[#0a0f17]/95 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-3">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-blue-500/10 text-blue-400">
              <Icon size={10} />
            </span>
            <span className="text-[7px] text-slate-400">{project.title}</span>
          </div>
          <span className="size-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[72, 48, 86].map((width, itemIndex) => (
            <div key={width} className="rounded border border-white/[0.05] bg-white/[0.02] p-2">
              <span className="block h-1 w-7 rounded bg-slate-700" />
              <span className="mt-2 block h-2 rounded bg-blue-500/20" style={{ width: `${width}%` }} />
              <span className="mt-1 block h-1 rounded bg-white/[0.04]" style={{ width: `${40 + itemIndex * 15}%` }} />
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-12 items-end gap-1.5 border-t border-white/[0.04] pt-2">
          {[34, 54, 43, 68, 58, 82, 73, 92].map((height) => (
            <span key={height} className="flex-1 rounded-t-sm bg-blue-500/25" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="section-shell scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Casos de uso"
          title="Soluciones que podemos construir"
          description="Plataformas pensadas alrededor de la operación real de cada empresa. Estos son ejemplos de lo que podemos desarrollar."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="card group overflow-hidden">
              <ProjectPreview project={project} index={index} />
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-500">CONCEPTO {project.number}</span>
                  <ArrowUpRight size={15} className="text-slate-700 transition-colors group-hover:text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Características">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[10px] text-slate-500">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 rounded-sm text-xs font-semibold text-slate-300 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Conocer solución
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
