'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiUsers, 
  FiFileText, 
  FiImage, 
  FiBarChart3, 
  FiSettings,
  FiLogOut,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye
} from 'react-icons/fi';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    blogs: 0,
    gallery: 0,
    totalViews: 0
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentGallery, setRecentGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch statistics
      const statsResponse = await fetch('/api/admin/stats');
      const statsData = await statsResponse.json();
      setStats(statsData);

      // Fetch recent blogs
      const blogsResponse = await fetch('/api/blogs?limit=5');
      const blogsData = await blogsResponse.json();
      setRecentBlogs(blogsData);

      // Fetch recent gallery items
      const galleryResponse = await fetch('/api/gallery?limit=5');
      const galleryData = await galleryResponse.json();
      setRecentGallery(galleryData);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear admin session
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Subban Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              >
                <FiLogOut className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FiUsers className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.users}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FiFileText className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Blog Posts</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.blogs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FiImage className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Gallery Items</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.gallery}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FiBarChart3 className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Views</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalViews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/blogs/create" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 text-center transition duration-200">
            <FiPlus className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Create Blog Post</p>
          </Link>
          
          <Link href="/admin/gallery/create" className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-6 text-center transition duration-200">
            <FiPlus className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Add Gallery Item</p>
          </Link>
          
          <Link href="/admin/blogs" className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-6 text-center transition duration-200">
            <FiEdit className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Manage Blogs</p>
          </Link>
          
          <Link href="/admin/gallery" className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg p-6 text-center transition duration-200">
            <FiImage className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Manage Gallery</p>
          </Link>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blog Posts */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Recent Blog Posts</h3>
                <Link href="/admin/blogs" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View all
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentBlogs.length > 0 ? (
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <div key={blog._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 truncate">{blog.title}</h4>
                        <p className="text-sm text-gray-500">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/blogs/${blog._id}`} className="text-blue-600 hover:text-blue-800">
                          <FiEdit className="h-4 w-4" />
                        </Link>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No blog posts yet</p>
              )}
            </div>
          </div>

          {/* Recent Gallery Items */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Recent Gallery Items</h3>
                <Link href="/admin/gallery" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View all
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentGallery.length > 0 ? (
                <div className="space-y-4">
                  {recentGallery.map((item) => (
                    <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.imageUrl && (
                          <img 
                            src={item.imageUrl} 
                            alt={item.title}
                            className="h-10 w-10 rounded object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
                          <p className="text-sm text-gray-500">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/gallery/${item._id}`} className="text-blue-600 hover:text-blue-800">
                          <FiEdit className="h-4 w-4" />
                        </Link>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No gallery items yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 