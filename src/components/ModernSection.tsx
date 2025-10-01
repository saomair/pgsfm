'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ModernSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ModernSection({
  children,
  className = "",
  background = 'white',
  padding = 'lg'
}: ModernSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gradient-to-b from-white to-slate-50',
    dark: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800',
    gradient: 'bg-gradient-to-b from-slate-50 to-white'
  };
  
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  };

  return (
    <div className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
