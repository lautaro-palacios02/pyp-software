import { ArrowDownRight } from 'lucide-react'

function About() {
  return (
    <section id="nosotros" className="scroll-mt-16 border-y border-white/[0.05] bg-[#080b10] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">Sobre PYP</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-slate-600">
            <span className="h-px w-12 bg-slate-700" />
            Tecnología con propósito
          </div>
        </div>
        <div>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
            Tecnología enfocada en resolver problemas reales.
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              En PYP Software desarrollamos soluciones digitales enfocadas en mejorar la forma en que las empresas trabajan. Analizamos cada necesidad y construimos software adaptado a los procesos reales de nuestros clientes.
            </p>
            <ArrowDownRight size={38} className="hidden text-blue-500 sm:block" strokeWidth={1.2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
