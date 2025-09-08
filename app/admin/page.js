'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../../src/context/ToastContext';
import ConfirmationToast from '../../src/component/ConfirmationToast';
import { 
  FiHome, 
  FiSettings, 
  FiMenu, 
  FiEdit3, 
  FiImage, 
  FiFileText, 
  FiUsers, 
  FiMail, 
  FiPlus,
  FiTrash2,
  FiUpload,
  FiEye,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiList,
  FiSearch,
  FiFilter,
  FiDownload,
  FiInfo,
  FiActivity,
  FiHelpCircle,
  FiLogOut
} from 'react-icons/fi';

// Import components
import NavbarManagement from './components/NavbarManagement';
import BlogManagement from './components/BlogManagement';
import GalleryManagement from './components/GalleryManagement';
import LogoManagement from './components/LogoManagement';
import ContactPageEditor from './components/ContactPageEditor';
import RouteManagement from './components/RouteManagement';
import FAQManagement from './components/FAQManagement';

// Dashboard Layout Component
const DashboardLayout = ({ children, activeTab, setActiveTab, handleLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'ড্যাশবোর্ড', icon: FiHome },
    { id: 'navbar', label: 'নেভিগেশন মেনু', icon: FiMenu },
    { id: 'logo', label: 'লোগো ম্যানেজমেন্ট', icon: FiImage },
    { id: 'routes', label: 'রাউট ম্যানেজমেন্ট', icon: FiSettings },
    { id: 'contact', label: 'যোগাযোগ পেজ', icon: FiMail },
    { id: 'blogs', label: 'ব্লগ পোস্ট', icon: FiFileText },
    { id: 'gallery', label: 'গ্যালারি', icon: FiImage },
    { id: 'about-us', label: 'আমাদের সম্পর্ক', icon: FiInfo },
    { id: 'activities', label: 'আমাদের কার্যক্রম', icon: FiActivity },
    { id: 'faq', label: 'FAQ Management', icon: FiHelpCircle },
    { id: 'users', label: 'ইউজার ম্যানেজমেন্ট', icon: FiUsers },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-emerald-500 to-teal-500">
          <h1 className="text-xl font-bold text-white">এডমিন ড্যাশবোর্ড</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'bg-emerald-500/20 text-emerald-400 border-r-4 border-emerald-500'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Divider and Bottom Options */}
        <div className="mt-auto">
          <div className="border-t border-gray-600 my-4"></div>
          <div className="px-6 space-y-2">
            <button
              onClick={() => {
                setActiveTab('settings');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg ${
                activeTab === 'settings'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <FiSettings className="w-5 h-5 mr-3" />
              <span className="font-medium">সেটিংস</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-300"
            >
              <FiLogOut className="w-5 h-5 mr-3" />
              <span className="font-medium">লগআউট</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-gray-800 shadow-lg border-b border-gray-700">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white mr-4"
              >
                <FiMenu className="w-6 h-6" />
              </button>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                {menuItems.find(item => item.id === activeTab)?.label || 'ড্যাশবোর্ড'}
              </h2>
            </div>
            
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 bg-gray-900 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

// Overview Component
const OverviewTab = () => {
  const stats = [
    { label: 'মোট ব্লগ পোস্ট', value: '24', icon: FiFileText, color: 'blue' },
    { label: 'গ্যালারি ইমেজ', value: '156', icon: FiImage, color: 'green' },
    { label: 'সক্রিয় সেকশন', value: '8', icon: FiGrid, color: 'purple' },
    { label: 'মোট ইউজার', value: '1,234', icon: FiUsers, color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-500/20`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">সাম্প্রতিক কার্যক্রম</h3>
          <div className="space-y-3">
            {[
              { action: 'নতুন ব্লগ পোস্ট যোগ করা হয়েছে', time: '২ ঘন্টা আগে' },
              { action: 'গ্যালারিতে ৫টি নতুন ছবি যোগ করা হয়েছে', time: '১ দিন আগে' },
              { action: 'হোমপেজ সেকশন আপডেট করা হয়েছে', time: '২ দিন আগে' },
              { action: 'নেভিগেশন মেনু পরিবর্তন করা হয়েছে', time: '৩ দিন আগে' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-600 last:border-b-0">
                <p className="text-sm text-gray-300">{item.action}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">দ্রুত অ্যাকশন</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-xs sm:text-sm">
              <FiPlus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">নতুন ব্লগ পোস্ট</span>
              <span className="sm:hidden">নতুন ব্লগ</span>
            </button>
            <button className="w-full flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm">
              <FiUpload className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">গ্যালারিতে ছবি আপলোড</span>
              <span className="sm:hidden">ছবি আপলোড</span>
            </button>
            <button className="w-full flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-xs sm:text-sm">
              <FiEdit3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">হোমপেজ সম্পাদনা</span>
              <span className="sm:hidden">হোমপেজ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();
  const { warning } = useToast();

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      const user = localStorage.getItem('adminUser');
      
      if (!token || !user) {
        router.push('/admin_signin');
        return;
      }

      try {
        const userData = JSON.parse(user);
        if (userData.role !== 'admin') {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
          router.push('/admin_signin');
          return;
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin_signin');
        return;
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  // Auto logout after 2 hours
  useEffect(() => {
    if (!isAuthenticated) return;

    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiryTime = payload.exp * 1000;
        const currentTime = Date.now();
        const timeLeft = expiryTime - currentTime;

        if (timeLeft <= 0) {
          // Token expired
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
          router.push('/admin_signin');
          return;
        }

        // Set timeout for auto logout
        const timeout = setTimeout(() => {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
          router.push('/admin_signin');
        }, timeLeft);

        return () => clearTimeout(timeout);
      } catch (error) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin_signin');
      }
    }
  }, [isAuthenticated, router]);

  // Handle logout confirmation
  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  // Handle actual logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (token) {
        // Call signout API to remove device
        await fetch('/api/auth/admin-signout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            deviceId: JSON.parse(atob(token.split('.')[1])).deviceId
          })
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      // Redirect to home page instead of admin signin
      router.push('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-300">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'navbar':
        return <NavbarManagement />;
      case 'logo':
        return <LogoManagement />;
      case 'routes':
        return <RouteManagement />;
      case 'contact':
        return <ContactPageEditor />;
      case 'blogs':
        return <BlogManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'about-us':
        return <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">আমাদের সম্পর্ক</h3>
          <p className="text-gray-300">আমাদের সম্পর্ক পেজ এখানে আসবে...</p>
        </div>;
      case 'activities':
        return <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">আমাদের কার্যক্রম</h3>
          <p className="text-gray-300">আমাদের কার্যক্রম পেজ এখানে আসবে...</p>
        </div>;
      case 'faq':
        return <FAQManagement />;
      case 'users':
        return <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">ইউজার ম্যানেজমেন্ট</h3>
          <p className="text-gray-300">ইউজার ম্যানেজমেন্ট পেজ এখানে আসবে...</p>
        </div>;
      case 'settings':
        return <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-4">সেটিংস</h3>
          <p className="text-gray-300">সেটিংস পেজ এখানে আসবে...</p>
        </div>;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <>
      <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogoutClick}>
        {renderTabContent()}
      </DashboardLayout>
      
      {/* Logout Confirmation Toast */}
      <ConfirmationToast
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="লগ আউট নিশ্চিত করুন"
        message="আপনি কি লগআউট করতে চান? এই কাজের পর আপনাকে আবার লগইন করতে হবে।"
        confirmText="লগ আউট"
        cancelText="বাতিল করুন"
        type="warning"
        icon={FiLogOut}
      />
    </>
  );
}
