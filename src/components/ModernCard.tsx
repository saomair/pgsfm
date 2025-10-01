'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  variant?: 'default' | 'glass' | 'solid';
}

export default function ModernCard({ 
  children, 
  className = "", 
  hover = true,
  gradient = false,
  variant = 'default'
}: ModernCardProps) {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white shadow-lg border border-gray-100",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20",
    solid: "bg-white shadow-xl border border-gray-200"
  };
  
  const hoverClasses = hover ? "hover:shadow-2xl hover:-translate-y-2" : "";
  const gradientClasses = gradient ? "bg-gradient-to-br from-white to-slate-50" : "";

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverClasses,
      gradientClasses,
      className
    )}>
      {children}
    </div>
  );
}
