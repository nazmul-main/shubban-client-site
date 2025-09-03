'use client';

import { useState } from 'react';
import AdminSidebar from '../../src/component/admin/AdminSidebar';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { id: 'Overview', label: 'Overview' },
    { id: 'Categories', label: 'Categories' },
    { id: 'Content Sections', label: 'Content Sections' },
    { id: 'Content Editor', label: 'Content Editor' },
    { id: 'Live Preview', label: 'Live Preview' }
  ];

  const quickActions = [
    { name: 'Edit Hero Section', icon: '✏️' },
    { name: 'Upload Images', icon: '⬆️' },
    { name: 'Preview Homepage', icon: '👁️' },
    { name: 'Manage Bullet Points', icon: '📋' },
    { name: 'Edit Text Content', icon: '📝' },
    { name: 'Change Images', icon: '🖼️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-white rounded-md shadow-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-2 text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm">Homepage</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="p-6">
          {/* Page title and action button */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Home Page Content Management</h1>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <span className="text-white">+</span>
              <span>Add New Section</span>
            </button>
          </div>

          {/* Navigation tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-300 text-gray-900 bg-gray-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Overview content */}
          {activeTab === 'Overview' && (
            <div className="space-y-8">
              {/* Statistics cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Active Sections</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">3</p>
                  <p className="text-sm text-gray-500">Published sections</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Total Categories</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">5</p>
                  <p className="text-sm text-gray-500">Content categories</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Last Updated</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">Today</p>
                  <p className="text-sm text-gray-500">Most recent update</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Page Status</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">Live</p>
                  <p className="text-sm text-gray-500">Homepage published</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
                  <p className="text-sm text-gray-500">Common tasks for homepage management.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{action.icon}</span>
                        <span className="text-sm font-medium text-gray-900">{action.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                  <p className="text-sm text-gray-500">Latest changes to your homepage content.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Hero section updated</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">New image uploaded</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Content section published</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Overview */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Content Overview</h2>
                  <p className="text-sm text-gray-500">Manage your homepage sections and content.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">Published Sections</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm text-gray-700">Hero Section</span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Live</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm text-gray-700">About Section</span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Live</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm text-gray-700">Contact Section</span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Live</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">Draft Sections</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm text-gray-700">News Section</span>
                        <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Draft</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm text-gray-700">Gallery Section</span>
                        <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Draft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== 'Overview' && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab} Content</h3>
                <p className="text-gray-500">This section is under development. Content will be available soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
