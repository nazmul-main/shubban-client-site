'use client'
import React, { useState } from "react";

// ক্যাটাগরি লিস্ট
const categories = [
  "সবগুলো",
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
const allYears = Array.from(
  new Set(galleryData.map(item => item.date.slice(0, 4)))
).sort((a, b) => b - a);

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
  // Get years based on selected category
  const getYearsForCategory = (category) => {
    if (category === "সবগুলো") {
      return allYears;
    }
    return Array.from(
      new Set(
        galleryData
          .filter(item => item.catagory === category)
          .map(item => item.date.slice(0, 4))
      )
    ).sort((a, b) => b - a);
  };
  
  const availableYears = getYearsForCategory(selectedCategory);
  const [selectedYear, setSelectedYear] = useState(availableYears[0]);
  
  // Update selected year when category changes
  React.useEffect(() => {
    const newYears = getYearsForCategory(selectedCategory);
    if (newYears.length > 0 && !newYears.includes(selectedYear)) {
      setSelectedYear(newYears[0]);
    }
  }, [selectedCategory]);

  // Responsive style helper
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const isTablet = typeof window !== "undefined" && window.innerWidth < 900 && window.innerWidth >= 600;

  // Filter images by year and category
  const filteredImages = galleryData.filter(
    (img) => {
      const matchesYear = selectedCategory === "সবগুলো" || img.date.slice(0, 4) === selectedYear;
      const matchesCategory = selectedCategory === "সবগুলো" || img.catagory === selectedCategory;
      return matchesYear && matchesCategory;
    }
  );





  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              গ্যালারী
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-6">
            আমাদের কার্যক্রমের ছবি এবং স্মৃতি
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>

        {/* Mobile Category Navigation */}
        <div className="lg:hidden mb-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 p-3">
            <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-white/10 hover:scale-105'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Category Menu - Hidden on Mobile */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sticky top-4 shadow-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-white/20 pb-3">
                ক্যাটাগরি
              </h3>
              <nav className="space-y-3">
                {categories.map((cat, idx) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${selectedCategory === cat
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-white/10 hover:text-emerald-400 hover:scale-105'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="flex-1 min-w-0">
            {/* Year Filter - Only show if not "সবগুলো" category */}
            {selectedCategory !== "সবগুলো" && availableYears.length > 0 && (
              <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
                <div className="text-center mb-4 w-full">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                    {selectedCategory} - বছর নির্বাচন করুন
                  </h3>
                  <p className="text-sm text-gray-400">
                    এই ক্যাটাগরিতে {availableYears.length}টি বছরের ছবি আছে
                  </p>
                </div>
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 text-sm font-bold rounded-lg border border-emerald-500 backdrop-blur-xl transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-emerald-500 text-white shadow-lg transform scale-105'
                        : 'bg-white/10 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:scale-105'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
            
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredImages.length > 0 ? (
                filteredImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg mb-3">
                      <img
                        src={img.imageUrl}
                        alt={img.catagory}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-white mb-1">{img.catagory}</div>
                      <div className="text-xs text-gray-400">{img.date}</div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 text-lg">এই ক্যাটাগরিতে কোনো ছবি নেই</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 