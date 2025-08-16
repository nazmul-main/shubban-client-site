'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../../../../src/store/hooks';
import { FiSave, FiArrowLeft, FiUpload, FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiFileText, FiImage, FiX } from 'react-icons/fi';

export default function CreateUser() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'user'
  });

  // Add debug information
  useEffect(() => {
    const currentToken = localStorage.getItem('token');
    setDebugInfo({
      isAuthenticated,
      userRole: user?.role,
      hasToken: !!currentToken,
      tokenLength: currentToken ? currentToken.length : 0,
      userId: user?._id,
      userEmail: user?.email
    });
  }, [isAuthenticated, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email || !formData.password || !formData.name) {
      alert('ইমেইল, পাসওয়ার্ড এবং নাম অবশ্যই পূরণ করতে হবে');
      return;
    }

    // Check if user is admin
    if (!isAuthenticated || user?.role !== 'admin') {
      alert('শুধুমাত্র অ্যাডমিন ব্যবহারকারীরা নতুন একাউন্ট তৈরি করতে পারেন');
      return;
    }

    setLoading(true);

    try {
      const currentToken = localStorage.getItem('token');
      console.log('Creating user with token:', currentToken ? currentToken.substring(0, 20) + '...' : 'No token');
      console.log('Current user:', user);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.ok) {
        alert('ব্যবহারকারী সফলভাবে তৈরি হয়েছে!');
        router.push('/admin/users');
      } else {
        if (response.status === 403) {
          alert('অনুমতি নেই। আপনি অ্যাডমিন নন বা আপনার টোকেন মেয়াদ শেষ হয়ে গেছে।');
        } else {
          alert('সমস্যা হয়েছে: ' + (data.message || 'অজানা ত্রুটি'));
        }
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('ব্যবহারকারী তৈরি করতে সমস্যা হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/admin/users')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <FiArrowLeft className="text-xl" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">নতুন ব্যবহারকারী তৈরি করুন</h1>
              <p className="mt-2 text-gray-600">সদস্য নিবন্ধন ফর্ম</p>
            </div>
          </div>
        </div>

        {/* Debug Information */}
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-medium text-yellow-800 mb-3">ডিবাগ তথ্য</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>অথেনটিকেটেড:</strong> {debugInfo.isAuthenticated ? 'হ্যাঁ' : 'না'}</p>
              <p><strong>ব্যবহারকারীর রোল:</strong> {debugInfo.userRole || 'N/A'}</p>
              <p><strong>টোকেন আছে:</strong> {debugInfo.hasToken ? 'হ্যাঁ' : 'না'}</p>
            </div>
            <div>
              <p><strong>ব্যবহারকারী আইডি:</strong> {debugInfo.userId || 'N/A'}</p>
              <p><strong>ইমেইল:</strong> {debugInfo.userEmail || 'N/A'}</p>
              <p><strong>টোকেন দৈর্ঘ্য:</strong> {debugInfo.tokenLength || '0'}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">
                <FiUser className="inline mr-2" />
                মৌলিক তথ্য
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ইমেইল *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    পাসওয়ার্ড *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ব্যবহারকারীর ধরন
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">ব্যবহারকারী</option>
                  <option value="moderator">মডারেটর</option>
                  <option value="admin">অ্যাডমিন</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/admin/users')}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                বাতিল
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <FiSave size={16} />
                <span>{loading ? 'তৈরি হচ্ছে...' : 'ব্যবহারকারী তৈরি করুন'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 