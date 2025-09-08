'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiEye, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiImage, 
  FiType, 
  FiLayout,
  FiToggleLeft,
  FiToggleRight,
  FiMove,
  FiCopy
} from 'react-icons/fi';

const SectionsManagement = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: 'হিরো সেকশন',
      type: 'hero',
      title: 'শুব্বান দাওয়াতি কাফেলা',
      subtitle: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি',
      description: 'আমরা ইসলামের সঠিক দাওয়াতের মাধ্যমে সমাজ গঠনে কাজ করি',
      image: '/logo/logo_1.jpg',
      isActive: true,
      order: 1
    },
    {
      id: 2,
      name: 'আমাদের সম্পর্কে',
      type: 'about',
      title: 'আমাদের সম্পর্কে',
      subtitle: 'শুব্বান দাওয়াতি কাফেলা সম্পর্কে জানুন',
      description: 'আমাদের সংগঠন সম্পর্কে বিস্তারিত তথ্য',
      image: '/logo/logo_1.jpg',
      isActive: true,
      order: 2
    },
    {
      id: 3,
      name: 'কার্যক্রম',
      type: 'features',
      title: 'আমাদের কার্যক্রম',
      subtitle: 'আমরা যা করি',
      description: 'আমাদের বিভিন্ন কার্যক্রমের বিবরণ',
      image: '/logo/logo_1.jpg',
      isActive: true,
      order: 3
    },
    {
      id: 4,
      name: 'পরিসংখ্যান',
      type: 'stats',
      title: 'আমাদের অর্জন',
      subtitle: 'সংখ্যায় আমাদের সাফল্য',
      description: 'বিভিন্ন পরিসংখ্যান ও অর্জন',
      image: '/logo/logo_1.jpg',
      isActive: true,
      order: 4
    },
    {
      id: 5,
      name: 'ক্যাটাগরি',
      type: 'category',
      title: 'আমাদের বিভাগসমূহ',
      subtitle: 'বিভিন্ন বিভাগে আমাদের কাজ',
      description: 'আমাদের বিভিন্ন বিভাগের কার্যক্রম',
      image: '/logo/logo_1.jpg',
      isActive: false,
      order: 5
    }
  ]);

  const [editingSection, setEditingSection] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSection, setNewSection] = useState({
    name: '',
    type: 'hero',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    isActive: true,
    order: sections.length + 1
  });

  const sectionTypes = [
    { value: 'hero', label: 'হিরো সেকশন' },
    { value: 'about', label: 'আমাদের সম্পর্কে' },
    { value: 'features', label: 'কার্যক্রম' },
    { value: 'stats', label: 'পরিসংখ্যান' },
    { value: 'category', label: 'ক্যাটাগরি' },
    { value: 'cta', label: 'কল টু অ্যাকশন' },
    { value: 'testimonial', label: 'সাক্ষ্য' },
    { value: 'newsletter', label: 'নিউজলেটার' }
  ];

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleSave = () => {
    if (editingSection) {
      setSections(sections.map(s => 
        s.id === editingSection.id ? editingSection : s
      ));
      setEditingSection(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই সেকশনটি মুছে ফেলতে চান?')) {
      setSections(sections.filter(s => s.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setSections(sections.map(s => 
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
  };

  const handleAddSection = () => {
    const newId = Math.max(...sections.map(s => s.id)) + 1;
    setSections([...sections, { ...newSection, id: newId }]);
    setNewSection({
      name: '',
      type: 'hero',
      title: '',
      subtitle: '',
      description: '',
      image: '',
      isActive: true,
      order: sections.length + 1
    });
    setShowAddForm(false);
  };

  const handleMoveUp = (id) => {
    const section = sections.find(s => s.id === id);
    const prevSection = sections.find(s => s.order === section.order - 1);
    if (prevSection) {
      setSections(sections.map(s => {
        if (s.id === id) return { ...s, order: s.order - 1 };
        if (s.id === prevSection.id) return { ...s, order: s.order + 1 };
        return s;
      }));
    }
  };

  const handleMoveDown = (id) => {
    const section = sections.find(s => s.id === id);
    const nextSection = sections.find(s => s.order === section.order + 1);
    if (nextSection) {
      setSections(sections.map(s => {
        if (s.id === id) return { ...s, order: s.order + 1 };
        if (s.id === nextSection.id) return { ...s, order: s.order - 1 };
        return s;
      }));
    }
  };

  const handleDuplicate = (section) => {
    const newId = Math.max(...sections.map(s => s.id)) + 1;
    const duplicatedSection = {
      ...section,
      id: newId,
      name: `${section.name} (কপি)`,
      order: sections.length + 1
    };
    setSections([...sections, duplicatedSection]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">সেকশন ম্যানেজমেন্ট</h2>
          <p className="text-gray-600">হোমপেজের বিভিন্ন সেকশন পরিচালনা করুন</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          নতুন সেকশন
        </button>
      </div>

      {/* Add Section Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">নতুন সেকশন যোগ করুন</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">সেকশনের নাম</label>
              <input
                type="text"
                value={newSection.name}
                onChange={(e) => setNewSection({...newSection, name: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="সেকশনের নাম লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">সেকশনের ধরন</label>
              <select
                value={newSection.type}
                onChange={(e) => setNewSection({...newSection, type: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {sectionTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
              <input
                type="text"
                value={newSection.title}
                onChange={(e) => setNewSection({...newSection, title: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="শিরোনাম লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">উপশিরোনাম</label>
              <input
                type="text"
                value={newSection.subtitle}
                onChange={(e) => setNewSection({...newSection, subtitle: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="উপশিরোনাম লিখুন"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
              <textarea
                value={newSection.description}
                onChange={(e) => setNewSection({...newSection, description: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="বিবরণ লিখুন"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ছবির URL</label>
              <input
                type="text"
                value={newSection.image}
                onChange={(e) => setNewSection({...newSection, image: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="ছবির URL লিখুন"
              />
            </div>
            
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newSection.isActive}
                  onChange={(e) => setNewSection({...newSection, isActive: e.target.checked})}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
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
              onClick={handleAddSection}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiSave className="w-4 h-4 mr-2 inline" />
              যোগ করুন
            </button>
          </div>
        </div>
      )}

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">সেকশন সম্পাদনা</h3>
              <button
                onClick={() => setEditingSection(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">সেকশনের নাম</label>
                <input
                  type="text"
                  value={editingSection.name}
                  onChange={(e) => setEditingSection({...editingSection, name: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">সেকশনের ধরন</label>
                <select
                  value={editingSection.type}
                  onChange={(e) => setEditingSection({...editingSection, type: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {sectionTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">শিরোনাম</label>
                <input
                  type="text"
                  value={editingSection.title}
                  onChange={(e) => setEditingSection({...editingSection, title: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">উপশিরোনাম</label>
                <input
                  type="text"
                  value={editingSection.subtitle}
                  onChange={(e) => setEditingSection({...editingSection, subtitle: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
                <textarea
                  value={editingSection.description}
                  onChange={(e) => setEditingSection({...editingSection, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ছবির URL</label>
                <input
                  type="text"
                  value={editingSection.image}
                  onChange={(e) => setEditingSection({...editingSection, image: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingSection.isActive}
                    onChange={(e) => setEditingSection({...editingSection, isActive: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">সক্রিয়</span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setEditingSection(null)}
                className="px-3 py-1.5 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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

      {/* Sections List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">সেকশনসমূহ</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {sections.sort((a, b) => a.order - b.order).map((section) => (
            <div key={section.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={() => handleMoveUp(section.id)}
                      className="text-gray-400 hover:text-gray-600"
                      disabled={section.order === 1}
                    >
                      <FiMove className="w-4 h-4 rotate-180" />
                    </button>
                    <button
                      onClick={() => handleMoveDown(section.id)}
                      className="text-gray-400 hover:text-gray-600"
                      disabled={section.order === sections.length}
                    >
                      <FiMove className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-medium text-gray-900">{section.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        section.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {section.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {sectionTypes.find(t => t.value === section.type)?.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{section.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{section.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleActive(section.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      section.isActive 
                        ? 'text-green-600 hover:bg-green-50' 
                        : 'text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {section.isActive ? <FiToggleRight className="w-5 h-5" /> : <FiToggleLeft className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={() => handleDuplicate(section)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <FiCopy className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleEdit(section)}
                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <FiEdit3 className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

export default SectionsManagement;
