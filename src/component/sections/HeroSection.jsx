import Image from 'next/image';
import Button from '../ui/Button';
import Typography from '../ui/Typography';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-pink-50/80"></div>
        
        {/* Brand color overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-color/3 via-secondary-color/2 to-accent-color/3"></div>
        
        {/* Mesh gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-color/5 to-secondary-color/5"></div>
      </div>
      
      {/* Advanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central orb with complex animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-primary-color/8 via-secondary-color/6 to-accent-color/8 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating orbs with different animations */}
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-primary-color/15 to-secondary-color/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-secondary-color/12 to-accent-color/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-accent-color/10 to-primary-color/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-r from-primary-color/12 to-secondary-color/12 rounded-full blur-xl animate-pulse delay-700"></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-secondary-color/8 rounded-full blur-lg animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-accent-color/10 rounded-full blur-md animate-pulse delay-900"></div>
      </div>

      {/* Modern geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Hero Content - Left Side */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
            
            {/* Modern status badge with advanced glassmorphism */}
            <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-primary-color to-secondary-color rounded-full mr-2 sm:mr-3 lg:mr-4 animate-pulse"></div>
              <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent tracking-wide">
                ২০২৪ সালে প্রতিষ্ঠিত
              </span>
            </div>

            {/* Enhanced main heading with modern typography */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-none tracking-tight">
                  <span className="block">শুব্বান দাওয়াতি</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-secondary-color to-accent-color animate-gradient-x">
                    কাফেলা
                  </span>
                </h1>
                
                {/* Modern decorative underline with animation */}
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-20 sm:w-28 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-primary-color via-secondary-color to-accent-color rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              {/* Enhanced tagline */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি
              </p>
            </div>
            
            {/* Enhanced description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা
            </p>
            
            {/* Modern CTA buttons with advanced effects */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 justify-center lg:justify-start">
              <Button 
                href="/about" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-color to-secondary-color hover:from-secondary-color hover:to-primary-color transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary-color/25"
              >
                <span className="relative z-10 font-bold text-base sm:text-lg">আমাদের সম্পর্কে</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
              </Button>
              
              <Button 
                href="/projects" 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden border-2 border-primary-color text-primary-color hover:border-secondary-color hover:text-secondary-color bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-700 transform hover:scale-110 hover:shadow-2xl"
              >
                <span className="relative z-10 font-bold text-base sm:text-lg">আমাদের কার্যক্রম</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-color/10 to-secondary-color/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-color/20 via-secondary-color/20 to-accent-color/20 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105 overflow-hidden">
                <Image 
                  src="/logo/logo_1.jpg" 
                  alt="শুব্বান দাওয়াতি কাফেলা" 
                  fill 
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-primary-color to-secondary-color rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-secondary-color to-accent-color rounded-full animate-pulse delay-500 shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-accent-color to-primary-color rounded-full animate-bounce delay-1000 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 