import { Box, ChartNoAxesCombined, Cpu, Layers3, WandSparkles } from 'lucide-react'

const items = [
  [Layers3, 'Software a medida'],
  [ChartNoAxesCombined, 'Sistemas escalables'],
  [Cpu, 'Automatización'],
  [Box, 'Soluciones empresariales'],
  [WandSparkles, 'Soporte personalizado'],
]

function TrustBar() {
  return (
    <div className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-7 sm:px-8 md:grid-cols-5 lg:px-10">
        {items.map(([Icon, label], index) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-2.5 px-2 text-center text-[11px] font-medium text-slate-500 sm:text-xs ${
              index === items.length - 1 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <Icon size={15} className="shrink-0 text-blue-500" strokeWidth={1.8} aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
