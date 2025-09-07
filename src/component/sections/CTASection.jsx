import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      
      {/* Brand color overlay for consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-color/20 via-secondary-color/10 to-accent-color/20"></div>
      
      {/* Additional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-color/10 via-transparent to-secondary-color/10"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-accent-color/10 via-transparent to-primary-color/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-color/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-color/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-color/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary-color/8 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-secondary-color/8 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Modern geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-color to-secondary-color rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-bold text-white bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
                আমাদের সাথে যোগ দিন
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none">
                <span className="block">আমাদের সাথে</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-secondary-color to-accent-color animate-gradient-x">
                  যোগ দিন
                </span>
              </h2>
              
              {/* Decorative underline */}
              <div className="w-24 h-2 bg-gradient-to-r from-primary-color via-secondary-color to-accent-color rounded-full mx-auto animate-pulse"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে আমাদের সাথে কাজ করুন
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                href="/contact"
                variant="primary"
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-color to-secondary-color hover:from-secondary-color hover:to-primary-color transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-color/25"
              >
                <span className="relative z-10 font-bold text-lg text-white">যোগাযোগ করুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100"></div>
              </Button>
              
              <Button 
                href="/donor"
                variant="outline"
                size="xl"
                className="group relative overflow-hidden border-2 border-primary-color text-primary-color hover:border-secondary-color hover:text-secondary-color bg-white/80 backdrop-blur-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10 font-bold text-lg">দান করুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-color/10 to-secondary-color/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
            </div>

            {/* Additional info */}
            <div className="pt-8">
              <div className="inline-flex items-center space-x-6 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-color rounded-full animate-pulse"></div>
                  <span className="text-base text-gray-300 font-medium">২৪/৭ সেবা</span>
                </div>
                <div className="w-px h-6 bg-gray-400"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-color rounded-full animate-pulse delay-300"></div>
                  <span className="text-base text-gray-300 font-medium">বিনামূল্যে</span>
                </div>
                <div className="w-px h-6 bg-gray-400"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-color rounded-full animate-pulse delay-600"></div>
                  <span className="text-base text-gray-300 font-medium">সরাসরি যোগাযোগ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-primary-color/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-secondary-color/20 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/2 left-20 w-4 h-4 bg-accent-color/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/2 right-20 w-5 h-5 bg-primary-color/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default CTASection; 