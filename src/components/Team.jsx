import SectionHeader from './SectionHeader'
import teamPlaceholder from '../assets/team-placeholder.png'

const founders = [
  ['FP', 'Francisco Pederneera', 'Cofundador · Director de Tecnología'],
  ['LP', 'Lauatro Palacios', 'Cofundador · Director de Desarrollo'],
]

function Team() {
  return (
    <section id="equipo" className="section-shell scroll-mt-16 border-y border-white/[0.05] bg-[#080b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Nuestro equipo"
          title="Los fundadores detrás de PYP Software."
          description="Somos programadores y fundadores comprometidos con crear soluciones digitales que generen un impacto real en cada empresa."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {founders.map(([initials, name, role]) => (
            <article key={name} className="card group overflow-hidden text-center">
              <img
                src={teamPlaceholder}
                alt={`Foto de referencia para ${name}`}
                className="aspect-square w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-7 sm:p-8">
                <span className="text-xs font-semibold tracking-[0.14em] text-blue-400">{initials}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 text-sm text-blue-400">{role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">Desarrolla soluciones a medida para transformar las necesidades de cada empresa en herramientas simples y eficientes.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
