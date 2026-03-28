import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-3">
          {/* Left: Names */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-lg font-bold text-gray-800">
            <div>TARIQ KHAN</div>
            <div className="md:border-l md:pl-4">BALJIT KHATRI</div>
          </div>
          
          {/* Right: Phones */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-semibold">
            <a href="tel:+919870483003" className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
              📞 +91-9870483003
            </a>
            <a href="tel:+918368179667" className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
              📞 +91-8368179667
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

