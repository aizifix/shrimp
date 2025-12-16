'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar during loading
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Simulate loading time (adjust duration as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scrollbar after loading
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      // Cleanup: restore scrollbar if component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {children}
    </>
  );
}
