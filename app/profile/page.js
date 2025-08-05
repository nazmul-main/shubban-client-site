'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../../src/store/hooks';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiShield } from 'react-icons/fi';

export default function UserProfile() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    // If admin user, redirect to admin dashboard
    if (user?.role === 'admin') {
      router.push('/admin');
      return;
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated) {
    return null;
  }

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin':
        return 'অ্যাডমিন';
      case 'moderator':
        return 'মডারেটর';
      default:
        return 'ব্যবহারকারী';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'moderator':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">আমার প্রোফাইল</h1>
          <p className="mt-2 text-gray-600">আপনার একাউন্টের তথ্য দেখুন এবং সম্পাদনা করুন</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-pink-300 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {user?.name?.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{user?.name}</h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user?.role)}`}>
                  <FiShield className="mr-1" />
                  {getRoleLabel(user?.role)}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMail className="text-gray-400" />
                  <span className="text-gray-700">{user?.email}</span>
                </div>
                {user?.phone && (
                  <div className="flex items-center space-x-3">
                    <FiPhone className="text-gray-400" />
                    <span className="text-gray-700">{user?.phone}</span>
                  </div>
                )}
                {user?.address && (
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="text-gray-400" />
                    <span className="text-gray-700">{user?.address}</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <FiCalendar className="text-gray-400" />
                  <span className="text-gray-700">
                    সদস্য: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('bn-BD') : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">একাউন্ট পরিসংখ্যান</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">মোট ব্লগ</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">মোট লাইক</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-gray-600">মোট কমেন্ট</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">সাম্প্রতিক কার্যক্রম</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">প্রথমবার লগইন</p>
                    <p className="text-sm text-gray-600">আজ</p>
                  </div>
                </div>
                <div className="text-center py-8 text-gray-500">
                  <p>এখনও কোন কার্যক্রম নেই</p>
                  <p className="text-sm mt-2">আপনার প্রথম ব্লগ লিখুন!</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">দ্রুত কার্যক্রম</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/my-blogs')}
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FiUser className="text-blue-600" />
                  <span className="font-medium text-gray-700">আমার ব্লগ</span>
                </button>
                <button
                  onClick={() => router.push('/edit-profile')}
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FiUser className="text-green-600" />
                  <span className="font-medium text-gray-700">প্রোফাইল সম্পাদনা</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 