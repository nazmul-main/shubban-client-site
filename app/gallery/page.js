'use client'
import React, { useState } from "react";

// ক্যাটাগরি লিস্ট
const categories = [
  "ইফতার বিতরণ",
  "এতিম",
  "কুরবানি",
  "খাদ্য বিতরণ",
  "টিউবওয়েল",
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
    catagory: "টিউবওয়েল"
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
  const [selectedTab, setSelectedTab] = useState("ছবি");
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

  // Responsive styles
  const containerStyle = {
    padding: isMobile ? 8 : 24,
    maxWidth: 1200,
    margin: "0 auto"
  };

  const mainFlexStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 16 : 32,
    alignItems: "flex-start"
  };

  const categoryMenuStyle = {
    minWidth: isMobile ? "100%" : 180,
    background: "#f8fafc",
    borderRadius: 12,
    padding: isMobile ? "8px 0" : "24px 0",
    boxShadow: "0 1px 4px #0001",
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    overflowX: isMobile ? "auto" : "visible",
    gap: isMobile ? 0 : 0
  };

  const categoryItemStyle = (cat) => ({
    padding: isMobile ? "8px 12px" : "8px 24px",
    cursor: "pointer",
    color: selectedCategory === cat ? "#059669" : "#222",
    fontWeight: selectedCategory === cat ? "bold" : "normal",
    borderBottom: isMobile && selectedCategory === cat ? "2px solid #059669" : "none",
    borderLeft: !isMobile && selectedCategory === cat ? "3px solid #059669" : "3px solid transparent",
    background: selectedCategory === cat ? "#fff" : "transparent",
    whiteSpace: "nowrap"
  });

  const galleryGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: isMobile ? 12 : 24,
    justifyContent: isMobile ? "center" : "flex-start"
  };

  const imageCardStyle = {
    width: isMobile ? 160 : 250,
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <h2
        className="animate-fade-in-up"
        style={{ textAlign: "center", fontSize: isMobile ? 22 : 32, margin: isMobile ? "12px 0" : "24px 0" }}
      >
        গ্যালারী
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, margin: isMobile ? "12px 0" : "24px 0" }}>
        <button
          onClick={() => setSelectedTab("ছবি")}
          style={{
            background: selectedTab === "ছবি" ? "#d1fae5" : "#fff",
            border: "1px solid #10b981",
            padding: isMobile ? "6px 12px" : "8px 24px",
            borderRadius: 8,
            fontWeight: "bold",
            color: "#065f46",
            fontSize: isMobile ? 14 : 16
          }}
        >
          ছবি
        </button>
        <button
          onClick={() => setSelectedTab("ভিডিও")}
          style={{
            background: selectedTab === "ভিডিও" ? "#d1fae5" : "#fff",
            border: "1px solid #10b981",
            padding: isMobile ? "6px 12px" : "8px 24px",
            borderRadius: 8,
            fontWeight: "bold",
            color: "#065f46",
            fontSize: isMobile ? 14 : 16
          }}
        >
          ভিডিও
        </button>
      </div>

      {selectedTab === "ছবি" ? (
        <div style={mainFlexStyle}>
          {/* Category Menu */}
          <div style={categoryMenuStyle}>
            {categories.map((cat, idx) => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="animate-fade-in-left"
                style={{ ...categoryItemStyle(cat), animationDelay: `${0.1 + idx * 0.07}s` }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Gallery Images */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    background: selectedYear === year ? "#10b981" : "#fff",
                    color: selectedYear === year ? "#fff" : "#065f46",
                    border: "1px solid #10b981",
                    borderRadius: 6,
                    padding: isMobile ? "4px 10px" : "6px 18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: isMobile ? 13 : 15,
                    marginBottom: isMobile ? 6 : 0
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
            <div style={galleryGridStyle}>
              {filteredImages.length > 0 ? (
                filteredImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className="animate-fade-in-up"
                    style={{ ...imageCardStyle, animationDelay: `${0.1 + idx * 0.07}s` }}
                  >
                    <img
                      src={img.imageUrl}
                      alt={img.catagory}
                      style={{ width: "100%", borderRadius: 10, boxShadow: "0 2px 8px #0001" }}
                    />
                    <div style={{ marginTop: 8, fontSize: isMobile ? 13 : 15 }}>{img.catagory}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{img.date}</div>
                  </div>
                ))
              ) : (
                <div style={{ color: "#888", marginTop: 40 }}>এই ক্যাটাগরিতে কোনো ছবি নেই</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "#888", marginTop: 40 }}>
          ভিডিও গুলো শীঘ্রই আসছে...
        </div>
      )}
    </div>
  );
} 