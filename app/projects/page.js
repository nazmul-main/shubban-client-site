'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('conference');

  const sidebarItems = [
    { id: 'conference', label: 'বার্ষিক ইসলামী সম্মেলন' },
    { id: 'eid', label: 'ঈদ সামগ্রী' },
    { id: 'orphans', label: 'এতিম অসহায়দের সাহায্য' },
    { id: 'tree', label: 'বৃক্ষরোপণ কর্মসূচি' },
    { id: 'food', label: 'খাদ্য বিতরণ' },
    { id: 'winter', label: 'শীতবস্ত্র বিতরণ' },
    { id: 'dawah', label: 'ইসলাম প্রচার' },
  ];

  const contentData = {
    conference: {
      title: 'বার্ষিক ইসলামী সম্মেলন',
      content: `আল্লাহ তাআলা বলেন :
মানুষের মধ্যে তোমরাই উত্তম দল যারা মানুষকে কল্যাণের দিকে নির্দেশ দেয় এবং অসৎ কাজ থেকে বিরত রাখে আর আল্লাহর প্রতি বিশ্বাস রাখে। (সূরা আল ইমরান 110)

সমাজ থেকে শিরিক বিদাআত মূলোৎপাটণ করে রাসুলের রেখে যাওয়া সহীহ সুন্নাহ সকলের কাছে পৌঁছে দিতে শুব্বান দাওয়াতী কাফেলার নিরলস প্রচেষ্টা। আহলে হাদিসদের সঠিক আকিদা ও মানহাজ যুব সমাজের দারে পৌঁছে দিতে প্রতি বছর দেশবরেণ্য আলেম, স্কলার ,ও দায়ীদের পদচারণায় মুখরিত হয়ে ওঠে ইসলামী মহা সম্মেলন। বিষয়ভিত্তিক আলোচনার মাধ্যমে যেখানে উপকৃত হন সর্বস্তরের মানুষ।

এছাড়াও সমসাময়িক বিষয়ের উপরে ইসলামী সেমিনার মাসিক আলোচনা সভা ও জুমার খুতবার ব্যবস্থা করা হয়।`
    },
    eid: {
      title: 'ঈদ সামগ্রী',
      content: `আল্লাহ তাআলা বলেন:
তোমরা নেকি অর্জন করতে পারবে না যতক্ষণ না তোমরা তোমাদের প্রিয় বস্তুকে আল্লাহর রাস্তায় দান করবে (সূরা আল ইমরান ৯২)

ঈদের খুশি সব মানুষের মধ্যে ছড়িয়ে দিতে সুখবান দাওয়াতী কাফেলার পক্ষ থেকে প্রতিবছর রমজান ও কুরবানীর ঈদে ঈদ সামগ্রী বিতরণ করা হয় উপকরণ হিসেবে চাল ডাল চিনি তেল আটা মুড়ি ও প্রয়োজনীয় খাদ্য প্রদান করা হয়। এতে ঈদের আনন্দ সবাই পায় সমাজে সৃষ্টি হয় সহমর্মিতা ও ভাতৃত্বের বন্ধন আমাদের এই ক্ষুদ্র প্রয়াস সমাজের দুস্থ ও অসহায় মানুষের মুখে হাসি ফোটায় এবং ঈদের প্রকৃত তাৎপর্য বাস্তবে প্রতিফলিত করে।

আপনারা চাইলে উক্ত মহৎ কাজে শরিক হতে পারেন।
আল্লাহ বলেন:
তারা আল্লাহর ভালোবাসার জন্য খাদ্য দান করে গরিব ইয়াতিম ও বন্দীর প্রতি (সূরা দাহার ৮)`
    },
    orphans: {
      title: 'এতিম অসহায়দের সাহায্য',
      content: `বান্দা অধিকার ফেলা ইতিম ও অসহায়দের পাশে দাঁড়ানোকে ইসলামী ও মানবিক দায়িত্ব হিসেবে বিবেচনা করে দীনহীন ও নির আশ্রয় মানুষের সেবায় সুখবান দাওয়াতী কাফেলার নিবেদিত প্রাণ।

রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন
আমি ও এতিমের অভিভাবক ব্যক্তি জান্নাতে একসাথে থাকব এবং তিনি তার মধ্যমা ও শাহাদাতি আঙ্গুল কে পাশাপাশি করে দেখালেন বুখারী ৩০৪

এতিম ও অসহায়ের পাশে দাঁড়ানো শুধু দায়ের কাজ নয় বরং জান্নাত লাভে একটি মোক্ষম সুযোগ তাই সুখবান দাওয়াতী কাফেলা মাধ্যমে তাদের মুখে হাসি ফোটাতে তারা দৃঢ় প্রতিজ্ঞাবদ্ধ।`
    },
    tree: {
      title: 'বৃক্ষরোপণ কর্মসূচি',
      content: `রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন :
যদি কেয়ামত কায়েম হয়ে যায় আর তোমাদের কারো কাছে একটি চারা গাছ থাকে তাহলে সে যেন তা রোপণ করে ফেলে ( মুসলিম ২৭ ৪৩)

শুব্বান দাওয়াতী কাফেলা পরিবেশ সংরক্ষণ ও সৃষ্টির কল্যাণে কাজ করার লক্ষ্যে প্রতি বছর বৃক্ষরোপণ কর্মসূচি গ্রহণ করে থাকেন আমাদের এই উদ্যোগ শুধু পরিবেশ রক্ষায় নয় বরং ইসলামে পরিবেশ বান্ধব শিক্ষা বাস্তবায়নের অংশ হিসেবে আমরা গ্রহণ করে থাকি। সেই লক্ষ্যে বিভিন্ন মাদ্রাসা মসজিদ কবরস্থান ইয়াতিমখানা ও ঈদগাহ ময়দান সহ গরিবদের আর্থিকভাবে স্বাবলম্বী করে দিতে বাগান তৈরি করার প্রকল্প হাতে নিয়েছে এই সংগঠনটি।`
    },
    food: {
      title: 'খাদ্য বিতরণ',
      content: `আল্লাহ তাআলা বলেন:
"যারা আল্লাহর পথে নিজেদের সম্পদ ব্যয় করে, তাদের উদাহরণ একটি বীজের মতো, যা সাতটি শীষ উৎপন্ন করে, প্রতিটি শীষে একশত দানা থাকে। আর আল্লাহ যাকে ইচ্ছা বহুগুণে বাড়িয়ে দেন।" (সূরা বাকারা ২৬১)

রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন:
"যে ব্যক্তি কোনো মুমিনের একটি কষ্ট দূর করবে, আল্লাহ কিয়ামতের দিন তার একটি কষ্ট দূর করবেন।" (মুসলিম ২৫৭৭)

শুব্বান দাওয়াতী কাফেলা ক্ষুধার্ত মানুষের মুখে হাসি ফোটানোর মহান কাজে নিয়োজিত। প্রতি মাসে বিভিন্ন এলাকায় খাদ্য বিতরণ কর্মসূচির আয়োজন করা হয়। চাল, ডাল, তেল, লবণ, চিনি, আটা সহ প্রয়োজনীয় খাদ্যসামগ্রী দিয়ে অসহায় পরিবারগুলোর পাশে দাঁড়ানো হয়।

বিশেষ করে রমজান মাসে ইফতার বিতরণ, ঈদ উপলক্ষে খাদ্য সহায়তা এবং দুর্যোগকালীন ত্রাণ বিতরণের মাধ্যমে হাজার হাজার পরিবারকে সহায়তা করা হয়। এই কর্মসূচির মাধ্যমে সমাজে ভ্রাতৃত্ববোধ ও সহমর্মিতা বৃদ্ধি পায় এবং ইসলামের সেবার আদর্শ বাস্তবায়িত হয়।

আল্লাহ বলেন:
"তোমরা আল্লাহর সন্তুষ্টির জন্য যা কিছু ব্যয় করবে, তা তোমাদের কাছে পূর্ণরূপে ফিরিয়ে দেওয়া হবে এবং তোমাদের প্রতি কোনো জুলুম করা হবে না।" (সূরা বাকারা ২৭২)`
    },
    winter: {
      title: 'শীতবস্ত্র বিতরণ',
      content: `রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন:
"যে ব্যক্তি কোনো মুমিনের একটি কষ্ট দূর করবে, আল্লাহ কিয়ামতের দিন তার একটি কষ্ট দূর করবেন।" (মুসলিম ২৫৭৭)

আল্লাহ তাআলা বলেন:
"তোমরা নেকি অর্জন করতে পারবে না যতক্ষণ না তোমরা তোমাদের প্রিয় বস্তুকে আল্লাহর রাস্তায় দান করবে।" (সূরা আল ইমরান ৯২)

শীতের কষ্ট থেকে অসহায় মানুষদের রক্ষা করার মহান কাজে শুব্বান দাওয়াতী কাফেলা প্রতিবছর শীতবস্ত্র বিতরণ কর্মসূচি পরিচালনা করে। কম্বল, শীতের কাপড়, মোজা, টুপি সহ প্রয়োজনীয় শীতবস্ত্র দিয়ে হাজার হাজার পরিবারকে সহায়তা করা হয়।

বিশেষ করে উত্তরাঞ্চলের দরিদ্র এলাকায়, পাহাড়ি অঞ্চলে এবং শহরের বস্তিতে বসবাসকারী অসহায় পরিবারগুলোর জন্য এই কর্মসূচি পরিচালিত হয়। শীতের তীব্রতা থেকে রক্ষা পেতে যেসব পরিবারের কাছে পর্যাপ্ত শীতবস্ত্র নেই, তাদের পাশে দাঁড়ানো হয়।

এই কর্মসূচির মাধ্যমে শুধু শারীরিক কষ্টই দূর হয় না, বরং মানবিক মূল্যবোধ ও ভ্রাতৃত্ববোধও জাগ্রত হয়। সমাজের ধনী-দরিদ্রের মধ্যে সেতুবন্ধন তৈরি হয় এবং ইসলামের সেবার আদর্শ বাস্তবায়িত হয়।

রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন:
"মুসলমান মুসলমানের ভাই, সে তার প্রতি জুলুম করবে না এবং তাকে অসহায় অবস্থায় ফেলে রাখবে না।" (বুখারী ২৪৪২)`
    },
    dawah: {
      title: 'ইসলাম প্রচার',
      content: `আল্লাহ তাআলা বলেন:
"তোমাদের মধ্যে এমন একটি দল থাকা উচিত যারা কল্যাণের দিকে আহ্বান করবে, সৎকাজের নির্দেশ দেবে এবং অসৎকাজ থেকে নিষেধ করবে। আর তারাই সফলকাম।" (সূরা আল ইমরান ১০৪)

রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন:
"যে ব্যক্তি আমার পক্ষ থেকে একটি কথা শুনল, তারপর তা অন্যদের কাছে পৌঁছে দিল, আমি তার জন্য জান্নাতে একটি প্রাসাদ তৈরি করব।" (তিরমিজি ২৬৫৬)

শুব্বান দাওয়াতী কাফেলার মূল লক্ষ্যই হল ইসলামের সঠিক শিক্ষা মানুষের দোরগোড়ায় পৌঁছে দেওয়া। প্রতিদিন মসজিদে, মাদ্রাসায়, স্কুল-কলেজে এবং বিভিন্ন সামাজিক প্রতিষ্ঠানে ইসলামের মৌলিক শিক্ষা প্রচার করা হয়।

দাওয়াতের ক্ষেত্রে বিশেষ গুরুত্ব দেওয়া হয়:
- তাওহীদের সঠিক শিক্ষা
- সুন্নাহর অনুসরণ
- শিরক ও বিদআত থেকে দূরে থাকা
- নৈতিকতা ও চরিত্র গঠন
- পারিবারিক ও সামাজিক দায়িত্ব

প্রতি সপ্তাহে বিভিন্ন এলাকায় দাওয়াতি সফর, মাসিক আলোচনা সভা, যুব সমাজের জন্য বিশেষ কর্মশালা এবং মহিলাদের জন্য আলাদা শিক্ষামূলক সেশন পরিচালিত হয়। এছাড়াও সামাজিক যোগাযোগ মাধ্যমের মাধ্যমে ইসলামের শিক্ষা ছড়িয়ে দেওয়ার কাজও করা হয়।

আল্লাহ বলেন:
"তোমরা সর্বোত্তম পন্থায় তোমাদের রবের দিকে দাওয়াত দাও এবং সুন্দর পদ্ধতিতে তাদের সাথে বিতর্ক করো।" (সূরা নাহল ১২৫)

এই মহান কাজে অংশগ্রহণ করে আল্লাহর সন্তুষ্টি অর্জন এবং সমাজে ইসলামের আলো ছড়িয়ে দেওয়ার সুযোগ পাওয়া যায়।`
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

      <div className="container mx-auto px-2 py-4 relative z-10">
        <h2 className="animate-fade-in-up text-white text-center text-2xl lg:text-4xl my-3 lg:my-6">
          আমাদের প্রকল্পসমূহ
        </h2>

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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 sticky top-4 shadow-lg">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 border-b border-white/20 pb-2">
                আমাদের প্রকল্পসমূহ
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
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 shadow-lg"
            >
              <h1 className="text-2xl font-bold text-emerald-400 mb-6 animate-fade-in-up">
                {currentContent.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-200 leading-relaxed whitespace-pre-line animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                  {currentContent.content.split('\n').map((line, index) => {
                    // Check if line contains Allah's words (আল্লাহ তাআলা বলেন)
                    if (line.includes('আল্লাহ তাআলা বলেন') || line.includes('আল্লাহ বলেন')) {
                      return (
                        <div key={index} className="my-4 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-l-4 border-emerald-400 rounded-r-lg animate-pulse hover:scale-105 transition-transform duration-300">
                          <div className="text-emerald-300 font-bold text-sm mb-2 flex items-center">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-ping"></span>
                            আল্লাহর বাণী
                          </div>
                          <div className="text-emerald-100 font-medium italic text-lg leading-relaxed">
                            {line}
                          </div>
                        </div>
                      );
                    }
                    // Check if line contains Rasul's hadith (রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন)
                    if (line.includes('রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন') || line.includes('রাসূল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন')) {
                      return (
                        <div key={index} className="my-4 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400 rounded-r-lg animate-pulse hover:scale-105 transition-transform duration-300">
                          <div className="text-cyan-300 font-bold text-sm mb-2 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></span>
                            রাসূলের হাদিস
                          </div>
                          <div className="text-cyan-100 font-medium italic text-lg leading-relaxed">
                            {line}
                          </div>
                        </div>
                      );
                    }
                    // Check if line contains Sura reference (সূরা)
                    if (line.includes('সূরা') && line.includes('আয়াত')) {
                      return (
                        <div key={index} className="my-4 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-4 border-purple-400 rounded-r-lg animate-pulse hover:scale-105 transition-transform duration-300">
                          <div className="text-purple-300 font-bold text-sm mb-2 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-ping"></span>
                            কুরআনের আয়াত
                          </div>
                          <div className="text-purple-100 font-medium italic text-lg leading-relaxed">
                            {line}
                          </div>
                        </div>
                      );
                    }
                    // Check if line contains Hadith reference (বুখারী, মুসলিম, তিরমিজি)
                    if (line.includes('বুখারী') || line.includes('মুসলিম') || line.includes('তিরমিজি')) {
                      return (
                        <div key={index} className="my-2 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-2 border-yellow-400 rounded-r-md">
                          <div className="text-yellow-300 text-sm font-medium">
                            {line}
                          </div>
                        </div>
                      );
                    }
                    // Regular content
                    return (
                      <div key={index} className="my-2">
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}