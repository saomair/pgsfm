'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradient?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function ModernButton({
  children,
  variant = 'primary',
  size = 'md',
  gradient = true,
  icon,
  iconPosition = 'right',
  className = "",
  ...props
}: ModernButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: gradient 
      ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl focus:ring-green-500"
      : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500",
    secondary: gradient
      ? "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-xl hover:shadow-2xl focus:ring-slate-500"
      : "bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl focus:ring-slate-500",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500",
    ghost: "text-gray-600 hover:text-green-600 hover:bg-green-50 focus:ring-green-500"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  const iconClasses = icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : '';

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <span className={iconClasses}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className={iconClasses}>{icon}</span>
        )}
      </span>
    </button>
  );
}
