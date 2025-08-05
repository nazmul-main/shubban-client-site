'use client';

import { useAppSelector } from '../../src/store/hooks';
import { FiUser, FiShield, FiUsers } from 'react-icons/fi';

export default function TestAuth() {
  const { isAuthenticated, user, loading } = useAppSelector((state) => state.auth);

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin':
        return <FiShield className="text-red-600" />;
      case 'moderator':
        return <FiUsers className="text-orange-600" />;
      default:
        return <FiUser className="text-blue-600" />;
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">অথেনটিকেশন টেস্ট</h1>
          
          {isAuthenticated ? (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-4">✅ লগইন সফল!</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">ব্যবহারকারী তথ্য:</h3>
                    <div className="space-y-2">
                      <p><strong>নাম:</strong> {user?.name}</p>
                      <p><strong>ইমেইল:</strong> {user?.email}</p>
                      <p><strong>ফোন:</strong> {user?.phone || 'N/A'}</p>
                      <p><strong>ঠিকানা:</strong> {user?.address || 'N/A'}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">রোল তথ্য:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {getRoleIcon(user?.role)}
                        <span className="font-medium">{getRoleLabel(user?.role)}</span>
                      </div>
                      <p><strong>রোল:</strong> {user?.role}</p>
                      <p><strong>স্ট্যাটাস:</strong> {user?.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}</p>
                      <p><strong>সদস্য:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('bn-BD') : 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-3">রোল অনুযায়ী নেভিগেশন:</h3>
                <div className="space-y-2">
                  {user?.role === 'admin' ? (
                    <>
                      <p>• <strong>অ্যাডমিন ড্যাশবোর্ড:</strong> /admin</p>
                      <p>• <strong>ব্লগ ব্যবস্থাপনা:</strong> /admin/blogs</p>
                      <p>• <strong>গ্যালারি ব্যবস্থাপনা:</strong> /admin/gallery</p>
                      <p>• <strong>ব্যবহারকারী ব্যবস্থাপনা:</strong> /admin/users</p>
                    </>
                  ) : (
                    <>
                      <p>• <strong>প্রোফাইল:</strong> /profile</p>
                      <p>• <strong>আমার ব্লগ:</strong> /my-blogs</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-800 mb-4">❌ লগইন হয়নি</h2>
              <p className="text-red-700">আপনি এখনও লগইন করেননি। লগইন করতে "আমার একাউন্ট" বাটনে ক্লিক করুন।</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 