import Typography from '../ui/Typography';

const StatsSection = () => {
  const stats = [
    { 
      number: '১০০+', 
      label: 'সক্রিয় সদস্য', 
      color: 'from-emerald-400 to-teal-400',
      icon: '👥',
      description: 'সক্রিয়ভাবে কাজ করছে'
    },
    { 
      number: '১৫+', 
      label: 'কার্যক্রম', 
      color: 'from-teal-400 to-cyan-400',
      icon: '🎯',
      description: 'সফলভাবে সম্পন্ন'
    },
    
    { 
      number: '২০২৪', 
      label: 'প্রতিষ্ঠার বছর', 
      color: 'from-emerald-400 via-teal-400 to-cyan-400',
      icon: '🌟',
      description: 'নতুন যাত্রা শুরু'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              আমাদের অর্জন
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              সংখ্যায় আমাদের সাফল্য
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            যুব সমাজের উন্নয়নে আমাদের অবদান এবং অর্জন
          </p>
        </div>

        {/* Stats grid - 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
            >
              {/* Icon */}
              <div className="text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Number with gradient */}
              <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              
              {/* Label */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {stat.description}
              </p>

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
            <span className="text-sm font-medium text-gray-300">আরও অনেক অর্জন অপেক্ষায়</span>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 