import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  animated?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  animated = true,
  className,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-green-800 text-white hover:bg-green-700 focus:ring-green-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-green-600 text-white hover:bg-green-500 focus:ring-green-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white focus:ring-green-800',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };
  
  const animationClass = animated ? 'animate-fade-up' : '';
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        animationClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
