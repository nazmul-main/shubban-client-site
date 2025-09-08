'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';
import LoadingSpinner from './LoadingSpinner';
import { usePathname, useRouter } from 'next/navigation';

export default function RouteAwareLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [is404Page, setIs404Page] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPath, setLoadingPath] = useState('');
  
  // Check if current route is admin route or constitution route
  const isAdminRoute = pathname.startsWith('/admin');
  const isConstitutionRoute = pathname.startsWith('/constitution');
  
  useEffect(() => {
    // Check if body has page-404 class
    const check404Page = () => {
      setIs404Page(document.body.classList.contains('page-404'));
    };
    
    // Check immediately
    check404Page();
    
    // Set up a MutationObserver to watch for class changes
    const observer = new MutationObserver(check404Page);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Handle route changes with loading state
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(false);
      setLoadingPath('');
    };

    // Listen for route changes
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Clean up loading state when route changes
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoadingPath('');
    }, 100);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timer);
    };
  }, [pathname]);
  
  if (isAdminRoute || isConstitutionRoute || is404Page) {
    // For admin routes, constitution route, and 404 page, don't show navbar and footer
    return (
      <main className="w-full relative flex-1">
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center space-y-4">
              <LoadingSpinner size="lg" />
              <p className="text-white text-sm font-medium">লোড হচ্ছে...</p>
            </div>
          </div>
        )}
        {children}
        <FloatingActionButtons />
      </main>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="w-full relative flex-1">
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center space-y-4">
              <LoadingSpinner size="lg" />
              <p className="text-white text-sm font-medium">লোড হচ্ছে...</p>
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
} 