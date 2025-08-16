"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ColorContext } from "../context/ColorContext";
import { useContext } from "react";
import Button from "./ui/Button";

import { FiMenu, FiHome, FiInfo, FiFileText, FiTarget, FiImage, FiEdit, FiHeart } from "react-icons/fi";

const navItems = [
  { href: "/", label: "হোম", icon: FiHome },
  { href: "/about", label: "আমাদের সম্পর্কে", icon: FiInfo },
  { href: "/constitution", label: "গঠনতন্ত্র", icon: FiFileText },
  { href: "/projects", label: "আমাদের কার্যক্রম", icon: FiTarget },
  { href: "/gallery", label: "গ্যালারী", icon: FiImage },
  { href: "/blog", label: "ব্লগ", icon: FiEdit },
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-pink-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  const colorContext = useContext(ColorContext);
  const colors = colorContext || {
    backgroundColor: '#FFFFFF',
    secondaryColor: '#E91E63',
    primaryColor: '#0D47A1',
    accentColor: '#994E3B'
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
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200">
      {/* Mobile Header */}
      <div className="lg:hidden mobile-menu">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Logo size="md" />
          
          {/* Hamburger Menu */}
          <button 
            onClick={() => setOpen(!open)}
            className="relative p-2 text-gray-700 hover:text-primary-color transition-all duration-300 group rounded-lg hover:bg-gray-100"
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`transition-all duration-500 ease-in-out ${
          open 
            ? 'max-h-[400px] opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-blue-400 to-pink-300 text-white shadow-lg' 
                            : 'text-gray-700 bg-gray-100/50 hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-300 hover:text-white'
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
              
              {/* Mobile Donation Button */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="primary" 
                  size="md"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-400 to-pink-300 hover:from-pink-300 hover:to-blue-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FiHeart className="mr-2" />
                  <span className="relative z-10">দান করুন</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>
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
              <ul className="flex space-x-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={`flex items-center space-x-2 px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg group relative overflow-hidden ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-blue-400 to-pink-300 text-white shadow-lg' 
                            : 'text-gray-700 bg-gray-100/50 hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-300 hover:text-white'
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
            
            {/* Donation Button */}
            <div className="flex items-center">
              <Button 
                variant="primary" 
                size="sm"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-400 to-pink-300 hover:from-pink-300 hover:to-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
              >
                <FiHeart className="mr-2" />
                <span className="relative z-10">দান করুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}