'use client';

import { FiUser } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';

const MyAccountButton = () => {
  const { openUserLoginPopup } = usePopup();

  return (
    <>
      {/* My Account Button */}
      <button
        onClick={openUserLoginPopup}
        className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        aria-label="My Account"
      >
        <FiUser className="w-5 h-5" />
      </button>
    </>
  );
};

export default MyAccountButton;
