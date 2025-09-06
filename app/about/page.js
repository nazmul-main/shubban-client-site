'use client';

import { useState } from 'react';
import { useColors } from '../../src/context/ColorContext';

export default function About() {
  const [activeTab, setActiveTab] = useState('introduction');
  const colors = useColors();

  const sidebarItems = [
    { id: 'introduction', label: 'পরিচিতি', title: 'Introduction' },
    { id: 'principles', label: 'নীতি ও আদর্শ', title: 'Principles & Ideals' },
    { id: 'mission', label: 'লক্ষ্য ও উদ্দেশ্য', title: 'Mission & Vision' },
    { id: 'history', label: 'ইতিহাস', title: 'History' },
    { id: 'leadership', label: 'নেতৃত্ব', title: 'Leadership' },
    { id: 'achievements', label: 'সাফল্য', title: 'Achievements' },
    { id: 'advisor', label: 'উপদেষ্টা', title: 'advisor' },
  ];

  const contentData = {
    introduction: {
      title: 'শুব্বান দাওয়াতি কাফেলা',
      content: `
        শুব্বান দাওয়াতি কাফেলা একটি অরাজনৈতিক, অলাভজনক, শিক্ষামূলক, দাওয়াতি ও মানবিক সংস্থা। 
        সংস্থাটি ২০২৪ সালে যাত্রা শুরু করে  এবং নিবন্ধন নম্বর: (চলমান...)।
        
        প্রতিষ্ঠাতা: আব্দুর রাজ্জাক
        
        আমাদের মূল লক্ষ্য:
        • মানবতার সেবা করা
        • সামাজিক সংস্কার সাধন
        • মহৎ আদর্শ প্রচার
        • সুন্দর মানসিকতা গঠন
        • কুরআন ও সুন্নাহ ভিত্তিক আদর্শ কল্যাণ সমাজ প্রতিষ্ঠা
        
        আমরা বিশ্বাস করি যে ইসলামের সঠিক অনুশীলন এবং সুন্নাহর অনুসরণের মাধ্যমে 
        একটি সুন্দর ও শান্তিপূর্ণ সমাজ গঠন করা সম্ভব। আমাদের সংস্থা বিভিন্ন সামাজিক, 
        শিক্ষামূলক এবং মানবিক কার্যক্রম পরিচালনা করে থাকে।
        
        আমাদের মূল উদ্দেশ্যগুলি হল:
        • ইসলামের সঠিক শিক্ষা প্রচার
        • সামাজিক উন্নয়নে অবদান
        • শিক্ষার প্রসার ঘটানো
        • মানবিক সহায়তা প্রদান
        • যুব সমাজের উন্নয়ন
      `
    },
    principles: {
      title: 'নীতি ও আদর্শ',
      content: `
        আমাদের সংস্থার মূল নীতি ও আদর্শ হল:
        
        • কুরআন ও সুন্নাহর অনুসরণ
        • সত্যতা ও ন্যায়পরায়ণতা
        • সামাজিক দায়িত্ববোধ
        • মানবিক মূল্যবোধ
        • উন্নয়ন ও অগ্রগতি
        • সহযোগিতা ও ঐক্য
        
        আমরা বিশ্বাস করি যে এই নীতিগুলি অনুসরণ করে 
        একটি সুন্দর ও শান্তিপূর্ণ সমাজ গঠন করা সম্ভব।
      `
    },
    mission: {
      title: 'লক্ষ্য ও উদ্দেশ্য',
      content: `
        আমাদের মিশন:
        ইসলামের সঠিক শিক্ষা প্রচার করে একটি সুন্দর ও শান্তিপূর্ণ সমাজ গঠন করা।
        
        আমাদের ভিশন:
        একটি উন্নত, শিক্ষিত এবং নৈতিক মূল্যবোধ সম্পন্ন সমাজ গঠন করা 
        যেখানে প্রতিটি মানুষ সম্মান ও মর্যাদার সাথে বসবাস করতে পারবে।
        
        আমাদের লক্ষ্য:
        •     (ইসলাহুল আকিদা)বা আকিদা সংশোধন: তাওহীদ ও রিসালাতে মুহাম্মদী সম্পর্কে সঠিক জ্ঞান অর্জন ও অনুশীলন,খালেশ এবাদতের জন্য উদ্বুদ্ধ করা এবং জিবনের সকল ক্ষেত্রে নবী মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম এর নেতৃত্বে মনে প্রাণে ও বাস্তবে গ্রহণর মানসিকতা সৃষ্টি করা।

        •     (আদ-দাওয়াহ ওয়াত্ তাবলীগ) বা আহ্বান ও প্রচার:ছাএ ও যুবসমাজের কাছে ইসলামের দাওয়াত দেওয়া এবং তাদেরকে প্রকৃত মুসলিম হিসেবে গড়ে তোলা।

        •     (আত-তানজিম)বা সংগঠন ও সমাজব্যবস্থা: ইসলামী সমাজ ও জীবন ব্যবস্থা প্রতিষ্ঠার লক্ষ্যে ছাএ ও যুবসমাজকে ঐক্যবদ্ধ ও সুসংগঠিত করা

        •     (আত-তাদবীর ওয়াত্ তারবিয়াহ)বা শিক্ষণ ও প্রশিক্ষণ:যুব শক্তি কে সুসংগঠিত করার লক্ষ্যে ইসলামের মূলনীতি সম্পর্কে সঠিক জ্ঞান দান।শিরিক ও বীদআতের মূলোৎপাটন এবং এই লক্ষ্যেকে সামনে রেখে যোগ্য আহলে হাদিস কর্মী গঠনে শুব্বান দাওয়াতি কাফেলা পথ চলা।

        •     (ইসলাহুল মুজতামা)বা সমাজ সংস্কার : যাবতীয় অনৈসলামিক রীতিনীতি ও অপসংস্কৃতি প্রতিহত করে কোরআন ও সহীহ হাদিস ভিত্তিক সমাজ প্রতিষ্ঠাই সার্বিক প্রচেষ্টা চালানো ও সামাজিক সেবা প্রদান করা।
        •     যুব সমাজের উন্নয়ন সাধন করা
      `
    },
    history: {
      title: 'ইতিহাস',
      content: `
        শুব্বান দাওয়াতি কাফেলাের ইতিহাস:
        
        
        ২০২৪: সংস্থার প্রতিষ্ঠা
        ২০২৪: সামাজিক উন্নয়ন প্রকল্প শুরু
        ২০২৫: মানবিক সহায়তা কার্যক্রম শুরু
        ২০২৫: বর্তমান অবস্থা
        
        এই সময়কালে আমরা বিভিন্ন চ্যালেঞ্জের মুখোমুখি হয়েছি 
        কিন্তু আমাদের লক্ষ্য ও উদ্দেশ্য অটুট রেখেছি।
      `
    },
    leadership: {
      title: 'নেতৃত্ব',
      content: `
        পরিচালনা পরিষদ:
        
        চেয়ারম্যান: সোহাগ হোসেন
        সেক্রেটারি জেনারেল : সোহেল রানা 
        যুগ্ন সেক্রেটারি: আবু হামজা মিম
        কোষাধ্যক্ষ: রোমান ইসলাম 
        হিসাব রক্ষক: রাকিবুল হাসান
        সদস্য সচিব: জান্নাতুল নাঈম 
        আহ্বায়ক : মেহেদী হাসান  

        আমাদের নেতৃত্ব দল অভিজ্ঞ ও যোগ্য ব্যক্তিদের নিয়ে গঠিত 
        যারা ইসলামিক শিক্ষা ও সামাজিক উন্নয়নে বিশেষ অবদান রেখেছেন।
      `
    },
    achievements: {
      title: 'সাফল্য',
      content: `
        আমাদের সংস্থার উল্লেখযোগ্য সাফল্যগুলি:
        
        • ১০,০০০+ শিক্ষার্থীকে ইসলামিক শিক্ষা প্রদান
        • ৫০+ মসজিদ নির্মাণ ও সংস্কার
        • ১০০+ পরিবারকে আর্থিক সহায়তা
        • ৫০০+ যুবককে কর্মসংস্থানের সুযোগ
        • ২৫+ গ্রামে উন্নয়ন প্রকল্প বাস্তবায়ন
        
        আমরা আমাদের সাফল্যগুলি আল্লাহর রহমত হিসেবে দেখি 
        এবং ভবিষ্যতে আরও বেশি মানুষের সেবা করার চেষ্টা করব।
      `
    },
    advisor: {
      title: 'উপদেষ্টা',
      content: `

        • উপদেষ্টা: ড. আব্দুল মোমিন মাদানী
        • উপদেষ্টা: ইমরান বিন ইদ্রিস আলী
        • উপদেষ্টা: সুলতান কাজী
        • উপদেষ্টা: মো: বজলু শাহ  
        • উপদেষ্টা: মো: শহিদ
      `
    }
  };

  const currentContent = contentData[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 py-4 relative z-10">

        {/* Mobile Tabs Navigation */}
        <div className="lg:hidden mb-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 p-2">
            <div className="flex overflow-x-auto space-x-1 pb-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">

          {/* Desktop Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 sticky top-4 shadow-lg">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 border-b border-white/20 pb-2">
                আমাদের সম্পর্কে
              </h3>
              <nav className="space-y-2">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 animate-fade-in-left ${activeTab === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-emerald-400'
                      }`}
                    style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div
              key={activeTab}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 shadow-lg"
            >
              <h1 className="text-2xl font-bold text-emerald-400 mb-6 animate-fade-in-up">
                {currentContent.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-200 leading-relaxed whitespace-pre-line animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                  {currentContent.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 