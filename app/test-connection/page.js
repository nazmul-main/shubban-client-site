'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiServer, FiDatabase, FiCheck, FiX } from 'react-icons/fi';

export default function TestConnectionPage() {
  const [testResults, setTestResults] = useState({});
  const [isTesting, setIsTesting] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  const runTests = async () => {
    setIsTesting(true);
    const results = {};

    // Test 1: Basic server connection
    try {
      console.log('Testing basic server connection...');
      const response = await fetch(`${API_URL}/health`);
      results.health = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: response.ok ? await response.json() : null
      };
    } catch (error) {
      results.health = {
        success: false,
        error: error.message,
        code: error.code
      };
    }

    // Test 2: Auth endpoint
    try {
      console.log('Testing auth endpoint...');
      const response = await fetch(`${API_URL}/auth/available-users`);
      results.auth = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText
      };
    } catch (error) {
      results.auth = {
        success: false,
        error: error.message,
        code: error.code
      };
    }

    // Test 3: Database connection (via stats endpoint)
    try {
      console.log('Testing database connection...');
      const response = await fetch(`${API_URL}/stats`);
      results.database = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: response.ok ? await response.json() : null
      };
    } catch (error) {
      results.database = {
        success: false,
        error: error.message,
        code: error.code
      };
    }

    setTestResults(results);
    setIsTesting(false);
  };

  const getStatusIcon = (success) => {
    return success ? (
      <FiCheck className="text-green-500 text-xl" />
    ) : (
      <FiX className="text-red-500 text-xl" />
    );
  };

  const getStatusColor = (success) => {
    return success ? 'text-green-700' : 'text-red-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/login"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <FiArrowLeft className="text-lg" />
            <span>লগইন পেজে ফিরে যান</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🔧 সার্ভার কানেকশন টেস্ট</h1>
          <p className="text-gray-600">এই পেজে সার্ভার এবং ডাটাবেস কানেকশন টেস্ট করা যাবে</p>
        </div>

        {/* Configuration Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FiServer className="mr-2" />
            কনফিগারেশন তথ্য
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">API URL:</p>
              <p className="text-sm text-gray-800 font-mono bg-gray-100 p-2 rounded">{API_URL}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Environment:</p>
              <p className="text-sm text-gray-800">{process.env.NODE_ENV || 'development'}</p>
            </div>
          </div>
        </div>

        {/* Test Button */}
        <div className="text-center mb-6">
          <button
            onClick={runTests}
            disabled={isTesting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            {isTesting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>টেস্ট চলছে...</span>
              </>
            ) : (
              <>
                <FiServer />
                <span>সব টেস্ট চালান</span>
              </>
            )}
          </button>
        </div>

        {/* Test Results */}
        {Object.keys(testResults).length > 0 && (
          <div className="space-y-4">
            {/* Health Check */}
            {testResults.health && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  {getStatusIcon(testResults.health.success)}
                  <span className={`ml-2 ${getStatusColor(testResults.health.success)}`}>
                    সার্ভার স্বাস্থ্য পরীক্ষা
                  </span>
                </h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Status:</span> {testResults.health.success ? 'সফল' : 'ব্যর্থ'}
                  </p>
                  {testResults.health.success ? (
                    <div className="text-sm text-gray-600">
                      <p><span className="font-medium">Response:</span> {JSON.stringify(testResults.health.data, null, 2)}</p>
                    </div>
                  ) : (
                    <div className="text-sm text-red-600">
                      <p><span className="font-medium">Error:</span> {testResults.health.error}</p>
                      {testResults.health.code && (
                        <p><span className="font-medium">Code:</span> {testResults.health.code}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Auth Endpoint */}
            {testResults.auth && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  {getStatusIcon(testResults.auth.success)}
                  <span className={`ml-2 ${getStatusColor(testResults.auth.success)}`}>
                    অথেনটিকেশন এন্ডপয়েন্ট
                  </span>
                </h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Status:</span> {testResults.auth.success ? 'সফল' : 'ব্যর্থ'}
                  </p>
                  {testResults.auth.success ? (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Response:</span> {testResults.auth.status} {testResults.auth.statusText}
                    </p>
                  ) : (
                    <div className="text-sm text-red-600">
                      <p><span className="font-medium">Error:</span> {testResults.auth.error}</p>
                      {testResults.auth.code && (
                        <p><span className="font-medium">Code:</span> {testResults.auth.code}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Database Connection */}
            {testResults.database && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  {getStatusIcon(testResults.database.success)}
                  <span className={`ml-2 ${getStatusColor(testResults.database.success)}`}>
                    <FiDatabase className="mr-1" />
                    ডাটাবেস কানেকশন
                  </span>
                </h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Status:</span> {testResults.database.success ? 'সফল' : 'ব্যর্থ'}
                  </p>
                  {testResults.database.success ? (
                    <div className="text-sm text-gray-600">
                      <p><span className="font-medium">Response:</span> {JSON.stringify(testResults.database.data, null, 2)}</p>
                    </div>
                  ) : (
                    <div className="text-sm text-red-600">
                      <p><span className="font-medium">Error:</span> {testResults.database.error}</p>
                      {testResults.database.code && (
                        <p><span className="font-medium">Code:</span> {testResults.database.code}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Troubleshooting Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🔍 সমস্যা সমাধানের পরামর্শ</h3>
          <ul className="text-sm text-yellow-700 space-y-2">
            <li>• সার্ভার চালু আছে কিনা দেখুন (subban-server-side ফোল্ডারে npm start)</li>
            <li>• MongoDB চালু আছে কিনা দেখুন</li>
            <li>• .env ফাইলে সঠিক কনফিগারেশন আছে কিনা দেখুন</li>
            <li>• পোর্ট 5000 ব্লক করা আছে কিনা দেখুন</li>
            <li>• ফায়ারওয়াল সেটিংস চেক করুন</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
