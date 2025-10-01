'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LoadingStatesProps {
  isLoading: boolean;
  children: ReactNode;
  skeleton?: ReactNode;
  className?: string;
}

export function LoadingStates({ 
  isLoading, 
  children, 
  skeleton, 
  className = "" 
}: LoadingStatesProps) {
  if (isLoading) {
    return (
      <div className={cn('animate-pulse', className)}>
        {skeleton || <DefaultSkeleton />}
      </div>
    );
  }

  return <>{children}</>;
}

// Default skeleton component
export function DefaultSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
    </div>
  );
}

// Card skeleton
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn('bg-white rounded-2xl shadow-lg p-6 space-y-4', className)}>
      <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
    </div>
  );
}

// Button skeleton
export function ButtonSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn('h-10 bg-gray-200 rounded animate-pulse', className)} />
  );
}

// Image skeleton
export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn('bg-gray-200 rounded animate-pulse', className)} />
  );
}

// Text skeleton
export function TextSkeleton({ 
  lines = 3, 
  className = "" 
}: { 
  lines?: number; 
  className?: string; 
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-4 bg-gray-200 rounded animate-pulse',
            index === lines - 1 && 'w-3/4'
          )}
        />
      ))}
    </div>
  );
}

// Shimmer effect
export function ShimmerEffect({ className = "" }: { className?: string }) {
  return (
    <div className={cn(
      'relative overflow-hidden',
      'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200',
      'bg-[length:200%_100%] animate-shimmer',
      className
    )} />
  );
}

// Pulse loader
export function PulseLoader({ 
  size = 'md', 
  className = "" 
}: { 
  size?: 'sm' | 'md' | 'lg'; 
  className?: string; 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn(
        'bg-green-600 rounded-full animate-pulse',
        sizeClasses[size]
      )} />
    </div>
  );
}

// Spinner loader
export function SpinnerLoader({ 
  size = 'md', 
  className = "" 
}: { 
  size?: 'sm' | 'md' | 'lg'; 
  className?: string; 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn(
        'border-2 border-green-600 border-t-transparent rounded-full animate-spin',
        sizeClasses[size]
      )} />
    </div>
  );
}

// Dots loader
export function DotsLoader({ 
  size = 'md', 
  className = "" 
}: { 
  size?: 'sm' | 'md' | 'lg'; 
  className?: string; 
}) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={cn('flex items-center justify-center space-x-1', className)}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={cn(
            'bg-green-600 rounded-full animate-pulse',
            sizeClasses[size]
          )}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
}

// Progress bar
export function ProgressBar({ 
  progress = 0, 
  className = "" 
}: { 
  progress?: number; 
  className?: string; 
}) {
  return (
    <div className={cn('w-full bg-gray-200 rounded-full h-2', className)}>
      <div
        className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}

// Skeleton grid
export function SkeletonGrid({ 
  items = 6, 
  className = "" 
}: { 
  items?: number; 
  className?: string; 
}) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {Array.from({ length: items }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
