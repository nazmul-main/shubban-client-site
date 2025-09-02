'use client';

import { useState } from 'react';
import { FiCopy, FiCheck, FiHeart, FiCreditCard, FiSmartphone, FiShield, FiUsers, FiTarget } from 'react-icons/fi';

export default function DonationPage() {
  const [copiedItem, setCopiedItem] = useState(null);

  const bankDetails = {
    bankName: "Islami Bank Limited",
    accountNumber: "20507770225100418",
    accountName: "মো: নাজমুল হুদা (সাময়িক) , শুব্বান দাওয়াতি কাফেলা",
    branch: "112/01 , সারিয়াকান্দি বাজার , বগুড়া "
  };

  const mobileBanking = [
    {
      name: "Bkash",
      number: "01785588839",
      type: "Personal"
    },
    {
      name: "Nagad",
      number: "01785588839",
      type: "Personal"
    },
    {
      name: "Rocket",
      number: "01785588839",
      type: "Personal"
    }
  ];

  const copyToClipboard = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const donationCategories = [
    {
      title: "সাধারণ দান",
      description: "সাধারণ কার্যক্রমের জন্য দান",
      icon: FiHeart
    },
    {
      title: "শিক্ষা কার্যক্রম",
      description: "শিক্ষামূলক কার্যক্রমের জন্য দান",
      icon: FiTarget
    },
    {
      title: "মানবিক সহায়তা",
      description: "মানবিক কার্যক্রমের জন্য দান",
      icon: FiUsers
    },
    {
      title: "দাওয়াতি কাজ",
      description: "দাওয়াতি কার্যক্রমের জন্য দান",
      icon: FiShield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 py-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiHeart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">দান করুন</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            আপনার দান আমাদের কাজে সহায়তা করবে। ইসলামের সঠিক শিক্ষা প্রচার এবং মানবতার সেবায় আমাদের সাথে থাকুন।
          </p>
        </div>

        {/* Donation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {donationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <IconComponent className="w-6 h-6 text-emerald-400 mr-2" />
                  <h3 className="text-emerald-400 font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bank Account Details */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-6">
              <FiCreditCard className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-xl font-semibold text-emerald-400">ব্যাংক একাউন্ট</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ব্যাংকের নাম:</span>
                <span className="text-white font-medium">{bankDetails.bankName}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">একাউন্ট নাম:</span>
                <span className="text-white font-medium">{bankDetails.accountName}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">একাউন্ট নম্বর:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-mono font-medium">{bankDetails.accountNumber}</span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                    className="p-1 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    title="কপি করুন"
                  >
                    {copiedItem === 'account' ? <FiCheck className="w-4 h-4 text-green-400" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">শাখা:</span>
                <span className="text-white font-medium">{bankDetails.branch}</span>
              </div>
            </div>
          </div>

          {/* Mobile Banking */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-6">
              <FiSmartphone className="w-6 h-6 text-emerald-400 mr-3" />
              <h2 className="text-xl font-semibold text-emerald-400">মোবাইল ব্যাংকিং</h2>
            </div>
            
            <div className="space-y-4">
              {mobileBanking.map((service, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-emerald-400 font-semibold">{service.name}</span>
                    <span className="text-gray-400 text-sm">{service.type}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">নম্বর:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono font-medium">{service.number}</span>
                      <button
                        onClick={() => copyToClipboard(service.number, service.name)}
                        className="p-1 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                        title="কপি করুন"
                      >
                        {copiedItem === service.name ? <FiCheck className="w-4 h-4 text-green-400" /> : <FiCopy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg p-6 border border-emerald-500/20">
          <h3 className="text-emerald-400 font-semibold mb-4 text-lg">দান করার নিয়ম:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                ব্যাংক একাউন্টে সরাসরি টাকা পাঠাতে পারেন
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                মোবাইল ব্যাংকিং ব্যবহার করে সহজেই দান করতে পারেন
              </li>
            </ul>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                দানের পর আমাদের সাথে যোগাযোগ করুন
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                আপনার দানের জন্য আল্লাহ আপনাকে উত্তম প্রতিদান দিন
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-2">দান সম্পর্কে আরও তথ্যের জন্য যোগাযোগ করুন:</p>
          <p className="text-emerald-400 font-medium">ফোন: ০১৭০০৯৯৬৩৮৭ | ইমেইল: shubbandawatikafela@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
