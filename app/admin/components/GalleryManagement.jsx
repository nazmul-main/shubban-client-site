'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiEye,
  FiUpload,
  FiImage,
  FiFolder,
  FiTag,
  FiCalendar,
  FiSearch,
  FiFilter,
  FiGrid,
  FiList,
  FiDownload,
  FiCopy,
  FiMove,
  FiStar,
  FiHeart
} from 'react-icons/fi';

const GalleryManagement = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      title: 'দাওয়াতি কার্যক্রম',
      description: 'আমাদের দাওয়াতি কার্যক্রমের ছবি',
      imageUrl: '/logo/logo_1.jpg',
      category: 'দাওয়াত',
      tags: ['দাওয়াত', 'কার্যক্রম', 'ইসলাম'],
      isFeatured: true,
      isActive: true,
      uploadedAt: '2024-01-15',
      size: '2.5 MB',
      dimensions: '1920x1080',
      views: 1250,
      likes: 45
    },
    {
      id: 2,
      title: 'যুব সম্মেলন',
      description: 'যুব সম্মেলনের স্মরণীয় মুহূর্ত',
      imageUrl: '/logo/logo_1.jpg',
      category: 'যুব',
      tags: ['যুব', 'সম্মেলন', 'সমাবেশ'],
      isFeatured: false,
      isActive: true,
      uploadedAt: '2024-01-12',
      size: '3.2 MB',
      dimensions: '1920x1080',
      views: 980,
      likes: 32
    },
    {
      id: 3,
      title: 'শিক্ষামূলক সেমিনার',
      description: 'ইসলামিক শিক্ষামূলক সেমিনার',
      imageUrl: '/logo/logo_1.jpg',
      category: 'শিক্ষা',
      tags: ['শিক্ষা', 'সেমিনার', 'ইসলাম'],
      isFeatured: true,
      isActive: true,
      uploadedAt: '2024-01-10',
      size: '1.8 MB',
      dimensions: '1920x1080',
      views: 750,
      likes: 28
    },
    {
      id: 4,
      title: 'সামাজিক কার্যক্রম',
      description: 'সামাজিক উন্নয়ন কার্যক্রম',
      imageUrl: '/logo/logo_1.jpg',
      category: 'সমাজ',
      tags: ['সমাজ', 'উন্নয়ন', 'কার্যক্রম'],
      isFeatured: false,
      isActive: false,
      uploadedAt: '2024-01-08',
      size: '2.1 MB',
      dimensions: '1920x1080',
      views: 450,
      likes: 15
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    tags: [],
    isFeatured: false,
    isActive: true
  });

  const categories = ['দাওয়াত', 'যুব', 'শিক্ষা', 'সমাজ', 'সংস্কৃতি', 'ইতিহাস', 'সামাজিক কার্যক্রম'];
  const statuses = [
    { value: 'active', label: 'সক্রিয়', color: 'green' },
    { value: 'inactive', label: 'নিষ্ক্রিয়', color: 'gray' }
  ];

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = () => {
    if (editingItem) {
      setGalleryItems(galleryItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ));
      setEditingItem(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই গ্যালারি আইটেমটি মুছে ফেলতে চান?')) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  const handleAddItem = () => {
    const newId = Math.max(...galleryItems.map(item => item.id)) + 1;
    const newItemWithId = {
      ...newItem,
      id: newId,
      uploadedAt: new Date().toISOString().split('T')[0],
      size: '2.0 MB',
      dimensions: '1920x1080',
      views: 0,
      likes: 0
    };
    setGalleryItems([...galleryItems, newItemWithId]);
    setNewItem({
      title: '',
      description: '',
      imageUrl: '',
      category: '',
      tags: [],
      isFeatured: false,
      isActive: true
    });
    setShowAddForm(false);
  };

  const handleToggleFeatured = (id) => {
    setGalleryItems(galleryItems.map(item => 
      item.id === id ? { ...item, isFeatured: !item.isFeatured } : item
    ));
  };

  const handleToggleActive = (id) => {
    setGalleryItems(galleryItems.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const handleDuplicate = (item) => {
    const newId = Math.max(...galleryItems.map(item => item.id)) + 1;
    const duplicatedItem = {
      ...item,
      id: newId,
      title: `${item.title} (কপি)`,
      uploadedAt: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0
    };
    setGalleryItems([...galleryItems, duplicatedItem]);
  };

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'active' && item.isActive) ||
                         (filterStatus === 'inactive' && !item.isActive);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real application, you would upload the file to a server
      // For now, we'll just create a local URL
      const imageUrl = URL.createObjectURL(file);
      setNewItem({...newItem, imageUrl});
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">গ্যালারি ম্যানেজমেন্ট</h2>
          <p className="text-gray-600">গ্যালারির ছবি এবং মিডিয়া ফাইল পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          নতুন ছবি যোগ করুন
        </button>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="গ্যালারি খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">সব ক্যাটাগরি</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">সব স্ট্যাটাস</option>
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-emerald-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FiGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-emerald-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FiList className="w-4 h-4" />
            </button>
            <button className="flex items-center px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FiDownload className="w-4 h-4 mr-2" />
              এক্সপোর্ট
            </button>
          </div>
        </div>
      </div>

      {/* Add Item Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">নতুন ছবি যোগ করুন</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ছবির শিরোনাম"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                <textarea
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ছবির বিবরণ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি</label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ট্যাগ (কমা দিয়ে আলাদা করুন)</label>
                <input
                  type="text"
                  value={newItem.tags.join(', ')}
                  onChange={(e) => setNewItem({...newItem, tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ট্যাগ লিখুন"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newItem.isFeatured}
                    onChange={(e) => setNewItem({...newItem, isFeatured: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">ফিচার্ড</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newItem.isActive}
                    onChange={(e) => setNewItem({...newItem, isActive: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ছবি আপলোড</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">ছবি আপলোড করুন</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF (সর্বোচ্চ 10MB)</p>
                  </label>
                </div>
              </div>
              
              {newItem.imageUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ছবির প্রিভিউ</label>
                  <div className="relative">
                    <img
                      src={newItem.imageUrl}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ছবির URL</label>
                <input
                  type="text"
                  value={newItem.imageUrl}
                  onChange={(e) => setNewItem({...newItem, imageUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ছবির URL লিখুন"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              বাতিল
            </button>
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiSave className="w-4 h-4 mr-2 inline" />
              যোগ করুন
            </button>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">গ্যালারি আইটেম সম্পাদনা</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                  <textarea
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি</label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ট্যাগ</label>
                  <input
                    type="text"
                    value={editingItem.tags.join(', ')}
                    onChange={(e) => setEditingItem({...editingItem, tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingItem.isFeatured}
                      onChange={(e) => setEditingItem({...editingItem, isFeatured: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">ফিচার্ড</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingItem.isActive}
                      onChange={(e) => setEditingItem({...editingItem, isActive: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ছবির URL</label>
                  <input
                    type="text"
                    value={editingItem.imageUrl}
                    onChange={(e) => setEditingItem({...editingItem, imageUrl: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                {editingItem.imageUrl && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ছবির প্রিভিউ</label>
                    <img
                      src={editingItem.imageUrl}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">আপলোড তারিখ:</span>
                    <p>{editingItem.uploadedAt}</p>
                  </div>
                  <div>
                    <span className="font-medium">ফাইল সাইজ:</span>
                    <p>{editingItem.size}</p>
                  </div>
                  <div>
                    <span className="font-medium">মাত্রা:</span>
                    <p>{editingItem.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium">দেখা:</span>
                    <p>{editingItem.views}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                বাতিল
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <FiSave className="w-4 h-4 mr-2 inline" />
                সেভ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">গ্যালারি আইটেমসমূহ ({filteredItems.length})</h3>
        </div>
        
        {viewMode === 'grid' ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      {item.isFeatured && (
                        <span className="bg-yellow-500 text-white p-1 rounded-full">
                          <FiStar className="w-3 h-3" />
                        </span>
                      )}
                      {!item.isActive && (
                        <span className="bg-red-500 text-white p-1 rounded-full">
                          <FiX className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-1 truncate">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.category}</span>
                      <span>{item.views} দেখা</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                        >
                          <FiEdit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleToggleFeatured(item.id)}
                          className={`p-1 rounded ${
                            item.isFeatured 
                              ? 'text-yellow-600 hover:bg-yellow-50' 
                              : 'text-gray-400 hover:bg-gray-50'
                          }`}
                        >
                          <FiStar className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                      {item.isFeatured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded-full">
                          ফিচার্ড
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FiCalendar className="w-3 h-3 mr-1" />
                        {item.uploadedAt}
                      </div>
                      <div className="flex items-center">
                        <FiEye className="w-3 h-3 mr-1" />
                        {item.views} দেখা
                      </div>
                      <div className="flex items-center">
                        <FiHeart className="w-3 h-3 mr-1" />
                        {item.likes} পছন্দ
                      </div>
                      <div className="flex items-center">
                        <FiTag className="w-3 h-3 mr-1" />
                        {item.tags.join(', ')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <FiEdit3 className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleToggleFeatured(item.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        item.isFeatured 
                          ? 'text-yellow-600 hover:bg-yellow-50' 
                          : 'text-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      <FiStar className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleDuplicate(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiCopy className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryManagement;
