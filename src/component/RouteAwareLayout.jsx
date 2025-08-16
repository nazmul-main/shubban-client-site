'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function RouteAwareLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full relative z-10 flex-1 pt-32 lg:pt-40">
        {children}
      </main>
      <Footer />
    </>
  );
} 