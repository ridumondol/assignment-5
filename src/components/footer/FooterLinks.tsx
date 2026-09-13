import React from 'react';

const FooterLinks: React.FC = () => {
  return (
    <div className="md:col-span-7 grid grid-cols-3 gap-6 pt-2 md:pt-0">
      <div>
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">PRODUCT</h3>
        <ul className="space-y-3 text-sm text-slate-500">
          <li><a href="#" className="hover:text-slate-900">Home</a></li>
          <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
          <li><a href="#" className="hover:text-slate-900">Projects</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">COMPANY</h3>
        <ul className="space-y-3 text-sm text-slate-500">
          <li><a href="#" className="hover:text-slate-900">About</a></li>
          <li><a href="#" className="hover:text-slate-900">Contact</a></li>
          <li><a href="#" className="hover:text-slate-900">Careers</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">LEGAL</h3>
        <ul className="space-y-3 text-sm text-slate-500">
          <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;