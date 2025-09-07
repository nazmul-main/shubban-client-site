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
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  const heroImages = [
    {
      src: '/asset/hero_section_image/hero1.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ১',
      title: 'শুব্বান দাওয়াতি কাফেলা',
      subtitle: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি',
      description: 'যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা। আমরা বিশ্বাস করি যে সঠিক জ্ঞানের মাধ্যমে একটি সুন্দর সমাজ গঠন সম্ভব।'
    },
    {
      src: '/asset/hero_section_image/hero2.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ২',
      title: 'ইসলামের সঠিক শিক্ষা',
      subtitle: 'জ্ঞানের আলোয় আলোকিত হোক যুব সমাজ',
      description: 'আমরা যুব সমাজকে ইসলামের সঠিক শিক্ষা দিয়ে তাদের জীবনকে আলোকিত করতে চাই। প্রতিটি শিক্ষা হোক জীবনের পথপ্রদর্শক।'
    },
    {
      src: '/asset/hero_section_image/hero3.jpg',
      alt: 'শুব্বান দাওয়াতি কাফেলা - হিরো ইমেজ ৩',
      title: 'সমাজ উন্নয়নে কাজ',
      subtitle: 'একসাথে গড়ি সুন্দর ভবিষ্যত',
      description: 'সমাজের কল্যাণে আমাদের অবদান রাখতে আমরা বিভিন্ন সামাজিক কর্মকাণ্ডে অংশগ্রহণ করি। একসাথে কাজ করি একটি সুন্দর ভবিষ্যতের জন্য।'
    }
  ];

  return (
    <section className="relative lg:h-[88vh] md:h-[80vh] h-[80vh] overflow-hidden">
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
        navigation={false}
        modules={[Autoplay, Pagination]}
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
                {/* Left side black shadow for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
                {/* Additional deep shadow layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                {/* Right side subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
                {/* Modern gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-cyan-900/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="text-left text-white px-4 py-6 sm:px-6 lg:px-8 max-w-4xl">
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-4 sm:mb-6 hover:scale-105 transition-all duration-500">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      ২০২৪ সালে প্রতিষ্ঠিত
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3 sm:mb-4 relative">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-1 sm:mb-2 drop-shadow-2xl">{image.title}</span>
                    {/* Title underline effect */}
                    <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-200 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
                    {image.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                    {image.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
                    <Button 
                      href="/about" 
                      variant="primary" 
                      size="sm"
                      className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-emerald-400/20"
                    >
                      <span className="relative font-bold text-sm sm:text-base drop-shadow-lg">আমাদের সম্পর্কে</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
                    </Button>
                    
                    <Button 
                      href="/projects" 
                      variant="outline" 
                      size="sm"
                      className="group relative overflow-hidden border-2 border-emerald-400 text-emerald-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 px-6 py-3 sm:px-8 sm:py-4 rounded-full backdrop-blur-sm"
                    >
                      <span className="relative font-bold text-sm sm:text-base drop-shadow-lg">আমাদের কার্যক্রম</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full"></div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-lg animate-bounce delay-500"></div>
              
              {/* Left side accent line */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400 rounded-full shadow-lg"></div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-ping delay-700"></div>
              <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping delay-1000"></div>
              
              {/* Modern geometric shapes */}
              <div className="absolute top-16 right-16 w-8 h-8 border-2 border-emerald-400/30 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-16 left-16 w-6 h-6 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-sm rotate-12 animate-pulse delay-500"></div>
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
        
        
        .heroSwiper .swiper-pagination {
          bottom: 20px;
        }
        
        .heroSwiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(16, 185, 129, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          margin: 0 4px;
        }
        
        .heroSwiper .swiper-pagination-bullet-active {
          background: #10b981;
          border-color: #10b981;
          transform: scale(1.3);
        }
        
        .heroSwiper .swiper-pagination-bullet:hover {
          background: rgba(16, 185, 129, 0.7);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 