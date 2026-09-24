
 function TechCard({
  tech,
  isSelected,
  onAdd,
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="mb-5 flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-9 w-9 object-contain"
        />

        {tech.badge && (
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {tech.badge}
          </span>
        )}
      </div>

      {/* Technology Info */}
      <h2 className="text-lg font-semibold text-slate-800">
        {tech.name}
      </h2>

      <p className="mt-1 min-h-[60px] text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      {/* Metadata */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {tech.category}
        </span>

        <span className="text-slate-500">
          {tech.difficulty}
        </span>

        <span className="whitespace-nowrap font-medium text-slate-700">
          <span className="text-amber-400">★</span>{" "}
          {tech.rating}
        </span>
      </div>

      {/* Add to Stack */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`mt-4 w-full rounded-lg border py-2.5 text-sm transition ${
          isSelected
            ? "cursor-not-allowed border-emerald-100 bg-emerald-50 text-emerald-600"
            : "border-slate-200 bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added to Stack ✓" : "Add to Stack"}
      </button>
    </article>
  );
}
export default TechCard;