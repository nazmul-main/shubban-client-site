'use client';

import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks';
import { loginUser, logoutUser } from '../../src/store/slices/authSlice';
import { FiUser, FiShield, FiUsers, FiDatabase, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export default function TestDatabase() {
  const [availableUsers, setAvailableUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testResults, setTestResults] = useState({});
  
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, loading: authLoading } = useAppSelector((state) => state.auth);

  // Fetch available users from backend
  const fetchAvailableUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/auth/available-users');
      const data = await response.json();
      
      if (data.success) {
        setAvailableUsers(data.data);
        setTestResults(prev => ({ ...prev, fetchUsers: 'success' }));
      } else {
        setTestResults(prev => ({ ...prev, fetchUsers: 'error' }));
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setTestResults(prev => ({ ...prev, fetchUsers: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  // Test database connection
  const testDatabaseConnection = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stats');
      const data = await response.json();
      
      if (data.success) {
        setTestResults(prev => ({ ...prev, dbConnection: 'success' }));
        return data.data;
      } else {
        setTestResults(prev => ({ ...prev, dbConnection: 'error' }));
        return null;
      }
    } catch (error) {
      console.error('Error testing database connection:', error);
      setTestResults(prev => ({ ...prev, dbConnection: 'error' }));
      return null;
    }
  };

  // Test login with selected user
  const testLogin = async (userData) => {
    try {
      const result = await dispatch(loginUser({
        email: userData.email,
        password: userData.password
      }));
      
      if (result.meta.requestStatus === 'fulfilled') {
        setTestResults(prev => ({ ...prev, login: 'success' }));
      } else {
        setTestResults(prev => ({ ...prev, login: 'error' }));
      }
    } catch (error) {
      console.error('Login error:', error);
      setTestResults(prev => ({ ...prev, login: 'error' }));
    }
  };

  // Run all tests
  const runAllTests = async () => {
    setTestResults({});
    
    // Test database connection
    const stats = await testDatabaseConnection();
    
    // Test fetching users
    await fetchAvailableUsers();
    
    // If we have users, test login with first one
    if (availableUsers.length > 0) {
      await testLogin(availableUsers[0]);
    }
  };

  useEffect(() => {
    // Run initial tests when component mounts
    runAllTests();
  }, []);

  const getTestIcon = (status) => {
    if (status === 'success') return <FiCheckCircle className="text-green-500" />;
    if (status === 'error') return <FiXCircle className="text-red-500" />;
    return <FiDatabase className="text-gray-400" />;
  };

  const getTestStatus = (status) => {
    if (status === 'success') return 'সফল';
    if (status === 'error') return 'ব্যর্থ';
    return 'পরীক্ষা করা হয়নি';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">ডাটাবেস টেস্ট পেজ</h1>
          
          {/* Test Results Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">টেস্ট ফলাফল</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                {getTestIcon(testResults.dbConnection)}
                <span>ডাটাবেস সংযোগ: {getTestStatus(testResults.dbConnection)}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                {getTestIcon(testResults.fetchUsers)}
                <span>ব্যবহারকারী লোড: {getTestStatus(testResults.fetchUsers)}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                {getTestIcon(testResults.login)}
                <span>লগইন টেস্ট: {getTestStatus(testResults.login)}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-8 flex space-x-4">
            <button
              onClick={runAllTests}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'টেস্ট চলছে...' : 'সব টেস্ট চালান'}
            </button>
            <button
              onClick={fetchAvailableUsers}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              ব্যবহারকারী লোড করুন
            </button>
          </div>

          {/* Available Users */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">উপলব্ধ ব্যবহারকারী</h2>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">লোড হচ্ছে...</p>
              </div>
            ) : availableUsers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableUsers.map((user, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center space-x-2 mb-2">
                      {user.role === 'admin' ? (
                        <FiShield className="text-red-600" />
                      ) : user.role === 'moderator' ? (
                        <FiUsers className="text-orange-600" />
                      ) : (
                        <FiUser className="text-blue-600" />
                      )}
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                    <p className="text-xs text-gray-500 mb-3">
                      রোল: {user.role} | পাসওয়ার্ড: {user.password}
                    </p>
                    <button
                      onClick={() => testLogin(user)}
                      disabled={authLoading}
                      className="w-full px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                      {authLoading ? 'লগইন হচ্ছে...' : 'লগইন টেস্ট করুন'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                কোন ব্যবহারকারী পাওয়া যায়নি
              </div>
            )}
          </div>

          {/* Current Authentication Status */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">বর্তমান অথেনটিকেশন স্ট্যাটাস</h2>
            {isAuthenticated ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-green-800 mb-3">✅ লগইন সফল!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>নাম:</strong> {user?.name}</p>
                    <p><strong>ইমেইল:</strong> {user?.email}</p>
                    <p><strong>রোল:</strong> {user?.role}</p>
                  </div>
                  <div>
                    <p><strong>ফোন:</strong> {user?.phone || 'N/A'}</p>
                    <p><strong>স্ট্যাটাস:</strong> {user?.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}</p>
                    <p><strong>লগইন সময়:</strong> {user?.lastLogin ? new Date(user.lastLogin).toLocaleString('bn-BD') : 'N/A'}</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(logoutUser())}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  লগআউট করুন
                </button>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-red-800 mb-3">❌ লগইন হয়নি</h3>
                <p className="text-red-700">আপনি এখনও লগইন করেননি। উপরে থেকে কোন ব্যবহারকারী নির্বাচন করে লগইন টেস্ট করুন।</p>
              </div>
            )}
          </div>

          {/* Database Stats */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">ডাটাবেস পরিসংখ্যান</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800">
                <strong>সার্ভার:</strong> http://localhost:5000
              </p>
              <p className="text-blue-800">
                <strong>API Base:</strong> http://localhost:5000/api
              </p>
              <p className="text-blue-800">
                <strong>ডাটাবেস:</strong> MongoDB (Cloud)
              </p>
              <p className="text-blue-800">
                <strong>মডেল:</strong> User, Blog, Gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
