'use client';

import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  id: string;
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  id,
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = ''
}) => {
  const { isVisible } = useScrollAnimation();

  const getTransform = () => {
    if (!isVisible(id)) {
      switch (direction) {
        case 'up':
          return 'translateY(50px)';
        case 'down':
          return 'translateY(-50px)';
        case 'left':
          return 'translateX(50px)';
        case 'right':
          return 'translateX(-50px)';
        case 'fade':
          return 'translateY(0)';
        default:
          return 'translateY(50px)';
      }
    }
    return 'translateY(0) translateX(0)';
  };

  const getOpacity = () => {
    return isVisible(id) ? 1 : 0;
  };

  return (
    <div
      data-scroll-id={id}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
