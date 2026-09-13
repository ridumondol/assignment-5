import React from 'react';
import logoText from '../../assets/logo-text.png';

const FooterBrand: React.FC = () => {
  return (
    <div className="md:col-span-5 space-y-4 pr-0 md:pr-12">
      <div className="w-36 h-15 flex item-center justify-center">
        <img
          src={logoText}
          alt="DevStack Logo"
          className="w-46 h-17 object-contain"
        />
      </div>
      <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
        Curated tools, technologies, and resources for developers building modern software.
      </p>
      <div className="flex items-center space-x-5 pt-2 text-sm font-semibold text-slate-700">
        <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
      </div>
    </div>
  );
};

export default FooterBrand;