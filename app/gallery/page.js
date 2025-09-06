'use client'
import React, { useState } from "react";

// ক্যাটাগরি লিস্ট
const categories = [
  "ইফতার বিতরণ",
  "এতিম",
  "কুরবানি",
  "খাদ্য বিতরণ",
  "টিউবওয়েল",
  "ত্রাণ বিতরণ",
  "ভ্যান বিতরণ",
  "শীতবস্ত্র",
  "বৃক্ষরোপণ",
];

// Dummy flat data (API response এর মতো)
const galleryData = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/1011/400/300",
    date: "2020-05-14",
    catagory: "ইফতার বিতরণ"
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/1012/400/300",
    date: "2021-08-21",
    catagory: "এতিম"
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/1013/400/300",
    date: "2022-03-10",
    catagory: "খাদ্য বিতরণ"
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/1014/400/300",
    date: "2023-01-05",
    catagory: "টিউবওয়েল"
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/1015/400/300",
    date: "2020-11-30",
    catagory: "ত্রাণ বিতরণ"
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/1016/400/300",
    date: "2021-06-18",
    catagory: "শীতবস্ত্র"
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/id/1017/400/300",
    date: "2022-12-03",
    catagory: "শীতবস্ত্র"
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/id/1018/400/300",
    date: "2024-04-26",
    catagory: "বৃক্ষরোপণ"
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/id/1019/400/300",
    date: "2023-09-15",
    catagory: "বৃক্ষরোপণ"
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/id/1020/400/300",
    date: "2025-02-22",
    catagory: "কুরবানি"
  }
];

// Year list auto-generate from data
const years = Array.from(
  new Set(galleryData.map(item => item.date.slice(0, 4)))
).sort((a, b) => b - a);

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Responsive style helper
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const isTablet = typeof window !== "undefined" && window.innerWidth < 900 && window.innerWidth >= 600;

  // Filter images by year and category
  const filteredImages = galleryData.filter(
    (img) =>
      img.date.slice(0, 4) === selectedYear &&
      img.catagory === selectedCategory
  );





  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 py-4 relative z-10">
        <h2 className="animate-fade-in-up text-white text-center text-2xl lg:text-4xl my-3 lg:my-6">
          গ্যালারী
        </h2>

        {/* Mobile Category Navigation */}
        <div className="lg:hidden mb-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 p-2">
            <div className="flex overflow-x-auto space-x-1 pb-2">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Desktop Category Menu - Hidden on Mobile */}
          <div className="hidden lg:block" style={{ minWidth: 180 }}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 sticky top-4 shadow-lg">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 border-b border-white/20 pb-2">
                ক্যাটাগরি
              </h3>
              <nav className="space-y-2">
                {categories.map((cat, idx) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 animate-fade-in-left ${selectedCategory === cat
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-emerald-400'
                      }`}
                    style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="flex-1">
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm font-bold rounded-md border border-emerald-500 backdrop-blur-xl transition-colors duration-200 ${
                    selectedYear === year
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 lg:gap-6 justify-center lg:justify-start">
              {filteredImages.length > 0 ? (
                filteredImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className="animate-fade-in-up w-40 lg:w-64 text-center"
                    style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
                  >
                    <img
                      src={img.imageUrl}
                      alt={img.catagory}
                      className="w-full rounded-lg shadow-2xl border border-white/10"
                    />
                    <div className="mt-2 text-sm lg:text-base text-gray-300">{img.catagory}</div>
                    <div className="text-xs text-gray-400">{img.date}</div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 mt-10 text-center">এই ক্যাটাগরিতে কোনো ছবি নেই</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 