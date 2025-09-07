'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiMove,
  FiEye,
  FiToggleLeft,
  FiToggleRight,
  FiHome,
  FiInfo,
  FiFileText,
  FiTarget,
  FiImage,
  FiEdit,
  FiHeart,
  FiMail,
  FiUser,
  FiSettings,
  FiGrid,
  FiList
} from 'react-icons/fi';

const NavbarManagement = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, href: "/", label: "হোম", icon: "FiHome", isActive: true, order: 1, isExternal: false },
    { id: 2, href: "/about", label: "আমাদের সম্পর্কে", icon: "FiInfo", isActive: true, order: 2, isExternal: false },
    { id: 3, href: "/constitution", label: "গঠনতন্ত্র", icon: "FiFileText", isActive: true, order: 3, isExternal: false },
    { id: 4, href: "/projects", label: "আমাদের কার্যক্রম", icon: "FiTarget", isActive: true, order: 4, isExternal: false },
    { id: 5, href: "/gallery", label: "গ্যালারী", icon: "FiImage", isActive: true, order: 5, isExternal: false },
    { id: 6, href: "/blog", label: "ব্লগ", icon: "FiEdit", isActive: true, order: 6, isExternal: false },
    { id: 7, href: "/donation", label: "দান", icon: "FiHeart", isActive: true, order: 7, isExternal: false },
    { id: 8, href: "/contact", label: "যোগাযোগ", icon: "FiMail", isActive: true, order: 8, isExternal: false },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    href: '',
    label: '',
    icon: 'FiHome',
    isActive: true,
    order: menuItems.length + 1,
    isExternal: false
  });

  const availableIcons = [
    { value: 'FiHome', label: 'হোম', icon: FiHome },
    { value: 'FiInfo', label: 'তথ্য', icon: FiInfo },
    { value: 'FiFileText', label: 'ফাইল', icon: FiFileText },
    { value: 'FiTarget', label: 'লক্ষ্য', icon: FiTarget },
    { value: 'FiImage', label: 'ছবি', icon: FiImage },
    { value: 'FiEdit', label: 'সম্পাদনা', icon: FiEdit },
    { value: 'FiHeart', label: 'হৃদয়', icon: FiHeart },
    { value: 'FiMail', label: 'মেইল', icon: FiMail },
    { value: 'FiUser', label: 'ইউজার', icon: FiUser },
    { value: 'FiSettings', label: 'সেটিংস', icon: FiSettings },
    { value: 'FiGrid', label: 'গ্রিড', icon: FiGrid },
    { value: 'FiList', label: 'তালিকা', icon: FiList },
  ];

  const getIconComponent = (iconName) => {
    const iconObj = availableIcons.find(icon => icon.value === iconName);
    return iconObj ? iconObj.icon : FiHome;
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = () => {
    if (editingItem) {
      setMenuItems(menuItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ));
      setEditingItem(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই মেনু আইটেমটি মুছে ফেলতে চান?')) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const handleAddItem = () => {
    const newId = Math.max(...menuItems.map(item => item.id)) + 1;
    setMenuItems([...menuItems, { ...newItem, id: newId }]);
    setNewItem({
      href: '',
      label: '',
      icon: 'FiHome',
      isActive: true,
      order: menuItems.length + 1,
      isExternal: false
    });
    setShowAddForm(false);
  };

  const handleMoveUp = (id) => {
    const item = menuItems.find(item => item.id === id);
    const prevItem = menuItems.find(item => item.order === item.order - 1);
    if (prevItem) {
      setMenuItems(menuItems.map(item => {
        if (item.id === id) return { ...item, order: item.order - 1 };
        if (item.id === prevItem.id) return { ...item, order: item.order + 1 };
        return item;
      }));
    }
  };

  const handleMoveDown = (id) => {
    const item = menuItems.find(item => item.id === id);
    const nextItem = menuItems.find(item => item.order === item.order + 1);
    if (nextItem) {
      setMenuItems(menuItems.map(item => {
        if (item.id === id) return { ...item, order: item.order + 1 };
        if (item.id === nextItem.id) return { ...item, order: item.order - 1 };
        return item;
      }));
    }
  };

  const handleDuplicate = (item) => {
    const newId = Math.max(...menuItems.map(item => item.id)) + 1;
    const duplicatedItem = {
      ...item,
      id: newId,
      label: `${item.label} (কপি)`,
      order: menuItems.length + 1
    };
    setMenuItems([...menuItems, duplicatedItem]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">নেভিগেশন মেনু ম্যানেজমেন্ট</h2>
          <p className="text-gray-600">ওয়েবসাইটের নেভিগেশন মেনু পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          নতুন মেনু আইটেম
        </button>
      </div>

      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">মেনু প্রিভিউ</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <nav className="flex flex-wrap gap-2">
            {menuItems
              .filter(item => item.isActive)
              .sort((a, b) => a.order - b.order)
              .map((item) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div
                    key={item.id}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
          </nav>
        </div>
      </div>

      {/* Add Menu Item Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">নতুন মেনু আইটেম যোগ করুন</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">লেবেল</label>
              <input
                type="text"
                value={newItem.label}
                onChange={(e) => setNewItem({...newItem, label: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="মেনু আইটেমের নাম লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">লিংক (URL)</label>
              <input
                type="text"
                value={newItem.href}
                onChange={(e) => setNewItem({...newItem, href: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="/page-name বা https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">আইকন</label>
              <select
                value={newItem.icon}
                onChange={(e) => setNewItem({...newItem, icon: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {availableIcons.map(icon => {
                  const IconComponent = icon.icon;
                  return (
                    <option key={icon.value} value={icon.value}>
                      {icon.label}
                    </option>
                  );
                })}
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newItem.isActive}
                  onChange={(e) => setNewItem({...newItem, isActive: e.target.checked})}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newItem.isExternal}
                  onChange={(e) => setNewItem({...newItem, isExternal: e.target.checked})}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">বাহ্যিক লিংক</span>
              </label>
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

      {/* Edit Menu Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">মেনু আইটেম সম্পাদনা</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">লেবেল</label>
                <input
                  type="text"
                  value={editingItem.label}
                  onChange={(e) => setEditingItem({...editingItem, label: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">লিংক (URL)</label>
                <input
                  type="text"
                  value={editingItem.href}
                  onChange={(e) => setEditingItem({...editingItem, href: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">আইকন</label>
                <select
                  value={editingItem.icon}
                  onChange={(e) => setEditingItem({...editingItem, icon: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {availableIcons.map(icon => (
                    <option key={icon.value} value={icon.value}>
                      {icon.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingItem.isActive}
                    onChange={(e) => setEditingItem({...editingItem, isActive: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingItem.isExternal}
                    onChange={(e) => setEditingItem({...editingItem, isExternal: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">বাহ্যিক লিংক</span>
                </label>
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

      {/* Menu Items List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">মেনু আইটেমসমূহ</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {menuItems.sort((a, b) => a.order - b.order).map((item) => {
            const IconComponent = getIconComponent(item.icon);
            return (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col space-y-1">
                      <button
                        onClick={() => handleMoveUp(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                        disabled={item.order === 1}
                      >
                        <FiMove className="w-4 h-4 rotate-180" />
                      </button>
                      <button
                        onClick={() => handleMoveDown(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                        disabled={item.order === menuItems.length}
                      >
                        <FiMove className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{item.label}</h4>
                        <p className="text-sm text-gray-600">{item.href}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                      </span>
                      {item.isExternal && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          বাহ্যিক
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleActive(item.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        item.isActive 
                          ? 'text-green-600 hover:bg-green-50' 
                          : 'text-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      {item.isActive ? <FiToggleRight className="w-5 h-5" /> : <FiToggleLeft className="w-5 h-5" />}
                    </button>
                    
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <FiEdit3 className="w-4 h-4" />
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarManagement;
