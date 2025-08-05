'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/slices/authSlice';
import { addNotification } from '../store/slices/uiSlice';
import { FiUser, FiSettings, FiLogOut, FiChevronDown, FiShield, FiEdit, FiImage, FiUsers } from 'react-icons/fi';

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(addNotification({
      type: 'success',
      message: 'সফলভাবে লগআউট হয়েছে',
    }));
    setIsOpen(false);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'moderator':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin':
        return 'অ্যাডমিন';
      case 'moderator':
        return 'মডারেটর';
      default:
        return 'ব্যবহারকারী';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin':
        return <FiShield className="text-red-600" />;
      case 'moderator':
        return <FiUsers className="text-orange-600" />;
      default:
        return <FiUser className="text-blue-600" />;
    }
  };

  const adminLinks = [
    { href: '/admin', label: 'ড্যাশবোর্ড', icon: <FiSettings /> },
    { href: '/admin/blogs', label: 'ব্লগ ব্যবস্থাপনা', icon: <FiEdit /> },
    { href: '/admin/gallery', label: 'গ্যালারি ব্যবস্থাপনা', icon: <FiImage /> },
    { href: '/admin/users', label: 'ব্যবহারকারী ব্যবস্থাপনা', icon: <FiUsers /> },
  ];

  const userLinks = [
    { href: '/profile', label: 'প্রোফাইল', icon: <FiUser /> },
    { href: '/my-blogs', label: 'আমার ব্লগ', icon: <FiEdit /> },
  ];

  const links = user?.role === 'admin' ? adminLinks : userLinks;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-400 text-white rounded-lg hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          {getRoleIcon(user?.role)}
        </div>
        <span className="font-medium">{user?.name}</span>
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-pink-300 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(user?.role)}`}>
                  {getRoleIcon(user?.role)}
                  <span className="ml-1">{getRoleLabel(user?.role)}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="py-2">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  router.push(link.href);
                  setIsOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors w-full text-left"
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full transition-colors"
            >
              <FiLogOut />
              <span>লগআউট</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 