'use client';

import { FiHeart, FiUser } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';

const FloatingActionButtons = () => {
  const { openDonationPopup, openUserLoginPopup } = usePopup();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Donation Button */}
      <button
        onClick={openDonationPopup}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="দান করুন"
      >
        <FiHeart className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
          !
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          দান করুন
        </div>
      </button>

      {/* User Login Button */}
      <button
        onClick={openUserLoginPopup}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="My Account"
      >
        <FiUser className="w-6 h-6 text-white" />
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          My Account
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButtons;
