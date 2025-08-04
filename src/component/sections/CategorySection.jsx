import Button from '../ui/Button';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: 'ইসলামিক শিক্ষা',
      description: 'কুরআন, হাদীস ও ইসলামিক মূল্যবোধ শিক্ষা',
      icon: '📚',
      color: 'primary-color',
      gradient: 'from-primary-color to-blue-600',
      count: '১৫+',
      items: ['কুরআন শিক্ষা', 'হাদীস চর্চা', 'ফিকহ শিক্ষা', 'আকিদা শিক্ষা']
    },
    {
      id: 2,
      title: 'দাওয়াতি কাজ',
      description: 'ইসলামের সঠিক বার্তা মানুষের কাছে পৌঁছে দেওয়া',
      icon: '🌍',
      color: 'secondary-color',
      gradient: 'from-secondary-color to-pink-600',
      count: '১০+',
      items: ['দাওয়াতি কার্যক্রম', 'সামাজিক সেবা', 'মানবিক সেবা', 'সাম্প্রদায়িক ঐক্য']
    },
    {
      id: 3,
      title: 'যুব উন্নয়ন',
      description: 'যুব সমাজের নেতৃত্ব ও দক্ষতা বিকাশ',
      icon: '🎯',
      color: 'accent-color',
      gradient: 'from-accent-color to-orange-600',
      count: '৮+',
      items: ['নেতৃত্ব প্রশিক্ষণ', 'ক্যারিয়ার গাইডলাইন', 'সামাজিক দায়িত্ব', 'দক্ষতা বিকাশ']
    },
    {
      id: 4,
      title: 'সামাজিক সেবা',
      description: 'সমাজের সুবিধাবঞ্চিত মানুষের সেবা',
      icon: '🤝',
      color: 'primary-color',
      gradient: 'from-primary-color to-blue-600',
      count: '১২+',
      items: ['দরিদ্র সেবা', 'চিকিৎসা সেবা', 'শিক্ষা সহায়তা', 'জরুরি সাহায্য']
    },
    {
      id: 5,
      title: 'সাংস্কৃতিক কার্যক্রম',
      description: 'ইসলামিক সংস্কৃতি ও ঐতিহ্য প্রচার',
      icon: '🎨',
      color: 'secondary-color',
      gradient: 'from-secondary-color to-pink-600',
      count: '৬+',
      items: ['ইসলামিক সংস্কৃতি', 'ঐতিহ্য প্রচার', 'সাংস্কৃতিক অনুষ্ঠান', 'শিল্পকলা']
    },
    {
      id: 6,
      title: 'ডিজিটাল দাওয়াত',
      description: 'প্রযুক্তির মাধ্যমে ইসলামের বার্তা প্রচার',
      icon: '💻',
      color: 'accent-color',
      gradient: 'from-accent-color to-orange-600',
      count: '৫+',
      items: ['সোশ্যাল মিডিয়া', 'ডিজিটাল কনটেন্ট', 'অনলাইন শিক্ষা', 'ভার্চুয়াল দাওয়াত']
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-color/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-color/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-color/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary-color to-secondary-color rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-bold text-gray-800 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
              আমাদের কার্যক্রম
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-secondary-color to-accent-color">
              আমাদের কার্যক্রমের বিভাগসমূহ
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে আমাদের বিভিন্ন বিভাগের কার্যক্রম
          </p>
        </div>
        
        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="group relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/60 hover:-translate-y-2"
            >
              {/* Category header */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <span className="text-white text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                </div>
                
                {/* Count badge */}
                <div className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-white/40">
                  <span className="text-sm font-bold text-gray-700">{category.count}</span>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-color transition-colors duration-300">
                {category.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Category items */}
              <div className="space-y-2 mb-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <div className="pt-4">
                <Button 
                  href={`/category/${category.id}`}
                  variant="outline"
                  size="md"
                  className="group/btn relative overflow-hidden border-2 border-primary-color text-primary-color hover:border-secondary-color hover:text-secondary-color bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 font-semibold text-sm">আরও দেখুন</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-color/10 to-secondary-color/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-color/5 to-secondary-color/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-primary-color/20 to-secondary-color/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 bg-gradient-to-r from-secondary-color/20 to-accent-color/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
              
              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-color to-secondary-color rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
            <span className="text-lg font-bold text-gray-800">সব বিভাগ দেখুন</span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary-color rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary-color rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-accent-color rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 