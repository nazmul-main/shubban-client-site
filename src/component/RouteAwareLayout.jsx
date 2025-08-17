'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RouteAwareLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <>
      <Navbar />
      <main className={`w-full relative z-10 flex-1 ${isAdminRoute ? '' : 'pt-32 lg:pt-40'}`}>
        {children}
      </main>
      <Footer />
    </>
  );
} 