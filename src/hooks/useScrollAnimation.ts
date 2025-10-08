'use client';

import { useState, useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px', triggerOnce = false } = options;
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-scroll-id');
          if (elementId) {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set(prev).add(elementId));
            } else if (!triggerOnce) {
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.delete(elementId);
                return newSet;
              });
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all elements with data-scroll-id
    const elements = document.querySelectorAll('[data-scroll-id]');
    elements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce]);

  const isVisible = (id: string) => visibleElements.has(id);
  
  const getScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrollY / (documentHeight - windowHeight);
    return Math.min(Math.max(scrollProgress, 0), 1);
  };

  return { isVisible, scrollY, getScrollProgress };
};
