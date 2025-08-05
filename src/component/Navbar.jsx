"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ColorContext } from "../context/ColorContext";
import { useAppSelector } from "../store/hooks";
import Button from "./ui/Button";
import LoginModal from "./LoginModal";
import UserDropdown from "./UserDropdown";
import { FiMenu, FiX, FiHome, FiInfo, FiFileText, FiTarget, FiImage, FiEdit, FiPhone, FiHeart } from "react-icons/fi";

const navItems = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/constitution", label: "গঠনতন্ত্র" },
  { href: "/projects", label: "আমাদের কার্যক্রম" },
  { href: "/gallery", label: "গ্যালারী" },
  { href: "/blog", label: "ব্লগ" },
  { href: "/contact", label: "যোগাযোগ" },
];

const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-24 h-24"
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className} group`}>
      <Image 
        src="/logo/logo_1.jpg" 
        alt="Logo" 
        fill 
        className="object-contain rounded-2xl transition-all duration-700 group-hover:scale-110 relative z-10"
      />
    </div>
  );
};

const OrganizationName = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };
  
  return (
    <div className={`text-center ${className}`}>
      <div className={`text-primary-color font-black leading-tight ${sizeClasses[size]} bg-gradient-to-r from-primary-color via-secondary-color to-accent-color bg-clip-text text-transparent`}>
        শুব্বান দাওয়াতি কাফেলা
      </div>
      <div className="text-accent-color text-xs leading-tight font-medium">
        দাওয়াত আমাদের স্বপ্ন
      </div>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const colorContext = useContext(ColorContext);
  const colors = colorContext || {
    backgroundColor: '#FFFFFF',
    secondaryColor: '#E91E63',
    primaryColor: '#0D47A1',
    accentColor: '#994E3B'
  };

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLoginSuccess = (user) => {
    // Role-based redirect logic is now handled in LoginModal
    console.log('Login successful:', user);
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200'
    }`}>
      {/* Mobile Header */}
      <div className="lg:hidden mobile-menu">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Hamburger Menu */}
          <button 
            onClick={() => setOpen(!open)}
            className="relative p-3 text-gray-700 hover:text-primary-color transition-all duration-300 group rounded-xl hover:bg-gray-100 backdrop-blur-sm"
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
          
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <Logo size="sm" />
            <div className="text-center">
              <div className="text-primary-color font-bold leading-tight text-xs">
                শুব্বান দাওয়াতি কাফেলা
              </div>
              <div className="text-accent-color text-xs leading-tight font-medium">
                দাওয়াত আমাদের স্বপ্ন
              </div>
            </div>
          </div>
          
          {/* Action Button */}
                     <Button 
             variant="primary" 
             size="sm"
             className="group relative overflow-hidden bg-gradient-to-r from-blue-400 to-pink-300 hover:from-pink-300 hover:to-blue-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
           >
             <span className="relative z-10">দান করুন</span>
             <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
           </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`transition-all duration-500 ease-in-out ${
          open 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-2xl border-t border-white/30 shadow-2xl">
            <nav className="px-4 sm:px-6 py-6">
                             <ul className="space-y-3">
                 {navItems.map((item, index) => (
                   <li key={item.href}>
                     <Link 
                       href={item.href}
                       onClick={() => setOpen(false)}
                                               className={`flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-blue-400 to-pink-300 text-white shadow-xl' 
                            : 'text-gray-700 bg-gray-100/50 hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-300 hover:text-white'
                        }`}
                       style={{ animationDelay: `${index * 100}ms` }}
                     >
                       <span>{item.label}</span>
                     </Link>
                   </li>
                 ))}
              </ul>
              
              {/* Mobile CTA Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                                     <Link 
                     href="/contact"
                     className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                     onClick={() => setOpen(false)}
                   >
                     <FiPhone className="text-xl" />
                     <span>যোগাযোগ করুন</span>
                   </Link>
                  
                                     {isAuthenticated ? (
                   <div className="w-full">
                     <UserDropdown />
                   </div>
                 ) : (
                   <Button 
                     variant="outline" 
                     size="md"
                     className="w-full group relative overflow-hidden border-2 border-purple-400 text-purple-600 hover:border-indigo-400 hover:text-indigo-600 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                     onClick={() => {
                       setShowLoginModal(true);
                       setOpen(false);
                     }}
                   >
                     <span className="relative z-10">আমার একাউন্ট</span>
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                   </Button>
                 )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

             {/* Desktop Header */}
       <div className="hidden lg:block">
         {/* Main Header - Scrolls up and disappears completely */}
         <div className={`max-w-7xl mx-auto px-8 py-4 transition-all duration-500 ${scrolled ? 'absolute -top-full opacity-0 h-0 overflow-hidden pointer-events-none' : 'relative opacity-100 h-auto'}`}>
           <div className="flex items-center justify-between">
             {/* Logo and Organization Name */}
             <div className="flex items-center space-x-4">
               <Logo size="lg" className="rounded-3xl" />
               
               <div className="space-y-1">
                 <h1 className="text-xl font-bold text-primary-color">
                   শুব্বান দাওয়াতি কাফেলা
                 </h1>
                 <p className="text-sm text-secondary-color font-semibold">
                   দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি
                 </p>
               </div>
             </div>
             
             {/* Action Buttons */}
             <div className="flex items-center space-x-6">
               <Link 
                 href="/contact"
                 className="text-gray-700 hover:text-primary-color transition-all duration-300 font-medium text-sm group relative"
               >
                 <span className="relative">
                   যোগাযোগ
                   <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary-color to-secondary-color group-hover:w-full transition-all duration-500 rounded-full"></span>
                 </span>
               </Link>
               
                               {isAuthenticated ? (
                  <UserDropdown />
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group relative overflow-hidden border-2 border-purple-400 text-purple-600 hover:border-indigo-400 hover:text-indigo-600 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => setShowLoginModal(true)}
                  >
                    <span className="relative z-10">আমার একাউন্ট</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                )}
               
                               <Button 
                  variant="primary" 
                  size="sm"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-400 to-pink-300 hover:from-pink-300 hover:to-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">দান করুন</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>
             </div>
           </div>
         </div>
         
         {/* Desktop Navigation Bar - Always visible and fixed */}
         <nav className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 border-t border-gray-200 shadow-xl">
           <div className="max-w-7xl mx-auto px-8">
             <div className="flex items-center justify-between py-3">
               {/* Logo - Only visible when scrolled */}
               <div className={`transition-all duration-500 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                 <div className="flex items-center space-x-3">
                   <Logo size="sm" className="rounded-xl" />
                   <div className="text-center">
                     <div className="text-primary-color font-bold leading-tight text-xs">
                       দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Navigation Menu */}
               <ul className="flex justify-center space-x-2">
                 {navItems.map((item, index) => (
                   <li key={item.href}>
                     <Link 
                       href={item.href}
                                               className={`flex items-center justify-center px-5 py-2 font-medium text-sm transition-all duration-300 rounded-lg group relative overflow-hidden ${
                          pathname === item.href 
                            ? 'bg-gradient-to-r from-blue-400 to-pink-300 text-white shadow-lg' 
                            : 'text-gray-700 bg-gray-100/50 hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-300 hover:text-white'
                        }`}
                     >
                       <span className="group-hover:scale-105 transition-transform duration-300">{item.label}</span>
                       <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                     </Link>
                   </li>
                 ))}
               </ul>
               
               {/* Empty div for balance */}
               <div className="w-20"></div>
             </div>
           </div>
         </nav>
       </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
      />
    </header>
  );
}