'use client';

import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  stagger?: boolean;
  index?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  stagger = false,
  index = 0,
  duration = 800
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay: stagger ? index * 100 + delay : delay
  });

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in'
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible && animationClasses[animation],
        !isVisible && 'opacity-0 translate-y-8',
        className
      )}
      style={{
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}

// Staggered reveal for multiple items
export function StaggeredReveal({
  children,
  className = "",
  animation = 'fade-in-up',
  staggerDelay = 100,
  threshold = 0.1,
  triggerOnce = true
}: {
  children: ReactNode[];
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in';
  staggerDelay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          threshold={threshold}
          triggerOnce={triggerOnce}
          index={index}
          stagger={true}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// Counter animation component
export function CounterReveal({
  end,
  duration = 2000,
  delay = 0,
  className = ""
}: {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count}
    </div>
  );
}

// Typing animation component
export function TypingReveal({
  text,
  speed = 50,
  delay = 0,
  className = ""
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay
  });

  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setIsTyping(true);
    }
  }, [isVisible]);

  React.useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed]);

  return (
    <div ref={elementRef} className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
