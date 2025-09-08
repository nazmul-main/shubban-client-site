'use client';

import { useState, useRef, useEffect } from 'react';
import { FiUser, FiLogOut, FiChevronDown } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';
import { useAuth } from '../context/AuthContext';
import ConfirmationToast from './ConfirmationToast';

const MyAccountButton = () => {
  const { openUserLoginPopup } = usePopup();
  const { user, logout, isAuthenticated } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated()) {
    return (
      <button
        onClick={openUserLoginPopup}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-500/30 text-emerald-600 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105"
        aria-label="My Account"
      >
        <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    );
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-500/30 text-emerald-600 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105"
          aria-label="My Account"
        >
          <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <button
              onClick={handleLogoutClick}
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <FiLogOut className="w-4 h-4 mr-2" />
              লগআউট
            </button>
          </div>
        )}
      </div>

      {/* Logout Confirmation Toast */}
      <ConfirmationToast
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="লগ আউট নিশ্চিত করুন"
        message="আপনি কি লগআউট করতে চান? এই কাজের পর আপনাকে আবার লগইন করতে হবে।"
        confirmText="লগ আউট"
        cancelText="বাতিল করুন"
        type="warning"
        icon={FiLogOut}
      />
    </>
  );
};

export default MyAccountButton;
