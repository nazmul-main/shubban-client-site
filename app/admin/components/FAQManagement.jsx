'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiTrash2, 
  FiPlus, 
  FiSave, 
  FiX, 
  FiEye,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiCheck,
  FiAlertCircle,
  FiCopy,
  FiHelpCircle,
  FiChevronDown,
  FiChevronRight,
  FiMoreVertical
} from 'react-icons/fi';

const FAQManagement = () => {
  const [faqs, setFaqs] = useState([
    {
      category: 'সাধারণ',
      questions: [
        { q: 'কিভাবে শুব্বান দাওয়াতি কাফেলার সাথে যোগাযোগ করবো?', a: 'আমাদের ওয়েবসাইটের যোগাযোগ ফর্ম ব্যবহার করুন অথবা ফোন/ইমেইল করুন।' },
        { q: 'কিভাবে সদস্য হতে পারি?', a: 'সদস্য হতে আমাদের অফিসে যোগাযোগ করুন বা অনলাইনে আবেদন করুন।' },
        { q: 'শুব্বান দাওয়াতি কাফেলার মূল লক্ষ্য কী?', a: 'আমাদের মূল লক্ষ্য মানবতার সেবা, সামাজিক সংস্কার, এবং ইসলামের সঠিক শিক্ষা প্রচার।' },
        { q: 'কিভাবে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে পারি?', a: 'স্বেচ্ছাসেবক হতে আমাদের অফিসে যোগাযোগ করুন বা ওয়েবসাইটে আবেদন করুন।' },
        { q: 'সংস্থার কার্যক্রম কোথায় পরিচালিত হয়?', a: 'আমাদের কার্যক্রম সারা বাংলাদেশে পরিচালিত হয়।' },
        { q: 'কিভাবে সংস্থার প্রকল্প সম্পর্কে জানতে পারি?', a: 'প্রকল্প পাতায় বিস্তারিত তথ্য পাওয়া যাবে।' },
        { q: 'সংস্থার সাথে অনলাইনে যোগাযোগের উপায় কী?', a: 'আমাদের ইমেইল বা ওয়েবসাইটের ফর্ম ব্যবহার করুন।' },
        { q: 'শুব্বান দাওয়াতি কাফেলার অফিস কোথায়?', a: 'ঢাকা শহরে আমাদের প্রধান অফিস অবস্থিত। বিস্তারিত ঠিকানা যোগাযোগ পাতায় পাওয়া যাবে।' },
      ],
    },
    {
      category: 'প্রকল্প',
      questions: [
        { q: 'প্রকল্পে কিভাবে অংশগ্রহণ করবো?', a: 'প্রকল্প পাতায় বিস্তারিত তথ্য পাবেন।' },
        { q: 'কোন কোন প্রকল্প বর্তমানে চলছে?', a: 'শিক্ষা, স্বাস্থ্যসেবা, দারিদ্র্য বিমোচন ও সচেতনতামূলক প্রকল্প বর্তমানে পরিচালিত হচ্ছে।' },
        { q: 'আমি কি নিজের এলাকায় প্রকল্প শুরু করতে পারি?', a: 'হ্যাঁ, অফিসে যোগাযোগ করলে আপনার এলাকার জন্য সহযোগিতা দেওয়া হবে।' },
      ],
    },
    {
      category: 'দান',
      questions: [
        { q: 'কিভাবে অনুদান দিতে পারি?', a: 'দান পাতায় গিয়ে নির্দেশনা অনুসরণ করুন।' },
        { q: 'অনলাইনে কি দান করা যাবে?', a: 'হ্যাঁ, আমরা অনলাইন ব্যাংকিং ও মোবাইল ফাইন্যান্সিয়াল সার্ভিস গ্রহণ করি।' },
        { q: 'আমার দান কোথায় ব্যয় হবে?', a: 'আপনার দান শিক্ষা, স্বাস্থ্য, এতিমখানা ও মানবসেবায় ব্যবহার করা হয়।' },
      ],
    },
    {
      category: 'ইভেন্ট',
      questions: [
        { q: 'সংস্থার ইভেন্ট সম্পর্কে তথ্য কোথায় পাব?', a: 'ইভেন্ট পাতায় সকল তথ্য পাওয়া যাবে।' },
        { q: 'আমি কি ইভেন্টে অংশ নিতে পারি?', a: 'হ্যাঁ, নিবন্ধনের মাধ্যমে আপনি অংশ নিতে পারবেন।' },
        { q: 'ইভেন্ট কবে আয়োজন করা হয়?', a: 'প্রতিবছর বিভিন্ন সময়ে জাতীয় ও আঞ্চলিক ইভেন্ট আয়োজন করা হয়।' },
      ],
    },
    {
      category: 'গোপনীয়তা',
      questions: [
        { q: 'আমার তথ্য কি নিরাপদ?', a: 'হ্যাঁ, আপনার তথ্য সম্পূর্ণ নিরাপদভাবে সংরক্ষণ করা হয়।' },
        { q: 'তথ্য কি অন্য কোনো সংস্থার সাথে শেয়ার করা হয়?', a: 'না, আপনার ব্যক্তিগত তথ্য আমরা কারও সাথে শেয়ার করি না।' },
      ],
    },
    {
      category: 'যোগাযোগ মাধ্যম',
      questions: [
        { q: 'কোন কোন মাধ্যমে যোগাযোগ করা যায়?', a: 'ফোন, ইমেইল, ওয়েবসাইট ফর্ম এবং সামাজিক মাধ্যমে যোগাযোগ করা যায়।' },
        { q: 'সামাজিক মাধ্যমে কি সক্রিয়?', a: 'হ্যাঁ, আমরা ফেসবুক, ইউটিউব এবং হোয়াটসঅ্যাপে সক্রিয়।' },
      ],
    },
    {
      category: 'সদস্যপদ',
      questions: [
        { q: 'সদস্যপদ পেতে কি যোগ্যতা লাগবে?', a: 'সদস্য হতে হলে ন্যূনতম ১৮ বছর বয়স এবং সৎ চরিত্রের অধিকারী হতে হবে।' },
        { q: 'সদস্যদের জন্য কি বিশেষ সুবিধা আছে?', a: 'সদস্যরা প্রশিক্ষণ, কর্মশালা ও বিশেষ ইভেন্টে অংশগ্রহণের সুযোগ পান।' },
      ],
    },
    {
      category: 'সহযোগিতা',
      questions: [
        { q: 'কিভাবে সংস্থাকে সহযোগিতা করতে পারি?', a: 'আপনি স্বেচ্ছাসেবক, দান বা প্রচারণার মাধ্যমে সহযোগিতা করতে পারেন।' },
        { q: 'আমি কি আন্তর্জাতিকভাবে সহযোগিতা করতে পারবো?', a: 'হ্যাঁ, আপনি বিদেশ থেকেও অনলাইনে দান বা প্রচারণায় অংশ নিতে পারবেন।' },
      ],
    },
  ]);

  const [editingCategory, setEditingCategory] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showAddFAQ, setShowAddFAQ] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState({ q: '', a: '' });
  const [newFAQ, setNewFAQ] = useState({ 
    question: '', 
    answer: '', 
    category: '', 
    newCategory: '' 
  });

  // Toggle category expansion
  const toggleCategory = (categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.questions.some(q => 
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = filterCategory === '' || faq.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Add new category
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setFaqs(prev => [...prev, { category: newCategory.trim(), questions: [] }]);
      setNewCategory('');
      setShowAddCategory(false);
    }
  };

  // Add new question to category
  const handleAddQuestion = (categoryIndex) => {
    if (newQuestion.q.trim() && newQuestion.a.trim()) {
      const updatedFaqs = [...faqs];
      updatedFaqs[categoryIndex].questions.push({
        q: newQuestion.q.trim(),
        a: newQuestion.a.trim()
      });
      setFaqs(updatedFaqs);
      setNewQuestion({ q: '', a: '' });
      setShowAddQuestion(null);
    }
  };

  // Add new FAQ (question + answer + category)
  const handleAddFAQ = () => {
    if (newFAQ.question.trim() && newFAQ.answer.trim()) {
      let categoryName = newFAQ.category;
      
      // If "Add new category" is selected, use the new category name
      if (newFAQ.category === 'new' && newFAQ.newCategory.trim()) {
        categoryName = newFAQ.newCategory.trim();
        // Add new category if it doesn't exist
        const categoryExists = faqs.some(faq => faq.category === categoryName);
        if (!categoryExists) {
          setFaqs(prev => [...prev, { category: categoryName, questions: [] }]);
        }
      }
      
      // Find the category index and add the question
      const categoryIndex = faqs.findIndex(faq => faq.category === categoryName);
      if (categoryIndex !== -1) {
        const updatedFaqs = [...faqs];
        updatedFaqs[categoryIndex].questions.push({
          q: newFAQ.question.trim(),
          a: newFAQ.answer.trim()
        });
        setFaqs(updatedFaqs);
      }
      
      // Reset form
      setNewFAQ({ question: '', answer: '', category: '', newCategory: '' });
      setShowAddFAQ(false);
    }
  };

  // Edit category
  const handleEditCategory = (categoryIndex, newName) => {
    if (newName.trim()) {
      const updatedFaqs = [...faqs];
      updatedFaqs[categoryIndex].category = newName.trim();
      setFaqs(updatedFaqs);
      setEditingCategory(null);
    }
  };

  // Edit question
  const handleEditQuestion = (categoryIndex, questionIndex, updatedQuestion) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[categoryIndex].questions[questionIndex] = updatedQuestion;
    setFaqs(updatedFaqs);
    setEditingQuestion(null);
  };

  // Delete category
  const handleDeleteCategory = (categoryIndex) => {
    if (window.confirm('আপনি কি এই ক্যাটাগরি মুছে ফেলতে চান?')) {
      const updatedFaqs = faqs.filter((_, index) => index !== categoryIndex);
      setFaqs(updatedFaqs);
    }
  };

  // Delete question
  const handleDeleteQuestion = (categoryIndex, questionIndex) => {
    if (window.confirm('আপনি কি এই প্রশ্ন মুছে ফেলতে চান?')) {
      const updatedFaqs = [...faqs];
      updatedFaqs[categoryIndex].questions.splice(questionIndex, 1);
      setFaqs(updatedFaqs);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">FAQ Management</h2>
            <p className="text-gray-400">প্রশ্নোত্তর সেকশন ম্যানেজ করুন</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowAddFAQ(true)}
              className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiPlus className="w-4 h-4 mr-2" />
              New FAQ
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <FiSave className="w-4 h-4 mr-2" />
              সেভ করুন
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">খুঁজুন</label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="প্রশ্ন বা উত্তর খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">ক্যাটাগরি ফিল্টার</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">সকল ক্যাটাগরি</option>
              {faqs.map((faq, index) => (
                <option key={index} value={faq.category}>{faq.category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Add FAQ Modal */}
      {showAddFAQ && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div 
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 w-full max-w-lg mx-4"
            style={{
              backgroundColor: 'rgba(31, 41, 55, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">নতুন FAQ যোগ করুন</h3>
            <div className="space-y-4">
              {/* Question Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">প্রশ্ন</label>
                <input
                  type="text"
                  value={newFAQ.question}
                  onChange={(e) => setNewFAQ(prev => ({ ...prev, question: e.target.value }))}
                  placeholder="প্রশ্ন লিখুন..."
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              {/* Answer Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">উত্তর</label>
                <textarea
                  value={newFAQ.answer}
                  onChange={(e) => setNewFAQ(prev => ({ ...prev, answer: e.target.value }))}
                  placeholder="উত্তর লিখুন..."
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  rows="3"
                />
              </div>
              
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ক্যাটাগরি</label>
                <select
                  value={newFAQ.category}
                  onChange={(e) => setNewFAQ(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                  {faqs.map((faq, index) => (
                    <option key={index} value={faq.category}>{faq.category}</option>
                  ))}
                  <option value="new">+ নতুন ক্যাটাগরি যোগ করুন</option>
                </select>
              </div>
              
              {/* New Category Input (shown when "new" is selected) */}
              {newFAQ.category === 'new' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">নতুন ক্যাটাগরি নাম</label>
                  <input
                    type="text"
                    value={newFAQ.newCategory}
                    onChange={(e) => setNewFAQ(prev => ({ ...prev, newCategory: e.target.value }))}
                    placeholder="নতুন ক্যাটাগরি নাম লিখুন..."
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddFAQ}
                className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                যোগ করুন
              </button>
              <button
                onClick={() => {
                  setShowAddFAQ(false);
                  setNewFAQ({ question: '', answer: '', category: '', newCategory: '' });
                }}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                বাতিল
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, categoryIndex) => (
          <div key={categoryIndex} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
            {/* Category Header */}
            <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleCategory(categoryIndex)}
                    className="mr-3 text-gray-400 hover:text-white"
                  >
                    {expandedCategories[categoryIndex] ? 
                      <FiChevronDown className="w-5 h-5" /> : 
                      <FiChevronRight className="w-5 h-5" />
                    }
                  </button>
                  {editingCategory === categoryIndex ? (
                    <input
                      type="text"
                      defaultValue={faq.category}
                      onBlur={(e) => handleEditCategory(categoryIndex, e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleEditCategory(categoryIndex, e.target.value);
                        }
                      }}
                      className="bg-gray-600 text-white px-2 py-1 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      autoFocus
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-white">{faq.category}</h3>
                  )}
                  <span className="ml-3 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    {faq.questions.length} প্রশ্ন
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingCategory(categoryIndex)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <FiEdit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowAddQuestion(categoryIndex)}
                    className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 rounded-lg transition-colors"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(categoryIndex)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Questions List */}
            {expandedCategories[categoryIndex] && (
              <div className="p-6">
                {faq.questions.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <FiHelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>এই ক্যাটাগরিতে কোনো প্রশ্ন নেই</p>
                    <button
                      onClick={() => setShowAddQuestion(categoryIndex)}
                      className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      প্রথম প্রশ্ন যোগ করুন
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {faq.questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                        <div className="space-y-3">
                          {/* Question */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">প্রশ্ন</label>
                            {editingQuestion === `${categoryIndex}-${questionIndex}` ? (
                              <input
                                type="text"
                                defaultValue={question.q}
                                onBlur={(e) => {
                                  const updatedQuestion = { ...question, q: e.target.value };
                                  handleEditQuestion(categoryIndex, questionIndex, updatedQuestion);
                                }}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    const updatedQuestion = { ...question, q: e.target.value };
                                    handleEditQuestion(categoryIndex, questionIndex, updatedQuestion);
                                  }
                                }}
                                className="w-full px-3 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                autoFocus
                              />
                            ) : (
                              <p className="text-white">{question.q}</p>
                            )}
                          </div>
                          
                          {/* Answer */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">উত্তর</label>
                            {editingQuestion === `${categoryIndex}-${questionIndex}` ? (
                              <textarea
                                defaultValue={question.a}
                                onBlur={(e) => {
                                  const updatedQuestion = { ...question, a: e.target.value };
                                  handleEditQuestion(categoryIndex, questionIndex, updatedQuestion);
                                }}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter' && e.ctrlKey) {
                                    const updatedQuestion = { ...question, a: e.target.value };
                                    handleEditQuestion(categoryIndex, questionIndex, updatedQuestion);
                                  }
                                }}
                                className="w-full px-3 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                rows="3"
                                autoFocus
                              />
                            ) : (
                              <p className="text-gray-300">{question.a}</p>
                            )}
                          </div>
                          
                          {/* Actions */}
                          <div className="flex justify-end gap-2">
                            {editingQuestion === `${categoryIndex}-${questionIndex}` ? (
                              <button
                                onClick={() => setEditingQuestion(null)}
                                className="px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors text-sm"
                              >
                                <FiCheck className="w-4 h-4" />
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => setEditingQuestion(`${categoryIndex}-${questionIndex}`)}
                                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                                >
                                  <FiEdit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteQuestion(categoryIndex, questionIndex)}
                                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                                >
                                  <FiTrash2 className="w-4 h-4" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Question Modal */}
      {showAddQuestion !== null && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div 
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 w-full max-w-md mx-4"
            style={{
              backgroundColor: 'rgba(31, 41, 55, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {faqs[showAddQuestion]?.category} - নতুন প্রশ্ন যোগ করুন
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">প্রশ্ন</label>
                <input
                  type="text"
                  value={newQuestion.q}
                  onChange={(e) => setNewQuestion(prev => ({ ...prev, q: e.target.value }))}
                  placeholder="প্রশ্ন লিখুন..."
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">উত্তর</label>
                <textarea
                  value={newQuestion.a}
                  onChange={(e) => setNewQuestion(prev => ({ ...prev, a: e.target.value }))}
                  placeholder="উত্তর লিখুন..."
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  rows="3"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => handleAddQuestion(showAddQuestion)}
                className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                যোগ করুন
              </button>
              <button
                onClick={() => {
                  setShowAddQuestion(null);
                  setNewQuestion({ q: '', a: '' });
                }}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                বাতিল
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQManagement;
