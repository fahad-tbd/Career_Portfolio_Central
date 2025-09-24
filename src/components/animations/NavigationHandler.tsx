'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset animations when route changes
    const resetAllAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
      animatedElements.forEach((element) => {
        element.classList.remove('animated');
      });

      // Re-trigger animations for elements in viewport
      setTimeout(() => {
        animatedElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            element.classList.add('animated');
          }
        });
      }, 200);
    };

    // Small delay to ensure DOM updates are complete
    const timeout = setTimeout(resetAllAnimations, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
