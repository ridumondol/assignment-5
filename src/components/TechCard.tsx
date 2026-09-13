import type { Technology } from "../data/technologies";

interface TechCardProps {
  tech: Technology;
  isSelected: boolean;
  onToggleSelect: (tech: Technology) => void;
}

const TechCard = ({
  tech,
  isSelected,
  onToggleSelect,
}: TechCardProps) => {
  return (
    <div
      className={`
        card
        bg-base-100
        p-5
        transition-all
        duration-300
        border-2
        ${
          isSelected
            ? "border-pink-400"
            : "border-base-200"
        }
      `}
    >
      {/* Icon + Badge */}
      <div className="flex items-center justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${tech.iconBg}`}
        >
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="w-7 h-7 object-contain"
          />
        </div>

        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${tech.badgeColor}`}
        >
          {tech.badgeText}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-bold text-lg text-base-content mb-1">
        {tech.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-base-content/60 leading-relaxed mb-4 min-h-[3rem]">
        {tech.description}
      </p>

      {/* Details */}
      <div className="flex items-center justify-between text-xs text-base-content/60 border-t border-base-200 pt-3 mb-4">
        <span>{tech.category}</span>
        <span>{tech.experienceLevel}</span>
        <span className="font-semibold text-amber-500">
          ★ {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => onToggleSelect(tech)}
        className={`
          btn
          btn-sm
          w-full
          font-semibold
          transition-all
          ${
            isSelected
              ? "btn-error text-white"
              : "btn-neutral text-white hover:bg-black"
          }
        `}
      >
        {isSelected ? "Remove from Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;