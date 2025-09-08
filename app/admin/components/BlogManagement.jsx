'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiEye,
  FiCalendar,
  FiUser,
  FiTag,
  FiImage,
  FiFileText,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiCopy,
  FiUpload,
  FiDownload
} from 'react-icons/fi';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'ইসলামের সঠিক দাওয়াতের গুরুত্ব',
      slug: 'islamic-dawah-importance',
      content: 'ইসলামের সঠিক দাওয়াত সমাজ গঠনে অত্যন্ত গুরুত্বপূর্ণ। এটি মানুষের হৃদয়ে ইসলামের আলো ছড়িয়ে দেয়।',
      excerpt: 'ইসলামের সঠিক দাওয়াত সমাজ গঠনে অত্যন্ত গুরুত্বপূর্ণ।',
      author: 'মাওলানা আব্দুল হামিদ',
      category: 'দাওয়াত',
      tags: ['ইসলাম', 'দাওয়াত', 'সমাজ'],
      featuredImage: '/logo/logo_1.jpg',
      status: 'published',
      publishedAt: '2024-01-15',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-15',
      views: 1250,
      likes: 45
    },
    {
      id: 2,
      title: 'যুব সমাজের দায়িত্ব ও কর্তব্য',
      slug: 'youth-responsibility-duty',
      content: 'যুব সমাজ ইসলামের ভবিষ্যত। তাদের সঠিক দিকনির্দেশনা দেওয়া আমাদের দায়িত্ব।',
      excerpt: 'যুব সমাজ ইসলামের ভবিষ্যত। তাদের সঠিক দিকনির্দেশনা দেওয়া আমাদের দায়িত্ব।',
      author: 'ড. মুহাম্মদ আলী',
      category: 'যুব',
      tags: ['যুব', 'দায়িত্ব', 'ইসলাম'],
      featuredImage: '/logo/logo_1.jpg',
      status: 'published',
      publishedAt: '2024-01-12',
      createdAt: '2024-01-08',
      updatedAt: '2024-01-12',
      views: 980,
      likes: 32
    },
    {
      id: 3,
      title: 'সমাজ সংস্কারে ইসলামের ভূমিকা',
      slug: 'islam-role-social-reform',
      content: 'ইসলাম একটি পূর্ণাঙ্গ জীবন ব্যবস্থা যা সমাজের সকল সমস্যার সমাধান দেয়।',
      excerpt: 'ইসলাম একটি পূর্ণাঙ্গ জীবন ব্যবস্থা যা সমাজের সকল সমস্যার সমাধান দেয়।',
      author: 'প্রফেসর আহমেদ হাসান',
      category: 'সমাজ',
      tags: ['সমাজ', 'সংস্কার', 'ইসলাম'],
      featuredImage: '/logo/logo_1.jpg',
      status: 'draft',
      publishedAt: null,
      createdAt: '2024-01-14',
      updatedAt: '2024-01-14',
      views: 0,
      likes: 0
    }
  ]);

  const [editingBlog, setEditingBlog] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [newBlog, setNewBlog] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    category: '',
    tags: [],
    featuredImage: '',
    status: 'draft'
  });

  const categories = ['দাওয়াত', 'যুব', 'সমাজ', 'শিক্ষা', 'সংস্কৃতি', 'ইতিহাস'];
  const statuses = [
    { value: 'draft', label: 'খসড়া', color: 'gray' },
    { value: 'published', label: 'প্রকাশিত', color: 'green' },
    { value: 'archived', label: 'আর্কাইভ', color: 'blue' }
  ];

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleSave = () => {
    if (editingBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? { ...editingBlog, updatedAt: new Date().toISOString().split('T')[0] } : blog
      ));
      setEditingBlog(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই ব্লগ পোস্টটি মুছে ফেলতে চান?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const handleAddBlog = () => {
    const newId = Math.max(...blogs.map(blog => blog.id)) + 1;
    const slug = newBlog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
    const newBlogWithId = {
      ...newBlog,
      id: newId,
      slug: slug,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      publishedAt: newBlog.status === 'published' ? new Date().toISOString().split('T')[0] : null,
      views: 0,
      likes: 0
    };
    setBlogs([...blogs, newBlogWithId]);
    setNewBlog({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: '',
      category: '',
      tags: [],
      featuredImage: '',
      status: 'draft'
    });
    setShowAddForm(false);
  };

  const handleDuplicate = (blog) => {
    const newId = Math.max(...blogs.map(blog => blog.id)) + 1;
    const duplicatedBlog = {
      ...blog,
      id: newId,
      title: `${blog.title} (কপি)`,
      slug: `${blog.slug}-copy`,
      status: 'draft',
      publishedAt: null,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0
    };
    setBlogs([...blogs, duplicatedBlog]);
  };

  const handlePublish = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id 
        ? { 
            ...blog, 
            status: 'published', 
            publishedAt: new Date().toISOString().split('T')[0],
            updatedAt: new Date().toISOString().split('T')[0]
          } 
        : blog
    ));
  };

  const handleUnpublish = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id 
        ? { 
            ...blog, 
            status: 'draft', 
            publishedAt: null,
            updatedAt: new Date().toISOString().split('T')[0]
          } 
        : blog
    ));
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || blog.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || blog.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    const statusObj = statuses.find(s => s.value === status);
    return statusObj ? statusObj.color : 'gray';
  };

  const getStatusLabel = (status) => {
    const statusObj = statuses.find(s => s.value === status);
    return statusObj ? statusObj.label : status;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">ব্লগ পোস্ট ম্যানেজমেন্ট</h2>
          <p className="text-xs sm:text-sm text-gray-300">ব্লগ পোস্ট তৈরি, সম্পাদনা এবং পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          নতুন ব্লগ পোস্ট
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="ব্লগ পোস্ট খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all" className="text-white">সব স্ট্যাটাস</option>
            {statuses.map(status => (
              <option key={status.value} value={status.value} className="text-white">{status.label}</option>
            ))}
          </select>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all" className="text-white">সব ক্যাটাগরি</option>
            {categories.map(category => (
              <option key={category} value={category} className="text-white">{category}</option>
            ))}
          </select>
          
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <FiDownload className="w-4 h-4 mr-2" />
              এক্সপোর্ট
            </button>
          </div>
        </div>
      </div>

      {/* Add Blog Form */}
      {showAddForm && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">নতুন ব্লগ পোস্ট তৈরি করুন</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-300"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">শিরোনাম</label>
              <input
                type="text"
                value={newBlog.title}
                onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ব্লগ পোস্টের শিরোনাম লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">লেখক</label>
              <input
                type="text"
                value={newBlog.author}
                onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="লেখকের নাম"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">ক্যাটাগরি</label>
              <select
                value={newBlog.category}
                onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">সংক্ষিপ্ত বিবরণ</label>
              <textarea
                value={newBlog.excerpt}
                onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                rows={2}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ব্লগ পোস্টের সংক্ষিপ্ত বিবরণ"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">বিষয়বস্তু</label>
              <textarea
                value={newBlog.content}
                onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                rows={6}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ব্লগ পোস্টের সম্পূর্ণ বিষয়বস্তু লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">ফিচার্ড ইমেজ URL</label>
              <input
                type="text"
                value={newBlog.featuredImage}
                onChange={(e) => setNewBlog({...newBlog, featuredImage: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ছবির URL"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">স্ট্যাটাস</label>
              <select
                value={newBlog.status}
                onChange={(e) => setNewBlog({...newBlog, status: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
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
              onClick={handleAddBlog}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiSave className="w-4 h-4 mr-2 inline" />
              তৈরি করুন
            </button>
          </div>
        </div>
      )}

      {/* Edit Blog Modal */}
      {editingBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">ব্লগ পোস্ট সম্পাদনা</h3>
              <button
                onClick={() => setEditingBlog(null)}
                className="text-gray-500 hover:text-gray-300"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">শিরোনাম</label>
                <input
                  type="text"
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">লেখক</label>
                <input
                  type="text"
                  value={editingBlog.author}
                  onChange={(e) => setEditingBlog({...editingBlog, author: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ক্যাটাগরি</label>
                <select
                  value={editingBlog.category}
                  onChange={(e) => setEditingBlog({...editingBlog, category: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">সংক্ষিপ্ত বিবরণ</label>
                <textarea
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({...editingBlog, excerpt: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">বিষয়বস্তু</label>
                <textarea
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({...editingBlog, content: e.target.value})}
                  rows={8}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ফিচার্ড ইমেজ URL</label>
                <input
                  type="text"
                  value={editingBlog.featuredImage}
                  onChange={(e) => setEditingBlog({...editingBlog, featuredImage: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">স্ট্যাটাস</label>
                <select
                  value={editingBlog.status}
                  onChange={(e) => setEditingBlog({...editingBlog, status: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {statuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingBlog(null)}
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

      {/* Blogs List */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">ব্লগ পোস্টসমূহ ({filteredBlogs.length})</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-white">{blog.title}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getStatusColor(blog.status)}-100 text-${getStatusColor(blog.status)}-800`}>
                      {getStatusLabel(blog.status)}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-2">{blog.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <FiUser className="w-3 h-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {blog.publishedAt || blog.createdAt}
                    </div>
                    <div className="flex items-center">
                      <FiEye className="w-3 h-3 mr-1" />
                      {blog.views} দেখা
                    </div>
                    <div className="flex items-center">
                      <FiTag className="w-3 h-3 mr-1" />
                      {blog.likes} পছন্দ
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {blog.status === 'draft' ? (
                    <button
                      onClick={() => handlePublish(blog.id)}
                      className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      প্রকাশ করুন
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnpublish(blog.id)}
                      className="px-3 py-1 text-xs bg-gray-7000 text-white rounded hover:bg-gray-600 transition-colors"
                    >
                      খসড়া করুন
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 text-emerald-400 hover:bg-emerald-500/20 rounded-lg transition-colors"
                  >
                    <FiEdit3 className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDuplicate(blog)}
                    className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    <FiCopy className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDelete(blog.id)}
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

export default BlogManagement;
