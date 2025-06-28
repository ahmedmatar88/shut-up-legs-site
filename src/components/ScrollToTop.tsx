// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when route changes
    const scrollToTop = () => {
      // Method 1: Window scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' instead of 'smooth' for instant scroll
      });
      
      // Method 2: Direct DOM manipulation as backup
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Target main element if it exists
      const main = document.querySelector('main');
      if (main) {
        main.scrollTop = 0;
      }
      
      // Method 4: Target root element
      const root = document.getElementById('root');
      if (root) {
        root.scrollTop = 0;
      }
    };
    
    // Execute immediately - this is the most important one
    scrollToTop();
    
    // Execute on next tick as backup
    requestAnimationFrame(() => {
      scrollToTop();
    });
    
    // Execute after a tiny delay as final backup
    const timeoutId = setTimeout(scrollToTop, 10);
    
    // Cleanup timeout
    return () => clearTimeout(timeoutId);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;