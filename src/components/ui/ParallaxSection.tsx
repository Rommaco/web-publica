'use client';

import React, { ReactNode, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  fadeOut?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  fadeOut = false
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transform = `translateY(${scrollY * speed}px)`;
  const opacity = fadeOut ? Math.max(0, 1 - scrollY * 0.001) : 1;

  return (
    <div
      className={`transition-opacity duration-300 ${className}`}
      style={{
        transform,
        opacity
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
