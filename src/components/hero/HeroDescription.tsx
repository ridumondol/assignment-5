import React from 'react';

interface HeroDescriptionProps {
  description?: string;
}

export const HeroDescription: React.FC<HeroDescriptionProps> = ({
  description = "Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.",
}) => {
  return (
    <p className="text-base-content/70 text-base sm:text-lg max-w-xl leading-relaxed">
      {description}
    </p>
  );
};