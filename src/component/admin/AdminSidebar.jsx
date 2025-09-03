'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Home Page', href: '/admin', icon: '🏠' },
  { name: 'Users', href: '/admin/users', icon: '👥' },
  { name: 'Blog Posts', href: '/admin/blogs', icon: '📄' },
  { name: 'About Us', href: '/admin/about', icon: 'ℹ️' },
  { name: 'Contact', href: '/admin/contact', icon: '📞' },
  { name: 'Constitution', href: '/admin/constitution', icon: '📋' },
  { name: 'Media Library', href: '/admin/gallery', icon: '🖼️' },
  { name: 'Branding', href: '/admin/branding', icon: '⭐' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
];

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const handleLogout = () => {
    // Simple redirect to home page instead of logout
    window.location.href = '/';
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-gray-200 text-sm font-bold">AD</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-300 hover:text-white p-1 rounded-md hover:bg-gray-700 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Navigation</h3>
          </div>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                  onClick={onClose}
                >
                  <span className={`mr-3 text-base ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200"
          >
            <span className="mr-2 text-base">🏠</span>
            Return to Home
          </button>
        </div>
      </div>
    </>
  );
}
