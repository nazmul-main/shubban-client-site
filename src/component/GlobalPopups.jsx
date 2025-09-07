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
      
      {/* User Login Popup - We'll create a separate component for this */}
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
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">My Account</h2>
              <p className="text-gray-300 mt-2">Sign in to your account</p>
            </div>

            {/* Form */}
            <form className="px-6 pb-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-emerald-500 bg-white/10 border-white/20 rounded focus:ring-emerald-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="text-center px-6 pb-6 pt-2 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalPopups;
