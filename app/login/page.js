'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks';
import { loginUser, clearError } from '../../src/store/slices/authSlice';
import { addNotification } from '../../src/store/slices/uiSlice';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUsers, FiInfo, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showAvailableUsers, setShowAvailableUsers] = useState(false);
  const [availableUsers, setAvailableUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Fetch available users for testing
  const fetchAvailableUsers = async () => {
    try {
      setLoadingUsers(true);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      console.log('Fetching users from:', API_URL);
      
      const response = await fetch(`${API_URL}/auth/available-users`);
      console.log('Available users response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Available users data:', data);
        setAvailableUsers(data.data || []);
      } else {
        console.error('Failed to fetch users:', response.status, response.statusText);
        const errorData = await response.json().catch(() => ({}));
        console.error('Error data:', errorData);
      }
    } catch (error) {
      console.error('Could not fetch available users:', error);
      if (error.code === 'ECONNREFUSED') {
        console.error('Server connection refused. Is the server running?');
      }
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (showAvailableUsers) {
      fetchAvailableUsers();
    }
  }, [showAvailableUsers]);

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
    }
  }, [isAuthenticated, user, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting login with:', formData);
    
    // Basic validation
    if (!formData.email || !formData.password) {
      dispatch(addNotification({
        type: 'error',
        message: 'Please fill in all fields',
      }));
      return;
    }
    
    // Test server connection first
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    try {
      console.log('Testing server connection before login...');
      const testResponse = await fetch(`${API_URL}/health`);
      if (!testResponse.ok) {
        throw new Error(`Server health check failed: ${testResponse.status}`);
      }
      console.log('Server connection test successful, proceeding with login...');
    } catch (error) {
      console.error('Server connection test failed:', error);
      dispatch(addNotification({
        type: 'error',
        message: 'Cannot connect to server. Please check if the server is running.',
      }));
      return;
    }
    
    dispatch(loginUser(formData));
  };

  const handleUserSelect = (user) => {
    setFormData({
      email: user.email,
      password: user.password || '',
    });
    setShowAvailableUsers(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FiArrowLeft className="text-lg" />
            <span>হোমে ফিরে যান</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-400 to-pink-300 p-6 text-white">
            <h1 className="text-3xl font-bold text-center">
              {isRegistering ? 'নতুন একাউন্ট' : 'লগইন করুন'}
            </h1>
            <p className="text-white/90 mt-2 text-center">
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
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{isRegistering ? 'একাউন্ট তৈরি হচ্ছে...' : 'লগইন হচ্ছে...'}</span>
                  </div>
                ) : (
                  isRegistering ? 'একাউন্ট তৈরি করুন' : 'লগইন করুন'
                )}
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

            {/* Server Connection Test */}
            <div className="mt-6">
              <Link
                href="/test-connection"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors mb-3"
              >
                <span>🔗 সার্ভার কানেকশন টেস্ট পেজ</span>
              </Link>
              
              <button
                type="button"
                onClick={() => setShowAvailableUsers(!showAvailableUsers)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <FiUsers className="text-lg" />
                <span>ডাটাবেস থেকে ব্যবহারকারী দেখুন</span>
              </button>
              
              {showAvailableUsers && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <FiInfo className="text-blue-600" />
                    <h4 className="text-sm font-medium text-blue-800">উপলব্ধ ব্যবহারকারী</h4>
                  </div>
                  
                  {loadingUsers ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="text-sm text-gray-600 mt-2">লোড হচ্ছে...</p>
                    </div>
                  ) : availableUsers.length > 0 ? (
                    <div className="space-y-2">
                      {availableUsers.map((user, index) => (
                        <div 
                          key={index}
                          className="p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-300 cursor-pointer transition-colors"
                          onClick={() => handleUserSelect(user)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                user.role === 'moderator' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {user.role}
                              </span>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              নির্বাচন করুন
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-gray-600">কোন ব্যবহারকারী পাওয়া যায়নি</p>
                      <p className="text-xs text-gray-500 mt-1">সার্ভার চালু আছে কিনা দেখুন</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Debug Information */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-700 mb-2">ডিবাগ তথ্য:</h4>
              <div className="text-xs text-blue-600 space-y-1">
                <p><strong>API URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}</p>
                <p><strong>Environment:</strong> {process.env.NODE_ENV || 'development'}</p>
              </div>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">ডেমো একাউন্ট:</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Admin:</strong> admin@subban.org / Admin123!</p>
                <p><strong>User:</strong> user@subban.org / User123!</p>
                <p><strong>Moderator:</strong> moderator@subban.org / Moderator123!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
