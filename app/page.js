import Container from '../src/component/ui/Container';
import HeroSection from '../src/component/sections/HeroSection';
import StatsSection from '../src/component/sections/StatsSection';
import FeaturesSection from '../src/component/sections/FeaturesSection';
import CategorySection from '../src/component/sections/CategorySection';
import AboutSection from '../src/component/sections/AboutSection';
import CTASection from '../src/component/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
      {/* Hero Section - Full width */}
      <Container padding={false}>
        <HeroSection />
      </Container>
      
      {/* Stats Section - Dark theme */}
      <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <Container>
          <StatsSection />
        </Container>
      </div>
      
      {/* Features Section - Dark theme */}
      <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-zinc-800 to-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <Container padding={false}>
          <FeaturesSection />
        </Container>
      </div>
      
      {/* Category Section - Dark theme */}
      <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <Container padding={false}>
          <CategorySection />
        </Container>
      </div>
      
      {/* About Section - Dark theme */}
      <div className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-zinc-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-200"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-800"></div>
        </div>
        <Container>
          <AboutSection />
        </Container>
      </div>
      
      {/* CTA Section - Dark theme */}
      <div className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        <Container padding={false}>
          <CTASection />
        </Container>
      </div>
    </div>
  );
}
