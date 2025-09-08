import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Typography from '../ui/Typography';
import HeroSlider from './HeroSlider';

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
      <HeroSlider heroImages={heroImages} />
    </section>
  );
};

export default HeroSection; 