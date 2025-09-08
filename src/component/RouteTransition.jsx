'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

const RouteTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);
    
    // Small delay to show loading state
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div className="relative">
      {isTransitioning && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center space-y-3">
            <LoadingSpinner size="lg" />
            <p className="text-white text-sm font-medium">পেজ লোড হচ্ছে...</p>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </div>
  );
};

export default RouteTransition;
