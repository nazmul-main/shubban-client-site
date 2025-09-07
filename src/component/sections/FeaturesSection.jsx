import Card from '../ui/Card';
import Typography from '../ui/Typography';

const FeaturesSection = () => {
  const features = [
    {
      icon: '📚',
      title: 'ইসলামিক শিক্ষা',
      description: 'কুরআন ও হাদীসের সঠিক শিক্ষা প্রদান এবং ইসলামিক মূল্যবোধ প্রতিষ্ঠা',
      gradient: 'from-emerald-500 to-teal-500',
      color: 'emerald-400',
      details: ['কুরআন শিক্ষা', 'হাদীস চর্চা', 'ইসলামিক মূল্যবোধ']
    },
    {
      icon: '🤝',
      title: 'সমাজ উন্নয়ন',
      description: 'যুব সমাজের মাঝে ঐক্য প্রতিষ্ঠা এবং সামাজিক উন্নয়নে অবদান',
      gradient: 'from-teal-500 to-cyan-500',
      color: 'teal-400',
      details: ['যুব ঐক্য', 'সামাজিক সেবা', 'সমাজ উন্নয়ন']
    },
    {
      icon: '🌍',
      title: 'দাওয়াত',
      description: 'ইসলামের সঠিক বার্তা মানুষের কাছে পৌঁছে দেওয়া এবং সেবামূলক কাজ',
      gradient: 'from-cyan-500 to-emerald-500',
      color: 'cyan-400',
      details: ['দাওয়াতি কাজ', 'সেবামূলক কার্যক্রম', 'মানবিক সেবা']
    },
    {
      icon: '🎯',
      title: 'লক্ষ্য',
      description: 'একটি সুন্দর ও উন্নত সমাজ গঠনে যুব সমাজের নেতৃত্ব প্রদান',
      gradient: 'from-emerald-500 to-teal-500',
      color: 'emerald-400',
      details: ['নেতৃত্ব বিকাশ', 'সমাজ গঠন', 'ভবিষ্যৎ নির্মাণ']
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 sm:w-80 sm:h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              আমাদের মূল লক্ষ্য
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              আমাদের মূল লক্ষ্য
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            ইসলামের সঠিক শিক্ষা প্রচার এবং যুব সমাজের উন্নয়নে আমাদের অঙ্গীকার
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:-translate-y-1"
            >
              {/* Icon container with enhanced effects */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                <span className="text-white text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center group-hover:text-emerald-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 text-center">
                {feature.description}
              </p>

              {/* Feature details */}
              <div className="space-y-1.5 sm:space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2 sm:space-x-3 opacity-100 transition-all duration-300 delay-100 group-hover:scale-105 group-hover:translate-x-1">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-${feature.color} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-emerald-400 transition-colors duration-300">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">আমাদের লক্ষ্য অর্জনের পথে</span>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 