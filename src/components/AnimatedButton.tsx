'use client';

import { ReactNode, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animation?: 'none' | 'bounce' | 'pulse' | 'glow' | 'shimmer' | 'wiggle';
  ripple?: boolean;
  magnetic?: boolean;
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  animation = 'none',
  ripple = true,
  magnetic = false
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);

  const baseClasses = 'relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500',
    secondary: 'bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl focus:ring-slate-500',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500',
    ghost: 'text-gray-600 hover:text-green-600 hover:bg-green-50 focus:ring-green-500',
    gradient: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl focus:ring-green-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const animationClasses = {
    none: '',
    bounce: 'hover:animate-bounce-in',
    pulse: 'hover:animate-pulse-glow',
    glow: 'hover:animate-glow',
    shimmer: 'hover:animate-shimmer',
    wiggle: 'hover:animate-wiggle'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: rippleIdRef.current++,
        x,
        y
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }

    onClick?.();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        animationClasses[animation],
        magnetic && isHovered && 'transform scale-105',
        className
      )}
      style={{
        transform: isPressed ? 'scale(0.95)' : isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Ripple Effect */}
      {ripple && ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            transform: 'scale(0)',
            animation: 'ping 0.6s ease-out'
          }}
        />
      ))}

      {/* Loading Spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </span>
      )}

      {/* Button Content */}
      <span className={cn(
        'flex items-center justify-center',
        loading && 'opacity-0'
      )}>
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </span>

      {/* Hover Effect Overlay */}
      <div className={cn(
        'absolute inset-0 bg-white opacity-0 transition-opacity duration-300',
        isHovered && 'opacity-10'
      )} />
    </button>
  );
}
