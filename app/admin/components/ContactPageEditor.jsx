'use client';

import { useState } from 'react';
import { 
  FiEdit3, 
  FiSave, 
  FiEye, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiGlobe,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMessageCircle,
  FiSend,
  FiRefreshCw,
  FiCheck,
  FiX
} from 'react-icons/fi';

const ContactPageEditor = () => {
  const [contactInfo, setContactInfo] = useState({
    // Basic Contact Information
    organizationName: 'শুব্বান দাওয়াতি কাফেলা',
    tagline: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি',
    description: 'আমরা ইসলামের সঠিক দাওয়াতের মাধ্যমে সমাজ গঠনে কাজ করি। আমাদের সাথে যোগাযোগ করুন।',
    
    // Contact Details
    email: 'info@shubbandawatikafela.org',
    phone: '+880 1234 567890',
    alternatePhone: '+880 9876 543210',
    address: 'সারিয়াকান্দি, বগুড়া, বাংলাদেশ',
    
    
    // Social Media Links
    socialMedia: {
      facebook: 'https://facebook.com/shubbandawatikafela',
      youtube: 'https://youtube.com/shubbandawatikafela',
      instagram: 'https://instagram.com/shubbandawatikafela',
      twitter: 'https://twitter.com/shubbandawatikafela',
      linkedin: 'https://linkedin.com/company/shubbandawatikafela'
    },
    
    // Contact Form Settings
    contactForm: {
      isEnabled: true,
      formTitle: 'যোগাযোগ ফর্ম',
      formTitleEn: 'Contact Form',
      fields: [
        {
          id: 'name',
          label: 'নাম',
          labelEn: 'Name',
          placeholder: 'আপনার নাম লিখুন',
          placeholderEn: 'Write your name',
          type: 'text',
          required: true
        },
        {
          id: 'phone',
          label: 'ফোন',
          labelEn: 'Phone',
          placeholder: 'আপনার ফোন নম্বর',
          placeholderEn: 'Your phone number',
          type: 'tel',
          required: true
        },
        {
          id: 'email',
          label: 'ইমেইল',
          labelEn: 'Email',
          placeholder: 'আপনার ইমেইল',
          placeholderEn: 'Your email',
          type: 'email',
          required: true
        },
        {
          id: 'subject',
          label: 'বিষয়',
          labelEn: 'Subject',
          placeholder: 'বিষয় লিখুন',
          placeholderEn: 'Write subject',
          type: 'text',
          required: true
        },
        {
          id: 'message',
          label: 'বার্তা',
          labelEn: 'Message',
          placeholder: 'আপনার বার্তা লিখুন',
          placeholderEn: 'Write your message',
          type: 'textarea',
          required: true
        }
      ],
      submitButton: {
        text: 'প্রেরণ করুন',
        textEn: 'Send',
        type: 'submit'
      },
      successMessage: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
      errorMessage: 'দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
    },
    
    // Map Settings
    map: {
      isEnabled: true,
      latitude: 23.8103,
      longitude: 90.4125,
      zoom: 15,
      markerTitle: 'শুব্বান দাওয়াতি কাফেলা'
    },
    
    // Additional Information
    additionalInfo: {
      emergencyContact: '+880 1111 222333',
      supportEmail: 'support@shubbandawatikafela.org',
      website: 'https://www.shubbandawatikafela.org'
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('basic');
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    // In a real application, you would save this to a database
    console.log('Contact info saved:', contactInfo);
    setIsEditing(false);
    setShowPreview(true);
    alert('যোগাযোগের তথ্য সফলভাবে সেভ করা হয়েছে!');
  };

  const handleReset = () => {
    if (confirm('আপনি কি নিশ্চিত যে আপনি সব পরিবর্তন বাতিল করতে চান?')) {
      // Reset to original values
      setIsEditing(false);
      setShowPreview(false);
    }
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">সংগঠনের নাম</label>
        <input
          type="text"
          value={contactInfo.organizationName}
          onChange={(e) => setContactInfo({...contactInfo, organizationName: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ট্যাগলাইন</label>
        <input
          type="text"
          value={contactInfo.tagline}
          onChange={(e) => setContactInfo({...contactInfo, tagline: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">বিবরণ</label>
        <textarea
          value={contactInfo.description}
          onChange={(e) => setContactInfo({...contactInfo, description: e.target.value})}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল</label>
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ফোন নম্বর</label>
          <input
            type="tel"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">বিকল্প ফোন নম্বর</label>
          <input
            type="tel"
            value={contactInfo.alternatePhone}
            onChange={(e) => setContactInfo({...contactInfo, alternatePhone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">শহর</label>
          <input
            type="text"
            value={contactInfo.address}
            onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">সম্পূর্ণ ঠিকানা</label>
        <textarea
          value={contactInfo.fullAddress}
          onChange={(e) => setContactInfo({...contactInfo, fullAddress: e.target.value})}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </div>
  );


  const renderSocialMedia = () => (
    <div className="space-y-4">
      {Object.entries(contactInfo.socialMedia).map(([platform, url]) => (
        <div key={platform} className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center">
            {platform === 'facebook' && <FiFacebook className="w-5 h-5 text-blue-600" />}
            {platform === 'youtube' && <FiYoutube className="w-5 h-5 text-red-600" />}
            {platform === 'instagram' && <FiInstagram className="w-5 h-5 text-pink-600" />}
            {platform === 'twitter' && <FiTwitter className="w-5 h-5 text-blue-400" />}
            {platform === 'linkedin' && <FiLinkedin className="w-5 h-5 text-blue-700" />}
          </div>
          <label className="text-sm font-medium text-gray-700 capitalize w-20">
            {platform}
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              socialMedia: {...contactInfo.socialMedia, [platform]: e.target.value}
            })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder={`${platform} URL`}
          />
        </div>
      ))}
    </div>
  );

  const renderContactForm = () => (
    <div className="space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={contactInfo.contactForm.isEnabled}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            contactForm: {...contactInfo.contactForm, isEnabled: e.target.checked}
          })}
          className="mr-2"
        />
        <label className="text-sm font-medium text-gray-700">যোগাযোগ ফর্ম সক্রিয় করুন</label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ফর্ম শিরোনাম (বাংলা)</label>
          <input
            type="text"
            value={contactInfo.contactForm.formTitle}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              contactForm: {...contactInfo.contactForm, formTitle: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ফর্ম শিরোনাম (ইংরেজি)</label>
          <input
            type="text"
            value={contactInfo.contactForm.formTitleEn}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              contactForm: {...contactInfo.contactForm, formTitleEn: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">ফর্ম ফিল্ডসমূহ</h4>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">মোট ফিল্ড: {contactInfo.contactForm.fields.length}</span>
            <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-4">
          {contactInfo.contactForm.fields.map((field, index) => (
            <div key={field.id} className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{field.label}</h5>
                    <p className="text-sm text-gray-500">{field.labelEn}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    field.required 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {field.required ? 'প্রয়োজনীয়' : 'ঐচ্ছিক'}
                  </span>
                  <label className="flex items-center text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={(e) => {
                        const newFields = [...contactInfo.contactForm.fields];
                        newFields[index].required = e.target.checked;
                        setContactInfo({
                          ...contactInfo,
                          contactForm: {...contactInfo.contactForm, fields: newFields}
                        });
                      }}
                      className="mr-2 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    প্রয়োজনীয়
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    লেবেল (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => {
                      const newFields = [...contactInfo.contactForm.fields];
                      newFields[index].label = e.target.value;
                      setContactInfo({
                        ...contactInfo,
                        contactForm: {...contactInfo.contactForm, fields: newFields}
                      });
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="বাংলা লেবেল লিখুন"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    লেবেল (ইংরেজি)
                  </label>
                  <input
                    type="text"
                    value={field.labelEn}
                    onChange={(e) => {
                      const newFields = [...contactInfo.contactForm.fields];
                      newFields[index].labelEn = e.target.value;
                      setContactInfo({
                        ...contactInfo,
                        contactForm: {...contactInfo.contactForm, fields: newFields}
                      });
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="English label"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    প্লেসহোল্ডার (বাংলা)
                  </label>
                  <input
                    type="text"
                    value={field.placeholder}
                    onChange={(e) => {
                      const newFields = [...contactInfo.contactForm.fields];
                      newFields[index].placeholder = e.target.value;
                      setContactInfo({
                        ...contactInfo,
                        contactForm: {...contactInfo.contactForm, fields: newFields}
                      });
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="প্লেসহোল্ডার লিখুন"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    ফিল্ড টাইপ
                  </label>
                  <select
                    value={field.type}
                    onChange={(e) => {
                      const newFields = [...contactInfo.contactForm.fields];
                      newFields[index].type = e.target.value;
                      setContactInfo({
                        ...contactInfo,
                        contactForm: {...contactInfo.contactForm, fields: newFields}
                      });
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="text">টেক্সট</option>
                    <option value="email">ইমেইল</option>
                    <option value="tel">ফোন</option>
                    <option value="textarea">টেক্সট এরিয়া</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
            <FiSend className="w-4 h-4 text-teal-600" />
          </span>
          সাবমিট বাটন সেটিংস
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              সাবমিট বাটন টেক্সট (বাংলা)
            </label>
            <input
              type="text"
              value={contactInfo.contactForm.submitButton.text}
              onChange={(e) => setContactInfo({
                ...contactInfo,
                contactForm: {
                  ...contactInfo.contactForm,
                  submitButton: {...contactInfo.contactForm.submitButton, text: e.target.value}
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="বাংলা বাটন টেক্সট"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              সাবমিট বাটন টেক্সট (ইংরেজি)
            </label>
            <input
              type="text"
              value={contactInfo.contactForm.submitButton.textEn}
              onChange={(e) => setContactInfo({
                ...contactInfo,
                contactForm: {
                  ...contactInfo.contactForm,
                  submitButton: {...contactInfo.contactForm.submitButton, textEn: e.target.value}
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="English button text"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <label className="block text-sm font-medium text-green-800 mb-2 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            সফল বার্তা
          </label>
        <textarea
          value={contactInfo.contactForm.successMessage}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            contactForm: {...contactInfo.contactForm, successMessage: e.target.value}
          })}
            rows={3}
            className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="সফল বার্তা লিখুন..."
        />
      </div>
      
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <label className="block text-sm font-medium text-red-800 mb-2 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            ত্রুটি বার্তা
          </label>
        <textarea
          value={contactInfo.contactForm.errorMessage}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            contactForm: {...contactInfo.contactForm, errorMessage: e.target.value}
          })}
            rows={3}
            className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="ত্রুটি বার্তা লিখুন..."
        />
        </div>
      </div>
    </div>
  );

  const renderMapSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={contactInfo.map.isEnabled}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            map: {...contactInfo.map, isEnabled: e.target.checked}
          })}
          className="mr-2"
        />
        <label className="text-sm font-medium text-gray-700">মানচিত্র সক্রিয় করুন</label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">অক্ষাংশ (Latitude)</label>
          <input
            type="number"
            step="0.000001"
            value={contactInfo.map.latitude}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              map: {...contactInfo.map, latitude: parseFloat(e.target.value)}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">দ্রাঘিমাংশ (Longitude)</label>
          <input
            type="number"
            step="0.000001"
            value={contactInfo.map.longitude}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              map: {...contactInfo.map, longitude: parseFloat(e.target.value)}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">জুম লেভেল</label>
          <input
            type="number"
            min="1"
            max="20"
            value={contactInfo.map.zoom}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              map: {...contactInfo.map, zoom: parseInt(e.target.value)}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">মার্কার শিরোনাম</label>
          <input
            type="text"
            value={contactInfo.map.markerTitle}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              map: {...contactInfo.map, markerTitle: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: 'basic', label: 'মূল তথ্য', icon: FiEdit3 },
    { id: 'contact', label: 'যোগাযোগের বিবরণ', icon: FiPhone },
    { id: 'social', label: 'সোশ্যাল মিডিয়া', icon: FiGlobe },
    { id: 'form', label: 'যোগাযোগ ফর্ম', icon: FiMessageCircle },
    { id: 'map', label: 'মানচিত্র', icon: FiMapPin }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'basic':
        return renderBasicInfo();
      case 'contact':
        return renderContactDetails();
      case 'social':
        return renderSocialMedia();
      case 'form':
        return renderContactForm();
      case 'map':
        return renderMapSettings();
      default:
        return renderBasicInfo();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">যোগাযোগ পেজ এডিটর</h2>
          <p className="text-gray-600">যোগাযোগ পেজের সমস্ত তথ্য সম্পাদনা করুন</p>
        </div>
        
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleReset}
                className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FiX className="w-4 h-4 mr-2" />
                বাতিল
              </button>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <FiSave className="w-4 h-4 mr-2" />
                সেভ করুন
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FiEye className="w-4 h-4 mr-2" />
                {showPreview ? 'প্রিভিউ লুকান' : 'প্রিভিউ দেখুন'}
              </button>
            <button
                onClick={() => {
                  setIsEditing(true);
                  setShowPreview(false);
                }}
              className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiEdit3 className="w-4 h-4 mr-2" />
              সম্পাদনা করুন
            </button>
            </>
          )}
        </div>
      </div>

      {/* Preview */}
      {showPreview && !isEditing && (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">প্রিভিউ</h3>
            <button
              onClick={() => setShowPreview(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{contactInfo.organizationName}</h1>
            <p className="text-lg text-emerald-600">{contactInfo.tagline}</p>
            <p className="text-gray-600 mt-2">{contactInfo.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">যোগাযোগের তথ্য</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FiMail className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm">{contactInfo.fullAddress}</span>
                </div>
              </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">যোগাযোগ ফর্ম</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{contactInfo.contactForm.formTitle}</h4>
                  <div className="space-y-3">
                    {contactInfo.contactForm.fields.map((field) => (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            placeholder={field.placeholder}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        )}
                      </div>
                    ))}
                    <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
                      {contactInfo.contactForm.submitButton.text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="p-6">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default ContactPageEditor;
