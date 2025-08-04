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
    value: '01700000000',
    href: 'tel:01700000000',
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
    value: 'বগুড়া, বাংলাদেশ',
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
    <div className="min-h-screen bg-background-color py-8 px-2 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-color text-center mb-10 animate-fade-in-up">যোগাযোগ করুন</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4 border border-gray-200">
            <h2 className="text-xl font-semibold text-primary-color mb-2">যোগাযোগ ফর্ম</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ফোন</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">বিষয়</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">বার্তা</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-color" />
              </div>
            </div>
            <button type="submit" className="bg-primary-color text-background-color px-6 py-2 rounded font-semibold hover:bg-secondary-color transition-colors">প্রেরণ করুন</button>
          </form>
          {/* Contact Info & Map */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-primary-color mb-2">আমাদের ঠিকানা</h2>
            <div className="w-full h-48 rounded mb-4 overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902184308353!2d90.3915633154316!3d23.75087639459195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894b6e6b6b7%3A0x7e8e8e8e8e8e8e8e!2sDhaka!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
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
                    <a href={info.href} className="text-gray-800 hover:text-primary-color transition-colors">{info.value}</a>
                  ) : (
                    <span className="text-gray-800">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mt-10 animate-fade-in-up">
          {/* Mobile Tabs Navigation */}
          <div className="md:hidden mb-6">
            <div className="bg-background-color rounded-lg shadow-sm border border-gray-200 p-2">
              <div className="relative">
                <div className="flex overflow-x-auto space-x-1 pb-2">
                  {faqs.map((f, idx) => (
                    <button
                      key={f.category}
                      onClick={() => setFaqCat(f.category)}
                      className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${faqCat === f.category
                        ? 'bg-primary-color text-background-color shadow-sm'
                        : 'text-gray-600 hover:text-primary-color hover:bg-gray-100'
                      }`}
                    >
                      {f.category}
                    </button>
                  ))}
                </div>
                {/* Custom underline/scrollbar for active tab */}
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-primary-color rounded-full transition-all duration-300"
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
              <div className="bg-background-color border border-gray-200 rounded-lg p-4 sticky top-4">
                <h3 className="text-lg font-semibold text-primary-color mb-4 border-b border-gray-200 pb-2">
                  সাধারণ প্রশ্ন
                </h3>
                <nav className="space-y-2">
                  {faqs.map((f, idx) => (
                    <button
                      key={f.category}
                      onClick={() => setFaqCat(f.category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${faqCat === f.category
                        ? 'bg-primary-color text-background-color font-semibold'
                        : 'text-accent-color hover:bg-gray-100 hover:text-primary-color'
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
              <h3 className="text-lg font-semibold text-primary-color mb-3">প্রশ্ন ও উত্তর</h3>
              <ul className="divide-y divide-gray-200">
                {activeFaq.questions.map((q, idx) => (
                  <li key={q.q} className="py-3">
                    <button
                      className="w-full flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      <span>{q.q}</span>
                      <span className="text-primary-color text-xl">{openIdx === idx ? '-' : '+'}</span>
                    </button>
                    {openIdx === idx && (
                      <div className="mt-2 text-gray-600 animate-fade-in-up">
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