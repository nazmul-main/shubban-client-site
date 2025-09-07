'use client';

import { usePopup } from '../context/PopupContext';
import DonationPopup from './DonationPopup';
import MyAccountButton from './MyAccountButton';

const GlobalPopups = () => {
  const { 
    donationPopupOpen, 
    userLoginPopupOpen, 
    closeDonationPopup, 
    closeUserLoginPopup 
  } = usePopup();

  return (
    <>
      {/* Donation Popup */}
      <DonationPopup 
        isOpen={donationPopupOpen} 
        onClose={closeDonationPopup} 
      />
      
      {/* User Login Popup - Disabled */}
      {userLoginPopupOpen && (
        <div 
          className="fixed inset-0 z-[30000] flex items-center justify-center h-screen 
                     bg-black/50 backdrop-blur-sm" 
          onClick={closeUserLoginPopup}
        >
          <div 
            className="relative bg-gradient-to-br from-gray-800 via-slate-700 to-zinc-800 
                       rounded-2xl shadow-2xl border border-white/20 w-full max-w-md mx-4 
                       animate-modal-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeUserLoginPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6 pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">My Account</h2>
              <p className="text-gray-300 mt-2">Coming Soon</p>
            </div>

            {/* Disabled Message */}
            <div className="px-6 pb-6">
              <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Feature Coming Soon</h3>
                <p className="text-gray-400 text-sm">
                  User login functionality is currently under development. 
                  Please check back later for updates.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center px-6 pb-6 pt-2 border-t border-white/20">
              <button
                onClick={closeUserLoginPopup}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalPopups;
