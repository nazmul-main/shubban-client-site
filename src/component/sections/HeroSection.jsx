import Image from 'next/image';
import Button from '../ui/Button';
import Typography from '../ui/Typography';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 p-4 sm:p-6 lg:p-8">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-slate-800/90 to-zinc-900/80"></div>
        
        {/* Brand color overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 via-teal-500/2 to-cyan-500/3"></div>
        
        {/* Mesh gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-teal-500/5"></div>
      </div>
      
      {/* Advanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central orb with complex animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-emerald-500/8 via-teal-500/6 to-cyan-500/8 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating orbs with different animations */}
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-500/12 to-cyan-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-r from-emerald-500/12 to-teal-500/12 rounded-full blur-xl animate-pulse delay-700"></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-teal-500/8 rounded-full blur-lg animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-cyan-500/10 rounded-full blur-md animate-pulse delay-900"></div>
      </div>

      {/* Modern geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Top accent line like Footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Hero Content - Left Side */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
            
            {/* Modern status badge with advanced glassmorphism */}
            <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2 sm:mr-3 lg:mr-4 animate-pulse"></div>
              <span className="text-xs sm:text-sm lg:text-base font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-wide">
                ২০২৪ সালে প্রতিষ্ঠিত
              </span>
            </div>

            {/* Enhanced main heading with modern typography */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-none tracking-tight">
                  <span className="block">শুব্বান দাওয়াতি</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient-x">
                    কাফেলা
                  </span>
                </h1>
                
                {/* Modern decorative underline with animation */}
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-20 sm:w-28 lg:w-40 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              {/* Enhanced tagline */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি
              </p>
            </div>
            
            {/* Enhanced description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা
            </p>
            
            {/* Modern CTA buttons with advanced effects */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 justify-center lg:justify-start">
              <Button 
                href="/about" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25"
              >
                <span className="relative z-10 font-bold text-base sm:text-lg">আমাদের সম্পর্কে</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
              </Button>
              
              <Button 
                href="/projects" 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden border-2 border-emerald-400 text-emerald-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25"
              >
                <span className="relative z-10 font-bold text-base sm:text-lg">আমাদের কার্যক্রম</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Right Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
              {/* Enhanced image container with modern effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              
              {/* Main image with enhanced styling */}
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105">
                <Image 
                  src="/logo/logo_1.jpg" 
                  alt="শুব্বান দাওয়াতি কাফেলা" 
                  fill 
                  className="object-cover rounded-3xl"
                  priority
                />
                
                {/* Modern overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-80 animate-bounce delay-300 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-80 animate-bounce delay-700 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 