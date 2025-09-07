'use client';

import React, { useState } from 'react';
import { FiBookOpen, FiDownload, FiPrinter, FiChevronLeft, FiChevronRight, FiMenu, FiX, FiMaximize, FiMinimize, FiBookmark, FiSearch, FiType, FiSun, FiMoon, FiHome, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Button from '../../src/component/ui/Button';
import Card from '../../src/component/ui/Card';

// Constitution data from JSON
const constitutionData = {
  "organization": {
    "name": "শুব্বান দাওয়াতী কাফেলা, সারিয়াকান্দি, বগুড়া",
    "nature": "ইসলামী, শরীয়তভিত্তিক, অরাজনৈতিক, অলাভজনক",
    "affiliation": "জমিয়ত শুব্বান আহলে হাদিস,বাংলাদেশ (এর আদলে পরিচালিত)",
    "established_date": "2024-06-26",
    "preamble": "বিসমিল্লাহির রাহমানির রাহিম। শুরু করছি পরম করুণাময়, অসীম দয়ালু, একত্ববাদী আল্লাহর নামে—যিনি সমগ্র মানবজাতিকে ঐক্যের সূত্রে আবদ্ধ করেছেন নেতৃত্ব ও আনুগত্যের মাধ্যমে। দরুদ ও সালাম বর্ষিত হোক মানবতার মহান নেতা, সর্বশেষ রাসূল মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম-এর ওপর। শুব্বান দাওয়াতী কাফেলা—একটি ইসলামী সংগঠন, যার ভিত্তি গঠিত হয়েছে আল-কুরআন ও সহীহ সুন্নাহর ওপর। নৈতিকতা, আদর্শ, জ্ঞান, দাওয়াহ ও কর্মের সমন্বয়ে আমরা একটি আলোকিত সমাজ প্রতিষ্ঠার প্রত্যয়ে এগিয়ে যাচ্ছি।"
  },
  "sections": [
    {
      "id": 1,
      "title": "নাম ও পরিচিতি",
      "clauses": [
        "সংগঠনের নাম: শুব্বান দাওয়াতী কাফেলা, সারিয়াকান্দি, বগুড়া",
        "সংগঠনটি সম্পূর্ণ শরীয়তভিত্তিক, অরাজনৈতিক ও অলাভজনক",
        " জমিয়ত শুব্বান আহলে হাদিস,বাংলাদেশ এর আদলে পরিচালিত",
        "আনুষ্ঠানিক যাত্রা: 26 জুন 2024, বাদ আসর (সাধারণ সভার মাধ্যমে)"
      ]
    },
    {
      "id": 2,
      "title": "লক্ষ্য ও উদ্দেশ্য",
      "objectives": [
        {
          "code": "ক",
          "name": "ইসলাহুল আকিদা",
          "description": "তাওহীদ ও রিসালাতে মুহাম্মদী সম্পর্কিত সঠিক জ্ঞান অর্জন ও অনুশীলন; খালেস ইবাদতের জন্য উদ্বুদ্ধ করা; নবী মুহাম্মদ (সা.)-এর নেতৃত্বে আন্তরিকভাবে জীবন পরিচালনা করা।"
        },
        {
          "code": "খ",
          "name": "আদ-দাওয়াহ ওয়াত্ তাবলীগ",
          "description": "ছাত্র ও যুবসমাজের কাছে ইসলামের দাওয়াত পৌঁছে দেওয়া ও তাদের প্রকৃত মুসলিম হিসেবে গড়ে তোলা।"
        },
        {
          "code": "গ",
          "name": "আত-তানজিম",
          "description": "ইসলামী সমাজ ও জীবন ব্যবস্থা প্রতিষ্ঠার লক্ষ্যে ছাত্র ও যুবসমাজকে ঐক্যবদ্ধ ও সুসংগঠিত করা।"
        },
        {
          "code": "ঘ",
          "name": "আত-তাদবীর ওয়াত্ তারবিয়াহ",
          "description": "ইসলামের মূলনীতি সম্পর্কে সঠিক জ্ঞান দান করে যোগ্য আহলে হাদিস কর্মী গঠন।"
        },
        {
          "code": "ঙ",
          "name": "ইসলাহুল মুজতামা",
          "description": "অনৈসলামিক রীতিনীতি ও কুসংস্কৃতি প্রতিহত করে কোরআন-হাদিস ভিত্তিক সমাজ প্রতিষ্ঠার প্রচেষ্টা এবং সামাজিক সেবা প্রদান।"
        }
      ]
    },
    {
      "id": 3,
      "title": "সদস্যপদ ও নিয়ম",
      "rules": [
        "সদস্যের ন্যূনতম বয়স: ১২ বছর",
        "নির্ধারিত ফরম পূরণ আবশ্যক",
        "আজীবন দাতা সদস্য হিসেবে নারী ও পুরুষ যোগ করতে পারবেন",
        "কুরআন ও সহীহ হাদিসকে পারিবারিক ও সামাজিক জীবনের একমাত্র মানদণ্ড হিসেবে গ্রহণ",
        "পাঁচ ওয়াক্ত নামাজ আদায় বাধ্যতামূলক",
        "মিথ্যার আশ্রয় গ্রহণ না করা",
        "ইসলাম বিরোধী কুকর্ম থেকে দূরে থাকা",
        "দায়িত্বশীল সদস্য ও তাদের মতামতের সম্মান",
        "শুব্বানের পাঁচ মূলনীতির অনুসরণ",
        "মাসিক নির্ধারিত এয়ানত সময়মতো পরিশোধ"
      ]
    },
    {
      "id": 4,
      "title": "পরিচালনা পরিষদ",
      "positions": [
        "চেয়ারম্যান",
        "ডেপুটি/ভাইস-চেয়ারম্যান",
        "সেক্রেটারি জেনারেল",
        "নির্বাহী সেক্রেটারি",
        "সাংগঠনিক সেক্রেটারি",
        "প্রচার সেক্রেটারি",
        "দফতর সেক্রেটারি",
        "কোষাধ্যক্ষ",
        "হিসাবরক্ষক",
        "সিনিয়র সদস্য (২ জন)",
        "সদস্য (২ জন)",
        "উপদেষ্টা পরিষদ"
      ]
    },
    {
      "id": 5,
      "title": "নির্বাচন পদ্ধতি ও মেয়াদ",
      "rules": [
        "নির্বাচন মেয়াদ: প্রতি ২ বছর",
        "প্রত্যেক সদস্য স্বতঃস্ফূর্তভাবে নির্বাচন প্রক্রিয়ায় অংশগ্রহণ করবে",
        "পূর্ববর্তী কমিটি বিলুপ্ত ঘোষণা করলে সাত দিনের মধ্যে নতুন কমিটি ঘোষণা করতে হবে",
        "নির্বাচন কমিশন: ১, ৩ বা ৫ সদস্যের একটি কমিশন গঠন (কমিটির মধ্যে একজন প্রধান থাকবে)",
        "নির্বাচন কমিশন গঠন করবে উপদেষ্টা পরিষদ",
        "চেয়ারম্যান, ডেপুটি চেয়ারম্যান ও সেক্রেটারি জেনারেল গোপন ব্যালটের মাধ্যমে নির্বাচিত হবেন"
      ]
    },
    {
      "id": 6,
      "title": "দায়িত্ব ও ক্ষমতা",
      "roles": {
        "চেয়ারম্যান": [
          "সংগঠনের সর্বোচ্চ দায়িত্বশীল; কার্যক্রম তদারকি",
          "বৈঠকে সভাপতিত্ব ও চূড়ান্ত সিদ্ধান্ত প্রদান",
          "গঠন সংক্রান্ত বড় পরিবর্তনে উপদেষ্টা পরিষদের সাথে পরামর্শ",
          "প্রয়োজনমতো দায়িত্বপ্রাপ্তদের নিয়োগ, অব্যহতি বা পরিবর্তন করতে পারবেন",
          "জরুরি প্রয়োজনে একক সিদ্ধান্ত গ্রহণ করতে পারবেন"
        ],
        "ডেপুটি চেয়ারম্যান": [
          "চেয়ারম্যান অনুপস্থিত হলে তার দায়িত্ব পালন"
        ],
        "সেক্রেটারি জেনারেল": [
          "প্রশাসনিক কার্যক্রম পরিচালনা ও তদারকি",
          "মিটিং আহ্বান ও পরিচালনা",
          "সদস্যদের সাথে যোগাযোগ রক্ষা"
        ],
        "নির্বাহী সেক্রেটারি": [
          "সেক্রেটারি জেনারেলকে প্রশাসনিক তদারকিতে সহায়তা",
          "দাওয়াতি ও কর্মসূচি প্রয়োগে তত্ত্বাবধান",
          "মিটিং সিদ্ধান্ত অনুযায়ী কাজের অগ্রগতি নিশ্চিত করা"
        ],
        "সাংগঠনিক সেক্রেটারি": [
          "নতুন সদস্য অন্তর্ভুক্তি ও যাচাই-বাছাই",
          "সাংগঠনিক প্রতিবেদন প্রকাশ ও অভ্যন্তরীণ যোগাযোগ শক্তিশালী করা",
          "গঠনতন্ত্র রক্ষা ও বাস্তবায়ন নিশ্চিত করা"
        ],
        "প্রচার সেক্রেটারি": [
          "সংগঠনের আদর্শ, লক্ষ্য ও কর্মসূচি প্রচার",
          "পোস্টার, লিফলেট, ব্যানার ও সোশ্যাল মিডিয়া পরিচালনা"
        ],
        "দফতর সেক্রেটারি": [
          "নথিপত্র সংরক্ষণ",
          "মিটিং নোট ও সিদ্ধান্ত প্রস্তুত করা",
          "সাংগঠনিক চিঠিপত্র প্রেরণ"
        ],
        "কোষাধ্যক্ষ ও হিসাবরক্ষক": [
          "পূর্ণ আমানতদার ও বিশ্বস্ত হতে হবে",
          "আয়-ব্যয়ের হিসাব তত্ত্বাবধান ও নিয়ন্ত্রণ",
          "মাসিক ও বাৎসরিক রিপোর্ট প্রকাশ",
          "ব্যাংক একাউন্ট পরিচালনা"
        ]
      }
    },
    {
      "id": 7,
      "title": "উপদেষ্টা পরিষদ",
      "functions": [
        "সংগঠনের নীতি নির্ধারণ ও দিকনির্দেশনা প্রদান",
        "মতবিরোধ বা সংকট সমাধানে মধ্যস্থতা",
        "উপদেষ্টা পরিষদ একটি সত্যন্ত পরিষদ; একজন যোগ্য ব্যক্তি প্রধান হবেন"
      ]
    },
    {
      "id": 8,
      "title": "সভার নিয়মাবলী ও সিদ্ধান্ত গ্রহণ",
      "rules": [
        "মাসে অন্তত একবার সাধারণ সভা অনুষ্ঠিত হবে",
        "মিটিংয়ে গৃহীত সিদ্ধান্ত রেজিস্ট্রারে সংরক্ষণ",
        "মিটিংয়ে অংশগ্রহণের জন্য তিন দিন আগে নোটিশ বহুলভাবে প্রচার করা হবে",
        "অনুপস্থিত সদস্য মিটিংয়ের সিদ্ধান্ত পরিবর্তন করতে পারবে না",
        "জরুরি অবস্থায় চেয়ারম্যান পরিচালনা পরিষদের সঙ্গে সিদ্ধান্ত নিতে পারবেন",
        "শুব্বান কাউন্সিলে পরিচালনা পরিষদ তাদের ইস্তেহার তুলে ধরবে"
      ]
    },
    {
      "id": 9,
      "title": "দাওয়াহ ও সামাজিক কার্যক্রম",
      "activities": [
        "ইসলামী সেমিনার, জুমার খুতবা ও মহিলাদের তালিমের ব্যবস্থা",
        "গরীব ও বিপদগ্রস্তদের মাঝে ত্রাণ ও সহায়তা বিতরণ",
        "সামাজিক উন্নয়ন প্রকল্পে অংশগ্রহণ; মসজিদ-মাদ্রাসা ও কবরস্থান উন্নয়ন সহ অনুদান",
        "বই পড়া প্রতিযোগিতা, মাসিক ইসলামী পত্রিকা ও বই বিতরণ",
        "বার্ষিক ইসলামী সম্মেলন আয়োজন",
        "বন্যা ও দুর্যোগে ত্রাণ, শীতের বস্ত্র ও ঈদ সামগ্রী বিতরণ",
        "বৃক্ষরোপণ কর্মসূচি ও ইফতারি সমাবেশ"
      ]
    },
    {
      "id": 10,
      "title": "শৃঙ্খলা ও অব্যহতি",
      "rules": [
        "ইসলামী শরীয়ত বিরোধী কাজ করলে সংগঠন পদক্ষেপ গ্রহণ করে বহিষ্কার করতে পারবে; পরিচালনা পরিষদের সিদ্ধান্ত চূড়ান্ত",
        "গঠনতন্ত্র অমান্য করলে ব্যবস্থা গ্রহণ করা হবে",
        "সদস্য/পরিচালনার কেউ পদত্যাগ করতে চাইলে চেয়ারম্যান বরাবর লিখিত পদত্যাগপত্র দাখিল করতে হবে",
        "চেয়ারম্যান পদত্যাগ করলে তিন দিনের মধ্যে উপদেষ্টা পরিষদ নতুন চেয়ারম্যান ঘোষণা করবে",
        "যদি পরিচালনা পরিষদে সংঘাত ঘটে তবে উপদেষ্টা পরিষদ আহ্বায়ক কমিটি গঠন করবে (স্থায়ী কমিটি গঠিত না হওয়া পর্যন্ত)"
      ]
    },
    {
      "id": 11,
      "title": "পরিচালনা পরিষদ বিলুপ্তি",
      "clause": "পরিচালনা পরিষদের মধ্যে মারাত্মক দ্বন্দ্ব, কলহ বা অস্থিতিশীলতা দেখা দিলে এবং সংগঠনের স্বাভাবিক কার্যক্রম বাধাগ্রস্ত হলে উপদেষ্টা পরিষদ যথাযথ তদন্ত ও পর্যালোচনার মাধ্যমে সম্পূর্ণ পরিচালনা পরিষদ বিলুপ্ত ঘোষণা করার অধিকার রাখবে; এ সিদ্ধান্ত চূড়ান্ত ও কার্যকর।"
    },
    {
      "id": 12,
      "title": "অর্থনীতি (আয় ও ব্যয়)",
      "income": [
        "মাসিক এয়ানত",
        "সাধারণ দান",
        "রমজানে যাকাত আদায়",
        "সেমিনার-ভিত্তিক দাওয়াত কার্ড ও অনুদান"
      ],
      "expenditure": [
        "যাকাতের জন্য আলাদা হিসাব ও নির্ধারিত খাতে ব্যয়",
        "দরিদ্রদের খাদ্য ও বস্ত্র বিতরণ",
        "ইয়েতিম, বিধবা সহায়তা",
        "বৃক্ষরোপণ, জুমার খুতবা, সেমিনার ও বার্ষিক সম্মেলন",
        "সামাজিক উন্নয়ন প্রকল্প"
      ],
      "accountability": [
        "আয়-ব্যয়ের পূর্ণ হিসাব কোষাধ্যক্ষ ও হিসাবরক্ষকের কাছে সংরক্ষিত থাকবে",
        "প্রতি বছর কোরবানি ঈদের সময় বছরের হিসাব উপস্থাপন ও আগামী বছরের বাজেট ঘোষণা"
      ]
    },
    {
      "id": 13,
      "title": "গঠনতন্ত্র সংশোধন",
      "clauses": [
        "প্রয়োজনে সাধারণ সভায় পরিচালনা পরিষদের সিদ্ধান্ত অনুযায়ী সংশোধনী বিল পাস করা যাবে",
        "সংশোধনের যে ধারায় পরিবর্তন আনা হবে তা সুস্পষ্টভাবে উল্লেখ করতে হবে",
        "সংশোধনী কার্যকর করতে হবে উপদেষ্টা পরিষদের অনুমোদন"
      ]
    }
  ]
};

export default function Constitution() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bookmark, setBookmark] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Download functionality can be implemented here
    console.log('Download PDF');
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleBookmark = () => {
    setBookmark(bookmark === currentSection ? null : currentSection);
  };

  const goToBookmark = () => {
    if (bookmark !== null) {
      setCurrentSection(bookmark);
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-xs sm:text-sm';
      case 'medium': return 'text-sm sm:text-base';
      case 'large': return 'text-base sm:text-lg';
      case 'xlarge': return 'text-lg sm:text-xl';
      default: return 'text-sm sm:text-base';
    }
  };

  const nextSection = () => {
    if (currentSection < constitutionData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (index) => {
    setCurrentSection(index);
    setShowTableOfContents(false);
  };

  const renderSectionContent = (section) => {
    if (section.clauses) {
      return (
        <ul className="space-y-2 sm:space-y-3">
          {section.clauses.map((clause, index) => (
            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{clause}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (section.objectives) {
      return (
        <div className="space-y-4 sm:space-y-6">
          {section.objectives.map((objective, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-3 sm:p-6 border border-emerald-200">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                  {objective.code}
                </span>
                <h4 className="text-sm sm:text-lg font-bold text-emerald-800">{objective.name}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{objective.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (section.positions) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {section.positions.map((position, index) => (
            <div key={index} className="bg-teal-50 rounded-lg p-2 sm:p-4 border border-teal-200">
              <span className="text-teal-800 font-medium text-xs sm:text-sm">{position}</span>
            </div>
          ))}
        </div>
      );
    }

    if (section.rules) {
      return (
        <ul className="space-y-2 sm:space-y-3">
          {section.rules.map((rule, index) => (
            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{rule}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (section.roles) {
      return (
        <div className="space-y-4 sm:space-y-6">
          {Object.entries(section.roles).map(([role, responsibilities]) => (
            <div key={role} className="bg-cyan-50 rounded-xl p-3 sm:p-6 border border-cyan-200">
              <h4 className="text-sm sm:text-lg font-bold text-cyan-800 mb-2 sm:mb-4">{role}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (section.functions) {
      return (
        <ul className="space-y-2 sm:space-y-3">
          {section.functions.map((func, index) => (
            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{func}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (section.activities) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {section.activities.map((activity, index) => (
            <div key={index} className="bg-orange-50 rounded-lg p-2 sm:p-4 border border-orange-200">
              <span className="text-orange-800 font-medium text-xs sm:text-sm">{activity}</span>
            </div>
          ))}
        </div>
      );
    }

    if (section.clause) {
      return (
        <div className="bg-red-50 rounded-xl p-3 sm:p-6 border border-red-200">
          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{section.clause}</p>
        </div>
      );
    }

    if (section.income || section.expenditure || section.accountability) {
      return (
        <div className="space-y-4 sm:space-y-6">
          {section.income && (
            <div className="bg-green-50 rounded-xl p-3 sm:p-6 border border-green-200">
              <h4 className="text-sm sm:text-lg font-bold text-green-800 mb-2 sm:mb-4">আয়</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.income.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {section.expenditure && (
            <div className="bg-yellow-50 rounded-xl p-3 sm:p-6 border border-yellow-200">
              <h4 className="text-sm sm:text-lg font-bold text-yellow-800 mb-2 sm:mb-4">ব্যয়</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.expenditure.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {section.accountability && (
            <div className="bg-indigo-50 rounded-xl p-3 sm:p-6 border border-indigo-200">
              <h4 className="text-sm sm:text-lg font-bold text-indigo-800 mb-2 sm:mb-4">দায়বদ্ধতা</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.accountability.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 ${isFullscreen ? 'fixed inset-0' : ''}`}>
      {/* Fixed Back to Home Button */}
      <div className="fixed top-2 left-2 sm:top-4 sm:left-4">
        <Button
          onClick={handleBackToHome}
          variant="outline"
          className="flex items-center space-x-1 sm:space-x-2 bg-white/90 backdrop-blur-md border border-emerald-200 sm:border-2 text-emerald-700 hover:bg-emerald-50 shadow-lg transition-all duration-200 hover:shadow-xl text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
        >
          <FiArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">হোমে ফিরে যান</span>
          <span className="xs:hidden">হোম</span>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-2 right-2 sm:hidden">
        <Button
          onClick={() => setShowTableOfContents(!showTableOfContents)}
          variant="outline"
          className="flex items-center space-x-1 bg-white/90 backdrop-blur-md border border-emerald-200 text-emerald-700 hover:bg-emerald-50 shadow-lg transition-all duration-200 hover:shadow-xl text-xs px-2 py-1"
        >
          <FiMenu className="w-3 h-3" />
          <span>মেনু</span>
        </Button>
      </div>

      {/* Main Book Reader */}
      <div className="pt-12 sm:pt-8 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-4 sm:gap-6">
            
            {/* Enhanced Table of Contents Sidebar */}
            {showTableOfContents && (
              <div className="lg:sticky lg:top-24 h-fit fixed inset-0 lg:relative lg:inset-auto bg-white lg:bg-transparent">
                <div className="bg-white rounded-lg shadow-xl border border-emerald-200 sm:border-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-2 sm:px-4 sm:py-3 border-b border-emerald-200">
                    <div className="flex items-center justify-between">
                      <h2 className="font-bold text-emerald-800 flex items-center text-sm sm:text-base">
                        <FiBookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        সূচিপত্র
                      </h2>
                      <button
                        onClick={() => setShowTableOfContents(false)}
                        className="p-1 text-emerald-600 hover:bg-emerald-200 rounded"
                      >
                        <FiX className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-2 sm:p-4 max-h-80 sm:max-h-96 overflow-y-auto">
                    <nav className="space-y-1">
                      {constitutionData.sections.map((section, index) => (
                        <button
                          key={section.id}
                          onClick={() => goToSection(index)}
                          className={`w-full text-left p-2 sm:p-3 rounded-lg text-xs sm:text-sm transition-all duration-200 group ${
                            currentSection === index
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md transform scale-105'
                              : 'text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">
                              {section.id}. {section.title}
                            </span>
                            {bookmark === index && (
                              <FiBookmark className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400" />
                            )}
                          </div>
                          {currentSection === index && (
                            <div className="mt-1 text-xs opacity-90">
                              বর্তমান পৃষ্ঠা
                            </div>
                          )}
                        </button>
                      ))}
                    </nav>
                    
                    {/* Quick Stats */}
                    <div className="mt-3 sm:mt-4 pt-0 border-t border-emerald-200">
                      <div className="text-xs text-emerald-600 space-y-1">
                        <div className="flex justify-between">
                          <span>মোট ধারা:</span>
                          <span className="font-medium">{constitutionData.sections.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>পড়া হয়েছে:</span>
                          <span className="font-medium">{currentSection + 1}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>অবশিষ্ট:</span>
                          <span className="font-medium">{constitutionData.sections.length - currentSection - 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Book Content */}
            <div className="space-y-4 sm:space-y-8">
              {/* Enhanced Book Navigation - Sticky */}
              <div className="sticky top-2 sm:top-4 flex flex-row items-center justify-between bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-emerald-200 sm:border-2 p-2 sm:p-4 gap-2">
                <Button
                  onClick={prevSection}
                  disabled={currentSection === 0}
                  variant="outline"
                  className="flex items-center space-x-1 sm:space-x-2 bg-white border border-emerald-200 sm:border-2 text-emerald-700 hover:bg-emerald-50 shadow-sm transition-all duration-200 hover:shadow-md text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                >
                  <FiChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">পূর্ববর্তী</span>
                  <span className="xs:hidden">পূর্ব</span>
                </Button>

                <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  {/* Reading Progress */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <span className="text-emerald-600 text-xs sm:text-sm">পড়ার অগ্রগতি:</span>
                    <div className="w-16 sm:w-20 h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
                        style={{ width: `${((currentSection + 1) / constitutionData.sections.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-emerald-600 text-xs font-medium">
                      {Math.round(((currentSection + 1) / constitutionData.sections.length) * 100)}%
                    </span>
                  </div>

                  {/* Quick Jump */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <span className="text-emerald-600 text-xs sm:text-sm">দ্রুত যান:</span>
                    <select
                      value={currentSection}
                      onChange={(e) => setCurrentSection(parseInt(e.target.value))}
                      className="bg-white border border-emerald-200 rounded-lg px-2 py-1 text-xs sm:text-sm text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {constitutionData.sections.map((section, index) => (
                        <option key={section.id} value={index}>
                          {section.id}. {section.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 sm:border-2 px-2 py-1 rounded-lg shadow-sm">
                    <span className="text-emerald-700 font-medium text-xs">
                      {currentSection + 1} / {constitutionData.sections.length}
                    </span>
                  </div>

                  {/* Bookmark Status */}
                  {bookmark !== null && (
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <FiBookmark className="w-2 h-2 sm:w-3 sm:h-3" />
                      <span className="text-xs">বুকমার্ক: {bookmark + 1}</span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={nextSection}
                  disabled={currentSection === constitutionData.sections.length - 1}
                  variant="outline"
                  className="flex items-center space-x-1 sm:space-x-2 bg-white border border-emerald-200 sm:border-2 text-emerald-700 hover:bg-emerald-50 shadow-sm transition-all duration-200 hover:shadow-md text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                >
                  <span className="hidden xs:inline">পরবর্তী</span>
                  <span className="xs:hidden">পরবর্তী</span>
                  <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>

              {/* Book Page */}
              <div className="bg-white rounded-lg shadow-2xl border border-emerald-200 sm:border-2 overflow-hidden">
                {/* Book Page Header */}
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-2 sm:px-6 sm:py-4 border-b border-emerald-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm sm:text-xl font-bold text-emerald-800">
                      {constitutionData.sections[currentSection].id}. {constitutionData.sections[currentSection].title}
                    </h2>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full"></div>
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-emerald-300 rounded-full"></div>
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-emerald-200 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Book Page Content */}
                <div className={`p-3 sm:p-8 min-h-[400px] sm:min-h-[800px] ${getFontSizeClass()}`}>
                  {/* Preamble for first section */}
                  {currentSection === 0 && (
                    <div className="mb-4 sm:mb-8">
                      <div className="text-center mb-4 sm:mb-6">
                        <h1 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-2 sm:mb-3">গঠনতন্ত্র</h1>
                        <h2 className="text-lg sm:text-2xl text-emerald-600 mb-1 sm:mb-2">{constitutionData.organization.name}</h2>
                        <p className="text-emerald-500 text-sm sm:text-base">{constitutionData.organization.nature}</p>
                        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-emerald-600">
                          <span>প্রতিষ্ঠিত: {constitutionData.organization.established_date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{constitutionData.organization.affiliation}</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 sm:p-6 border border-emerald-200 mb-4 sm:mb-6 shadow-sm">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">{constitutionData.organization.preamble}</p>
                      </div>
                    </div>
                  )}

                  {/* Section Content */}
                  <div className="prose prose-lg max-w-none leading-relaxed">
                    {renderSectionContent(constitutionData.sections[currentSection])}
                  </div>


                </div>

                {/* Book Page Footer */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-2 sm:px-6 sm:py-3 border-t border-emerald-200">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-emerald-600">
                    <span>শুব্বান দাওয়াতী কাফেলা</span>
                    <span>পৃষ্ঠা {currentSection + 1}</span>
                  </div>
                </div>
      </div>


            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .lg\\:sticky { position: static !important; }
          button { display: none !important; }
          .shadow-2xl { box-shadow: none !important; }
          .bg-gradient-to-br { background: white !important; }
          .border-2 { border: 1px solid #ccc !important; }
        }
      `}</style>
    </div>
  );
} 
