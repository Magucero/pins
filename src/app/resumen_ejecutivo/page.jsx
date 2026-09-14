const consultas = [
  {
    id: 1,
    nombre: "Ventas por mes",
    descripcion: "Consulta para obtener el total de ventas agrupadas por mes.",
    categoria: "Reportes",
    fecha: "Hoy, 10:30",
  },
  {
    id: 2,
    nombre: "Usuarios activos",
    descripcion: "Obtiene los usuarios que tuvieron actividad durante los últimos 30 días.",
    categoria: "Usuarios",
    fecha: "Ayer, 16:45",
  },
  {
    id: 3,
    nombre: "Productos con bajo stock",
    descripcion: "Lista los productos cuyo stock se encuentra por debajo del mínimo.",
    categoria: "Inventario",
    fecha: "12 Sep, 09:15",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e13] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              SQL<span className="text-cyan-400">Vault</span>
            </h1>
            <p className="mt-1 text-xs text-gray-500">
              Biblioteca de consultas SQL
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-gray-500 sm:block">
              Tu espacio de consultas
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-medium text-cyan-300">
              ST
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Bienvenida */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Workspace SQL
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Tus consultas,
                <br />
                <span className="text-gray-500">en un solo lugar.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                Guardá, organizá y encontrá tus consultas SQL de forma simple.
                Construí tu propia biblioteca de consultas reutilizables.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#0e0e13] transition hover:bg-cyan-300">
              <span className="text-lg">+</span>
              Nueva consulta
            </button>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-gray-500">Consultas guardadas</p>
            <p className="mt-3 text-3xl font-semibold text-white">24</p>
            <p className="mt-2 text-xs text-cyan-400">
              +3 esta semana
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-gray-500">Categorías</p>
            <p className="mt-3 text-3xl font-semibold text-white">6</p>
            <p className="mt-2 text-xs text-gray-500">
              Consultas organizadas
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-gray-500">Última actualización</p>
            <p className="mt-3 text-3xl font-semibold text-white">Hoy</p>
            <p className="mt-2 text-xs text-gray-500">
              Tu biblioteca está al día
            </p>
          </div>
        </section>

        {/* Consultas recientes */}
        <section>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Consultas recientes
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Accedé rápidamente a tus consultas guardadas.
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Buscar consulta..."
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/50 sm:w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {consultas.map((consulta) => (
              <article
                key={consulta.id}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <span className="text-lg">⌘</span>
                  </div>

                  <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-gray-500">
                    {consulta.categoria}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {consulta.nombre}
                </h4>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {consulta.descripcion}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-gray-600">
                    {consulta.fecha}
                  </span>

                  <button className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
                    Ver consulta →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}