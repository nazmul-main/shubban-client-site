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
  const [galleryData, setGalleryData] = useState({
    "types": ["ছবি", "ভিডিও"],
    "years": [2025, 2024, 2023, 2022],
    "categories": [
      {
        "id": 1,
        "name": "ইফতার বিতরণ",
        "items": {
          "2025": [
            {
              "type": "ছবি",
              "url": "/images/iftar-2025-1.jpg",
              "title": "ইফতার বিতরণ - ঢাকা",
              "description": "২০২৫ সালে ঢাকায় ইফতার বিতরণের মুহূর্ত।"
            },
            {
              "type": "ভিডিও",
              "url": "/videos/iftar-2025-1.mp4",
              "title": "ইফতার বিতরণ ভিডিও",
              "description": "ঢাকায় ইফতার আয়োজনের ভিডিও ক্লিপ।"
            }
          ]
        }
      },
      {
        "id": 2,
        "name": "ঈদিয়া",
        "items": {
          "2025": [
            {
              "type": "ছবি",
              "url": "/images/eid-2025-1.jpg",
              "title": "ঈদ উপহার বিতরণ",
              "description": "২০২৫ সালে শিশুদের মাঝে ঈদ উপহার বিতরণ।"
            }
          ]
        }
      },
      {
        "id": 3,
        "name": "কুরবানী",
        "items": {
          "2024": [
            {
              "type": "ছবি",
              "url": "/images/qurbani-2024-1.jpg",
              "title": "কুরবানীর ছবি",
              "description": "২০২৪ সালের কুরবানী কার্যক্রমের ছবি।"
            },
            {
              "type": "ভিডিও",
              "url": "/videos/qurbani-2024-1.mp4",
              "title": "কুরবানী ভিডিও",
              "description": "গরু কুরবানীর ভিডিও।"
            }
          ]
        }
      },
      {
        "id": 4,
        "name": "শীতবস্ত্র",
        "items": {
          "2023": [
            {
              "type": "ছবি",
              "url": "/images/winter-2023-1.jpg",
              "title": "শীতবস্ত্র বিতরণ",
              "description": "২০২৩ সালে গরিব মানুষের মাঝে শীতবস্ত্র বিতরণ।"
            }
          ]
        }
      },
      {
        "id": 5,
        "name": "বৃক্ষরোপণ",
        "items": {
          "2022": [
            {
              "type": "ছবি",
              "url": "/images/tree-2022-1.jpg",
              "title": "বৃক্ষরোপণ কর্মসূচি",
              "description": "২০২২ সালে বৃক্ষরোপণ কর্মসূচির ছবি।"
            }
          ]
        }
      }
    ]
  });

  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newItem, setNewItem] = useState({
    type: 'ছবি',
    year: new Date().getFullYear().toString(),
    category: '',
    title: '',
    description: '',
    url: ''
  });

  const categories = galleryData.categories.map(cat => cat.name);
  const statuses = [
    { value: 'active', label: 'সক্রিয়', color: 'green' },
    { value: 'inactive', label: 'নিষ্ক্রিয়', color: 'gray' }
  ];

  const handleEdit = (item, categoryId, year) => {
    setEditingItem({...item, categoryId, year});
  };

  const handleSave = () => {
    if (editingItem) {
      const updatedData = {...galleryData};
      const category = updatedData.categories.find(cat => cat.id === editingItem.categoryId);
      if (category && category.items[editingItem.year]) {
        const itemIndex = category.items[editingItem.year].findIndex(item => 
          item.title === editingItem.originalTitle && item.url === editingItem.originalUrl
        );
        if (itemIndex !== -1) {
          category.items[editingItem.year][itemIndex] = {
            type: editingItem.type,
            url: editingItem.url,
            title: editingItem.title,
            description: editingItem.description
          };
        }
      }
      setGalleryData(updatedData);
      setEditingItem(null);
    }
  };

  const handleDelete = (item, categoryId, year) => {
    if (confirm('আপনি কি এই গ্যালারি আইটেমটি মুছে ফেলতে চান?')) {
      const updatedData = {...galleryData};
      const category = updatedData.categories.find(cat => cat.id === categoryId);
      if (category && category.items[year]) {
        category.items[year] = category.items[year].filter(catItem => 
          !(catItem.title === item.title && catItem.url === item.url)
        );
      }
      setGalleryData(updatedData);
    }
  };

  const handleAddNewCategory = () => {
    if (!newCategoryName.trim()) {
      alert('দয়া করে ক্যাটাগরি নাম লিখুন');
      return;
    }

    // Check if category already exists
    if (galleryData.categories.some(cat => cat.name === newCategoryName.trim())) {
      alert('এই ক্যাটাগরি ইতিমধ্যে বিদ্যমান');
      return;
    }

    const updatedData = {...galleryData};
    const newCategoryId = Math.max(...updatedData.categories.map(cat => cat.id)) + 1;
    
    updatedData.categories.push({
      id: newCategoryId,
      name: newCategoryName.trim(),
      items: {}
    });
    
    setGalleryData(updatedData);
    setNewCategoryName('');
    setShowNewCategoryForm(false);
    
    // Auto-select the new category
    setNewItem({...newItem, category: newCategoryName.trim()});
  };

  const handleAddItem = () => {
    if (!newItem.category || !newItem.title || !newItem.url) {
      alert('দয়া করে সব প্রয়োজনীয় ফিল্ড পূরণ করুন');
      return;
    }

    const updatedData = {...galleryData};
    const category = updatedData.categories.find(cat => cat.name === newItem.category);
    
    if (category) {
      if (!category.items[newItem.year]) {
        category.items[newItem.year] = [];
      }
      
      category.items[newItem.year].push({
        type: newItem.type,
        url: newItem.url,
        title: newItem.title,
        description: newItem.description
      });
    }
    
    setGalleryData(updatedData);
    setNewItem({
      type: 'ছবি',
      year: new Date().getFullYear().toString(),
      category: '',
      title: '',
      description: '',
      url: ''
    });
    setShowAddForm(false);
  };

  // Get all items from all categories and years for filtering
  const getAllItems = () => {
    const allItems = [];
    galleryData.categories.forEach(category => {
      Object.keys(category.items).forEach(year => {
        category.items[year].forEach(item => {
          allItems.push({
            ...item,
            categoryId: category.id,
            categoryName: category.name,
            year: year
          });
        });
      });
    });
    return allItems;
  };

  const filteredItems = getAllItems().filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.categoryName === filterCategory;
    const matchesYear = filterYear === 'all' || item.year === filterYear;
    const matchesType = filterType === 'all' || item.type === filterType;
    
    return matchesSearch && matchesCategory && matchesYear && matchesType;
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real application, you would upload the file to a server
      // For now, we'll just create a local URL
      const fileUrl = URL.createObjectURL(file);
      setNewItem({...newItem, url: fileUrl});
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
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">সব বছর</option>
              {galleryData.years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">সব ধরন</option>
              {galleryData.types.map(type => (
                <option key={type} value={type}>{type}</option>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">ধরন</label>
                <select
                  value={newItem.type}
                  onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {galleryData.types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বছর</label>
                <select
                  value={newItem.year}
                  onChange={(e) => setNewItem({...newItem, year: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {galleryData.years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি</label>
                <div className="flex gap-2">
                  <select
                    value={newItem.category}
                    onChange={(e) => {
                      if (e.target.value === 'add_new') {
                        setShowNewCategoryForm(true);
                      } else {
                        setNewItem({...newItem, category: e.target.value});
                      }
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                    <option value="add_new" className="text-emerald-600 font-medium">+ নতুন ক্যাটাগরি যোগ করুন</option>
                  </select>
                </div>
                
                {/* New Category Form */}
                {showNewCategoryForm && (
                  <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="নতুন ক্যাটাগরি নাম লিখুন"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddNewCategory()}
                      />
                      <button
                        onClick={handleAddNewCategory}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        যোগ করুন
                      </button>
                      <button
                        onClick={() => {
                          setShowNewCategoryForm(false);
                          setNewCategoryName('');
                        }}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        বাতিল
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ছবি/ভিডিওর শিরোনাম"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                <textarea
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ছবি/ভিডিওর বিবরণ"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {newItem.type === 'ছবি' ? 'ছবি আপলোড' : 'ভিডিও আপলোড'}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept={newItem.type === 'ছবি' ? "image/*" : "video/*"}
                    onChange={handleFileUpload}
                    className="hidden"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" className="cursor-pointer">
                    <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {newItem.type === 'ছবি' ? 'ছবি আপলোড করুন' : 'ভিডিও আপলোড করুন'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {newItem.type === 'ছবি' ? 'PNG, JPG, GIF (সর্বোচ্চ 10MB)' : 'MP4, AVI, MOV (সর্বোচ্চ 100MB)'}
                    </p>
                  </label>
                </div>
              </div>
              
              {newItem.url && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {newItem.type === 'ছবি' ? 'ছবির প্রিভিউ' : 'ভিডিও প্রিভিউ'}
                  </label>
                  <div className="relative">
                    {newItem.type === 'ছবি' ? (
                      <img
                        src={newItem.url}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                      />
                    ) : (
                      <video
                        src={newItem.url}
                        controls
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                      />
                    )}
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {newItem.type === 'ছবি' ? 'ছবির URL' : 'ভিডিওর URL'}
                </label>
                <input
                  type="text"
                  value={newItem.url}
                  onChange={(e) => setNewItem({...newItem, url: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder={newItem.type === 'ছবি' ? 'ছবির URL লিখুন' : 'ভিডিওর URL লিখুন'}
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


      {/* Gallery Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">গ্যালারি আইটেমসমূহ ({filteredItems.length})</h3>
        </div>
        
        {viewMode === 'grid' ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div key={`${item.categoryId}-${item.year}-${index}`} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {item.type === 'ছবি' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full h-48 object-cover"
                        controls
                      />
                    )}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.type === 'ছবি' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-purple-500 text-white'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-1 truncate">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.categoryName}</span>
                      <span>{item.year}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleEdit(item, item.categoryId, item.year)}
                          className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                        >
                          <FiEdit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item, item.categoryId, item.year)}
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
            {filteredItems.map((item, index) => (
              <div key={`${item.categoryId}-${item.year}-${index}`} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  {item.type === 'ছবি' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="w-16 h-16 object-cover rounded-lg"
                      controls
                    />
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.type === 'ছবি' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {item.type}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded-full">
                        {item.categoryName}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-medium rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FiCalendar className="w-3 h-3 mr-1" />
                        {item.year}
                      </div>
                      <div className="flex items-center">
                        <FiTag className="w-3 h-3 mr-1" />
                        {item.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(item, item.categoryId, item.year)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <FiEdit3 className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleDelete(item, item.categoryId, item.year)}
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
