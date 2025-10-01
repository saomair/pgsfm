'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasTriggered(true);
              }
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return {
    elementRef,
    isVisible: triggerOnce ? (hasTriggered || isVisible) : isVisible
  };
}

// Hook for staggered animations
export function useStaggeredAnimation(
  itemCount: number,
  staggerDelay: number = 100,
  options: UseScrollAnimationOptions = {}
) {
  const { elementRef, isVisible } = useScrollAnimation(options);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    if (isVisible) {
      visibleItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newItems = [...prev];
            newItems[index] = true;
            return newItems;
          });
        }, index * staggerDelay);
      });
    }
  }, [isVisible, itemCount, staggerDelay]);

  return {
    elementRef,
    isVisible,
    visibleItems
  };
}

// Hook for parallax scrolling
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    elementRef,
    offset
  };
}

// Hook for typing animation
export function useTypingAnimation(
  text: string,
  speed: number = 50,
  delay: number = 0
) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed]);

  return {
    displayedText,
    isTyping,
    isComplete
  };
}

// Hook for counter animation
export function useCounterAnimation(
  target: number,
  duration: number = 2000,
  delay: number = 0
) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
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
  }, [isAnimating, target, duration]);

  return {
    count,
    isAnimating
  };
}
