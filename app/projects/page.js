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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Mobile Tabs Navigation */}
        <div className="lg:hidden mb-6">
          <div className="bg-background-color rounded-lg shadow-sm border border-gray-200 p-2">
            <div className="flex overflow-x-auto space-x-1 pb-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === item.id
                    ? 'bg-primary-color text-background-color shadow-sm'
                    : 'text-gray-600 hover:text-primary-color hover:bg-gray-100'
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
            <div className="bg-background-color border border-gray-200 rounded-lg p-4 sticky top-4">
              <h3 className="text-lg font-semibold text-primary-color mb-4 border-b border-gray-200 pb-2">
                আমাদের প্রকল্পসমূহ
              </h3>
              <nav className="space-y-2">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 animate-fade-in-left ${activeTab === item.id
                      ? 'bg-primary-color text-background-color font-semibold'
                      : 'text-accent-color hover:bg-gray-100 hover:text-primary-color'
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
              className="bg-background-color border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h1 className="text-2xl font-bold text-primary-color mb-6 animate-fade-in-up">
                {currentContent.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
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