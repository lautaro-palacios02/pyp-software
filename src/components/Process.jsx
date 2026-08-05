import SectionHeader from './SectionHeader'

const steps = [
  ['01', 'Relevamiento', 'Entendemos el negocio, sus procesos, problemas y necesidades.'],
  ['02', 'Planificación', 'Definimos funcionalidades, alcance y estructura de la solución.'],
  ['03', 'Diseño', 'Diseñamos una experiencia moderna, simple y fácil de utilizar.'],
  ['04', 'Desarrollo', 'Construimos la plataforma utilizando tecnologías modernas y buenas prácticas.'],
  ['05', 'Implementación', 'Ponemos el sistema en funcionamiento y acompañamos su evolución.'],
]

function Process() {
  return (
    <section className="section-shell border-y border-white/[0.05] bg-[#080b10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="De una idea a una solución real"
          description="Un proceso claro para convertir necesidades concretas en herramientas que simplifican el trabajo diario."
          align="center"
        />

        <ol className="process-line relative mx-auto mt-14 grid max-w-6xl gap-0 md:mt-20 md:grid-cols-5">
          {steps.map(([number, title, description]) => (
            <li key={number} className="process-step relative grid grid-cols-[44px_1fr] gap-4 pb-9 last:pb-0 md:block md:px-3 md:pb-0 md:text-center">
              <div className="process-dot relative z-10 grid size-11 place-items-center rounded-full border border-blue-400/25 bg-[#0b111c] text-[10px] font-bold tracking-wider text-blue-400 shadow-[0_0_0_6px_#080b10] md:mx-auto">
                {number}
              </div>
              <div className="pt-1.5 md:pt-0">
                <h3 className="md:mt-7 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2.5 text-xs leading-5 text-slate-500 md:px-1">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
