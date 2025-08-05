'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RouteAwareLayout({ children }) {
  const pathname = usePathname();
  
  // Check if current route is admin route
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className={`w-full relative z-10 ${!isAdminRoute ? 'flex-1 pt-32 lg:pt-40' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
} 