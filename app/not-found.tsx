'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add a class to body to indicate this is a 404 page
    document.body.classList.add('page-404');
    
    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('page-404');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 relative overflow-hidden" data-page="404">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Islamic Geometric Pattern */}
        <div className="mb-8">
          <div className="inline-block p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 border-4 border-teal-500 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-4 border-4 border-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-6 flex items-center justify-center">
                <span className="text-2xl">🕌</span>
              </div>
            </div>
          </div>
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-pulse">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Arabic Text */}
        <div className="mb-8">
          <p className="text-3xl font-bold text-gray-800 mb-2" dir="rtl">
            الصفحة غير موجودة
          </p>
          <p className="text-lg text-gray-600" dir="rtl">
            نعتذر، لم نتمكن من العثور على الصفحة التي تبحث عنها
          </p>
        </div>

        {/* Bengali Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            পেজটি পাওয়া যায়নি
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন তা আমাদের সাইটে নেই। 
            আল্লাহ্‌র রহমতে আপনি সঠিক পথে ফিরে যেতে পারেন।
          </p>
        </div>

        {/* Islamic Quote */}
        <div className="mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200">
          <p className="text-lg italic text-gray-700 mb-2" dir="rtl">
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا"
          </p>
          <p className="text-sm text-gray-600">
            "যে আল্লাহকে ভয় করে, আল্লাহ তার জন্য পথ খুলে দেন" - কুরআন ৬৫:২
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>🏠</span>
              <span>হোমে ফিরুন</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="group relative px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-emerald-200 hover:border-emerald-300"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>↩️</span>
              <span>পিছনে যান</span>
            </span>
          </button>
        </div>

        {/* Floating Islamic Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-4xl opacity-20">☪️</div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="text-3xl opacity-20">🕋</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="text-3xl opacity-20">📿</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="text-4xl opacity-20">🕌</div>
        </div>
      </div>
    </div>
  );
}
