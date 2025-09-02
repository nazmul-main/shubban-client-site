'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiYoutube, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Footer() {

  const quickLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/projects", label: "আমাদের কার্যক্রম" },
    { href: "/gallery", label: "গ্যালারী" },
    { href: "/blog", label: "ব্লগ" },
    { href: "/donation", label: "দান" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  const services = [
    { href: "/services/education", label: "ইসলামিক শিক্ষা" },
    { href: "/services/dawah", label: "দাওয়াতি কাজ" },
    { href: "/services/youth", label: "যুব উন্নয়ন" },
    { href: "/services/social", label: "সামাজিক সেবা" },
    { href: "/services/cultural", label: "সাংস্কৃতিক কার্যক্রম" },
    { href: "/services/digital", label: "ডিজিটাল দাওয়াত" },
  ];

  const socialLinks = [
    { href: "#", icon: FiFacebook, label: "Facebook", color: "hover:from-blue-600 hover:to-blue-700" },
    { href: "#", icon: FiYoutube, label: "YouTube", color: "hover:from-red-600 hover:to-red-700" },
    { href: "#", icon: FiInstagram, label: "Instagram", color: "hover:from-pink-600 hover:to-purple-600" },
    { href: "#", icon: FiTwitter, label: "Twitter", color: "hover:from-blue-400 hover:to-blue-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-ping delay-700"></div>
      </div>

      {/* Modern geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Image 
                    src="/logo/logo_1.jpg" 
                    alt="Logo" 
                    fill 
                    className="object-contain rounded-xl relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">শুব্বান দাওয়াতি কাফেলা</h3>
                  <p className="text-sm text-gray-300">দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                যুব সমাজের মাঝে ইসলামের সঠিক শিক্ষা প্রচার এবং সমাজ উন্নয়নে কাজ করছে শুব্বান দাওয়াতি কাফেলা। আমরা বিশ্বাস করি যে যুব সমাজের মাধ্যমে একটি সুন্দর সমাজ গঠন সম্ভব।
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center bg-gradient-to-r ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                দ্রুত লিংক
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 group-hover:bg-teal-500 transition-colors duration-300 group-hover:scale-150"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                আমাদের সেবা
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-cyan-500 transition-colors duration-300 group-hover:scale-150"></span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 relative">
                যোগাযোগ
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiMapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      ঢাকা, বাংলাদেশ
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiPhone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">+880170000000</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">+880170000000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiMail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">info@subbandawati.org</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">support@subbandawati.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                <span>Copyright © 2025 </span>
                <span className="text-white font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">শুব্বান দাওয়াতি কাফেলা</span>
                <span> - সর্বস্বত্ব সংরক্ষিত</span>
              </p>
            </div>
            
            {/* Terms and Privacy */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:text-emerald-400"
              >
                শর্তাবলী
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:text-teal-400"
              >
                গোপনীয়তা নীতি
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 