'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('conference');

  const sidebarItems = [
    { id: 'conference', label: 'বার্ষিক ইসলামী সম্মেলন' },
    { id: 'eid', label: 'ঈদ সামগ্রী বিতরণ' },
    { id: 'food', label: 'খাদ্য বিতরণ' },
    { id: 'winter', label: 'শীতবস্ত্র বিতরণ' },
    { id: 'tree', label: 'বৃক্ষরোপণ কর্মসূচি' },
    { id: 'orphans', label: 'এতিম ও দুস্থ সহায়তা' },
    { id: 'medical', label: 'ইসলাম প্রচার' },
  ];

  const contentData = {
    conference: {
      title: 'বার্ষিক ইসলামী সম্মেলন',
      content: `প্রতি বছর আমাদের সংস্থা বার্ষিক ইসলামী সম্মেলনের আয়োজন করে, যেখানে দেশ-বিদেশের আলেমগণ ইসলামের বিভিন্ন গুরুত্বপূর্ণ বিষয় নিয়ে আলোচনা করেন। এতে হাজার হাজার মানুষ অংশগ্রহণ করেন এবং ইসলামের সঠিক শিক্ষা লাভ করেন।`
    },
    eid: {
      title: 'ঈদ সামগ্রী বিতরণ',
      content: `ঈদ উপলক্ষে দরিদ্র ও অসহায় পরিবারের মাঝে নতুন পোশাক ও খাদ্য সামগ্রী বিতরণ করা হয়, যাতে তারা আনন্দের সাথে ঈদ উদযাপন করতে পারে।`
    },
    food: {
      title: 'খাদ্য বিতরণ',
      content: `বিভিন্ন দুর্যোগ ও সংকটকালে অসহায় মানুষের মাঝে খাদ্য সামগ্রী বিতরণ করা হয়।`
    },
    winter: {
      title: 'শীতবস্ত্র বিতরণ',
      content: `শীত মৌসুমে দরিদ্র ও ছিন্নমূল মানুষের মাঝে কম্বল ও শীতবস্ত্র বিতরণ করা হয়।`
    },
    tree: {
      title: 'বৃক্ষরোপণ কর্মসূচি',
      content: `পরিবেশ রক্ষায় আমাদের সংস্থা নিয়মিত বৃক্ষরোপণ কর্মসূচির আয়োজন করে থাকে।`
    },
    orphans: {
      title: 'এতিম ও দুস্থ সহায়তা',
      content: `এতিম ও দুস্থ শিশুদের শিক্ষা, খাদ্য ও চিকিৎসা সহায়তা প্রদান করা হয়।`
    },
    medical: {
      title: 'বিনামূল্যে চিকিৎসা ক্যাম্প',
      content: `দরিদ্র মানুষের জন্য বিনামূল্যে চিকিৎসা ক্যাম্পের আয়োজন করা হয়, যেখানে বিশেষজ্ঞ ডাক্তারগণ চিকিৎসা সেবা প্রদান করেন।`
    },
  };

  const currentContent = contentData[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Mobile Tabs Navigation */}
        <div className="lg:hidden mb-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 p-2">
            <div className="flex overflow-x-auto space-x-1 pb-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === item.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-teal-400 hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 sticky top-4 shadow-lg">
              <h3 className="text-lg font-semibold text-teal-400 mb-4 border-b border-white/20 pb-2">
                আমাদের প্রকল্পসমূহ
              </h3>
              <nav className="space-y-2">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 animate-fade-in-left ${activeTab === item.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-teal-400'
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
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 shadow-lg"
            >
              <h1 className="text-2xl font-bold text-teal-400 mb-6 animate-fade-in-up">
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