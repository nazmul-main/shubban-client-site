import Button from '../ui/Button';
import Typography from '../ui/Typography';

const AboutSection = () => {
  const achievements = [
    { 
      number: '১০০+', 
      label: 'সক্রিয় সদস্য',
      icon: '👥',
      description: 'সক্রিয়ভাবে কাজ করছে'
    },
    { 
      number: '১৫+', 
      label: 'কার্যক্রম',
      icon: '🎯',
      description: 'সফলভাবে সম্পন্ন'
    },
    { 
      number: '২০২৪', 
      label: 'প্রতিষ্ঠার বছর',
      icon: '🌟',
      description: 'নতুন যাত্রা শুরু'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary-color/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-color/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-color/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Content - Centered */}
          <div className="space-y-8 max-w-4xl">
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-color to-secondary-color rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-bold text-gray-800 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
                আমাদের সম্পর্কে
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-secondary-color to-accent-color">
                  আমাদের সম্পর্কে
                </span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary-color via-secondary-color to-accent-color rounded-full mx-auto animate-pulse"></div>
            </div>
            
            {/* Content paragraphs */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                শুব্বান দাওয়াতি কাফেলা ২০২৪ সালে প্রতিষ্ঠিত একটি যুব সংগঠন। আমাদের মূল লক্ষ্য হল 
                ইসলামের সঠিক শিক্ষা প্রচার এবং যুব সমাজের উন্নয়নে কাজ করা।
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                আমরা বিশ্বাস করি যে যুব সমাজই হল দেশ ও জাতির ভবিষ্যৎ। তাই তাদের সঠিক পথে পরিচালিত 
                করার জন্য আমরা নিরলসভাবে কাজ করে যাচ্ছি।
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                href="/about" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-color to-secondary-color hover:from-secondary-color hover:to-primary-color transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-color/25"
              >
                <span className="relative z-10 font-bold text-lg">আরও জানুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100"></div>
              </Button>
            </div>
          </div>
          
          {/* Achievements Card - Centered */}
          <div className="relative w-full max-w-4xl mt-8 sm:mt-12">
            <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 via-secondary-color/5 to-accent-color/10 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
                      আমাদের অর্জন
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    যুব সমাজের উন্নয়নে আমাদের অবদান
                  </p>
                </div>
                
                {/* Achievements grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="group text-center p-4 sm:p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/60 transition-all duration-300 hover:scale-105"
                    >
                      {/* Icon */}
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      
                      {/* Number */}
                      <div className="text-xl sm:text-2xl md:text-3xl font-black mb-2 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {achievement.number}
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1">
                        {achievement.label}
                      </div>
                      
                      {/* Description */}
                      <div className="text-xs sm:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-color/30 to-secondary-color/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary-color/30 to-accent-color/30 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-primary-color/20 to-secondary-color/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-secondary-color/20 to-accent-color/20 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 