
 function StackSidebar({
  selectedStack,
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-base font-semibold text-slate-800">
        Your Stack
      </h2>

      <p className="mb-4 text-xs text-slate-400">
        {selectedStack.length} Technology Selected
      </p>

      <div className="flex flex-col gap-2">
        {selectedStack.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-2 rounded-lg border border-slate-200 p-3"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-8 w-8 object-contain"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-700">
                {tech.name}
              </p>

              <p className="text-[10px] text-slate-400">
                {tech.category}
              </p>
            </div>

            <button
              onClick={() => onRemove(tech.id)}
              aria-label={`Remove ${tech.name}`}
              className="rounded p-1 text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}

        {selectedStack.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-slate-400">
            Your stack is empty.
            <br />
            Add a technology to get started.
          </p>
        )}
      </div>

      <button
        onClick={onRemoveAll}
        disabled={selectedStack.length === 0}
        className="mt-8 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackSidebar;