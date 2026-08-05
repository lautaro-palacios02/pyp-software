import {
  ArrowUpRight,
  Bell,
  Boxes,
  Check,
  ChevronDown,
  CircleUserRound,
  LayoutDashboard,
  MoreHorizontal,
  Search,
  Users,
} from 'lucide-react'

const chartPoints = [38, 48, 43, 62, 58, 74, 68, 87, 81, 96, 92, 112]
const activity = [
  ['Nuevo cliente registrado', 'Hace 4 min'],
  ['Presupuesto aprobado', 'Hace 18 min'],
  ['Stock actualizado', 'Hace 35 min'],
]

function DashboardVisual() {
  const chartPath = chartPoints.map((value, index) => `${index * 38},${130 - value}`).join(' ')

  return (
    <div
      className="dashboard-wrap relative mx-auto w-full max-w-[620px] lg:ml-auto"
      role="img"
      aria-label="Representación de un dashboard empresarial con métricas, gráfico y actividad"
    >
      <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_64%)] blur-2xl" />

      <div className="dashboard-shell overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090d14]/95 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
        <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-slate-600" />
            <span className="size-2 rounded-full bg-slate-700" />
            <span className="size-2 rounded-full bg-blue-500" />
          </div>
          <div className="flex h-6 w-40 items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.025] px-2 text-[7px] text-slate-600 sm:w-52">
            <Search size={8} />
            Buscar en el sistema...
          </div>
          <Bell size={13} className="text-slate-500" />
        </div>

        <div className="grid min-h-[355px] grid-cols-[52px_1fr] sm:grid-cols-[118px_1fr]">
          <aside className="border-r border-white/[0.07] p-2.5 sm:p-3">
            <div className="mb-7 hidden items-center gap-2 px-1 sm:flex">
              <span className="grid size-5 place-items-center rounded bg-blue-600 text-[6px] font-black">
                PYP
              </span>
              <span className="text-[8px] font-semibold">Panel de gestión</span>
            </div>
            <div className="space-y-1.5">
              {[
                [LayoutDashboard, 'Resumen', true],
                [Users, 'Clientes'],
                [Boxes, 'Operaciones'],
                [CircleUserRound, 'Equipo'],
              ].map(([Icon, label, active]) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 rounded-md p-2 text-[8px] ${
                    active ? 'bg-blue-500/10 text-blue-300' : 'text-slate-600'
                  }`}
                >
                  <Icon size={11} />
                  <span className="hidden sm:inline">{label}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0 p-3 sm:p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[8px] text-slate-600">Vista general</p>
                <p className="mt-1 text-[13px] font-semibold text-slate-200 sm:text-base">
                  Buen día, equipo
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-md border border-white/[0.07] px-2 py-1.5 text-[7px] text-slate-500">
                Este mes <ChevronDown size={8} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                ['Ingresos', '$ 8.4M', '+12.5%'],
                ['Clientes activos', '248', '+8.2%'],
                ['Operaciones', '1.284', '+24%'],
              ].map(([label, value, change]) => (
                <div key={label} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5 sm:p-3">
                  <p className="truncate text-[6px] text-slate-600 sm:text-[8px]">{label}</p>
                  <div className="mt-2 flex flex-wrap items-end justify-between gap-1">
                    <p className="text-[11px] font-semibold text-slate-200 sm:text-sm">{value}</p>
                    <span className="text-[6px] font-medium text-emerald-400 sm:text-[7px]">{change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-[1.45fr_1fr]">
              <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-medium text-slate-300">Rendimiento</p>
                    <p className="mt-0.5 text-[6px] text-slate-600">Últimos 12 meses</p>
                  </div>
                  <MoreHorizontal size={11} className="text-slate-600" />
                </div>
                <svg viewBox="0 0 420 150" className="mt-2 h-[82px] w-full overflow-visible" aria-hidden="true">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[35, 70, 105].map((y) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="rgba(255,255,255,.05)" />
                  ))}
                  <polygon points={`0,145 ${chartPath} 418,145`} fill="url(#chartFill)" />
                  <polyline points={chartPath} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="418" cy="18" r="4" fill="#090d14" stroke="#60a5fa" strokeWidth="3" />
                </svg>
              </div>

              <div className="hidden rounded-lg border border-white/[0.07] bg-white/[0.025] p-3 sm:block">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-medium text-slate-300">Actividad</p>
                  <ArrowUpRight size={9} className="text-slate-600" />
                </div>
                <div className="mt-3 space-y-3.5">
                  {activity.map(([label, time]) => (
                    <div key={label} className="flex gap-2">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-blue-500/10 text-blue-400">
                        <Check size={8} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[7px] text-slate-400">{label}</p>
                        <p className="mt-0.5 text-[6px] text-slate-700">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="float-card float-card-left absolute -left-2 bottom-16 hidden items-center gap-2.5 rounded-lg border border-white/10 bg-[#0b1018]/95 px-3 py-2.5 shadow-2xl backdrop-blur sm:flex lg:-left-8">
        <span className="grid size-7 place-items-center rounded-md bg-emerald-400/10 text-emerald-400">
          <ArrowUpRight size={13} />
        </span>
        <div>
          <p className="text-[9px] font-semibold text-white">+24% productividad</p>
          <p className="mt-0.5 text-[7px] text-slate-500">Este trimestre</p>
        </div>
      </div>

      <div className="float-card float-card-right absolute -right-2 top-20 hidden items-center gap-2 rounded-lg border border-white/10 bg-[#0b1018]/95 px-3 py-2.5 shadow-2xl backdrop-blur sm:flex lg:-right-5">
        <span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
        <p className="text-[8px] font-medium text-slate-300">Procesos automatizados</p>
      </div>
    </div>
  )
}

export default DashboardVisual
