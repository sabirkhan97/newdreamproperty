import React from 'react';
import Logo from '../assets/logo.svg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pt-20 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-48 h-48 mx-auto mb-8 p-4 bg-white/50 rounded-2xl shadow-2xl backdrop-blur-sm">
          <img src={Logo} alt="New Dream Property Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 to-purple-800 bg-clip-text text-transparent mb-6">
          NEW DREAM PROPERTY
        </h1>
        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-xl px-6 py-3 inline-block mb-8">
          <span className="text-xl font-bold text-yellow-800">✅ RERA Certified</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your Trusted Real Estate Partner in Gurugram Sector 83. Premium properties from top builders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-primary-700 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Enquire Now
          </a>
          <a 
            href="#builders" 
            className="border-2 border-primary-600 text-primary-600 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

