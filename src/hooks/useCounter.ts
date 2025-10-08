'use client';

import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  duration?: number;
  startDelay?: number;
  threshold?: number;
}

export const useCounter = (
  end: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, startDelay = 0, threshold = 0.1 } = options;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      const currentElement = elementRef.current;
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible, threshold]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = end;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCount(Math.floor(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, startDelay]);

  return { count, elementRef, isVisible };
};
