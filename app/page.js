import Container from '../src/component/ui/Container';
import HeroSection from '../src/component/sections/HeroSection';
import StatsSection from '../src/component/sections/StatsSection';
import FeaturesSection from '../src/component/sections/FeaturesSection';
import CategorySection from '../src/component/sections/CategorySection';
import AboutSection from '../src/component/sections/AboutSection';
import CTASection from '../src/component/sections/CTASection';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Full width */}
      <Container padding={false}>
        <HeroSection />
      </Container>
      
      {/* Stats Section - With responsive spacing */}
      <div className="py-8 md:py-12 lg:py-16">
        <Container>
          <StatsSection />
        </Container>
      </div>
      
      {/* Features Section - Full width with background */}
      <div className="py-8 md:py-12 lg:py-16">
        <Container padding={false}>
          <FeaturesSection />
        </Container>
      </div>
      
      {/* Category Section - Full width */}
      <div className="py-8 md:py-12 lg:py-16">
        <Container padding={false}>
          <CategorySection />
        </Container>
      </div>
      
      {/* About Section - Contained */}
      <div className="py-8 md:py-12 lg:py-16">
        <Container>
          <AboutSection />
        </Container>
      </div>
      
      {/* CTA Section - Full width */}
      <div className="py-8 md:py-12 lg:py-16">
        <Container padding={false}>
          <CTASection />
        </Container>
      </div>
    </div>
  );
}
