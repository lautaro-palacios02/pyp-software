function Brand({ compact = false }) {
  return (
    <a
      href="#inicio"
      className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="PYP Software, volver al inicio"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-[11px] font-black tracking-[-0.08em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        PYP
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500" />
      </span>
      <span className={compact ? 'sr-only' : 'flex flex-col leading-none'}>
        <span className="text-[15px] font-bold tracking-tight text-white">PYP</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
          Software
        </span>
      </span>
    </a>
  )
}

export default Brand
