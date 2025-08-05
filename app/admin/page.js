'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../src/store/hooks';
import { updateUserProfile } from '../../src/store/slices/authSlice';
import { fetchStats } from '../../src/store/slices/uiSlice';
import { 
  FiUsers, FiEdit, FiImage, FiSettings, FiBarChart, FiUser, FiRefreshCw, 
  FiTrendingUp, FiActivity, FiShield, FiPlus, FiVideo, FiMenu, FiX,
  FiHome, FiUserPlus, FiFileText, FiCamera, FiPlay
} from 'react-icons/fi';

export default function AdminDashboard() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, loading } = useAppSelector((state) => state.auth);
  const { stats, statsLoading, statsError } = useAppSelector((state) => state.ui);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [profileForm, setProfileForm] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // Debug logging
  useEffect(() => {
    console.log('Admin Dashboard - Auth State:', { isAuthenticated, user, loading });
  }, [isAuthenticated, user, loading]);

  // Debug stats
  useEffect(() => {
    console.log('Admin Dashboard - Stats State:', { stats, statsLoading, statsError });
    if (stats) {
      console.log('📊 Raw stats data:', stats);
      console.log('👥 Total users from stats:', stats.totalUsers);
      console.log('🔍 Stats type:', typeof stats.totalUsers);
    }
  }, [stats, statsLoading, statsError]);

  // Fetch stats when component mounts
  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') {
      dispatch(fetchStats());
    }
  }, [isAuthenticated, user, dispatch]);

  // Show loading state while user data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-color border-t-transparent mx-auto"></div>
          <p className="mt-6 text-lg font-semibold text-gray-700">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // Get user display name with fallback
  const getUserDisplayName = () => {
    if (user?.name) {
      return user.name;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'অ্যাডমিন';
  };

  // Handle profile edit
  const handleProfileEdit = () => {
    setProfileForm({
      name: user?.name || '',
      phone: user?.phone || '',
      address: user?.address || ''
    });
    setShowProfileEdit(true);
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUserProfile(profileForm)).unwrap();
      setShowProfileEdit(false);
      alert('প্রোফাইল আপডেট হয়েছে!');
    } catch (error) {
      alert('প্রোফাইল আপডেট করতে সমস্যা হয়েছে: ' + error);
    }
  };

  const menuItems = [
    {
      id: 'dashboard',
      title: 'ড্যাশবোর্ড',
      icon: <FiHome className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'all-users',
      title: 'সকল ব্যবহারকারী',
      icon: <FiUsers className="w-5 h-5" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'create-user',
      title: 'ব্যবহারকারী তৈরি',
      icon: <FiUserPlus className="w-5 h-5" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'create-blog',
      title: 'ব্লগ তৈরি',
      icon: <FiFileText className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'gallery-photo',
      title: 'ফটো গ্যালারি',
      icon: <FiCamera className="w-5 h-5" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'video-gallery',
      title: 'ভিডিও গ্যালারি',
      icon: <FiPlay className="w-5 h-5" />,
      color: 'from-red-500 to-red-600'
    }
  ];

  const dashboardStats = [
    { 
      title: 'মোট ব্যবহারকারী', 
      value: statsLoading ? '...' : `${stats?.totalUsers || 0}`, 
      icon: <FiUsers className="w-8 h-8" />, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      description: 'সকল নিবন্ধিত ব্যবহারকারী'
    },
    { 
      title: 'মোট ব্লগ', 
      value: statsLoading ? '...' : `${stats?.totalBlogs || 0}`, 
      icon: <FiEdit className="w-8 h-8" />, 
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      description: 'প্রকাশিত ব্লগ পোস্ট'
    },
    { 
      title: 'মোট ছবি', 
      value: statsLoading ? '...' : `${stats?.totalGalleryItems || 0}`, 
      icon: <FiImage className="w-8 h-8" />, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      description: 'গ্যালারিতে আপলোডকৃত ছবি'
    },
    { 
      title: 'সক্রিয় সেশন', 
      value: statsLoading ? '...' : `${stats?.activeSessions || 0}`, 
      icon: <FiActivity className="w-8 h-8" />, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      description: 'বর্তমানে সক্রিয় ব্যবহারকারী'
    },
  ];

  const recentActivities = [
    {
      title: 'নতুন ব্যবহারকারী নিবন্ধন',
      time: '2 মিনিট আগে',
      type: 'user',
      color: 'from-green-500 to-green-600',
      icon: <FiUsers className="w-5 h-5" />
    },
    {
      title: 'নতুন ব্লগ প্রকাশিত',
      time: '15 মিনিট আগে',
      type: 'blog',
      color: 'from-blue-500 to-blue-600',
      icon: <FiEdit className="w-5 h-5" />
    },
    {
      title: 'নতুন ছবি আপলোড',
      time: '1 ঘন্টা আগে',
      type: 'gallery',
      color: 'from-purple-500 to-purple-600',
      icon: <FiImage className="w-5 h-5" />
    },
    {
      title: 'সিস্টেম আপডেট',
      time: '2 ঘন্টা আগে',
      type: 'system',
      color: 'from-orange-500 to-orange-600',
      icon: <FiSettings className="w-5 h-5" />
    }
  ];

  // Render content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
             case 'dashboard':
         return (
           <div className="space-y-8">
             {/* Header */}
             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
               <div className="space-y-4">
                 <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 animate-pulse"></div>
                   <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
                     অ্যাডমিন প্যানেল
                   </span>
                 </div>
                 
                 <div className="space-y-2">
                                   <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-secondary-color to-accent-color">
                     অ্যাডমিন ড্যাশবোর্ড
                   </span>
                 </h1>
                 <p className="text-base text-gray-600 font-medium">
                   স্বাগতম, {getUserDisplayName()}! আপনার সিস্টেমের ওভারভিউ দেখুন
                 </p>
                 </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                 <button
                   onClick={() => dispatch(fetchStats())}
                   className="group flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                 >
                   <FiRefreshCw className={`w-5 h-5 ${statsLoading ? 'animate-spin' : 'group-hover:rotate-180'} transition-all duration-300`} />
                   <span className="font-semibold">রিফ্রেশ</span>
                 </button>
                 <button
                   onClick={handleProfileEdit}
                   className="group flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                 >
                   <FiUser className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                   <span className="font-semibold">প্রোফাইল সম্পাদনা</span>
                 </button>
               </div>
             </div>

                           {/* Debug Stats Info */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Stats Debug Info:</h3>
                  <p className="text-sm text-blue-700">Raw stats: {JSON.stringify(stats)}</p>
                  <p className="text-sm text-blue-700">Total users: {stats?.totalUsers} (type: {typeof stats?.totalUsers})</p>
                  <p className="text-sm text-blue-700">Stats loading: {statsLoading ? 'Yes' : 'No'}</p>
                  <p className="text-sm text-blue-700">Stats error: {statsError || 'None'}</p>
                </div>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {dashboardStats.map((stat, index) => (
                 <div 
                   key={index} 
                   className="group relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/40"
                 >
                   <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                     <div className={`text-white bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                       {stat.icon}
                     </div>
                   </div>
                   
                   <div className={`text-2xl lg:text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                     {stat.value}
                   </div>
                   
                   <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-primary-color transition-colors duration-300">
                     {stat.title}
                   </h3>
                   
                   <p className="text-xs text-gray-600 font-medium">
                     {stat.description}
                   </p>

                   <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                 </div>
               ))}
             </div>

             {/* Recent Activity */}
             <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
               <div className="flex items-center space-x-3 mb-6">
                 <div className="w-8 h-8 bg-gradient-to-r from-secondary-color to-accent-color rounded-lg flex items-center justify-center">
                   <FiActivity className="w-5 h-5 text-white" />
                 </div>
                 <h2 className="text-xl font-bold text-gray-900">সাম্প্রতিক কার্যক্রম</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {recentActivities.map((activity, index) => (
                   <div 
                     key={index} 
                     className="group flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/50 transition-all duration-300"
                   >
                     <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activity.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                       <div className="text-white">
                         {activity.icon}
                       </div>
                     </div>
                     <div className="flex-1">
                       <p className="font-semibold text-gray-800 group-hover:text-primary-color transition-colors duration-300">
                         {activity.title}
                       </p>
                       <p className="text-sm text-gray-600">
                         {activity.time}
                       </p>
                     </div>
                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color} group-hover:scale-150 transition-transform duration-300`}></div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         );

       case 'all-users':
         return (
           <div className="space-y-8">
             <div className="space-y-4">
               <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                 <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                 <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                   ব্যবহারকারী ব্যবস্থাপনা
                 </span>
               </div>
               
               <h1 className="text-2xl lg:text-3xl font-black text-gray-900">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">
                   সকল ব্যবহারকারী
                 </span>
               </h1>
               <p className="text-base text-gray-600 font-medium">
                 নিবন্ধিত সকল ব্যবহারকারীর তালিকা দেখুন এবং পরিচালনা করুন
               </p>
             </div>

             <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
               <div className="flex items-center space-x-3 mb-6">
                 <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                   <FiUsers className="w-5 h-5 text-white" />
                 </div>
                 <h2 className="text-xl font-bold text-gray-900">ব্যবহারকারী তালিকা</h2>
               </div>
               
               <div className="text-center py-12">
                 <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
                   <FiUsers className="w-12 h-12 text-indigo-600" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 mb-2">ব্যবহারকারী তালিকা দেখুন</h3>
                 <p className="text-sm text-gray-600 mb-6">সকল নিবন্ধিত ব্যবহারকারীর বিস্তারিত তথ্য দেখুন</p>
                 <button
                   onClick={() => router.push('/admin/users')}
                   className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 font-semibold"
                 >
                   তালিকা দেখুন
                 </button>
               </div>
             </div>
           </div>
         );

      case 'create-user':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                  ব্যবহারকারী ব্যবস্থাপনা
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                  নতুন ব্যবহারকারী তৈরি
                </span>
              </h1>
              <p className="text-base text-gray-600 font-medium">
                নতুন ব্যবহারকারী নিবন্ধন করুন এবং তাদের তথ্য পরিচালনা করুন
              </p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <FiUserPlus className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">ব্যবহারকারী নিবন্ধন ফরম</h2>
              </div>
              
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiUserPlus className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ব্যবহারকারী তৈরি করুন</h3>
                <p className="text-sm text-gray-600 mb-6">নতুন ব্যবহারকারী নিবন্ধনের জন্য ফরম পূরণ করুন</p>
                <button
                  onClick={() => router.push('/admin/users/create')}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold"
                >
                  ফরম খুলুন
                </button>
              </div>
            </div>
          </div>
        );

      case 'create-blog':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                  ব্লগ ব্যবস্থাপনা
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">
                  নতুন ব্লগ তৈরি
                </span>
              </h1>
              <p className="text-base text-gray-600 font-medium">
                নতুন ব্লগ পোস্ট তৈরি করুন এবং প্রকাশ করুন
              </p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FiFileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">ব্লগ পোস্ট তৈরি</h2>
              </div>
              
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiFileText className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">নতুন ব্লগ লিখুন</h3>
                <p className="text-sm text-gray-600 mb-6">আপনার চিন্তা এবং অভিজ্ঞতা শেয়ার করুন</p>
                <button
                  onClick={() => router.push('/admin/blogs/create')}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  ব্লগ লিখুন
                </button>
              </div>
            </div>
          </div>
        );

      case 'gallery-photo':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  ফটো গ্যালারি
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                  ফটো গ্যালারি ব্যবস্থাপনা
                </span>
              </h1>
              <p className="text-base text-gray-600 font-medium">
                ছবি আপলোড করুন এবং গ্যালারি পরিচালনা করুন
              </p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <FiCamera className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">ফটো আপলোড</h2>
              </div>
              
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCamera className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ছবি আপলোড করুন</h3>
                <p className="text-sm text-gray-600 mb-6">গ্যালারিতে নতুন ছবি যোগ করুন</p>
                <button
                  onClick={() => router.push('/admin/gallery/create')}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold"
                >
                  ছবি আপলোড করুন
                </button>
              </div>
            </div>
          </div>
        );

      case 'video-gallery':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  ভিডিও গ্যালারি
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  ভিডিও গ্যালারি ব্যবস্থাপনা
                </span>
              </h1>
              <p className="text-base text-gray-600 font-medium">
                ভিডিও আপলোড করুন এবং ভিডিও গ্যালারি পরিচালনা করুন
              </p>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <FiPlay className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">ভিডিও আপলোড</h2>
              </div>
              
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiPlay className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">ভিডিও আপলোড করুন</h3>
                <p className="text-sm text-gray-600 mb-6">ভিডিও গ্যালারিতে নতুন ভিডিও যোগ করুন</p>
                <button
                  onClick={() => router.push('/admin/videos/create')}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-semibold"
                >
                  ভিডিও আপলোড করুন
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-color/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-color/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-color/3 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-primary-color/8 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white/30 backdrop-blur-xl border-r border-white/20 transition-all duration-300 flex flex-col`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              {sidebarOpen && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-color to-secondary-color rounded-lg flex items-center justify-center">
                    <FiShield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-gray-800">অ্যাডমিন</span>
                </div>
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                {sidebarOpen ? <FiX className="w-5 h-5 text-gray-600" /> : <FiMenu className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>

          {/* Sidebar Menu */}
          <div className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                  activeMenu === item.id
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/20'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeMenu === item.id
                    ? 'bg-white/20'
                    : 'bg-gradient-to-r ' + item.color + ' group-hover:scale-110 transition-transform duration-300'
                }`}>
                  <div className={activeMenu === item.id ? 'text-white' : 'text-white'}>
                    {item.icon}
                  </div>
                </div>
                {sidebarOpen && (
                  <span className="font-semibold">{item.title}</span>
                )}
              </button>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/20">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                <FiUser className="w-5 h-5 text-white" />
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{getUserDisplayName()}</p>
                  <p className="text-xs text-gray-600">অ্যাডমিন</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {showProfileEdit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/30 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FiUser className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">প্রোফাইল সম্পাদনা</h2>
            </div>
            
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  নাম
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ফোন
                </label>
                <input
                  type="text"
                  value={profileForm.phone}
                  onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ঠিকানা
                </label>
                <textarea
                  value={profileForm.address}
                  onChange={(e) => setProfileForm({...profileForm, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  rows="3"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold"
                >
                  আপডেট করুন
                </button>
                <button
                  type="button"
                  onClick={() => setShowProfileEdit(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-400 transition-all duration-300 font-semibold"
                >
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 