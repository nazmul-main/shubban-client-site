'use client';

import { useState } from 'react';
import axios from 'axios';

const UserManagement = () => {

  

  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoUploadProgress, setPhotoUploadProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [originalPhoto, setOriginalPhoto] = useState(null);

  // Mock users data for testing
  const mockUsers = [
    {
      id: 1,
      name: 'আহমেদ হাসান',
      email: 'ahmed@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-15',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'ফাতেমা বেগম',
      email: 'fatema@example.com',
      role: 'moderator',
      status: 'active',
      joinDate: '2024-02-20',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'রহমান আলী',
      email: 'rahman@example.com',
      role: 'user',
      status: 'inactive',
      joinDate: '2024-03-10',
      photo: null
    }
  ];

  const [formData, setFormData] = useState({
    // Basic Information
    formNumber: '',
    memberNumber: '',
    userRole: 'general',
    email: '',
    password: '',
    applicationDate: '',
    
    // Personal Information
    fullName: '',
    motherName: '',
    birthDate: '',
    age: '',
    mobileNumber: '',
    nationalId: '',
    fatherName: '',
    
    // Current Address
    currentVillage: '',
    currentPostOffice: '',
    currentThana: '',
    currentDistrict: '',
    
    // Permanent Address
    permanentVillage: '',
    permanentPostOffice: '',
    permanentThana: '',
    permanentDistrict: '',
    
    bloodGroup: ''
  });

  // Filter users based on search term and role
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleBadge = (role) => {
    const badges = {
      admin: 'bg-red-100 text-red-800',
      moderator: 'bg-blue-100 text-blue-800',
      user: 'bg-green-100 text-green-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${badges[role] || badges.user}`;
  };

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    const missingFields = [];
    if (!formData.fullName) missingFields.push('পূর্ণ নাম');
    if (!formData.email) missingFields.push('ইমেইল');
    if (!formData.password) missingFields.push('পাসওয়ার্ড');
    
    if (missingFields.length > 0) {
      showToast(`দয়া করে প্রয়োজনীয় ক্ষেত্রগুলি পূরণ করুন: ${missingFields.join(', ')}`, 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('দয়া করে একটি সঠিক ইমেইল ঠিকানা দিন।', 'error');
      return;
    }
    
    // Password validation
    if (formData.password.length < 6) {
      showToast('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।', 'error');
      return;
    }
    
    setIsSubmitting(true);

    // Start progress simulation if photo is selected
    let progressInterval;
    if (selectedPhoto) {
      progressInterval = simulateUploadProgress();
    }

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Add photo if selected
      if (selectedPhoto) {
        formDataToSend.append('photo', selectedPhoto);
        console.log('📸 Added photo to FormData:', selectedPhoto.name, selectedPhoto.size, selectedPhoto.type);
      }
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
          console.log(`📝 Added form field: ${key} = ${formData[key]}`);
        }
      });

      // Prepare user data for database
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        userRole: formData.userRole,
        mobileNumber: formData.mobileNumber,
        formNumber: formData.formNumber,
        memberNumber: formData.memberNumber,
        applicationDate: formData.applicationDate,
        motherName: formData.motherName,
        fatherName: formData.fatherName,
        birthDate: formData.birthDate,
        age: formData.age ? parseInt(formData.age) : undefined,
        nationalId: formData.nationalId,
        currentVillage: formData.currentVillage,
        currentPostOffice: formData.currentPostOffice,
        currentThana: formData.currentThana,
        currentDistrict: formData.currentDistrict,
        permanentVillage: formData.permanentVillage,
        permanentPostOffice: formData.permanentPostOffice,
        permanentThana: formData.permanentThana,
        permanentDistrict: formData.permanentDistrict,
        bloodGroup: formData.bloodGroup
      };

      // Add user data to FormData
      Object.keys(userData).forEach(key => {
        if (userData[key] !== '' && userData[key] !== null && userData[key] !== undefined) {
          formDataToSend.append(key, userData[key]);
          console.log(`🔧 Added user data field: ${key} = ${userData[key]}`);
        }
      });

      // Test server connection first
      try {
        console.log('🔍 Testing server connection...');
        const testResponse = await fetch('http://localhost:5000/api/health');
        console.log('✅ Server connection test:', testResponse.status, testResponse.ok);
      } catch (testError) {
        console.error('❌ Server connection test failed:', testError);
      }
      
      // Debug: Log the request
      console.log('🚀 Making request to:', 'http://localhost:5000/api/users');
      console.log('📤 Request data:', userData);
      console.log('📸 Photo file:', selectedPhoto);
      console.log('🔍 Required fields check:', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password ? `${formData.password.substring(0, 3)}...` : 'empty'
      });
      console.log('🔍 Form data state:', formData);
      console.log('🔍 User data being sent:', JSON.stringify(userData, null, 2));
      
      // Create user in database - call server directly with FormData
      console.log('🚀 Sending request to server...');
      console.log('📋 FormData contents:');
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`  ${key}: ${value}`);
      }
      
      const response = await axios.post('http://localhost:5000/api/users', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('📥 Server response received:', response.data);

      if (response.data.success) {
        // Complete progress bar
        if (progressInterval) {
          clearInterval(progressInterval);
          setPhotoUploadProgress(100);
        }
        
        const userName = response.data.data.name || formData.fullName;
        showToast(`${userName} সফলভাবে যোগ করা হয়েছে!`, 'success');
        setShowCreateForm(false);
        resetForm();
        // You might want to refresh the users list here
      } else {
        showToast('ব্যবহারকারী যোগ করতে সমস্যা হয়েছে।', 'error');
      }
    } catch (error) {
      // Clear progress interval on error
      if (progressInterval) {
        clearInterval(progressInterval);
        setPhotoUploadProgress(0);
      }
      
      console.error('❌ Error creating user:', error);
      console.error('❌ Error details:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText
      });
      
      let errorMessage = 'ব্যবহারকারী যোগ করতে সমস্যা হয়েছে।';
      
      // Debug: Log the complete error response
      console.log('🔍 Complete error response:', error.response?.data);
      console.log('🔍 Error response structure:', {
        message: error.response?.data?.message,
        errors: error.response?.data?.errors,
        success: error.response?.data?.success,
        status: error.response?.status
      });
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
        
        // Show detailed validation errors if available
        if (error.response.data.errors && Object.keys(error.response.data.errors).length > 0) {
          console.error('❌ Validation errors:', error.response.data.errors);
          
          // Handle different error formats
          let validationErrorText = '';
          if (Array.isArray(error.response.data.errors)) {
            validationErrorText = error.response.data.errors
              .map(err => err.message || err)
              .join(', ');
          } else if (typeof error.response.data.errors === 'object') {
            validationErrorText = Object.entries(error.response.data.errors)
              .map(([field, message]) => `${field}: ${message}`)
              .join(', ');
          }
          
          if (validationErrorText) {
            errorMessage += ` (${validationErrorText})`;
          }
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // Show more specific error messages
      if (error.response?.status === 400) {
        if (error.response.data?.errors) {
          const errorFields = Object.keys(error.response.data.errors);
          if (errorFields.includes('email')) {
            errorMessage = 'এই ইমেইল ঠিকানা ইতিমধ্যে ব্যবহৃত হয়েছে।';
          } else if (errorFields.includes('password')) {
            errorMessage = 'পাসওয়ার্ড শক্তিশালী নয়।';
          } else {
            errorMessage = `ভ্যালিডেশন ত্রুটি: ${Object.values(error.response.data.errors).join(', ')}`;
          }
        } else {
          errorMessage = 'অনুরোধের ডেটা সঠিক নয়।';
        }
      } else if (error.response?.status === 500) {
        errorMessage = 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।';
      }
      
      showToast(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
      // Clear progress interval
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      setPhotoUploadProgress(0);
    }
  };

  const resetForm = () => {
    setFormData({
      formNumber: '',
      memberNumber: '',
      userRole: 'general',
      email: '',
      password: '',
          applicationDate: '',
    fullName: '',
      motherName: '',
      birthDate: '',
      age: '',
      mobileNumber: '',
      nationalId: '',
      fatherName: '',
      currentVillage: '',
      currentPostOffice: '',
      currentThana: '',
      currentDistrict: '',
      permanentVillage: '',
      permanentPostOffice: '',
      permanentThana: '',
      permanentDistrict: '',
      bloodGroup: ''
    });
    setSelectedPhoto(null);
    setPhotoPreview(null);
    setPhotoUploadProgress(0);
  };

  const validatePhoto = (file) => {
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { isValid: false, error: 'দয়া করে শুধুমাত্র JPEG, PNG, বা WebP ফাইল নির্বাচন করুন।' };
    }
    
    // Validate file size (3MB max)
    if (file.size > 3 * 1024 * 1024) {
      return { isValid: false, error: 'ফাইল আকার ৩ মেগাবাইটের কম হতে হবে।' };
    }
    
    // Validate minimum dimensions (optional)
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (img.width < 100 || img.height < 100) {
          resolve({ isValid: false, error: 'ছবির আকার কমপক্ষে ১০০x১০০ পিক্সেল হতে হবে।' });
        } else {
          resolve({ isValid: true, error: null });
        }
      };
      img.onerror = () => {
        resolve({ isValid: false, error: 'ছবি লোড করতে সমস্যা হয়েছে।' });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const compressImage = (file, maxWidth = 800, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions maintaining aspect ratio
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const validation = await validatePhoto(file);
        if (!validation.isValid) {
          showToast(validation.error, 'error');
          return;
        }
        
        // Compress image if it's large
        let processedFile = file;
        if (file.size > 1024 * 1024) { // If larger than 1MB
          showToast('ছবি সংকুচিত হচ্ছে...', 'success');
          const compressedBlob = await compressImage(file);
          processedFile = new File([compressedBlob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now()
          });
          showToast('ছবি সফলভাবে সংকুচিত হয়েছে!', 'success');
        }
        
        setSelectedPhoto(processedFile);
        
        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target.result);
        };
        reader.readAsDataURL(processedFile);
        
        showToast('ছবি সফলভাবে নির্বাচিত হয়েছে!', 'success');
      } catch (error) {
        showToast('ছবি যাচাইকরণে সমস্যা হয়েছে।', 'error');
      }
    }
  };

  const removePhoto = () => {
    setSelectedPhoto(null);
    setPhotoPreview(null);
    setPhotoUploadProgress(0);
  };

  const simulateUploadProgress = () => {
    setPhotoUploadProgress(0);
    const interval = setInterval(() => {
      setPhotoUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);
    return interval;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        handlePhotoChange({ target: { files: [file] } });
      } else {
        showToast('দয়া করে শুধুমাত্র ছবির ফাইল নির্বাচন করুন।', 'error');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };


  return (
    <div className="w-full space-y-16 py-12">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center">
            <span className="mr-2">
              {toast.type === 'success' ? '✅' : '❌'}
            </span>
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage all users and their permissions</p>
        </div>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button
            onClick={async () => {
              try {
                console.log('🧪 Testing server connection...');
                const response = await axios.get('http://localhost:5000/api/users/test-connection');
                console.log('✅ Server connection test:', response.data);
                showToast('Server connection successful!', 'success');
              } catch (error) {
                console.error('❌ Server connection test failed:', error);
                showToast('Server connection failed!', 'error');
              }
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium"
          >
            Test Connection
          </button>
          <button
            onClick={async () => {
              try {
                console.log('🧪 Testing Cloudinary connection...');
                const response = await axios.get('http://localhost:5000/api/users/test-cloudinary-public');
                console.log('✅ Cloudinary connection test:', response.data);
                showToast('Cloudinary connection successful!', 'success');
              } catch (error) {
                console.error('❌ Cloudinary connection test failed:', error);
                showToast('Cloudinary connection failed!', 'error');
              }
            }}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 font-medium"
          >
            Test Cloudinary
          </button>
          <button
            onClick={async () => {
              try {
                console.log('🧪 Testing basic user creation...');
                const testResponse = await axios.post('http://localhost:5000/api/users/test-public', {
                  name: 'Test User',
                  email: `test${Date.now()}@test.com`,
                  password: '123456'
                });
                console.log('✅ Test user creation response:', testResponse.data);
                showToast('Test user creation successful!', 'success');
              } catch (error) {
                console.error('❌ Test user creation error:', error.response?.data);
                showToast('Test user creation failed!', 'error');
              }
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium"
          >
            Test User Creation
          </button>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-200 font-medium flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
            Add New User
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Users</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Users ({filteredUsers.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {user.photo ? (
                        <img 
                          src={user.photo} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-300">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getRoleBadge(user.role)}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-emerald-600 hover:text-emerald-900">Edit</button>
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comprehensive Create User Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white pb-6 border-b">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 pt-4">নতুন ব্যবহারকারী যোগ করুন</h3>
                    <p className="text-sm text-gray-600 mt-1">ছবি সহ নতুন ব্যবহারকারী যোগ করুন</p>
                  </div>
                  {photoPreview && (
                    <div className="flex items-center space-x-3 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                      <img 
                        src={photoPreview} 
                        alt="Selected Photo" 
                        className="w-12 h-12 rounded-lg object-cover border-2 border-emerald-300" 
                      />
                      <div className="text-sm text-emerald-700">
                        <p className="font-medium">ছবি নির্বাচিত</p>
                        <p className="text-xs">{selectedPhoto?.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
              {/* Basic Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-6 border-b pb-3">মৌলিক তথ্য</h4>
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">প্রয়োজনীয় ক্ষেত্র:</span> পূর্ণ নাম, ইমেইল, পাসওয়ার্ড
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ফরম নং</label>
                    <input
                      type="text"
                      name="formNumber"
                      value={formData.formNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ফরম নম্বর দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">সদস্য নম্বর</label>
                    <input
                      type="text"
                      name="memberNumber"
                      value={formData.memberNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="সদস্য নম্বর দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ইউজার রোল</label>
                    <select 
                      name="userRole"
                      value={formData.userRole}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="general">জেনারেল ইউজার</option>
                      <option value="moderator">মডারেটর</option>
                      <option value="admin">অ্যাডমিন</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ইমেইল ঠিকানা দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="পাসওয়ার্ড দিন"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      কমপক্ষে ৬ অক্ষর
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আবেদনের তারিখ</label>
                    <input
                      type="date"
                      name="applicationDate"
                      value={formData.applicationDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  


                </div>
              </div>

              {/* Personal Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-6 border-b pb-3">ব্যক্তিগত তথ্য</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আবেদনকারীর পূর্ণ নাম</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="পূর্ণ নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আবেদনকারীর মাতার নাম</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="মাতার নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আবেদনকারীর জন্ম তারিখ</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আবেদনকারীর বয়স</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="বয়স দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="মোবাইল নম্বর দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">জাতীয় পরিচয়পত্র নম্বর</label>
                    <input
                      type="text"
                      name="nationalId"
                      value={formData.nationalId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="জাতীয় পরিচয়পত্র নম্বর দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">পিতার নাম</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="পিতার নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">রক্তের গ্রুপ</label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">ব্যক্তির ছবি</label>
                    <div className="space-y-3">
                      <div 
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                          isDragOver 
                            ? 'border-emerald-400 bg-emerald-50' 
                            : 'border-gray-300 hover:border-emerald-300 hover:bg-gray-50'
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <div className="text-sm text-gray-600">
                            <p className="font-medium">ছবি আপলোড করুন</p>
                            <p>ফাইল টেনে আনুন অথবা ক্লিক করে নির্বাচন করুন</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                          />
                        </div>
                      </div>
                      
                      {selectedPhoto && (
                        <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={photoPreview} 
                              alt="Photo Preview" 
                              className="w-12 h-12 rounded-lg object-cover border-2 border-emerald-300" 
                            />
                            <div className="text-sm text-emerald-700">
                              <p className="font-medium">ছবি নির্বাচিত হয়েছে</p>
                              <p className="text-xs">{selectedPhoto.name}</p>
                              <p className="text-xs">আকার: {(selectedPhoto.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="px-3 py-2 text-sm text-red-600 hover:text-red-900 border border-red-300 rounded-lg hover:bg-red-50"
                          >
                            ছবি সরান
                          </button>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500">
                        সমর্থিত ফরম্যাট: JPEG, PNG, WebP | সর্বোচ্চ আকার: ৩ মেগাবাইট
                      </p>
                      <p className="text-xs text-emerald-600 font-medium">
                        💡 ছবি আপলোড করা বাধ্যতামূলক নয়, তবে সুপারিশকৃত
                      </p>
                      
                      {selectedPhoto && (
                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => {
                              setOriginalPhoto(selectedPhoto);
                              setShowCropper(true);
                            }}
                            className="px-3 py-2 text-sm text-blue-600 hover:text-blue-900 border border-blue-300 rounded-lg hover:bg-blue-50"
                          >
                            ✂️ ছবি ক্রপ করুন
                          </button>
                        </div>
                      )}
                      
                      {isSubmitting && selectedPhoto && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>ছবি আপলোড হচ্ছে...</span>
                            <span>{photoUploadProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-emerald-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${photoUploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Address Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-6 border-b pb-3">বর্তমান ঠিকানা</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">গ্রাম</label>
                    <input
                      type="text"
                      name="currentVillage"
                      value={formData.currentVillage}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="গ্রামের নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ডাকঘর</label>
                    <input
                      type="text"
                      name="currentPostOffice"
                      value={formData.currentPostOffice}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ডাকঘরের নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">থানা</label>
                    <input
                      type="text"
                      name="currentThana"
                      value={formData.currentThana}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="থানার নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">জেলা</label>
                    <input
                      type="text"
                      name="currentDistrict"
                      value={formData.currentDistrict}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="জেলার নাম দিন"
                    />
                  </div>
                </div>
              </div>

              {/* Permanent Address Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-6 border-b pb-3">স্থায়ী ঠিকানা</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">গ্রাম</label>
                    <input
                      type="text"
                      name="permanentVillage"
                      value={formData.permanentVillage}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="গ্রামের নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ডাকঘর</label>
                    <input
                      type="text"
                      name="permanentPostOffice"
                      value={formData.permanentPostOffice}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ডাকঘরের নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">থানা</label>
                    <input
                      type="text"
                      name="permanentThana"
                      value={formData.permanentThana}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="থানার নাম দিন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">জেলা</label>
                    <input
                      type="text"
                      name="permanentDistrict"
                      value={formData.permanentDistrict}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="জেলার নাম দিন"
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-3 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  বাতিল করুন
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-teal-500 hover:to-emerald-500 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      প্রক্রিয়াকরণ হচ্ছে...
                    </>
                  ) : (
                    'ব্যবহারকারী যোগ করুন'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Photo Cropping Modal */}
      {showCropper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">ছবি ক্রপ করুন</h3>
              <button
                onClick={() => setShowCropper(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 mb-4">ছবি ক্রপিং ফিচার শীঘ্রই আসছে!</p>
              <p className="text-sm text-gray-500">এই মুহূর্তে আপনি ছবি আপলোড করতে পারেন</p>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCropper(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                বাতিল করুন
              </button>
              <button
                onClick={() => {
                  setShowCropper(false);
                  showToast('ছবি ক্রপিং শীঘ্রই উপলব্ধ হবে!', 'success');
                }}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
