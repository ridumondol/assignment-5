import React from 'react';

interface HeroImageProps {
  imageSrc?: string;
  altText?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  imageSrc = "/src/assets/banner-stack.png",
  altText = "3D Layered Development Stack Graphic",
}) => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md lg:max-w-none">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  );
};