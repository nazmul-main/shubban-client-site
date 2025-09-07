'use client';

import { FiUser } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';

const MyAccountButton = () => {
  const { openUserLoginPopup } = usePopup();

  return (
    <>
      {/* My Account Button - Disabled */}
      <button
        onClick={openUserLoginPopup}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-500/20 backdrop-blur-xl rounded-full border border-gray-500/30 text-gray-400 transition-all duration-300 opacity-60 cursor-not-allowed"
        aria-label="My Account - Coming Soon"
        disabled
      >
        <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </>
  );
};

export default MyAccountButton;
