'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCurrentUser } from '../store/slices/authSlice';

export default function AuthInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, loading } = useAppSelector((state) => state.auth);

  // Debug logging
  useEffect(() => {
    console.log('AuthInitializer - Current State:', { 
      isAuthenticated, 
      user: user ? { id: user._id, name: user.name, email: user.email, role: user.role } : null, 
      loading,
      pathname 
    });
  }, [isAuthenticated, user, loading, pathname]);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('token');
    console.log('AuthInitializer - Token check:', { token: !!token, isAuthenticated, loading });
    
    if (token && !isAuthenticated && !loading) {
      console.log('AuthInitializer - Dispatching getCurrentUser');
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuthenticated, loading]);

  useEffect(() => {
    // Handle role-based redirects for authenticated users
    if (isAuthenticated && user && !loading) {
      const currentPath = pathname;
      console.log('AuthInitializer - Processing redirects:', { currentPath, userRole: user.role });
      
      // If user is on home page and authenticated, redirect based on role
      if (currentPath === '/') {
        if (user.role === 'admin') {
          console.log('AuthInitializer - Redirecting admin to /admin');
          router.push('/admin');
        } else {
          console.log('AuthInitializer - Redirecting user to /profile');
          router.push('/profile');
        }
      }
      
      // If admin tries to access user pages, redirect to admin
      if (user.role === 'admin' && currentPath === '/profile') {
        console.log('AuthInitializer - Redirecting admin from /profile to /admin');
        router.push('/admin');
      }
      
      // If regular user tries to access admin pages, redirect to profile
      if (user.role !== 'admin' && currentPath.startsWith('/admin')) {
        console.log('AuthInitializer - Redirecting user from admin page to /profile');
        router.push('/profile');
      }
    }
  }, [isAuthenticated, user, loading, pathname, router]);

  // This component doesn't render anything
  return null;
} 