import React from 'react';

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
      <p>&copy; 2026 Dev Stack. All rights reserved.</p>

      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-slate-600">Privacy</a>
        <a href="#" className="hover:text-slate-600">Terms</a>
      </div>
    </div>
  );
};

export default FooterBottom;