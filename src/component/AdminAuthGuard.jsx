'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../store/hooks';

export default function AdminAuthGuard({ children }) {
  const router = useRouter();
  const { isAuthenticated, user, loading } = useAppSelector((state) => state.auth);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if user is authenticated and has admin role
    if (!loading) {
      if (!isAuthenticated) {
        // Not authenticated, redirect to home
        router.push('/');
        return;
      }

      if (user?.role !== 'admin') {
        // Not admin, redirect to home
        router.push('/');
        return;
      }

      // User is authenticated and is admin
      setIsAuthorized(true);
    }
  }, [isAuthenticated, user, loading, router]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // Show loading while redirecting
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">রিডাইরেক্ট হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // User is authorized, render admin content
  return children;
} 