'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiEye,
  FiSettings,
  FiGlobe,
  FiLock,
  FiUnlock,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiCheck,
  FiAlertCircle,
  FiCopy
} from 'react-icons/fi';

const RouteManagement = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      path: '/',
      name: 'হোমপেজ',
      component: 'HomePage',
      isActive: true,
      isPublic: true,
      description: 'ওয়েবসাইটের মূল হোমপেজ',
      meta: {
        title: 'শুব্বান দাওয়াতি কাফেলা',
        description: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি',
        keywords: ['শুব্বান', 'দাওয়াতি', 'কাফেলা', 'ইসলাম']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 2,
      path: '/about',
      name: 'আমাদের সম্পর্কে',
      component: 'AboutPage',
      isActive: true,
      isPublic: true,
      description: 'সংগঠন সম্পর্কে বিস্তারিত তথ্য',
      meta: {
        title: 'আমাদের সম্পর্কে - শুব্বান দাওয়াতি কাফেলা',
        description: 'শুব্বান দাওয়াতি কাফেলা সম্পর্কে জানুন',
        keywords: ['আমাদের সম্পর্কে', 'সংগঠন', 'ইতিহাস']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 3,
      path: '/constitution',
      name: 'গঠনতন্ত্র',
      component: 'ConstitutionPage',
      isActive: true,
      isPublic: true,
      description: 'সংগঠনের গঠনতন্ত্র ও নিয়মাবলী',
      meta: {
        title: 'গঠনতন্ত্র - শুব্বান দাওয়াতি কাফেলা',
        description: 'সংগঠনের গঠনতন্ত্র ও নিয়মাবলী দেখুন',
        keywords: ['গঠনতন্ত্র', 'নিয়মাবলী', 'সংগঠন']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 4,
      path: '/projects',
      name: 'আমাদের কার্যক্রম',
      component: 'ProjectsPage',
      isActive: true,
      isPublic: true,
      description: 'সংগঠনের বিভিন্ন কার্যক্রম ও প্রকল্প',
      meta: {
        title: 'আমাদের কার্যক্রম - শুব্বান দাওয়াতি কাফেলা',
        description: 'সংগঠনের বিভিন্ন কার্যক্রম ও প্রকল্প দেখুন',
        keywords: ['কার্যক্রম', 'প্রকল্প', 'কাজ']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 5,
      path: '/gallery',
      name: 'গ্যালারি',
      component: 'GalleryPage',
      isActive: true,
      isPublic: true,
      description: 'সংগঠনের ছবি ও ভিডিও গ্যালারি',
      meta: {
        title: 'গ্যালারি - শুব্বান দাওয়াতি কাফেলা',
        description: 'সংগঠনের বিভিন্ন কার্যক্রমের ছবি ও ভিডিও',
        keywords: ['গ্যালারি', 'ছবি', 'ভিডিও', 'কার্যক্রম']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 6,
      path: '/donation',
      name: 'দান',
      component: 'DonationPage',
      isActive: true,
      isPublic: true,
      description: 'দান ও সাহায্য করার পেজ',
      meta: {
        title: 'দান - শুব্বান দাওয়াতি কাফেলা',
        description: 'মানবতার সেবায় আমাদের সহায়তা করুন',
        keywords: ['দান', 'সাহায্য', 'মানবতা', 'সেবা']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 7,
      path: '/donor',
      name: 'দাতা',
      component: 'DonorPage',
      isActive: true,
      isPublic: true,
      description: 'দাতাদের তথ্য ও পরিচিতি',
      meta: {
        title: 'দাতা - শুব্বান দাওয়াতি কাফেলা',
        description: 'আমাদের দাতাদের পরিচিতি ও তথ্য',
        keywords: ['দাতা', 'সহায়তা', 'ধন্যবাদ']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 8,
      path: '/contact',
      name: 'যোগাযোগ',
      component: 'ContactPage',
      isActive: true,
      isPublic: true,
      description: 'যোগাযোগের তথ্য এবং ফর্ম',
      meta: {
        title: 'যোগাযোগ - শুব্বান দাওয়াতি কাফেলা',
        description: 'আমাদের সাথে যোগাযোগ করুন',
        keywords: ['যোগাযোগ', 'ফোন', 'ইমেইল', 'ঠিকানা']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 9,
      path: '/privacy',
      name: 'গোপনীয়তা নীতি',
      component: 'PrivacyPage',
      isActive: true,
      isPublic: true,
      description: 'গোপনীয়তা নীতি ও শর্তাবলী',
      meta: {
        title: 'গোপনীয়তা নীতি - শুব্বান দাওয়াতি কাফেলা',
        description: 'আমাদের গোপনীয়তা নীতি ও শর্তাবলী',
        keywords: ['গোপনীয়তা', 'নীতি', 'শর্তাবলী']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 10,
      path: '/admin',
      name: 'এডমিন ড্যাশবোর্ড',
      component: 'AdminDashboard',
      isActive: true,
      isPublic: false,
      description: 'এডমিন প্যানেল',
      meta: {
        title: 'এডমিন ড্যাশবোর্ড',
        description: 'ওয়েবসাইট পরিচালনা',
        keywords: ['এডমিন', 'ড্যাশবোর্ড', 'পরিচালনা']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 11,
      path: '/test-404',
      name: '৪০৪ টেস্ট পেজ',
      component: 'Test404Page',
      isActive: false,
      isPublic: false,
      description: '৪০৪ এরর পেজ টেস্ট করার জন্য',
      meta: {
        title: '৪০৪ টেস্ট পেজ',
        description: '৪০৪ এরর পেজ টেস্ট',
        keywords: ['টেস্ট', '৪০৪', 'এরর']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 12,
      path: '/test-login',
      name: 'লগইন টেস্ট পেজ',
      component: 'TestLoginPage',
      isActive: false,
      isPublic: false,
      description: 'লগইন সিস্টেম টেস্ট করার জন্য',
      meta: {
        title: 'লগইন টেস্ট পেজ',
        description: 'লগইন সিস্টেম টেস্ট',
        keywords: ['টেস্ট', 'লগইন', 'সিস্টেম']
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    }
  ]);

  const [editingRoute, setEditingRoute] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [newRoute, setNewRoute] = useState({
    path: '',
    name: '',
    component: '',
    isActive: true,
    isPublic: true,
    description: '',
    meta: {
      title: '',
      description: '',
      keywords: []
    }
  });

  const handleEdit = (route) => {
    setEditingRoute(route);
  };

  const handleSave = () => {
    if (editingRoute) {
      setRoutes(routes.map(route => 
        route.id === editingRoute.id ? { ...editingRoute, updatedAt: new Date().toISOString().split('T')[0] } : route
      ));
      setEditingRoute(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই রুটটি মুছে ফেলতে চান?')) {
      setRoutes(routes.filter(route => route.id !== id));
    }
  };

  const handleAddRoute = () => {
    const newId = Math.max(...routes.map(route => route.id)) + 1;
    const newRouteWithId = {
      ...newRoute,
      id: newId,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setRoutes([...routes, newRouteWithId]);
    setNewRoute({
      path: '',
      name: '',
      component: '',
      isActive: true,
      isPublic: true,
      description: '',
      meta: {
        title: '',
        description: '',
        keywords: []
      }
    });
    setShowAddForm(false);
  };

  const handleToggleActive = (id) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, isActive: !route.isActive, updatedAt: new Date().toISOString().split('T')[0] } : route
    ));
  };

  const handleTogglePublic = (id) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, isPublic: !route.isPublic, updatedAt: new Date().toISOString().split('T')[0] } : route
    ));
  };

  const handleDuplicate = (route) => {
    const newId = Math.max(...routes.map(route => route.id)) + 1;
    const duplicatedRoute = {
      ...route,
      id: newId,
      path: `${route.path}-copy`,
      name: `${route.name} (কপি)`,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setRoutes([...routes, duplicatedRoute]);
  };

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'active' && route.isActive) ||
                         (filterStatus === 'inactive' && !route.isActive);
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">রুট ম্যানেজমেন্ট</h2>
          <p className="text-xs sm:text-sm text-gray-300">ওয়েবসাইটের রুট এবং পেজ পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-xs sm:text-sm"
        >
          <FiPlus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">নতুন রুট যোগ করুন</span>
          <span className="sm:hidden">নতুন রুট</span>
        </button>
      </div>

      {/* Route Guidelines */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FiAlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-2">রুট গাইডলাইন</h3>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• রুট পাথ সর্বদা "/" দিয়ে শুরু করতে হবে</li>
              <li>• পাবলিক রুট সবাই দেখতে পারবে, প্রাইভেট রুট শুধু এডমিন</li>
              <li>• কম্পোনেন্ট নাম PascalCase এ লিখতে হবে</li>
              <li>• SEO এর জন্য মেটা তথ্য পূরণ করুন</li>
              <li>• সক্রিয় রুট শুধু ওয়েবসাইটে দেখাবে</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="রুট খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">সব স্ট্যাটাস</option>
            <option value="active">সক্রিয়</option>
            <option value="inactive">নিষ্ক্রিয়</option>
          </select>
          
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <FiRefreshCw className="w-4 h-4 mr-2" />
              রিফ্রেশ
            </button>
          </div>
        </div>
      </div>

      {/* Add Route Form */}
      {showAddForm && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">নতুন রুট যোগ করুন</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-300"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">রুট পাথ</label>
              <input
                type="text"
                value={newRoute.path}
                onChange={(e) => setNewRoute({...newRoute, path: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="/page-name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">রুটের নাম</label>
              <input
                type="text"
                value={newRoute.name}
                onChange={(e) => setNewRoute({...newRoute, name: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="রুটের নাম"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">কম্পোনেন্ট নাম</label>
              <input
                type="text"
                value={newRoute.component}
                onChange={(e) => setNewRoute({...newRoute, component: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="PageComponent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">বিবরণ</label>
              <input
                type="text"
                value={newRoute.description}
                onChange={(e) => setNewRoute({...newRoute, description: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="রুটের বিবরণ"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">পেজ শিরোনাম</label>
              <input
                type="text"
                value={newRoute.meta.title}
                onChange={(e) => setNewRoute({...newRoute, meta: {...newRoute.meta, title: e.target.value}})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="পেজের শিরোনাম"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">মেটা বিবরণ</label>
              <input
                type="text"
                value={newRoute.meta.description}
                onChange={(e) => setNewRoute({...newRoute, meta: {...newRoute.meta, description: e.target.value}})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="SEO বিবরণ"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newRoute.isActive}
                  onChange={(e) => setNewRoute({...newRoute, isActive: e.target.checked})}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-300">সক্রিয়</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newRoute.isPublic}
                  onChange={(e) => setNewRoute({...newRoute, isPublic: e.target.checked})}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-300">পাবলিক</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
            >
              বাতিল
            </button>
            <button
              onClick={handleAddRoute}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiSave className="w-4 h-4 mr-2 inline" />
              যোগ করুন
            </button>
          </div>
        </div>
      )}

      {/* Edit Route Modal */}
      {editingRoute && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">রুট সম্পাদনা</h3>
              <button
                onClick={() => setEditingRoute(null)}
                className="text-gray-500 hover:text-gray-300"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">রুট পাথ</label>
                <input
                  type="text"
                  value={editingRoute.path}
                  onChange={(e) => setEditingRoute({...editingRoute, path: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">রুটের নাম</label>
                <input
                  type="text"
                  value={editingRoute.name}
                  onChange={(e) => setEditingRoute({...editingRoute, name: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">কম্পোনেন্ট নাম</label>
                <input
                  type="text"
                  value={editingRoute.component}
                  onChange={(e) => setEditingRoute({...editingRoute, component: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">বিবরণ</label>
                <input
                  type="text"
                  value={editingRoute.description}
                  onChange={(e) => setEditingRoute({...editingRoute, description: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">পেজ শিরোনাম</label>
                <input
                  type="text"
                  value={editingRoute.meta.title}
                  onChange={(e) => setEditingRoute({...editingRoute, meta: {...editingRoute.meta, title: e.target.value}})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">মেটা বিবরণ</label>
                <input
                  type="text"
                  value={editingRoute.meta.description}
                  onChange={(e) => setEditingRoute({...editingRoute, meta: {...editingRoute.meta, description: e.target.value}})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingRoute.isActive}
                    onChange={(e) => setEditingRoute({...editingRoute, isActive: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-300">সক্রিয়</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingRoute.isPublic}
                    onChange={(e) => setEditingRoute({...editingRoute, isPublic: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-300">পাবলিক</span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingRoute(null)}
                className="px-3 py-1.5 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                বাতিল
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
              >
                <FiSave className="w-3 h-3 mr-1 inline" />
                সেভ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Routes List */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">রুটসমূহ ({filteredRoutes.length})</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredRoutes.map((route) => (
            <div key={route.id} className="p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-white">{route.name}</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {route.path}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      route.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {route.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      route.isPublic 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {route.isPublic ? 'পাবলিক' : 'প্রাইভেট'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-2">{route.description}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <FiSettings className="w-3 h-3 mr-1" />
                      {route.component}
                    </div>
                    <div className="flex items-center">
                      <FiGlobe className="w-3 h-3 mr-1" />
                      {route.meta.title}
                    </div>
                    <div className="flex items-center">
                      <FiCheck className="w-3 h-3 mr-1" />
                      {route.updatedAt}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleToggleActive(route.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      route.isActive 
                        ? 'text-green-400 hover:bg-green-500/20' 
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {route.isActive ? <FiCheck className="w-4 h-4" /> : <FiX className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => handleTogglePublic(route.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      route.isPublic 
                        ? 'text-emerald-400 hover:bg-emerald-500/20' 
                        : 'text-red-400 hover:bg-red-500/20'
                    }`}
                  >
                    {route.isPublic ? <FiUnlock className="w-4 h-4" /> : <FiLock className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => handleEdit(route)}
                    className="p-2 text-emerald-400 hover:bg-emerald-500/20 rounded-lg transition-colors"
                  >
                    <FiEdit3 className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDuplicate(route)}
                    className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    <FiCopy className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDelete(route.id)}
                    className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteManagement;
