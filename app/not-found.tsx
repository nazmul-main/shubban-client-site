"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add a class to body to indicate this is a 404 page
    document.body.classList.add("page-404");

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("page-404");
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 flex items-center justify-center px-4 relative overflow-hidden"
      data-page="404"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto text-center relative transition-all duration-1000 px-4 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Islamic Quote */}
        <div className="mb-6 p-4 sm:p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-500/30">
          <p
            className="text-sm sm:text-base lg:text-lg italic text-emerald-300 mb-2"
            dir="rtl"
          >
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا"
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            "যে আল্লাহকে ভয় করে, আল্লাহ তার জন্য পথ খুলে দেন" - কুরআন ৬৫:২
          </p>
        </div>
       

        {/* Bengali Text */}
        <div className="mb-6">
          <h2 className="text-base sm:text-2xl lg:text-2xl font-bold text-emerald-300 mb-2">
            পেজটি পাওয়া যায়নি
          </h2>
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-8xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
              404
            </h1>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-lg sm:max-w-2xl mx-auto leading-relaxed">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন তা আমাদের সাইটে নেই। আল্লাহ্‌র রহমতে
            আপনি সঠিক পথে ফিরে যেতে পারেন।
          </p>
        </div>

        {/* Action Buttons - Moved Up */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 text-sm sm:text-base lg:text-lg border border-emerald-400/30 w-full sm:w-auto"
          >
            <span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
              <span className="text-lg sm:text-xl">🏠</span>
              <span>হোমে ফিরুন</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group relative px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-emerald-300 font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-gray-500/25 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 border-2 border-emerald-500/50 hover:border-emerald-400 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
          >
            <span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
              <span className="text-lg sm:text-xl">↩️</span>
              <span>পিছনে যান</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Floating Islamic Elements */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 animate-float">
          <div className="text-lg sm:text-2xl lg:text-3xl opacity-20 sm:opacity-30">
            ☪️
          </div>
        </div>
        <div className="absolute top-32 right-8 sm:top-40 sm:right-20 animate-float-delayed">
          <div className="text-base sm:text-xl lg:text-2xl opacity-20 sm:opacity-30">
            🕋
          </div>
        </div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float">
          <div className="text-base sm:text-xl lg:text-2xl opacity-20 sm:opacity-30">
            📿
          </div>
        </div>
        <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-10 animate-float-delayed">
          <div className="text-lg sm:text-2xl lg:text-3xl opacity-20 sm:opacity-30">
            🕌
          </div>
        </div>
      </div>
    </div>
  );
}
