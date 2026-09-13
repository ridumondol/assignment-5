import type { Technology } from "../data/technologies";

interface SidebarStackProps {
  selectedTechs: Technology[];
  onRemoveTech: (id: string) => void;
  onClearAll: () => void;
}

const SidebarStack = ({
  selectedTechs,
  onRemoveTech,
  onClearAll,
}: SidebarStackProps) => {
  return (
    <aside className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm sticky top-6">
      {/* Title */}
      <h3 className="font-bold text-lg text-base-content">
        Your Stack
      </h3>

      <p className="text-xs text-base-content/60 mb-4">
        {selectedTechs.length} Technology Selected
      </p>

      {/* Empty State */}
      {selectedTechs.length === 0 ? (
        <div className="py-8 text-center text-xs text-base-content/40 border border-dashed border-base-300 rounded-lg">
          No technologies added yet.
        </div>
      ) : (
        <div className="space-y-2 mb-6">
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-2.5 border border-base-200 rounded-lg text-sm bg-base-50"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${tech.iconBg}`}
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <span className="font-medium text-sm text-base-content">
                  {tech.name}
                </span>
              </div>

              {/* Remove */}
              <button
                type="button"
                onClick={() => onRemoveTech(tech.id)}
                className="text-base-content/40 hover:text-error text-xl px-1 transition"
                aria-label={`Remove ${tech.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      {selectedTechs.length > 0 && (
        <button
          type="button"
          onClick={onClearAll}
          className="btn btn-ghost btn-xs w-full text-error hover:bg-error/10 font-medium"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default SidebarStack;