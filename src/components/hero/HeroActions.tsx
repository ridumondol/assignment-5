import React from 'react';

interface HeroActionsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  primaryLabel = "Explore Technologies",
  secondaryLabel = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button 
        onClick={onPrimaryClick}
        className="btn border-none text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 shadow-md"
      >
        {primaryLabel}
      </button>

      <button 
        onClick={onSecondaryClick}
        className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300"
      >
        {secondaryLabel}
      </button>
    </div>
  );
};