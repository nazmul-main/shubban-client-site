'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiUpload,
  FiImage,
  FiEye,
  FiDownload,
  FiCopy,
  FiRefreshCw,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';

const LogoManagement = () => {
  const [logos, setLogos] = useState([
    {
      id: 1,
      name: 'মূল লোগো',
      description: 'ওয়েবসাইটের প্রধান লোগো',
      imageUrl: '/logo/logo_1.jpg',
      type: 'main',
      size: '2.5 MB',
      dimensions: '512x512',
      format: 'JPG',
      isActive: true,
      uploadedAt: '2024-01-15',
      usage: ['header', 'footer', 'favicon']
    },
    {
      id: 2,
      name: 'ফেভিকন',
      description: 'ব্রাউজার ট্যাবে দেখানো লোগো',
      imageUrl: '/favicon.ico',
      type: 'favicon',
      size: '15 KB',
      dimensions: '32x32',
      format: 'ICO',
      isActive: true,
      uploadedAt: '2024-01-15',
      usage: ['favicon']
    },
    {
      id: 3,
      name: 'সোশ্যাল মিডিয়া লোগো',
      description: 'সোশ্যাল মিডিয়ায় শেয়ার করার জন্য',
      imageUrl: '/logo/logo_1.jpg',
      type: 'social',
      size: '1.8 MB',
      dimensions: '1200x630',
      format: 'JPG',
      isActive: true,
      uploadedAt: '2024-01-15',
      usage: ['social', 'opengraph']
    },
    {
      id: 4,
      name: 'মোবাইল লোগো',
      description: 'মোবাইল ডিভাইসের জন্য অপটিমাইজড লোগো',
      imageUrl: '/logo/logo_1.jpg',
      type: 'mobile',
      size: '1.2 MB',
      dimensions: '256x256',
      format: 'PNG',
      isActive: false,
      uploadedAt: '2024-01-10',
      usage: ['mobile']
    }
  ]);

  const [editingLogo, setEditingLogo] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLogo, setNewLogo] = useState({
    name: '',
    description: '',
    imageUrl: '',
    type: 'main',
    isActive: true,
    usage: []
  });

  const logoTypes = [
    { value: 'main', label: 'মূল লোগো', description: 'ওয়েবসাইটের প্রধান লোগো' },
    { value: 'favicon', label: 'ফেভিকন', description: 'ব্রাউজার ট্যাবে দেখানো লোগো' },
    { value: 'social', label: 'সোশ্যাল মিডিয়া', description: 'সোশ্যাল মিডিয়ায় শেয়ার করার জন্য' },
    { value: 'mobile', label: 'মোবাইল', description: 'মোবাইল ডিভাইসের জন্য' },
    { value: 'print', label: 'প্রিন্ট', description: 'প্রিন্টিংয়ের জন্য' },
    { value: 'watermark', label: 'ওয়াটারমার্ক', description: 'ছবির উপর ওয়াটারমার্ক হিসেবে' }
  ];

  const usageOptions = [
    { value: 'header', label: 'হেডার' },
    { value: 'footer', label: 'ফুটার' },
    { value: 'favicon', label: 'ফেভিকন' },
    { value: 'social', label: 'সোশ্যাল মিডিয়া' },
    { value: 'opengraph', label: 'ওপেন গ্রাফ' },
    { value: 'mobile', label: 'মোবাইল' },
    { value: 'print', label: 'প্রিন্ট' },
    { value: 'watermark', label: 'ওয়াটারমার্ক' }
  ];

  const handleEdit = (logo) => {
    setEditingLogo(logo);
  };

  const handleSave = () => {
    if (editingLogo) {
      setLogos(logos.map(logo => 
        logo.id === editingLogo.id ? editingLogo : logo
      ));
      setEditingLogo(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই লোগোটি মুছে ফেলতে চান?')) {
      setLogos(logos.filter(logo => logo.id !== id));
    }
  };

  const handleAddLogo = () => {
    const newId = Math.max(...logos.map(logo => logo.id)) + 1;
    const newLogoWithId = {
      ...newLogo,
      id: newId,
      uploadedAt: new Date().toISOString().split('T')[0],
      size: '2.0 MB',
      dimensions: '512x512',
      format: 'JPG'
    };
    setLogos([...logos, newLogoWithId]);
    setNewLogo({
      name: '',
      description: '',
      imageUrl: '',
      type: 'main',
      isActive: true,
      usage: []
    });
    setShowAddForm(false);
  };

  const handleToggleActive = (id) => {
    setLogos(logos.map(logo => 
      logo.id === id ? { ...logo, isActive: !logo.isActive } : logo
    ));
  };

  const handleDuplicate = (logo) => {
    const newId = Math.max(...logos.map(logo => logo.id)) + 1;
    const duplicatedLogo = {
      ...logo,
      id: newId,
      name: `${logo.name} (কপি)`,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    setLogos([...logos, duplicatedLogo]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real application, you would upload the file to a server
      // For now, we'll just create a local URL
      const imageUrl = URL.createObjectURL(file);
      setNewLogo({...newLogo, imageUrl});
    }
  };

  const handleUsageChange = (usage, checked) => {
    if (checked) {
      setNewLogo({...newLogo, usage: [...newLogo.usage, usage]});
    } else {
      setNewLogo({...newLogo, usage: newLogo.usage.filter(u => u !== usage)});
    }
  };

  const handleEditUsageChange = (usage, checked) => {
    if (checked) {
      setEditingLogo({...editingLogo, usage: [...editingLogo.usage, usage]});
    } else {
      setEditingLogo({...editingLogo, usage: editingLogo.usage.filter(u => u !== usage)});
    }
  };

  const getLogoTypeInfo = (type) => {
    return logoTypes.find(t => t.value === type) || { label: type, description: '' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">লোগো ম্যানেজমেন্ট</h2>
          <p className="text-gray-600">ওয়েবসাইটের লোগো এবং ব্র্যান্ডিং উপাদান পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          নতুন লোগো যোগ করুন
        </button>
      </div>

      {/* Logo Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FiAlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">লোগো গাইডলাইন</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• মূল লোগো: সর্বনিম্ন 512x512 পিক্সেল, PNG বা JPG ফরম্যাট</li>
              <li>• ফেভিকন: 32x32 পিক্সেল, ICO ফরম্যাট</li>
              <li>• সোশ্যাল মিডিয়া: 1200x630 পিক্সেল, JPG ফরম্যাট</li>
              <li>• ফাইল সাইজ: সর্বোচ্চ 5MB</li>
              <li>• রঙ: উচ্চ রেজোলিউশনে এবং স্বচ্ছ ব্যাকগ্রাউন্ডে</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Logo Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">নতুন লোগো যোগ করুন</h3>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর নাম</label>
                <input
                  type="text"
                  value={newLogo.name}
                  onChange={(e) => setNewLogo({...newLogo, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="লোগোর নাম লিখুন"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                <textarea
                  value={newLogo.description}
                  onChange={(e) => setNewLogo({...newLogo, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="লোগোর বিবরণ লিখুন"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর ধরন</label>
                <select
                  value={newLogo.type}
                  onChange={(e) => setNewLogo({...newLogo, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {logoTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">{getLogoTypeInfo(newLogo.type).description}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ব্যবহারের জায়গা</label>
                <div className="grid grid-cols-2 gap-2">
                  {usageOptions.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newLogo.usage.includes(option.value)}
                        onChange={(e) => handleUsageChange(option.value, e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newLogo.isActive}
                    onChange={(e) => setNewLogo({...newLogo, isActive: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">লোগো আপলোড</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">লোগো আপলোড করুন</p>
                    <p className="text-xs text-gray-500">PNG, JPG, ICO (সর্বোচ্চ 5MB)</p>
                  </label>
                </div>
              </div>
              
              {newLogo.imageUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর প্রিভিউ</label>
                  <div className="relative">
                    <img
                      src={newLogo.imageUrl}
                      alt="Preview"
                      className="w-full h-48 object-contain bg-gray-50 rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর URL</label>
                <input
                  type="text"
                  value={newLogo.imageUrl}
                  onChange={(e) => setNewLogo({...newLogo, imageUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="লোগোর URL লিখুন"
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
              onClick={handleAddLogo}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiSave className="w-4 h-4 mr-2 inline" />
              যোগ করুন
            </button>
          </div>
        </div>
      )}

      {/* Edit Logo Modal */}
      {editingLogo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">লোগো সম্পাদনা</h3>
              <button
                onClick={() => setEditingLogo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর নাম</label>
                  <input
                    type="text"
                    value={editingLogo.name}
                    onChange={(e) => setEditingLogo({...editingLogo, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                  <textarea
                    value={editingLogo.description}
                    onChange={(e) => setEditingLogo({...editingLogo, description: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর ধরন</label>
                  <select
                    value={editingLogo.type}
                    onChange={(e) => setEditingLogo({...editingLogo, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {logoTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ব্যবহারের জায়গা</label>
                  <div className="grid grid-cols-2 gap-2">
                    {usageOptions.map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={editingLogo.usage.includes(option.value)}
                          onChange={(e) => handleEditUsageChange(option.value, e.target.checked)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingLogo.isActive}
                      onChange={(e) => setEditingLogo({...editingLogo, isActive: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর URL</label>
                  <input
                    type="text"
                    value={editingLogo.imageUrl}
                    onChange={(e) => setEditingLogo({...editingLogo, imageUrl: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                {editingLogo.imageUrl && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">লোগোর প্রিভিউ</label>
                    <img
                      src={editingLogo.imageUrl}
                      alt="Preview"
                      className="w-full h-48 object-contain bg-gray-50 rounded-lg border border-gray-200"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">আপলোড তারিখ:</span>
                    <p>{editingLogo.uploadedAt}</p>
                  </div>
                  <div>
                    <span className="font-medium">ফাইল সাইজ:</span>
                    <p>{editingLogo.size}</p>
                  </div>
                  <div>
                    <span className="font-medium">মাত্রা:</span>
                    <p>{editingLogo.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium">ফরম্যাট:</span>
                    <p>{editingLogo.format}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingLogo(null)}
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

      {/* Logos Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">লোগোসমূহ ({logos.length})</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logos.map((logo) => (
              <div key={logo.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {logo.isActive && (
                      <span className="bg-green-500 text-white p-1 rounded-full">
                        <FiCheck className="w-3 h-3" />
                      </span>
                    )}
                    {!logo.isActive && (
                      <span className="bg-red-500 text-white p-1 rounded-full">
                        <FiX className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-1">{logo.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{logo.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {getLogoTypeInfo(logo.type).label}
                    </span>
                    <span>{logo.format}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    <p>মাত্রা: {logo.dimensions}</p>
                    <p>সাইজ: {logo.size}</p>
                    <p>ব্যবহার: {logo.usage.join(', ')}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleEdit(logo)}
                        className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                      >
                        <FiEdit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleToggleActive(logo.id)}
                        className={`p-1 rounded ${
                          logo.isActive 
                            ? 'text-green-600 hover:bg-green-50' 
                            : 'text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <FiCheck className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDuplicate(logo)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <FiCopy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(logo.id)}
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
      </div>
    </div>
  );
};

export default LogoManagement;
