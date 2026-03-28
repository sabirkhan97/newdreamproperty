import React from 'react';

const builders = [
  'mvn-mall.svg',
  'bptp.svg',
  'riviera.svg',
  'ild-greens.svg',
  'gic.svg',
  'm3m.svg',
  'omaxe.svg'
];

const Builders: React.FC = () => {
  return (
    <section id="builders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
          Associated Builders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {builders.map((builder, index) => (
            <div key={builder} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-purple-100 hover:border-primary-200">
                <img 
                  src={`/src/assets/builders/${builder}`} 
                  alt={builder.replace('.svg', '')} 
                  className="w-24 h-12 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-4 font-semibold text-gray-700 text-sm capitalize">
                {builder.replace('.svg', '').replace(/-/g, ' ')}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-lg text-gray-600 italic">
          Official channel partners for premium projects in Gurugram
        </p>
      </div>
    </section>
  );
};

export default Builders;

