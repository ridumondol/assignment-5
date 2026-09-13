import React from 'react';

interface HeroHeadingProps {
  plainText?: string;
  gradientText?: string;
}

export const HeroHeading: React.FC<HeroHeadingProps> = ({
  plainText = "Build Your Ideal",
  gradientText = "Development Stack",
}) => {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-base-content">
      {plainText} <br className="hidden sm:inline" />
      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        {gradientText}
      </span>
    </h1>
  );
};