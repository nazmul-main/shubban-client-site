'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Typography from '../ui/Typography';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const heroImages = [
    {
      src: '/asset/hero_section_image/hero1.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ১',
      title: 'শুব্বান দাওয়াতি কাফেলা',
      subtitle: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি'
    },
    {
      src: '/asset/hero_section_image/hero2.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ২',
      title: 'ইসলামের সঠিক শিক্ষা',
      subtitle: 'যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার'
    },
    {
      src: '/asset/hero_section_image/hero3.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ৩',
      title: 'সমাজ উন্নয়নে কাজ',
      subtitle: 'সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা'
    }
  ];

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Swiper Container */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroSwiper h-full"
        loop={true}
        speed={1000}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Gradient overlay for modern look */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-cyan-900/30"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl mb-8 hover:scale-105 transition-all duration-500">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      ২০২৪ সালে প্রতিষ্ঠিত
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6">
                    <span className="block text-white mb-2">{image.title}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                      কাফেলা
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                    {image.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      href="/about" 
                      variant="primary" 
                      size="lg"
                      className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25 px-8 py-4"
                    >
                      <span className="relative z-10 font-bold text-lg">আমাদের সম্পর্কে</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                    </Button>
                    
                    <Button 
                      href="/projects" 
                      variant="outline" 
                      size="lg"
                      className="group relative overflow-hidden border-2 border-emerald-400 text-emerald-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25 px-8 py-4"
                    >
                      <span className="relative z-10 font-bold text-lg">আমাদের কার্যক্রম</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-lg animate-bounce delay-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx global>{`
        .heroSwiper {
          --swiper-navigation-color: #10b981;
          --swiper-pagination-color: #10b981;
          --swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 0.3);
          --swiper-pagination-bullet-inactive-opacity: 0.3;
        }
        
        .heroSwiper .swiper-button-next,
        .heroSwiper .swiper-button-prev {
          background: rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin-top: -30px;
          border: 2px solid rgba(16, 185, 129, 0.3);
          transition: all 0.3s ease;
        }
        
        .heroSwiper .swiper-button-next:hover,
        .heroSwiper .swiper-button-prev:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.6);
          transform: scale(1.1);
        }
        
        .heroSwiper .swiper-button-next:after,
        .heroSwiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .heroSwiper .swiper-pagination {
          bottom: 30px;
        }
        
        .heroSwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(16, 185, 129, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .heroSwiper .swiper-pagination-bullet-active {
          background: #10b981;
          border-color: #10b981;
          transform: scale(1.2);
        }
        
        .heroSwiper .swiper-pagination-bullet:hover {
          background: rgba(16, 185, 129, 0.8);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 