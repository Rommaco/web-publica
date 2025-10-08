'use client';

import React from 'react';
import { useCounter } from '@/hooks/useCounter';

interface CounterProps {
  end: number;
  duration?: number;
  startDelay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  format?: (num: number) => string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  startDelay = 0,
  suffix = '',
  prefix = '',
  className = '',
  format
}) => {
  const { count, elementRef, isVisible } = useCounter(end, { duration, startDelay });

  const displayValue = format ? format(count) : `${prefix}${count}${suffix}`;

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-500 ${isVisible ? 'counter-enter opacity-100' : 'transform translate-y-4 opacity-0'} ${className}`}
    >
      {displayValue}
    </div>
  );
};

export default Counter;
