"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ColorContext } from "../context/ColorContext";
import { useContext } from "react";
import Button from "./ui/Button";

import { FiMenu, FiHome, FiInfo, FiFileText, FiTarget, FiImage, FiEdit, FiHeart } from "react-icons/fi";
import MyAccountButton from "./MyAccountButton";
import DonationPopup from "./DonationPopup";

const navItems = [
  { href: "/", label: "হোম", icon: FiHome },
  { href: "/about", label: "আমাদের সম্পর্কে", icon: FiInfo },
  { href: "/constitution", label: "গঠনতন্ত্র", icon: FiFileText },
  { href: "/projects", label: "আমাদের কার্যক্রম", icon: FiTarget },
  { href: "/gallery", label: "গ্যালারী", icon: FiImage },
  { href: "/blog", label: "ব্লগ", icon: FiEdit },
  { href: "/donation", label: "দান", icon: FiHeart },
  { href: "/contact", label: "যোগাযোগ", icon: FiEdit },
];

const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };
  
  return (
    <Link href="/" className={`relative ${sizeClasses[size]} ${className} group block`}>
      <Image 
        src="/logo/logo_1.jpg" 
        alt="Logo" 
        fill 
        className="object-contain rounded-2xl transition-all duration-700 group-hover:scale-110 relative z-10 shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [donationPopupOpen, setDonationPopupOpen] = useState(false);
  
  const colorContext = useContext(ColorContext);
  const colors = colorContext || {
    backgroundColor: '#FFFFFF',
    secondaryColor: '#10B981',
    primaryColor: '#0D9488',
    accentColor: '#0891B2',
    darkColor: '#0F172A',
    lightColor: '#F1F5F9'
  };



  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('.mobile-menu')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className="w-full sticky top-0  bg-gradient-to-br from-gray-900/95 via-slate-800/95 to-zinc-900/95 backdrop-blur-xl shadow-lg border-b border-emerald-500/30">
      {/* Top accent line like Footer */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
      
      {/* Mobile Header */}
      <div className="lg:hidden mobile-menu">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Logo size="md" />
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Donation Button */}
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => setDonationPopupOpen(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiHeart className="mr-1" />
              <span className="relative z-10 text-xs">দান করুন</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Button>
            
            {/* Hamburger Menu */}
            <button 
              onClick={() => setOpen(!open)}
              className="relative p-2 text-gray-200 hover:text-emerald-400 transition-all duration-300 group rounded-lg hover:bg-emerald-500/20"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`transition-all duration-500 ease-in-out ${
          open 
            ? 'max-h-[400px] opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-gradient-to-br from-gray-800/95 via-slate-700/95 to-zinc-800/95 backdrop-blur-xl border-t border-emerald-500/30 shadow-lg">
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                            : 'text-gray-200 bg-gray-700/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <IconComponent className="text-lg" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              {/* Mobile My Account Button */}
              <div className="mt-4 pt-4 border-t border-emerald-500/30">
                <div className="flex justify-center">
                  <MyAccountButton />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Header - Single Line */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="lg" />
            </div>
            
            {/* Navigation Menu */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex space-x-1">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={`flex items-center space-x-1 px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-lg group relative overflow-hidden ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                            : 'text-gray-200 bg-gray-700/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white'
                        }`}
                      >
                        <IconComponent className="text-base" />
                        <span className="group-hover:scale-105 transition-transform duration-300">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            {/* Donation Button and My Account */}
            <div className="flex items-center space-x-2">
              <MyAccountButton />
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => setDonationPopupOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
              >
                <FiHeart className="mr-2" />
                <span className="relative z-10">দান করুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Donation Popup */}
      <DonationPopup 
        isOpen={donationPopupOpen} 
        onClose={() => setDonationPopupOpen(false)} 
      />
    </header>
  );
}