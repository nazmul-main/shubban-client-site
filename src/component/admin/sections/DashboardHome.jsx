'use client';

const DashboardHome = () => {
  const stats = [
    {
      title: 'মোট ব্যবহারকারী',
      titleEn: 'Total Users',
      value: '১,২৩৪',
      valueEn: '1,234',
      change: '+১২%',
      changeEn: '+12%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: 'মোট ব্লগ',
      titleEn: 'Total Blogs',
      value: '৮৯',
      valueEn: '89',
      change: '+৫%',
      changeEn: '+5%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: 'গ্যালারি আইটেম',
      titleEn: 'Gallery Items',
      value: '১৫৬',
      valueEn: '156',
      change: '+২৩%',
      changeEn: '+23%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'সক্রিয় সেশন',
      titleEn: 'Active Sessions',
      value: '৪৫',
      valueEn: '45',
      change: '-৩%',
      changeEn: '-3%',
      changeType: 'negative',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      message: 'নতুন ব্যবহারকারী নিবন্ধিত: জন ডো',
      time: '২ মিনিট আগে',
      avatar: 'জড'
    },
    {
      id: 2,
      type: 'blog',
      message: 'ব্লগ পোস্ট প্রকাশিত: "সর্বশেষ আপডেট"',
      time: '১ ঘন্টা আগে',
      avatar: 'বিউ'
    },
    {
      id: 3,
      type: 'gallery',
      message: 'গ্যালারিতে নতুন ছবি আপলোড হয়েছে',
      time: '৩ ঘন্টা আগে',
      avatar: 'জিপি'
    },
    {
      id: 4,
      type: 'user',
      message: 'ব্যবহারকারীর প্রোফাইল আপডেট: জেন স্মিথ',
      time: '৫ ঘন্টা আগে',
      avatar: 'জেস'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      {/* Welcome Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl mx-4 sm:mx-8 mb-16 p-8 sm:p-10 lg:p-12 text-white shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full translate-x-6 sm:translate-x-12 -translate-y-6 sm:-translate-y-12"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full -translate-x-5 sm:-translate-x-10 translate-y-5 sm:translate-y-10"></div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center border border-white/30 shadow-lg flex-shrink-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl">👋</span>
          </div>
          <div className="flex-1 py-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 pt-4 sm:mb-4 leading-tight">স্বাগতম, অ্যাডমিন!</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/90 mb-2 sm:mb-4">Welcome back, Admin!</h2>
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100 mb-1 sm:mb-2 leading-relaxed">আপনার শুভান ওয়েবসাইটে আজ কী ঘটছে তা দেখুন</p>
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100 leading-relaxed">Here's what's happening with your Shubban website today.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 space-y-16">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/60">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">{stat.title}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{stat.value}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className={`text-xs sm:text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">গত মাস থেকে</span>
                  </div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${stat.changeType === 'positive' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-400 to-red-600'} text-white shadow-lg mx-auto sm:mx-0`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions and Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Actions */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/60">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">দ্রুত পদক্ষেপ</h3>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:from-teal-500 hover:to-emerald-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="hidden sm:inline">নতুন ব্যবহারকারী তৈরি করুন</span>
                <span className="sm:hidden">নতুন ব্যবহারকারী</span>
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:from-indigo-500 hover:to-blue-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="hidden sm:inline">নতুন ব্লগ লিখুন</span>
                <span className="sm:hidden">নতুন ব্লগ</span>
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:from-pink-500 hover:to-purple-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">ছবি আপলোড করুন</span>
                <span className="sm:hidden">ছবি আপলোড</span>
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg lg:col-span-2 border border-white/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">সাম্প্রতিক কার্যক্রম</h3>
              <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium bg-emerald-50 px-3 sm:px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors self-start sm:self-auto">
                সব দেখুন
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-lg sm:rounded-xl transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-md flex-shrink-0">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1 truncate">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${activity.type === 'user' ? 'bg-blue-500' : activity.type === 'blog' ? 'bg-green-500' : 'bg-purple-500'} flex-shrink-0`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-white/60">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>সিস্টেমের অবস্থা</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl border border-green-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">ওয়েবসাইট</span>
              </div>
              <span className="text-xs sm:text-sm text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full">অনলাইন</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl border border-green-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">ডাটাবেস</span>
              </div>
              <span className="text-xs sm:text-sm text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full">সংযুক্ত</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl border border-blue-200 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">স্টোরেজ</span>
              </div>
              <span className="text-xs sm:text-sm text-blue-600 font-medium bg-blue-100 px-2 sm:px-3 py-1 rounded-full">৭৮% উপলব্ধ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
