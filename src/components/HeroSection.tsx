import React from 'react';
import { HeroHeading } from './hero/HeroHeading';
import { HeroDescription } from './hero/HeroDescription';
import { HeroActions } from './hero/HeroActions';
import { HeroImage } from './hero/HeroImage';

interface HeroSectionProps {
  imageSrc?: string;
  onExploreClick?: () => void;
  onLearnMoreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  onExploreClick,
  onLearnMoreClick,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <HeroHeading />
          <HeroDescription />
          <HeroActions 
            onPrimaryClick={onExploreClick} 
            onSecondaryClick={onLearnMoreClick} 
          />
        </div>
        <div className="lg:col-span-5">
          <HeroImage imageSrc={imageSrc} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;