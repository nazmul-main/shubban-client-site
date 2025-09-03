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
    address: 'ঢাকা, বাংলাদেশ',
    fullAddress: 'বাড়ি নং ১২৩, রোড নং ৪৫, ঢাকা ১০০০, বাংলাদেশ',
    
    // Office Hours
    officeHours: {
      saturday: '৯:০০ AM - ৫:۰۰ PM',
      sunday: '৯:০০ AM - ৫:۰۰ PM',
      monday: '৯:০০ AM - ৫:۰۰ PM',
      tuesday: '৯:০০ AM - ৫:۰۰ PM',
      wednesday: '৯:০০ AM - ৫:۰۰ PM',
      thursday: '৯:০০ AM - ৫:۰۰ PM',
      friday: 'বন্ধ'
    },
    
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
      fields: {
        name: { required: true, label: 'নাম' },
        email: { required: true, label: 'ইমেইল' },
        phone: { required: false, label: 'ফোন নম্বর' },
        subject: { required: true, label: 'বিষয়' },
        message: { required: true, label: 'বার্তা' }
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

  const handleSave = () => {
    // In a real application, you would save this to a database
    console.log('Contact info saved:', contactInfo);
    setIsEditing(false);
    alert('যোগাযোগের তথ্য সফলভাবে সেভ করা হয়েছে!');
  };

  const handleReset = () => {
    if (confirm('আপনি কি নিশ্চিত যে আপনি সব পরিবর্তন বাতিল করতে চান?')) {
      // Reset to original values
      setIsEditing(false);
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

  const renderOfficeHours = () => (
    <div className="space-y-4">
      {Object.entries(contactInfo.officeHours).map(([day, hours]) => (
        <div key={day} className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 capitalize">
            {day === 'saturday' ? 'শনিবার' :
             day === 'sunday' ? 'রবিবার' :
             day === 'monday' ? 'সোমবার' :
             day === 'tuesday' ? 'মঙ্গলবার' :
             day === 'wednesday' ? 'বুধবার' :
             day === 'thursday' ? 'বৃহস্পতিবার' :
             day === 'friday' ? 'শুক্রবার' : day}
          </label>
          <input
            type="text"
            value={hours}
            onChange={(e) => setContactInfo({
              ...contactInfo,
              officeHours: {...contactInfo.officeHours, [day]: e.target.value}
            })}
            className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      ))}
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
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">সফল বার্তা</label>
        <textarea
          value={contactInfo.contactForm.successMessage}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            contactForm: {...contactInfo.contactForm, successMessage: e.target.value}
          })}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ত্রুটি বার্তা</label>
        <textarea
          value={contactInfo.contactForm.errorMessage}
          onChange={(e) => setContactInfo({
            ...contactInfo,
            contactForm: {...contactInfo.contactForm, errorMessage: e.target.value}
          })}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
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
    { id: 'hours', label: 'অফিস সময়', icon: FiClock },
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
      case 'hours':
        return renderOfficeHours();
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
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <FiEdit3 className="w-4 h-4 mr-2" />
              সম্পাদনা করুন
            </button>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">প্রিভিউ</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">অফিস সময়</h3>
              <div className="space-y-1 text-sm">
                {Object.entries(contactInfo.officeHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize">
                      {day === 'saturday' ? 'শনিবার' :
                       day === 'sunday' ? 'রবিবার' :
                       day === 'monday' ? 'সোমবার' :
                       day === 'tuesday' ? 'মঙ্গলবার' :
                       day === 'wednesday' ? 'বুধবার' :
                       day === 'thursday' ? 'বৃহস্পতিবার' :
                       day === 'friday' ? 'শুক্রবার' : day}
                    </span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
