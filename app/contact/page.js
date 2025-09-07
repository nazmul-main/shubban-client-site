'use client';
import { useState } from 'react';

const faqs = [
  {
    category: 'সাধারণ',
    questions: [
      { q: 'কিভাবে শুব্বান দাওয়াতি কাফেলার সাথে যোগাযোগ করবো?', a: 'আমাদের ওয়েবসাইটের যোগাযোগ ফর্ম ব্যবহার করুন অথবা ফোন/ইমেইল করুন।' },
      { q: 'কিভাবে সদস্য হতে পারি?', a: 'সদস্য হতে আমাদের অফিসে যোগাযোগ করুন বা অনলাইনে আবেদন করুন।' },
      { q: 'শুব্বান দাওয়াতি কাফেলার মূল লক্ষ্য কী?', a: 'আমাদের মূল লক্ষ্য মানবতার সেবা, সামাজিক সংস্কার, এবং ইসলামের সঠিক শিক্ষা প্রচার।' },
      { q: 'কিভাবে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে পারি?', a: 'স্বেচ্ছাসেবক হতে আমাদের অফিসে যোগাযোগ করুন বা ওয়েবসাইটে আবেদন করুন।' },
      { q: 'সংস্থার কার্যক্রম কোথায় পরিচালিত হয়?', a: 'আমাদের কার্যক্রম সারা বাংলাদেশে পরিচালিত হয়।' },
      { q: 'কিভাবে সংস্থার প্রকল্প সম্পর্কে জানতে পারি?', a: 'প্রকল্প পাতায় বিস্তারিত তথ্য পাওয়া যাবে।' },
      { q: 'সংস্থার সাথে অনলাইনে যোগাযোগের উপায় কী?', a: 'আমাদের ইমেইল বা ওয়েবসাইটের ফর্ম ব্যবহার করুন।' },
    ],
  },
  {
    category: 'প্রকল্প',
    questions: [
      { q: 'প্রকল্পে কিভাবে অংশগ্রহণ করবো?', a: 'প্রকল্প পাতায় বিস্তারিত তথ্য পাবেন।' },
    ],
  },
  {
    category: 'দান',
    questions: [
      { q: 'কিভাবে অনুদান দিতে পারি?', a: 'দান পাতায় গিয়ে নির্দেশনা অনুসরণ করুন।' },
    ],
  },
  {
    category: 'ইভেন্ট',
    questions: [
      { q: 'সংস্থার ইভেন্ট সম্পর্কে তথ্য কোথায় পাব?', a: 'ইভেন্ট পাতায় সকল তথ্য পাওয়া যাবে।' },
    ],
  },
  {
    category: 'গোপনীয়তা',
    questions: [
      { q: 'আমার তথ্য কি নিরাপদ?', a: 'হ্যাঁ, আপনার তথ্য সম্পূর্ণ নিরাপদভাবে সংরক্ষণ করা হয়।' },
    ],
  },
  {
    category: 'যোগাযোগ মাধ্যম',
    questions: [
      { q: 'কোন কোন মাধ্যমে যোগাযোগ করা যায়?', a: 'ফোন, ইমেইল, ওয়েবসাইট ফর্ম এবং সামাজিক মাধ্যমে যোগাযোগ করা যায়।' },
    ],
  },
  {
    category: 'সদস্যপদ',
    questions: [
      { q: 'সদস্যপদ পেতে কি যোগ্যতা লাগবে?', a: 'সদস্য হতে হলে ন্যূনতম ১৮ বছর বয়স এবং সৎ চরিত্রের অধিকারী হতে হবে।' },
    ],
  },
  {
    category: 'সহযোগিতা',
    questions: [
      { q: 'কিভাবে সংস্থাকে সহযোগিতা করতে পারি?', a: 'আপনি স্বেচ্ছাসেবক, দান বা প্রচারণার মাধ্যমে সহযোগিতা করতে পারেন।' },
    ],
  },
];

const contactInfo = [
  {
    icon: '/phone.svg',
    label: 'ফোন',
    value: '01700996387',
    href: 'tel:01700996387',
  },
  {
    icon: '/email.svg',
    label: 'ইমেইল',
    value: 'shubbandawatikafela.org',
    href: 'shubbandawatikafela.org',
  },
  {
    icon: '/globe.svg',
    label: 'ঠিকানা',
    value: 'সারিয়াকান্দি, বগুড়া, বাংলাদেশ',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [faqCat, setFaqCat] = useState(faqs[0].category);
  const [openIdx, setOpenIdx] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert('ধন্যবাদ!'); };

  const activeFaq = faqs.find(f => f.category === faqCat);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 relative overflow-hidden py-8 px-2 md:px-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              যোগাযোগ করুন
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-6">
            আমাদের সাথে যোগাযোগ করুন এবং আপনার মতামত জানান
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-8 animate-fade-in-up">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg p-6 space-y-4 border border-white/20">
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">যোগাযোগ ফর্ম</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">নাম</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white/10 text-white placeholder-gray-300" placeholder="আপনার নাম লিখুন" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">ফোন</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white/10 text-white placeholder-gray-300" placeholder="আপনার ফোন নম্বর" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">ইমেইল</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white/10 text-white placeholder-gray-300" placeholder="আপনার ইমেইল" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">বিষয়</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white/10 text-white placeholder-gray-300" placeholder="বিষয় লিখুন" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">বার্তা</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white/10 text-white placeholder-gray-300" placeholder="আপনার বার্তা লিখুন" />
              </div>
            </div>
            <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded font-semibold hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105">প্রেরণ করুন</button>
          </form>
          {/* Contact Info & Map */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg p-6 border border-white/20 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">আমাদের ঠিকানা</h2>
            <div className="w-full h-48 rounded mb-4 overflow-hidden">
              <iframe
                title="Google Map - Sariakandi, Bogura"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1234567890123!2d89.5675!3d24.8847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a1234567890%3A0x1234567890abcdef!2sSariakandi%2C%20Bogura%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <li key={info.label} className="flex items-center gap-3">
                  <img src={info.icon} alt={info.label} className="w-6 h-6" />
                  {info.href ? (
                    <a href={info.href} className="text-gray-200 hover:text-emerald-400 transition-colors">{info.value}</a>
                  ) : (
                    <span className="text-gray-200">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg p-6 border border-white/20 mt-10 animate-fade-in-up">
          {/* Mobile Tabs Navigation */}
          <div className="md:hidden mb-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20 p-2">
              <div className="relative">
                <div className="flex overflow-x-auto space-x-1 pb-2">
                  {faqs.map((f, idx) => (
                    <button
                      key={f.category}
                      onClick={() => setFaqCat(f.category)}
                      className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${faqCat === f.category
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-emerald-400 hover:bg-white/10'
                      }`}
                    >
                      {f.category}
                    </button>
                  ))}
                </div>
                {/* Custom underline/scrollbar for active tab */}
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-white/20 rounded-full">
                  <div
                    className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
                    style={{
                      width: `${100 / faqs.length}%`,
                      left: `calc(${faqs.findIndex(f => f.category === faqCat)} * (100% / ${faqs.length}))`,
                      position: 'absolute',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {/* FAQ Sidebar */}
            <div className="hidden md:block col-span-1">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 sticky top-4">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4 border-b border-white/20 pb-2">
                  সাধারণ প্রশ্ন
                </h3>
                <nav className="space-y-2">
                  {faqs.map((f, idx) => (
                    <button
                      key={f.category}
                      onClick={() => setFaqCat(f.category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${faqCat === f.category
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg'
                        : 'text-gray-300 hover:bg-white/10 hover:text-emerald-400'
                      }`}
                    >
                      {f.category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            {/* FAQ Content */}
            <div className="col-span-3">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">প্রশ্ন ও উত্তর</h3>
              <ul className="divide-y divide-white/20">
                {activeFaq.questions.map((q, idx) => (
                  <li key={q.q} className="py-3">
                    <button
                      className="w-full flex justify-between items-center text-left text-gray-200 font-medium focus:outline-none"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      <span>{q.q}</span>
                      <span className="text-emerald-400 text-xl">{openIdx === idx ? '-' : '+'}</span>
                    </button>
                    {openIdx === idx && (
                      <div className="mt-2 text-gray-300 animate-fade-in-up">
                        {q.a}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 