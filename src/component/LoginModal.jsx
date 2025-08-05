'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser, clearError } from '../store/slices/authSlice';
import { addNotification } from '../store/slices/uiSlice';
import { FiX, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      dispatch(addNotification({
        type: 'error',
        message: error,
      }));
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      // Role-based redirect
      if (user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/profile');
      }
      
      onSuccess && onSuccess(user);
      onClose();
    }
  }, [isAuthenticated, user, dispatch, onSuccess, onClose, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting login with:', formData);
    dispatch(loginUser(formData));
  };

  const handleRegister = () => {
    setIsRegistering(true);
    // You can implement registration logic here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 to-pink-300 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {isRegistering ? 'নতুন একাউন্ট' : 'লগইন করুন'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <FiX className="text-xl" />
            </button>
          </div>
          <p className="text-white/90 mt-2">
            {isRegistering 
              ? 'নতুন একাউন্ট তৈরি করুন' 
              : 'আপনার একাউন্টে প্রবেশ করুন'
            }
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                ইমেইল
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনার ইমেইল দিন"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনার পাসওয়ার্ড দিন"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-400 to-pink-300 text-white font-semibold py-3 px-4 rounded-lg hover:from-pink-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading 
                ? (isRegistering ? 'একাউন্ট তৈরি হচ্ছে...' : 'লগইন হচ্ছে...') 
                : (isRegistering ? 'একাউন্ট তৈরি করুন' : 'লগইন করুন')
              }
            </button>
          </form>
          
          {/* Toggle between login and register */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {isRegistering 
                ? 'ইতিমধ্যে একাউন্ট আছে? লগইন করুন' 
                : 'নতুন একাউন্ট তৈরি করুন'
              }
            </button>
          </div>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">ডেমো একাউন্ট:</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Admin:</strong> admin@subban.org / admin123</p>
              <p><strong>User:</strong> user@subban.org / User123!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 