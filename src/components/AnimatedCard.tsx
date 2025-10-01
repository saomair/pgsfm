'use client';

import { ReactNode, useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  hover?: boolean;
  stagger?: boolean;
  index?: number;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  interactive?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  animation = 'fade-in-up',
  delay = 0,
  hover = true,
  stagger = false,
  index = 0,
  variant = 'default',
  interactive = false
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay: stagger ? index * 100 + delay : delay
  });

  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-100',
    glass: 'bg-white/10 backdrop-blur-sm border border-white/20',
    gradient: 'bg-gradient-to-br from-white to-slate-50 shadow-lg border border-gray-100',
    elevated: 'bg-white shadow-2xl border border-gray-200'
  };

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in'
  };

  const hoverClasses = hover ? [
    'hover:shadow-2xl',
    'hover:-translate-y-2',
    'hover:scale-105',
    'transition-all duration-300 ease-out'
  ] : [];

  const interactiveClasses = interactive ? [
    'cursor-pointer',
    'active:scale-95',
    'transition-transform duration-150'
  ] : [];

  return (
    <div
      ref={elementRef}
      className={cn(
        'rounded-2xl overflow-hidden',
        variantClasses[variant],
        isVisible && animationClasses[animation],
        hoverClasses,
        interactiveClasses,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transform: isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}
