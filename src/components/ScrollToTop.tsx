// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately when route changes
    const scrollToTop = () => {
      // CRITICAL: Target the correct scroll container (#root)
      const root = document.getElementById('root');
      if (root) {
        root.scrollTop = 0;
        root.scrollLeft = 0;
      }
      
      // Backup methods
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Execute immediately
    scrollToTop();
    
    // Execute on next frame as backup
    requestAnimationFrame(() => {
      scrollToTop();
    });
    
    // Execute after DOM update as final backup
    const timeoutId = setTimeout(scrollToTop, 10);
    
    return () => clearTimeout(timeoutId);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;