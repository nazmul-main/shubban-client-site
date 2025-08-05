'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../../src/store/hooks';
import { FiUsers, FiEye, FiEdit, FiTrash2, FiArrowLeft, FiMail, FiPhone, FiMapPin, FiCalendar, FiFileText, FiUser, FiRefreshCw } from 'react-icons/fi';

export default function AdminUsers() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') {
      fetchUsers();
    } else if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, user, refreshKey]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token not found');
        setLoading(false);
        return;
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      console.log('🔗 Fetching users from:', `${apiUrl}/users`);
      
      const response = await fetch(`${apiUrl}/users?limit=1000`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('📊 Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('📊 Users API Response:', data);
        console.log('👥 Users array:', data.data);
        console.log('📄 Pagination info:', data.pagination);
        
        if (data.data && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          console.error('Invalid data format:', data);
          setError('Invalid data format received from server');
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Failed to fetch users:', response.status, response.statusText);
        console.error('Error details:', errorData);
        setError(`Failed to fetch users: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRoleBadge = (role) => {
    const badges = {
      admin: 'bg-red-100 text-red-800',
      user: 'bg-blue-100 text-blue-800',
      moderator: 'bg-yellow-100 text-yellow-800'
    };
    return badges[role] || 'bg-gray-100 text-gray-800';
  };

  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">অননুমোদিত অ্যাক্সেস</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/admin')}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <FiArrowLeft className="text-xl" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ব্যবহারকারী ব্যবস্থাপনা</h1>
                <p className="mt-2 text-gray-600">সকল ব্যবহারকারীর তালিকা</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <FiUsers className="text-xl" />
                <span className="font-medium">{users.length} জন ব্যবহারকারী</span>
              </div>
              <button
                onClick={handleRefresh}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                title="Refresh users"
              >
                <FiRefreshCw className="text-xl" />
              </button>
              <button
                onClick={() => router.push('/admin/users/create')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiUser size={16} />
                <span>নতুন ব্যবহারকারী</span>
              </button>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">Error:</h3>
            <p className="text-sm text-red-700">{error}</p>
            <button
              onClick={handleRefresh}
              className="mt-2 text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Try again
            </button>
          </div>
        )}

        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Debug Info:</h3>
            <p className="text-sm text-yellow-700">Total users fetched: {users.length}</p>
            <p className="text-sm text-yellow-700">API URL: {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}</p>
            <p className="text-sm text-yellow-700">User authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
            <p className="text-sm text-yellow-700">User role: {user?.role}</p>
            {users.length > 0 && (
              <p className="text-sm text-yellow-700">First user: {users[0].name} ({users[0].email})</p>
            )}
          </div>
        )}

        {/* Users Grid */}
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user._id}
                onClick={() => handleUserClick(user)}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-pink-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{user.name || 'No Name'}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                    {user.role === 'admin' ? 'অ্যাডমিন' : user.role === 'moderator' ? 'মডারেটর' : 'ব্যবহারকারী'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {user.phone && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FiPhone className="text-gray-400" />
                      <span>{user.phone}</span>
                    </div>
                  )}
                  {user.bloodGroup && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="text-gray-400">🩸</span>
                      <span>{user.bloodGroup}</span>
                    </div>
                  )}
                  {user.currentDistrict && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FiMapPin className="text-gray-400" />
                      <span className="truncate">{user.currentDistrict}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiCalendar className="text-gray-400" />
                    <span>যোগদান: {formatDate(user.createdAt)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {user.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      বিস্তারিত দেখুন
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiUsers className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোন ব্যবহারকারী নেই</h3>
            <p className="text-gray-600">এখনও কোন ব্যবহারকারী নিবন্ধন করেনি।</p>
            <button
              onClick={handleRefresh}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        )}
      </div>

      {/* User Details Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">ব্যবহারকারীর বিস্তারিত</h2>
              <button
                onClick={() => setShowUserModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiArrowLeft className="text-xl" />
              </button>
            </div>

            <div className="space-y-6">
              {/* User Avatar and Basic Info */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-pink-300 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {selectedUser.name ? selectedUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedUser.name || 'No Name'}</h3>
                <p className="text-gray-600">{selectedUser.email}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${getRoleBadge(selectedUser.role)}`}>
                  {selectedUser.role === 'admin' ? 'অ্যাডমিন' : selectedUser.role === 'moderator' ? 'মডারেটর' : 'ব্যবহারকারী'}
                </span>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">যোগাযোগের তথ্য</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <FiMail className="text-gray-400" />
                    <span className="text-gray-700">{selectedUser.email}</span>
                  </div>
                  {selectedUser.phone && (
                    <div className="flex items-center space-x-3">
                      <FiPhone className="text-gray-400" />
                      <span className="text-gray-700">{selectedUser.phone}</span>
                    </div>
                  )}
                  {selectedUser.nationalId && (
                    <div className="flex items-center space-x-3">
                      <FiFileText className="text-gray-400" />
                      <span className="text-gray-700">জাতীয় পরিচয়পত্র: {selectedUser.nationalId}</span>
                    </div>
                  )}
                  {selectedUser.bloodGroup && (
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-400">🩸</span>
                      <span className="text-gray-700">রক্তের গ্রুপ: {selectedUser.bloodGroup}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Current Address */}
              {(selectedUser.currentVillage || selectedUser.currentPostOffice || selectedUser.currentThana || selectedUser.currentDistrict) && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">বর্তমান ঠিকানা</h4>
                  <div className="space-y-2">
                    {selectedUser.currentVillage && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">গ্রাম: {selectedUser.currentVillage}</span>
                      </div>
                    )}
                    {selectedUser.currentPostOffice && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">ডাকঘর: {selectedUser.currentPostOffice}</span>
                      </div>
                    )}
                    {selectedUser.currentThana && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">থানা: {selectedUser.currentThana}</span>
                      </div>
                    )}
                    {selectedUser.currentDistrict && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">জেলা: {selectedUser.currentDistrict}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Permanent Address */}
              {(selectedUser.permanentVillage || selectedUser.permanentPostOffice || selectedUser.permanentThana || selectedUser.permanentDistrict) && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">স্থায়ী ঠিকানা</h4>
                  <div className="space-y-2">
                    {selectedUser.permanentVillage && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">গ্রাম: {selectedUser.permanentVillage}</span>
                      </div>
                    )}
                    {selectedUser.permanentPostOffice && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">ডাকঘর: {selectedUser.permanentPostOffice}</span>
                      </div>
                    )}
                    {selectedUser.permanentThana && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">থানা: {selectedUser.permanentThana}</span>
                      </div>
                    )}
                    {selectedUser.permanentDistrict && (
                      <div className="flex items-center space-x-3">
                        <FiMapPin className="text-gray-400" />
                        <span className="text-gray-700">জেলা: {selectedUser.permanentDistrict}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Account Information */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">একাউন্টের তথ্য</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <FiCalendar className="text-gray-400" />
                    <span className="text-gray-700">যোগদান: {formatDate(selectedUser.createdAt)}</span>
                  </div>
                  {selectedUser.lastLogin && (
                    <div className="flex items-center space-x-3">
                      <FiCalendar className="text-gray-400" />
                      <span className="text-gray-700">সর্বশেষ লগইন: {formatDate(selectedUser.lastLogin)}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedUser.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {selectedUser.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  সম্পাদনা করুন
                </button>
                <button 
                  onClick={() => setShowUserModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  বাতিল
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 