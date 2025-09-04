'use client';

import { useState } from 'react';
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
  FiSave,
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
  FiRefreshCw,
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

// Dashboard Layout Component
const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
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
    { id: 'faq', label: 'সাধারণ প্রশ্ন', icon: FiHelpCircle },
    { id: 'users', label: 'ইউজার ম্যানেজমেন্ট', icon: FiUsers },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
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
                    ? 'bg-emerald-50 text-emerald-700 border-r-4 border-emerald-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
          <div className="border-t border-gray-200 my-4"></div>
          <div className="px-6 space-y-2">
            <button
              onClick={() => {
                setActiveTab('settings');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg ${
                activeTab === 'settings'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <FiSettings className="w-5 h-5 mr-3" />
              <span className="font-medium">সেটিংস</span>
            </button>
            <button
              onClick={() => {
                if (confirm('আপনি কি লগআউট করতে চান?')) {
                  // Handle logout logic here
                  window.location.href = '/';
                }
              }}
              className="w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700"
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
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <FiMenu className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeTab)?.label || 'ড্যাশবোর্ড'}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <FiRefreshCw className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                <FiSave className="w-4 h-4 mr-2 inline" />
                সেভ করুন
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">সাম্প্রতিক কার্যক্রম</h3>
          <div className="space-y-3">
            {[
              { action: 'নতুন ব্লগ পোস্ট যোগ করা হয়েছে', time: '২ ঘন্টা আগে' },
              { action: 'গ্যালারিতে ৫টি নতুন ছবি যোগ করা হয়েছে', time: '১ দিন আগে' },
              { action: 'হোমপেজ সেকশন আপডেট করা হয়েছে', time: '২ দিন আগে' },
              { action: 'নেভিগেশন মেনু পরিবর্তন করা হয়েছে', time: '৩ দিন আগে' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <p className="text-sm text-gray-700">{item.action}</p>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">দ্রুত অ্যাকশন</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              <FiPlus className="w-4 h-4 mr-2" />
              নতুন ব্লগ পোস্ট
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <FiUpload className="w-4 h-4 mr-2" />
              গ্যালারিতে ছবি আপলোড
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              <FiEdit3 className="w-4 h-4 mr-2" />
              হোমপেজ সম্পাদনা
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
        return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">আমাদের সম্পর্ক</h3>
          <p className="text-gray-600">আমাদের সম্পর্ক পেজ এখানে আসবে...</p>
        </div>;
      case 'activities':
        return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">আমাদের কার্যক্রম</h3>
          <p className="text-gray-600">আমাদের কার্যক্রম পেজ এখানে আসবে...</p>
        </div>;
      case 'faq':
        return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">সাধারণ প্রশ্ন</h3>
          <p className="text-gray-600">সাধারণ প্রশ্ন পেজ এখানে আসবে...</p>
        </div>;
      case 'users':
        return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ইউজার ম্যানেজমেন্ট</h3>
          <p className="text-gray-600">ইউজার ম্যানেজমেন্ট পেজ এখানে আসবে...</p>
        </div>;
      case 'settings':
        return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">সেটিংস</h3>
          <p className="text-gray-600">সেটিংস পেজ এখানে আসবে...</p>
        </div>;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderTabContent()}
    </DashboardLayout>
  );
}
