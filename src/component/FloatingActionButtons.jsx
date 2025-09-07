'use client';

import { FiHeart, FiUser } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';

const FloatingActionButtons = () => {
  const { openDonationPopup, openUserLoginPopup } = usePopup();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col space-y-2 sm:space-y-3">
      {/* Donation Button */}
      <button
        onClick={openDonationPopup}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="দান করুন"
      >
        <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center font-bold animate-pulse">
          !
        </div>
        {/* Tooltip */}
        <div className="absolute right-12 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          দান করুন
        </div>
      </button>

      {/* User Login Button - Disabled */}
      <button
        onClick={openUserLoginPopup}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full shadow-lg transition-all duration-300 opacity-60 cursor-not-allowed"
        aria-label="My Account - Coming Soon"
        disabled
      >
        <FiUser className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        {/* Tooltip */}
        <div className="absolute right-12 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Coming Soon
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButtons;
