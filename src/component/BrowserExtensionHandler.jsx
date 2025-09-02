'use client';

import { useEffect } from 'react';

const BrowserExtensionHandler = () => {
  useEffect(() => {
    // Handle browser extension attributes that might cause hydration issues
    const handleBrowserExtensions = () => {
      // Remove known browser extension attributes that cause hydration mismatches
      const body = document.body;
      if (body) {
        // Remove common browser extension attributes
        const extensionAttributes = [
          'cz-shortcut-listen',
          'data-extension-id',
          'data-browser-extension'
        ];
        
        extensionAttributes.forEach(attr => {
          if (body.hasAttribute(attr)) {
            body.removeAttribute(attr);
          }
        });
      }
    };

    // Run immediately and also after a short delay to catch late-loading extensions
    handleBrowserExtensions();
    const timeoutId = setTimeout(handleBrowserExtensions, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component doesn't render anything
};

export default BrowserExtensionHandler;
