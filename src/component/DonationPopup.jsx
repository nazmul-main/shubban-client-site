'use client';

import { useState } from 'react';
import { FiX, FiCopy, FiCheck, FiHeart, FiCreditCard, FiSmartphone } from 'react-icons/fi';

const DonationPopup = ({ isOpen, onClose }) => {
  const [copiedItem, setCopiedItem] = useState(null);

  const bankDetails = {
    bankName: "Islami Bank Limited",
    accountNumber: "20507770225100418",
    accountName: "মো: নাজমুল হুদা, শুব্বান দাওয়াতি কাফেলা",
    branch: "112/01 , সারিয়াকান্দি বাজার , বগুড়া "
  };

  const mobileBanking = [
    {
      name: "Bkash",
      number: "01785588839",
      type: "Personal",
      logo: "/logo/bkash_logo.png"
    },
    {
      name: "Nagad",
      number: "01785588839",
      type: "Personal",
      logo: "/logo/nagad_logo.png"
    },
    {
      name: "Rocket",
      number: "01785588839",
      type: "Personal",
      logo: "/logo/roket_logo.png"
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center h-screen bg-black/50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-gray-800 via-slate-700 to-zinc-800 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto animate-modal-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center pt-6 pb-4 px-6 border-b border-white/20">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiHeart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">দান করুন</h2>
          <p className="text-gray-300">আপনার দান আমাদের কাজে সহায়তা করবে</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Bank Account Details */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-4">
              <FiCreditCard className="w-5 h-5 text-emerald-400 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-400">ব্যাংক একাউন্ট</h3>
            </div>
            
            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                  <span className="text-gray-300">ব্যাংকের নাম:</span>
                  <div className="flex items-center"> 
                    <div className="bg-white p-2 rounded-lg mr-3">
                      <img 
                        src="/logo/islami_bank_logo.png" 
                        alt="Islami Bank Logo" 
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-white font-medium">{bankDetails.bankName}</span>
                  </div>
               
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
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-4">
              <FiSmartphone className="w-5 h-5 text-emerald-400 mr-2" />
              <h3 className="text-lg font-semibold text-emerald-400">মোবাইল ব্যাংকিং</h3>
            </div>
            
            <div className="space-y-4">
              {mobileBanking.map((service, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="bg-white p-1.5 rounded-lg mr-2">
                        <img 
                          src={service.logo} 
                          alt={`${service.name} Logo`} 
                          className="w-5 h-5"
                        />
                      </div>
                      <span className="text-emerald-400 font-semibold">{service.name}</span>
                    </div>
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

          {/* Instructions */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20">
            <h4 className="text-emerald-400 font-semibold mb-2">দান করার নিয়ম:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• ব্যাংক একাউন্টে সরাসরি টাকা পাঠাতে পারেন</li>
              <li>• মোবাইল ব্যাংকিং ব্যবহার করে সহজেই দান করতে পারেন</li>
              <li>• দানের পর আমাদের সাথে যোগাযোগ করুন</li>
              <li>• আপনার দানের জন্য আল্লাহ আপনাকে উত্তম প্রতিদান দিক, আমিন    </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-4 border-t border-white/20">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              আপনার দান আমাদের কাজে সহায়তা করবে
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;
