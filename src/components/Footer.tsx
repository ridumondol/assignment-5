import React from 'react';
import FooterBrand from './footer/FooterBrand';
import FooterLinks from './footer/FooterLinks';
import FooterBottom from './footer/FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-gray-500 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          <FooterBrand />
          <FooterLinks />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;