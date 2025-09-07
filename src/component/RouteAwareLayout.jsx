'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function RouteAwareLayout({ children }) {
  const pathname = usePathname();
  const [is404Page, setIs404Page] = useState(false);
  
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
  
  if (isAdminRoute || isConstitutionRoute || is404Page) {
    // For admin routes, constitution route, and 404 page, don't show navbar and footer
    return (
      <main className="w-full relative flex-1">
        {children}
      </main>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="w-full relative flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
} 