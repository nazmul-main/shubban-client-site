'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '../store/hooks';
import { FiHome, FiLogOut, FiUser } from 'react-icons/fi';

export default function AdminHeader() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-pink-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">স</span>
              </div>
              <span className="font-semibold text-gray-900">শুব্বান অ্যাডমিন</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/admin')}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiHome size={16} />
              <span>ড্যাশবোর্ড</span>
            </button>
            
            <button
              onClick={() => router.push('/admin/users')}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiUser size={16} />
              <span>ব্যবহারকারী</span>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-pink-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
              </div>
              <span className="text-sm font-medium text-gray-700">{user?.name || 'Admin'}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FiLogOut size={16} />
              <span>লগআউট</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 